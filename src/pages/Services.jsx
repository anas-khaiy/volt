import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Nos services - Volt Construction | Électricité & Domotique Marrakech</title>
        <meta name="description" content="Installation électrique, domotique, caméras de surveillance, climatisation, réseaux fibre optique et plomberie pour riads, villas, studios et bureaux à Marrakech." />
        <link rel="canonical" href="https://volt-construction-app.firebaseapp.com/services" />
      </Helmet>
      <section className="cover-background page-title-big-typography ipad-top-space-margin">
        <div className="container">
          <div className="row align-items-center align-items-lg-end justify-content-center extra-very-small-screen g-0">
            <div className="col-xxl-5 col-xl-6 col-lg-7 position-relative page-title-extra-small md-mb-30px md-mt-auto scroll-animate" data-animate-type="fadeInDown">
              <h1 className="text-base-color">Nos services</h1>
              <h2 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Des solutions complètes en <span className="fw-700 text-highlight d-inline-block">installation technique.<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
            </div>
            <div className="col-lg-5 offset-xxl-2 offset-xl-1 border-start border-2 border-color-base-color ps-40px sm-ps-25px md-mb-auto">
              <span className="d-block w-85 lg-w-100 scroll-animate" data-animate-type="fadeIn">Installation électrique, domotique, climatisation, caméras de surveillance, réseaux et plomberie à Marrakech.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden position-relative p-0">
        <div className="opacity-very-light bg-dark-gray z-index-1"></div>
        <div className="container-fluid">
          <div className="row overlap-height">
            <div className="col-12 p-0 position-relative overlap-gap-section">
              <img src="/images/projet5.jpeg" alt="Services Volt Construction - Installation électrique et domotique" className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
              <div className="alt-font fw-600 fs-350 lg-fs-275 md-fs-250 xs-fs-160 position-absolute right-minus-170px lg-right-0px bottom-50px md-bottom-minus-60px xs-bottom-minus-50px text-white text-outline ls-minus-5px text-outline-width-2px z-index-2">services</div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0 border-top border-color-extra-medium-gray">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 justify-content-center g-0 bg-white scroll-animate" data-animate-type="fadeInUp">
            <div className="col d-flex align-items-center text-center text-lg-start icon-with-text-style-04 border-end md-border-start md-border-bottom sm-border-start-0 xs-border-end-0 border-color-extra-medium-gray position-relative xs-pt-60px xs-pb-60px">
              <span className="fs-26 lh-30 d-inline-block alt-font text-dark-gray fw-600 mb-0 w-100 sm-w-85 mx-auto">Quel type de <span className="fw-600 text-highlight">bien<span className="bg-base-color h-6px bottom-3px opacity-3 separator-animation"></span></span> ?</span>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-bottom sm-border-end-0 border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <Link to="/contact" className="d-block">
                    <img src="/images/demo-real-estate-icon-apartment.svg" alt="Icône riad" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/contact" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">RIAD</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-bottom xs-border-end-0 border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <Link to="/contact" className="d-block">
                    <img src="/images/demo-real-estate-icon-condominium.svg" alt="Icône villa" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/contact" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">VILLA</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-start sm-border-end-0 sm-border-start-0 sm-border-bottom border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <Link to="/contact" className="d-block">
                    <img src="/images/demo-real-estate-icon-home.svg" alt="Icône studio" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/contact" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">STUDIO</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end xs-border-end-0 xs-border-bottom border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <Link to="/contact" className="d-block">
                    <img src="/images/demo-real-estate-icon-office.svg" alt="Icône appartement" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/contact" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">APPARTEMENT</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-color-extra-medium-gray md-border-end sm-border-end-0 position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <Link to="/contact" className="d-block">
                    <img src="/images/demo-real-estate-icon-shop.svg" alt="Icône bureau" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/contact" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">BUREAU</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-very-light-gray">
        <div className="container">
          <div className="row align-items-center mb-6 xs-mb-8">
            <div className="col-md-8 text-center text-md-start sm-mb-20px scroll-animate" data-animate-type="fadeInLeft">
              <h3 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Nos services <span className="fw-700 text-highlight d-inline-block">d'installation<span className="bg-base-color h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
            </div>
            <div className="col-md-4 scroll-animate" data-animate-type="fadeInRight">
              <div className="d-flex justify-content-center justify-content-md-end">
                <Link to="/contact" className="fw-600 alt-font text-dark-gray text-dark-gray-hover d-flex align-items-center">Demander un devis<span className="d-flex align-items-center justify-content-center bg-dark-gray h-40px w-40px text-center rounded-circle fs-16 text-white ms-10px"><i className="feather icon-feather-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 justify-content-center scroll-animate" data-animate-type="fadeInUp">
            <div className="col mb-30px">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-electrique.jpg" alt="Service installation électrique par Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Installation électrique</h4>
                  </div>
                  <p className="mb-0">Mise aux normes, câblage et sécurité pour tous types de biens.</p>
                </div>
              </div>
            </div>
            <div className="col mb-30px">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-domotique.webp" alt="Service domotique maison intelligente Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Domotique</h4>
                  </div>
                  <p className="mb-0">Contrôlez éclairage, volets et sécurité depuis votre smartphone.</p>
                </div>
              </div>
            </div>
            <div className="col mb-30px">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-cameras.jpg" alt="Service caméras de surveillance Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Caméras de surveillance</h4>
                  </div>
                  <p className="mb-0">Protégez votre bien 24h/24 avec un système fiable et discret.</p>
                </div>
              </div>
            </div>
            <div className="col lg-mb-30px">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-climatisation.jpg" alt="Service climatisation Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Climatisation</h4>
                  </div>
                  <p className="mb-0">Installation et entretien de systèmes climatisation adaptés à chaque espace.</p>
                </div>
              </div>
            </div>
            <div className="col sm-mb-30px">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-reseaux.jpg" alt="Service réseaux wifi fibre optique Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Réseaux (wifi, fibre optique)</h4>
                  </div>
                  <p className="mb-0">Connexion rapide et stable dans toute votre maison ou bureau.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="border-radius-6px overflow-hidden box-shadow-large bg-white">
                <img src="/images/service-plomberie.jpg" alt="Service plomberie Volt Construction Marrakech" className="w-100" style={{ height: 240, objectFit: "cover" }} />
                <div className="p-35px md-p-25px">
                  <div className="d-flex align-items-center mb-10px">
                    <h4 className="alt-font text-dark-gray fw-700 fs-22 mb-0">Plomberie</h4>
                  </div>
                  <p className="mb-0">Installation et réparation plomberie, fiable et durable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden position-relative overlap-height pb-30px">
        <div className="container overlap-gap-section">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 md-mb-50px">
              <span className="fs-20 d-inline-block mb-15px text-base-color scroll-animate" data-animate-type="fadeInLeft">Comment ça marche</span>
              <h2 className="alt-font fw-500 text-dark-gray ls-minus-1px sm-w-80 xs-w-100 scroll-animate" data-animate-type="fadeInDown">Nos étapes pour un <span className="fw-700 text-highlight">projet réussi.<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
              <div className="row row-cols-1 mt-50px scroll-animate" data-animate-type="fadeInUp">
                <div className="col-12 process-step-style-05 position-relative hover-box">
                  <div className="process-step-item d-flex">
                    <div className="process-step-icon-wrap position-relative">
                      <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-55px w-55px bg-base-color-light alt-font fs-15 fw-600 position-relative">
                        <span className="number position-relative z-index-1 text-dark-gray">01</span>
                        <div className="box-overlay bg-base-color rounded-circle"></div>
                      </div>
                      <span className="progress-step-separator bg-extra-medium-gray"></span>
                    </div>
                    <div className="process-content ps-35px last-paragraph-no-margin mb-30px">
                      <span className="text-dark-gray fs-19 alt-font mb-5px fw-600 d-block">Demande de devis</span>
                      <p className="w-80 lg-w-100">Contactez-nous pour décrire votre projet et obtenir un devis gratuit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 process-step-style-05 position-relative hover-box">
                  <div className="process-step-item d-flex">
                    <div className="process-step-icon-wrap position-relative">
                      <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-55px w-55px bg-base-color-light alt-font fs-15 fw-600 position-relative">
                        <span className="number position-relative z-index-1 text-dark-gray">02</span>
                        <div className="box-overlay bg-base-color rounded-circle"></div>
                      </div>
                      <span className="progress-step-separator bg-extra-medium-gray"></span>
                    </div>
                    <div className="process-content ps-35px last-paragraph-no-margin mb-30px">
                      <span className="text-dark-gray fs-19 alt-font mb-5px fw-600 d-block">Visite & diagnostic</span>
                      <p className="w-80 lg-w-100">Nous évaluons vos besoins et inspectons le lieu pour préparer l'installation.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 process-step-style-05 position-relative hover-box">
                  <div className="process-step-item d-flex">
                    <div className="process-step-icon-wrap position-relative">
                      <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-55px w-55px bg-base-color-light alt-font fs-15 fw-600 position-relative">
                        <span className="number position-relative z-index-1 text-dark-gray">03</span>
                        <div className="box-overlay bg-base-color rounded-circle"></div>
                      </div>
                    </div>
                    <div className="process-content ps-35px last-paragraph-no-margin mb-30px">
                      <span className="text-dark-gray fs-19 alt-font mb-5px fw-600 d-block">Installation & suivi</span>
                      <p className="w-80 lg-w-100">Nos techniciens réalisent l'installation et assurent un suivi complet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 position-relative">
              <figure className="position-relative m-0 scroll-animate" data-animate-type="zoomIn">
                <img src="/images/service-electrique.jpg" alt="Processus installation électrique Volt Construction" className="w-100" style={{ maxHeight: "600px", objectFit: "cover" }} />
              </figure>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-50px scroll-animate" data-animate-type="fadeInUp">
            <div className="col-12 text-center align-items-center">
              <div className="bg-white border border-1 border-color-extra-medium-gray box-shadow-extra-large alt-font fs-12 fw-700 text-dark-gray text-uppercase border-radius-30px ps-20px pe-20px me-10px sm-me-0 sm-m-5px d-inline-block align-middle">Pourquoi nous choisir</div>
              <div className="fs-22 text-dark-gray d-block d-sm-inline-block align-middle alt-font fw-600">Des centaines de projets réalisés à Marrakech et ses environs.</div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
