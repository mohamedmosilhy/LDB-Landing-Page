import { useState, useEffect } from "react";

export const useTypingAnimation = (fullText, speed = 100) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  const resetAnimation = () => {
    setText("");
    setCurrentIndex(0);
  };

  return { text, currentIndex, resetAnimation };
};
