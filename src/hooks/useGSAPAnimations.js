import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const sectionRef = useRef(null);

  // Hero Section Animations
  const animateHero = (ref) => {
    const tl = gsap.timeline();
    
    // Animate tagline pill
    tl.fromTo(ref.querySelector('.tagline-pill'), 
      { y: -50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    )
    
    // Animate main title with character reveal
    .fromTo(ref.querySelector('.hero-title'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    
    // Animate cursor
    .fromTo(ref.querySelector('.cursor-blink'), 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.inOut" }
    )
    
    // Animate CTA
    .fromTo(ref.querySelector('.hero-cta'), 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    
    // Animate hero images with stagger
    .fromTo(ref.querySelectorAll('.hero-image'), 
      { y: 100, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }
    );

    return tl;
  };

  // Services Section Animations
  const animateServices = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate section title
    tl.fromTo(ref.querySelector('.section-title'), 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    
    // Animate section description
    .fromTo(ref.querySelector('.section-description'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    
    // Animate service cards with stagger and 3D effect
    .fromTo(ref.querySelectorAll('.service-card'), 
      { 
        y: 100, 
        opacity: 0, 
        rotationY: 45,
        scale: 0.8 
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationY: 0,
        scale: 1, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: "back.out(1.7)" 
      }
    );

    return tl;
  };

  // Client Logos Section Animations
  const animateClientLogos = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate logos with wave effect
    tl.fromTo(ref.querySelectorAll('.client-logo'), 
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.5,
        rotation: -15 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotation: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "elastic.out(1, 0.5)" 
      }
    );

    return tl;
  };

  // Core Values Section Animations
  const animateCoreValues = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate values with morphing effect
    tl.fromTo(ref.querySelectorAll('.value-item'), 
      { 
        y: 80, 
        opacity: 0, 
        scale: 0.7,
        rotationX: 90 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotationX: 0, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }
    );

    return tl;
  };

  // Projects Section Animations
  const animateProjects = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate project cards with flip effect
    tl.fromTo(ref.querySelectorAll('.project-card'), 
      { 
        y: 100, 
        opacity: 0, 
        rotationY: -90,
        scale: 0.8 
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationY: 0,
        scale: 1, 
        duration: 1.3, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }
    );

    return tl;
  };

  // Testimonials Section Animations
  const animateTestimonials = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate testimonials with slide effect
    tl.fromTo(ref.querySelectorAll('.testimonial-card'), 
      { 
        x: -100, 
        opacity: 0, 
        scale: 0.9 
      },
      { 
        x: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.3, 
        ease: "power2.out" 
      }
    );

    return tl;
  };

  // Why Choose LDB Section Animations
  const animateWhyChooseLDB = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate reasons with bounce effect
    tl.fromTo(ref.querySelectorAll('.reason-item'), 
      { 
        y: 60, 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: "bounce.out" 
      }
    );

    return tl;
  };

  // Floating Animation for decorative elements
  const createFloatingAnimation = (element) => {
    gsap.to(element, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  };

  // Parallax effect for background elements
  const createParallaxEffect = (element, speed = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  // Text reveal animation
  const animateTextReveal = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    const chars = text.split('').map(char => 
      char === ' ' ? '\u00A0' : char
    );
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      element.appendChild(span);
      
      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        delay: index * 0.03,
        ease: "power2.out"
      });
    });
  };

  // Counter animation
  const animateCounter = (element, targetValue, duration = 2) => {
    gsap.fromTo(element, 
      { textContent: 0 },
      {
        textContent: targetValue,
        duration: duration,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    animateHero,
    animateServices,
    animateClientLogos,
    animateCoreValues,
    animateProjects,
    animateTestimonials,
    animateWhyChooseLDB,
    createFloatingAnimation,
    createParallaxEffect,
    animateTextReveal,
    animateCounter
  };
}; 