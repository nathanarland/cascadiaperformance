import React from 'react';
import '../styles/AboutUs.css'; // Corrected import path

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="path-to-hero-image.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Cascadia Performance</h1>
          <p>Crafting Sustainable, High-Performance Construction Solutions for Over 13 Years</p>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>About Cascadia Performance</h2>
          <p>
            With over 13 years of experience in the design and build remodel industry, I’ve developed a deep passion for delivering high-quality craftsmanship.
            I started my career as a carpenter's apprentice, working my way up to managing complex construction projects. My experience spans from hands-on building 
            to comprehensive project management, design, and sales, a foundation I strengthened during my time as a Project Manager and Estimator at Lamont Bros.
          </p>
          <blockquote>
            “At Cascadia Performance, my focus is on creating sustainable, high-performance building solutions.”
          </blockquote>
          <p>
            I’m committed to staying at the forefront of innovative design and construction practices, continually expanding my knowledge through industry education and 
            collaborating with like-minded professionals. With my CCB license secured and a growing network of clients, I’m excited to offer personalized, high-quality services 
            that meet the evolving needs of both residential and commercial clients.
          </p>
        </div>
        <div className="about-image">
          <img src="path-to-adam-photo.jpg" alt="Adam Leckie" className="adam-image" />
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Work with Cascadia Performance?</h2>
        <p>Let us help bring your project to life with sustainable, high-performance solutions.</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default AboutUs;
