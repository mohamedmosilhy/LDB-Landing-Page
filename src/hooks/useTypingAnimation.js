import { useState, useEffect } from "react";

// =============================================================================
// USE TYPING ANIMATION HOOK
// =============================================================================
export const useTypingAnimation = (fullText, speed = 100) => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===========================================================================
  // TYPING ANIMATION EFFECT
  // ===========================================================================
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  // ===========================================================================
  // UTILITY FUNCTIONS
  // ===========================================================================
  const resetAnimation = () => {
    setText("");
    setCurrentIndex(0);
  };

  const isComplete = currentIndex >= fullText.length;

  // ===========================================================================
  // RETURN
  // ===========================================================================
  return {
    text,
    currentIndex,
    isComplete,
    resetAnimation,
  };
};
