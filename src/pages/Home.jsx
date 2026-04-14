import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">

      {/* SECTION 1 - About Preview */}
      <div className="home-section">
        <h2>About Me</h2>
        <p>
          I am a QA Automation Engineer with 5+ years of experience ensuring
          software quality through manual and automation testing. I specialize
          in building reliable test frameworks, API validation, and improving
          product stability.
        </p>
      </div>

      {/* SECTION 2 - Key Highlights */}
      <div className="home-section">
        <h2>Key Highlights</h2>
        <div className="highlights">
          <div className="highlight-card">
            <h3>5+ Years</h3>
            <p>Experience in QA</p>
          </div>

          <div className="highlight-card">
            <h3>Automation</h3>
            <p>Selenium + Java</p>
          </div>

          <div className="highlight-card">
            <h3>API Testing</h3>
            <p>Postman / REST</p>
          </div>

          <div className="highlight-card">
            <h3>Bug Tracking</h3>
            <p>JIRA</p>
          </div>
        </div>
      </div>

      {/* SECTION 3 - Featured Skills */}
      <div className="home-section">
        <h2>Core Skills</h2>
        <div className="skills">
          <span>Selenium</span>
          <span>Java</span>
          <span>TestNG</span>
          <span>Postman</span>
          <span>API Testing</span>
          <span>Manual Testing</span>
          <span>JIRA</span>
        </div>
      </div>

      {/* SECTION 4 - CTA */}
      <div className="home-section center">
        <h2>Want to work together?</h2>
        <p>I’m open to QA Automation and testing opportunities.</p>
        <a href="/contact" className="cta-btn">Contact Me</a>
      </div>

    </section>
  );
}