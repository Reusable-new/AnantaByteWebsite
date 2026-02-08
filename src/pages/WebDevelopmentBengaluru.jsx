import SEO from "../components/SEO";

export default function WebDevelopmentBengaluru() {
  return (
    <main className="seo-page">
      <SEO
        title="Web Development Company in Bengaluru | AnantaByte"
        description="Bengaluru web development partner for startups and growing teams. Build fast websites and web apps with AnantaByte."
        path="/web-development-bengaluru"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Location</p>
          <h1>Web Development Company in Bengaluru</h1>
          <p>
            We partner with Bengaluru teams to build high performance websites and
            web applications. From MVPs to enterprise platforms, we deliver design
            and development with a clear product focus.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Request a proposal</a>
            <a className="btn-secondary" href="/web-development">Explore web services</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Local focus, global delivery</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Startup friendly</h3>
              <p>MVPs, landing pages, and rapid product iterations.</p>
            </div>
            <div className="seo-card">
              <h3>Growth ready</h3>
              <p>Scalable architecture and analytics driven UX.</p>
            </div>
            <div className="seo-card">
              <h3>Flexible engagement</h3>
              <p>Remote first delivery with optional on site workshops.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Services for Bengaluru teams</h2>
          <ul className="seo-list">
            <li>Marketing websites and conversion focused landing pages.</li>
            <li>Custom web apps, dashboards, and internal tools.</li>
            <li>Performance optimization and SEO improvements.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>How we engage</h2>
          <ul className="seo-list">
            <li>Fixed scope delivery for clear timelines.</li>
            <li>Dedicated product squads for faster iteration.</li>
            <li>Maintenance and growth support after launch.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Build in Bengaluru with a proven partner</h2>
          <p>Share your goals and we will map the next steps.</p>
          <a className="btn-primary" href="/#contact">Book a local consult</a>
        </div>
      </section>
    </main>
  );
}
