import SEO from "../components/SEO";

export default function MobileAppDevelopment() {
  return (
    <main className="seo-page">
      <SEO
        title="Mobile App Development Services | AnantaByte"
        description="iOS and Android app development for startups and enterprises. Build reliable apps with polished UI and scalable back ends."
        path="/mobile-app-development"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>Mobile App Development Services</h1>
          <p>
            Launch mobile experiences that users love. We design and build apps for
            iOS and Android with thoughtful UX, stable infrastructure, and clean
            analytics to support growth.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Plan your app</a>
            <a className="btn-secondary" href="/web-development">See web development</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Apps we build</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Consumer apps</h3>
              <p>Onboarding, notifications, and performance tuned flows.</p>
            </div>
            <div className="seo-card">
              <h3>Business apps</h3>
              <p>Workflows, approvals, and secure data access for teams.</p>
            </div>
            <div className="seo-card">
              <h3>Cross platform builds</h3>
              <p>Shared codebases for faster delivery and consistent UI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Delivery approach</h2>
          <ul className="seo-list">
            <li>Product strategy and UX flows before development starts.</li>
            <li>Agile sprints with weekly test builds.</li>
            <li>API development and app store readiness.</li>
            <li>Monitoring, crash reporting, and ongoing updates.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Capabilities</h2>
          <ul className="seo-list">
            <li>Push notifications, offline support, and secure auth.</li>
            <li>Payments, subscriptions, and analytics tracking.</li>
            <li>App store optimization and release management.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Bring your app idea to life</h2>
          <p>We can ship an MVP or scale a mature product team.</p>
          <a className="btn-primary" href="/#contact">Talk to the team</a>
        </div>
      </section>
    </main>
  );
}
