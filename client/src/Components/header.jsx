import React from "react";
import styles from "../styles/header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>YOOYYAA IMMIGRATION SERVICES</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#">HOME</a>
        <a href="#">OUR SERVICES</a>
        <a href="#">OUR TEAM</a>
        <a href="#" className={styles.contactBtn}>
          GET IN TOUCH
        </a>
      </nav>
    </header>
  );
};

export default Header;
