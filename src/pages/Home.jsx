import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

import { Helmet } from "react-helmet-async";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    get(ref(db, "blogs")).then((snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const arr = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        arr.sort((a, b) => (b.date || 0) - (a.date || 0));
        setBlogs(arr.slice(0, 4));
      }
    }).catch(console.error);
  }, []);
  useEffect(() => {
    const el = swiperRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      if (el.swiper) el.swiper.destroy(true, true);
      const bg = el.getAttribute('data-slider-options');
      if (bg && typeof Swiper === 'function') {
        new Swiper(el, JSON.parse(bg));
      }
      const $ = window.$;
      if ($ && window.TweenMax) {
        $('.magic-cursor-wrapper').css('display', 'block').addClass('magic-drag-cursor');
        $('.magic-cursor').off('mouseenter mouseleave');
        $('.magic-cursor').mouseenter(function () {
          window.TweenMax.to('#ball-cursor', 0.3, { borderWidth: '2px', scale: 1 });
          window.TweenMax.to('#ball-cursor-loader', 0.2, { borderWidth: '2px', top: 2, left: 2 });
          $('.magic-cursor-wrapper').addClass('sliderhover');
        });
        $('.magic-cursor').mouseleave(function () {
          window.TweenMax.to('#ball-cursor', 0.3, { borderWidth: '2px', scale: 1, borderColor: 'transparent', opacity: 1 });
          window.TweenMax.to('#ball-cursor-loader', 0.2, { borderWidth: '2px', top: 0, left: 0 });
          $('.magic-cursor-wrapper').removeClass('sliderhover');
        });
      }
    }, 100);
    return () => { clearTimeout(timer); if (el.swiper) el.swiper.destroy(true, true); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Volt Construction - Électricité & Domotique à Marrakech</title>
        <meta name="description" content="Installation électrique, domotique, climatisation, caméras de surveillance, réseaux et plomberie pour riads, villas, studios et bureaux à Marrakech. Devis gratuit." />
        <link rel="canonical" href="https://volt-construction-app.firebaseapp.com/" />
      </Helmet>
      <section className="p-0 top-space-margin">
        <div ref={swiperRef} className="swiper full-screen md-h-600px sm-h-500px swiper-number-pagination-style-01 magic-cursor drag-cursor" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-number", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }' data-number-pagination="1" style={{ cursor: 'none' }}>
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/slide1.webp" alt="Volt Construction - Installation électrique riad Marrakech" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="container h-100" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center h-100">
                  <div className="col-md-8 position-relative text-white scroll-animate" data-animate-type="fadeIn">
                    <span className="fs-20 d-block mb-15px">Électricité, charme préservé</span>
                    <div className="alt-font fs-110 lg-fs-90 lh-90 lg-lh-80 mb-45px sm-mb-25px w-80 xs-w-100 ls-minus-2px">Confort moderne, <span className="fw-700">âme intacte</span></div>
                    <Link to="/contact" className="btn btn-white btn-large border-1 btn-round-edge btn-box-shadow me-15px xs-mt-10px xs-mb-10px">Nous contacter</Link>
                    <Link to="/services" className="btn btn-transparent-white-light border-1 btn-large btn-round-edge fw-500 xs-mt-10px xs-mb-10px">Nos services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/slide2.webp" alt="Volt Construction - Villa connectée et sécurisée" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="container h-100" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center h-100">
                  <div className="col-md-8 position-relative text-white scroll-animate" data-animate-type="fadeIn">
                    <span className="fs-20 d-block mb-15px">Électricité intelligente</span>
                    <div className="alt-font fs-110 lg-fs-90 lh-90 lg-lh-80 mb-45px sm-mb-25px w-80 xs-w-100 ls-minus-2px">Villa connectée, <span className="fw-700">sécurisée</span></div>
                    <Link to="/contact" className="btn btn-white btn-large border-1 btn-round-edge btn-box-shadow me-15px xs-mt-10px xs-mb-10px">Nous contacter</Link>
                    <Link to="/services" className="btn btn-transparent-white-light border-1 btn-large btn-round-edge fw-500 xs-mt-10px xs-mb-10px">Nos services</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/slide3.webp" alt="Volt Construction - Électricité optimisée petit espace" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="container h-100" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center h-100">
                  <div className="col-md-8 position-relative text-white scroll-animate" data-animate-type="fadeIn">
                    <span className="fs-20 d-block mb-15px">Électricité optimisée</span>
                    <div className="alt-font fs-110 lg-fs-90 lh-90 lg-lh-80 mb-45px sm-mb-25px w-80 xs-w-100 ls-minus-2px">Petit espace, <span className="fw-700">grand confort</span></div>
                    <Link to="/contact" className="btn btn-white btn-large border-1 btn-round-edge btn-box-shadow me-15px xs-mt-10px xs-mb-10px">Nous contacter</Link>
                    <Link to="/services" className="btn btn-transparent-white-light border-1 btn-large btn-round-edge fw-500 xs-mt-10px xs-mb-10px">Nos services</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-0">
              <div className="col-12 position-relative">
                <div className="swiper-pagination left-0 text-start swiper-pagination-clickable swiper-number fs-14 alt-font ls-05px"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-50px position-relative">
              <figure className="position-relative mb-0 overflow-hidden border-radius-6px scroll-animate" data-animate-type="zoomIn">
                <img src="/images/service-electrique.jpg" alt="Installation électrique par Volt Construction à Marrakech" className="w-100" style={{ maxHeight: "580px", objectFit: "cover" }} />
                <figcaption className="position-absolute border-radius-left-8px bg-base-color right-0px bottom-0px p-45px last-paragraph-no-margin">
                  <i className="feather icon-feather-home icon-medium text-white mb-15px d-block"></i>
                  <h4 className="alt-font fw-700 text-white mb-0 d-block">50</h4>
                  <p className="text-white">Projets réalisés</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 scroll-animate" data-animate-type="fadeInRight">
              <span className="fs-20 d-inline-block mb-15px text-base-color">Installation électrique & domotique</span>
              <h2 className="alt-font fw-500 text-dark-gray ls-minus-1px">On installe, <span className="fw-700 text-highlight">vous profitez.<span className="bg-base-color h-10px bottom-10px opacity-3 separator-animation"></span></span></h2>
              <p className="w-80 md-w-100">Installation électrique, domotique, climatisation, réseaux et plomberie pour riads, villas, studios, appartements et bureaux. Des solutions fiables, pensées pour chaque type d'espace.</p>
              <div className="mb-35px">
                <div className="icon-with-text-style-08 mb-10px">
                  <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                    <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-base-color-transparent rounded-circle me-15px">
                      <i className="fa-solid fa-check fs-14 text-base-color"></i>
                    </div>
                    <div className="feature-box-content">
                      <span className="text-dark-gray">Plus de 10 ans d'expérience</span>
                    </div>
                  </div>
                </div>
                <div className="icon-with-text-style-08">
                  <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                    <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-base-color-transparent rounded-circle me-15px">
                      <i className="fa-solid fa-check fs-14 text-base-color"></i>
                    </div>
                    <div className="feature-box-content">
                      <span className="text-dark-gray">50+ clients nous font confiance</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-inline-block">
                <Link to="/services" className="btn btn-dark-gray btn-medium btn-round-edge me-25px">NOS SERVICES</Link>
                <Link to="/contact" className="btn btn-large btn-link btn-hover-animation-switch text-dark-gray p-0">
                  <span>
                    <span className="btn-text">DEMANDER UN DEVIS</span>
                    <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather icon-feather-arrow-right"></i></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0 border-top border-color-extra-medium-gray">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 justify-content-center g-0 bg-white scroll-animate" data-animate-type="fadeInUp">
            <div className="col d-flex align-items-center text-center text-lg-start icon-with-text-style-04 border-end md-border-start md-border-bottom sm-border-start-0 xs-border-end-0 border-color-extra-medium-gray position-relative xs-pt-60px xs-pb-60px">
              <span className="fs-26 lh-30 d-inline-block alt-font text-dark-gray fw-600 mb-0 w-100 sm-w-85 mx-auto">Quel est votre <span className="fw-600 text-highlight">projet<span className="bg-base-color h-6px bottom-3px opacity-3 separator-animation"></span></span> ?</span>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-bottom sm-border-end-0 border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <div className="text-uppercase alt-font fw-700 text-base-color fs-12 lh-22 bg-base-color-transparent border-radius-4px position-absolute left-18px top-18px ps-10px pe-10px">20K</div>
                  <Link to="/services" className="d-block">
                    <img src="/images/demo-real-estate-icon-apartment.svg" alt="Icône riad" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/services" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">RIAD</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-bottom xs-border-end-0 border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <div className="text-uppercase alt-font fw-700 text-base-color fs-12 lh-22 bg-base-color-transparent border-radius-4px position-absolute left-18px top-18px ps-10px pe-10px">18K</div>
                  <Link to="/services" className="d-block">
                    <img src="/images/demo-real-estate-icon-condominium.svg" alt="Icône villa" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/services" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">VILLA</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end md-border-start sm-border-end-0 sm-border-start-0 sm-border-bottom border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <div className="text-uppercase alt-font fw-700 text-base-color fs-12 lh-22 bg-base-color-transparent border-radius-4px position-absolute left-18px top-18px ps-10px pe-10px">22K</div>
                  <Link to="/services" className="d-block">
                    <img src="/images/demo-real-estate-icon-home.svg" alt="Icône studio" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/services" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">STUDIO</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-end xs-border-end-0 xs-border-bottom border-color-extra-medium-gray position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <div className="text-uppercase alt-font fw-700 text-base-color fs-12 lh-22 bg-base-color-transparent border-radius-4px position-absolute left-18px top-18px ps-10px pe-10px">09K</div>
                  <Link to="/services" className="d-block">
                    <img src="/images/demo-real-estate-icon-office.svg" alt="Icône appartement" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/services" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">APPARTEMENT</Link>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-04 border-color-extra-medium-gray md-border-end sm-border-end-0 position-relative">
              <div className="feature-box pt-45px pb-25px">
                <div className="feature-box-icon mb-10px">
                  <div className="text-uppercase alt-font fw-700 text-base-color fs-12 lh-22 bg-base-color-transparent border-radius-4px position-absolute left-18px top-18px ps-10px pe-10px">20K</div>
                  <Link to="/services" className="d-block">
                    <img src="/images/demo-real-estate-icon-shop.svg" alt="Icône bureau" />
                  </Link>
                </div>
                <div className="feature-box-content">
                  <Link to="/services" className="alt-font text-dark-gray text-dark-gray-hover fw-700 fs-15 lh-20 text-uppercase">BUREAU</Link>
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
                <Link to="/services" className="fw-600 alt-font text-dark-gray text-dark-gray-hover d-flex align-items-center">Voir tous les services<span className="d-flex align-items-center justify-content-center bg-dark-gray h-40px w-40px text-center rounded-circle fs-16 text-white ms-10px"><i className="feather icon-feather-arrow-right"></i></span></Link>
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
                <img src="/images/service-climatisation.jpg" alt="Service climatisation et installation Volt Construction" className="w-100" style={{ height: 240, objectFit: "cover" }} />
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
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7">
            <div className="col-lg-5 md-mb-50px scroll-animate" data-animate-type="fadeInLeft">
              <span className="fs-20 d-inline-block mb-15px text-base-color">Pourquoi nous choisir</span>
              <h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">Précision garantie sur <span className="fw-700 text-highlight d-inline-block">chaque installation.<span className="bg-base-color h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
              <div className="mt-50px mb-50px sm-mt-40px sm-mb-40px">
                <div className="icon-with-text-style-08 mb-30px">
                  <div className="feature-box feature-box-left-icon overflow-hidden">
                    <div className="feature-box-icon">
                      <img src="/images/demo-real-estate-icon-04.png" className="w-80px" alt="Icône installations aux normes Volt Construction" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="text-dark-gray fs-19 alt-font mb-5px fw-600 d-block">Installations aux normes</span>
                      <p className="w-80 lg-w-100">Chaque projet respecte les normes de sécurité électrique et bénéficie d'une garantie complète.</p>
                    </div>
                  </div>
                </div>
                <div className="icon-with-text-style-08">
                  <div className="feature-box feature-box-left-icon overflow-hidden">
                    <div className="feature-box-icon">
                      <img src="/images/demo-real-estate-icon-05.png" className="w-80px" alt="Icône techniciens certifiés Volt Construction" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="text-dark-gray fs-19 alt-font mb-5px fw-600 d-block">Techniciens certifiés</span>
                      <p className="w-80 lg-w-100">Une équipe qualifiée intervient sur chaque chantier, du diagnostic à la finition.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-inline-block">
                <Link to="/services" className="btn btn-dark-gray btn-medium btn-round-edge me-15px xs-mb-10px">EN SAVOIR PLUS</Link>
                <Link to="/contact" className="btn btn-medium btn-round-edge btn-transparent-light-gray border-1 fw-700 xs-mb-10px">NOUS CONTACTER</Link>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 position-relative">
              <figure className="position-relative mb-0 border-radius-6px overflow-hidden scroll-animate" data-animate-type="zoomIn">
                <img src="/images/service-electrique.jpg" className="w-100 border-radius-6px" alt="Projet installation électrique Volt Construction" style={{ maxHeight: "450px", objectFit: "cover" }} />
                <a href="https://youtube.com/shorts/8KG056KdF6c" className="absolute-middle-center text-center rounded-circle video-icon-box video-icon-large popup-vimeo">
                  <span>
                    <span className="video-icon bg-white">
                      <i className="fa-solid fa-play text-dark-gray"></i>
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr border border-color-white"></span>
                      </span>
                    </span>
                  </span>
                </a>
                <figcaption className="position-absolute text-center border-radius-5px right-25px bottom-25px ps-30px pe-30px blur-box bg-white-transparent">
                  <h1 className="mx-auto mb-0 fw-700 alt-font text-dark-gray mb-5px mt-25px">4.9</h1>
                  <div className="text-base-color fs-19 ls-2px lh-10">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <span className="text-dark-gray text-uppercase fs-13 fw-700 alt-font mb-15px d-inline-block">AVIS CLIENTS</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row justify-content-center scroll-animate" data-animate-type="fadeInUp">
            <div className="col-auto icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-person icon-medium text-base-color"></i>
                </div>
                <div className="feature-box-content alt-font text-dark-gray fs-22 fw-600">
                  Notre expertise au service de votre confort, <span className="text-decoration-line-bottom">où que vous soyez.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-gradient-very-light-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 md-mb-50px sm-mb-35px">
              <span className="fs-20 d-inline-block mb-15px text-base-color">Nos réalisations</span>
              <h3 className="alt-font fw-500 text-dark-gray ls-minus-1px w-90 xl-w-100">Des projets qui parlent <span className="fw-700 text-highlight d-inline-block">d'eux-mêmes<span className="bg-base-color h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
              <p className="mb-30px w-90 md-w-100">Découvrez une sélection de nos installations réalisées : électricité, domotique, climatisation et plus encore, pour des riads, villas, studios et bureaux.</p>
              <div className="d-flex">
                <div className="slider-one-slide-prev-1 swiper-button-prev slider-navigation-style-04 bg-white box-shadow-large"><i className="fa-solid fa-arrow-left icon-small text-dark-gray"></i></div>
                <div className="slider-one-slide-next-1 swiper-button-next slider-navigation-style-04 bg-white box-shadow-large"><i className="fa-solid fa-arrow-right icon-small text-dark-gray"></i></div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="outside-box-right-20 sm-outside-box-right-0 scroll-animate" data-animate-type="fadeIn">
                <div className="swiper magic-cursor slider-one-slide" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet1.jpeg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 1" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet2.jpg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 2" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet3.jpeg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 3" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet4.jpg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 4" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet5.jpeg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 5" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet6.jpeg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 6" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet7.jpg" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 7" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                    <div className="swiper-slide">
                      <figure className="m-0 overflow-hidden position-relative border-radius-6px">
                        <img src="/images/projet8.webp" className="w-100 border-radius-6px" alt="Réalisation Volt Construction projet 8" style={{ height: 300, objectFit: "cover" }} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-40px md-mb-30px">
            <div className="col text-center scroll-animate" data-animate-type="fadeInDown">
              <h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">Reconnus pour la <span className="fw-700 text-highlight d-inline-block">qualité de nos interventions<span className="bg-base-color h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
            </div>
          </div>
          <div className="row g-0 row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center scroll-animate" data-animate-type="fadeInUp">
            <div className="col icon-with-text-style-10 transition-inner-all md-mb-50px sm-mb-30px">
              <div className="feature-box text-center border-end xs-border-end-0 border-color-extra-medium-gray">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle mb-15px">
                  <i className="bi bi-house-door icon-large text-dark-gray"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font fw-600 text-dark-gray fs-19 d-inline-block mb-5px">Installation électrique</span>
                  <p className="w-80 md-w-70 mx-auto">Mise aux normes complète et sécurisée.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-10 transition-inner-all md-mb-50px sm-mb-30px">
              <div className="feature-box text-center border-end md-border-end-0 border-color-extra-medium-gray">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle mb-15px">
                  <i className="bi bi-camera-video icon-large text-dark-gray"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font fw-600 text-dark-gray fs-19 d-inline-block mb-5px">Vidéosurveillance</span>
                  <p className="w-80 md-w-70 mx-auto">Diagnostic gratuit avant chaque installation.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-10 transition-inner-all xs-mb-30px">
              <div className="feature-box text-center border-end xs-border-end-0 border-color-extra-medium-gray">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle mb-15px">
                  <i className="bi bi-wifi icon-large text-dark-gray"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font fw-600 text-dark-gray fs-19 d-inline-block mb-5px">Domotique</span>
                  <p className="w-80 md-w-70 mx-auto">Intégration intelligente et sur-mesure.</p>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-10 transition-inner-all">
              <div className="feature-box text-center">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle mb-15px">
                  <i className="bi bi-gear icon-large text-dark-gray"></i>
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block alt-font fw-600 text-dark-gray fs-19 d-inline-block mb-5px">Maintenance</span>
                  <p className="w-80 md-w-70 mx-auto">Suivi et entretien après installation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-6 sm-mt-50px">
            <div className="col-auto icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon me-15px">
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
      <section className="position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-end md-mb-50px">
              <figure className="position-relative m-0 scroll-animate" data-animate-type="zoomIn">
                <img src="/images/demo-real-estate-09.jpg" className="w-90 border-radius-6px" alt="Volt Construction avis clients satisfaction" />
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
              <h2 className="alt-font fw-500 text-dark-gray ls-minus-1px">Ce que nos <span className="fw-700 text-highlight d-inline-block">clients disent<span className="bg-base-color h-10px bottom-4px opacity-3 separator-animation"></span></span></h2>
              <div className="swiper position-relative" data-slider-options='{ "autoHeight": true, "loop": true, "allowTouchMove": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "effect": "fade" }'>
                <div className="swiper-wrapper mb-40px">
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Un service impeccable, une équipe à l'écoute. Installation électrique réalisée avec soin et dans les délais. Je recommande vivement.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Youssef</span> Benali</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Très satisfait de la domotique installée chez moi. Tout fonctionne parfaitement, le suivi a été excellent du début à la fin.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Fatima</span> Zahra</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Professionnalisme et qualité au rendez-vous. La climatisation a été installée rapidement et le rapport qualité-prix est au top.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Omar</span> Tazi</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Je recommande Volt Construction pour leur sérieux et leur réactivité. La pose de la fibre optique a été faite sans aucun problème.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Salma</span> El Fassi</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Caméras de surveillance installées chez moi. Travail soigné, explications claires et service après-vente réactif. Merci à toute l'équipe.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Hassan</span> Ouazzani</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Plomberie refaite dans tout mon riad. Un travail magnifique, propre et professionnel. Prix très correct pour la qualité fournie.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Amina</span> Berrada</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Entreprise fiable et ponctuelle. L'installation électrique de mon bureau a été réalisée sans accroc et en respectant le budget.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Khalid</span> Joundi</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide review-style-08">
                    <p className="w-80 xl-w-90 lg-w-100">Excellent travail sur la domotique de ma villa. Tout est connecté et fonctionne à merveille. Une équipe à l'écoute et très compétente.</p>
                    <div className="mt-20px">
                      <div className="d-inline-block align-middle text-start">
                        <div className="text-dark-gray alt-font fs-20"><span className="fw-700">Nadia</span> Chaoui</div>
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
      <section className="p-0 overlap-height">
        <div className="container overlap-gap-section">
          <div className="row align-items-center mb-2 scroll-animate" data-animate-type="fadeInDown">
            <div className="col-12 text-center">
              <h3 className="alt-font fw-500 text-dark-gray ls-minus-1px">Derniers conseils <span className="fw-700 text-highlight d-inline-block">& actualités<span className="bg-base-color h-10px bottom-1px opacity-3 separator-animation"></span></span></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 justify-content-center scroll-animate" data-animate-type="fadeInUp">
                {blogs.map((post) => (
                  <div key={post.id} className="col mb-30px">
                    <div className="card bg-transparent border-0 h-100">
                      <div className="blog-image position-relative overflow-hidden border-radius-6px">
                        <Link to={"/blog/" + post.slug}><img src={post.image} alt={post.altText || post.title} style={{ height: 220, objectFit: "cover", width: "100%" }} /></Link>
                      </div>
                      <div className="card-body px-0 pb-30px pt-30px xs-pb-15px">
                        <span className="fs-14 text-uppercase"><Link to="#" className="text-dark-gray fw-500 categories-text">{post.category}</Link><Link to="#" className="blog-date">{new Date(post.date).toLocaleDateString("fr-FR")}</Link></span>
                        <Link to={"/blog/" + post.slug} className="card-title mb-10px alt-font fw-600 lh-30 text-dark-gray d-inline-block w-95 fs-19">{post.title}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
