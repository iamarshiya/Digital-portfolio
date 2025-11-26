import React from "react";
import "./About.css";
import { Zap, CheckCircle } from 'lucide-react';

// MODIFIED: Accept setCurrentPage as a prop
const About = ({ setCurrentPage }) => { 
  const technicalStack = [
    { name: "Python", icon: "🐍", level: "90%" }, 
    { name: "ReactJS", icon: "⚛️", level: "85%" },
    { name: "NodeJS", icon: "🟢", level: "70%" }, 
    { name: "AIML", icon: "🧠", level: "75%" },
    { name: "Embedded C", icon: "⚙️", level: "65%" },
    { name: "Firebase & REST APIs", icon: "🔥", level: "80%" },
  ];

  const conceptualSkills = [
    "IoT Technologies",
    "Machine Learning",
    "Data Visualization",
    "Development Tools",
    "Hardware–Software Integration",
    "Cross-Disciplinary Development",
    "Analytical Thinking",
    "Project Ownership",
    "Self-Motivated Learning",
  ];

  return (
    <main className="main-section">
      <div className="about-wrapper">
        <div className="about-container">
          
          {/* Main Content Section */}
          <section className="about-hero">
            <div className="text-section">
              
              <h1 className="headline neon-glow">
                With every line of <br />
                code, I make the <br />
                world a little <span className="headline-accent">better</span> !
              </h1>

              <p className="description">
                Detail-oriented and proactive B.Tech Electronics & Telecommunication student currently in the <strong>3rd year</strong> of study. My expertise lies at the critical intersection of <strong>hardware and software</strong>, with practical experience in <strong>React.js, Embedded C, CSS, and IoT-based systems</strong>. 
                <br /><br />
                I am deeply passionate about <strong>building real-time applications</strong> and evolving into a full-stack problem solver. My strong interest areas include <strong>AI/Machine Learning, edge computing, and connected healthcare</strong>.
              </p>

              <div className="stats-grid">
                {/* MODIFIED: Added onClick handler and cursor pointer class (in CSS) */}
                <div 
                  className="stat-box clickable"
                  onClick={() => setCurrentPage('projects')} // NAVIGATE TO PROJECTS
                  role="button"
                  tabIndex="0"
                >
                  <div className="stat-number">5<Zap size={24} className="stat-icon"/></div>
                  <div className="stat-label">Completed projects</div>
                </div>

                {/* Remaining stat box for consistency */}
                <div className="stat-box">
                  <div className="stat-number">3<Zap size={24} className="stat-icon"/></div>
                  <div className="stat-label">Ongoing projects</div>
                </div>
              </div>
            </div>
          
            {/* Placeholder Image Card */}
            <div className="profile-image-section">
                <div className="image-card glow-border hue-animate">
                    {/* Placeholder image: Replace with your actual profile picture */}
                    <img 
                        src="https://images.unsplash.com/photo-1549692520-cb971f1da8b9?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Profile Illustration"
                        className="profile-img"
                    />
                </div>
                <p className="image-caption">Electronics & Full-stack Synergy</p>
            </div>
          </section>

          {/* Skills Section - Side-by-Side Cards on Desktop */}
          <section className="skills-container">
            <div className="skills-content">
              
              {/* Block 1: Technical Stack (Glassmorphic) */}
              <div className="skill-block glass-card"> 
                <h2>Technical Stack Proficiency</h2>
                <p className="skill-description">
                  Mastery of core development languages, frameworks, and deployment services necessary to build modern, scalable, full-stack applications and systems.
                </p>

                {/* Render all technical skills */}
                {technicalStack.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon" role="img" aria-label={skill.name}>{skill.icon}</span>
                    <div className="skill-details">
                      <div className="skill-name">{skill.name}</div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: skill.level}}></div> 
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>

              <div className="skill-block glass-card">
                <h2>Conceptual & Soft Skills</h2>
                
                <p className="skill-description">
                  My approach to development is rooted in strong analytical thinking, effective project management, and a commitment to continuous, self-motivated learning.
                </p>
                
                <ul className="soft-skills-list">
                    {conceptualSkills.map(skill => (
                        <li key={skill}>
                            <CheckCircle size={16} className="soft-skill-icon" /> {skill}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;