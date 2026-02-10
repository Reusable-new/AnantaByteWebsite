import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function QaTesting() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA & Testing Services",
    description: "Functional, automated, performance, and security testing services to ensure reliability.",
    url: "https://anantabyte.com/qa-testing",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="QA & Testing Services | AnantaByte"
        description="Comprehensive QA and testing services including automated and manual testing, performance, and security testing to ensure reliability."
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
            <img src="/image/hero-illustration.svg" alt="QA testing illustration" />
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

      <section className="faq-section">
        <div className="seo-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h4>Do you provide automated test suites?<span>Yes</span></h4>
            <div className="faq-answer">We write end-to-end and integration test suites tailored to your stack.</div>
          </div>
          <div className="faq-item">
            <h4>Can you integrate testing into CI/CD?<span>Yes</span></h4>
            <div className="faq-answer">We configure pipelines to run tests and gate releases based on results.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
