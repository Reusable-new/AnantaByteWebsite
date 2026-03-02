import React from 'react'

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Consultation",
      desc: "We understand your business goals, challenges, and requirements. Our experts provide strategic consultation to shape your digital roadmap."
    },
    {
      num: "02",
      title: "Planning & Design",
      desc: "We craft detailed project plans, wireframes, and UI/UX designs to ensure a seamless user experience and clear development milestones."
    },
    {
      num: "03",
      title: "Development",
      desc: "Our agile development process ensures rapid, high-quality delivery. We keep you updated with regular demos and feedback loops."
    },
    {
      num: "04",
      title: "Testing & QA",
      desc: "Comprehensive testing guarantees your product is secure, scalable, and bug-free before launch. We conduct both manual and automated tests."
    },
    {
      num: "05",
      title: "Deployment & Support",
      desc: "We handle deployment, monitoring, and ongoing support to ensure your product's long-term success, scalability, and performance."
    }
  ]

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <h2>Our Development Process</h2>
        <p style={{ color: 'var(--muted)', marginBottom: 32 }}>Transparent, iterative, and agile—ensuring your success at every step</p>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
