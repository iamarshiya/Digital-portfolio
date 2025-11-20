import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "How to chat?",
    description:
      "An educational and entertaining website that teaches users how to chat politely, effectively, and confidently online.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fdbc3d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 14s1.5 2 4 2 4-2 4-2m-8-2v-4a4 4 0 018 0v4"></path>
        <circle cx="12" cy="7" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Scraper 1",
    description:
      "An innovative solution for data collection and web scraping, tailored for startups and data analysis projects.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#fdbc3d"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C9.243 2 7 4.243 7 7c0 7-4 9-4 9h18s-4-2-4-9c0-2.757-2.243-5-5-5zM12 10a3 3 0 100-6 3 3 0 000 6z" />
        <text x="12" y="18" fontSize="8" fontWeight="bold" fill="#fdbc3d" textAnchor="middle">
          1
        </text>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Persian Ad Block",
    description:
      "A browser add-on designed to eliminate annoying ads on Persian websites.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fdbc3d"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" stroke="#fdbc3d" />
        <path
          d="M9 9l6 6M9 15l6-6"
          stroke="#fdbc3d"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Design & Branding",
    description:
      "Experiencing both frontend and branding design, I’ve created logos, websites, and social media content for businesses and projects.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#fdbc3d"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          fill="#fff"
          d="M16 9a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <>
      <section className="projects-section">
        <h2 className="projects-title">
          What have I created?<span className="highlight">.</span>
        </h2>

        <p className="projects-description">
          Creating isn’t just part of my work , it’s part of my life. I’ve always tried to keep that spark of building alive and never lose the joy of bringing ideas to life. Here you can explore the projects I’ve built and released with my own vision and passion.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="btn-readmore">Read More</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}