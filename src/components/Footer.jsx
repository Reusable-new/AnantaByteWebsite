import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-brand">
            <img className="footer-logo" src="/image/logo.png" alt="image/logo.png" loading="lazy" />
            <h5>Ananta Byte</h5>
          </div>
          <p>Building the future, one product at a time.</p>
          <p style={{marginTop:10}}>
            📧 <a href="mailto:contact@anantabyte.com">contact@anantabyte.com</a><br />
            📞 <a href="tel:+918052409078">+91 8052409078</a>
          </p>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="/#about">About Us</a><br />
          <a href="/web-development-bengaluru">Bengaluru</a><br />
          <a href="/software-development-delhi">Delhi</a>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <a href="/web-development">Web Development</a><br />
          <a href="/mobile-app-development">Mobile App Development</a><br />
          <a href="/ai-ml-development">AI and ML Development</a><br />
          <a href="/ui-ux-design">UI UX Design</a><br />
          <a href="/saas">SaaS Development</a>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <a href="/saas-mvp-guide">SaaS MVP Guide</a><br />
          <a href="/product-discovery-workshop">Product Discovery Workshop</a><br />
          <a href="/privacy">Privacy</a><br />
          <a href="/terms">Terms</a><br />
          <a href="/#contact">Contact</a>
        </div>
      </div>

      <div style={{textAlign:'center', marginTop:18, color:'var(--muted)'}}>© 2024 Ananta Byte. All rights reserved.</div>
    </footer>
  )
}