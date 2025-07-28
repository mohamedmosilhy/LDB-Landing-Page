import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Create mailto link with email and message
      const subject = "New Contact from LDB Landing Page";
      const body = `Email: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:mmosilhyofficial@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content">
              <div className="footer-hero">
                <div className="hero-card">
                  <h2 className="hero-title">
                    Join ambitious professionals and unlock your dream career
                    today
                  </h2>
                  <p className="hero-subtitle">
                    Unlock your true potential and discover a world of
                    opportunities that align with your skills, interests, and
                    aspirations
                  </p>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <div className="input-wrapper">
                        <i className="fas fa-envelope input-icon"></i>
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="email-input"
                        />
                      </div>
                      <textarea
                        placeholder="Your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="message-input"
                        rows="4"
                      />
                      <button
                        type="submit"
                        className="join-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>
                            <i className="fas fa-spinner fa-spin"></i>{" "}
                            Sending...
                          </span>
                        ) : (
                          <span>
                            <i className="fas fa-paper-plane"></i> Send Message
                          </span>
                        )}
                      </button>
                    </div>

                    {submitStatus === "success" && (
                      <div className="success-message">
                        <i className="fas fa-check-circle"></i>
                        Message sent successfully! Check your email client.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="error-message">
                        <i className="fas fa-exclamation-circle"></i>
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="footer-info">
                <div className="copyright">
                  <p>©2024 All rights reserved</p>
                </div>

                <div className="company-info">
                  <h3 className="company-name">LDB Learning & Development</h3>
                  <div className="contact-details">
                    <p>
                      <i className="fas fa-map-marker-alt"></i> Corporate Head
                      Office: 3787 Jerry Dove Drive, Florence, South Carolina,
                      29501, United States
                    </p>
                    <p>
                      <i className="fas fa-phone"></i> Phone: 843-496-7759
                    </p>
                    <p>
                      <i className="fas fa-fax"></i> Fax: 02-222264303
                    </p>
                    <p>
                      <i className="fas fa-envelope"></i> Email: info@ldb.com
                    </p>
                  </div>
                </div>

                <div className="social-media">
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Telegram">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="TikTok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
