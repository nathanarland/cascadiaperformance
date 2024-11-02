import React from 'react';
import '../styles/AboutUs.css'; // Ensure AboutUs.css is in the correct styles folder

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="path-to-hero-image.jpg" alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1>Cascadia Performance</h1>
          <p>Established in 2024: Crafting Sustainable, High-Performance Construction Solutions</p>
        </div>
      </div>

      {/* About Section Content */}
      <div className="about-content">
        <div className="about-text">
          <h2>About Cascadia Performance</h2>
          <p>
            Cascadia Performance Contracting is a general contracting company focused on client value and high-efficiency construction. We’re capable of handling projects from exterior siding and window repairs to structural repairs, additions, and ADU builds. At Cascadia Performance, we’re committed to delivering honesty, integrity, quality, and value, leveraging home renovation projects to not only maintain but improve the quality of housing in the Portland metro area. We believe that quality in our built environment translates to quality of life, and we strive to make that more accessible for all.
          </p>
          <p>
            With over 13 years of experience in the design and build remodel industry, I’ve developed a deep passion for delivering high-quality craftsmanship. I started my career as a carpenter's apprentice, working my way up to managing complex construction projects. My experience spans from hands-on building to comprehensive project management, design, and sales, a foundation I strengthened during my time as a Project Manager and Estimator at Lamont Bros.
          </p>
          <blockquote>
            “At Cascadia Performance, my focus is on creating sustainable, high-performance building solutions.”
          </blockquote>
          <p>
            I’m committed to staying at the forefront of innovative design and construction practices, continually expanding my knowledge through industry education and collaborating with like-minded professionals. With my CCB license secured and a growing network of clients, I’m excited to offer personalized, high-quality services that meet the evolving needs of both residential and commercial clients.
          </p>
          <p>
            Cascadia Performance Contracting was officially established by me, Adam Leckie, in 2024. As a native Oregonian with extensive experience in Portland's residential remodeling industry, I bring a deep network of resources and expertise to every project. My goal is to deliver high-quality renovations at competitive prices, guiding clients on how to make improvements that enhance the livability, health, and value of their homes. From initial concept to permitted plans and construction completion, Cascadia Performance is here to help you achieve your vision.
          </p>
          <h3>Our Inspirations</h3>
          <ul>
            <li>The Not So Big House</li>
            <li>Pretty Good House</li>
            <li>Passive Haus Institute</li>
            <li>Birdsmouth Design/Build</li>
          </ul>
        </div>

        {/* Image of Adam */}
        <div className="about-image">
          <img src="path-to-adam-photo.jpg" alt="Adam Leckie" className="adam-image" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Work with Cascadia Performance?</h2>
        <p>Let us help bring your project to life with sustainable, high-performance solutions.</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}

export default AboutUs;
