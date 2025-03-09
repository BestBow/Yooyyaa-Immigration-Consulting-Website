import React from "react";
import styles from "../styles/Contact.module.css";
import logo from "../images/logo.png";
import mapPlaceholder from "../images/map-placeholder.jpg"; 
import logoWname from "../images/yooyyaaLogo.png";
import Backgroundimg from "../images/image.png"; 

function Contact() {
  return (
    <div className={styles.container}>
      {/* Header */}
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

      {/* Contact Banner */}
      <section className={styles.contactBanner}>
        {/* Background image with 20% opacity */}
        <div
          className={styles.backgroundImg}
          style={{ backgroundImage: `url(${Backgroundimg})` }}
        />
        {/* Blue overlay matching header blue */}
        <div className={styles.blueOverlay}></div>
        <h2 className="relative z-10">GET IN TOUCH</h2>
      </section>

      {/* Section Title */}
      <h3 className={styles.sectionTitle}>WE ARE HERE TO HELP</h3>
      {/* Horizontal line wrapped in a centering container */}
      <div className="w-full flex justify-center">
        <span className="horizontal-line"></span>
      </div>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formText}>
          <p className={styles.text}>
            Immigration process can be hectic.{" "}
            <strong>WE ARE HERE TO MAKE IT EASY.</strong>
          </p>
          <p className={styles.description}>
            Let us know how we can help, and we will get back to you in [TIME] [UNIT]!
          </p>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="NAME" className={styles.input} />
          <input type="email" placeholder="EMAIL" className={styles.input} />
          <input
            type="text"
            placeholder="PHONE NUMBER (OPTIONAL)"
            className={styles.input}
          />
          <select className={styles.input}>
            <option>CATEGORY</option>
            <option>Visa Consultation</option>
            <option>Work Permit</option>
            <option>Study Permit</option>
          </select>
          <textarea
            placeholder="SEND US A MESSAGE! (MAX 999 CHARACTERS)"
            className={styles.textarea}
          ></textarea>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className={styles.infoSection}>
        <h3>OTHER WAYS TO FIND US</h3>
        {/* Global horizontal-line element wrapped in centering container */}
        <div className="w-full flex justify-center">
          <span className="horizontal-line"></span>
        </div>

        <div className={styles.infoContainer}>
          <img
            src={logoWname}
            alt="Yooyaa Logo"
            className={styles.infoLogo}
          />
          <div className={styles.contactDetails}>
            <p>
              PHONE: <span className={styles.highlight}>+1 902-123-4567</span>
            </p>
            <p>
              EMAIL: <span className={styles.highlight}>something@gmail.com</span>
            </p>
            <p>
              ADDRESS:{" "}
              <span className={styles.highlight}>
                123 Imaginary St, Halifax, NS B1H 1Z0
              </span>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <img
            src={mapPlaceholder}
            alt="Map"
            className={styles.mapImage}
          />
        </div>
      </section>

      {/* Footer */}
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
          <a href="#">Terms & Conditions</a>
        </div>

        {/* Global horizontal-line element wrapped in centering container */}
        <div className="w-full flex justify-center">
          <span className="horizontal-line"></span>
        </div>

        <p className={styles.copyright}>
          &copy; 2025 Yooyaa Immigration Consultants. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Contact;
