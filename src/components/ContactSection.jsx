import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await push(ref(db, "contacts"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        date: Date.now(),
      });
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("Firebase push error", err);
      alert("Erreur lors de l'envoi : " + err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <section className="cover-background page-title-big-typography ipad-top-space-margin">
        <div className="container">
          <div className="row align-items-center align-items-lg-end justify-content-center extra-very-small-screen g-0">
            <div className="col-xxl-5 col-xl-6 col-lg-7 position-relative page-title-extra-small md-mb-30px md-mt-auto scroll-animate" data-animate-type="fadeInDown">
              <h1 className="text-base-color">Restons en contact</h1>
              <h2 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Une question ? <span className="fw-700 text-highlight d-inline-block">Nous sommes là pour vous aider !<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
            </div>
            <div className="col-lg-5 offset-xxl-2 offset-xl-1 border-start border-2 border-color-base-color ps-40px sm-ps-25px md-mb-auto">
              <span className="d-block w-85 lg-w-100 scroll-animate" data-animate-type="fadeIn">Installation électrique, domotique, caméras de surveillance, climatisation, réseaux et plomberie. Une équipe à votre écoute pour tous vos projets, à Marrakech et ses environs.</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "30px", paddingBottom: "0" }}>
        <div className="container">
          <div className="row justify-content-center align-items-start scroll-animate" data-animate-type="fadeInUp">
            <div className="col-lg-6 pt-8 pb-8 text-center text-sm-start">
              <h6 className="alt-font fw-700 text-dark-gray mb-15px">Marrakech</h6>
              <div className="row row-cols-1 row-cols-sm-2 mb-10">
                <div className="col last-paragraph-no-margin xs-mb-20px">
                  <span className="fs-18 alt-font fw-600 d-block text-dark-gray mb-5px">Volt Construction — Maroc</span>
                  <p className="w-80 lg-w-100">LOT IGUIDER N°48, AVENUE ALLAL EL FASSI,<br /> 40055 Marrakech</p>
                </div>
                <div className="col">
                  <span className="fs-18 alt-font fw-600 d-block text-dark-gray mb-5px">Nous contacter</span>
                  <a href="tel:+212643976917">+212 643-976917</a><br />
                  <a href="mailto:volt.construction90@gmail.com" className="text-decoration-line-bottom text-dark-gray">volt.construction90@gmail.com</a>
                </div>
              </div>
              <h6 className="alt-font fw-700 text-dark-gray mb-15px">Réseaux sociaux</h6>
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col last-paragraph-no-margin xs-mb-20px">
                  <span className="fs-18 alt-font fw-600 d-block text-dark-gray mb-5px">Suivez-nous :</span>
                  <div className="d-flex gap-20px mt-10px">
                    <a href="https://www.instagram.com/volt.construction90" target="_blank" rel="noopener noreferrer" className="text-dark-gray text-dark-gray-hover fs-22 me-15px"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.tiktok.com/@volt_construction" target="_blank" rel="noopener noreferrer" className="text-dark-gray text-dark-gray-hover fs-22 me-15px"><i className="bi bi-tiktok"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61590406484671" target="_blank" rel="noopener noreferrer" className="text-dark-gray text-dark-gray-hover fs-22"><i className="bi bi-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-start contact-form-style-03 position-relative">
              <div className="bg-white box-shadow-double-large p-12 lg-p-9 border-radius-10px">
                <h3 className="fw-700 alt-font text-dark-gray mb-30px sm-mb-20px">Comment pouvons-nous vous aider ?</h3>
                {sent && (
                  <div className="alert alert-success py-2 fs-14">Message envoyé avec succès !</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon text-medium-gray opacity-6"><i className="bi bi-emoji-smile"></i></span>
                    <input className="ps-0 border-radius-0px bg-transparent border-color-extra-medium-gray form-control required" type="text" name="name" placeholder="Votre nom*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon medium-gray opacity-6"><i className="bi bi-envelope"></i></span>
                    <input className="ps-0 border-radius-0px bg-transparent border-color-extra-medium-gray form-control required" type="email" name="email" placeholder="Votre email*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon text-medium-gray opacity-6"><i className="bi bi-telephone"></i></span>
                    <input className="ps-0 border-radius-0px bg-transparent border-color-extra-medium-gray form-control" type="tel" name="phone" placeholder="Votre téléphone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="position-relative form-group form-textarea mt-15px mb-0">
                    <textarea className="ps-0 border-radius-0px bg-transparent border-color-extra-medium-gray form-control" name="comment" placeholder="Votre message" rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required></textarea>
                    <span className="form-icon medium-gray opacity-6"><i className="bi bi-chat-square-dots"></i></span>
                    <button type="submit" className="btn btn-medium btn-base-color btn-round-edge mt-35px fw-600" disabled={loading}>
                      {loading ? "Envoi..." : "Envoyer le message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
