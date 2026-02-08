import SEO from "../components/SEO";

export default function SoftwareDevelopmentDelhi() {
  return (
    <main className="seo-page">
      <SEO
        title="Software Development Company in Delhi | AnantaByte"
        description="Delhi software development partner for web, mobile, and SaaS products. Build reliable software with AnantaByte."
        path="/software-development-delhi"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Location</p>
          <h1>Software Development Company in Delhi</h1>
          <p>
            We help Delhi businesses design, build, and scale software products.
            Our team delivers clean engineering, clear communication, and launches
            that perform.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Talk to the team</a>
            <a className="btn-secondary" href="/mobile-app-development">See mobile services</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>What Delhi teams hire us for</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Web and SaaS builds</h3>
              <p>Full stack delivery from idea to launch.</p>
            </div>
            <div className="seo-card">
              <h3>Mobile experiences</h3>
              <p>Android and iOS apps that are stable and fast.</p>
            </div>
            <div className="seo-card">
              <h3>Product modernization</h3>
              <p>Upgrade legacy systems and improve UX.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Engagement options</h2>
          <ul className="seo-list">
            <li>Discovery and strategy for new product launches.</li>
            <li>Dedicated teams for continuous delivery.</li>
            <li>Support and optimization after launch.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Industries we support</h2>
          <ul className="seo-list">
            <li>Fintech, healthcare, and logistics.</li>
            <li>Education and B2B SaaS.</li>
            <li>Consumer and marketplace platforms.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Plan your next software build</h2>
          <p>We can start with a short discovery sprint.</p>
          <a className="btn-primary" href="/#contact">Get a proposal</a>
        </div>
      </section>
    </main>
  );
}
