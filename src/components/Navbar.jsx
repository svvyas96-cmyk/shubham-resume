import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt
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
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">SV</div>

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