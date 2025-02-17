import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../assets/Horizontal.png";

const Header = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* ✅ Enlarged Logo (Consistent on All Pages) */}
        <NavLink to="/">
          <img src={logo} className="w-60" alt="Cascadia Performance Logo" />
        </NavLink>
        
        <ul className="flex space-x-6 text-lg font-semibold text-[var(--oxford-blue)]">
          <li>
            <NavLink to="/" className="hover:text-[var(--trinidad)] transition-all">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--trinidad)] transition-all">
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--trinidad)] transition-all">
              Services
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-[var(--trinidad)] transition-all">
              Testimonials
            </Link>
          </li>
          <li>
            <NavLink to="/portfolio" className="hover:text-[var(--trinidad)] transition-all">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[var(--trinidad)] transition-all">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
