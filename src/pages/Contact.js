import React from "react";
import "./Contact.css";
// IMPORTED LINKEDIN ICON
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react'; 

const Contact = () => {
  return (
    <main className="main-section">
      <section className="contact-section">
          
          <div className="contact-content-wrapper">
            <h2 className="contact-title neon-glow">
              Get in <span className="highlight">Touch</span> <Send size={36} className="title-icon"/>
            </h2>

            <p className="contact-description">
              I’m currently available for freelance projects and new development opportunities. 
              Send me a detailed message and let's build something amazing together!
            </p>

            <div className="contact-layout">
              
              {/* --- Left Side: Info Card (Techy Glass) --- */}
              <div className="info-card glass-card">
                  <h3>Direct Contact Info</h3>
                  <p>
                    Reach out through my professional email or connect with me instantly on LinkedIn.
                  </p>

                  <div className="info-item-group">
                      <div className="info-item">
                          <h4><Linkedin size={20} className="icon"/> LinkedIn Profile</h4>
                          <p>
                            <a 
                                href="YOUR_LINKEDIN_PROFILE_URL" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                /in/ArshiyaAttar
                            </a>
                          </p>
                      </div>
                      
                      <div className="info-item">
                          <h4><MapPin size={20} className="icon"/> Location</h4>
                          <p>Pune, Maharashtra, India</p>
                      </div>
                      
                     
                  </div>
              </div>

              <div className="form-card glass-card">
                  <h3>Send Me a Message</h3>
                  <form className="contact-form-body">
                      <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input type="text" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input type="email" id="email" placeholder="you@example.com" required />
                      </div>
                      <div className="form-group">
                          <label htmlFor="message">Your Message</label>
                          <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                      </div>
                      <button type="submit" className="btn-submit btn-primary">
                          <Send size={18} className="mr-2"/> Send Message
                      </button>
                  </form>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Contact;