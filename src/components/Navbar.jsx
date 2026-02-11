import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event) => {
    const target = event.target.closest("a");
    if (target) setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a className="brand" href="/#home">
          <img className="brand-logo" src="/image/logo.png" alt="image/logo.png" />
          <span>Antanta Byte</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${isOpen ? "mobile-open" : ""}`}
          onClick={handleNavClick}
        >
          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/technology-stack">Technology</a>
          <a href="/#about">About</a>
          <a href="/#testimonials">Testimonials</a>
          <a href="/#contact">Contact</a>
          <a className="nav-cta" href="/#contact" data-cta="Navbar Get Started" data-cta-location="navbar">Get Started</a>
        </nav>

        <div className="nav-actions">
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <a className="btn-getstarted" href="/#contact" data-cta="Navbar Get Started" data-cta-location="navbar">Get Started</a>
        </div>
      </div>
    </header>
  );
}
