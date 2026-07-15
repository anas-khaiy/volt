import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

const PER_PAGE = 12;

import { Helmet } from "react-helmet-async";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(ref(db, "blogs")).then((snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const arr = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        arr.sort((a, b) => (b.date || 0) - (a.date || 0));
        setBlogs(arr);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(blogs.length / PER_PAGE);
  const paged = blogs.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-base-color" role="status" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog & Conseils - Volt Construction | Installation Marrakech</title>
        <meta name="description" content="Conseils en installation électrique, domotique, climatisation et plomberie pour vos projets à Marrakech. Suivez nos articles et actualités." />
        <link rel="canonical" href="https://volt-construction-app.firebaseapp.com/blog" />
      </Helmet>
      <section className="cover-background page-title-big-typography ipad-top-space-margin">
        <div className="container">
          <div className="row align-items-center align-items-lg-end justify-content-center extra-very-small-screen g-0">
            <div className="col-xxl-5 col-xl-6 col-lg-7 position-relative page-title-extra-small md-mb-30px md-mt-auto scroll-animate" data-animate-type="fadeInDown">
              <h1 className="text-base-color">Conseils & actualités</h1>
              <h2 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Suivez nos <span className="fw-700 text-highlight d-inline-block">articles<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span> et conseils.</h2>
            </div>
            <div className="col-lg-5 offset-xxl-2 offset-xl-1 border-start border-2 border-color-base-color ps-40px sm-ps-25px md-mb-auto">
              <span className="d-block w-85 lg-w-100 scroll-animate" data-animate-type="fadeIn">Conseils en installation électrique, domotique, climatisation et plomberie pour vos projets à Marrakech.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden position-relative p-0">
        <div className="container-fluid">
          <div className="row overlap-height">
            <div className="col-12 p-0 position-relative overlap-gap-section">
              <img src="/images/projet7.jpg" alt="Blog Volt Construction - Conseils installation électrique" className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
              <div className="alt-font fw-600 fs-350 lg-fs-275 md-fs-250 xs-fs-160 ls-minus-5px xs-ls-minus-2px position-absolute right-minus-50px lg-right-minus-0px bottom-minus-80px md-bottom-minus-60px xs-bottom-minus-50px text-white text-outline text-outline-width-3px">Blog</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-2 overlap-height sm-pb-50px">
        <div className="container overlap-gap-section">
          <div className="row">
            <div className="col-12">
              <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 justify-content-center scroll-animate" data-animate-type="fadeInUp">
                {paged.map((post) => (
                  <div key={post.id} className="col mb-30px">
                    <div className="card bg-transparent border-0 h-100">
                      <div className="blog-image position-relative overflow-hidden border-radius-6px">
                        <Link to={"/blog/" + post.slug}><img src={post.image} alt={post.altText || post.title} style={{ height: "220px", width: "100%", objectFit: "cover" }} /></Link>
                      </div>
                      <div className="card-body px-0 pb-30px pt-30px xs-pb-15px">
                        <span className="fs-14 text-uppercase"><Link to="#" className="text-dark-gray fw-500 categories-text">{post.category}</Link><Link to="#" className="blog-date">{new Date(post.date).toLocaleDateString("fr-FR")}</Link></span>
                        <Link to={"/blog/" + post.slug} className="card-title alt-font fw-600 lh-30 text-dark-gray d-inline-block w-95 fs-19">{post.title}</Link>
                      </div>
                    </div>
                  </div>
                ))}
                {paged.length === 0 && (
                  <div className="col-12 text-center text-muted py-5 fs-18">Aucun article pour le moment.</div>
                )}
              </div>
              {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center gap-3 mt-4 mb-5">
                  <button className="btn btn-sm btn-outline-dark fw-600" disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
                  <span className="fs-14 fw-600">{page} / {totalPages}</span>
                  <button className="btn btn-sm btn-outline-dark fw-600" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Suivant</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
