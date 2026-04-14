import React from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

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

            <div className="open-to-work">
              🟢 Open to QA Automation / SDET Opportunities
            </div>

            <h1>Shubham Vyas</h1>
            <h2>
              QA Automation Engineer specializing in Selenium, API Testing &
              CI/CD
            </h2>

            <p className="hero-description">
              QA Automation Engineer with 5+ years of experience in building
              scalable automation frameworks, improving regression efficiency,
              validating APIs, and ensuring high-quality software delivery in
              Agile environments.
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

      <Navbar />

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