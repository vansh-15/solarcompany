import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    pincode: "",
    whatsapp: "",
    monthlyBill: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gsUrl = "https://script.google.com/macros/s/AKfycbxIIIIadsnqQYG86kt7T3qAM5ymBbJkZXiioQ-3GXD3WDAPIB9wc0ydgI_4hSH9g5wd/exec"; // replace with your Google Apps Script URL

    // If running locally, show alert (cannot submit due to CORS)
    if (window.location.hostname === "localhost") {
      alert(
        "Form submissions only work after deployment due to Google Apps Script CORS restrictions."
      );
      return;
    }

    try {
      const response = await fetch(gsUrl, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.result === "success") {
        alert("Form submitted successfully!");
        setForm({
          fullname: "",
          email: "",
          pincode: "",
          whatsapp: "",
          monthlyBill: "",
          message: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Submission failed: " + err.message);
    }
  };

  return (
    <div className="page-container">
      <section
        className="contact-hero"
        style={{
          background: `linear-gradient(rgba(30,58,138,0.6), rgba(30,58,138,0.6)), url(${process.env.PUBLIC_URL}/images/solarimage1.webp) center/cover no-repeat`,
        }}
      >
        <div className="overlay">
          <h1>Contact Sunmarse Solar</h1>
          <p>We’re here to help you go solar — quickly and confidently.</p>
        </div>
      </section>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="fullname" value={form.fullname} onChange={handleChange} required />

          <label>Email (optional)</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />

          <div className="form-row">
            <div>
              <label>Pincode</label>
              <input type="text" name="pincode" value={form.pincode} onChange={handleChange} required maxLength={6} />
            </div>
            <div>
              <label>WhatsApp</label>
              <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} required />
            </div>
            <div>
              <label>Monthly Electricity Bill (₹)</label>
              <input type="number" name="monthlyBill" value={form.monthlyBill} onChange={handleChange} min="0" step="100" required />
            </div>
          </div>

          <label>Your Message (optional)</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>

        <aside className="contact-aside">
          <div className="wa-box">
            <h3>Prefer WhatsApp?</h3>
            <p>Chat with us for quick responses, 10:00–18:00 (Mon–Sat).</p>
            <a className="btn-primary" href="https://wa.me/918765257286" target="_blank" rel="noreferrer">
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

      <a className="fabwhatsapp" href="https://wa.me/918765257286" target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/whatslogo.png`} alt="WhatsApp" style={{ width: "25px", height: "25px" }} />
      </a>
    </div>
  );
}

export default Contact;
