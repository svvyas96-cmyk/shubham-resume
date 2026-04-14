import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      category: "Featured Contribution",
      title: "Automation Framework Development",
      subtitle: "Selenium + Java + TestNG + Cucumber",
      description:
        "Built and maintained a scalable web automation framework for business-critical workflows. Improved reusability, maintainability, and execution speed by creating reusable components and structured test architecture.",
      impact: [
        "Reduced manual regression effort by 40%",
        "Improved test execution efficiency through reusable utilities",
        "Strengthened regression coverage for critical application flows",
      ],
      responsibilities: [
        "Designed framework structure using Selenium, Java, TestNG, and Cucumber",
        "Created reusable page-level methods and automation utilities",
        "Executed functional, regression, and integration testing",
      ],
      tools: ["Selenium", "Java", "TestNG", "Cucumber", "Maven", "JIRA"],
    },
    {
      category: "API Automation",
      title: "Backend API Validation Suite",
      subtitle: "Rest Assured + Postman",
      description:
        "Developed API automation coverage for backend services to validate request-response behavior, improve service reliability, and strengthen end-to-end quality assurance.",
      impact: [
        "Improved API reliability and validation coverage",
        "Reduced manual backend verification effort",
        "Supported faster defect detection in service-layer testing",
      ],
      responsibilities: [
        "Automated request and response validation flows",
        "Performed status code, payload, and response checks",
        "Supported integration testing for backend workflows",
      ],
      tools: ["Rest Assured", "Postman", "Java", "API Testing"],
    },
    {
      category: "CI/CD Integration",
      title: "Continuous Testing Pipeline Enablement",
      subtitle: "Jenkins + Automation Suite",
      description:
        "Integrated automated test execution into Jenkins pipelines to support continuous testing and faster feedback during Agile delivery cycles.",
      impact: [
        "Enabled continuous testing in CI/CD pipeline",
        "Improved feedback speed for releases",
        "Increased confidence in build quality before deployment",
      ],
      responsibilities: [
        "Connected automation suites with Jenkins jobs",
        "Supported repeated execution for release validation",
        "Collaborated with teams to improve release readiness",
      ],
      tools: ["Jenkins", "CI/CD", "Automation", "Agile"],
    },
    {
      category: "Quality Engineering",
      title: "End-to-End QA and Defect Management",
      subtitle: "Manual + Automation + Agile QA",
      description:
        "Worked across manual testing, automation support, defect reporting, and cross-functional collaboration to improve software quality and reduce production issues.",
      impact: [
        "Helped reduce production defects through early issue detection",
        "Improved product quality across web and API modules",
        "Supported stable delivery in Agile environment",
      ],
      responsibilities: [
        "Performed functional, regression, integration, and API testing",
        "Logged and tracked defects using JIRA",
        "Collaborated with developers, testers, and stakeholders in Scrum teams",
      ],
      tools: ["JIRA", "Manual Testing", "Regression Testing", "Agile", "Web QA"],
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="projects-tag">Work Highlights</p>
        <h2>Projects & QA Contributions</h2>
        <p className="projects-intro">
          Here are some of the major QA automation and quality engineering
          contributions I have worked on across web, API, and CI/CD testing.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-top">
              <span className="project-category">{project.category}</span>
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-block">
              <h4>Impact</h4>
              <ul>
                {project.impact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <h4>Key Responsibilities</h4>
              <ul>
                {project.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <h4>Tools Used</h4>
              <div className="project-tools">
                {project.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}