import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import {FaLinkedinIn,FaFileAlt, FaEnvelope ,FaGithub,  FaArrowUp, FaMoon, FaSun } from "react-icons/fa";


import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="app">
       <Navbar />
      <header className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="profile-frame">
              <img src="/profile.jpg" alt="Shubham Vyas" />
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-top">
              <p className="hero-tag">QA Automation Portfolio</p>

              <div className="open-to-work">
                <span className="status-dot"></span>
                <span>Open to QA Automation / SDET Opportunities</span>
              </div>
            </div>

            <h1>Shubham Vyas</h1>

            <h2>
              QA Automation Engineer specializing in Selenium, API Testing &
              CI/CD
            </h2>

            <p className="hero-description">
              QA Automation Engineer with 4+ years of experience in building
              scalable automation frameworks, improving regression efficiency,
              validating APIs, and ensuring high-quality software delivery in
              Agile environments.
            </p>

            <p className="hero-proof">
              4+ years experience • Selenium • API Testing • CI/CD • Agile QA
              Delivery
            </p>

            <div className="hero-buttons">
              <a
                href="/Shubham_Vyas_(QA_Test_Engineer_AT)_RESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaFileAlt className="btn-icon" />
                <span>View Resume</span>
              </a>

              <Link to="/contact" className="btn btn-secondary">
                <FaEnvelope className="btn-icon" />
                <span>Contact Me</span>
              </Link>

              <button
                type="button"
                className="btn btn-secondary theme-toggle-btn"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <FaSun className="btn-icon" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <FaMoon className="btn-icon" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <span>Experience</span>
              <strong>4+ Years</strong>
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

      <footer className="footer premium-footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h3>Shubham Vyas</h3>
          <p>QA Automation Engineer</p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
       <a href="mailto:vyass4800@gmail.com?subject=QA Opportunity&body=Hi Shubham,">
  <FaEnvelope /> Email
</a>

          <a
            href="https://www.linkedin.com/in/shubham-vyas96"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn /> LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* RIGHT */}
        <div className="footer-extra">
          <p>© 2026</p>
          <button
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
    </div>
  );
}