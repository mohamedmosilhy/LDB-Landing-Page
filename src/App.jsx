import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/WhyChooseLDB.css";
import "./styles/CoreValues.css";
import "./styles/ClientLogos.css";
import "./styles/Services.css";
import "./styles/Projects.css";
import "./styles/Testimonials.css";
import "./styles/Footer.css";
import "./styles/ScrollToTop.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseLDB from "./components/WhyChooseLDB";
import CoreValues from "./components/CoreValues";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseLDB />
      <CoreValues />
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
