import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function MobileAppDevelopment() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development",
    description: "Mobile app development for iOS and Android, including native and cross-platform apps.",
    url: "https://anantabyte.com/mobile-app-development",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="Mobile App Development Company | iOS & Android Apps | AnantaByte"
        description="Mobile app development company building iOS and Android apps with Flutter, React Native, Swift, Kotlin, and Firebase."
        path="/mobile-app-development"
        image="/image/mobile-og.svg"
        jsonLd={serviceJsonLd}
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
            <button className="btn-primary" onClick={openContact} data-cta="Mobile Plan">Plan your app</button>
            <Link className="btn-secondary" to="/web-development" data-cta="Mobile Web">See web development</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-screen.svg" alt="Mobile app illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Native and cross-platform expertise</h2>
          <p>We deliver performant mobile apps using native SDKs or cross-platform frameworks depending on product needs. We focus on retention-driving UX patterns, reliable offline behavior, and integration with analytics and push systems to help you grow.</p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Technologies we use for mobile app development</h2>
          <p>As a mobile app development company, we build iOS and Android apps with native performance, secure data handling, and fast release cycles.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Flutter</h3>
              <p>High-performance cross-platform apps with a single codebase.</p>
            </article>
            <article className="tech-card">
              <h3>React Native</h3>
              <p>Reusable UI components for faster delivery across platforms.</p>
            </article>
            <article className="tech-card">
              <h3>Swift</h3>
              <p>Native iOS development for smooth UX and system integration.</p>
            </article>
            <article className="tech-card">
              <h3>Kotlin</h3>
              <p>Modern Android development with reliable performance.</p>
            </article>
            <article className="tech-card">
              <h3>Firebase</h3>
              <p>Authentication, analytics, and push messaging at scale.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Consumer finance app</h3>
              <p>Launched cross-platform app with onboarding and retention flows improving DAU by 40%.</p>
            </div>
            <div className="seo-card">
              <h3>Field service app</h3>
              <p>Built offline sync and secure auth for distributed teams, reducing manual errors.</p>
            </div>
            <div className="seo-card">
              <h3>MVP launch</h3>
              <p>Rapid MVP delivered in 8 weeks to validate market fit and secure early users.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { q: "Do you build native apps?", a: "Yes — we build native iOS and Android apps and cross-platform apps when appropriate." },
          { q: "Can you help with app store submissions?", a: "We prepare releases, metadata, and handle store submission steps." }
        ]}
        title="Frequently asked questions"
        subtitle="Answers about mobile app development and releases"
      />

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

      <section className="seo-section">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Build a connected product experience with these specialized teams.</p>
          <ul className="seo-link-list">
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/saas">SaaS application development</Link></li>
            <li><Link to="/ui-ux-design">UI/UX design</Link></li>
            <li><Link to="/technology-stack">Technology stack</Link></li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Bring your app idea to life</h2>
          <p>We can ship an MVP or scale a mature product team.</p>
          <button className="btn-primary" onClick={openContact} data-cta="Mobile Talk">Talk to the team</button>
        </div>
      </section>
    </main>
  );
}
