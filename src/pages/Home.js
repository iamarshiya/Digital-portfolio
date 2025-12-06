// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Download, Zap, MapPin, CheckCircle } from 'lucide-react';
import "./Home.css";

const socialLinks = [
  { href: "https://github.com/iamarshiya", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/arshiyaattar", label: "LinkedIn", Icon: Linkedin },
];

function Home({ setCurrentPage }) {
  const roles = ["Full-Stack Developer", "Tech Enthusiast", "UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing effect logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setCurrentRole(
        isDeleting
          ? fullText.substring(0, currentRole.length - 1)
          : fullText.substring(0, currentRole.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <main className="main-section home-section"> 
      <div className="bg-overlay"></div> 
      <div className="content-wrapper">
        {/* Left Side: Animated Text */}
        <div className="intro-text fade-in-left">
          <span className="availability-tag">
            <Zap size={14} className="mr-1" />Available for freelance work
          </span>
          
          <h1 className="name neon-glow"> 
            Hi, I'm Arshiya<br />
          </h1>
          <h2 className="role">
            <span className="typing-text neon-glow">{currentRole}</span> 
            <span className="cursor">|</span>
          </h2>
          <p className="bio">
            I craft accessible, performance-driven digital experiences, specializing in bringing design 
            concepts to life with clean, modern code. Let's build something impactful.
          </p>
          
          <div className="location-info">
             <span className="info-chip location-chip">
                <MapPin size={16}/> Based in India
             </span>
             <span className="info-chip available-chip">
                <CheckCircle size={16}/> Open to Remote Work
             </span>
          </div>

          <div className="cta-group">
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('contact')} 
            >
              Hire Me
            </button>
          </div>
          
          <div className="follow-me-text">
            Connect:
            <div className="social-icons">
              {socialLinks.map(({ href, label, Icon }) => (
                <a href={href} key={label} aria-label={label} className="social-link animated-icon">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image Card with subtle float animation */}
        <div className="image-container fade-in-right">
          <div className="image-card crazy-image-card subtle-float"> {/* <-- NEW CLASS HERE */}
            <img
              src="./profile.jpg" 
              alt="Arshiya Attar Tech Avatar"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;