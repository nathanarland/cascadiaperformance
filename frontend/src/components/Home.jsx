import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // ✅ No need for `react-router-hash-link`
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contractingLogo from "../assets/Round copy.png"; // Logo for mission statement

const Home = () => {
  return (
    <div className="font-sans">
      <Helmet>
        <title>Cascadia Performance | High-Quality Contracting</title>
        <meta
          name="description"
          content="Cascadia Performance is a general contracting company focused on client value and high-performance construction. Learn more about our services today."
        />
      </Helmet>

      <Header />

      {/* ✅ Hero Section */}
      <section id="home" className="h-[65vh] flex flex-col items-center justify-center bg-gray-800 text-white text-center px-8 py-10">
        <div className="flex justify-center mt-[-40px] mb-6">
          <img src={contractingLogo} className="w-48" alt="Cascadia Performance Logo" />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F05A28] font-barlow tracking-wide uppercase">
            Build Smart. Build Strong. Build for the Future.
          </h2>
          <p className="mt-2 text-lg">Cascadia Performance is a general contracting company focused on client value and high-performance construction.</p>
          <p className="mt-2 text-lg">We are committed to delivering honesty, integrity, quality, and value to our clients and community.</p>
          <p className="mt-2 text-lg">We believe in improving our community by improving the built environment that we live in.</p>
          <p className="mt-2 text-lg">We work to build a culture that values craft and looks toward the needs of the future.</p>
          <p className="mt-2 text-lg">We are ready to help you address your remodeling needs; from home repairs, kitchens, and baths to additions and ADUs.</p>
          <p className="mt-2 text-lg">Contact us today—we’d love to hear about your project!</p>

          <NavLink to="/contact" className="inline-block mt-4 bg-white text-[var(--trinidad)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 cursor-pointer">
            Get in Touch
          </NavLink>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section id="services" className="py-16 text-center bg-[#2A2D34] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#F05A28]">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
              <h4 className="text-xl font-bold">Project Consulting</h4>
              <p className="mt-2">Guidance on solving home challenges, project budgeting, and design management.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
              <h4 className="text-xl font-bold">Design Development</h4>
              <p className="mt-2">We work with designers, architects, and engineers to create permit-ready plans.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
              <h4 className="text-xl font-bold">Pre-Construction</h4>
              <p className="mt-2">Permit applications, materials coordination, and project schedule development.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-gray-800">
              <h4 className="text-xl font-bold">Project Management</h4>
              <p className="mt-2">Ensuring projects stay on time and within budget with quality control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-16 text-center bg-[#2A2D34] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#F05A28]">About Us</h3>
          <p className="mt-4">
            Cascadia Performance Contracting was started by Adam Leckie in 2024. Adam is a native Oregonian who has worked in Portland's residential remodeling industry since 2011.
          </p>
          <p className="mt-4">
            With a wealth of experience in sales, design, estimating, permitting, and project management, as well as carpentry, he created Cascadia Performance to deliver high-quality renovations at competitive prices.
          </p>
        </div>
      </section>

      {/* ✅ Inspirations Section */}
      <section id="inspirations" className="py-16 text-center bg-[#2A2D34] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#F05A28]">Our Inspirations</h3>
          <div className="mt-6">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><a href="https://susanka.com/not-so-big-house/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">The Not So Big House</a></li>
              <li><a href="https://www.prettygoodhouse.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Pretty Good House</a></li>
              <li><a href="https://passivehouse.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Passive Haus Institute</a></li>
              <li><a href="https://birdsmouthpdx.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Birdsmouth Design/Build</a></li>
              <li><a href="https://www.greenhammer.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Greenhammer Design/Build</a></li>
              <li><a href="https://hammerandhand.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Hammer and Hand</a></li>
              <li><a href="https://living-future.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Living Future</a></li>
              <li><a href="https://www.earthadvantage.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Earth Advantage</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
