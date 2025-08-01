import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DATA } from "../constants/data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// SERVICES COMPONENT
// =============================================================================
const Services = () => {
  // ===========================================================================
  // STATE and REFS
  // ===========================================================================
  const [activeService, setActiveService] = useState(null);
  const servicesGridRef = useRef(null);

  // ===========================================================================
  // GSAP ANIMATIONS
  // ===========================================================================
  useEffect(() => {
    const servicesSection = servicesGridRef.current;
    if (!servicesSection) return;

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title with text reveal
    tl.fromTo(
      servicesSection.querySelector(".section-title"),
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.2)" }
    )

      // Animate section description
      .fromTo(
        servicesSection.querySelector(".section-description"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      )

      // Animate service cards with 3D flip effect
      .fromTo(
        servicesSection.querySelectorAll(".service-card"),
        {
          y: 60,
          opacity: 0,
          rotationY: 30,
          scale: 0.9,
          transformOrigin: "center center",
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.2)",
        }
      );

    // Add hover animations for service cards
    const serviceCards = servicesSection.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          rotationY: 5,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    // Add floating animation to decorative elements
    const floatingElements =
      servicesSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -10,
        duration: 1.8 + index * 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.08,
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = servicesSection.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -40 - index * 15,
        ease: "none",
        scrollTrigger: {
          trigger: servicesSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // ===========================================================================
  // RENDER SERVICE CARD
  // ===========================================================================
  const renderServiceCard = (service, index) => (
    <div
      key={service.id}
      className={`service-card group relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-400 hover:scale-105 hover:-translate-y-4 cursor-pointer w-96 flex-shrink-0 ${
        activeService === service.id ? "ring-4 ring-[#0f596d]/30" : ""
      }`}
      onClick={() =>
        setActiveService(activeService === service.id ? null : service.id)
      }
      style={{
        animationDelay: `${index * 100}ms`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#2a9bb3] to-[#3bb8d4] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[#1a7a8f] to-[#4dd4f7] rounded-full blur-xl"></div>
      </div>

      {/* Service Number Badge */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
        <span className="fancy-subtitle text-xs text-white font-bold">
          {service.id}
        </span>
      </div>

      {/* Icon Container */}
      <div className="relative z-10 mb-8 mt-4">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
          <i
            className={`${service.icon} text-3xl text-white relative z-10`}
          ></i>
          {/* Icon Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500 mb-4 text-xl">
          {service.name}
        </h3>
        <p className="fancy-subtitle text-[#4a5568] mb-6 leading-relaxed text-sm">
          {service.description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 group/feature"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-full flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"></div>
              <span className="fancy-body text-sm text-[#4a5568] group-hover/feature:text-[#0f596d] transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Methodology Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0f596d]/10 to-[#4dd4f7]/10 border border-[#0f596d]/20 group-hover:border-[#0f596d]/40 transition-all duration-500">
          <span className="fancy-subtitle text-xs text-[#0f596d] font-medium group-hover:font-semibold transition-all duration-300">
            {service.methodology}
          </span>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-[#0f596d]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#4dd4f7]/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse delay-200"></div>
      <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-[#2a9bb3]/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse delay-400"></div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-[#0f596d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/20 to-[#4dd4f7]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/20 to-[#3bb8d4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/15 to-[#4dd4f7]/15 rounded-full blur-3xl"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-tr from-indigo-300/50 to-blue-300/50 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-slate-300/60 to-blue-300/60 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            What Are Our Services?
          </h2>
          <p className="section-description fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto leading-relaxed">
            At Learning Design Boutique (LDB), we offer a fully integrated suite
            of services designed to drive measurable transformation across
            individuals, teams, and institutions. Our services are anchored in
            research, powered by design, and delivered with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="flex flex-wrap justify-center gap-8 lg:gap-10 relative"
          ref={servicesGridRef}
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 flex flex-wrap justify-center gap-8 lg:gap-10 pointer-events-none opacity-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-80 h-64 bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] rounded-3xl blur-sm"
              ></div>
            ))}
          </div>

          {SERVICES_DATA.map((service, index) =>
            renderServiceCard(service, index)
          )}
        </div>

        {/* Enhanced Floating Decorative Elements */}
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#0f596d]/30 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-[#2a9bb3]/40 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-[#4dd4f7]/50 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-[#1a7a8f]/35 rounded-full"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-2 h-2 bg-[#3bb8d4]/45 rounded-full"></div>
        <div className="floating-element absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#0f596d]/25 rounded-full"></div>
      </div>
    </section>
  );
};

export default Services;
