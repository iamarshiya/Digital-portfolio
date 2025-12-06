import React from "react";
import "./About.css";
import { Zap, CheckCircle } from 'lucide-react';

// The technicalStack data is removed as it belongs on the Skills page.
const About = ({ setCurrentPage }) => { 
  
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
          
          {/* Main Content Section (Hero / Biography) */}
          <section className="about-hero">
            <div className="text-section">
              
              <h1 className="headline neon-glow">
                With every line of <br />
                code, I make the <br />
                world a little <span className="headline-accent">better</span> !
              </h1>

              <p className="description">
                Detail-oriented and proactive B.Tech Electronics & Telecommunication student currently in the **3rd year** of study. My expertise lies at the critical intersection of **hardware and software**, with practical experience in **React.js, Embedded C, CSS, and IoT-based systems**. 
                <br /><br />
                I am deeply passionate about **building real-time applications** and evolving into a full-stack problem solver. My strong interest areas include **AI/Machine Learning, edge computing, and connected healthcare**.
              </p>

              <div className="stats-grid">
                <div 
                  className="stat-box clickable"
                  onClick={() => setCurrentPage('projects')} // NAVIGATE TO PROJECTS
                  role="button"
                  tabIndex="0"
                >
                  <div className="stat-number">5<Zap size={24} className="stat-icon"/></div>
                  <div className="stat-label">Completed projects</div>
                </div>

                <div className="stat-box">
                  <div className="stat-number">3<Zap size={24} className="stat-icon"/></div>
                  <div className="stat-label">Ongoing projects</div>
                </div>
              </div>
            </div>
          
            {/* Image Card */}
            <div className="profile-image-section">
                <div className="image-card glow-border hue-animate">
                    <img 
                        src="./about.png" 
                        alt="Profile Illustration"
                        className="profile-img"
                    />
                </div>
                <p className="image-caption">Electronics & Full-stack Synergy</p>
            </div>
          </section>

          {/* Conceptual Skills Section (Now the main focus of the lower half) */}
          <section className="skills-container">
            <div className="skills-content">          
                <div className="skill-block glass-card full-width-block"> {/* Added full-width class for flexibility */}
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
              
              {/* Optional: Add a button to direct users to the dedicated Skills page */}
              <div className="text-center-cta">
                  <button 
                      className="btn btn-primary"
                      onClick={() => setCurrentPage('skills')}
                  >
                      View Full Technical Stack →
                  </button>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;