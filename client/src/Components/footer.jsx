import React from "react";
import "../styles/footer.css";
import logoWname from "../images/yooyyaaLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Logo & Contact */}
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo-container">
          <Link to="/">
            {" "}
            <img src={logoWname} alt="Logo" className="footer-logo" />{" "}
          </Link>
        </div>

        {/* Contact Details */}
        <div className="footer-info">
          <div className="footer-item">
            <span className="footer-icon">📍</span>
            <p>
              123 This Street <br /> Halifax, Nova Scotia <br /> A1A 1A1
            </p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📧</span>
            <p>something@gmail.com</p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <p>902-111-2222</p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="footer-divider"></div>

      {/* Bottom Section - Links & Copyright */}
      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/termsAndPrivacy">Terms and Privacy Policy</Link>
        </div>
        <p className="copyright">
          &copy; 2025 Yooyaa Immigration Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
