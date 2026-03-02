import React from 'react'

export default function Industries() {
  const industries = [
    { icon: "🚀", name: "Startups & Entrepreneurs", desc: "Launch your MVP and scale fast with our rapid development approach" },
    { icon: "🛒", name: "E-commerce & Retail", desc: "High-performance platforms that drive sales and customer engagement" },
    { icon: "🏥", name: "Healthcare & Wellness", desc: "HIPAA-compliant solutions for patient management and wellness apps" },
    { icon: "📚", name: "Education & E-learning", desc: "Interactive learning platforms with advanced student tracking" },
    { icon: "💰", name: "Finance & Fintech", desc: "Secure, PCI-compliant solutions for payments and financial management" },
    { icon: "✈️", name: "Travel & Hospitality", desc: "Booking platforms and management systems for seamless operations" },
    { icon: "📦", name: "Logistics & Supply Chain", desc: "Real-time tracking and optimization tools for operations" },
    { icon: "🏠", name: "Real Estate", desc: "Property management and marketplace solutions with smart features" }
  ]

  return (
    <section className="industries-section" id="industries">
      <h2>Industries We Serve</h2>
      <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: 32 }}>Delivering solutions across diverse sectors globally</p>

      <div className="industries-grid">
        {industries.map((industry, idx) => (
          <div key={idx} className="industry-card">
            <div className="industry-icon">{industry.icon}</div>
            <h3>{industry.name}</h3>
            <p>{industry.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
