import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Yooyyaa Immigration Services" className="logo" />
        <span className="brand-name">YOOYYAA IMMIGRATION SERVICES</span>
      </div>
      <nav className="nav-links">
        <a href="#">HOME</a>
        <a href="#">OUR SERVICES</a>
        <a href="#">OUR TEAM</a>
      </nav>
      <button className="contact-btn">GET IN TOUCH</button>
    </header>
  );
};

export default Header;
