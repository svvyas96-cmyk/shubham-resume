import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <p className="contact-tag">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I’m open to QA Automation opportunities, freelance work, or
          collaborations. Feel free to reach out!
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">

        {/* LEFT - INFO */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>vyass4800@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 8269577272</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Bengaluru, India</p>
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
        </div>

        {/* RIGHT - FORM */}
        <div className="contact-form">
          <h3>Send Message</h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
>
  {/* hidden input required */}
  <input type="hidden" name="form-name" value="contact" />

  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required />

  <button type="submit">Send Message</button>
</form>
        </div>

      </div>

    </section>
  );
}