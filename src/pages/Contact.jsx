import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
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
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_vj6mu5f",
        "template_twinyf9",
        form.current,
        "4CQnA_M3xn3U1hrYm"
      );

      setIsSuccess(true);
      setStatusMessage("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSuccess(false);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          <form ref={form} onSubmit={sendEmail}>
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

            <button type="submit" disabled={loading}>
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                className={`form-status ${
                  isSuccess ? "success-message" : "error-message"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}