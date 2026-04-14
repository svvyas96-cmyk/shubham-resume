import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="impact-section">
        <h2>What I Deliver</h2>

        <div className="impact-list">
          <div className="impact-item">
            ✔ Reduced regression effort by 40% through automation
          </div>

          <div className="impact-item">
            ✔ Built scalable Selenium automation framework from scratch
          </div>

          <div className="impact-item">
            ✔ Automated API validation using Rest Assured and Postman
          </div>

          <div className="impact-item">
            ✔ Integrated automation suites with Jenkins CI/CD pipelines
          </div>

          <div className="impact-item">
            ✔ Improved test coverage and helped reduce production defects
          </div>
        </div>
      </div>

      <div className="home-section">
        <h2>About Me</h2>
        <p>
          I am a QA Automation Engineer with 5+ years of experience in manual
          and automation testing for web and API applications. I specialize in
          building scalable automation frameworks, validating backend services,
          and improving software quality through reliable test practices.
        </p>
      </div>

      <div className="home-section">
        <h2>Key Highlights</h2>
        <div className="highlights">
          <div className="highlight-card">
            <h3>5+ Years</h3>
            <p>QA and automation experience</p>
          </div>

          <div className="highlight-card">
            <h3>Automation</h3>
            <p>Selenium, Java, TestNG, Cucumber</p>
          </div>

          <div className="highlight-card">
            <h3>API Testing</h3>
            <p>Rest Assured, Postman, backend validation</p>
          </div>

          <div className="highlight-card">
            <h3>CI/CD & Tools</h3>
            <p>Jenkins, JIRA, Maven, Agile workflow</p>
          </div>
        </div>
      </div>

      <div className="home-section">
        <h2>Core Skills</h2>
        <div className="skills">
          <span>Selenium</span>
          <span>Java</span>
          <span>TestNG</span>
          <span>Cucumber</span>
          <span>Rest Assured</span>
          <span>Postman</span>
          <span>API Testing</span>
          <span>Manual Testing</span>
          <span>JIRA</span>
          <span>Jenkins</span>
          <span>Maven</span>
          <span>Agile</span>
        </div>
      </div>

      <div className="home-section center">
        <h2>Open to QA Automation Opportunities</h2>
        <p>
          I’m available for QA Automation, API Testing, and software testing
          roles.
        </p>
      <Link to="/contact" className="cta-btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
}