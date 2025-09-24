import React from "react";

function Contact() {
  return (
    <div className="page-container">
      <section
        className="contact-hero"
        style={{
          background: `linear-gradient(rgba(30,58,138,0.6), rgba(30,58,138,0.6)), url(${process.env.PUBLIC_URL}/images/solarimage1.jpg) center/cover no-repeat`,
        }}
      >
        <div className="overlay">
          <h1>Contact VK Solar</h1>
          <p>We’re here to help you go solar — quickly and confidently.</p>
        </div>
      </section>

      <div className="contact-grid">
        <form className="contact-form" style={{ textAlign: "left" }}>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" required />

          <label>Email (optional)</label>
          <input type="email" placeholder="Email (optional)" />
          <small className="field-hint">
            We’ll use this to send your quote and design (if provided).
          </small>

          <div className="form-row">
            <div>
              <label>Pincode</label>
              <input type="text" placeholder="Pincode" required maxLength={6} />
            </div>
            <div>
              <label>WhatsApp</label>
              <input type="tel" placeholder="WhatsApp Number" required />
              <small className="field-hint">
                We’ll reach out on WhatsApp between 10:00–18:00.
              </small>
            </div>
            <div>
              <label>Monthly Electricity Bill (₹)</label>
              <input type="number" placeholder="e.g. 2500" min="0" step="100" required />
              <small className="field-hint">
                Helps us size your system and estimate savings.
              </small>
            </div>
          </div>

          <label>Your Message (optional)</label>
          <textarea
            placeholder="Tell us about your property or goals"
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <aside className="contact-aside">
          <div className="wa-box">
            <h3>Prefer WhatsApp?</h3>
            <p>Chat with us for quick responses, 10:00–18:00 (Mon–Sat).</p>
            <a
              className="btn-primary"
              href="https://wa.me/91800555XXXX"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="info-box">
            <h3>What to expect</h3>
            <ul>
              <li>Free site assessment and savings estimate</li>
              <li>No-obligation quote tailored to your usage</li>
              <li>Guidance on subsidies and financing</li>
            </ul>
          </div>
        </aside>
      </div>

      <a
        className="fabwhatsapp"
        href="https://wa.me/91800555XXXX"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/whatslogo.png`}
          alt="WhatsApp"
          style={{ width: "25px", height: "25px"}}
        />
      </a>
    </div>
  );
}

export default Contact;
