import React, { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const projects = [
    {
      id: 1,
      title: "ZAT",
      icon: "fas fa-chart-line",
      color: "#0f596d",
    },
    {
      id: 2,
      title: "Gamification Product",
      icon: "fas fa-gamepad",
      color: "#1a7a8f",
    },
    {
      id: 3,
      title: "LIFTS",
      icon: "fas fa-users-cog",
      color: "#2a9bb3",
    },
    {
      id: 4,
      title: "Organizational Developmental Assessment",
      icon: "fas fa-building",
      color: "#3bb8d4",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation state
          setIsVisible(false);
          setAnimationKey((prev) => prev + 1);

          // Trigger animation after a brief delay
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        } else {
          setIsVisible(false);
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

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="projects-header">
              <h2 className="section-title">Our Projects</h2>
              <p className="section-subtitle">
                Innovative solutions that transform learning and development
                across organizations
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div
              className={`projects-grid ${isVisible ? "visible" : ""}`}
              key={animationKey}
            >
              {projects.map((project, index) => (
                <div
                  key={`${project.id}-${animationKey}`}
                  className="project-card"
                  style={{
                    "--animation-delay": `${index * 0.3}s`,
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
                    <div className="floating-dot"></div>
                    <div className="floating-line"></div>
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

export default Projects;
