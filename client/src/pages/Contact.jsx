import React from "react";
import styles from "../styles/Contact.module.css";
import mapPlaceholder from "../images/map-placeholder.jpg"; 
import Backgroundimg from "../images/image.png"; 
import logoWname from "../images/yooyyaaLogo.png";

function Contact() {
  return (
    <div className={styles.container}>
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
          <input type="text" placeholder="PHONE NUMBER (OPTIONAL)" className={styles.input} />
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
          <img src={logoWname} alt="Yooyaa Logo" className={styles.infoLogo} />
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
          <img src={mapPlaceholder} alt="Map" className={styles.mapImage} />
        </div>
      </section>
    </div>
  );
}

export default Contact;
