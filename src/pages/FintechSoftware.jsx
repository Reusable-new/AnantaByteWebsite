import SEO from "../components/SEO";

export default function FintechSoftware() {
  return (
    <main className="seo-page">
      <SEO
        title="Fintech Software Development | AnantaByte"
        description="Build secure fintech platforms, lending systems, and payment experiences with a team that understands reliability and compliance."
        path="/fintech-software-development"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Industry</p>
          <h1>Fintech Software Development</h1>
          <p>
            Launch modern fintech products with secure architecture, clear user
            flows, and integrations that scale. We help teams move fast without
            compromising trust.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Discuss your fintech product</a>
            <a className="btn-secondary" href="/ai-ml-development">Add AI capabilities</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>What we build for fintech</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Digital wallets</h3>
              <p>Balances, transaction history, and secure transfers.</p>
            </div>
            <div className="seo-card">
              <h3>Lending platforms</h3>
              <p>Onboarding, credit workflows, and repayment tracking.</p>
            </div>
            <div className="seo-card">
              <h3>Wealth and analytics</h3>
              <p>Dashboards and insights for smarter decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Security and compliance ready</h2>
          <ul className="seo-list">
            <li>Encryption at rest and in transit.</li>
            <li>Role based access and audit logging.</li>
            <li>KYC and AML workflow integration.</li>
            <li>Operational monitoring and incident readiness.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Integration friendly architecture</h2>
          <ul className="seo-list">
            <li>Payment gateways and banking APIs.</li>
            <li>Identity verification and risk scoring providers.</li>
            <li>Reporting, analytics, and data exports.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Ship fintech with confidence</h2>
          <p>We can help you validate the MVP or scale a regulated platform.</p>
          <a className="btn-primary" href="/#contact">Start a conversation</a>
        </div>
      </section>
    </main>
  );
}
