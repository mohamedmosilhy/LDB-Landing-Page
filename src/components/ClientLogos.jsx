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

const ClientLogos = () => {
  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.2);
  const logosRef = useStaggerAnimation("scaleIn", 0.05, 0.5);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
    logo28,
    logo29,
    logo30,
    logo31,
    logo32,
    logo33,
    logo34,
    logo35,
    logo36,
    logo37,
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
            <div className="logos-grid" ref={logosRef}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="logo-item"
                  data-animate
                  style={{
                    "--animation-delay": `${index * 0.1}s`,
                  }}
                >
                  <div className="logo-container">
                    <img
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      className="logo-image"
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
