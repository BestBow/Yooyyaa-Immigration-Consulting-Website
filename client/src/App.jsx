import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Header from "./components/header";
import Footer from "./Components/footer";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/OurTeam";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import TermsandPrivacyPolicy from "./components/TermsAndPrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termsAndPrivacy" element={<TermsandPrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
