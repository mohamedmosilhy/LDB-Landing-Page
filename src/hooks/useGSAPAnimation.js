import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// ANIMATION CONFIGURATIONS
// =============================================================================
const ANIMATION_CONFIGS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
  },
  slideInUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  },
  slideInDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
  },
  rotateIn: {
    initial: { opacity: 0, rotation: -180, scale: 0.3 },
    animate: {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
    },
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1, duration: 1, ease: "bounce.out" },
  },
  flipInX: {
    initial: { opacity: 0, rotationX: 90 },
    animate: { opacity: 1, rotationX: 0, duration: 0.8, ease: "power2.out" },
  },
  flipInY: {
    initial: { opacity: 0, rotationY: 90 },
    animate: { opacity: 1, rotationY: 0, duration: 0.8, ease: "power2.out" },
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const setInitialState = (element, animationType) => {
  const config = ANIMATION_CONFIGS[animationType] || ANIMATION_CONFIGS.fadeInUp;
  gsap.set(element, config.initial);
};

const createAnimation = (element, animationType, delay) => {
  const config = ANIMATION_CONFIGS[animationType] || ANIMATION_CONFIGS.fadeInUp;

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none restart",
      },
      delay: delay,
    })
    .to(element, config.animate);
};

// =============================================================================
// USE GSAP ANIMATION HOOK
// =============================================================================
export const useGSAPAnimation = (animationType = "fadeInUp", delay = 0) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Kill any existing animations
    gsap.killTweensOf(element);

    // Set initial state
    setInitialState(element, animationType);

    // Create and start animation
    const animation = createAnimation(element, animationType, delay);

    // Cleanup function
    return () => {
      animation.kill();
      gsap.killTweensOf(element);
    };
  }, [animationType, delay]);

  return elementRef;
};

// =============================================================================
// USE STAGGER ANIMATION HOOK
// =============================================================================
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

    // Set initial states
    elements.forEach((element) => {
      setInitialState(element, animationType);
    });

    // Create stagger animation
    const config =
      ANIMATION_CONFIGS[animationType] || ANIMATION_CONFIGS.fadeInUp;

    const animation = gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none restart",
        },
        delay: delay,
      })
      .to(elements, {
        ...config.animate,
        stagger: stagger,
      });

    // Cleanup function
    return () => {
      animation.kill();
      gsap.killTweensOf(elements);
    };
  }, [animationType, stagger, delay]);

  return containerRef;
};
