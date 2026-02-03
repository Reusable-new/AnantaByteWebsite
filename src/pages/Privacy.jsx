import React from 'react'

export default function Privacy() {
  return (
    <div>
      <header className="policy-header">
        <div className="header-container">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </div>
      </header>

      <section className="policy-content">
        <div className="policy-container">
          <p>
            At <strong>Ananta Byte</strong>, we value your privacy and are committed to protecting your personal information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal details such as name, email address, phone number</li>
            <li>Project-related information submitted through contact forms</li>
            <li>Technical data such as IP address, browser type, and device information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Respond to inquiries and provide requested services</li>
            <li>Improve our website, services, and user experience</li>
            <li>Communicate updates, offers, or service-related information</li>
            <li>Ensure security and prevent fraudulent activity</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. Information may be shared only when required by law or to trusted partners who assist us in operating our services, under strict confidentiality.</p>

          <h2>4. Cookies & Tracking Technologies</h2>
          <p>We may use cookies and similar technologies to enhance user experience, analyze website traffic, and understand usage patterns. You can disable cookies through your browser settings.</p>

          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, disclosure, or misuse. However, no system can be 100% secure.</p>

          <h2>6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>

          <h2>7. Your Rights</h2>
          <p>You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us using the details below.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>

          <div className="contact-box">
            <p><strong>Email:</strong> contact@anantabyte.com</p>
            <p><strong>Company:</strong> AnantaByte</p>
          </div>
        </div>
      </section>

      <footer className="policy-footer">© 2024 Ananta Byte. All rights reserved.</footer>
    </div>
  )
}