import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import Backgroundimg from "../images/image.png";
import logoWname from "../images/yooyyaa.png";

function Contact() {
  // I'm using local state to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  // This updates our local state whenever an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // This sends our form data to the backend via POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      // Reset the form and let the user know it worked
      setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      {/* Banner section */}
      <section className={styles.contactBanner}>
        <div
          className={styles.bannerBg}
          style={{ backgroundImage: `url(${Backgroundimg})` }}
        />
        <div className={styles.blueOverlay} />
        <h2 className={styles.bannerText}>GET IN TOUCH</h2>
      </section>

      {/* Title and line */}
      <h3 className={styles.sectionTitle}>WE ARE HERE TO HELP</h3>
      <div className="w-full flex justify-center">
        <span className="horizontal-line"></span>
      </div>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formText}>
          <p className={styles.text}>
            Immigration process can be hectic. <strong>WE ARE HERE TO MAKE IT EASY.</strong>
          </p>
          <p className={styles.description}>
            Let us know how we can help, and we will get back to you in [TIME] [UNIT]!
          </p>
        </div>

        {/* Our form with a POST request */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="PHONE NUMBER (OPTIONAL)"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="">CATEGORY</option>
            <option value="Visa Consultation">Visa Consultation</option>
            <option value="Work Permit">Work Permit</option>
            <option value="Study Permit">Study Permit</option>
          </select>
          <textarea
            name="message"
            placeholder="SEND US A MESSAGE! (MAX 999 CHARACTERS)"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitBtn}>
            SUBMIT
          </button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className={styles.infoSection}>
        <h3 className={styles.otherWaysTitle}>OTHER WAYS TO FIND US</h3>
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
              <span className={styles.highlight}>123 Imaginary St, Halifax, NS B1H 1Z0</span>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className={styles.mapEmbed}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
