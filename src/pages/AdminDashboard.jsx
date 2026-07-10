import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, push, get, remove } from "firebase/database";

const CATEGORIES = ["Électricité", "Domotique", "Climatisation", "Sécurité", "Plomberie", "Réseaux"];

const CATEGORY_IMAGES = {
  "Électricité": "/images/service-electrique.jpg",
  "Domotique": "/images/service-domotique.webp",
  "Climatisation": "/images/service-climatisation.jpg",
  "Sécurité": "/images/service-cameras.jpg",
  "Plomberie": "/images/service-plomberie.jpg",
  "Réseaux": "/images/service-reseaux.jpg",
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("blogs");
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({ title: "", category: "", content: "", image: "" });
  const [page, setPage] = useState(1);
  const [filterCat, setFilterCat] = useState("");
  const perPage = 6;

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (!u) { navigate("/admin"); return; }
      setUser(u);
      fetchAll();
    });
    return () => unsub();
  }, []);

  async function fetchAll() {
    setLoading(true);
    const results = await Promise.allSettled([
      fetchBlogs(),
      fetchContacts(),
      fetchNewsletters(),
    ]);
    results.forEach((r) => {
      if (r.status === "rejected") console.error("Fetch error", r.reason);
    });
    setLoading(false);
  }

  function snapshotToArray(snapshot) {
    if (!snapshot.exists()) return [];
    const data = snapshot.val();
    return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  }

  async function fetchBlogs() {
    const snap = await get(ref(db, "blogs"));
    const arr = snapshotToArray(snap);
    arr.sort((a, b) => (b.date || 0) - (a.date || 0));
    setBlogs(arr);
  }

  async function fetchContacts() {
    const snap = await get(ref(db, "contacts"));
    const arr = snapshotToArray(snap);
    arr.sort((a, b) => (b.date || 0) - (a.date || 0));
    setContacts(arr);
  }

  async function fetchNewsletters() {
    const snap = await get(ref(db, "newsletter"));
    const arr = snapshotToArray(snap);
    arr.sort((a, b) => (b.date || 0) - (a.date || 0));
    setNewsletters(arr);
  }

  async function handleAddBlog(e) {
    e.preventDefault();
    if (!form.title || !form.category || !form.content) return;
    const newBlog = {
      title: form.title,
      category: form.category,
      content: form.content,
      image: form.image || "/images/blog1.webp",
      date: Date.now(),
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    };
    await push(ref(db, "blogs"), newBlog);
    setForm({ title: "", category: "", content: "", image: "" });
    fetchBlogs();
  }

  async function handleDeleteBlog(id) {
    if (!confirm("Supprimer cet article ?")) return;
    await remove(ref(db, `blogs/${id}`));
    fetchBlogs();
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/admin");
  }

  const filtered = blogs.filter((b) => !filterCat || b.category === filterCat);
  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  function formatDate(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    return d.toLocaleDateString("fr-FR");
  }

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-base-color" role="status" />
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="row">
        <div className="col-12 bg-white border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img src="/images/logo2.png" alt="" style={{ height: 35 }} />
            <span className="alt-font fw-700 fs-18 text-dark-gray">Admin Volt Construction</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fs-14 text-medium-gray">{user?.email}</span>
            <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>Déconnexion</button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 px-4">
          <ul className="nav nav-tabs alt-font fw-600">
            <li className="nav-item">
              <button className={`nav-link ${tab === "blogs" ? "active" : ""}`} onClick={() => { setTab("blogs"); setPage(1); }}>Blogs</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${tab === "contacts" ? "active" : ""}`} onClick={() => setTab("contacts")}>Contacts ({contacts.length})</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${tab === "newsletter" ? "active" : ""}`} onClick={() => setTab("newsletter")}>Newsletter ({newsletters.length})</button>
            </li>
          </ul>
        </div>
      </div>

      {tab === "blogs" && (
        <div className="row mt-4 px-4">
          <div className="col-lg-4 mb-4">
            <div className="bg-white p-4 border-radius-10px box-shadow-medium">
              <h5 className="alt-font fw-700 text-dark-gray mb-3">Nouvel article</h5>
              <form onSubmit={handleAddBlog}>
                <div className="mb-3">
                  <label className="form-label fs-14 fw-600">Titre</label>
                  <input className="form-control" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-14 fw-600">Catégorie</label>
                  <select className="form-select" value={form.category} onChange={(e) => {
                    const cat = e.target.value;
                    setForm({ ...form, category: cat, image: CATEGORY_IMAGES[cat] || form.image });
                  }} required>
                    <option value="">Choisir</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-14 fw-600">Image (URL)</label>
                  <input className="form-control" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/images/blog1.webp" />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-14 fw-600">Contenu</label>
                  <textarea className="form-control" rows="5" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-base-color btn-medium w-100 fw-600">Publier</button>
              </form>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="bg-white p-4 border-radius-10px box-shadow-medium">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <h5 className="alt-font fw-700 text-dark-gray mb-0">Articles ({filtered.length})</h5>
                <select className="form-select w-auto" value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setPage(1); }}>
                  <option value="">Toutes les catégories</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Titre</th>
                      <th>Catégorie</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paged.map((b) => (
                      <tr key={b.id}>
                        <td className="fw-600">{b.title}</td>
                        <td><span className="badge bg-base-color-transparent text-base-color">{b.category}</span></td>
                        <td className="fs-14">{formatDate(b.date)}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteBlog(b.id)}>Supprimer</button>
                        </td>
                      </tr>
                    ))}
                    {paged.length === 0 && (
                      <tr><td colSpan="4" className="text-center text-muted py-4">Aucun article</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
              {totalPages > 1 && (
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button className="btn btn-sm btn-outline-dark" disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
                  <span className="d-flex align-items-center px-3 fs-14">{page} / {totalPages}</span>
                  <button className="btn btn-sm btn-outline-dark" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Suivant</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === "contacts" && (
        <div className="row mt-4 px-4">
          <div className="col-12">
            <div className="bg-white p-4 border-radius-10px box-shadow-medium">
              <h5 className="alt-font fw-700 text-dark-gray mb-3">Messages de contact ({contacts.length})</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Téléphone</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c) => (
                      <tr key={c.id}>
                        <td className="fw-600">{c.name}</td>
                        <td><a href={`mailto:${c.email}`} className="text-decoration-none">{c.email}</a></td>
                        <td>{c.phone || "—"}</td>
                        <td style={{ maxWidth: 300 }} className="text-truncate">{c.message}</td>
                        <td className="fs-14">{formatDate(c.date)}</td>
                      </tr>
                    ))}
                    {contacts.length === 0 && (
                      <tr><td colSpan="5" className="text-center text-muted py-4">Aucun message</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "newsletter" && (
        <div className="row mt-4 px-4">
          <div className="col-12">
            <div className="bg-white p-4 border-radius-10px box-shadow-medium">
              <h5 className="alt-font fw-700 text-dark-gray mb-3">Emails newsletter ({newsletters.length})</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Email</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletters.map((n) => (
                      <tr key={n.id}>
                        <td><a href={`mailto:${n.email}`} className="text-decoration-none fw-600">{n.email}</a></td>
                        <td className="fs-14">{formatDate(n.date)}</td>
                      </tr>
                    ))}
                    {newsletters.length === 0 && (
                      <tr><td colSpan="2" className="text-center text-muted py-4">Aucun email</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
