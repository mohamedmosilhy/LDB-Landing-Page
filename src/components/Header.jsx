import React, { useState, useCallback, useEffect, useRef } from "react";
import LDB_logo from "../assets/LDB-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const navItems = [
    { id: "core-values", label: "Core Values", href: "#core-values" },
    { id: "clients", label: "Partners", href: "#clients" },
    { id: "services", label: "Our Services", href: "#services" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = useCallback((sectionId) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      try {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (error) {
        console.warn("Navigation error:", error);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  }, []);

  const handleKeyDown = (e, sectionId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavClick(sectionId);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      const firstLink = document.querySelector(".navbar-nav .nav-link");
      if (firstLink) firstLink.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-5 lg:py-6">
      <nav
        className="max-w-7xl mx-auto bg-white/25 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/40 shadow-2xl"
        ref={navbarRef}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1">
              <img
                src={LDB_logo}
                alt="LDB Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 object-contain rounded-lg shadow-lg flex-shrink-0"
              />
              <h1 className="fancy-title-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white drop-shadow-lg">
                <span className="hidden sm:inline">
                  Learning Design Boutique
                </span>
                <span className="sm:hidden">LDB</span>
              </h1>
            </div>

            {/* Desktop Navigation - Only visible on large screens */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-shrink-0">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative fancy-subtitle-large text-white text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium transition-all duration-200 hover:scale-105 group px-2 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                >
                  <span className="relative z-10 drop-shadow-md whitespace-nowrap">
                    {item.label}
                  </span>
                  {/* Hover underline effect - Desktop only */}
                  <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-[calc(100%-1rem)] group-hover:shadow-lg"></span>
                  {/* Hover glow effect - Desktop only */}
                  <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 -z-10 scale-110 group-hover:scale-125"></span>
                </a>
              ))}
            </div>

            {/* Menu Toggle Button - Visible on medium and small screens */}
            <button
              className="lg:hidden p-1.5 sm:p-2 md:p-2.5 rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-105 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile/Tablet Navigation Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-white/30"
            >
              <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="relative fancy-subtitle-large text-white text-sm sm:text-base md:text-lg font-medium py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 rounded-lg md:rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 hover:scale-105 focus:scale-105 group focus:outline-none focus:ring-2 focus:ring-white/50"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                  >
                    <span className="relative z-10 drop-shadow-md">
                      {item.label}
                    </span>
                    {/* Mobile/Tablet subtle glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 -z-10"></span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
