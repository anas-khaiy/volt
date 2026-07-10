import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

export default function Contact() {
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
              <h1 className="text-base-color">Contactez-nous</h1>
              <h2 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Une question ? <span className="fw-700 text-highlight d-inline-block">On est là !<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
            </div>
            <div className="col-lg-5 offset-xxl-2 offset-xl-1 border-start border-2 border-color-base-color ps-40px sm-ps-25px md-mb-auto">
              <span className="d-block w-85 lg-w-100 scroll-animate" data-animate-type="fadeIn">Installation électrique, domotique, climatisation, caméras de surveillance, réseaux et plomberie à Marrakech. Demandez votre devis gratuit.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 position-relative">
              <img src="/images/projet2.jpg" alt="" className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
              <div className="alt-font fw-600 fs-350 lg-fs-275 md-fs-250 sm-fs-200 xs-fs-140 ls-minus-5px xs-ls-minus-2px position-absolute right-minus-50px lg-right-minus-0px bottom-minus-80px md-bottom-minus-60px xs-bottom-minus-40px text-white text-outline text-outline-width-3px">contact</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row justify-content-center align-items-center scroll-animate" data-animate-type="fadeInUp">
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
                <h3 className="fw-700 alt-font text-dark-gray mb-30px sm-mb-20px">Demandez votre devis</h3>
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
                    <input type="hidden" name="redirect" value="" />
                    <button type="submit" className="btn btn-medium btn-base-color btn-round-edge mt-35px fw-600" disabled={loading}>
                      {loading ? "Envoi..." : "Envoyer"}
                    </button>
                    <div className="form-results mt-20px d-none"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-very-light-gray p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108718.38166556775!2d-8.115089722368851!3d31.63134043848203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech!5e0!3m2!1sfr!2sma!4v1690000000000" width="100%" height="400" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Marrakech"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
