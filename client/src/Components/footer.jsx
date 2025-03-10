import React from "react";
import "../styles/footer.css";
import logoWname from "../images/yooyyaaLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoWname} alt="Logo" className="info-logo" />
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

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>

      <p className="copyright">
        &copy; 2025 Yooyaa Immigration Consultants. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
