import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Your Trusted Construction Partner</h1>
        <p>We build your dreams with precision and care.</p>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <h2>Our Featured Services</h2>
        <div className="services">
          <div className="service">Residential Construction</div>
          <div className="service">Commercial Projects</div>
          <div className="service">Remodeling & Renovation</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <button onClick={() => navigate('/contact')} className="get-in-touch-button">
          Get in Touch
        </button>
      </section>
    </div>
  );
}

export default Home;
