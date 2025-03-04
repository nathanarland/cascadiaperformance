import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="font-sans">
      <Header />
      
      {/* ✅ Centered "Coming Soon" Message */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center bg-gray-100 text-gray-800 px-6">
        <h2 className="text-4xl font-bold text-[var(--trinidad)]">Portfolio</h2>
        <p className="mt-4 text-lg text-gray-600">We're working on showcasing our best projects.</p>
        <p className="text-lg text-gray-600">Check back soon to see our latest work!</p>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
