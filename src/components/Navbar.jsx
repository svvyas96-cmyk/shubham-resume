import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaBriefcase
} from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About Me", icon: <FaUser /> },
    { to: "/experience", label: "Experience", icon: <FaBriefcase /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
       <Link to="/" className="navbar-brand" aria-label="Go to home" title="Shubham Vyas">
  <span className="navbar-brand-mark">SV</span>
  <span className="navbar-brand-text">
    <strong>Shubham</strong>
    <small>QA</small>
  </span>
</Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}

          <a
            href="/Shubham_Vyas_(QA_Test_Engineer_AT)_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-link nav-resume-btn"
            onClick={closeMenu}
          >
            <span className="nav-icon">
              <FaFileAlt />
            </span>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}