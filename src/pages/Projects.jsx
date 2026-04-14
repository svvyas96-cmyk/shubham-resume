import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Web Automation Framework",
      subtitle: "Selenium + Java + TestNG + Cucumber",
      description:
        "Built and maintained a scalable automation framework for web application testing. Developed reusable test scripts, utilities, and page-level components to improve execution speed, maintainability, and test coverage.",
      highlights: [
        "Built framework from scratch",
        "Reduced manual regression effort by 40%",
        "Created reusable automation components",
        "Covered functional, regression, and integration flows",
      ],
      tools: ["Selenium", "Java", "TestNG", "Cucumber", "Maven", "JIRA"],
    },
    {
      title: "API Test Automation Suite",
      subtitle: "Rest Assured + Postman",
      description:
        "Designed and executed API automation for backend validation. Validated request and response flows, improved reliability, and strengthened coverage for critical services.",
      highlights: [
        "Automated backend API validations",
        "Improved API reliability and coverage",
        "Performed request-response validation",
        "Supported end-to-end quality assurance",
      ],
      tools: ["Rest Assured", "Postman", "Java", "API Testing"],
    },
    {
      title: "CI/CD Test Integration",
      subtitle: "Jenkins Pipeline Integration",
      description:
        "Integrated automated test suites into Jenkins pipelines for continuous testing. Helped deliver faster feedback to the team and improved release confidence in Agile development cycles.",
      highlights: [
        "Integrated automation into CI/CD pipelines",
        "Enabled continuous testing",
        "Improved release feedback cycles",
        "Supported Agile delivery model",
      ],
      tools: ["Jenkins", "CI/CD", "Automation Suite", "Agile"],
    },
    {
      title: "End-to-End QA Validation",
      subtitle: "Manual + Automation + Defect Lifecycle",
      description:
        "Worked across web testing, regression testing, integration testing, and defect reporting. Collaborated with cross-functional teams to identify issues early and reduce production defects.",
      highlights: [
        "Performed functional and regression testing",
        "Tracked defects in JIRA",
        "Worked in Agile scrum teams",
        "Improved overall product quality",
      ],
      tools: ["JIRA", "Manual Testing", "Regression Testing", "Agile", "Web QA"],
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="projects-tag">My Work</p>
        <h2>Projects & QA Contributions</h2>
        <p className="projects-intro">
          Here are some of the key QA automation and testing contributions I
          have worked on across web, API, and CI/CD environments.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <p className="project-subtitle">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-section">
              <h4>Highlights</h4>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h4>Tools Used</h4>
              <div className="project-tools">
                {project.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}