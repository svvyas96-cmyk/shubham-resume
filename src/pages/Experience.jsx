import React from "react";
import "./Experience.css";
import { FaBriefcase, FaMapMarkerAlt, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const company = {
    name: "Capgemini",
    type: "Full-time",
    totalDuration: "4 yrs 8 mos",
    location: "Bengaluru, Karnataka, India",
  };

  const roles = [
    {
      title: "Consultant",
      period: "Apr 2026 – Present",
      duration: "1 mo",
      mode: "Hybrid",
      promoted: true,
      skills: [
        "Selenium WebDriver",
        "TestNG",
        "API Testing",
        "Jenkins",
        "Playwright",
      ],
    },
    {
      title: "Associate Consultant",
      period: "Apr 2024 – Mar 2026",
      duration: "2 yrs",
      mode: "Hybrid",
      promoted: true,
      skills: ["Selenium WebDriver", "TestNG", "API Testing", "Jenkins"],
    },
    {
      title: "Senior Analyst",
      period: "Apr 2023 – Apr 2024",
      duration: "1 yr 1 mo",
      mode: "Hybrid",
      promoted: false,
      skills: ["Selenium", "Automation", "Regression", "JIRA"],
    },
    {
      title: "Software Analyst",
      period: "Sep 2021 – Mar 2023",
      duration: "1 yr 7 mos",
      mode: "Hybrid",
      promoted: false,
      skills: ["TestNG", "Selenium Testing", "Manual Testing"],
    },
  ];

  return (
    <section className="experience-page">
      <div className="experience-header">
        <p className="experience-tag">Career Journey</p>
        <h2>Experience Timeline</h2>
        <p className="experience-intro">
          My professional journey in QA Automation, showing role progression,
          promotions, and key technology exposure across my experience at
          Capgemini.
        </p>
      </div>

      <div className="company-card">
        <div className="company-logo">
          <FaBriefcase />
        </div>

        <div className="company-info">
          <h3>{company.name}</h3>
          <p>
            {company.type} • {company.totalDuration}
          </p>
          <span>
            <FaMapMarkerAlt /> {company.location}
          </span>
        </div>
      </div>

      <div className="timeline">
        {roles.map((role, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`timeline-marker ${role.promoted ? "promoted" : ""}`}
            >
              <span className="dot"></span>
              {index !== roles.length - 1 && <span className="line"></span>}
            </div>

            <div
              className={`timeline-content ${
                role.promoted ? "promoted" : ""
              }`}
            >
              <h4>
                {role.title}
                {role.promoted && (
                  <span className="promotion-badge">Promoted</span>
                )}
              </h4>

              <p className="timeline-period">
                {role.period} • {role.duration}
              </p>

              <p className="timeline-mode">{role.mode}</p>

              <div className="timeline-skills">
                {role.skills.map((skill, i) => (
                  <span key={i}>
                    <FaLaptopCode />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}