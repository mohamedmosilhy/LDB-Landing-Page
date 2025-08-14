import React, { useState, useCallback, useEffect, useRef } from "react";

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
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-6 py-4 sm:py-6 lg:py-6">
      <nav
        className="max-w-6xl mx-auto bg-white/25 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl"
        ref={navbarRef}
      >
        <div className="px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="fancy-title-medium text-xl sm:text-2xl lg:text-3xl text-white drop-shadow-lg">
                Learning Design Boutique
              </h1>
            </div>

            {/* Desktop Navigation - Only visible on large screens */}
            <div className="hidden xl:flex items-center space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative fancy-subtitle-large text-white text-xs lg:text-xs transition-all duration-200 hover:scale-105 group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                >
                  <span className="relative z-10 drop-shadow-md">
                    {item.label}
                  </span>
                  {/* Hover underline effect - Desktop only */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:shadow-lg"></span>
                  {/* Hover glow effect - Desktop only */}
                  <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 -z-10 scale-110 group-hover:scale-125"></span>
                </a>
              ))}
            </div>

            {/* Menu Toggle Button - Visible on medium and small screens */}
            <button
              className="xl:hidden p-3 sm:p-4 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-105"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md"
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

          {/* Mobile/Medium Navigation Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="xl:hidden mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/30"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="relative fancy-subtitle-large text-white text-xs sm:text-xs py-3 sm:py-4 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                  >
                    <span className="relative z-10 drop-shadow-md">
                      {item.label}
                    </span>
                    {/* Mobile/Medium hover effect - Scaling only */}
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
