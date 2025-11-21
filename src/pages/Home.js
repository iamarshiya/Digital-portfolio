import React, { useState, useEffect } from "react";

const socialLinks = [
  
  { href: "#", label: "GitHub", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .297c-6.6 0-11.995 5.4-11.995 12.05 0 5.31 3.438 9.803 8.2 11.4.6.104.82-.253.82-.568 0-.28-.01-1.02-.015-2-3.338.726-4.042-1.62-4.042-1.62-.546-1.385-1.333-1.754-1.333-1.754-1.09-.735.082-.72.082-.72 1.204.085 1.838 1.245 1.838 1.245 1.07 1.832 2.808 1.302 3.492.996.08-.77.42-1.303.762-1.602-2.665-.313-5.466-1.347-5.466-6.003 0-1.326.467-2.41 1.235-3.26-.124-.31-.536-1.564.116-3.262 0 0 1.005-.322 3.292 1.243a11.41 11.41 0 0 1 3-.404c1.02.004 2.048.138 3 .404 2.28-1.565 3.285-1.243 3.285-1.243.656 1.698.245 2.952.12 3.262.77.85 1.235 1.935 1.235 3.26 0 4.67-2.807 5.685-5.48 6 0 .44.02.82.02 1.16 0 .312.216.676.825.565 4.76-1.6 8.2-6.096 8.2-11.4 0-6.65-5.394-12.05-12-12.05z" /></svg>, },
  { href: "#", label: "LinkedIn", svg: <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.15 107.3 0 82.49 0 53A53.92 53.92 0 0 1 53.66 0a53.92 53.92 0 0 1 53.66 53c0 29.49-24.2 54.3-53.48 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.5V448h-92.7V148.9h89V184h1.3c12.4-23.4 42.7-48.3 87.8-48.3 94 0 111.4 61.8 111.4 142.3V448z"/></svg>, },
];

const Home = () => {
  const roles = ["React Developer", "Tech Enthusiast", "Cross-Disciplinary Developer"];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
    <main className="main-section">
      {/* Background Shapes for visual interest */}
      <div className="bg-decor bg-decor-1"></div>
      <div className="bg-decor bg-decor-2"></div>

      <div className="content-wrapper">
        {/* Left Side: Text */}
        <div className="intro-text">
          <h4 className="greeting">
            Hi There, I'm <span className="wave-emoji">👋</span>
          </h4>
          <h1 className="name">
            Arshiya <br /><span className="lastname">Attar !!</span>
          </h1>
          <h2 className="role">
            A <span className="typing-text">{currentRole}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="bio">
            Transforming ideas into digital reality, specializing in creating 
            accessible, performant, and delightful web experiences.
          </p>
          
          <div className="cta-group">
            <button className="btn btn-primary">Download CV</button>

            <div className="social-icons">
              {socialLinks.map(({ href, label, svg }) => (
                <a href={href} key={label} aria-label={label} className="social-link">
                  {svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="image-container">
          <div className="image-card">
             {/* Use your actual image here. */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Arshiya Attar"
              className="profile-img"
            />
            {/* The background circle for the glass effect */}
            <div className="image-decor-circle"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;