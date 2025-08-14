import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// WHY CHOOSE LDB COMPONENT
// =============================================================================
const WhyChooseLDB = () => {
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const whyChooseSection = whyChooseRef.current;
    if (!whyChooseSection) return;

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title
    tl.fromTo(
      whyChooseSection.querySelector(".section-title"),
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.2)" }
    )

      // Animate section subtitle
      .fromTo(
        whyChooseSection.querySelector(".section-subtitle"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      )

      // Animate feature cards with bounce effect
      .fromTo(
        whyChooseSection.querySelectorAll(".reason-item"),
        {
          y: 40,
          opacity: 0,
          scale: 0.9,
          rotation: -3,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "bounce.out",
        }
      );

    // Add hover animations for feature cards
    const featureCards = whyChooseSection.querySelectorAll(".reason-item");
    featureCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -8,
          rotationY: 3,
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
      whyChooseSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -8,
        duration: 1.5 + index * 0.15,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.05,
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = whyChooseSection.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -25 - index * 8,
        ease: "none",
        scrollTrigger: {
          trigger: whyChooseSection,
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
  const features = [
    {
      id: 1,
      title: "Research-Driven, Competency-Based Frameworks",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          <path d="M9 9.5l3 1.5 3-1.5" />
          <path d="M9 12.5l3 1.5 3-1.5" />
        </svg>
      ),
      color: "from-[#0f596d] to-[#1a7a8f]",
      delay: "delay-0",
    },
    {
      id: 2,
      title: "Culturally Grounded, Globally Aligned",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      color: "from-[#1a7a8f] to-[#2a9bb3]",
      delay: "delay-100",
    },
    {
      id: 3,
      title: "Integrated, Interdisciplinary Methodology",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L12 12.5 9.01 8.99C8.54 8.37 7.8 8 7 8H5.46c-.84 0-1.6.53-1.9 1.37L1.5 16H4v6h16z" />
          <path d="M12 12.5l2.99-3.51c.47-.62 1.21-.99 2.01-.99h1.54c.84 0 1.6.53 1.9 1.37L22.5 16H20v6H4v-6H1.5l2.54-7.63A1.5 1.5 0 0 1 5.46 8H7c.8 0 1.54.37 2.01.99L12 12.5z" />
        </svg>
      ),
      color: "from-[#2a9bb3] to-[#3bb8d4]",
      delay: "delay-200",
    },
    {
      id: 4,
      title: "Measurable Impact and Systemic Change",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        </svg>
      ),
      color: "from-[#3bb8d4] to-[#4dd4f7]",
      delay: "delay-300",
    },
    {
      id: 5,
      title: "From Design to Delivery—One Seamless System",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      color: "from-[#4dd4f7] to-[#5dd2f6]",
      delay: "delay-400",
    },
  ];

  return (
    <section
      ref={whyChooseRef}
      id="why-choose-ldb"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/10 to-[#3bb8d4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/5 to-[#4dd4f7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            Why Choose LDB?
          </h2>
          <p className="section-subtitle fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            At Learning Design Boutique (LDB), we don't just deliver services—we
            architect transformation. What sets us apart is not only what we do,
            but how and why we do it. Here's why LDB is the trusted partner for
            future-focused organizations, governments, and youth-focused
            institutions.
          </p>
        </div>

        {/* Main Content - Zigzag Layout */}
        <div className="flex flex-col items-center space-y-6 lg:space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`reason-item group w-full max-w-2xl ${
                index % 2 === 0 ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
              }`}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-3 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                {/* Centered Content Layout */}
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Decorative Elements */}
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#0f596d]/30 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-[#2a9bb3]/40 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-[#4dd4f7]/50 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-[#1a7a8f]/35 rounded-full"></div>
        <div className="floating-element absolute top-1/3 left-1/4 w-2 h-2 bg-[#3bb8d4]/45 rounded-full"></div>
        <div className="floating-element absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#0f596d]/25 rounded-full"></div>

        {/* Parallax background elements */}
        <div className="parallax-bg absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/10 to-[#3bb8d4]/10 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/5 to-[#4dd4f7]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default WhyChooseLDB;
