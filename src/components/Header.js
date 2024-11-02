import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the path matches where Header.css is located

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/Users/Suitcase/Documents/Repos/performance-suitcase/src/assets/Horizontal.png" alt="Cascadia Performance Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
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
