import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function WebDevelopment() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "AnantaByte",
        url: "https://anantabyte.com",
        logo: "https://anantabyte.com/image/hero-mockup.svg"
      },
      {
        "@type": "Service",
        name: "Web Development",
        serviceType: "Custom Web Application Development",
        description: "Enterprise web development with Node.js and React for scalable web applications.",
        url: "https://anantabyte.com/web-development",
        areaServed: "Worldwide",
        provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
      }
    ]
  };
  return (
    <main className="seo-page">
      <SEO
        title="Best Node.js & React Web Development Company"
        description="Enterprise web development with Node.js and React. Custom web apps, secure back ends, and scalable architecture for global B2B teams."
        path="/web-development"
        image="/image/web-og.svg"
        jsonLd={serviceJsonLd}
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>Web Development Services for Enterprise Growth</h1>
          <p>
            We are a best Node.js development company and top React development company
            for B2B teams that need reliable web platforms. From custom web application
            development services to enterprise modernization, we deliver fast, secure,
            and scalable experiences that support revenue goals and global operations.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="Web Start">Book a strategy call</button>
            <Link className="btn-secondary" to="/technology-stack" data-cta="Web Tech">View our technology stack</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-illustration.svg" alt="Web development illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Best Node.js development company for scalable platforms</h2>
          <p>
            Enterprise web applications live or die on performance and reliability. Our Node.js development experts
            design API-first architectures that handle high traffic, real-time workloads, and complex data flows with
            predictable performance. We optimize for uptime, security, and observability so your product stays stable
            as teams and customer demand grow.
          </p>
          <h3>Node.js architecture built for enterprise scale</h3>
          <p>
            We design service boundaries, caching strategies, and database interactions to keep response times low.
            This approach supports large customer bases, distributed teams, and integrations with CRMs, ERPs, and
            analytics tools. If you need a custom web application that scales without rework, our architecture is
            built to support long-term growth.
          </p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Top React development company for high-conversion UX</h2>
          <p>
            As a top React development company, we build interfaces that feel fast, clear, and trustworthy.
            React web application development enables reusable components and predictable state management,
            which means faster delivery without compromising quality. We create UI systems that stay consistent
            across products and scale as your feature set grows.
          </p>
          <h3>React web application development that drives adoption</h3>
          <p>
            Our design and engineering teams collaborate to reduce friction across onboarding, product workflows,
            and key conversion points. The result is a web experience that supports enterprise buyers, reduces
            support load, and increases user engagement.
          </p>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Custom web application development services</h2>
          <p>
            We deliver custom web application development services for organizations that require business-critical
            systems. Whether you are launching a customer portal, building internal operations software, or creating
            a revenue-driving SaaS experience, our team delivers reliable outcomes with enterprise-grade standards.
          </p>
          <h3>Enterprise-focused value proposition</h3>
          <p>
            Our delivery model combines product strategy, UX design, and engineering to align technology with revenue.
            That means clear roadmaps, predictable delivery, and measurable impact for stakeholder teams across regions.
          </p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Full stack development company with end-to-end delivery</h2>
          <p>
            As a full stack development company, we build the front end, back end, database, and integrations as a
            single product system. This helps reduce handoffs and ensures every feature is designed, built, tested,
            and deployed with consistent quality.
          </p>
          <h3>Secure integrations and reliable operations</h3>
          <p>
            We integrate with payment gateways, CRMs, ERP platforms, analytics tools, and identity providers. Each
            integration follows strict security practices, audit logging, and access controls so your data remains
            protected while workflows stay fast.
          </p>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Custom software development company for complex requirements</h2>
          <p>
            If off-the-shelf platforms are limiting your growth, we design custom software that maps to your exact
            processes. From legacy modernization to new digital products, we build solutions that reduce operational
            friction and support expansion across regions, teams, and business units.
          </p>
          <h3>Built for international B2B delivery</h3>
          <p>
            Our teams collaborate across time zones with structured reporting, governance, and release processes. We
            align with enterprise security requirements and ensure compliance-ready practices from day one.
          </p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Enterprise delivery process</h2>
          <p>Our delivery approach balances speed, quality, and operational clarity.</p>
          <h3>Discovery and strategy</h3>
          <p>We align stakeholders, define KPIs, and map the technical roadmap before engineering begins.</p>
          <h3>Architecture and UX</h3>
          <p>We design scalable systems with a UX foundation that supports adoption and conversion.</p>
          <h3>Development and QA</h3>
          <p>Agile sprints, automated testing, and performance checks keep delivery predictable.</p>
          <h3>Deployment and optimization</h3>
          <p>CI/CD pipelines, monitoring, and analytics ensure stability and continuous improvement.</p>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Technologies we use</h2>
          <p>
            Our technology stack combines proven frameworks with scalable infrastructure. We are Node.js development
            experts and deliver React web application development for modern enterprise teams.
          </p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Node.js</h3>
              <p>Node.js development experts building fast APIs and real-time services.</p>
            </article>
            <article className="tech-card">
              <h3>React</h3>
              <p>React web application development for high-conversion interfaces.</p>
            </article>
            <article className="tech-card">
              <h3>Next.js</h3>
              <p>SEO-ready rendering and routing for enterprise web platforms.</p>
            </article>
            <article className="tech-card">
              <h3>MongoDB</h3>
              <p>Flexible data models for evolving products and analytics.</p>
            </article>
            <article className="tech-card">
              <h3>AWS</h3>
              <p>Secure hosting and scalable infrastructure for global delivery.</p>
            </article>
            <article className="tech-card">
              <h3>Docker</h3>
              <p>Consistent deployments that support scalable SaaS architecture.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Conversion-focused outcomes for global B2B teams</h2>
          <p>
            Enterprise buyers expect clarity, speed, and trust at every touchpoint. We design web applications that
            reduce friction, improve onboarding, and make it easier for users to complete high-value actions.
          </p>
          <h3>What you can expect after launch</h3>
          <p>
            Faster sales cycles through clearer product messaging, higher adoption through intuitive workflows, and
            measurable ROI through analytics and experimentation. Our teams support ongoing optimization so the web
            platform continues to improve as your market evolves.
          </p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Strengthen your digital roadmap with these specialized teams.</p>
          <ul className="seo-link-list">
            <li><Link to="/saas">Scalable SaaS architecture</Link></li>
            <li><Link to="/ai-ml-development">AI chatbot development company</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development company</Link></li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Ready to build a high-performance web platform?</h2>
          <p>Tell us your goals and we will deliver a scalable plan with clear outcomes.</p>
          <button className="btn-primary" onClick={openContact} data-cta="Web Book">Request a proposal</button>
        </div>
      </section>
    </main>
  );
}
