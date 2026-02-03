import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h5>Ananta Byte</h5>
          <p>Building the future, one product at a time.</p>
          <p style={{marginTop:10}}>
            📧 <a href="mailto:contact@anantabyte.com">contact@anantabyte.com</a><br />
            📞 <a href="tel:+918052409078">+91 8052409078</a>
          </p>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="/#about">About Us</a><br />
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <a href="/#services">Web Development</a><br />
          <a href="/#services">Mobile Apps</a><br />
          <a href="/saas">SaaS Development</a>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <a href="/privacy">Privacy</a><br />
          <a href="/terms">Terms</a><br />
          <a href="/#contact">Contact</a>
        </div>
      </div>

      <div style={{textAlign:'center', marginTop:18, color:'var(--muted)'}}>© 2024 Ananta Byte. All rights reserved.</div>
    </footer>
  )
}