import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORE_VALUES_DATA } from "../constants/data";
import coreValuesImage from "../assets/coreValues.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// CORE VALUES COMPONENT
// =============================================================================
const CoreValues = () => {
  const coreValuesRef = useRef(null);

  useEffect(() => {
    const coreValuesSection = coreValuesRef.current;
    if (!coreValuesSection) return;

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: coreValuesSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title
    tl.fromTo(
      coreValuesSection.querySelector(".section-title"),
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" }
    )

      // Animate section subtitle
      .fromTo(
        coreValuesSection.querySelector(".section-subtitle"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      )

      // Animate central image with morphing effect
      .fromTo(
        coreValuesSection.querySelector(".core-values-image"),
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotationX: 60,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.7,
          ease: "back.out(1.4)",
        }
      )

      // Animate value cards with stagger and bounce effect
      .fromTo(
        coreValuesSection.querySelectorAll(".value-card"),
        {
          y: 40,
          opacity: 0,
          scale: 0.9,
          rotation: -5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "bounce.out",
        }
      );

    // Add hover animations for value cards
    const valueCards = coreValuesSection.querySelectorAll(".value-card");
    valueCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -5,
          rotationY: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Add floating animation to decorative elements
    const floatingElements =
      coreValuesSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -10,
        duration: 2.5 + index * 0.3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.15,
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = coreValuesSection.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -30 - index * 10,
        ease: "none",
        scrollTrigger: {
          trigger: coreValuesSection,
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
  // RENDER VALUE CARD
  // ===========================================================================
  const renderValueCard = (value) => (
    <div
      key={value.id}
      className="value-card bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-3 relative overflow-hidden group"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

      <div className="flex items-center space-x-4 relative z-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
          <i className={`${value.icon} text-xl text-white`}></i>
        </div>
        <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500">
          {value.title}
        </h3>
      </div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      ref={coreValuesRef}
      id="core-values"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/15 to-[#4dd4f7]/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/15 to-[#3bb8d4]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>

        {/* Additional unique decorative elements */}
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full blur-lg"></div>

        {/* Parallax background elements */}
        <div className="parallax-bg absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/15 to-[#4dd4f7]/15 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/15 to-[#3bb8d4]/15 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            {CORE_VALUES_DATA.header.title}
          </h2>
          <p className="section-subtitle fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            {CORE_VALUES_DATA.header.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Mobile/Tablet Layout - Image First, then Cards */}
          <div className="lg:hidden">
            {/* Central Image - First */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="core-values-image relative w-80 h-64 sm:w-96 sm:h-80 rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                  <img
                    src={coreValuesImage}
                    alt="Core Values - Growth and Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f596d] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#4dd4f7] rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Cards in Column Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {CORE_VALUES_DATA.values.map(renderValueCard)}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original Design (Image Center, Cards Left/Right) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* Left Cards */}
              <div className="space-y-6">
                {CORE_VALUES_DATA.values.slice(0, 2).map(renderValueCard)}
              </div>

              {/* Central Image */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Glow effect behind the image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Main image container */}
                  <div className="core-values-image relative w-96 h-[28rem] rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                    <img
                      src={coreValuesImage}
                      alt="Core Values - Growth and Development"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f596d] rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#4dd4f7] rounded-full opacity-60 animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Right Cards */}
              <div className="space-y-6">
                {CORE_VALUES_DATA.values.slice(2).map(renderValueCard)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
