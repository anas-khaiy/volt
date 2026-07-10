import { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await push(ref(db, 'newsletter'), {
        email,
        date: Date.now(),
      });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      console.error('Firebase push error', err);
      alert("Erreur lors de l'inscription : " + err.message);
    }
    setLoading(false);
  };

  return (
    <footer className="footer-light bg-gradient-very-light-gray pb-0">
      <div className="container position-relative pt-3 pb-3 md-mb-15px">
        <div className="position-absolute left-0px top-0px background-no-repeat background-size-100 h-100 w-100 animation-float" style={{ backgroundImage: "url('/images/demo-real-estate-10.png')" }}></div>
        <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center bg-base-color pt-4 pb-4 ps-6 pe-6 lg-p-5 border-radius-6px g-0">
          <div className="col-xl-6 col-lg-7 md-mb-25px sm-mb-15px position-relative text-center text-lg-start">
            <h3 className="alt-font fw-500 text-white ls-minus-1px mb-10px">Abonnez-vous à la <span className="fw-700 text-highlight d-inline-block">newsletter<span className="bg-white h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
            <span className="fs-20 text-white">Suivez-nous pour ne rien manquer de nos actualités.</span>
          </div>
          <div className="col-lg-5 offset-xl-1 position-relative">
            <div className="d-inline-block w-100 newsletter-style-03 position-relative">
              {subscribed ? (
                <div className="text-white fw-600 alt-font fs-16">Merci pour votre abonnement !</div>
              ) : (
                <form onSubmit={handleSubmit} className="position-relative w-100">
                  <input className="input-large bg-white border-color-white w-100 box-shadow-extra-large form-control required" type="email" placeholder="Votre email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <button type="submit" className="btn btn-large text-dark-gray ls-0px left-icon fw-700" aria-label="submit" disabled={loading}>
                    <i className="icon feather icon-feather-mail icon-small text-base-color"></i>
                    <span>{loading ? "..." : "S'abonner"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center py-5">
          <div className="col-lg-4">
            <Link to="/" className="footer-logo mb-10px d-inline-block"><img src="/images/logo2.png" alt="" style={{ height: "30px" }} /></Link>
            <p className="mb-20px">Installation électrique, domotique, climatisation et sécurité à Marrakech et ses environs.</p>
            <div className="elements-social social-icon-style-02">
              <ul className="small-icon dark justify-content-center">
                <li><a className="facebook" href="https://www.facebook.com/profile.php?id=61590406484671" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a className="instagram" href="https://www.instagram.com/volt.construction90" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a className="tiktok" href="https://www.tiktok.com/@volt_construction" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
