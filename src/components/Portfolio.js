import React from 'react';

function Portfolio() {
  return (
    <div>
      <h2>Our Portfolio</h2>
      <div className="portfolio-gallery">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <p>Residential Home Build</p>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <p>Office Space Renovation</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
