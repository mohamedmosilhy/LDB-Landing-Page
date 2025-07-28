import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = (animationType = "fadeInUp", delay = 0) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Kill any existing animations
    gsap.killTweensOf(element);

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case "fadeInUp":
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case "fadeInDown":
          gsap.set(element, { opacity: 0, y: -50 });
          break;
        case "fadeInLeft":
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case "fadeInRight":
          gsap.set(element, { opacity: 0, x: 50 });
          break;
        case "scaleIn":
          gsap.set(element, { opacity: 0, scale: 0.8 });
          break;
        case "slideInUp":
          gsap.set(element, { y: 100, opacity: 0 });
          break;
        case "slideInDown":
          gsap.set(element, { y: -100, opacity: 0 });
          break;
        case "slideInLeft":
          gsap.set(element, { x: -100, opacity: 0 });
          break;
        case "slideInRight":
          gsap.set(element, { x: 100, opacity: 0 });
          break;
        case "rotateIn":
          gsap.set(element, { opacity: 0, rotation: -180, scale: 0.3 });
          break;
        case "bounceIn":
          gsap.set(element, { opacity: 0, scale: 0.3 });
          break;
        case "flipInX":
          gsap.set(element, { opacity: 0, rotationX: 90 });
          break;
        case "flipInY":
          gsap.set(element, { opacity: 0, rotationY: 90 });
          break;
        default:
          gsap.set(element, { opacity: 0, y: 30 });
      }
    };

    // Create animation based on type
    const createAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: delay,
      });

      switch (animationType) {
        case "fadeInUp":
          tl.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "fadeInDown":
          tl.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "fadeInLeft":
          tl.to(element, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "fadeInRight":
          tl.to(element, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "scaleIn":
          tl.to(element, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
          break;
        case "slideInUp":
          tl.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "slideInDown":
          tl.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "slideInLeft":
          tl.to(element, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "slideInRight":
          tl.to(element, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "rotateIn":
          tl.to(element, {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          });
          break;
        case "bounceIn":
          tl.to(element, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "bounce.out",
          });
          break;
        case "flipInX":
          tl.to(element, {
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        case "flipInY":
          tl.to(element, {
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          break;
        default:
          tl.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
      }
    };

    setInitialState();
    createAnimation();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, delay]);

  return elementRef;
};

// Stagger animation for multiple elements
export const useStaggerAnimation = (
  animationType = "fadeInUp",
  stagger = 0.1,
  delay = 0
) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-animate]");
    if (elements.length === 0) return;

    // Kill any existing animations
    gsap.killTweensOf(elements);

    // Set initial state for all elements
    elements.forEach((element) => {
      switch (animationType) {
        case "fadeInUp":
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case "fadeInDown":
          gsap.set(element, { opacity: 0, y: -50 });
          break;
        case "fadeInLeft":
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case "fadeInRight":
          gsap.set(element, { opacity: 0, x: 50 });
          break;
        case "scaleIn":
          gsap.set(element, { opacity: 0, scale: 0.8 });
          break;
        default:
          gsap.set(element, { opacity: 0, y: 30 });
      }
    });

    // Create stagger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      delay: delay,
    });

    switch (animationType) {
      case "fadeInUp":
        tl.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: stagger,
        });
        break;
      case "fadeInDown":
        tl.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: stagger,
        });
        break;
      case "fadeInLeft":
        tl.to(elements, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: stagger,
        });
        break;
      case "fadeInRight":
        tl.to(elements, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: stagger,
        });
        break;
      case "scaleIn":
        tl.to(elements, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: stagger,
        });
        break;
      default:
        tl.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: stagger,
        });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, stagger, delay]);

  return containerRef;
};
