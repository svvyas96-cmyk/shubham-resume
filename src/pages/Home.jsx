import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
  <div className="deliver-section">
  <div className="deliver-header">
    <h3>What I Deliver</h3>
    <p className="deliver-subtext">
      Practical QA outcomes that improve release confidence, coverage, and speed.
    </p>
  </div>

  <div className="deliver-grid">
    <div className="deliver-card">
      <span className="deliver-badge">Automation</span>
      <p>Reduced regression effort by 40% through automation</p>
    </div>

    <div className="deliver-card">
      <span className="deliver-badge">Framework</span>
      <p>Built scalable Selenium automation framework from scratch</p>
    </div>

    <div className="deliver-card">
      <span className="deliver-badge">API</span>
      <p>Automated API validation using Rest Assured and Postman</p>
    </div>

    <div className="deliver-card">
      <span className="deliver-badge">CI/CD</span>
      <p>Integrated automation suites with Jenkins CI/CD pipelines</p>
    </div>

    <div className="deliver-card">
      <span className="deliver-badge">Quality</span>
      <p>Improved test coverage and helped reduce production defects</p>
    </div>

    <div className="deliver-card">
      <span className="deliver-badge">Impact</span>
      <p>Ready to deliver immediate impact with scalable automation and faster release cycles</p>
    </div>
  </div>
</div>

      <div className="home-section">
        <h2>About Me</h2>
        <p>
          I am a QA Automation Engineer with 4+ years of experience in manual
          and automation testing for web and API applications. I specialize in
          building scalable automation frameworks, validating backend services,
          and improving software quality through reliable test practices.
        </p>
      </div>

      <div className="home-section">
        <h2>Key Highlights</h2>
        <div className="highlights">
          <div className="highlight-card">
            <h3>4+ Years</h3>
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

   <div className="home-section center cta-section premium-cta">
  <div className="cta-glow cta-glow-left"></div>
  <div className="cta-glow cta-glow-right"></div>

  <div className="premium-cta-inner">
    <p className="cta-tag">Available for Opportunities</p>

    <h2>Open to QA Automation Opportunities</h2>

    <p className="cta-text">
      I help teams improve product quality through Selenium automation, API
      validation, regression optimization, and reliable QA processes.
    </p>

    <div className="cta-points">
      <span>4+ Years Experience</span>
      <span>Selenium & API Testing</span>
      <span>Short Notice Joiner</span>
    </div>

    <Link to="/contact" className="cta-btn premium-cta-btn">
      <span className="cta-btn-dot"></span>
      <span>Contact Me</span>
    </Link>
  </div>
</div>
    </section>
  );
}