import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/skills" className="nav-link" onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>

          <a
            href="/Shubham_Vyas_(QA_Test_Engineer_AT)_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}