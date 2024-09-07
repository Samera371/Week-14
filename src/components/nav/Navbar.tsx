import "./Navbar.css"; // Import the CSS file for styling

// Navbar.js
import { useState } from "react";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          IMBD
        </a>
        {/* Hamburger menu for mobile */}
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span>&#10005;</span> // X icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
        {/* Navbar links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;