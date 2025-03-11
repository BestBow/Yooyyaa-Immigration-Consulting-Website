import React from "react";
import styles from "../styles/Contact.module.css";
import Backgroundimg from "../images/image.png";
import logoWname from "../images/yooyyaaLogo.png";

function Contact() {
  return (
    <div className={styles.container}>
      {/* Contact Banner */}
      <section className={`${styles.contactBanner} relative`}>
        <div
          className={`${styles.backgroundImg} absolute inset-0 bg-cover bg-center opacity-80`}
          style={{ backgroundImage: `url(${Backgroundimg})` }}
        />
        <div className="relative z-10 text-center text-white text-5xl font-extrabold">
          GET IN TOUCH
        </div>
      </section>

      {/* Section Title */}
      <h3 className={styles.sectionTitle}>WE ARE HERE TO HELP</h3>
      <div className="w-full flex justify-center">
        <span className="horizontal-line"></span>
      </div>

      {/* Form Section */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto bg-white p-10 rounded-lg shadow-lg mt-6 border border-gray-300">
        <div className="w-1/2 pr-10">
          <p className="text-lg">
            Immigration process can be{" "}
            <span className="font-bold">stressful</span>.{" "}
            <span className="font-bold">We make it simple for you.</span>
          </p>
          <p className="text-gray-600">
            Fill out the form, and we will respond within **24 hours**.
          </p>
        </div>

        <form className="w-1/2 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="input-style" />
          <input
            type="email"
            placeholder="Your Email"
            className="input-style"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="input-style"
          />
          <select className="input-style">
            <option>Select a Service</option>
            <option>Visa Consultation</option>
            <option>Work Permit</option>
            <option>Study Permit</option>
          </select>
          <textarea
            placeholder="Your Message"
            className="input-style h-28"
          ></textarea>
          <button className="bg-yellow-400 text-blue-900 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 transition">
            Submit
          </button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="mt-16 text-center w-full px-6">
        <h3 className="text-2xl font-bold text-blue-900">
          OTHER WAYS TO FIND US
        </h3>
        <div className="w-full flex justify-center">
          <span className="horizontal-line"></span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-lg mx-auto mt-6">
          <img
            src={logoWname}
            alt="Yooyaa Logo"
            className="h-40 mb-4 md:mb-0"
          />
          <div className="text-center md:text-left text-gray-800 ml-6">
            <p className="text-lg font-semibold">
              📞 PHONE: <span className="text-blue-900">+1 902-123-4567</span>
            </p>
            <p className="text-lg font-semibold">
              📧 EMAIL:{" "}
              <span className="text-blue-900">something@gmail.com</span>
            </p>
            <p className="text-lg font-semibold">
              📍 ADDRESS:{" "}
              <span className="text-blue-900">
                123 Imaginary St, Halifax, NS B1H 1Z0
              </span>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-screen-lg mx-auto mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.511495218882!2d-63.583927!3d44.636566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a22d7746d9c95%3A0x10f28b1e7dfd8c9b!2sDalhousie%20University!5e0!3m2!1sen!2sca!4v1633490141765!5m2!1sen!2sca"
            className="w-full h-80 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
