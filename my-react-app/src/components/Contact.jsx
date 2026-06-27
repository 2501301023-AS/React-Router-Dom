import React from 'react';

function Contact() {
  return (
    <div className="section-container">
      <h2>Contact Me</h2>
      <p>Have a project in mind or want to say hello? Drop me a message!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;