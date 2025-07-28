import { useState, useEffect } from "react";
import { getNextSlide, getPrevSlide } from "../utils/helpers";

export const useCarousel = (items, autoPlayInterval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isTransitioning, autoPlayInterval]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => getNextSlide(prev, items.length));
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => getPrevSlide(prev, items.length));
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return {
    currentSlide,
    isTransitioning,
    nextSlide,
    prevSlide,
    goToSlide,
    totalSlides: items.length,
  };
};
