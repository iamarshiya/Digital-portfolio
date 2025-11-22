import React from "react";
import "./About.css";

const About = () => {
  const technicalStack = [
    { name: "Python", icon: "</>", level: "90%" }, 
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
    <div className="about-container">
      {/* Background Decorations */}
      <div className="bg-decor bg-decor-1"></div>
      <div className="bg-decor bg-decor-2"></div>
      
      {/* Main Content Section */}
      <div className="about-content container">
        <div className="text-section">
          
          {/* MODIFIED HEADER LAYOUT */}
          <h1 className="headline">
            With every line of <br />
            code, I make the <br />
            world a little <span className="headline-accent">better</span> !
          </h1>
          {/* END MODIFIED HEADER LAYOUT */}

          <p className="description">
            Detail-oriented and proactive B.Tech Electronics & Telecommunication student currently in the <strong>3rd year</strong> of study. My expertise lies at the critical intersection of <strong>hardware and software</strong>, with practical experience in <strong>React.js, Embedded C, CSS, and IoT-based systems</strong>. 

            I am deeply passionate about <strong>building real-time applications</strong> and evolving into a full-stack problem solver. My strong interest areas include <strong>AI/Machine Learning, edge computing, and connected healthcare</strong>. I actively pursue hands-on projects that successfully blend robust embedded systems with modern web development. 

            Eager to contribute technical skills and analytical thinking to tech-driven teams, and ready to take on project ownership and self-motivated learning challenges.
          </p>

          <div className="stats">
            <div className="stat-box">
              <div className="stat-number">5+</div>
              <div className="stat-label">Completed projects</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">3</div>
              <div className="stat-label">Ongoing projects</div>
            </div>
          </div>
        </div>
      
      </div>

      {/* Skills Section - Side-by-Side Cards on Desktop */}
      <section className="skills-container">
        <div className="container skills-content">
          
          {/* Block 1: Technical Stack (Glassmorphic) */}
          <div className="skill-block"> 
            <h2>Technical Stack Proficiency</h2>
            <p>
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

          {/* Block 2: Conceptual & Soft Skills (Glassmorphic) - Single Column List */}
          <div className="skill-block">
            <h2>Conceptual & Soft Skills</h2>
            
            <p>
              My approach to development is rooted in strong analytical thinking, effective project management, and a commitment to continuous, self-motivated learning.
            </p>
            
            <ul className="soft-skills-list">
                {conceptualSkills.map(skill => (
                    <li key={skill}>
                        <span>★</span> {skill}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;