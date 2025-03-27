import React from "react";
import "../styles/global.css";
import "../styles/Home.css";
import serviceImage from "../assets/Green-Valley.jpg";
import { Link } from "react-router-dom";

const services = [
  { name: "SERVICE 1", image: serviceImage },
  { name: "SERVICE 2", image: serviceImage },
  { name: "SERVICE 3", image: serviceImage },
  { name: "SERVICE 4", image: serviceImage },
];

const processSteps = [
  { title: "Outreach", description: "Connect with us", icon: "💬" },
  { title: "Strategize", description: "We craft a personalized plan", icon: "💡" },
  { title: "Case Revision", description: "Thorough review of your case", icon: "🔍" },
  { title: "Representation", description: "We handle all government communication", icon: "👨‍⚖️" },
  { title: "Decision", description: "Achieve your immigration goals", icon: "✅" },
];

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>HOME</h1>
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

      {/* Understand our process*/}
      <section className="process-section text-center py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Understand Our Process</h2>
        <div className="services-divider mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-card flex flex-col items-center justify-between text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div> 
                <div className="text-5xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 break-words" style={{ wordBreak: 'break-word' }}>{`${index + 1}. ${step.title}`}</h3>
              </div>
              <p className="text-gray-700 mt-2 text-sm leading-snug">{step.description}</p>
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
