import React from "react";
import Header from "./Header";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { HERO_DATA, ANIMATION_CONFIG } from "../constants/data";

const Hero = () => {
  const { text } = useTypingAnimation(HERO_DATA.title);
  
  // GSAP Animation refs
  const taglineRef = useGSAPAnimation(ANIMATION_CONFIG.hero.tagline.type, ANIMATION_CONFIG.hero.tagline.delay);
  const titleRef = useGSAPAnimation(ANIMATION_CONFIG.hero.title.type, ANIMATION_CONFIG.hero.title.delay);
  const ctaRef = useGSAPAnimation(ANIMATION_CONFIG.hero.cta.type, ANIMATION_CONFIG.hero.cta.delay);
  const imagesRef = useStaggerAnimation(ANIMATION_CONFIG.hero.images.type, ANIMATION_CONFIG.hero.images.stagger, ANIMATION_CONFIG.hero.images.delay);

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
                  <div className="tagline-pill-container" ref={taglineRef}>
                    <span className="tagline-pill">
                      {HERO_DATA.tagline}
                    </span>
                  </div>

                  <h1 className="hero-title" ref={titleRef}>
                    <span className="typing-text">{text}</span>
                    <span className="cursor">|</span>
                  </h1>

                  <div className="hero-cta" ref={ctaRef}>
                    <p className="cta-text">{HERO_DATA.cta}</p>
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
                <div className="hero-images" ref={imagesRef}>
                  <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container" data-animate>
                        <img
                          src={hero1}
                          alt="Professional man pointing at digital display"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container" data-animate>
                        <img
                          src={hero2}
                          alt="Group in classroom setting"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container" data-animate>
                        <img
                          src={hero3}
                          alt="Man writing on flipchart"
                          className="hero-image"
                        />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="hero-image-container" data-animate>
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
