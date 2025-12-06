import React, { useState } from "react";
import "./Projects.css";
import { Zap, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: "Medicine Reminder System",
    category: "IoT/Embedded",
    tech: ["STM32", "IoT-based logging", "ML-based pILL verification"],
    description: "Developed a secure and elderly-patient integrated system for medication logging with an IoT platform. Designed robust control logic, implemented cloud-hardware communication, and developed ML model for pill intake verification.",
    year: "Major Project",
  },
  {
    id: 2,
    title: "HelloPills (Real-Time Healthcare)",
    category: "Web/IoT",
    tech: ["React Hooks", "Firebase", "RBAC", "Optimized Database"],
    description: "Engineered a real-time healthcare platform using React Hooks and Firebase. Features sync between doctor and caregiver dashboards, role-based access control (RBAC), optimized database structures, and developed dashboards for patient monitoring and alerts.",
    year: "Self-Project",
  },
  {
    id: 3,
    title: "AI Diagnostic Assistant",
    category: "AIML",
    tech: ["FastAPI", "Scikit-learn", "API Endpoints"],
    description: "Developed a disease prediction API using FastAPI and Scikit-learn. Capable of predicting conditions from multi-symptom inputs. Implemented probabilistic confidence scoring, trained ML models, and deployed customized API endpoints.",
    year: "Self-Project",
    link: "https://github.com/iamarshiya/AI-Diagnostic-Assistant",
  },
  {
    id: 4,
    title: "Defect Detection in Zari Manufacturing",
    category: "Computer Vision",
    tech: ["OpenCV", "Random Forest", "Image Processing"],
    description: "Built a computer vision pipeline using OpenCV and Random Forest to detect silver thread irregularities. Implemented preprocessing pipeline, optimized contour extraction, trained ML classifier, and validated the model's accuracy.",
    year: "College Project",
    link: "https://github.com/iamarshiya/Loom_Defetct_Detection",
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
    <main className="main-section">
        <section className="projects-section">
            
            <div className="projects-content-wrapper">
                <h2 className="projects-title neon-glow">
                    My <span className="highlight">Projects</span> <Zap size={36} className="title-icon"/>
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
                            <div className="project-card glow-on-hover" key={project.id}>
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

                                {/* CONDITIONAL RENDERING: Only render the link if project.link exists */}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                                        View Code <ExternalLink size={16} className="ml-1"/>
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="no-projects">No projects found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    </main>
  );
}