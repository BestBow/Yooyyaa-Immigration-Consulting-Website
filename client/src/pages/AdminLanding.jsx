import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/adminLanding.css";
import "../styles/global.css";
import servicesIcon from "../Assets/images/services.png";
import faqIcon from "../Assets/images/FAQ.png";
import aboutUsIcon from "../Assets/images/aboutUs.png";

const AdminLanding = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setVisibleDropdown(visibleDropdown === dropdown ? null : dropdown);
  };

  const redirectLink = [
    { label: "Edit Services", to: "/edit-services", category: "services" },
    { label: "Edit FAQ", to: "/edit-faq", category: "faq" },
    { label: "Edit About Us", to: "/edit-about", category: "about" },
  ];

  const categorizedLinks = {
    services: redirectLink.filter((link) => link.category === "services"),
    faq: redirectLink.filter((link) => link.category === "faq"),
    about: redirectLink.filter((link) => link.category === "about"),
  };

  const icons = {
    services: servicesIcon,
    faq: faqIcon,
    about: aboutUsIcon,
  };

  return (
    <div className="admin-page">
      <h1>Welcome!</h1>
      <div className="admin-button-container">
        {["services", "faq", "about"].map((category, index) => (
          <div
            key={index}
            className="admin-dropdown"
            onMouseLeave={() => setVisibleDropdown(null)}
          >
            <button
              className={`admin-dropdown-button ${category}`}
              onClick={() => toggleDropdown(category)}
            >
              <span className="label">
                {category.charAt(0).toUpperCase() + category.slice(1)} Options
              </span>
              <img
                src={icons[category]}
                alt={`${category} icon`}
                className="icon"
              />
            </button>
            {visibleDropdown === category && (
              <div className="admin-dropdown-content admin-show">
                {categorizedLinks[category].map((link, index) => (
                  <Link key={index} className="admin-dropdown-link" to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminLanding;
