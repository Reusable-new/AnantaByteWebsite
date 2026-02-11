import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function UiUxDesign() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI UX Design",
    description: "UI UX design with research, prototyping, and design systems that improve engagement and conversions.",
    url: "https://anantabyte.com/ui-ux-design",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="UI/UX Design Company | Product & UX Research | AnantaByte"
        description="UI/UX design company delivering research-led interfaces with Figma, Adobe XD, user research, and prototyping."
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
            <img className="seo-hero-img" src="/image/mission-illustration.svg" alt="Design illustration" />
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
          <h2>Technologies we use for UI/UX design</h2>
          <p>As a UI/UX design company, we use modern collaboration tools and research methods to build user-centered experiences that convert.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Figma</h3>
              <p>Collaborative design systems and rapid prototyping.</p>
            </article>
            <article className="tech-card">
              <h3>Adobe XD</h3>
              <p>High-fidelity UI design and stakeholder reviews.</p>
            </article>
            <article className="tech-card">
              <h3>User Research</h3>
              <p>Interviews, surveys, and testing to validate decisions.</p>
            </article>
            <article className="tech-card">
              <h3>Prototyping</h3>
              <p>Clickable flows that align teams before build begins.</p>
            </article>
          </div>
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

      <FAQ
        items={[
          { q: "Do you do user research?", a: "We run interviews, usability tests, and analytics reviews to inform design choices." },
          { q: "Can you hand off designs to devs?", a: "We provide specs, assets, and tokens for smooth handoff." }
        ]}
        title="Frequently asked questions"
        subtitle="Design research, handoff, and collaboration answers for product teams"
      />

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

      <section className="seo-section">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Combine design with development to move faster and ship confidently.</p>
          <ul className="seo-link-list">
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development</Link></li>
            <li><Link to="/saas">SaaS application development</Link></li>
            <li><Link to="/technology-stack">Technology stack</Link></li>
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
