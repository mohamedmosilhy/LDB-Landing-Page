import React, { useState } from "react";
import { FOOTER_DATA } from "../constants/data";
import { GOOGLE_FORM_CONFIG } from "../constants/googleFormConfig";

// =============================================================================
// FOOTER COMPONENT
// =============================================================================
const Footer = () => {
  // ===========================================================================
  // STATE
  // ===========================================================================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // ===========================================================================
  // EVENT HANDLERS
  // ===========================================================================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Method 1: Try direct form submission first
    try {
      // Create a temporary form element
      const tempForm = document.createElement("form");
      tempForm.method = "POST";
      tempForm.action = GOOGLE_FORM_CONFIG.formUrl;
      tempForm.target = "_blank";
      tempForm.style.display = "none";

      // Add form fields
      const nameInput = document.createElement("input");
      nameInput.type = "hidden";
      nameInput.name = GOOGLE_FORM_CONFIG.fieldIds.name;
      nameInput.value = formData.name;
      tempForm.appendChild(nameInput);

      const emailInput = document.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = GOOGLE_FORM_CONFIG.fieldIds.email;
      emailInput.value = formData.email;
      tempForm.appendChild(emailInput);

      const messageInput = document.createElement("input");
      messageInput.type = "hidden";
      messageInput.name = GOOGLE_FORM_CONFIG.fieldIds.message;
      messageInput.value = formData.message;
      tempForm.appendChild(messageInput);

      // Submit the form
      document.body.appendChild(tempForm);
      tempForm.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(tempForm);
      }, 1000);

      // Show success message
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f596d] via-[#1a7a8f] to-[#2a9bb3]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f596d]/90 via-[#1a7a8f]/90 to-[#2a9bb3]/90"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-white/5 rounded-full blur-3xl animate-pulse delay-1500"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="fancy-title-large text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              {FOOTER_DATA.hero.title}
            </h2>
            <p className="fancy-subtitle-large text-base sm:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              {FOOTER_DATA.hero.subtitle}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="fancy-heading-large text-white text-2xl mb-8 text-center">
                  Get In Touch
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 group-hover:bg-white/15"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 group-hover:bg-white/15"
                    />
                  </div>
                  <div className="group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 group-hover:bg-white/15 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border border-white/30 text-white font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:from-white/30 hover:to-white/20 hover:border-white/40 hover:scale-105 hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-center">
                      {GOOGLE_FORM_CONFIG.messages.success}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300 text-center">
                      {GOOGLE_FORM_CONFIG.messages.error}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Company Info and Social */}
            <div className="space-y-8">
              {/* Company Information */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="fancy-heading-large text-white text-2xl mb-6">
                  {FOOTER_DATA.company.name}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <p className="fancy-subtitle text-white/90">
                      {FOOTER_DATA.company.address}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <p className="fancy-subtitle text-white/90">
                      {FOOTER_DATA.company.phone}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <p className="fancy-subtitle text-white/90">
                      {FOOTER_DATA.company.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h4 className="fancy-heading-large text-white text-xl mb-6">
                  Follow Us
                </h4>
                <div className="space-y-4">
                  {FOOTER_DATA.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <i className={`${social.icon} text-white`}></i>
                      </div>
                      <span className="fancy-subtitle text-white/90 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/20">
            <p className="fancy-subtitle text-white/70">
              {FOOTER_DATA.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
