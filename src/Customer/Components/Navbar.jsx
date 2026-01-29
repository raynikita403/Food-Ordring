import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import logo from "../../assets/nav-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("contact-us", {
          smooth: true,
          duration: 500,
        });
      }, 300);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Foodly" width="40" height="40" className="me-2" />
          <span className="fw-bold text-light">Foodly</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#foodlyNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="foodlyNavbar">

          {/* Center Menu */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-light" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-light" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold text-light" to="/restaurant">
                Restaurant
              </Link>
            </li>

            {/* Contact Us – Scroll */}
            <li className="nav-item">
              {location.pathname === "/" ? (
                <ScrollLink
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className="nav-link fw-semibold text-light cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              ) : (
                <span
                  className="nav-link fw-semibold text-light cursor-pointer"
                  onClick={handleContactClick}
                >
                  Contact Us
                </span>
              )}
            </li>
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search fs-5 cursor-pointer"></i>

            <i
              className="bi bi-person fs-5 cursor-pointer"
              onClick={() => navigate("/login")}
            ></i>

            <i className="bi bi-cart fs-5 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
