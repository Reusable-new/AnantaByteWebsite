import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function UiUxDesign() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI UX Design",
    description: "Product strategy, UX research, and UI design to increase engagement and conversions.",
    url: "https://anantabyte.com/ui-ux-design",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="UI UX Design Services | AnantaByte"
        description="Product strategy, UX research, and UI design that turns ideas into lovable digital experiences."
        path="/ui-ux-design"
        image="/image/design-og.svg"
        jsonLd={serviceJsonLd}
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>UI UX Design Services</h1>
          <p>
            Align teams around clear user journeys and design systems that scale.
            We craft interfaces that feel intuitive, credible, and conversion ready.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="Design Start">Start design discovery</button>
            <Link className="btn-secondary" to="/web-development" data-cta="Design Pair">Pair with development</Link>
          </div>
          <div className="seo-hero-visual">
            <img src="/image/mission-illustration.svg" alt="Design illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Design that converts</h2>
          <p>Our design work is research-driven: we validate assumptions, run usability tests, and craft UI systems that scale. We prioritize accessibility and conversion best practices so visual polish also drives measurable outcomes.</p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Checkout redesign</h3>
              <p>Redesigned checkout flow that reduced cart abandonment by 18%.</p>
            </div>
            <div className="seo-card">
              <h3>Onboarding flow</h3>
              <p>Improved onboarding experience that increased activation rates.</p>
            </div>
            <div className="seo-card">
              <h3>Design system</h3>
              <p>Built a scalable UI kit to speed up product development across teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="seo-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h4>Do you do user research?<span>Yes</span></h4>
            <div className="faq-answer">We run interviews, usability tests, and analytics reviews to inform design choices.</div>
          </div>
          <div className="faq-item">
            <h4>Can you hand off designs to devs?<span>Yes</span></h4>
            <div className="faq-answer">We provide specs, assets, and tokens for smooth handoff.</div>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Design work that drives outcomes</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Product strategy</h3>
              <p>User journeys, value props, and feature prioritization.</p>
            </div>
            <div className="seo-card">
              <h3>UX research</h3>
              <p>Interviews, heuristics, and usability testing.</p>
            </div>
            <div className="seo-card">
              <h3>UI systems</h3>
              <p>Component libraries and responsive design rules.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Our design process</h2>
          <ul className="seo-list">
            <li>Discovery workshops to align goals and audience needs.</li>
            <li>Wireframes and clickable prototypes for validation.</li>
            <li>High fidelity UI with accessibility in mind.</li>
            <li>Design handoff with clear specs and assets.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Typical deliverables</h2>
          <ul className="seo-list">
            <li>Brand aligned UI kit and design system.</li>
            <li>Responsive layouts for web and mobile.</li>
            <li>Prototype flows for key journeys.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Design experiences users trust</h2>
          <p>We can lead the full design track or collaborate with your team.</p>
          <button className="btn-primary" onClick={openContact} data-cta="Design Quote">Request a quote</button>
        </div>
      </section>
    </main>
  );
}
