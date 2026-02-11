import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function WebDevelopment() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development",
    description: "Custom web development: fast, secure, SEO-friendly websites and web apps.",
    url: "https://anantabyte.com/web-development",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="Web Development Services | AnantaByte"
        description="Custom website and web app development for startups and growing teams. Fast, secure, and conversion focused experiences."
        path="/web-development"
        image="/image/web-og.svg"
        jsonLd={serviceJsonLd}
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
            <button className="btn-primary" onClick={openContact} data-cta="Web Start">Start a project</button>
            <Link className="btn-secondary" to="/saas" data-cta="Web SaaS">Explore SaaS development</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-illustration.svg" alt="Web development illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Built for search and speed</h2>
          <p>We prioritize performance, accessibility, and semantic HTML to help pages rank higher in search engines. Our builds include basic SEO best practices: structured data, proper meta tags, fast images, and clean markup to improve crawlability and user experience.</p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Marketing site rewrite — 3x traffic</h3>
              <p>Redesigned content and performance improvements led to a sustained 3x traffic increase and faster conversions.</p>
            </div>
            <div className="seo-card">
              <h3>Web app for logistics</h3>
              <p>Built a dashboard with real-time updates and role-based access for operations teams.</p>
            </div>
            <div className="seo-card">
              <h3>E-commerce platform</h3>
              <p>Integrated payments, inventory sync and analytics for growth-focused merchants.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { q: "How long does a typical web project take?", a: "Discovery and MVPs are usually 4–6 weeks; larger platforms take longer." },
          { q: "Do you handle hosting and maintenance?", a: "We provide hosting recommendations, CI/CD setup, and post-launch support plans." }
        ]}
        title="Frequently asked questions"
        subtitle="Common questions about web development projects"
      />

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
          <button className="btn-primary" onClick={openContact} data-cta="Web Book">Book a discovery call</button>
        </div>
      </section>
    </main>
  );
}
