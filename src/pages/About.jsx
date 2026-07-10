import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

export default function About() {
  return (
    <>
      <section className="cover-background page-title-big-typography ipad-top-space-margin">
        <div className="container">
          <div className="row align-items-center align-items-lg-end justify-content-center extra-very-small-screen g-0">
            <div className="col-xxl-5 col-xl-6 col-lg-7 position-relative page-title-extra-small md-mb-30px md-mt-auto scroll-animate" data-animate-type="fadeInDown">
              <h1 className="text-base-color">À propos de Volt Construction</h1>
              <h2 className="alt-font text-dark-gray fw-500 mb-0 ls-minus-1px">Bienvenue chez <span className="fw-700 text-highlight d-inline-block">Volt Construction<span className="bg-base-color h-10px bottom-3px opacity-3 separator-animation"></span></span></h2>
            </div>
            <div className="col-lg-5 offset-xxl-2 offset-xl-1 border-start border-2 border-color-base-color ps-40px sm-ps-25px md-mb-auto">
              <span className="d-block w-85 lg-w-100 scroll-animate" data-animate-type="fadeIn">Installation électrique, domotique, climatisation, caméras de surveillance, réseaux et plomberie pour riads, villas, studios et bureaux à Marrakech.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0 position-relative">
              <img src="/images/slide1.webp" alt="" className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
              <div className="alt-font fw-600 fs-350 lg-fs-275 md-fs-250 xs-fs-160 ls-minus-5px xs-ls-minus-2px position-absolute right-minus-50px lg-right-0px bottom-minus-80px md-bottom-minus-60px xs-bottom-minus-40px text-white text-outline text-outline-width-3px">Volt</div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 position-relative align-self-end">
              <figure className="position-relative m-0 scroll-animate" data-animate-type="zoomIn">
                <img src="/images/slide2.webp" className="w-100 border-radius-6px" alt="" style={{ height: "700px", objectFit: "cover" }} />
                <figcaption className="w-180px bg-white p-30px pt-20px border-radius-8px position-absolute top-150px right-minus-30px lg-right-0px overflow-hidden box-shadow-medium animation-float">
                  <span className="alt-font fs-100 fw-700 text-white d-block position-relative z-index-1">10</span>
                  <div className="alt-font fw-500 fs-24 d-block text-dark-gray lh-26 ls-minus-05px">Années <span className="fw-700">d'expérience.</span></div>
                  <div className="h-150px w-150px border-radius-100 bg-base-color position-absolute left-minus-10px top-minus-50px z-index-0"></div>
                </figcaption>
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 mb-8 order-1 order-lg-2 md-mb-40px scroll-animate" data-animate-type="fadeInRight">
              <span className="fs-20 d-inline-block mb-15px text-base-color">Installation électrique & domotique</span>
              <h2 className="alt-font fw-500 text-dark-gray ls-minus-1px">On installe, <span className="fw-700 text-highlight d-inline-block">vous profitez.<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
              <p className="w-80 lg-w-100">Installation électrique, domotique, climatisation, réseaux et plomberie pour riads, villas, studios, appartements et bureaux. Des solutions fiables, pensées pour chaque type d'espace.</p>
              <div className="pt-20px pb-20px ps-30px pe-30px xs-p-20px border border-color-extra-medium-gray border-radius-6px mb-15px icon-with-text-style-08 w-80 lg-w-100">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon me-10px">
                    <i className="bi bi-people icon-very-medium text-base-color"></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="alt-font fw-600 text-dark-gray d-block fs-18 lh-26">50+ clients nous font confiance.</span>
                  </div>
                </div>
              </div>
              <p className="fs-13 mb-35px xs-lh-20">Notre expertise au service de votre confort, <span className="text-dark-gray text-decoration-line-bottom">où que vous soyez</span> à Marrakech et ses environs.</p>
              <Link to="/services" className="btn btn-dark-gray btn-medium btn-round-edge me-25px">NOS SERVICES</Link>
              <Link to="/contact" className="btn btn-large btn-link btn-hover-animation-switch text-dark-gray p-0">
                <span>
                  <span className="btn-text">NOUS CONTACTER</span>
                  <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-very-light-gray">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center scroll-animate" data-animate-type="fadeInDown">
              <h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">La qualité avant <span className="fw-700 text-highlight d-inline-block">tout<span className="bg-base-color h-10px bottom-5px opacity-3 separator-animation"></span></span></h3>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-5 xs-mb-8 scroll-animate" data-animate-type="fadeInUp">
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-16 lg-p-14 border-radius-10px last-paragraph-no-margin h-100">
                <div className="feature-box-icon mb-20px">
                  <img src="/images/demo-real-estate-about-03.png" className="h-80px" alt="" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font fw-600 text-dark-gray fs-20 d-inline-block mb-5px">Installations aux normes</span>
                  <p>Chaque projet respecte les normes de sécurité électrique en vigueur.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-16 lg-p-14 border-radius-10px last-paragraph-no-margin h-100">
                <div className="feature-box-icon mb-20px">
                  <img src="/images/demo-real-estate-about-04.png" className="h-80px" alt="" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font fw-600 text-dark-gray fs-20 d-inline-block mb-5px">Techniciens certifiés</span>
                  <p>Une équipe qualifiée intervient sur chaque chantier.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-07 transition-inner-all xs-mb-30px">
              <div className="bg-white feature-box box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-16 lg-p-14 border-radius-10px last-paragraph-no-margin h-100">
                <div className="feature-box-icon mb-20px">
                  <img src="/images/demo-real-estate-about-05.png" className="h-80px" alt="" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font fw-600 text-dark-gray fs-20 d-inline-block mb-5px">Garantie complète</span>
                  <p>Tous nos travaux bénéficient d'une garantie complète.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-07 transition-inner-all">
              <div className="bg-white feature-box box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-16 lg-p-14 border-radius-10px last-paragraph-no-margin h-100">
                <div className="feature-box-icon mb-20px">
                  <img src="/images/demo-real-estate-about-06.png" className="h-80px" alt="" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font fw-600 text-dark-gray fs-20 d-inline-block mb-5px">Suivi personnalisé</span>
                  <p>Accompagnement du diagnostic à la finition.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center scroll-animate" data-animate-type="fadeInUp">
            <div className="col-auto icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-patch-check icon-medium text-base-color"></i>
                </div>
                <div className="feature-box-content alt-font text-dark-gray fs-22 fw-600">
                  Nous ne cessons de grandir ! Aujourd'hui, <span className="text-decoration-line-bottom">plus de 50 clients satisfaits.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative overflow-hidden pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-end md-mb-50px">
              <figure className="position-relative m-0 scroll-animate" data-animate-type="zoomIn">
                <img src="/images/slide3.webp" className="w-90 border-radius-6px" alt="" style={{ maxHeight: "450px", objectFit: "cover" }} />
                <figcaption className="position-absolute bg-dark-gray border-radius-10px box-shadow-quadruple-large bottom-100px xs-bottom-minus-20px left-minus-30px md-left-0px w-230px xs-w-210px text-center last-paragraph-no-margin animation-float">
                  <div className="bg-white pt-35px pb-35px border-radius-8px mb-15px position-relative top-minus-1px">
                    <h1 className="fw-700 ls-minus-3px text-dark-gray mb-0 alt-font">50</h1>
                    <span className="text-dark-gray d-block alt-font fw-600">Avis clients</span>
                    <div className="d-inline-block fs-12 text-uppercase bg-base-color ps-20px pe-20px lh-30 text-white border-radius-100px box-shadow-large">Satisfaits</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-10 text-center text-lg-start scroll-animate" data-animate-type="fadeInRight">
              <span className="fs-20 d-inline-block mb-15px text-base-color">Avis clients</span>
              <h2 className="alt-font fw-500 text-dark-gray ls-minus-1px">Ce que nos <span className="fw-700 text-highlight d-inline-block">clients disent<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
              <div className="swiper position-relative" data-slider-options='{ "autoHeight": true, "loop": true, "allowTouchMove": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "effect": "fade" }'>
                <div className="swiper-wrapper mb-40px">
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 lg-w-100">Un service impeccable, une équipe à l'écoute. Installation électrique réalisée avec soin et dans les délais. Je recommande vivement.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Youssef</span> Benali</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 lg-w-100">Très satisfait de la domotique installée chez moi. Tout fonctionne parfaitement, le suivi a été excellent du début à la fin.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Fatima</span> Zahra</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 lg-w-100">Professionnalisme et qualité au rendez-vous. La climatisation a été installée rapidement et le rapport qualité-prix est au top.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Omar</span> Tazi</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <div className="slider-one-slide-prev-1 swiper-button-prev slider-navigation-style-04 border border-color-extra-medium-gray"><i className="fa-solid fa-arrow-left icon-small text-dark-gray"></i></div>
                  <div className="slider-one-slide-next-1 swiper-button-next slider-navigation-style-04 border border-color-extra-medium-gray"><i className="fa-solid fa-arrow-right icon-small text-dark-gray"></i></div>
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
