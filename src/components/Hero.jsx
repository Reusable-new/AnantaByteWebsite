import React from 'react'

export default function Hero(){
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <h1>Building Scalable <span className="accent">Web, Mobile, AI & SaaS</span></h1>
        <p>End-to-end product development for startups and growing businesses. We build beautiful, high-performance apps that scale.</p>

        <div className="hero-buttons">
          <a className="btn-primary" href="#contact" data-cta="Hero Get Started" data-cta-location="hero">Get Started</a>
          <a className="btn-secondary" href="#services" data-cta="Hero View Services" data-cta-location="hero">View Services</a>
        </div>

        <div style={{marginTop:22, color:'var(--muted)', fontSize:14}}>
          <strong>Trusted by startups & enterprises</strong>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-mockup">
          <img className="hero-frame" src="/image/hero-mockup.svg" alt="product mockup frame" />
          <img className="hero-screen" src="/image/hero-screen.svg" alt="product preview" />
          <img className="hero-illustration" src="/image/hero-illustration.svg" alt="Hero illustration" loading="lazy" />
        </div>
      </div>
    </section>
  )
}


