import React, { useState, useEffect, useRef } from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";
import { SERVICES_DATA, ANIMATION_CONFIG } from "../constants/data";

// =============================================================================
// SERVICES COMPONENT
// =============================================================================
const Services = () => {
  // ===========================================================================
  // STATE & REFS
  // ===========================================================================
  const [isVisible, setIsVisible] = useState(false);
  const servicesGridRef = useRef(null);

  // ===========================================================================
  // ANIMATION HOOKS
  // ===========================================================================
  const headerRef = useGSAPAnimation(
    ANIMATION_CONFIG.services.header.type,
    ANIMATION_CONFIG.services.header.delay
  );

  // ===========================================================================
  // INTERSECTION OBSERVER
  // ===========================================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (servicesGridRef.current) {
      observer.observe(servicesGridRef.current);
    }

    return () => {
      if (servicesGridRef.current) {
        observer.unobserve(servicesGridRef.current);
      }
    };
  }, []);

  // ===========================================================================
  // RENDER SERVICE CARD
  // ===========================================================================
  const renderServiceCard = (service) => (
    <div key={service.id} className="service-card">
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
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="service-info">
          <h4 className="service-title">{service.name}</h4>
        </div>
      </div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="row">
          <div className="col-12">
            <div
              className={`services-grid ${isVisible ? "animate" : ""}`}
              ref={servicesGridRef}
            >
              {SERVICES_DATA.map(renderServiceCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
