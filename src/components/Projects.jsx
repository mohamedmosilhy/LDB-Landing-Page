import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_DATA } from "../constants/data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// PROJECTS COMPONENT
// =============================================================================
const Projects = () => {
  // ===========================================================================
  // STATE and REFS
  // ===========================================================================
  const projectsGridRef = useRef(null);

  // ===========================================================================
  // GSAP ANIMATIONS
  // ===========================================================================
  useEffect(() => {
    const projectsSection = projectsGridRef.current;
    if (!projectsSection) return;

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title
    tl.fromTo(
      projectsSection.querySelector(".section-title"),
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.2)" }
    )

      // Animate section subtitle
      .fromTo(
        projectsSection.querySelector(".section-subtitle"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      )

      // Animate project cards with flip effect
      .fromTo(
        projectsSection.querySelectorAll(".project-card"),
        {
          y: 60,
          opacity: 0,
          rotationY: -60,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.2)",
        }
      );

    // Add hover animations for project cards
    const projectCards = projectsSection.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -5,
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
      projectsSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, _index) => {
      gsap.to(element, {
        y: -10,
        duration: 1.8 + _index * 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: _index * 0.08,
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = projectsSection.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      gsap.to(element, {
        yPercent: -40 - index * 15,
        ease: "none",
        scrollTrigger: {
          trigger: projectsSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Add twinkling animation to stars
    const stars = projectsSection.querySelectorAll(".star");
    stars.forEach((star) => {
      gsap.to(star, {
        opacity: 0.2,
        duration: 2 + Math.random() * 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 3,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // ===========================================================================
  // RENDER PROJECT CARD
  // ===========================================================================
  const renderProjectCard = (project) => (
    <div
      key={project.id}
      className="project-card group relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative z-10 flex items-center space-x-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
          <i className={`${project.icon} text-xl text-white`}></i>
        </div>

        {/* Project Title */}
        <h3 className="fancy-heading-large text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500 flex-1">
          {project.title === "3F Model Owner for Learning Experience Design" ? (
            <span className="align-baseline">
              3F Model Owner for Learning Experience Design
            </span>
          ) : (
            project.title
          )}
        </h3>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f596d] via-[#1a7a8f] to-[#2a9bb3] relative overflow-hidden"
    >
      {/* Sky Background with Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f596d] via-[#1a7a8f] to-[#2a9bb3]"></div>

        {/* Stars/Sparkles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          ></div>
        ))}

        {/* Larger stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="star absolute w-1.5 h-1.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4 + Math.random() * 0.6,
            }}
          ></div>
        ))}

        {/* Cloud-like elements */}
        <div className="parallax-bg absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-40 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        <div className="parallax-bg absolute bottom-40 right-1/3 w-36 h-36 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Our Projects
          </h2>
          <p className="section-subtitle fancy-subtitle-large text-base sm:text-lg text-white/90 max-w-4xl mx-auto">
            Innovative solutions that transform learning and development across
            organizations.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          ref={projectsGridRef}
        >
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className={`${
                index === PROJECTS_DATA.length - 1 &&
                PROJECTS_DATA.length % 2 === 1
                  ? "md:col-span-2 md:max-w-md md:mx-auto"
                  : ""
              }`}
            >
              {renderProjectCard(project, index)}
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-white/40 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-10 w-5 h-5 bg-white/35 rounded-full"></div>
      </div>
    </section>
  );
};

export default Projects;
