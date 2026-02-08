import SEO from "../components/SEO";

export default function UiUxDesign() {
  return (
    <main className="seo-page">
      <SEO
        title="UI UX Design Services | AnantaByte"
        description="Product strategy, UX research, and UI design that turns ideas into lovable digital experiences."
        path="/ui-ux-design"
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
            <a className="btn-primary" href="/#contact">Start design discovery</a>
            <a className="btn-secondary" href="/web-development">Pair with development</a>
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
          <a className="btn-primary" href="/#contact">Request a quote</a>
        </div>
      </section>
    </main>
  );
}
