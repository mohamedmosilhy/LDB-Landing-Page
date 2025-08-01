import React from "react";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import hero4 from "../assets/hero-4.png";
import { HERO_DATA } from "../constants/data";

const Hero = () => {
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
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-16"
    >
      {/* Top Section - Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Middle Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto relative z-10">
        {/* Tagline Pill */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/95 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/30">
            <span className="mr-3 text-xl">🎓</span>
            <span className="fancy-subtitle-large text-[#2d3748] text-sm">
              {HERO_DATA.tagline}
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="fancy-title-large text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-6xl text-[#2d3748]">
            <span className="inline-block">
              {HERO_DATA.title}
              <span className="inline-block w-2 h-16 bg-[#2d3748] ml-3 animate-pulse"></span>
            </span>
          </h1>
        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <p className="fancy-heading-large text-lg sm:text-xl text-white hover:text-white/90 transition-colors duration-300 cursor-pointer">
            {HERO_DATA.cta}
          </p>
        </div>
      </div>

      {/* Bottom Section - Hero Images */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {heroImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
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
    </section>
  );
};

export default Hero;
