import React, { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "../constants/data";

// =============================================================================
// TESTIMONIALS COMPONENT
// =============================================================================
const Testimonials = () => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // ===========================================================================
  // AUTO PLAY EFFECT
  // ===========================================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // 30 seconds per testimonial

    return () => clearInterval(interval);
  }, []);

  // ===========================================================================
  // INTERSECTION OBSERVER
  // ===========================================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("testimonials");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // ===========================================================================
  // EVENT HANDLERS
  // ===========================================================================
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // ===========================================================================
  // RENDER TESTIMONIAL
  // ===========================================================================
  const renderTestimonial = (testimonial, index) => (
    <div
      key={index}
      className={`transition-all duration-700 ease-in-out ${
        index === currentIndex
          ? "opacity-100 transform translate-x-0 scale-100"
          : "opacity-0 transform translate-x-full scale-95 absolute inset-0"
      }`}
    >
      <div className="group relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

        {/* Quote Icon */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <i className="fas fa-quote-left text-white text-sm sm:text-lg"></i>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Quote */}
          <blockquote className="fancy-subtitle-large text-[#2d3748] mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg italic pr-12 sm:pr-16">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Author Avatar */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 flex-shrink-0">
              <span className="fancy-heading-large text-white text-lg sm:text-xl font-bold">
                {testimonial.author.charAt(0)}
              </span>
            </div>

            {/* Author Details */}
            <div className="min-w-0 flex-1">
              <h4 className="fancy-heading-large text-[#1a202c] font-semibold text-sm sm:text-base truncate">
                {testimonial.author}
              </h4>
              <p className="fancy-subtitle text-[#4a5568] text-xs sm:text-sm truncate">
                {testimonial.position}
              </p>
              {testimonial.company && (
                <p className="fancy-body text-[#718096] text-xs truncate">
                  {testimonial.company}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/5 to-[#4dd4f7]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0f596d]/10 to-[#4dd4f7]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2a9bb3]/10 to-[#3bb8d4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1a7a8f]/5 to-[#4dd4f7]/5 rounded-full blur-3xl"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fancy-title-large text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0f596d] via-[#2a9bb3] to-[#4dd4f7] bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="fancy-subtitle-large text-base sm:text-lg text-[#2d3748] max-w-4xl mx-auto">
            Hear from the organizations and individuals who have experienced the
            transformative power of our learning solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonial Container */}
          <div className="relative min-h-[400px] sm:min-h-[350px] md:min-h-[300px] lg:min-h-[250px] mb-8 sm:mb-10 lg:mb-12">
            {TESTIMONIALS_DATA.map((testimonial, index) =>
              renderTestimonial(testimonial, index)
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-sm sm:text-base"></i>
            </button>

            {/* Indicators */}
            <div className="flex space-x-2 sm:space-x-3">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#0f596d] to-[#4dd4f7] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0f596d] to-[#4dd4f7] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-sm sm:text-base"></i>
            </button>
          </div>
        </div>

        {/* Enhanced Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#0f596d]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#2a9bb3]/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#4dd4f7]/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#1a7a8f]/35 rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Testimonials;
