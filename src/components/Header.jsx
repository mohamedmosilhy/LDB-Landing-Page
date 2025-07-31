import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

// =============================================================================
// HEADER COMPONENT
// =============================================================================
const Header = () => {
  // ===========================================================================
  // STATE & REFS
  // ===========================================================================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const { scrollToSection } = useSmoothScroll();

  // ===========================================================================
  // NAVIGATION DATA
  // ===========================================================================
  const navItems = [
    { id: "core-values", label: "Core Values", href: "#core-values" },
    { id: "clients", label: "Partners", href: "#clients" },
    { id: "services", label: "Our Services", href: "#services" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact Us", href: "#contact" },
  ];

  // ===========================================================================
  // EVENT HANDLERS
  // ===========================================================================
  const handleNavClick = useCallback(
    (sectionId) => {
      setIsMenuOpen(false);

      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        try {
          scrollToSection(sectionId);
        } catch (error) {
          console.warn("Navigation error:", error);
          // Fallback: scroll to top if section not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    },
    [scrollToSection]
  );

  const handleKeyDown = (e, sectionId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(sectionId);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ===========================================================================
  // EFFECTS
  // ===========================================================================
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      // Use passive listeners for better performance
      document.addEventListener("click", handleClickOutside, { passive: true });
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key and manage focus
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        // Return focus to hamburger button
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first menu item when menu opens
      const firstLink = document.querySelector(".navbar-nav .nav-link");
      if (firstLink) firstLink.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // ===========================================================================
  // RENDER
  // ===========================================================================
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          {/* Logo/Brand */}
          <div className="navbar-brand">
            <h1 className="logo-text">Learning Design Boutique</h1>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navbarNav"
            aria-haspopup="true"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

          {/* Navigation Menu */}
          <div
            className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="navbar-nav" role="menubar">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id} role="none">
                  <a
                    className="nav-link"
                    href={item.href}
                    role="menuitem"
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
