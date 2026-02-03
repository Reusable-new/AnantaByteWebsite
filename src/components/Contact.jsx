import React from 'react'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('✅ Thank you! Your message has been sent. Our team will contact you shortly.')
    e.target.reset()
  }

  return (
    <section className="contact-section" id="contact">
      <h2 style={{textAlign:'center'}}>Get In Touch</h2>
      <p style={{textAlign:'center', color:'var(--muted)'}}>Ready to start your project? Let’s discuss your requirements.</p>

      <div className="contact-card">
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" required />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="full">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" />
          </div>

          <div className="full">
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button className="send-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}