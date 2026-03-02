import React from 'react'

export default function About() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>
            Transforming Ideas Into<br />Scalable Digital Products
          </h2>

          <p>At AnantaByte, we believe in building technology that drives business growth. With expertise in web development, mobile apps, SaaS engineering, and AI solutions, we partner with startups and businesses to launch, scale, and succeed in the digital era.</p>
          <p>Our mission is to deliver robust, scalable, and user-centric software that solves real-world problems—from MVPs to enterprise-grade platforms.</p>

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