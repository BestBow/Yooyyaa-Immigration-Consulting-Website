import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/global.css";

import Header from "./Components/header";
import Footer from "./Components/footer";
import Homepage from "./pages/Homepage";
import AboutUs from "./components/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import TermsandPrivacyPolicy from "./Components/termsAndPrivacyPolicy";

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

}

export default App;
