import React, { useState, useEffect } from "react";
import Header from "./Header";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "Redefining How Individuals, Communities, and Institutions Grow.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-gradient">
        <div className="hero-overlay"></div>

        {/* Top Section - Navbar */}
        <div className="hero-top">
          <Header />
        </div>

        {/* Middle Section - Text Content */}
        <div className="hero-middle">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-content">
                  <div className="tagline-pill-container">
                    <span className="tagline-pill">
                      Your Trusted Partner in Learning Transformation
                    </span>
                  </div>

                  <h1 className="hero-title">
                    <span className="typing-text">{text}</span>
                    <span className="cursor">|</span>
                  </h1>

                  <div className="hero-cta">
                    <p className="cta-text">Start Your Journey With Us Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Images */}
        <div className="hero-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="hero-images">
                  <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container">
                        <img
                          src={hero1}
                          alt="Professional man pointing at digital display"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container">
                        <img
                          src={hero2}
                          alt="Group in classroom setting"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container">
                        <img
                          src={hero3}
                          alt="Man writing on flipchart"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container">
                        <img
                          src={hero4}
                          alt="Team collaboration in modern office setting"
                          className="hero-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
