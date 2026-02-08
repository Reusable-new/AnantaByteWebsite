import SEO from "../components/SEO";

export default function WebDevelopment() {
  return (
    <main className="seo-page">
      <SEO
        title="Web Development Services | AnantaByte"
        description="Custom website and web app development for startups and growing teams. Fast, secure, and conversion focused experiences."
        path="/web-development"
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>Web Development Services</h1>
          <p>
            Build modern websites and web applications that load fast, rank well, and
            turn visitors into customers. We deliver clean UI, reliable back ends,
            and analytics-ready builds that scale with your team.
          </p>
          <div className="seo-hero-cta">
            <a className="btn-primary" href="/#contact">Start a project</a>
            <a className="btn-secondary" href="/saas">Explore SaaS development</a>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Sites, apps, and platforms built to convert</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Marketing websites</h3>
              <p>SEO friendly pages, crisp messaging, and performance tuned delivery.</p>
            </div>
            <div className="seo-card">
              <h3>Web apps and dashboards</h3>
              <p>Secure auth, role based access, and data visualizations that scale.</p>
            </div>
            <div className="seo-card">
              <h3>Portals and e-commerce</h3>
              <p>Catalogs, payments, and integrations designed for growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>How we build</h2>
          <p>A lean process focused on clarity, speed, and measurable outcomes.</p>
          <ul className="seo-list">
            <li>Discovery to align goals, audiences, and KPIs.</li>
            <li>UI and UX design with rapid prototyping.</li>
            <li>Front end and back end development with weekly demos.</li>
            <li>QA, performance checks, and launch readiness.</li>
            <li>Post launch support and optimization.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Modern stack, reliable delivery</h2>
          <ul className="seo-list">
            <li>React, Next.js, and Vite for fast front ends.</li>
            <li>Node.js APIs and scalable services.</li>
            <li>Cloud hosting, CI and analytics integrations.</li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Ready for a web experience that performs?</h2>
          <p>Tell us your goals and we will map a build plan that fits your timeline.</p>
          <a className="btn-primary" href="/#contact">Book a discovery call</a>
        </div>
      </section>
    </main>
  );
}
