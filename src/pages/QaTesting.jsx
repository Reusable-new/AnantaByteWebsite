import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function QaTesting() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA & Testing Services",
    description: "QA and testing services covering manual QA, automation, performance, and security testing.",
    url: "https://anantabyte.com/qa-testing",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="QA & Testing Services | Automation & Manual QA | AnantaByte"
        description="QA and testing services using Selenium, Cypress, Jest, manual testing, and automation testing to keep releases reliable."
        path="/qa-testing"
        image="/image/qa-og.svg"
        jsonLd={serviceJsonLd}
      />

      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>QA & Testing Services</h1>
          <p>
            Ensure your product is reliable, secure, and performs under load. We
            provide functional, automated, performance, and security testing to
            reduce risk and improve user confidence.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="QA Contact">Request QA support</button>
            <Link className="btn-secondary" to="/web-development" data-cta="QA Web">See web services</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-illustration.svg" alt="QA testing illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>What we test</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Functional testing</h3>
              <p>Verify features work across platforms and flows.</p>
            </div>
            <div className="seo-card">
              <h3>Automation</h3>
              <p>Test suites for regression to speed up releases.</p>
            </div>
            <div className="seo-card">
              <h3>Performance & Security</h3>
              <p>Load tests and vulnerability scans to identify risks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Technologies we use for QA & testing</h2>
          <p>Our QA and testing services blend manual expertise with automation frameworks to protect quality at every release.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Selenium</h3>
              <p>Cross-browser automated testing for critical user flows.</p>
            </article>
            <article className="tech-card">
              <h3>Cypress</h3>
              <p>Fast, reliable end-to-end testing for modern web apps.</p>
            </article>
            <article className="tech-card">
              <h3>Jest</h3>
              <p>Unit and integration tests that catch regressions early.</p>
            </article>
            <article className="tech-card">
              <h3>Manual Testing</h3>
              <p>Exploratory checks for usability and edge cases.</p>
            </article>
            <article className="tech-card">
              <h3>Automation Testing</h3>
              <p>CI-ready suites that speed up releases with confidence.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Keep releases safe and predictable</h2>
          <p>We can integrate testing into your CI/CD pipeline and provide ongoing QA support.</p>
          <button className="btn-primary" onClick={openContact} data-cta="QA Schedule">Schedule a QA review</button>
        </div>
      </section>
      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Regression suite</h3>
              <p>Implemented automated regression tests that cut release bugs by 60%.</p>
            </div>
            <div className="seo-card">
              <h3>Load testing</h3>
              <p>Performed load testing and capacity planning prior to a major launch.</p>
            </div>
            <div className="seo-card">
              <h3>Security audit</h3>
              <p>Delivered penetration testing and remediation guidance for compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Ensure quality across the full product lifecycle with these teams.</p>
          <ul className="seo-link-list">
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development</Link></li>
            <li><Link to="/saas">SaaS application development</Link></li>
            <li><Link to="/technology-stack">Technology stack</Link></li>
          </ul>
        </div>
      </section>

      <FAQ
        items={[
          { q: "Do you provide automated test suites?", a: "We write end-to-end and integration test suites tailored to your stack." },
          { q: "Can you integrate testing into CI/CD?", a: "We configure pipelines to run tests and gate releases based on results." }
        ]}
        title="Frequently asked questions"
        subtitle="Answers about automation, CI/CD integration, and QA coverage"
      />
    </main>
  );
}
