import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink instead of react-scroll
import Header from "../components/Header"; // ✅ Import Header for consistency
import contractingLogo from "../assets/Round_contracting.png"; // Ensure this file exists

const Home = () => {
  return (
    <div className="font-sans">
      {/* ✅ Imported Header */}
      <Header />

      {/* ✅ Hero Section */}
      <section id="home" className="h-[75vh] flex items-center justify-center bg-gradient-to-r from-[var(--biscay)] to-[var(--san-juan)] text-white text-center px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F05A28] font-barlow tracking-wide uppercase">
            Build Smart. Build Strong. Build for the Future.
          </h2>
          <p className="mt-4 text-lg">Cascadia Performance is a general contracting company focused on client value and high-performance construction.</p>
          <p className="mt-4 text-lg">We are committed to delivering honesty, integrity, quality, and value to our clients and community.</p>
          <p className="mt-4 text-lg">We believe in improving our community by improving the built environment that we live in.</p>
          <p className="mt-4 text-lg">We work to build a culture that values craft and looks toward the needs of the future.</p>
          <p className="mt-4 text-lg">We are ready to help you address your remodeling needs; from home repairs, kitchens, and baths to additions and ADUs.</p>
          <p className="mt-4 text-lg">Contact us today—we’d love to hear about your project!</p>
          
          {/* ✅ Fixed "Get in Touch" Button to Navigate to Contact Page */}
          <NavLink to="/contact" className="inline-block mt-6 bg-white text-[var(--trinidad)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 cursor-pointer">
            Get in Touch
          </NavLink>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section id="services" className="py-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[var(--oxford-blue)]">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold text-gray-700">Project Consulting</h4>
              <p className="mt-2 text-gray-600">Guidance on solving home challenges, project budgeting, and design management.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold text-gray-700">Design Development</h4>
              <p className="mt-2 text-gray-600">We work with designers, architects, and engineers to create permit-ready plans.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold text-gray-700">Pre-Construction</h4>
              <p className="mt-2 text-gray-600">Permit applications, materials coordination, and project schedule development.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-bold text-gray-700">Project Management</h4>
              <p className="mt-2 text-gray-600">Ensuring projects stay on time and within budget with quality control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[var(--oxford-blue)]">About Us</h3>
          <p className="mt-4 text-gray-700">
            Cascadia Performance Contracting was started by Adam Leckie in 2024. Adam is a native Oregonian who has worked in Portland's residential remodeling industry since 2011.
          </p>
          <p className="mt-4 text-gray-700">
            With a wealth of experience in sales, design, estimating, permitting, and project management, as well as carpentry, he created Cascadia Performance to deliver high-quality renovations at competitive prices.
          </p>
          <h3 className="mt-6 text-2xl font-bold text-[var(--oxford-blue)]">Our Inspirations</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>The Not So Big House</li>
            <li>Pretty Good House</li>
            <li>Passive Haus Institute</li>
            <li>Birdsmouth Design/Build</li>
            <li>Greenhammer Design/Build</li>
            <li>Hammer and Hand</li>
            <li>Living Future</li>
            <li>Earth Advantage</li>
          </ul>
        </div>
      </section>

      {/* ✅ Footer (Bottom Logo Enlarged, Not Huge) */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12 relative">
        <p>&copy; 2025 Cascadia Performance Contracting. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <img src={contractingLogo} className="w-28" alt="Cascadia Performance Contracting" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
