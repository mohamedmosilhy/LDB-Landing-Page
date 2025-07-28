import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      
      // Smooth scroll to the element
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      
      // Ensure we're at the right position after scrolling
      setTimeout(() => {
        const currentPosition = window.pageYOffset;
        if (Math.abs(currentPosition - elementPosition) > 5) {
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToElement = useCallback((element, offset = 80) => {
    if (element) {
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
  };
};
