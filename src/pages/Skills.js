import React, { useState } from "react";
import "./Skills.css";
import { Zap, Hexagon, Code, Globe, Cpu, Database, Feather, Tool } from 'lucide-react';

const skillData = [
    { category: "Web Development", icon: "🌐", skills: [
        { name: "ReactJS", level: 85, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F0DB4F" },
        { name: "Node.js/Express", level: 75, color: "#68A063" },
        { name: "HTML/CSS", level: 85, color: "#E34C26" }
    ]},
    { category: "Data Science / ML", icon: "🧠", skills: [
        { name: "Python", level: 90, color: "#306998" },
        { name: "Scikit-learn", level: 85, color: "#FF9800" },
        { name: "TensorFlow", level: 75, color: "#F06037" },
        { name: "Data Analysis", level: 80, color: "#00BCD4" }
    ]},
    { category: "Embedded Systems", icon: <Cpu />, skills: [
        { name: "Embedded C", level: 80, color: "#00FF7F" },
        { name: "STM32/Arduino", level: 90, color: "#FF4500" },
        { name: "IoT Platforms", level: 75, color: "#00CED1" },
        { name: "Hardware Integration", level: 85, color: "#A9A9A9" }
    ]},
    { category: "Database & Tools", icon: <Database />, skills: [
        { name: "SQL (PostgreSQL)", level: 80, color: "#336791" },
        { name: "Git/GitHub", level: 95, color: "#E84E31" },
        { name: "Docker/Kubernetes", level: 70, color: "#0DB7ED" },
        { name: "Analytical Thinking", level: 85, color: "#D2FDBB" }
    ]}
];

// Component for a single skill item with unique progress bar
const DataStreamSkill = ({ skill }) => (
    <div className="data-stream-skill-item">
        <div className="stream-header">
            <span className="skill-name-stream">{skill.name}</span>
            <span className="skill-level-stream" style={{color: skill.color}}>{skill.level}%</span>
        </div>
        
        {/* The data stream line */}
        <div className="stream-progress">
            <div 
                className="stream-fill" 
                style={{
                    width: `${skill.level}%`, 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 5px ${skill.color}`
                }}
            >
            </div>
        </div>
        {/* REMOVED: Old scrolling stream-overlay */}
        {/* REMOVED: <div className="stream-overlay" style={{width: `${skill.level}%`}}>...</div> */}
    </div>
);


export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(skillData[0]);

    return (
        <main className="main-section">
            <section className="skills-page-section">
                
                <div className="skills-content-wrapper">
                    <h2 className="skills-title neon-glow">
                        <span className="highlight">Skills</span> <Zap size={36} className="title-icon"/>
                    </h2>

                    <p className="skills-description">
                        A dynamic overview of my technical interface, categorized for deep dives into development, data science, and infrastructure.
                    </p>

                    {/* --- CRAZY FEATURE 1: Hexagonal Filter Grid --- */}
                    <div className="hex-grid-container">
                        {skillData.map((data, index) => (
                            <div 
                                key={data.category}
                                className={`hex-module ${activeCategory.category === data.category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(data)}
                            >
                                <Hexagon size={120} className="hex-shape"/>
                                <div className="hex-content">
                                    <span className="hex-icon">{data.icon}</span>
                                    <span className="hex-label">{data.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- CRAZY FEATURE 2: Data Stream Visualization Block --- */}
                    <div className="visualization-block">
                        <div className="block-header neon-glow">
                            <span className="block-icon">{activeCategory.icon}</span>
                            <h3>{activeCategory.category} Diagnostics</h3>
                        </div>
                        
                        <div className="skills-stream-list">
                            {activeCategory.skills.map(skill => (
                                <DataStreamSkill key={skill.name} skill={skill} />
                            ))}
                        </div>

                        <div className="diagnostic-summary">
                            <p>
                                <Zap size={18} className="text-primary-color"/> 
                                {activeCategory.category} system proficiency rated at **{Math.round(activeCategory.skills.reduce((sum, s) => sum + s.level, 0) / activeCategory.skills.length)}%** average operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}