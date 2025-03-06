import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/logo.png" alt="Yooyyaa Immigration Services" className="footer-logo" />
      </div>
      <div className="footer-center">
        <p>123 This Street, Halifax, Nova Scotia, A1A 1A1</p>
        <p>something@gmail.com</p>
        <p>902-111-2222</p>
      </div>
      <div className="footer-right">
        <p>Privacy Policy | Terms & Conditions</p>
        <p>© 2025 Yooyyaa Immigration Consultants. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
