import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../Assets/images/logo.png";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="title">YOOYYAA IMMIGRATION SERVICES</h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/services">OUR SERVICES</Link>
        <Link to="/about">OUR TEAM</Link>
        {/* FAQ moved before GET IN TOUCH */}
        <Link to="/faq">FAQ</Link>
        <Link to="/contact" className="contact-btn">
          GET IN TOUCH
        </Link>
      </nav>
    </header>
  );
};

export default Header;
