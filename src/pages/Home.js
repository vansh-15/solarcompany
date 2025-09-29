import React from "react";

function Home() {
  return (
    <div className="page-container">
      <section className="hero" style={{ background: `url(${process.env.PUBLIC_URL}/images/solarimage1.webp) center/cover no-repeat` }}>
        <div className="overlay">
          <h1>Power Your Future with Solar Energy</h1>
          <p>Clean, Reliable & Sustainable Energy Solutions</p>
          <a href="/contact" className="btn-primary">Get a Free Quote</a>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Sunmarse Solar?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🌍 Eco-Friendly</h3>
            <p>Reduce your carbon footprint with renewable solar energy.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Cost Savings</h3>
            <p>Lower electricity bills and enjoy long-term savings.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Reliable Energy</h3>
            <p>Get uninterrupted power supply with efficient solar systems.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/images/solarimage7.webp`} alt="Installation"/>
            <h3>Solar Installation</h3>
            <p>Professional solar panel installation for homes & businesses.</p>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/images/solarmaintain.webp`} alt="Maintenance"/>
            <h3>Maintenance</h3>
            <p>Keep your system efficient with our expert maintenance services.</p>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/images/solarconsult.webp`} alt="Consultation"/>
            <h3>Consultation</h3>
            <p>Get advice on solar solutions tailored to your needs.</p>
          </div>
        </div>
      </section>

      <section style={{background:"#111827", color:"white", padding:"2rem 1rem"}}>
        <div style={{maxWidth:"1100px", margin:"0 auto", display:"flex", flexWrap:"wrap", gap:"1.5rem", justifyContent:"space-between", textAlign:"center"}}>
          <div style={{flex:"1 1 220px"}}>
            <h3 style={{margin:0}}>5+ Years</h3>
            <p style={{margin:0, opacity:0.85}}>Industry Experience</p>
          </div>
          <div style={{flex:"1 1 220px"}}>
            <h3 style={{margin:0}}>500+ Installs</h3>
            <p style={{margin:0, opacity:0.85}}>Residential & Commercial</p>
          </div>
          <div style={{flex:"1 1 220px"}}>
            <h3 style={{margin:0}}>Up to 70%</h3>
            <p style={{margin:0, opacity:0.85}}>Average Bill Reduction</p>
          </div>
        </div>
      </section>

      <section className="features" style={{paddingTop:"3rem"}}>
        <h2>Our Simple Installation Process</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>1. Free Consultation</h3>
            <p>We evaluate your property and energy goals.</p>
          </div>
          <div className="feature-card">
            <h3>2. Custom Design</h3>
            <p>Engineered system tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <h3>3. Expert Install</h3>
            <p>Certified technicians handle everything end-to-end.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
