import React, { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz1K1QWAI_Y_BZyC0-dlfPARVfo-kfCLIWrkarUcfKnmKt5uObkvVpWikTQ2i60Cj4T/exec",
        {
          method: "POST",
          body: formData
        }
      )

      let text = ""
      try {
        text = await res.text()
      } catch {
        text = ""
      }
      const lower = text.toLowerCase()
      const isOpaque = res.type === "opaque"

      if ((res.ok || isOpaque) && !lower.startsWith("error")) {
        alert("✅ Thanks! We’ve received your inquiry and will get back to you shortly.")
        form.reset()
      } else {
        alert(`❌ ${text || "Submission failed. Please try again in a moment."}`)
      }
    } catch (err) {
      alert("❌ Submission failed. Please try again in a moment.")
    } finally {
      setIsSubmitting(false)
    }
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

          <button className={`send-btn ${isSubmitting ? "btn-loading" : ""}`} type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="loader" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  )
}