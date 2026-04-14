import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <p className="contact-tag">Get In Touch</p>
        <h2>Let’s Work Together</h2>
        <p className="contact-intro">
          I’m open to QA Automation / SDET opportunities. Feel free to reach out for interviews, collaborations, or freelance work.
        </p>

        {/* 🔥 Open to work badge */}
        <div className="open-badge">
          🟢 Open to Work
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-card">
            <h3>Email</h3>
            <p>vyass4800@gmail.com</p>
            <a href="mailto:vyass4800@gmail.com">Send Email</a>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 8269577272</p>
            <a
              href="https://wa.me/918269577272"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="info-card">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/shubham-vyas96"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>

          <div className="info-card highlight">
            <h3>Availability</h3>
            <p>Available for interviews and immediate joining</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h3>Send Message</h3>

          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}