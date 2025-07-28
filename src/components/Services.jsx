import React, { useState, useEffect } from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.2);
  const carouselRef = useStaggerAnimation("fadeInUp", 0.3, 0.5);
  const indicatorsRef = useGSAPAnimation("fadeInUp", 1.0);

  const services = [
    {
      id: 1,
      name: "Performance-Driven Coaching",
      description:
        "Transform individual and team performance through targeted coaching methodologies",
      icon: "fas fa-chart-line",
      color: "#0f596d",
    },
    {
      id: 2,
      name: "Innovation & Creativity Workshops",
      description:
        "Unlock creative potential through interactive workshops and design thinking",
      icon: "fas fa-lightbulb",
      color: "#1a7a8f",
    },
    {
      id: 3,
      name: "Strategic Learning Ecosystems",
      description:
        "Design comprehensive learning environments that drive organizational growth",
      icon: "fas fa-network-wired",
      color: "#2a9bb3",
    },
    {
      id: 4,
      name: "Future-Ready Skill Development",
      description:
        "Prepare teams for tomorrow's challenges with cutting-edge skill programs",
      icon: "fas fa-rocket",
      color: "#3bb8d4",
    },
    {
      id: 5,
      name: "Gamified Engagement Solutions",
      description:
        "Boost engagement and retention through innovative gamified learning experiences",
      icon: "fas fa-gamepad",
      color: "#4dd4f7",
    },
    {
      id: 6,
      name: "Experiential Learning Journeys",
      description:
        "Create immersive learning experiences that transform knowledge into action",
      icon: "fas fa-compass",
      color: "#0f596d",
    },
    {
      id: 7,
      name: "Global Implementation & Training",
      description:
        "Scale learning solutions across international markets and diverse cultures",
      icon: "fas fa-globe",
      color: "#1a7a8f",
    },
    {
      id: 8,
      name: "Digital Learning Platform Development",
      description:
        "Build custom digital learning platforms that revolutionize education delivery",
      icon: "fas fa-laptop-code",
      color: "#2a9bb3",
    },
    {
      id: 9,
      name: "Leadership Development Programs",
      description:
        "Cultivate next-generation leaders through comprehensive development programs",
      icon: "fas fa-users-cog",
      color: "#3bb8d4",
    },
    {
      id: 10,
      name: "Educational Consulting & Curriculum Design",
      description:
        "Design innovative curricula and educational strategies for modern learning",
      icon: "fas fa-graduation-cap",
      color: "#4dd4f7",
    },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services-header" ref={headerRef}>
              <div className="header-content">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                  Comprehensive learning solutions designed to transform
                  individuals, teams, and organizations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="services-carousel" ref={carouselRef}>
              {getVisibleServices().map((service) => (
                <div key={service.id} className="service-card" data-animate>
                  <div className="card-image">
                    <div
                      className="image-placeholder"
                      style={{ backgroundColor: service.color }}
                    >
                      <i className={service.icon}></i>
                    </div>
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="service-info">
                      <h4 className="service-title">{service.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="services-indicators" ref={indicatorsRef}>
              {Array.from(
                { length: Math.ceil(services.length / 3) },
                (_, i) => (
                  <button
                    key={i}
                    className={`indicator ${
                      Math.floor(currentSlide / 3) === i ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(i * 3)}
                    aria-label={`Go to slide ${i + 1}`}
                  ></button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
