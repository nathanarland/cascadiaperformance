import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// ✅ Import CSS (Ensure Tailwind is applied)
import "./index.css"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ✅ Explicitly ensure "Home" is the default */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />  {/* 🔹 Handles any /home case */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
