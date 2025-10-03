import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
    <img
      src={`${process.env.PUBLIC_URL}/images/vansh solar.png`}
      alt="Sunmarse Solar"
      style={{ height: "70px", objectFit: "contain" }}
    />
    <span className="logo-text">Sunmarse Solar</span>
  </Link>
</div>


        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/services" ? "active" : ""}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/testimonials" ? "active" : ""}
              to="/testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="cta">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
