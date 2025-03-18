import React from "react";
import styles from "../styles/Contact.module.css";
import Backgroundimg from "../images/image.png";
import logoWname from "../images/yooyyaa.png";

function Contact() {
  return (
    <div className={styles.container}>
      {/* Contact Banner */}
      <section className={styles.contactBanner}>
        {/* Background image */}
        <div
          className={styles.bannerBg}
          style={{ backgroundImage: `url(${Backgroundimg})` }}
        />
        {/* Blue overlay */}
        <div className={styles.blueOverlay} />
        {/* GET IN TOUCH text with shadow */}
        <h2 className={styles.bannerText}>GET IN TOUCH</h2>
      </section>

      {/* Section Title */}
      <h3 className={styles.sectionTitle}>WE ARE HERE TO HELP</h3>
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
          <input
            type="text"
            placeholder="NAME"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="EMAIL"
            className={styles.input}
          />
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
          <button className={styles.submitBtn}>SUBMIT</button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className={styles.infoSection}>
        <h3 className={styles.otherWaysTitle}>OTHER WAYS TO FIND US</h3>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.511495218882!2d-63.583927!3d44.636566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a22d7746d9c95%3A0x10f28b1e7dfd8c9b!2sDalhousie%20University!5e0!3m2!1sen!2sca!4v1633490141765!5m2!1sen!2sca"
            className={styles.mapEmbed}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
