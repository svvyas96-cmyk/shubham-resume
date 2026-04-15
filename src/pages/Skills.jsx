import React from "react";
import "./Skills.css";
import {
  SiSelenium,
  SiPostman,
  SiJenkins,
  SiJira,
  SiMysql,
  SiGithub,
  SiChromewebstore,
  SiGit,
} from "react-icons/si";
import {
  FaJava,
  FaStudiovinari,
  FaLink,
  FaBug,
  FaCheckCircle,
  FaTools,
  FaTasks,
  FaDatabase,
  FaClipboardCheck,
  FaFlask,
  FaProjectDiagram,
  FaSyncAlt,
  FaSearch,
} from "react-icons/fa";


export default function Skills() {
    const skillGroups = [
  {
    title: "Automation Testing",
    items: [
      { label: "Selenium WebDriver", icon: <SiSelenium className="icon-selenium" /> },
      { label: "TestNG", icon: <FaClipboardCheck className="icon-testng" /> },
      { label: "Java", icon: <FaJava className="icon-java" /> },
      { label: "Maven", icon: <FaTools className="icon-maven" /> },
      { label: "POM Framework", icon: <FaProjectDiagram className="icon-framework" /> },
    ],
  },
  {
    title: "Manual Testing",
    items: [
      { label: "Test Case Design", icon: <FaClipboardCheck className="icon-manual" /> },
      { label: "Test Execution", icon: <FaTasks className="icon-manual" /> },
      { label: "Bug Reporting", icon: <FaBug className="icon-bug" /> },
      { label: "Regression Testing", icon: <FaSyncAlt className="icon-regression" /> },
      { label: "Smoke Testing", icon: <FaFlask className="icon-smoke" /> },
    ],
  },
  {
    title: "API Testing",
    items: [
      { label: "Postman", icon: <SiPostman className="icon-postman" /> },
      { label: "REST API Testing", icon: <FaLink className="icon-api" /> },
      { label: "Request Validation", icon: <FaSearch className="icon-api" /> },
      { label: "Response Validation", icon: <FaCheckCircle className="icon-api" /> },
      { label: "Status Code Checks", icon: <FaClipboardCheck className="icon-api" /> },
    ],
  },
  {
    title: "Bug Tracking & Tools",
    items: [
      { label: "JIRA", icon: <SiJira className="icon-jira" /> },
      { label: "Git", icon: <SiGit className="icon-git" /> },
      { label: "GitHub", icon: <SiGithub className="icon-github" /> },
      { label: "VS Code", icon: <FaStudiovinari className="icon-vscode" /> },
      { label: "Chrome DevTools", icon: <SiChromewebstore className="icon-chrome" /> },
    ],
  },
  {
    title: "QA Process",
    items: [
      { label: "STLC", icon: <FaProjectDiagram className="icon-process" /> },
      { label: "SDLC", icon: <FaProjectDiagram className="icon-process" /> },
      { label: "Agile", icon: <FaSyncAlt className="icon-agile" /> },
      { label: "Defect Life Cycle", icon: <FaBug className="icon-bug" /> },
      { label: "Requirement Analysis", icon: <FaSearch className="icon-process" /> },
    ],
  },
  {
    title: "Database / Other",
    items: [
      { label: "SQL Basics", icon: <SiMysql className="icon-db" /> },
      { label: "Data Validation", icon: <FaDatabase className="icon-db" /> },
      { label: "Cross Browser Testing", icon: <SiChromewebstore className="icon-chrome" /> },
      { label: "UI Testing", icon: <FaCheckCircle className="icon-ui" /> },
      { label: "Functional Testing", icon: <FaTasks className="icon-ui" /> },
    ],
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
        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.title}</h3>

            <div className="skill-list premium-skill-list">
              {group.items.map((item, i) => (
                <span key={i} className="skill-chip">
                  <span className="skill-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}