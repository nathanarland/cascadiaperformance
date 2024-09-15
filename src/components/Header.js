import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Round copy.png'; // Ensure this path is correct
import './Header.css';  // Import the Header.css file for header-specific styles

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Cascadia Performance Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
