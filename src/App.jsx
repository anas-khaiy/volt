import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "animate.css";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DetailsBlog from "./pages/DetailsBlog";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ThemeInit() {
  const { pathname } = useLocation();
  const initialized = useRef(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      initSwipers(initialized.current);
      initAnimations();
      initMagicCursor();
      initShadowAnimation();
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function initSwipers(initialized) {
  if (typeof Swiper === "undefined") return;

  document.querySelectorAll("[data-slider-options]").forEach((el) => {
    if (initialized.has(el)) return;

    const raw = el.getAttribute("data-slider-options");
    if (!raw) return;

    try {
      const opts = JSON.parse(raw);

      if (el.hasAttribute("data-number-pagination")) {
        opts.pagination = opts.pagination || {};
        opts.pagination.renderBullet = function (index, className) {
          return '<span class="' + className + '">' + (index + 1).toString().padStart(2, "0") + "</span>";
        };
      }

      const swiper = new Swiper(el, opts);
      initialized.add(el);
      el._swiper = swiper;

      animateSwiperContent(swiper);

      swiper.on("slideChangeTransitionEnd", function () {
        requestAnimationFrame(function () {
          animateSwiperContent(swiper);
        });
      });
    } catch (_e) {
    }
  });
}

function animateSwiperContent(swiper) {
  try {
    var active = swiper.el.querySelector(".swiper-slide-active");
    if (!active) return;

    active.querySelectorAll(".scroll-animate").forEach(function (el) {
      var type = el.getAttribute("data-animate-type") || "fadeInUp";
      el.classList.add("animate__animated", "animate__" + type);
    });
  } catch (_e) {}
}

function initAnimations() {
  document.querySelectorAll(".scroll-animate:not(.swiper .scroll-animate)").forEach(function (el) {
    if (el.classList.contains("animate__animated")) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const type = el.getAttribute("data-animate-type") || "fadeInUp";
          el.classList.add("animate__animated", "animate__" + type);
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  });
}

function initShadowAnimation() {
  document.querySelectorAll('[data-shadow-animation="true"]').forEach(function (el) {
    if (el.classList.contains("appear")) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          el.classList.add("appear");
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  });
}

function initMagicCursor() {
  const wrapper = document.querySelector(".magic-cursor-wrapper");
  if (!wrapper || wrapper.classList.contains("initialized")) return;

  const ball = document.getElementById("ball-cursor");
  if (!ball) return;

  const hasMagicCursor = document.querySelectorAll(".magic-cursor").length > 0;
  if (!hasMagicCursor) return;

  wrapper.classList.add("initialized");

  if (document.querySelector(".magic-cursor.light")) wrapper.classList.add("magic-cursor-light");
  if (document.querySelector(".magic-cursor.base-color")) wrapper.classList.add("magic-cursor-base-color");
  if (document.querySelector(".magic-cursor.view-cursor")) wrapper.classList.add("magic-view-cursor");
  if (document.querySelector(".magic-cursor.drag-cursor")) wrapper.classList.add("magic-drag-cursor");
  if (document.querySelector(".magic-cursor.round-cursor")) wrapper.classList.add("magic-round-cursor");

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  const ratio = 0.65;

  function mouseMove(e) {
    const a = window.pageYOffset || document.documentElement.scrollTop;
    mouse.x = e.pageX;
    mouse.y = e.pageY - a;
  }

  function updatePosition() {
    pos.x += (mouse.x - pos.x) * ratio;
    pos.y += (mouse.y - pos.y) * ratio;
    ball.style.transform = "translate(" + pos.x + "px, " + pos.y + "px)";
  }

  document.addEventListener("mousemove", mouseMove);
  function tick() {
    updatePosition();
    requestAnimationFrame(tick);
  }
  tick();

  if (typeof TweenMax !== "undefined" && TweenMax !== null) {
    document.querySelectorAll(".magic-cursor").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        wrapper.classList.add("sliderhover");
      });
      el.addEventListener("mouseleave", function () {
        wrapper.classList.remove("sliderhover");
      });
    });
  }

  document.querySelectorAll(".swiper-button-next, .swiper-button-prev, .swiper-pagination, a:not(.force-magic-cursor)")
    .forEach(function (el) {
      el.addEventListener("mouseenter", function () { wrapper.style.opacity = "0"; });
      el.addEventListener("mouseleave", function () { wrapper.style.opacity = "1"; });
    });
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeInit />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<DetailsBlog />} />
          <Route path="/blog-details" element={<DetailsBlog />} />
        </Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <a
        href="https://wa.me/212643976917"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </BrowserRouter>
  );
}
