import React from "react";

function Testimonials() {
  return (
    <div className="page-container">
      <h1>What Our Clients Say</h1>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <img src={`${process.env.PUBLIC_URL}/images/solarimage2.webp`} alt="Solar installation 2" />
          <p>“Seamless installation and our bills dropped by 60% in the first month.”</p>
          <h4>Pooja Sharma, Homemaker</h4>
        </div>
        <div className="testimonial-card">
          <img src={`${process.env.PUBLIC_URL}/images/solarimage3.webp`} alt="Solar installation 3" />
          <p>“Professional, punctual, and the system has been running flawlessly.”</p>
          <h4>Rajesh Kumar, Small Business</h4>
        </div>
        <div className="testimonial-card">
          <img src={`${process.env.PUBLIC_URL}/images/solarimage4.webp`} alt="Solar installation 4" />
          <p>“Great ROI for our warehouse. Highly recommend their team.”</p>
          <h4>Akhilesh Singh, Homeowner</h4>
        </div>
        <div className="testimonial-card">
          <img src={`${process.env.PUBLIC_URL}/images/solarimage8.webp`} alt="Solar installation 5" />
          <p>“The consultation was thorough and the design matched our needs perfectly.”</p>
          <h4>Sushila Mishra, Homemaker</h4>
        </div>
        <div className="testimonial-card">
          <img src={`${process.env.PUBLIC_URL}/images/solarimage9.webp`} alt="Solar installation 1" />
          <p>“Maintenance team is responsive and knowledgeable — five stars.”</p>
          <h4>Deepak Gupta, Factory Owner</h4>
        </div>
      </div>

      <section className="services-cta" style={{background:"#111827", color:"white", borderRadius:"12px", padding:"2rem", marginTop:"2rem", textAlign:"center"}}>
        <h2>Ready to go solar?</h2>
        <p>Join hundreds of happy customers saving with solar.</p>
        <a href="/contact" className="btn-primary">Get a Free Quote</a>
      </section>
    </div>
  );
}

export default Testimonials;
