import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Horizontal.png";

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md py-4 px-6 z-50 flex justify-between items-center">
      {/* ✅ Logo Always Goes to Home */}
      <NavLink to="/">
        <img src={logo} className="w-48 h-auto" alt="Cascadia Performance Logo" />
      </NavLink>

      {/* ✅ Navigation */}
      <nav>
        <ul className="flex space-x-8 text-lg font-semibold text-[var(--oxford-blue)]">
          <li><NavLink to="/#home" className="hover:text-[var(--trinidad)] transition-all">Home</NavLink></li>
          <li><NavLink to="/#about" className="hover:text-[var(--trinidad)] transition-all">About</NavLink></li>
          <li><NavLink to="/#services" className="hover:text-[var(--trinidad)] transition-all">Services</NavLink></li>
          <li><NavLink to="/#inspirations" className="hover:text-[var(--trinidad)] transition-all">Inspirations</NavLink></li>
          <li><NavLink to="/portfolio" className="hover:text-[var(--trinidad)] transition-all">Portfolio</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-[var(--trinidad)] transition-all">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
