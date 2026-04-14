import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaUserClock,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <p className="contact-tag">Get In Touch</p>
        <h2>Let’s Work Together</h2>
        <p className="contact-intro">
          I’m open to QA Automation / SDET opportunities. Feel free to reach
          out for interviews, collaborations, or freelance work.
        </p>

        <div className="open-badge">🟢 Open to Work</div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-top">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
            </div>
            <p>vyass4800@gmail.com</p>
            <a href="mailto:vyass4800@gmail.com">
              <FaPaperPlane /> Send Email
            </a>
          </div>

          <div className="info-card">
            <div className="info-top">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
            </div>
            <p>+91 8269577272</p>
            <a
              href="https://wa.me/918269577272"
              target="_blank"
              rel="noreferrer"
            >
              <FaCommentDots /> Chat on WhatsApp
            </a>
          </div>

          <div className="info-card">
            <div className="info-top">
              <div className="icon-box">
                <FaLinkedinIn />
              </div>
              <h3>LinkedIn</h3>
            </div>
            <p>Connect professionally with me</p>
            <a
              href="https://www.linkedin.com/in/shubham-vyas96"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn /> View Profile
            </a>
          </div>

          <div className="info-card highlight">
            <div className="info-top">
              <div className="icon-box">
                <FaUserClock />
              </div>
              <h3>Availability</h3>
            </div>
            <p>Available for interviews and immediate joining</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>
            <FaPaperPlane className="form-title-icon" />
            Send Message
          </h3>

          <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />

  <div className="input-group">
    <FaUser className="input-icon" />
    <input type="text" name="name" placeholder="Your Name" required />
  </div>

  <div className="input-group">
    <FaEnvelope className="input-icon" />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />
  </div>

  <div className="input-group textarea-group">
    <FaCommentDots className="input-icon textarea-icon" />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      required
    ></textarea>
  </div>

  <button type="submit">
    <FaPaperPlane />
    Send Message
  </button>
</form>
        </div>
      </div>
    </section>
  );
}