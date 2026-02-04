import React from 'react'
import SEO from '../components/SEO'

export default function Saas() {
  return (
    <section className="services-section">
      <SEO
        title="SaaS Development Services | AnantaByte"
        description="Custom SaaS application development for startups and enterprises. Scalable, secure, and user-friendly platforms built by AnantaByte."
        path="/saas"
      />
      <h1>SaaS Application Development Services</h1>

      <p>
        Ananta Byte specializes in SaaS application development for startups, SMEs, and enterprises. We design and develop cloud-based SaaS platforms that are scalable, secure, and user-friendly.
      </p>

      <h2>Our SaaS Development Expertise</h2>
      <ul>
        <li>Multi-tenant SaaS architecture</li>
        <li>Subscription & billing systems</li>
        <li>Cloud hosting & scalability</li>
        <li>Role-based access control</li>
        <li>API-driven SaaS platforms</li>
      </ul>

      <h2>Why Choose Ananta Byte for SaaS?</h2>
      <p>
        We build SaaS products that scale with your business. From MVP to enterprise-grade platforms, our team ensures performance, security, and long-term growth.
      </p>
    </section>
  )
}