import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import WhyChooseLDB from "./components/WhyChooseLDB";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Hero />
      <WhyChooseLDB />
      <ClientLogos />
      <Services />
    </div>
  );
}

export default App;
