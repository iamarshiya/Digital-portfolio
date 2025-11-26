// src/components/WelcomeOverlay.js (UPDATED with Framer Motion)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // <-- NEW IMPORT
import "./WelcomeOverlay.css";

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
  

  // Typing effect (Logic remains the same)
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

  // Framer Motion Variants for the flying objects
  const flyingObjectVariants = {
    initial: (i) => ({ 
      x: i % 2 === 0 ? '-100vw' : '100vw', // Start far left or right
      y: (Math.random() - 0.5) * 500, // Random vertical start position
      rotate: i * 30, // Initial rotation
      opacity: 0 
    }),
    animate: (i) => ({
      x: i % 2 === 0 ? '-100px' : '100px', // End closer to center
      y: (Math.random() - 0.5) * 50, // Final slight vertical shift
      rotate: [i * 30, i * 30 + 360], // Spin and rotate
      opacity: [0, 0.5, 0.5, 0], // Fade in, hold, and fade out
      transition: {
        duration: 5,
        ease: "easeInOut",
        delay: 0.5 + i * 0.3, // Staggered entry
        times: [0, 0.3, 0.9, 1] // Keyframes for opacity
      }
    })
  };


  return (
    <div className={`welcome-overlay ${show ? 'visible' : 'hidden'}`}>
        
        {/* NEW: Framer Motion Animated Tech Objects */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`tech-particle particle-${i + 1}`}
            custom={i}
            variants={flyingObjectVariants}
            initial="initial"
            animate="animate"
            style={{ 
              width: `${20 + i * 5}px`, 
              height: `${20 + i * 5}px`,
              top: `${10 + i * 15}%`,
              right: i % 2 === 0 ? '' : 'auto', 
              left: i % 2 !== 0 ? '' : 'auto'
            }}
          />
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