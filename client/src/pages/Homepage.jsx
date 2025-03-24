import React from "react";
import { FaComments, FaLightbulb, FaSearch, FaUserTie, FaCheckCircle } from "react-icons/fa";
import BANNER_PHOTO from '../assets/images/service-banner.jpg';
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
  { title: "Outreach", description: "Connect with us", icon: <FaComments style={{ color: "#194487" }} className="text-5xl" /> },
  { title: "Strategize", description: "We craft a personalized plan", icon: <FaLightbulb style={{ color: "#194487" }} className="text-5xl" /> },
  { title: "Case Revision", description: "Thorough review of your case", icon: <FaSearch style={{ color: "#194487" }} className="text-5xl" /> },
  { title: "Representation", description: "We handle all government communication", icon: <FaUserTie style={{ color: "#194487" }} className="text-5xl" /> },
  { title: "Decision", description: "Achieve your immigration goals", icon: <FaCheckCircle style={{ color: "#194487" }} className="text-5xl" /> },
];

const Homepage = () => {
  return (
    <div>
      { HeadingBanner( "HOME", BANNER_PHOTO ) }

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
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-600 decoration-4 underline-offset-4">
          Understand our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-10 mt-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-bold text-red-600 mt-3">{`${index + 1}. ${step.title}`}</h3>
              <p className="text-gray-700 mt-1">{step.description}</p>
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