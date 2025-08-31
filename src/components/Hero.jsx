import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import { HERO_DATA } from "../constants/data";

const Hero = () => {
  const heroRef = useRef(null);

  // Hero images data
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

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline();

    // Animate tagline pill
    const taglinePill = hero.querySelector(".tagline-pill");
    if (taglinePill) {
      tl.fromTo(
        taglinePill,
        { y: -30, opacity: 0, scale: 0.9, rotation: -3 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        }
      );
    }

    // Animate main title
    const heroTitle = hero.querySelector(".hero-title");
    if (heroTitle) {
      tl.fromTo(
        heroTitle,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    }

    // Animate CTA
    const heroCta = hero.querySelector(".hero-cta");
    if (heroCta) {
      tl.fromTo(
        heroCta,
        { y: 15, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }

    // Animate hero images
    const heroImages = hero.querySelectorAll(".hero-image");
    if (heroImages.length > 0) {
      tl.fromTo(
        heroImages,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotationY: 30,
          rotationX: 10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.2)",
        }
      );
    }

    // Floating animations
    const floatingElements = hero.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: -15,
          duration: 1.5 + index * 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.05,
        });
      }
    });

    // Parallax effects
    const parallaxElements = hero.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          yPercent: -30 - index * 10,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    // Rotating elements
    const rotatingElements = hero.querySelectorAll(".rotating-element");
    rotatingElements.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          rotation: 360,
          duration: 15 + index * 3,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-8 sm:pb-16 overflow-hidden"
    >
      <div className="h-16 sm:h-16"></div>

      <div className="flex-1 flex flex-col justify-center items-center text-center w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto relative z-10 px-2 sm:px-4">
        <div className="mb-6 sm:mb-8">
          <div className="tagline-pill inline-flex items-center bg-white/95 backdrop-blur-md rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 shadow-lg border border-white/30">
            <span className="mr-1 sm:mr-2 md:mr-3 text-base sm:text-lg md:text-xl floating-element">
              🎓
            </span>
            <span className="fancy-subtitle-large text-[#2d3748] text-[10px] sm:text-xs md:text-sm lg:text-base">
              {HERO_DATA.tagline}
            </span>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="hero-title fancy-title-large text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed sm:leading-tight w-full text-[#2d3748] px-2 break-words">
            {HERO_DATA.title}
          </h1>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="hero-cta fancy-heading-large text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white hover:text-white/90 transition-colors duration-300 cursor-pointer px-2">
            {HERO_DATA.cta}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {heroImages.map((image, index) => (
            <div key={index} className="group">
              <div className="hero-image relative overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-48 lg:h-52 xl:h-56 2xl:h-60">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="floating-element absolute top-10 sm:top-20 left-5 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-sm z-1"></div>
        <div className="floating-element absolute top-20 sm:top-40 right-5 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-sm z-1"></div>
        <div className="floating-element absolute bottom-20 sm:bottom-40 left-5 sm:left-20 w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm z-1"></div>
        <div className="floating-element absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm z-1"></div>

        <div className="rotating-element absolute top-1/4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-white/10 rounded-full z-1"></div>
        <div className="rotating-element absolute bottom-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border-2 border-white/10 rounded-full z-1"></div>

        <div className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 z-0"></div>
        <div className="parallax-bg absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-2xl sm:blur-3xl z-0"></div>
        <div className="parallax-bg absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl z-0"></div>
      </div>
    </section>
  );
};

export default Hero;
