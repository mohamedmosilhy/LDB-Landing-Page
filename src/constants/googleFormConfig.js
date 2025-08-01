// Google Form Configuration
export const GOOGLE_FORM_CONFIG = {
  // Your actual Google Form URL
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeAElA2xOzaOMtsMEaZ3ZMDqE3c52bG93QAsMTAh5YdVuyHDA/formResponse",

  // Google Form entry IDs - correct IDs from your form
  fieldIds: {
    name: "entry.678716437", // Name field entry ID
    email: "entry.1114581651", // Email field entry ID
    message: "entry.881982342", // Message field entry ID
  },

  // Alternative entry IDs to try if the above don't work
  alternativeFieldIds: {
    name: "entry.1234567890", // Alternative name field entry ID
    email: "entry.0987654321", // Alternative email field entry ID
    message: "entry.1122334455", // Alternative message field entry ID
  },

  // Success and error messages
  messages: {
    success: "Thank you! Your message has been sent successfully.",
    error: "There was an error sending your message. Please try again.",
    required: "Please fill in all required fields.",
  },
};
