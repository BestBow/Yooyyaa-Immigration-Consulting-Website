import React from "react";
import styles from "../styles/footer.css";
import logoWname from "../images/yooyyaaLogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={logoWname} alt="Logo" className={styles.infoLogo} />
        <div className={styles.footerItem}>
          <span className={styles.footerIcon}>📍</span>
          <p>
            123 This Street <br /> Halifax, Nova Scotia <br /> A1A 1A1
          </p>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerIcon}>📧</span>
          <p>something@gmail.com</p>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerIcon}>📞</span>
          <p>902-111-2222</p>
        </div>
      </div>

      <div className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
      </div>

      <div className="w-full flex justify-center">
        <span className="horizontal-line"></span>
      </div>

      <p className={styles.copyright}>
        &copy; 2025 Yooyaa Immigration Consultants. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
