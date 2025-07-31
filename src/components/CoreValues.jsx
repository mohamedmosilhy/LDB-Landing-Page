import React, { useState } from "react";
import whyChooseLDBImage from "../assets/whyChooseLDB-1.png";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";

const CoreValues = () => {
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
      title: "Excellence Proven by Results",
      icon: "fas fa-trophy",
      color: "#0f596d",
    },
    {
      id: 2,
      title: "Fair Promise Over Delivery",
      icon: "fas fa-rocket",
      color: "#1a7a8f",
    },
  ];

  const rightItems = [
    {
      id: 3,
      title: "Joy & Vitality",
      icon: "fas fa-smile",
      color: "#2a9bb3",
    },
    {
      id: 4,
      title: "Unwavering Commitment",
      icon: "fas fa-shield-alt",
      color: "#3bb8d4",
    },
  ];

  return (
    <section id="core-values" className="core-values-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-header text-center" ref={headerRef}>
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                The fundamental principles that guide our actions and shape our
                culture, driving us to deliver exceptional learning experiences
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="core-values-layout">
              {/* Left Side Cards */}
              <div className="core-values-left-cards" ref={leftCardsRef}>
                {leftItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`core-values-card ${
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
                    <div className="core-values-card-content">
                      <div className="core-values-card-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="core-values-card-title">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Image */}
              <div className="core-values-central-image" ref={centralImageRef}>
                <div className="core-values-image-container">
                  <img src={whyChooseLDBImage} alt="LDB Core Values" />
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="core-values-right-cards" ref={rightCardsRef}>
                {rightItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`core-values-card ${
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
                    <div className="core-values-card-content">
                      <div className="core-values-card-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="core-values-card-title">{item.title}</h4>
                    </div>
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

export default CoreValues;
