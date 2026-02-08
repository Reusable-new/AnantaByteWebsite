import SEO from "../components/SEO";

export default function SaasMvpGuide() {
  return (
    <main className="seo-page">
      <SEO
        title="SaaS MVP Guide | AnantaByte"
        description="A practical guide to planning, building, and launching a SaaS MVP that validates demand quickly."
        path="/saas-mvp-guide"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Resource</p>
          <h1>SaaS MVP Guide</h1>
          <p>
            Build a SaaS MVP that proves demand without wasting months. This guide
            covers scope, timeline, and the signals that matter most.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Request the MVP checklist</a>
            <a className="btn-secondary" href="/saas">See SaaS services</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>What a strong MVP includes</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Clear persona</h3>
              <p>One target user with a painful problem.</p>
            </div>
            <div className="seo-card">
              <h3>Core workflow</h3>
              <p>A single journey that delivers the main outcome.</p>
            </div>
            <div className="seo-card">
              <h3>Measurable signals</h3>
              <p>Activation, retention, and revenue leading indicators.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>MVP checklist</h2>
          <ul className="seo-list">
            <li>Define the problem, user, and success metric.</li>
            <li>Map the smallest valuable workflow.</li>
            <li>Prioritize features based on learning value.</li>
            <li>Prepare onboarding, analytics, and feedback loops.</li>
            <li>Launch to a focused pilot group.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Common MVP pitfalls</h2>
          <ul className="seo-list">
            <li>Too many features before validation.</li>
            <li>Skipping usability tests.</li>
            <li>No plan for activation and retention.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Need help with your SaaS MVP?</h2>
          <p>We can run discovery, build the MVP, and support the launch.</p>
          <a className="btn-primary" href="/#contact">Start a discovery sprint</a>
        </div>
      </section>
    </main>
  );
}
