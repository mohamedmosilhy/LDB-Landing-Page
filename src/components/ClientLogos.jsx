import React from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";

// Import all logo images
import logo1 from "../assets/logos/logo-2URJx6kB_400x400.jpeg";
import logo2 from "../assets/logos/logo-629e96e4-7346-44dd-bc7c-683663d16501.png";
import logo3 from "../assets/logos/logo-98569_Logo_Eng_JPGfront.jpg";
import logo4 from "../assets/logos/logo-channels4_profile.jpg";
import logo5 from "../assets/logos/logo-download-3-2.jpg";
import logo6 from "../assets/logos/logo-EKyymsNXsAUzJCT.png";
import logo7 from "../assets/logos/logo-engage_total_hr_solution_logo.jpeg";
import logo8 from "../assets/logos/logo-epromlogo-scaled.gif";
import logo9 from "../assets/logos/logo-ExxonMobil-Logo.png";
import logo10 from "../assets/logos/logo-giz.png";
import logo11 from "../assets/logos/logo-harouge-logo-en.png";
import logo12 from "../assets/logos/logo-hayah-international-academy2-1.jpg";
import logo13 from "../assets/logos/logo-ImageHandler.png";
import logo14 from "../assets/logos/logo-images-1.png";
import logo15 from "../assets/logos/logo-images-2.png";
import logo16 from "../assets/logos/logo-images-3.png";
import logo17 from "../assets/logos/logo-images-4.png";
import logo18 from "../assets/logos/logo-images-5.png";
import logo19 from "../assets/logos/logo-images-6.png";
import logo20 from "../assets/logos/logo-images-7.png";
import logo21 from "../assets/logos/logo-images-8.png";
import logo22 from "../assets/logos/logo-images-9.jpeg";
import logo23 from "../assets/logos/logo-images-10.jpeg";
import logo24 from "../assets/logos/logo-kisspng-logo-istikbal.png";
import logo25 from "../assets/logos/logo-Logo-v3-No-Background.png";
import logo26 from "../assets/logos/logo-loreal-paris-vector-logo.png";
import logo27 from "../assets/logos/logo-MSA.png";
import logo28 from "../assets/logos/logo-MTN_Logo.svg.png";
import logo29 from "../assets/logos/logo-OracleRedwood2.webp";
import logo30 from "../assets/logos/logo-Photos-56-380x280.jpg";
import logo31 from "../assets/logos/logo-PSX_20220208_124911.jpg";
import logo32 from "../assets/logos/logo-PSX_20240218_173046.png";
import logo33 from "../assets/logos/logo-raya-logo-en.png";
import logo34 from "../assets/logos/logo-unicef-logo-whiteonblue.jpg";
import logo35 from "../assets/logos/logo-USAID-Logo.png";
import logo36 from "../assets/logos/شركة-جاسكو.jpg";
import logo37 from "../assets/logos/نماء.webp";

// Import new downloaded logos
import bmwLogo from "../assets/logos/bmw-logo.png";
import vodafoneLogo from "../assets/logos/vodafone-logo.png";
import pepsicoLogo from "../assets/logos/pepsico-logo.png";
import etisalatLogo from "../assets/logos/etisalat-logo.svg";
import kraftHeinzLogo from "../assets/logos/kraft-heinz-logo.png";

