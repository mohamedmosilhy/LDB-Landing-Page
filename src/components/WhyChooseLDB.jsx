import React, { useState } from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";

const WhyChooseLDB = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // GSAP Animation refs
  const headerRef = useGSAPAnimation("fadeInUp", 0.1);
  const leftCardsRef = useStaggerAnimation("fadeInLeft", 0.1, 0.2);
  const centralAreaRef = useGSAPAnimation("scaleIn", 0.3);
  const rightCardsRef = useStaggerAnimation("fadeInRight", 0.1, 0.2);
  const bottomCardRef = useGSAPAnimation("fadeInUp", 0.4);
  const floatingElementsRef = useGSAPAnimation("fadeInUp", 0.5);

  const leftItems = [
    {
      id: 1,
      title: "Research-Driven, Competency-Based Frameworks",
      icon: "fas fa-lightbulb",
      color: "#0f596d",
      size: "large",
    },
    {
      id: 2,
      title: "Integrated, Interdisciplinary Methodology",
      icon: "fas fa-users",
      color: "#1a7a8f",
      size: "medium",
    },
  ];

  const rightItems = [
    {
      id: 3,
      title: "Culturally Grounded, Globally Aligned",
      icon: "fas fa-globe",
      color: "#2a9bb3",
      size: "small",
    },
    {
      id: 4,
      title: "Measurable Impact and Systemic Change",
      icon: "fas fa-chart-line",
      color: "#3bb8d4",
      size: "medium",
    },
  ];

  const bottomItem = {
    id: 5,
    title: "From Design to Delivery—One Seamless System",
    icon: "fas fa-cogs",
    color: "#4cc5e5",
    size: "large",
  };

  return (
    <section id="why-choose" className="why-choose-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-header text-center" ref={headerRef}>
              <h2 className="section-title">Why Choose LDB?</h2>
              <p className="section-subtitle">
                At Learning Design Boutique (LDB), we don't just deliver
                services—we architect transformation. What sets us apart is not
                only what we do, but how and why we do it. Here's why LDB is the
                trusted partner for future-focused organizations, governments,
                and youth-focused institutions
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="geometric-layout">
              {/* Left Side Cards */}
              <div className="left-cards" ref={leftCardsRef}>
                {leftItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`geometric-card rectangle ${item.size} ${
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
                    <div className="geometric-border"></div>
                  </div>
                ))}
              </div>

              {/* Central Area - Enhanced Hub */}
              <div className="central-hub" ref={centralAreaRef}>
                <div className="hub-container">
                  <div className="hub-circle">
                    <div className="hub-content">
                      <div className="hub-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <h3>LDB</h3>
                      <p>Excellence</p>
                    </div>
                  </div>
                  <div className="hub-glow"></div>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="right-cards" ref={rightCardsRef}>
                {rightItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`geometric-card rectangle ${item.size} ${
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
                    <div className="geometric-border"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Center Card */}
            <div className="bottom-card-container" ref={bottomCardRef}>
              <div
                className={`geometric-card rectangle ${bottomItem.size} ${
                  hoveredItem === bottomItem.id ? "active" : ""
                }`}
                data-animate
                onMouseEnter={() => setHoveredItem(bottomItem.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  "--item-color": bottomItem.color,
                }}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <i className={bottomItem.icon}></i>
                  </div>
                  <h4 className="card-title">{bottomItem.title}</h4>
                </div>
                <div className="geometric-border"></div>
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
