import React from "react";
import { FaComments, FaLightbulb, FaSearch, FaUserTie, FaCheckCircle } from "react-icons/fa";
import HomepageBanner from '../assets/images/homePage.jpg';
import HeadingBanner from '../Components/headingBanner.tsx';
import { Link } from "react-router-dom";
import serviceImage from "../assets/Green-Valley.jpg";
import "../styles/global.css";
import "../styles/Home.css";

const services = [
  { name: "SERVICE 1", image: serviceImage },
  { name: "SERVICE 2", image: serviceImage },
  { name: "SERVICE 3", image: serviceImage },
  { name: "SERVICE 4", image: serviceImage },
];

const processSteps = [
  { title: "Outreach", description: "Connect with us", icon: <FaComments className="text-3xl md:text-4xl text-blue-800" /> },
  { title: "Strategize", description: "We craft a personalized plan", icon: <FaLightbulb className="text-3xl md:text-4xl text-blue-800" /> },
  { title: "Case Revision", description: "Thorough review of your case", icon: <FaSearch className="text-3xl md:text-4xl text-blue-800" /> },
  { title: "Representation", description: "We handle all government communication", icon: <FaUserTie className="text-3xl md:text-4xl text-blue-800" /> },
  { title: "Decision", description: "Achieve your immigration goals", icon: <FaCheckCircle className="text-3xl md:text-4xl text-blue-800" /> },
];

const Homepage = () => {
  return (
    <div>
      { HeadingBanner( "YOOYYAA IMMIGRATION", null, HomepageBanner ) }

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

      {/* Understand our Process */}
      <section className="text-center py-16 bg-white w-full">
        <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-400 decoration-4 underline-offset-4">
          Understand our Process
        </h2>
        <div className="process-steps-container mt-14">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              {step.icon}
              <h3 className="text-sm sm:text-base font-semibold text-red-600">{`${index + 1}. ${step.title}`}</h3>
              <p className="text-xs sm:text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h3>THINKING ABOUT COMING TO CANADA?</h3>
        <p className="text-lg text-white my-4">LET US KNOW HOW WE CAN HELP!</p>
        <div className="relative mt-6 w-full max-w-[75%] mx-auto">
          <Link to="/contact">
            <img src={serviceImage} alt="Talk to us" />
            <span className="cta-text">TALK TO US TODAY</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
