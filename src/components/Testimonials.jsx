import React, { useState, useEffect } from "react";
import { useGSAPAnimation } from "../hooks/useGSAPAnimation";
import { TESTIMONIALS_DATA, ANIMATION_CONFIG } from "../constants/data";

// =============================================================================
// TESTIMONIALS COMPONENT
// =============================================================================
const Testimonials = () => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ===========================================================================
  // ANIMATION HOOKS
  // ===========================================================================
  const headerRef = useGSAPAnimation(
    ANIMATION_CONFIG.testimonials.header.type,
    ANIMATION_CONFIG.testimonials.header.delay
  );
  const carouselRef = useGSAPAnimation(
    ANIMATION_CONFIG.testimonials.carousel.type,
    ANIMATION_CONFIG.testimonials.carousel.delay
  );
  const navigationRef = useGSAPAnimation(
    ANIMATION_CONFIG.testimonials.navigation.type,
    ANIMATION_CONFIG.testimonials.navigation.delay
  );

  // ===========================================================================
  // AUTO-ROTATION EFFECT
  // ===========================================================================
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // ===========================================================================
  // NAVIGATION HANDLERS
  // ===========================================================================
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // ===========================================================================
  // RENDER TESTIMONIAL CARD
  // ===========================================================================
  const renderTestimonialCard = () => {
    const testimonial = TESTIMONIALS_DATA[currentSlide];
    
    return (
      <div
        className={`testimonial-card ${
          isTransitioning ? "transitioning" : "active"
        }`}
      >
        <div className="quote-icon">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="testimonial-content">
          <p className="quote-text">{testimonial.quote}</p>
          <div className="author-info">
            <h4 className="author-name">{testimonial.author}</h4>
            <p className="author-position">
              {testimonial.position}
              {testimonial.company && (
                <span className="author-company">, {testimonial.company}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ===========================================================================
  // RENDER INDICATORS
  // ===========================================================================
  const renderIndicators = () => (
    <div className="testimonials-indicators">
      {TESTIMONIALS_DATA.map((_, index) => (
        <button
          key={index}
          className={`indicator ${currentSlide === index ? "active" : ""}`}
          onClick={() => goToSlide(index)}
          aria-label={`Go to testimonial ${index + 1}`}
          disabled={isTransitioning}
        ></button>
      ))}
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="testimonials-header" ref={headerRef}>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real feedback from organizations and individuals who have
                experienced our transformative learning solutions
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="row">
          <div className="col-12">
            <div className="testimonials-carousel" ref={carouselRef}>
              {renderTestimonialCard()}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="row">
          <div className="col-12">
            <div className="testimonials-navigation" ref={navigationRef}>
              <button
                className={`nav-btn prev-btn ${
                  isTransitioning ? "disabled" : ""
                }`}
                onClick={prevSlide}
                disabled={isTransitioning}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              {renderIndicators()}
              <button
                className={`nav-btn next-btn ${
                  isTransitioning ? "disabled" : ""
                }`}
                onClick={nextSlide}
                disabled={isTransitioning}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
