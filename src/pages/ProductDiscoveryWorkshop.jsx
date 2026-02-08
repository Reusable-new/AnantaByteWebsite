import SEO from "../components/SEO";

export default function ProductDiscoveryWorkshop() {
  return (
    <main className="seo-page">
      <SEO
        title="Product Discovery Workshop | AnantaByte"
        description="A structured product discovery workshop to align goals, define scope, and create a clear build plan."
        path="/product-discovery-workshop"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Resource</p>
          <h1>Product Discovery Workshop</h1>
          <p>
            Align stakeholders, define scope, and leave with a delivery plan.
            Our discovery workshop reduces risk and accelerates product decisions.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Book the workshop</a>
            <a className="btn-secondary" href="/ui-ux-design">Design after discovery</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>What you get</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Product clarity</h3>
              <p>Goals, audience, and positioning aligned across teams.</p>
            </div>
            <div className="seo-card">
              <h3>Prioritized roadmap</h3>
              <p>Features ranked by impact and effort.</p>
            </div>
            <div className="seo-card">
              <h3>Delivery plan</h3>
              <p>Timelines, milestones, and resourcing needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Typical agenda</h2>
          <ul className="seo-list">
            <li>Problem framing and success metrics.</li>
            <li>User journeys and key workflows.</li>
            <li>Tech feasibility and integration planning.</li>
            <li>Roadmap and next step decisions.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Ideal for</h2>
          <ul className="seo-list">
            <li>Startups validating an MVP.</li>
            <li>Teams aligning a new product line.</li>
            <li>Businesses modernizing legacy platforms.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Start with a clear plan</h2>
          <p>We can run the workshop remotely or on site.</p>
          <a className="btn-primary" href="/#contact">Schedule discovery</a>
        </div>
      </section>
    </main>
  );
}
