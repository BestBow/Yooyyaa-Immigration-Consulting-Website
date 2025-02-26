import React from "react";
import styles from "./styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>YOOYYAA IMMIGRATION SERVICES</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#">HOME</a>
          <a href="#">OUR SERVICES</a>
          <a href="#">OUR TEAM</a>
          <a href="#" className={styles.contactBtn}>GET IN TOUCH</a>
        </nav>
      </header>

      {/* Contact Section */}
      <section className={styles.contactBanner}>
        <h2>GET IN TOUCH</h2>
      </section>

      {/* Form Section */}
      <section className={styles.formContainer}>
        <h3 className={styles.subHeading}>WE ARE HERE TO HELP</h3>
        <p className={styles.text}>Immigration process can be hectic. <strong>WE ARE HERE TO MAKE IT EASY.</strong></p>
        <form className={styles.form}>
          <input type="text" placeholder="NAME" className={styles.input} />
          <input type="email" placeholder="EMAIL" className={styles.input} />
          <input type="text" placeholder="PHONE NUMBER (OPTIONAL)" className={styles.input} />
          <select className={styles.input}>
            <option>CATEGORY</option>
            <option>Visa Consultation</option>
            <option>Work Permit</option>
            <option>Study Permit</option>
          </select>
          <textarea placeholder="SEND US A MESSAGE! (MAX 999 CHARACTERS)" className={styles.textarea}></textarea>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </section>

      {/* Contact Info */}
      <section className={styles.infoSection}>
        <h3>OTHER WAYS TO FIND US</h3>
        <p>PHONE: <span className={styles.highlight}>+1 902-123-4567</span></p>
        <p>EMAIL: <span className={styles.highlight}>something@gmail.com</span></p>
        <p>ADDRESS: <span className={styles.highlight}>123 Imaginary St, Halifax, NS B1H 1Z0</span></p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <img src="/logo.png" alt="Logo" className={styles.footerLogo} />
          <p>123 This Street, Halifax, Nova Scotia A1A 1A1</p>
          <p>something@gmail.com</p>
          <p>902-111-2222</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <p className={styles.copyright}>&copy; 2025 Yooyaa Immigration Consultants. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
