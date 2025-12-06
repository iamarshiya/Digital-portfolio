import React, { useState, useEffect, useCallback } from "react";
import { Home as HomeIcon, User, FolderGit, Mail, Zap } from 'lucide-react';

// --- Import Global Styles ---
import './App.css';

// --- IMPORT SEPARATED PAGE COMPONENTS ---
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact"; 
import Skills from "./pages/Skills"; // <-- NEW IMPORT
import WelcomeOverlay from "./WelcomeOverlay"; 
// ------------------------------------


// --- 2. Navbar Component (State-based Navigation) ---
const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { label: "Home", page: "home", Icon: HomeIcon },
    { label: "About", page: "about", Icon: User },
    { label: "Skills", page: "skills", Icon: Zap }, // <-- NEW NAV ITEM
    { label: "Projects", page: "projects", Icon: FolderGit },
    { label: "Contact", page: "contact", Icon: Mail },
  ];

  const handleKeyDown = (e, page) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setCurrentPage(page);
    }
  };

  return (
    <div className="navbar-container-fixed">
      <div className="navbar-content-wrapper">
          <div className="logo">
            Arshiya<span className="dot">.</span>
          </div>
          <nav className="navbar border-glow frosted-nav">
            <ul className="nav-links">
              {navItems.map(item => (
                <li
                  key={item.page}
                  className={item.page === currentPage ? "active" : ""}
                  role="button"
                  tabIndex={0}
                  onClick={() => setCurrentPage(item.page)}
                  onKeyDown={(e) => handleKeyDown(e, item.page)}
                >
                  <item.Icon size={16} className="inline-block mr-1" />
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
      </div>
    </div>
  );
}


// --- 3. Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true); 

  const handleWelcomeEnd = useCallback(() => {
    setShowWelcome(false);
  }, []);

  const renderPage = useCallback(() => {
    switch (currentPage) {
     case "about":
        return <About setCurrentPage={setCurrentPage} />;
     case "skills": // <-- NEW CASE FOR SKILLS
        return <Skills />;
      case "projects":
        return <Projects />; 
      case "contact":
        return <Contact />; 
      case "home":
      default:
        return <Home setCurrentPage={setCurrentPage} />; 
    }
  }, [currentPage]);

  return (
    <>
      {showWelcome && <WelcomeOverlay onAnimationEnd={handleWelcomeEnd} />}
      
      <div className="main-app-container" style={{ visibility: showWelcome ? 'hidden' : 'visible' }}>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="page-transition">
            {renderPage()}
          </div>
      </div>
    </>
  );
}