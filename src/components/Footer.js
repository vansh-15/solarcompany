import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" style={{maxWidth:"1100px", margin:"0 auto", display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"space-between", textAlign:"left"}}>
        <div style={{minWidth:"220px"}}>
          <h3 style={{marginBottom:"0.5rem"}}>VK Solar</h3>
          <p style={{opacity:0.85}}>Clean, reliable solar solutions for homes and businesses.</p>
        </div>
        <div style={{minWidth:"180px"}}>
          <h4>Quick Links</h4>
          <ul style={{listStyle:"none", padding:0, margin:0, lineHeight:1.9}}>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div style={{minWidth:"220px"}}>
          <h4>Contact</h4>
          <p>Mon–Sat, 9am–6pm</p>
          <p>+91 (800) 555‑SOLR</p>
          <p>hello@solarpower.com</p>
        </div>
      </div>
      <p style={{marginTop:"1rem"}}>© 2025 VK Solar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
