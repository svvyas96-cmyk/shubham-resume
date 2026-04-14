import React from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="profile-frame">
              <img src="/profile.jpg" alt="Shubham Vyas" />
            </div>
          </div>

          <div className="hero-center">
            <p className="hero-tag">QA Automation Portfolio</p>
            <h1>Shubham Vyas</h1>
            <h2>QA Automation Engineer specializing in Selenium, API Testing & CI/CD (5+ Years)</h2>
            <p className="hero-description">
              I build reliable test solutions with a strong focus on product
              quality, UI validation, API testing, automation frameworks, and
              defect prevention.
            </p>

            <div className="hero-buttons">
              <a
                href="/Shubham_Vyas_(QA_Test_Engineer_AT)_RESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <span>Experience</span>
              <strong>5+ Years</strong>
            </div>

            <div className="hero-card">
              <span>Specialization</span>
              <strong>Manual + Automation</strong>
            </div>

            <div className="hero-card">
              <span>Core Stack</span>
              <strong>Selenium, Java, API Testing</strong>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Shubham Vyas | QA Automation Engineer</p>
      </footer>
    </div>
  );
}