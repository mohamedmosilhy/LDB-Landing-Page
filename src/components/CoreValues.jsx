import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CORE_VALUES_DATA } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const coreValuesRef = useRef(null);

  useEffect(() => {
    const coreValuesSection = coreValuesRef.current;
    if (!coreValuesSection) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: coreValuesSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      coreValuesSection.querySelector(".section-title"),
      { y: 50, opacity: 0, scale: 0.8, rotationX: 15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "back.out(1.4)",
      }
    )
      .fromTo(
        coreValuesSection.querySelector(".section-subtitle"),
        { y: 30, opacity: 0, blur: 4 },
        { y: 0, opacity: 1, blur: 0, duration: 0.4, ease: "power2.out" }
      )
      .fromTo(
        coreValuesSection.querySelectorAll(".floating-decoration"),
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
        }
      )
      .fromTo(
        coreValuesSection.querySelectorAll(".value-card"),
        { y: 60, opacity: 0, scale: 0.8, rotationY: 25 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
        }
      );

    const valueCards = coreValuesSection.querySelectorAll(".value-card");
    valueCards.forEach((card, index) => {
      const icon = card.querySelector(".value-icon");
      const title = card.querySelector(".value-title");
      const description = card.querySelector(".value-description");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.08,
          y: -10,
          rotationY: index % 2 === 0 ? 2 : -2,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
          ease: "back.out(1.4)",
        });

        if (title) {
          gsap.to(title, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        if (description) {
          gsap.to(description, {
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        if (title) {
          gsap.to(title, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        if (description) {
          gsap.to(description, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    });

    const floatingElements = coreValuesSection.querySelectorAll(
      ".floating-decoration"
    );
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        rotation: 360,
        duration: 4 + index * 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.2,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={coreValuesRef}
      id="core-values"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-decoration absolute top-16 left-8 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full"></div>
        <div className="floating-decoration absolute top-32 right-12 w-4 h-4 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-full"></div>
        <div className="floating-decoration absolute bottom-32 left-16 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full"></div>
        <div className="floating-decoration absolute bottom-16 right-8 w-5 h-5 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title fancy-title-large text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-8 font-bold">
            {CORE_VALUES_DATA.header.title}
          </h2>
          <p className="section-subtitle fancy-subtitle-large text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {CORE_VALUES_DATA.header.subtitle}
          </p>
        </div>

        {/* Main Content - Stair-step only on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {CORE_VALUES_DATA.values.map((value, index) => (
            <div
              key={value.id}
              className={`value-card group flex flex-col h-full ${
                index % 2 === 1 ? "lg:mt-10" : "lg:mt-0"
              }`}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 flex flex-col h-full overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                  {/* Icon */}
                  <div className="value-icon relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      <i
                        className={`${value.icon} text-3xl text-white relative z-10`}
                      ></i>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 rounded-2xl border-2 border-blue-200/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3 className="value-title fancy-heading-large text-gray-800 group-hover:text-[#0f596d] transition-colors duration-500 text-xl font-bold leading-tight">
                    {value.title}
                  </h3>

                  {/* Description */}
                  {value.description && (
                    <p className="value-description text-gray-600 group-hover:text-gray-700 transition-colors duration-500 text-base leading-relaxed">
                      {value.description}
                    </p>
                  )}

                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] rounded-full opacity-30 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
