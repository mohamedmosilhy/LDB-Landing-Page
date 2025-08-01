import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import { HERO_DATA } from "../constants/data";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Create the main timeline
    const tl = gsap.timeline();

    // Animate tagline pill with bounce effect
    tl.fromTo(
      hero.querySelector(".tagline-pill"),
      { y: -30, opacity: 0, scale: 0.9, rotation: -3 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(1.2)",
      }
    )

      // Animate main title with typewriter effect
      .fromTo(
        hero.querySelector(".hero-title"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" }
      )
      .call(() => {
        // Typewriter effect for the title
        const typewriterText = hero.querySelector(".typewriter-text");
        const text = HERO_DATA.title;

        // Clear any existing content first
        typewriterText.innerHTML = "";

        // Create spans for each character to have better control
        const chars = text.split("");

        chars.forEach((char, index) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char === " " ? "\u00A0" : char;
          charSpan.style.opacity = "0";
          typewriterText.appendChild(charSpan);

          setTimeout(() => {
            gsap.to(charSpan, {
              opacity: 1,
              duration: 0.05,
              ease: "power2.out",
            });
          }, index * 50); // 50ms delay between each character
        });
      })

      // Animate CTA with slide effect
      .fromTo(
        hero.querySelector(".hero-cta"),
        { y: 15, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      )

      // Animate hero images with stagger and 3D effect
      .fromTo(
        hero.querySelectorAll(".hero-image"),
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

    // Add floating animation to decorative elements
    const floatingElements = hero.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -15,
        duration: 1.5 + index * 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.05,
      });
    });

    // Add parallax effect to background elements
    const parallaxElements = hero.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element, index) => {
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
    });

    // Add continuous rotation to some elements
    const rotatingElements = hero.querySelectorAll(".rotating-element");
    rotatingElements.forEach((element, index) => {
      gsap.to(element, {
        rotation: 360,
        duration: 15 + index * 3,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);
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

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Top Section - Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Middle Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto relative z-10">
        {/* Tagline Pill */}
        <div className="mb-8">
          <div className="tagline-pill inline-flex items-center bg-white/95 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/30">
            <span className="mr-3 text-xl floating-element">🎓</span>
            <span className="fancy-subtitle-large text-[#2d3748] text-sm">
              {HERO_DATA.tagline}
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="hero-title fancy-title-large text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-6xl text-[#2d3748]">
            <span className="inline-block">
              <span className="typewriter-text"></span>
            </span>
          </h1>
        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <p className="hero-cta fancy-heading-large text-lg sm:text-xl text-white hover:text-white/90 transition-colors duration-300 cursor-pointer">
            {HERO_DATA.cta}
          </p>
        </div>
      </div>

      {/* Bottom Section - Hero Images */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {heroImages.map((image, index) => (
            <div key={index} className="group">
              <div className="hero-image relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="floating-element absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-sm"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-20 right-10 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm"></div>

        {/* Rotating elements */}
        <div className="rotating-element absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/10 rounded-full"></div>
        <div className="rotating-element absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-white/10 rounded-full"></div>

        {/* Parallax background elements */}
        <div className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="parallax-bg absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
