import React, { useState, useEffect } from "react";
import { useGSAPAnimation } from "../hooks/useGSAPAnimation";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.2);
  const carouselRef = useGSAPAnimation("fadeInUp", 0.5);
  const navigationRef = useGSAPAnimation("fadeInUp", 0.8);

  const testimonials = [
    {
      id: 1,
      quote:
        "Working with the LDB team was an exceptional experience by all measures. They didn't just provide a regular training program; they designed a comprehensive learning experience that transformed our team's thinking and working style. The results far exceeded our expectations, and we now have a more interactive, creative, and challenge-ready team.",
      author: "Sarah Ahmed",
      position: "HR Manager",
      company: "Tech Innovation Company",
    },
    {
      id: 2,
      quote:
        "LDB's training methodology is unique and innovative. They managed to turn a complex subject like project management into an enjoyable and interactive experience. Now our team is 70% more efficient in project management.",
      author: "Mohammed Al-Khalidi",
      position: "Operations Manager",
      company: "",
    },
    {
      id: 3,
      quote:
        "The youth empowerment program provided by LDB was a turning point in my career. I not only learned new skills but also discovered capabilities I never knew I had.",
      author: "Fatima Al-Salmi",
      position: "Entrepreneur",
      company: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
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

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
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

        <div className="row">
          <div className="col-12">
            <div className="testimonials-carousel" ref={carouselRef}>
              <div
                className={`testimonial-card ${
                  isTransitioning ? "transitioning" : "active"
                }`}
              >
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="testimonial-content">
                  <p className="quote-text">
                    {testimonials[currentSlide].quote}
                  </p>
                  <div className="author-info">
                    <h4 className="author-name">
                      {testimonials[currentSlide].author}
                    </h4>
                    <p className="author-position">
                      {testimonials[currentSlide].position}
                      {testimonials[currentSlide].company && (
                        <span className="author-company">
                          , {testimonials[currentSlide].company}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <div className="testimonials-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      currentSlide === index ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    disabled={isTransitioning}
                  ></button>
                ))}
              </div>
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
