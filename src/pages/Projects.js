import React, { useState } from "react";
import "./Projects.css";


const allProjects = [
  {
    id: 1,
    title: "Connected Health Monitor",
    category: "IoT",
    tech: ["Embedded C", "NodeJS", "Firebase"],
    description: "A real-time system monitoring patient vitals using edge computing and uploading data to a secure cloud database.",
    year: 2024,
    link: "#",
  },
  {
    id: 2,
    title: "AI-Powered Image Classifier",
    category: "AIML",
    tech: ["Python", "Machine Learning", "Data Visualization"],
    description: "Built a convolutional neural network (CNN) model to categorize custom datasets with 95% accuracy. Deployed via a REST API.",
    year: 2023,
    link: "#",
  },
  {
    id: 3,
    title: "Full-Stack E-commerce Site",
    category: "Web Development",
    tech: ["ReactJS", "NodeJS", "MongoDB"],
    description: "Developed a responsive e-commerce platform featuring secure payments, user authentication, and product search.",
    year: 2024,
    link: "#",
  },
  {
    id: 4,
    title: "Smart Home Controller (C)",
    category: "Embedded C",
    tech: ["Embedded C", "Hardware Integration", "IoT"],
    description: "Low-level system programming for a smart light control unit, focusing on memory efficiency and responsiveness.",
    year: 2023,
    link: "#",
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    category: "Data Visualization",
    tech: ["ReactJS", "Python", "Data Visualization"],
    description: "Interactive dashboard visualizing large datasets derived from IoT sensor readings, built with React and D3.js.",
    year: 2024,
    link: "#",
  },
  {
    id: 6,
    title: "Task Management API",
    category: "Web Development",
    tech: ["NodeJS", "REST API", "MongoDB"],
    description: "Developed a robust backend API for managing tasks, users, and permissions, adhering to RESTful standards.",
    year: 2022,
    link: "#",
  },
];

const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

// ------------------------------------------

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = allProjects.filter((project) => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section className="projects-section">
      {/* Background Decorations */}
      <div className="bg-decor bg-decor-1"></div>
      <div className="bg-decor bg-decor-2"></div>
      
      <div className="projects-content-wrapper">
        <h2 className="projects-title">
          My <span className="highlight">Projects</span>.
        </h2>

        <p className="projects-description">
          A focused showcase of systems I've built, emphasizing my skills in full-stack web development, embedded systems, and machine learning applications.
        </p>

        {/* --- Category Filters --- */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn-filter ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Projects Grid --- */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="card-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="tech-tags">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                  View Project <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            ))
          ) : (
            <p className="no-projects">No projects found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}