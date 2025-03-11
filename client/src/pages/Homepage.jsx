import React from "react";
import "../styles/global.css";
import "../styles/Home.css";
import serviceImage from "../assets/Green-Valley.jpg";

const services = [
  { name: "SERVICE 1", image: serviceImage },
  { name: "SERVICE 2", image: serviceImage },
  { name: "SERVICE 3", image: serviceImage },
  { name: "SERVICE 4", image: serviceImage },
];

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Home</h1>
      </section>

      {/* Services Section */}
      <section className="text-center py-16">
        <h2 className="services-title">SERVICES</h2>
        <div className="services-divider"></div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          SUCCESS STORIES FROM OUR PAST CUSTOMERS
        </h2>
        <div className="services-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-8">
          {["John", "Kyle", "Angela", "Kim"].map((name, index) => (
            <div key={index} className="testimonial-card">
              <h3 className="text-xl font-bold text-blue-900">{name}</h3>
              <p className="text-yellow-500 my-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h3>THINKING ABOUT COMING TO CANADA?</h3>
        <p className="text-lg text-white my-4">LET US KNOW HOW WE CAN HELP!</p>
        <div className="relative mt-6 w-full max-w-[75%] mx-auto">
          <img src={serviceImage} alt="Talk to us" />
          <span className="cta-text">TALK TO US TODAY</span>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
