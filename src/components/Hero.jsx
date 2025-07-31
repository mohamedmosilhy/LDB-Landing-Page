import React from "react";
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

// =============================================================================
// HERO COMPONENT
// =============================================================================
const Hero = () => {
  // ===========================================================================
  // HOOKS & ANIMATIONS
  // ===========================================================================
  const { text } = useTypingAnimation(HERO_DATA.title);

  // GSAP Animation refs
  const taglineRef = useGSAPAnimation(
    ANIMATION_CONFIG.hero.tagline.type,
    ANIMATION_CONFIG.hero.tagline.delay
  );
  const titleRef = useGSAPAnimation(
    ANIMATION_CONFIG.hero.title.type,
    ANIMATION_CONFIG.hero.title.delay
  );
  const ctaRef = useGSAPAnimation(
    ANIMATION_CONFIG.hero.cta.type,
    ANIMATION_CONFIG.hero.cta.delay
  );
  const imagesRef = useStaggerAnimation(
    ANIMATION_CONFIG.hero.images.type,
    ANIMATION_CONFIG.hero.images.stagger,
    ANIMATION_CONFIG.hero.images.delay
  );

  // ===========================================================================
  // HERO IMAGES DATA
  // ===========================================================================
  const heroImages = [
    {
      src: hero1,
      alt: "Professional man pointing at digital display",
    },
    {
      src: hero2,
      alt: "Group in classroom setting",
    },
    {
      src: hero3,
      alt: "Man writing on flipchart",
    },
    {
      src: hero4,
      alt: "Team collaboration in modern office setting",
    },
  ];

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <section id="hero" className="hero-section">
      <div className="hero-gradient">
        <div className="hero-overlay"></div>

        {/* Top Section - Spacer for fixed header */}
        <div className="hero-top">
          {/* Header is now rendered in App.jsx */}
        </div>

        {/* Middle Section - Text Content */}
        <div className="hero-middle">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-content">
                  {/* Tagline */}
                  <div className="tagline-pill-container" ref={taglineRef}>
                    <span className="tagline-pill">{HERO_DATA.tagline}</span>
                  </div>

                  {/* Main Title with Typing Animation */}
                  <h1 className="hero-title" ref={titleRef}>
                    <span className="typing-text">{text}</span>
                    <span className="cursor">|</span>
                  </h1>

                  {/* Call to Action */}
                  <div className="hero-cta" ref={ctaRef}>
                    <p className="cta-text">{HERO_DATA.cta}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Hero Images */}
        <div className="hero-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="hero-images" ref={imagesRef}>
                  <div className="row g-4 justify-content-center">
                    {heroImages.map((image, index) => (
                      <div key={index} className="col-6 col-md-3">
                        <div className="hero-image-container" data-animate>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="hero-image"
                          />
                        </div>
                      </div>
                    ))}
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
