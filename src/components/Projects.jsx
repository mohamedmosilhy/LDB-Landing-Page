import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_DATA } from "../constants/data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// MODAL COMPONENT
// =============================================================================
const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      // Animate modal opening
      gsap.set([overlayRef.current, modalRef.current], { autoAlpha: 0 });
      gsap.set(modalRef.current, { scale: 0.8, y: 50 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 }).to(
        modalRef.current,
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      const tl = gsap.timeline();
      tl.to(modalRef.current, {
        scale: 0.8,
        y: 50,
        autoAlpha: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
      })
        .to(overlayRef.current, { autoAlpha: 0, duration: 0.2 }, "-=0.1")
        .call(() => onClose());
    } else {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="relative p-8 text-white rounded-t-2xl bg-gradient-to-br"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
          }}
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <i className={`${project.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">{project.title}</h2>
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 hover:scale-110"
              >
                <i className="fas fa-times text-white text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <div
                className="w-1 h-8 rounded-full mr-4"
                style={{ backgroundColor: project.color }}
              ></div>
              About This Project
            </h3>
            <div
              className="bg-gray-50 rounded-xl p-6 border-l-4"
              style={{ borderLeftColor: project.color }}
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// PROJECTS COMPONENT
// =============================================================================
const Projects = () => {
  // ===========================================================================
  // STATE and REFS
  // ===========================================================================
  const projectsGridRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ===========================================================================
  // MODAL HANDLERS
  // ===========================================================================
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
    const sectionTitle = projectsSection.querySelector(".section-title");
    if (sectionTitle) {
      tl.fromTo(
        sectionTitle,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.2)" }
      );
    }

    // Animate section subtitle
    const sectionSubtitle = projectsSection.querySelector(".section-subtitle");
    if (sectionSubtitle) {
      tl.fromTo(
        sectionSubtitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }

    // Animate project cards with flip effect
    const projectCards = projectsSection.querySelectorAll(".project-card");
    if (projectCards.length > 0) {
      tl.fromTo(
        projectCards,
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
    }

    // Add hover animations for project cards
    const projectCardsForHover =
      projectsSection.querySelectorAll(".project-card");
    projectCardsForHover.forEach((card) => {
      if (card) {
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
      }
    });

    // Add floating animation to decorative elements
    const floatingElements =
      projectsSection.querySelectorAll(".floating-element");
    floatingElements.forEach((element, _index) => {
      if (element) {
        gsap.to(element, {
          y: -10,
          duration: 1.8 + _index * 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: _index * 0.08,
        });
      }
    });

    // Add parallax effect to background elements
    const parallaxElements = projectsSection.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      if (element) {
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
      }
    });

    // Add twinkling animation to stars
    const stars = projectsSection.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star) {
        gsap.to(star, {
          opacity: 0.2,
          duration: 2 + Math.random() * 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 3,
        });
      }
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
      className="project-card group relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-48 flex flex-col"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between mb-4 flex-grow">
          <div className="flex items-start space-x-4 flex-1 min-w-0">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
              <i className={`${project.icon} text-xl text-white`}></i>
            </div>

            {/* Project Title */}
            <div className="flex-1 min-w-0">
              <h3 className="fancy-heading-large text-lg font-semibold text-[#1a202c] group-hover:text-[#0f596d] transition-colors duration-500 leading-tight">
                {project.title ===
                "3F Model Owner for Learning Experience Design" ? (
                  <span className="align-baseline">
                    3F Model Owner for Learning Experience Design
                  </span>
                ) : (
                  project.title
                )}
              </h3>

              {/* Brief description preview */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                {project.description?.substring(0, 120)}...
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-auto">
          <button
            onClick={() => openModal(project)}
            className="px-4 py-2 bg-gradient-to-r from-[#0f596d] to-[#2a9bb3] text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm"
          >
            <span>View Details</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
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
    <>
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f596d] via-[#1a7a8f] to-[#2a9bb3] relative overflow-hidden"
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Our Projects
            </h2>
            <p className="section-subtitle fancy-subtitle-large text-base sm:text-lg text-white/90 max-w-4xl mx-auto">
              Innovative solutions that transform learning and development
              across organizations.
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
                    ? "md:col-span-2 md:max-w-2xl md:mx-auto"
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;
