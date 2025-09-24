import React from "react";

function About() {
  return (
    <div className="page-container">
      <section className="about-hero" style={{ background: `linear-gradient(rgba(30,58,138,0.6), rgba(30,58,138,0.6)), url(${process.env.PUBLIC_URL}/images/solarimage1.jpg) center/cover no-repeat` }}>
        <div className="overlay">
          <h1>About VK Solar</h1>
          <p>Trusted solar installers delivering clean energy for over a decade.</p>
        </div>
      </section>

      <section className="about-overview">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              SolarPower has been delivering high-quality solar solutions for over 10 years.
              We are committed to sustainability, reliability, and affordable energy for all.
            </p>
            <p>
              Our certified teams handle everything end-to-end — assessment, design,
              permitting, installation, and maintenance — so you can focus on enjoying
              lower bills and a smaller carbon footprint.
            </p>
            <a href="/contact" className="btn-primary">Speak with a Solar Specialist</a>
          </div>
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/images/happyteam.jpg`} alt="Our team installing solar panels" />
          </div>
        </div>
      </section>

      <section className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            Empower homes and businesses with clean, dependable solar energy.
            We design, install, and maintain systems that reduce carbon footprints
            and deliver measurable savings from day one.
          </p>
        </div>
        <div className="about-card">
          <h3>Certifications</h3>
          <ul>
            <li>NABCEP Certified PV Installation Professionals</li>
            <li>Licensed & Insured Electrical Contractors</li>
            <li>Tier-1 Module & Inverter Partnerships</li>
            <li>OSHA Safety Compliant Crews</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Core Values</h3>
          <ul>
            <li>Integrity — Transparent pricing, honest recommendations</li>
            <li>Quality — Premium gear, meticulous installs</li>
            <li>Service — Dedicated support, long-term maintenance</li>
          </ul>
        </div>
      </section>

      <section className="partners-strip">
        <div className="partners-inner">
          <span>In collaboration with</span>
          <div className="partners-logos">
            <img src={`${process.env.PUBLIC_URL}/images/pmsuryaghar.jpg`} alt="PM Suryaghar Partner" />
          </div>
        </div>
      </section>
      <section className="about-journey">
        <h2>Our Journey</h2>
        <div className="features-grid" style={{alignItems:"stretch"}}>
          <div className="feature-card" style={{textAlign:"left"}}>
            <h3>2022</h3>
            <p>VK Solar founded with a mission to make solar accessible to each and every home and business.</p>
          </div>
          <div className="feature-card" style={{textAlign:"left"}}>
            <h3>2023</h3>
            <p>Expanded commercial installations and added maintenance teams.</p>
          </div>
          <div className="feature-card" style={{textAlign:"left"}}>
            <h3>2025</h3>
            <p>500th install completed and new smart monitoring offering launched.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={`${process.env.PUBLIC_URL}/images/solarowner.jpg`} alt="Company Owner" />
            <h4>Himanshu Shukla</h4>
            <p>Company Owner</p>
          </div>
          <div className="team-card">
            <img src={`${process.env.PUBLIC_URL}/images/solarmanager.jpg`} alt="Manager" />
            <h4>Sonu Shukla</h4>
            <p>Manager</p>
          </div>
          <div className="team-card">
            <img src={`${process.env.PUBLIC_URL}/images/TechnicalLeader.jpg`} alt="Technical Leader" />
            <h4>Vansh Mishra</h4>
            <p>Tech Team Leader</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
