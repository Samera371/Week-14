import "./Navbar.css"; // Import the CSS file for styling

import { NewMovie } from "../../types"; // Import the NewMovie type from the types directory
import { useState } from "react"; // Import the useState hook from React

interface NavbarProps {
  addMovie: (movie: NewMovie) => void; // Define the props interface for the Navbar component
}

const Navbar = ({ addMovie }: NavbarProps) => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Temporary new movie object to be added when the add movie icon is clicked
  const tempNewMovie: NewMovie = {
    type: "movie",
    title: "New Movie",
    description: "New Movie Coming Soon!",
    year: "2024",
    genre: ["TBD"],
    ratings: [7, 8, 8],
    imgUrl:
      "https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            IMBD
          </a>
          <div id="add-movie-icon" onClick={() => addMovie(tempNewMovie)}>
            +
          </div>
        </div>
        {/* Hamburger menu button for mobile view */}
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span>✕</span> // X icon for closing the menu
          ) : (
            <span>☰</span> // Hamburger icon for opening the menu
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

export default Navbar; // Export the Navbar component as the default export
