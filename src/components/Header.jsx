import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg header-light bg-white border-bottom border-color-extra-medium-gray header-reverse" data-header-hover="light">
        <div className="container-fluid">
          <div className="col-auto">
            <Link className="navbar-brand" to="/" onClick={closeMenu}>
              <img src="/images/logo2.png" alt="" className="default-logo" style={{ height: "40px" }} />
              <img src="/images/logo2.png" alt="" className="alt-logo" style={{ height: "40px" }} />
              <img src="/images/logo2.png" alt="" className="mobile-logo" style={{ height: "40px" }} />
            </Link>
          </div>
          <div className="col-auto menu-order left-nav ps-60px lg-ps-20px">
            <button
              className={`navbar-toggler float-start${mobileMenuOpen ? " active" : ""}`}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div className={`navbar-collapse${mobileMenuOpen ? " show" : ""}`} id="navbarNav">
              <ul className="navbar-nav alt-font">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.path}>
                    <Link
                      className={`nav-link${isActive(link.path) ? " active" : ""}`}
                      to={link.path}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className="col-auto ms-auto ps-lg-0 d-none d-sm-flex">
            <div className="d-none d-xl-flex me-25px">
              <div className="d-flex align-items-center widget-text fw-600 alt-font">
                <a href="tel:1234567890" className="d-inline-block">
                  <span className="d-inline-block align-middle me-10px bg-base-color-transparent h-45px w-45px text-center rounded-circle fs-16 lh-46 text-base-color">
                    <i className="feather icon-feather-phone-outgoing"></i>
                  </span>
                  <span className="d-none d-xxl-inline-block">+212 643-976917</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}