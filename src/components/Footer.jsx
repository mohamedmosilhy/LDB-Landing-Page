import React from "react";
import {
  useGSAPAnimation,
  useStaggerAnimation,
} from "../hooks/useGSAPAnimation";
import { useForm } from "../hooks/useForm";
import { FOOTER_DATA, ANIMATION_CONFIG } from "../constants/data";

const Footer = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useForm({
    email: "",
    message: "",
  });

  // GSAP Animation refs
  const heroCardRef = useGSAPAnimation(
    ANIMATION_CONFIG.footer.heroCard.type,
    ANIMATION_CONFIG.footer.heroCard.delay
  );
  const formRef = useGSAPAnimation(
    ANIMATION_CONFIG.footer.form.type,
    ANIMATION_CONFIG.footer.form.delay
  );
  const footerInfoRef = useStaggerAnimation(
    ANIMATION_CONFIG.footer.footerInfo.type,
    ANIMATION_CONFIG.footer.footerInfo.stagger,
    ANIMATION_CONFIG.footer.footerInfo.delay
  );

  return (
    <section id="contact" className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-content">
              <div className="footer-hero">
                <div className="hero-card" ref={heroCardRef}>
                  <h2 className="hero-title">
                    {FOOTER_DATA.hero.title}
                  </h2>
                  <p className="hero-subtitle">
                    {FOOTER_DATA.hero.subtitle}
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    ref={formRef}
                  >
                    <div className="form-group">
                      <div className="input-wrapper">
                        <i className="fas fa-envelope input-icon"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`email-input ${errors.email ? 'error' : ''}`}
                        />
                      </div>
                      {errors.email && <span className="error-text">{errors.email}</span>}
                      
                      <textarea
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`message-input ${errors.message ? 'error' : ''}`}
                        rows="4"
                      />
                      {errors.message && <span className="error-text">{errors.message}</span>}
                      
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
              <div className="footer-info" ref={footerInfoRef}>
                <div className="copyright" data-animate>
                  <p>{FOOTER_DATA.copyright}</p>
                </div>

                <div className="company-info" data-animate>
                  <h3 className="company-name">{FOOTER_DATA.company.name}</h3>
                  <div className="contact-details">
                    <p>
                      <i className="fas fa-map-marker-alt"></i> {FOOTER_DATA.company.address}
                    </p>
                    <p>
                      <i className="fas fa-phone"></i> Phone: {FOOTER_DATA.company.phone}
                    </p>
                    <p>
                      <i className="fas fa-fax"></i> Fax: {FOOTER_DATA.company.fax}
                    </p>
                    <p>
                      <i className="fas fa-envelope"></i> Email: {FOOTER_DATA.company.email}
                    </p>
                  </div>
                </div>

                <div className="social-media" data-animate>
                  {FOOTER_DATA.socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="social-icon" 
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
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
