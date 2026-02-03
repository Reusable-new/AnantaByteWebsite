import React from 'react'

export default function About() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>
            Building Digital<br />Excellence Since Day<br />One
          </h2>

          <p>At AnantaByte, we transform ideas into powerful digital solutions.</p>
          <p>We believe in building long-term partnerships with our clients.</p>

          <div className="about-stats">
            <div className="stat">
              <span>5+</span>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <span>98%</span>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat">
              <span>20+</span>
              <p>Team Members</p>
            </div>
          </div>
        </div>

        <div className="about-visual" aria-hidden></div>
      </div>
    </section>
  )
}