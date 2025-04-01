import React, { useState } from "react";
import "../styles/global.css";
import "../styles/Contact.css";
import HeadingBanner from "../Components/headingBanner.tsx";
import Backgroundimg from "../Assets/images/image.png";
import logoWname from "../Assets/images/yooyyaa.png";

function Contact() {
  // Local state to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  // Update local state when an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission by sending data to our backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      // Reset the form and notify success
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Use the HeadingBanner component for the banner */}
      {HeadingBanner("GET IN TOUCH", "", Backgroundimg)}
      {/* HELP SECTION BOX */}
      <div className="help-section">
        {/* Section Title */}
        <h3 className="section-title">WE ARE HERE TO HELP</h3>
        <div className="line-container">
          <span className="horizontal-line"></span>
        </div>

        {/* Form Section */}
        <section className="form-section">
          <div className="form-text">
            <p className="text">
              Immigration process can be hectic.{" "}
              <strong>WE ARE HERE TO MAKE IT EASY.</strong>
            </p>
            <p className="description">
              Let us know how we can help, and we will get back to you in 24 hours!
            </p>
          </div>

          {/* Our form with onSubmit and onChange handlers */}
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER (OPTIONAL)"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input"
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
              className="textarea"
            />
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </section>
      </div>

      {/* Contact Info Section */}
      <section className="info-section">
        <h3 className="other-ways-title">OTHER WAYS TO FIND US</h3>
        <div className="line-container">
          <span className="horizontal-line"></span>
        </div>

        <div className="info-container">
          <img src={logoWname} alt="Yooyaa Logo" className="info-logo" />
          <div className="contact-details">
            <p>
              PHONE: <span className="highlight">+1 902-123-4567</span>
            </p>
            <p>
              EMAIL: <span className="highlight">something@gmail.com</span>
            </p>
            <p>
              ADDRESS:{" "}
              <span className="highlight">
                123 Imaginary St, Halifax, NS B1H 1Z0
              </span>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.511495218882!2d-63.583927!3d44.636566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a22d7746d9c95%3A0x10f28b1e7dfd8c9b!2sDalhousie%20University!5e0!3m2!1sen!2sca!4v1633490141765!5m2!1sen!2sca"
            className="map-embed"
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
