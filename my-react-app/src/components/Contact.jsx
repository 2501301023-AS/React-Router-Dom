import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your simulated message has been captured.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In <span className="cyan-text">Touch</span></h2>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Have an exciting opportunity, a complex project problem to solve, or just want to say hi? Drop a message!</p>
          
          <div className="info-details">
            <div className="info-item">
            
              <span>ASHISHKUMAR@gmail.com</span>
            </div>
            <div className="info-item">
            
              <span>+91 9885748574</span>
            </div>
            <div className="info-item">
             
              <span>PANIPAT</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;