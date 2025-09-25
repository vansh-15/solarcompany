import React from "react";

function Services() {
  return (
    <div className="page-container">
      <section className="services-hero" style={{ background: `linear-gradient(rgba(30,58,138,0.6), rgba(30,58,138,0.6)), url(${process.env.PUBLIC_URL}/images/solarimage1.webp) center/cover no-repeat` }}>
        <div className="overlay">
          <h1>Solar Services Tailored to You</h1>
          <p>From design to maintenance — we handle it all, end-to-end.</p>
        </div>
      </section>

      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card" style={{textAlign:"left"}}>
          <h3>Solar Installation</h3>
          <p>Professional installation for residential & commercial projects.</p>
          <ul>
            <li>Site assessment and shading analysis</li>
            <li>Custom system design and permitting</li>
            <li>Certified, code-compliant installation</li>
          </ul>
        </div>
        <div className="service-card" style={{textAlign:"left"}}>
          <h3>Maintenance</h3>
          <p>Reliable maintenance and troubleshooting services.</p>
          <ul>
            <li>Performance checks and diagnostics</li>
            <li>Panel cleaning and inverter updates</li>
            <li>Remote monitoring support</li>
          </ul>
        </div>
        <div className="service-card" style={{textAlign:"left"}}>
          <h3>Consultation</h3>
          <p>Customized solar solutions and advice for your home or business.</p>
          <ul>
            <li>Usage and ROI analysis</li>
            <li>Component selection guidance</li>
            <li>Financing and incentives overview</li>
          </ul>
        </div>
      </div>

      <section className="features services-guarantees" style={{paddingTop:"2rem"}}>
        <h2>Service Guarantees</h2>
        <div className="features-grid">
          <div className="feature-card" style={{maxWidth:"360px", textAlign:"left"}}>
            <h3>✓ 5 Cleanings in 2.5 Years</h3>
            <p>Post-installation, we include five panel cleanings over 30 months to keep performance high.</p>
          </div>
          <div className="feature-card" style={{maxWidth:"360px", textAlign:"left"}}>
            <h3>✓ Immediate Issue Response</h3>
            <p>If any problem arises, we prioritize same-day acknowledgement and rapid resolution.</p>
          </div>
          <div className="feature-card" style={{maxWidth:"360px", textAlign:"left"}}>
            <h3>✓ Technicians 10am–6pm</h3>
            <p>Certified technicians are available 10:00–18:00 for on-site visits and support.</p>
          </div>
          <div className="feature-card" style={{maxWidth:"360px", textAlign:"left"}}>
            <h3>✓ 5 Years Maintenance</h3>
            <p>Comprehensive maintenance coverage for five years keeps your system running optimally.</p>
          </div>
        </div>
      </section>

      <section className="services-cta" style={{background:"#111827", color:"white", borderRadius:"12px", padding:"2rem", marginTop:"2rem", textAlign:"center"}}>
        <h2>Ready to Start Your Solar Project?</h2>
        <p>Get a free site assessment and custom quote today.</p>
        <a href="/contact" className="btn-primary">Get My Free Quote</a>
      </section>
    </div>
  );
}

export default Services;
