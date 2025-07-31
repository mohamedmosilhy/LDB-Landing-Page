import React, { useState, useEffect } from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";
import { PROJECTS_DATA, ANIMATION_CONFIG } from "../constants/data";

// =============================================================================
// PROJECTS COMPONENT
// =============================================================================
const Projects = () => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [isVisible, setIsVisible] = useState(false);

  // ===========================================================================
  // ANIMATION HOOKS
  // ===========================================================================
  const headerRef = useGSAPAnimation(
    ANIMATION_CONFIG.projects.header.type,
    ANIMATION_CONFIG.projects.header.delay
  );
  const projectsRef = useStaggerAnimation(
    ANIMATION_CONFIG.projects.cards.type,
    ANIMATION_CONFIG.projects.cards.stagger,
    ANIMATION_CONFIG.projects.cards.delay
  );

  // ===========================================================================
  // INTERSECTION OBSERVER
  // ===========================================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Always restart animation when entering the section
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(".projects-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // ===========================================================================
  // RENDER PROJECT CARD
  // ===========================================================================
  const renderProjectCard = (project, index) => (
    <div
      key={project.id}
      className="project-card"
      data-animate
      style={{
        "--animation-delay": `${index * 0.1}s`,
        "--card-color": project.color,
      }}
    >
      <div className="card-header">
        <div className="card-title">
          <i className={project.icon}></i>
          <h3>{project.title}</h3>
        </div>
      </div>

      <div className="card-background"></div>
      <div className="floating-elements">
        <div className="floating-star star-1"></div>
        <div className="floating-star star-2"></div>
        <div className="floating-star star-3"></div>
        <div className="floating-star star-4"></div>
        <div className="floating-star star-5"></div>
        <div className="floating-dot"></div>
        <div className="floating-line"></div>
      </div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="projects-header" ref={headerRef}>
              <h2 className="section-title">Our Projects</h2>
              <p className="section-subtitle">
                Innovative solutions that transform learning and development
                across organizations
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          <div className="col-12">
            <div
              className={`projects-grid ${isVisible ? "visible" : ""}`}
              ref={projectsRef}
            >
              {PROJECTS_DATA.map(renderProjectCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
