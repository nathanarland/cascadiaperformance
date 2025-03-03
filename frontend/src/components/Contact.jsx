import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import "./Contact.css"; // Ensure styles are properly applied

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* ✅ Ensures full-page layout */}
      <Helmet>
        <title>Contact Us | Cascadia Performance</title>
        <meta
          name="description"
          content="Get in touch with Cascadia Performance Contracting. We're ready to help with your remodeling, renovation, and high-performance construction needs."
        />
      </Helmet>

      <div className="flex-grow flex items-center justify-center">
        <div className="contact-container">
          <h2 className="text-3xl font-bold text-[var(--oxford-blue)]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>

      {/* ✅ Footer Now Below the Form */}
      <Footer />
    </div>
  );
}

export default Contact;
