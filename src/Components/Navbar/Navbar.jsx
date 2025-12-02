import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>SUPERFONE</h1>

      {/* Desktop Menu */}
      <div className="center">
         <button className="trial-btn">Plans & Pricing</button>
        <button className="trial-btn">Start Trial</button>
        <button className="google-btn">
          <FaGooglePlay className="google-icon" /> Google Play
        </button>
        <Link to="/login" className="google-btn">User Login</Link>
      </div>

      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#" className="nav-item">Plans & Pricing</a>
        <button className="trial-btn">Start Trial</button>
        <button className="google-btn">
          <FaGooglePlay className="google-icon" /> Google Play
        </button>
        <Link to="/login" className="google-btn">User Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
