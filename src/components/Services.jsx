import React, { useState, useEffect } from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";
import { SERVICES_DATA, ANIMATION_CONFIG } from "../constants/data";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // GSAP Animation refs
  const headerRef = useGSAPAnimation(ANIMATION_CONFIG.services.header.type, ANIMATION_CONFIG.services.header.delay);
  const carouselRef = useStaggerAnimation(ANIMATION_CONFIG.services.carousel.type, ANIMATION_CONFIG.services.carousel.stagger, ANIMATION_CONFIG.services.carousel.delay);
  const indicatorsRef = useGSAPAnimation(ANIMATION_CONFIG.services.indicators.type, ANIMATION_CONFIG.services.indicators.delay);

  const services = SERVICES_DATA;

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