const ClientLogos = () => {
  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.2);
  const logosRef = useStaggerAnimation("scaleIn", 0.05, 0.5);

  // All logos organized by importance - important ones first
  const allLogos = [
    // First row - Most important (new additions)
    {
      src: bmwLogo,
      alt: "BMW",
      name: "BMW",
      priority: "high",
    },
    {
      src: vodafoneLogo,
      alt: "Vodafone",
      name: "Vodafone",
      priority: "high",
    },
    {
      src: pepsicoLogo,
      alt: "PepsiCo",
      name: "PepsiCo",
      priority: "high",
    },
    {
      src: etisalatLogo,
      alt: "Etisalat UAE",
      name: "Etisalat UAE",
      priority: "high",
    },
    // Second row - Important existing
    {
      src: logo35, // USAID
      alt: "USAID",
      name: "USAID",
      priority: "high",
    },
    {
      src: logo33, // RAYA
      alt: "RAYA",
      name: "RAYA",
      priority: "high",
    },
    {
      src: logo34, // UNICEF
      alt: "UNICEF",
      name: "UNICEF",
      priority: "high",
    },
    {
      src: logo29, // Oracle
      alt: "Oracle",
      name: "Oracle",
      priority: "high",
    },
    {
      src: kraftHeinzLogo,
      alt: "Kraft Heinz",
      name: "Kraft Heinz",
      priority: "high",
    },
    {
      src: logo5,
      alt: "American Chamber of Commerce",
      name: "American Chamber of Commerce",
      priority: "high",
    },
    // Remaining logos
    {
      src: logo1,
      alt: "Client Logo 1",
      name: "Client 1",
      priority: "normal",
    },
    {
      src: logo2,
      alt: "Client Logo 2",
      name: "Client 2",
      priority: "normal",
    },
    {
      src: logo3,
      alt: "Client Logo 3",
      name: "Client 3",
      priority: "normal",
    },
    {
      src: logo4,
      alt: "Client Logo 4",
      name: "Client 4",
      priority: "normal",
    },
    {
      src: logo6,
      alt: "Client Logo 6",
      name: "Client 6",
      priority: "normal",
    },
    {
      src: logo7,
      alt: "Client Logo 7",
      name: "Client 7",
      priority: "normal",
    },
    {
      src: logo8,
      alt: "Client Logo 8",
      name: "Client 8",
      priority: "normal",
    },
    {
      src: logo9,
      alt: "Client Logo 9",
      name: "Client 9",
      priority: "normal",
    },
    {
      src: logo10,
      alt: "Client Logo 10",
      name: "Client 10",
      priority: "normal",
    },
    {
      src: logo11,
      alt: "Client Logo 11",
      name: "Client 11",
      priority: "normal",
    },
    {
      src: logo12,
      alt: "Client Logo 12",
      name: "Client 12",
      priority: "normal",
    },
    {
      src: logo13,
      alt: "Client Logo 13",
      name: "Client 13",
      priority: "normal",
    },
    {
      src: logo14,
      alt: "Client Logo 14",
      name: "Client 14",
      priority: "normal",
    },
    {
      src: logo15,
      alt: "Client Logo 15",
      name: "Client 15",
      priority: "normal",
    },
    {
      src: logo16,
      alt: "Client Logo 16",
      name: "Client 16",
      priority: "normal",
    },
    {
      src: logo17,
      alt: "Client Logo 17",
      name: "Client 17",
      priority: "normal",
    },
    {
      src: logo18,
      alt: "Client Logo 18",
      name: "Client 18",
      priority: "normal",
    },
    {
      src: logo19,
      alt: "Client Logo 19",
      name: "Client 19",
      priority: "normal",
    },
    {
      src: logo20,
      alt: "Client Logo 20",
      name: "Client 20",
      priority: "normal",
    },
    {
      src: logo21,
      alt: "Client Logo 21",
      name: "Client 21",
      priority: "normal",
    },
    {
      src: logo22,
      alt: "Client Logo 22",
      name: "Client 22",
      priority: "normal",
    },
    {
      src: logo23,
      alt: "Client Logo 23",
      name: "Client 23",
      priority: "normal",
    },
    {
      src: logo24,
      alt: "Client Logo 24",
      name: "Client 24",
      priority: "normal",
    },
    {
      src: logo25,
      alt: "Client Logo 25",
      name: "Client 25",
      priority: "normal",
    },
    {
      src: logo26,
      alt: "Client Logo 26",
      name: "Client 26",
      priority: "normal",
    },
    {
      src: logo27,
      alt: "Client Logo 27",
      name: "Client 27",
      priority: "normal",
    },
    {
      src: logo28,
      alt: "Client Logo 28",
      name: "Client 28",
      priority: "normal",
    },
    {
      src: logo30,
      alt: "Client Logo 30",
      name: "Client 30",
      priority: "normal",
    },
    {
      src: logo31,
      alt: "Client Logo 31",
      name: "Client 31",
      priority: "normal",
    },
    {
      src: logo32,
      alt: "Client Logo 32",
      name: "Client 32",
      priority: "normal",
    },
    {
      src: logo36,
      alt: "Client Logo 36",
      name: "Client 36",
      priority: "normal",
    },
    {
      src: logo37,
      alt: "Client Logo 37",
      name: "Client 37",
      priority: "normal",
    },
  ];

  return (
    <section id="clients" className="client-logos-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-header text-center" ref={headerRef}>
              <h2 className="section-title">
                We are happy to work with incredible clients
              </h2>
              <p className="section-subtitle">
                Over years of work, we have been honored to collaborate with a
                diverse group of distinguished clients from various sectors.
                Each partnership represents a unique success story and a mutual
                learning experience that enriches our expertise and develops our
                capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <div className="logos-grid unified-grid" ref={logosRef}>
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`logo-item ${
                    logo.priority === "high"
                      ? "priority-high"
                      : "priority-normal"
                  }`}
                  data-animate
                  style={{
                    "--animation-delay": `${index * 0.1}s`,
                  }}
                >
                  <div className="logo-container">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="logo-image"
                      title={logo.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
