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
