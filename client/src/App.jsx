import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/global.css";

import Header from "./Components/header";
import Footer from "./Components/footer";
import Homepage from "./pages/Homepage";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import TermsandPrivacyPolicy from "./Components/termsAndPrivacyPolicy";
import AdminLanding from "./pages/AdminLanding";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termsAndPrivacy" element={<TermsandPrivacyPolicy />} />
        <Route path="/adminLanding" element={<AdminLanding/>}/>
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
