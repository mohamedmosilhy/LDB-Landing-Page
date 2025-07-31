// =============================================================================
// UTILITY HELPER FUNCTIONS
// =============================================================================

// =============================================================================
// VALIDATION HELPERS
// =============================================================================

/**
 * Validates email format using regex
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates form data and returns errors
 * @param {Object} formData - Form data object
 * @returns {Object} - Validation result with isValid flag and errors
 */
export const validateForm = (formData) => {
  const errors = {};

  // Validate email
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate message
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  // Validate name
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  // Validate phone
  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.phone = "Please enter a valid phone number";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// =============================================================================
// FORM SUBMISSION HELPERS
// =============================================================================

/**
 * Submits email form using mailto link
 * @param {string} email - Sender's email
 * @param {string} message - Message content
 * @returns {Object} - Submission result
 */
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
    console.error("Email submission error:", error);
    return { success: false, error: error.message };
  }
};

// =============================================================================
// CAROUSEL HELPERS
// =============================================================================

/**
 * Gets next slide index with circular navigation
 * @param {number} currentSlide - Current slide index
 * @param {number} totalSlides - Total number of slides
 * @returns {number} - Next slide index
 */
export const getNextSlide = (currentSlide, totalSlides) => {
  return (currentSlide + 1) % totalSlides;
};

/**
 * Gets previous slide index with circular navigation
 * @param {number} currentSlide - Current slide index
 * @param {number} totalSlides - Total number of slides
 * @returns {number} - Previous slide index
 */
export const getPrevSlide = (currentSlide, totalSlides) => {
  return (currentSlide - 1 + totalSlides) % totalSlides;
};

// =============================================================================
// INTERSECTION OBSERVER HELPERS
// =============================================================================

/**
 * Creates an Intersection Observer with default options
 * @param {Function} callback - Observer callback function
 * @param {Object} options - Observer options
 * @returns {IntersectionObserver} - Observer instance
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.3,
    rootMargin: "0px",
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// =============================================================================
// PERFORMANCE HELPERS
// =============================================================================

/**
 * Debounces function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
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

/**
 * Throttles function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle limit in milliseconds
 * @returns {Function} - Throttled function
 */
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

// =============================================================================
// UTILITY HELPERS
// =============================================================================

/**
 * Generates a unique ID
 * @returns {string} - Unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Formats phone number to (XXX) XXX-XXXX format
 * @param {string} phoneNumber - Phone number to format
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
};

/**
 * Sanitizes HTML content to prevent XSS
 * @param {string} html - HTML content to sanitize
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHtml = (html) => {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Checks if element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} - True if element is in viewport
 */
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
