import React from 'react'
import SEO from '../components/SEO'
import { Link, useNavigate } from 'react-router-dom'
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function Saas() {
  const navigate = useNavigate();

  return (
    <main className="seo-page">
      <SEO
        title="SaaS Development Services | Multi-Tenant SaaS Apps | AnantaByte"
        description="SaaS development services for scalable, secure products using multi-tenant architecture, AWS, Docker, Kubernetes, and CI/CD."
        path="/saas"
        image="/image/saas-og.svg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SaaS Development",
          description: "SaaS product development with multi-tenant architecture, scalable cloud infrastructure, and secure billing.",
          url: "https://anantabyte.com/saas",
          provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
        }}
      />

      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>SaaS Application Development Services</h1>
          <p>
            We design and build cloud-native SaaS platforms with multi-tenant
            architectures, secure billing, and reliable scaling. From MVPs to
            enterprise-grade products, we focus on performance and long-term
            operability.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="SaaS Contact">Talk about SaaS</button>
            <Link className="btn-secondary" to="/saas-mvp-guide" data-cta="SaaS Guide">SaaS MVP guide</Link>
          </div>
          <div className="seo-hero-visual">
            <img src="/image/hero-illustration.svg" alt="SaaS development illustration" className="seo-hero-img" />
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Our SaaS Development Expertise</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Multi-tenant architecture</h3>
              <p>Designs that isolate data while enabling cost-effective scaling.</p>
            </div>
            <div className="seo-card">
              <h3>Subscription & billing</h3>
              <p>Flexible plans, metered billing, trials, and renewals handled.
              </p>
            </div>
            <div className="seo-card">
              <h3>Security & compliance</h3>
              <p>Secure data handling, role-based access, and cloud best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Technologies we use for SaaS development</h2>
          <p>Our SaaS development services focus on cloud-native delivery, multi-tenant architecture, and automation so your platform scales securely.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Multi-tenant architecture</h3>
              <p>Tenant isolation, data partitions, and shared services for scale.</p>
            </article>
            <article className="tech-card">
              <h3>AWS</h3>
              <p>Reliable hosting, storage, and managed cloud services.</p>
            </article>
            <article className="tech-card">
              <h3>Docker</h3>
              <p>Containerized deployments that stay consistent across environments.</p>
            </article>
            <article className="tech-card">
              <h3>Kubernetes</h3>
              <p>Orchestration for high availability and efficient scaling.</p>
            </article>
            <article className="tech-card">
              <h3>CI/CD</h3>
              <p>Automated builds, tests, and releases to ship faster.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Why choose Ananta Byte for SaaS?</h2>
          <ul className="seo-list">
            <li>Rapid MVPs to validate market fit.</li>
            <li>Scalable architectures for growth.</li>
            <li>Observability, CI/CD, and maintenance plans.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>SaaS analytics platform</h3>
              <p>Built multi-tenant analytics with role-based dashboards and event pipelines.</p>
            </div>
            <div className="seo-card">
              <h3>Subscription & billing</h3>
              <p>Implemented flexible billing, proration and trial flows for a SaaS product.</p>
            </div>
            <div className="seo-card">
              <h3>Platform migration</h3>
              <p>Migrated a legacy system to a cloud-native multi-tenant platform with zero downtime.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { q: "Do you support multi-tenant SaaS?", a: "We design tenant isolation, data partitioning, and secure auth patterns." },
          { q: "Can you integrate payments?", a: "We integrate subscription billing providers and custom billing flows." }
        ]}
        title="Frequently asked questions"
        subtitle="Clear answers on multi-tenant design, billing systems, and SaaS delivery"
      />

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Combine SaaS expertise with product design and engineering partners.</p>
          <ul className="seo-link-list">
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development</Link></li>
            <li><Link to="/ui-ux-design">UI/UX design</Link></li>
            <li><Link to="/technology-stack">Technology stack</Link></li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Ready to build a SaaS product?</h2>
          <p>We can scope an MVP, build secure multi-tenant platforms, and support you post-launch.</p>
          <button className="btn-primary" onClick={() => goContact(navigate)} data-cta="SaaS Schedule">Schedule a call</button>
        </div>
      </section>
    </main>
  )
}