import { useCallback } from "react";

// =============================================================================
// USE SMOOTH SCROLL HOOK
// =============================================================================
export const useSmoothScroll = () => {
  // ===========================================================================
  // HELPER FUNCTIONS
  // ===========================================================================
  const performScroll = (targetPosition) => {
    try {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    } catch (error) {
      console.error("Error performing scroll:", error);
    }
  };

  const validateElement = (element, elementName) => {
    if (!element) {
      console.warn(`${elementName} not found`);
      return false;
    }
    return true;
  };

  // ===========================================================================
  // SCROLL FUNCTIONS
  // ===========================================================================
  const scrollToSection = useCallback((sectionId, offset = 80) => {
    try {
      const element = document.getElementById(sectionId);
      
      if (!validateElement(element, `Element with id "${sectionId}"`)) {
        return;
      }

      // Wait for next tick to ensure DOM is ready
      setTimeout(() => {
        try {
          const elementPosition = element.offsetTop - offset;
          performScroll(elementPosition);

          // Double-check scroll position after animation starts
          setTimeout(() => {
            const currentPosition = window.pageYOffset;
            if (Math.abs(currentPosition - elementPosition) > 10) {
              performScroll(elementPosition);
            }
          }, 300);
        } catch (error) {
          console.error("Error in scroll animation:", error);
        }
      }, 50);
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    try {
      performScroll(0);
    } catch (error) {
      console.error("Error scrolling to top:", error);
    }
  }, []);

  const scrollToElement = useCallback((element, offset = 80) => {
    try {
      if (!validateElement(element, "Element")) {
        return;
      }

      const elementPosition = element.offsetTop - offset;
      performScroll(elementPosition);
    } catch (error) {
      console.error("Error scrolling to element:", error);
    }
  }, []);

  // ===========================================================================
  // RETURN
  // ===========================================================================
  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
  };
};
