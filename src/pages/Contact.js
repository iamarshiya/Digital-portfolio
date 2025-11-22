import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (In a real application, this data would be sent to a server.)");
  };

  return (
    <section className="contact-section">
      {/* Background Decorations for consistent style */}
      <div className="bg-decor bg-decor-1"></div>
      <div className="bg-decor bg-decor-2"></div>

      <div className="contact-content-wrapper">
        <h2 className="contact-title">
          Let's <span className="highlight">Connect</span>.
        </h2>

        <p className="contact-description">
          I'm always open to discussing new projects, collaboration opportunities, or technical challenges. Feel free to send a message!
        </p>

        <div className="contact-layout">
          {/* Card 1: Contact Information */}
          <div className="info-card">
            <h3>Get in Touch Directly</h3>
            <p>I aim to respond to all inquiries within 24 hours.</p>

            <div className="info-item">
              <h4>📧 Email</h4>
              <p>your.email@example.com</p>
            </div>

            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+91 98123 42111</p>
            </div>
            
            <div className="info-item">
              <h4>📍 Location</h4>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="form-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}