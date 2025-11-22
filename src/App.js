import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
//import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import "./App.css";


// 2. Keep  the placeholder pages here
//const Portfolio = () => <div className="page-content"><h1>Portfolio</h1><p>My portfolio will go here.</p></div>;
//const Blog = () => <div className="page-content"><h1>Blog</h1><p>My blog will go here.</p></div>;
//const Contact = () => <div className="page-content"><h1>Contact</h1><p>My contact info will go here.</p></div>;


// New: Navbar component keeps <li> button effect and navigates programmatically
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Projects", path: "/projects" },
  //  { label: "Portfolio", path: "/Portfolio" },
   // { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const handleKeyDown = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Arshiya<span className="dot">.</span>
      </div>
      <ul className="nav-links">
        {navItems.map(item => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
            role="button"
            tabIndex={0}
            onClick={() => navigate(item.path)}
            onKeyDown={(e) => handleKeyDown(e, item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    // 4. Wrap everything in <Router>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
       {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;