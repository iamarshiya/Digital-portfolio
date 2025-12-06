import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Code, Cpu, Smartphone, Database, Globe } from 'lucide-react'; 

import "./WelcomeOverlay.css";

const techParticles = [
  { icon: "🐍", color: "#306998", size: "30px", name: "Python" },
  { icon: <Code size={40}/>, color: "#61DAFB", size: "40px", name: "React" },
  { icon: <Cpu size={35}/>, color: "#D2FDBB", size: "35px", name: "AIML" },
  { icon: "🟢", color: "#68A063", size: "30px", name: "Node.js" },
  { icon: <Database size={45}/>, color: "#FFCA28", size: "45px", name: "Firebase" },
  { icon: "💻", color: "#FFFFFF", size: "30px", name: "Embedded C" },
  { icon: <Globe size={30}/>, color: "#D2FDBB", size: "30px", name: "IoT" },
  { icon: "🧠", color: "#00B0FF", size: "35px", name: "ML" },
];


const WelcomeOverlay = ({ onAnimationEnd }) => {
  const [show, setShow] = useState(true);
  const [dataStream, setDataStream] = useState("");

  const texts = [
    "// INITIALIZING CORE SYSTEMS...",
    "// AUTHENTICATING USER...",
    "// DECRYPTING ASSETS: 4096-BIT ENCRYPTION",
    "// ESTABLISHING SECURE CONNECTION...",
    "// PORTFOLIO INTEGRITY CHECK: COMPLETE",
    "// RENDERING VISUALS...",
    "// ACCESS GRANTED.",
  ];
  
  const matrixLine = "// DATA MATRIX: 01001001 01101111 01110100 00101110 01000100 01100101 01110110";

  // Typing effect 
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentStream = "";
    
    const typeLine = () => {
      if (index < texts.length) {
        const line = texts[index];
        if (charIndex < line.length) {
          currentStream += line[charIndex];
          setDataStream(currentStream);
          charIndex++;
          setTimeout(typeLine, 15);
        } else {
          currentStream += "\n";
          setDataStream(currentStream);
          
          if (index === 2) { 
              currentStream += matrixLine + "\n";
              setDataStream(currentStream);
          }
          
          index++;
          charIndex = 0;
          setTimeout(typeLine, 150);
        }
      }
    };

    typeLine();
  }, []);

  useEffect(() => {
    // Start the fade-out after 5.5 seconds
    const fadeTimer = setTimeout(() => {
      setShow(false);
    }, 5500);

    // Remove component after 6 seconds
    const endTimer = setTimeout(() => {
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 6000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  // Framer Motion Variants for the flying objects (Logic remains the same)
  const flyingObjectVariants = {
    initial: (i) => ({ 
      x: i % 2 === 0 ? '-100vw' : '100vw', 
      y: (Math.random() - 0.5) * 500, 
      rotate: i * 30, 
      opacity: 0 
    }),
    animate: (i) => ({
      x: i % 2 === 0 ? '-200px' : '200px', 
      y: (Math.random() - 0.5) * 100, 
      rotate: [i * 30, i * 30 + 360 * (i % 3 + 1)], 
      opacity: [0, 0.7, 0.7, 0], 
      transition: {
        duration: 4.5, 
        ease: "easeInOut",
        delay: 0.5 + i * 0.2, 
        times: [0, 0.3, 0.9, 1] 
      }
    })
  };


  return (
    <div className={`welcome-overlay ${show ? 'visible' : 'hidden'}`}>
        
        {/* ANIMATED TECH ICONS */}
        {techParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="tech-stack-icon"
            custom={i}
            variants={flyingObjectVariants}
            initial="initial"
            animate="animate"
            // Dynamic inline styles for icon color and position
            style={{ 
              color: particle.color,
              fontSize: particle.size,
              zIndex: 5,
            }}
          >
            {particle.icon}
          </motion.div>
        ))}
    


        <div className="tech-animation-container">
            <h1 className="welcome-text-3d">
                <span className="welcome-span welcome-scan">WELCOME</span>
            </h1>
            <p className="sub-text-3d">TO ARSHIYA'S TECH PORTFOLIO</p>
            <pre className="data-stream-console">{dataStream}</pre>
            <div className="scanline-bar"></div>
        </div>
    </div>
  );
};

export default WelcomeOverlay;