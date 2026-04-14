import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      
      {/* HEADER */}
      <div className="about-header">
        <p className="about-tag">About Me</p>
        <h2>QA Automation Engineer</h2>
        <p className="about-intro">
          I am a QA Automation Engineer with 5+ years of experience in ensuring
          high-quality software delivery through automation, API testing, and
          manual validation.
        </p>
      </div>

      {/* ABOUT DETAILS */}
      <div className="about-grid">
        <div className="about-card">
          <h3>Professional Summary</h3>
          <p>
            Experienced in designing and implementing automation frameworks for
            web and API applications. Skilled in Selenium, TestNG, Cucumber,
            and Rest Assured. I focus on improving test coverage, reducing
            regression effort, and ensuring reliable product delivery in Agile
            environments.
          </p>
        </div>

        <div className="about-card">
          <h3>Experience Highlights</h3>
          <ul>
            <li>4+ years in QA Automation and Testing</li>
            <li>Reduced regression effort by 40% using automation</li>
            <li>Built scalable Selenium automation frameworks</li>
            <li>Integrated automation with Jenkins CI/CD pipelines</li>
            <li>Worked in Agile (Scrum) teams</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <ul>
            <li>MCA – MITS Gwalior (8.13 CGPA)</li>
            <li>BCA – Jiwaji University</li>
            <li>HSC & SSC – School of Excellence</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Certifications</h3>
          <ul>
            <li>ISTQB Certified Tester</li>
            <li>Appium Mobile Testing</li>
            <li>Tosca Automation Specialist Level 1</li>
            <li>Agile Software Development</li>
          </ul>
        </div>
      </div>

      {/* STRENGTHS */}
      <div className="about-section">
        <h3>Strengths</h3>
        <div className="strengths">
          <span>Problem Solving</span>
          <span>Analytical Thinking</span>
          <span>Team Collaboration</span>
          <span>Attention to Detail</span>
          <span>Quick Learner</span>
        </div>
      </div>

    </section>
  );
}