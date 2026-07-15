import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

import { Helmet } from "react-helmet-async";

export default function DetailsBlog() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(ref(db, "blogs")).then((snap) => {
      if (snap.exists()) {
        const data = snap.val();
        let found = null;
        Object.keys(data).forEach((key) => {
          if (data[key].slug === slug) found = { id: key, ...data[key] };
        });
        setPost(found);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-base-color" role="status" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column" style={{ minHeight: "100vh" }}>
        <h3 className="alt-font text-dark-gray">Article non trouvé</h3>
        <Link to="/blog" className="btn btn-base-color btn-medium mt-3">Retour au blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title} - Volt Construction Blog</title>
        <meta name="description" content={post.metaDescription || post.content?.slice(0, 160).replace(/<[^>]*>/g, "") || "Article Volt Construction"} />
        {post.focusKeyword && <meta name="keywords" content={post.focusKeyword} />}
        <link rel="canonical" href={"https://volt-construction-app.firebaseapp.com/blog/" + post.slug} />
      </Helmet>
      <section className="top-space-margin">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="fs-18 mb-5 d-inline-block">
                Par <Link to="#" className="text-dark-gray text-decoration-line-bottom">{post.author || "Volt Construction"}</Link> dans{" "}
                <Link to="#" className="text-dark-gray text-decoration-line-bottom">{post.category}</Link> le {new Date(post.date).toLocaleDateString("fr-FR")}
              </span>
              <h1 className="alt-font fw-600 text-dark-gray ls-minus-2px mb-0">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0 pt-md-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img src={post.image} className="w-100 border-radius-6px" alt={post.altText || post.title} style={{ maxHeight: 500, objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-3 col-md-4 text-center sm-mb-30px">
                  <div className="pb-20px">
                    <span className="d-block lh-26">Écrit par</span>
                    <div className="text-dark-gray alt-font fw-500 text-uppercase">{post.author || "Volt Construction"}</div>
                    {post.authorRole && <span className="d-block fs-14">{post.authorRole}</span>}
                  </div>
                </div>
                <div className="offset-lg-1 col-md-8 last-paragraph-no-margin text-center text-md-start">
                  {post.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
