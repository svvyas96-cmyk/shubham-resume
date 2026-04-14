import React from "react";
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Automation Testing",
      skills: ["Selenium WebDriver", "TestNG", "Java", "Maven", "POM Framework"],
    },
    {
      title: "Manual Testing",
      skills: ["Test Case Design", "Test Execution", "Bug Reporting", "Regression Testing", "Smoke Testing"],
    },
    {
      title: "API Testing",
      skills: ["Postman", "REST API Testing", "Request Validation", "Response Validation", "Status Code Checks"],
    },
    {
      title: "Bug Tracking & Tools",
      skills: ["JIRA", "Git", "GitHub", "VS Code", "Chrome DevTools"],
    },
    {
      title: "QA Process",
      skills: ["STLC", "SDLC", "Agile", "Defect Life Cycle", "Requirement Analysis"],
    },
    {
      title: "Database / Other",
      skills: ["SQL Basics", "Data Validation", "Cross Browser Testing", "UI Testing", "Functional Testing"],
    },
  ];

  return (
    <section className="skills-page">
      <div className="skills-header">
        <p className="skills-tag">My Expertise</p>
        <h2>Skills & Tools</h2>
        <p className="skills-intro">
          I work across manual testing, automation, API validation, and defect
          management to deliver stable and high-quality software.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}