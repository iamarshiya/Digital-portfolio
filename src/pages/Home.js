import React, { useState, useEffect } from "react";

const socialLinks = [
  { href: "#", label: "Twitter", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 4.557a9.887 9.887 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724c-.951.563-2.005.974-3.127 1.195a4.918 4.918 0 0 0-8.379 4.482A13.946 13.946 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723a4.9 4.9 0 0 1-2.228-.616v.06a4.917 4.917 0 0 0 3.946 4.819 4.902 4.902 0 0 1-1.292.172 4.92 4.92 0 0 1-.924-.088 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 0 19.54a13.901 13.901 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.42 0-.22-.005-.44-.014-.659A10.243 10.243 0 0 0 24 4.557Z" /></svg>, },
  { href: "#", label: "GitHub", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .297c-6.6 0-11.995 5.4-11.995 12.05 0 5.31 3.438 9.803 8.2 11.4.6.104.82-.253.82-.568 0-.28-.01-1.02-.015-2-3.338.726-4.042-1.62-4.042-1.62-.546-1.385-1.333-1.754-1.333-1.754-1.09-.735.082-.72.082-.72 1.204.085 1.838 1.245 1.838 1.245 1.07 1.832 2.808 1.302 3.492.996.08-.77.42-1.303.762-1.602-2.665-.313-5.466-1.347-5.466-6.003 0-1.326.467-2.41 1.235-3.26-.124-.31-.536-1.564.116-3.262 0 0 1.005-.322 3.292 1.243a11.41 11.41 0 0 1 3-.404c1.02.004 2.048.138 3 .404 2.28-1.565 3.285-1.243 3.285-1.243.656 1.698.245 2.952.12 3.262.77.85 1.235 1.935 1.235 3.26 0 4.67-2.807 5.685-5.48 6 0 .44.02.82.02 1.16 0 .312.216.676.825.565 4.76-1.6 8.2-6.096 8.2-11.4 0-6.65-5.394-12.05-12-12.05z" /></svg>, },
  { href: "#", label: "LinkedIn", svg: <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.15 107.3 0 82.49 0 53A53.92 53.92 0 0 1 53.66 0a53.92 53.92 0 0 1 53.66 53c0 29.49-24.2 54.3-53.48 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.5V448h-92.7V148.9h89V184h1.3c12.4-23.4 42.7-48.3 87.8-48.3 94 0 111.4 61.8 111.4 142.3V448z"/></svg>, },
  { href: "#", label: "Dribbble", svg: <svg viewBox="0 0 512 512" fill="currentColor" width="20" height="20"><path d="M256 8C119.03 8 8 119.03 8 256c0 136.97 111.03 248 248 248 136.97 0 248-111.03 248-248 0-136.97-111.03-248-248-248zm174.34 115.41c36.49 32.74 58.23 78.12 58.23 128.58 0 6.54-.41 13-1.18 19.34a296.19 296.19 0 0 0-230.88-37.7 446.88 446.88 0 0 1 174.48-110.22zM92.58 110.3a192.2 192.2 0 0 1 133.23-41.95 432.88 432.88 0 0 1 138.86 96.42 431.15 431.15 0 0 1-219.1 76.62c-21.04 0-41.43-3.49-60.51-9.83a199.12 199.12 0 0 1-2.4-120.75zm-15.21 296.92c9.9 38.32 40.12 69.24 78.31 78.43 18.4 4.55 37.42 5.42 56.4 2.54 8.07-1.33 15.91-4.01 23.39-7.73a447.63 447.63 0 0 0-115.79-139.58c-39.99 12.88-68.07 42.5-76.31 66.34-5.77 16.52-6.53 34.49-5.99 51.99zm39.91-80.41c41.37-40 78.86-72.53 139.13-93.11a296.41 296.41 0 0 1 82.02 155.93 432.79 432.79 0 0 1-183.95 15.73 434.95 434.95 0 0 1-28.82-78.82c-9.09-.18-18.28-.33-27.31-2.29-10.08-2.29-21.53-8.23-30.59-15.24a198.6 198.6 0 0 1 28.52-101.28zm163.15 143.63c4.66 0 9.16-.4 13.54-1.12a193.59 193.59 0 0 0 74.06-36.89 431.53 431.53 0 0 0 55.53-61.27c-23.58 11.65-55.74 30.27-89.11 42.5a291.27 291.27 0 0 1-93.02 26.83c5.16 9 11.56 17.81 19.11 25.37a133.44 133.44 0 0 0 20.89 11.58z" /></svg>, },
];

const Home = () => {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"];
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
            Arshiya <br /><span className="lastname">Attar</span>
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
            <button className="btn btn-secondary">Book a Call</button>

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