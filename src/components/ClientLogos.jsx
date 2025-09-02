import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_LOGOS_DATA } from "../constants/data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import all logos from assets
import americanChamberLogo from "../assets/logos/american-chamber-logo.png";
import bmwLogo from "../assets/logos/bmw-logo.png";
import etisalatLogo from "../assets/logos/etisalat-logo.svg";
import kraftHeinzLogo from "../assets/logos/kraft-heinz-logo.png";
import pepsicoLogo from "../assets/logos/pepsico-logo.png";
import vodafoneLogo from "../assets/logos/vodafone-logo.png";
import gascoLogo from "../assets/logos/شركة-جاسكو.jpg";
import namaaLogo from "../assets/logos/نماء.webp";
import unicefLogo from "../assets/logos/logo-unicef-logo-whiteonblue.jpg";
import usaidLogo from "../assets/logos/logo-USAID-Logo.png";
import gizLogo from "../assets/logos/logo-giz.png";
import hayahLogo from "../assets/logos/logo-hayah-international-academy2-1.jpg";
import rayaLogo from "../assets/logos/logo-raya-logo-en.png";
import lorealLogo from "../assets/logos/logo-loreal-paris-vector-logo.png";
import msaLogo from "../assets/logos/logo-MSA.png";
import mtnLogo from "../assets/logos/logo-MTN_Logo.svg.png";
import oracleLogo from "../assets/logos/logo-OracleRedwood2.webp";
import exxonLogo from "../assets/logos/logo-ExxonMobil-Logo.png";
import logo98569 from "../assets/logos/logo-98569_Logo_Eng_JPGfront.jpg";
import logo629e96e4 from "../assets/logos/logo-629e96e4-7346-44dd-bc7c-683663d16501.png";
import logo2URJx6kB from "../assets/logos/logo-2URJx6kB_400x400.jpeg";
import logo28262d299f40f007f3e359c3c7053fad from "../assets/logos/28262d299f40f007f3e359c3c7053fad.jpg";
import logoKisspng from "../assets/logos/logo-kisspng-logo-istikbal.png";
import logoV3 from "../assets/logos/logo-Logo-v3-No-Background.png";
import engageLogo from "../assets/logos/logo-engage_total_hr_solution_logo.jpeg";
import imageHandlerLogo from "../assets/logos/logo-ImageHandler.png";
import logoImages3 from "../assets/logos/logo-images-3.png";
import logoImages4 from "../assets/logos/logo-images-4.png";
import logoImages5 from "../assets/logos/logo-images-5.png";
import logoImages6 from "../assets/logos/logo-images-6.png";
import logoImages7 from "../assets/logos/logo-images-7.png";
import logoImages8 from "../assets/logos/logo-images-8.png";
import logoImages9 from "../assets/logos/logo-images-9.jpeg";
import logoImages10 from "../assets/logos/logo-images-10.jpeg";
import channels4Logo from "../assets/logos/logo-channels4_profile.jpg";
import downloadLogo from "../assets/logos/logo-download-3-2.jpg";
import psxLogo1 from "../assets/logos/logo-PSX_20220208_124911.jpg";
import psxLogo2 from "../assets/logos/logo-PSX_20240218_173046.png";
import takamol from "../assets/logos/Takamull_Full_W.jpg";
import slb from "../assets/logos/slb-logo.png";
import shell from "../assets/logos/shell-logo.png";
// =============================================================================
// CLIENT LOGOS COMPONENT
// =============================================================================
const ClientLogos = () => {
  const clientLogosRef = useRef(null);

  useEffect(() => {
    const clientLogosSection = clientLogosRef.current;
    if (!clientLogosSection) return;

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clientLogosSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title
    tl.fromTo(
      clientLogosSection.querySelector(".section-title"),
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.2)" }
    )

      // Animate section subtitle
      .fromTo(
        clientLogosSection.querySelector(".section-subtitle"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      )

      // Animate logos with wave effect
      .fromTo(
        clientLogosSection.querySelectorAll(".client-logo"),
        {
          y: 40,
          opacity: 0,
          scale: 0.7,
          rotation: -10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "elastic.out(1, 0.3)",
        }
      );

    // Add hover animations for logos
    const logoElements = clientLogosSection.querySelectorAll(".client-logo");
    logoElements.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
          scale: 1.1,
          y: -5,
          rotation: 5,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    // Add floating animation to decorative elements
    const floatingElements =
      clientLogosSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -8,
        duration: 2 + index * 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.1,
      });
    });

    // Add continuous rotation to some elements
    const rotatingElements =
      clientLogosSection.querySelectorAll(".rotating-element");
    rotatingElements.forEach((element, index) => {
      gsap.to(element, {
        rotation: 360,
        duration: 15 + index * 3,
        ease: "none",
        repeat: -1,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // ===========================================================================
  // CLIENT LOGOS DATA - Using imported logos from assets
  // ===========================================================================
  const clientLogos = [
    { src: bmwLogo, alt: "BMW Logo" },
    { src: vodafoneLogo, alt: "Vodafone Logo" },
    { src: pepsicoLogo, alt: "PepsiCo Logo" },
    { src: etisalatLogo, alt: "Etisalat UAE Logo" },
    { src: kraftHeinzLogo, alt: "Kraft Heinz Logo" },
    { src: oracleLogo, alt: "Oracle Logo" },
    { src: usaidLogo, alt: "USAID Logo" },
    { src: rayaLogo, alt: "RAYA Logo" },
    { src: unicefLogo, alt: "UNICEF Logo" },
    { src: americanChamberLogo, alt: "American Chamber Logo" },
    { src: gascoLogo, alt: "Gasco Logo" },
    { src: namaaLogo, alt: "Namaa Logo" },
    { src: gizLogo, alt: "GIZ Logo" },
    { src: hayahLogo, alt: "Hayah International Academy Logo" },
    { src: lorealLogo, alt: "L'Oreal Logo" },
    { src: msaLogo, alt: "MSA Logo" },
    { src: mtnLogo, alt: "MTN Logo" },
    { src: exxonLogo, alt: "ExxonMobil Logo" },
    { src: logo98569, alt: "Logo 98569" },
    { src: logo629e96e4, alt: "Logo 629e96e4" },
    { src: logo2URJx6kB, alt: "Logo 2URJx6kB" },
    {
      src: logo28262d299f40f007f3e359c3c7053fad,
      alt: "Logo 28262d299f40f007f3e359c3c7053fad",
    },
    { src: logoKisspng, alt: "Kisspng Logo" },
    { src: logoV3, alt: "Logo V3" },
    { src: engageLogo, alt: "Engage Total HR Solution Logo" },
    { src: imageHandlerLogo, alt: "Image Handler Logo" },
    { src: logoImages3, alt: "Logo Images 3" },
    { src: logoImages4, alt: "Logo Images 4" },
    { src: logoImages5, alt: "Logo Images 5" },
    { src: logoImages6, alt: "Logo Images 6" },
    { src: logoImages7, alt: "Logo Images 7" },
    { src: logoImages8, alt: "Logo Images 8" },
    { src: logoImages9, alt: "Logo Images 9" },
    { src: logoImages10, alt: "Logo Images 10" },
    { src: channels4Logo, alt: "Channels 4 Logo" },
    { src: downloadLogo, alt: "Download Logo" },
    { src: psxLogo1, alt: "PSX Logo 1" },
    { src: psxLogo2, alt: "PSX Logo 2" },
    { src: takamol, alt: "Takamol Logo" },
    { src: slb, alt: "SLB Logo" },
    { src: shell, alt: "Shell Logo" },
  ];

  // ===========================================================================
  // RENDER LOGO
  // ===========================================================================
  const renderLogo = (logo, index) => (
    <div
      key={index}
      className="client-logo group relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-32 h-32 flex-shrink-0"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Logo Container */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-20 max-w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg"
          loading="lazy"
          onError={(e) => {
            console.warn(`Failed to load logo: ${logo.alt}`);
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      ref={clientLogosRef}
      id="clients"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/10 to-[#3bb8d4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/5 to-[#4dd4f7]/5 rounded-full blur-3xl"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            {CLIENT_LOGOS_DATA.header.title}
          </h2>
          <p className="section-subtitle fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            {CLIENT_LOGOS_DATA.header.subtitle}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {clientLogos.map(renderLogo)}
        </div>

        {/* Enhanced Floating Decorative Elements */}
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#0f596d]/30 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-[#2a9bb3]/40 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-[#4dd4f7]/50 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-[#1a7a8f]/35 rounded-full"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-2 h-2 bg-[#3bb8d4]/45 rounded-full"></div>
        <div className="floating-element absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#0f596d]/25 rounded-full"></div>

        {/* Rotating decorative elements */}
        <div className="rotating-element absolute top-1/4 right-1/4 w-8 h-8 border border-[#0f596d]/20 rounded-full"></div>
        <div className="rotating-element absolute bottom-1/4 left-1/4 w-6 h-6 border border-[#2a9bb3]/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default ClientLogos;
