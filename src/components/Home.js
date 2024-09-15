import React from 'react';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Your Trusted Construction Partner</h1>
        <p>We build your dreams with precision and care.</p>
        <button>Contact Us</button>
      </section>
      <section className="featured-services">
        <h2>Our Featured Services</h2>
        <div className="services">
          <div className="service">Residential Construction</div>
          <div className="service">Commercial Projects</div>
          <div className="service">Remodeling & Renovation</div>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <button>Get a Quote</button>
      </section>
    </div>
  );
}

export default Home;
