import React from "react";
import contractingLogo from "../assets/Round_Contracting.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 w-full mt-12">
      <p>&copy; 2025 Cascadia Performance Contracting. All rights reserved.</p>
      <div className="flex justify-center mt-4">
        <img src={contractingLogo} className="w-28" alt="Cascadia Performance Contracting" />
      </div>
    </footer>
  );
};

export default Footer;
