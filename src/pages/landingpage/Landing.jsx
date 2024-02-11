import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Join from "./components/Join";
import Testimonials from "./components/Testimonials";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Join />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Landing;
