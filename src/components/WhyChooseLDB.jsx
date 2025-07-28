import React, { useState } from "react";
import whyChooseLDBImage from "../assets/whyChooseLDB-1.png";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";

const WhyChooseLDB = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.2);
  const leftCardsRef = useStaggerAnimation("fadeInLeft", 0.2, 0.5);
  const centralImageRef = useGSAPAnimation("scaleIn", 0.8);
  const rightCardsRef = useStaggerAnimation("fadeInRight", 0.2, 0.5);
  const floatingElementsRef = useGSAPAnimation("fadeInUp", 1.2);

  const leftItems = [
    {
      id: 1,
      title: "Fair Promise Over Delivery",
      icon: "fas fa-rocket",
      color: "#0f596d",
    },
    {
      id: 2,
      title: "Excellence Proven by Results",
      icon: "fas fa-trophy",
      color: "#1a7a8f",
    },
    {
      id: 3,
      title: "Innovative Methodology",
      icon: "fas fa-lightbulb",
      color: "#2a9bb3",
    },
    {
      id: 4,
      title: "Caring for Human Spectrum",
      icon: "fas fa-heart",
      color: "#3bb8d4",
    },
  ];

  const rightItems = [
    {
      id: 5,
      title: "Joy & Vitality",
      icon: "fas fa-smile",
      color: "#4dd4f7",
    },
    {
      id: 6,
      title: "Unwavering Commitment",
      icon: "fas fa-shield-alt",
      color: "#0f596d",
    },
    {
      id: 7,
      title: "+13 Countries Served",
      icon: "fas fa-globe",
      color: "#1a7a8f",
    },
    {
      id: 8,
      title: "Proven Excellence",
      icon: "fas fa-star",
      color: "#2a9bb3",
    },
  ];

  return (
    <section id="why-choose" className="why-choose-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-header text-center" ref={headerRef}>
              <h2 className="section-title">Why Choose LDB?</h2>
              <p className="section-subtitle">
                Unlock your true potential and discover a world of opportunities
                that align with your skills, interests, and aspirations
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="three-column-layout">
              {/* Left Side Cards */}
              <div className="left-cards" ref={leftCardsRef}>
                {leftItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`side-card ${
                      hoveredItem === item.id ? "active" : ""
                    }`}
                    data-animate
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      "--item-color": item.color,
                      "--item-delay": `${index * 0.1}s`,
                    }}
                  >
                    <div className="card-content">
                      <div className="card-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="card-title">{item.title}</h4>
                    </div>
                    <div className="card-background"></div>
                  </div>
                ))}
              </div>

              {/* Central Image */}
              <div className="central-image-area" ref={centralImageRef}>
                <div className="image-container">
                  <img
                    src={whyChooseLDBImage}
                    alt="LDB Core Values"
                    className="central-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-text">
                      <h3>Our Core Values</h3>
                      <p>Hover around to discover what makes us unique</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="right-cards" ref={rightCardsRef}>
                {rightItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`side-card ${
                      hoveredItem === item.id ? "active" : ""
                    }`}
                    data-animate
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      "--item-color": item.color,
                      "--item-delay": `${index * 0.1}s`,
                    }}
                  >
                    <div className="card-content">
                      <div className="card-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="card-title">{item.title}</h4>
                    </div>
                    <div className="card-background"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements" ref={floatingElementsRef}>
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
              <div className="floating-line line-1"></div>
              <div className="floating-line line-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLDB;
