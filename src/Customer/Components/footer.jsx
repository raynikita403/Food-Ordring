import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Brand / About */}
          <div className="col-12 col-md-4 mb-4">
            <h4 className="fw-bold text-warning">Foodly</h4>
            <p>
              Discover the best restaurants near you. Fresh food, fast delivery,
              and unforgettable flavors — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold text-warning">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/restaurant" className="text-light text-decoration-none">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <span
                  onClick={handleContactClick}
                  className="text-light text-decoration-none cursor-pointer"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-semibold text-warning">Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/help" className="text-light text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-light text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-semibold text-warning">Follow Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-warning fs-5"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} Foodly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
