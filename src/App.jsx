import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import WhyChooseLDB from "./components/WhyChooseLDB";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Hero />
      <WhyChooseLDB />
      <ClientLogos />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
