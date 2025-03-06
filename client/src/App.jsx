import "./styles/Homepage.css";
import "./styles/global.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
