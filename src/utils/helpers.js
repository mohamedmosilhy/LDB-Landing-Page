// Email validation helper
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation helper
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Email submission helper
export const submitEmailForm = async (email, message) => {
  try {
    const subject = "New Contact from LDB Landing Page";
    const body = `Email: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:mmosilhyofficial@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Carousel navigation helper
export const getNextSlide = (currentSlide, totalSlides) => {
  return (currentSlide + 1) % totalSlides;
};

export const getPrevSlide = (currentSlide, totalSlides) => {
  return (currentSlide - 1 + totalSlides) % totalSlides;
};

// Intersection Observer helper
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.3,
    rootMargin: "0px",
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce helper for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle helper for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Generate unique IDs
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Format phone number
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
};

// Sanitize HTML content
export const sanitizeHtml = (html) => {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
