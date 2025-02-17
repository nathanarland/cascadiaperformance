import React, { useState } from "react";
import "./Contact.css"; // ✅ Ensure this file is correctly linked

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
    <div className="contact-wrapper"> {/* ✅ New wrapper div for centering */}
      <div className="contact-container">
        <h2>Contact Us</h2>
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
  );
}

export default Contact;
