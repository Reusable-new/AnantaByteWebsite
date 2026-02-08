import SEO from "../components/SEO";

export default function HealthcareSoftware() {
  return (
    <main className="seo-page">
      <SEO
        title="Healthcare Software Development | AnantaByte"
        description="Secure, user friendly healthcare software for providers, clinics, and health tech startups."
        path="/healthcare-software-development"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Industry</p>
          <h1>Healthcare Software Development</h1>
          <p>
            Create digital health experiences that patients trust and teams rely on.
            We deliver stable platforms with strong data privacy and clear workflows.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Build healthcare software</a>
            <a className="btn-secondary" href="/ui-ux-design">Prioritize patient UX</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Solutions for healthcare teams</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Patient portals</h3>
              <p>Appointments, records access, and secure messaging.</p>
            </div>
            <div className="seo-card">
              <h3>Telemedicine</h3>
              <p>Video visits, scheduling, and follow up workflows.</p>
            </div>
            <div className="seo-card">
              <h3>Operations tools</h3>
              <p>Staff dashboards, inventory, and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Privacy first delivery</h2>
          <ul className="seo-list">
            <li>Access controls and audit trails for sensitive data.</li>
            <li>Secure integrations with third party systems.</li>
            <li>Data handling practices aligned with healthcare expectations.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Built for real world workflows</h2>
          <ul className="seo-list">
            <li>Streamlined patient intake and triage flows.</li>
            <li>Care team collaboration and notifications.</li>
            <li>Analytics for operational and clinical insights.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Improve patient outcomes with software</h2>
          <p>We help health teams ship reliable digital products.</p>
          <a className="btn-primary" href="/#contact">Talk to a specialist</a>
        </div>
      </section>
    </main>
  );
}
