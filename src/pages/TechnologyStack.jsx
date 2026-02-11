import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function TechnologyStack() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technology Stack",
    description: "Technology stack for web, mobile, SaaS, AI chatbot, design, and QA services delivered by AnantaByte.",
    url: "https://anantabyte.com/technology-stack",
    publisher: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };

  return (
    <main className="seo-page">
      <SEO
        title="Technology Stack | Web, Mobile, SaaS & AI Development | AnantaByte"
        description="Explore our technology stack for web, mobile, SaaS, AI chatbot development, design, and testing services." 
        path="/technology-stack"
        image="/image/hero-illustration.svg"
        jsonLd={pageJsonLd}
      />

      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Technology Stack</p>
          <h1>Technology Stack for Modern Digital Products</h1>
          <p>
            We are a web development company, mobile app development company, and AI chatbot development company
            building secure SaaS platforms and world-class digital experiences. Our stack balances speed, security,
            and scalability across every engagement.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="Tech Stack Talk">Talk to a solutions architect</button>
            <Link className="btn-secondary" to="/web-development" data-cta="Tech Stack Services">View service pages</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-illustration.svg" alt="Technology stack illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Web development stack</h2>
          <p>Our web development company teams build SEO-ready websites and web apps with modern frameworks and scalable infrastructure.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>React</h3>
              <p>Component-based UI for fast, accessible web experiences.</p>
            </article>
            <article className="tech-card">
              <h3>Next.js</h3>
              <p>Server-side rendering and static builds for performance.</p>
            </article>
            <article className="tech-card">
              <h3>Node.js</h3>
              <p>APIs, real-time services, and integrations at scale.</p>
            </article>
            <article className="tech-card">
              <h3>Laravel</h3>
              <p>Secure PHP back ends and admin tooling for teams.</p>
            </article>
            <article className="tech-card">
              <h3>MongoDB</h3>
              <p>Flexible data models for fast product iteration.</p>
            </article>
            <article className="tech-card">
              <h3>AWS</h3>
              <p>Cloud hosting, storage, and content delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Mobile app development stack</h2>
          <p>Our mobile app development company delivers iOS and Android apps with native performance and rapid delivery cycles.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Flutter</h3>
              <p>Cross-platform UI with near-native performance.</p>
            </article>
            <article className="tech-card">
              <h3>React Native</h3>
              <p>Shared codebase for faster time to market.</p>
            </article>
            <article className="tech-card">
              <h3>Swift</h3>
              <p>Native iOS development for premium UX.</p>
            </article>
            <article className="tech-card">
              <h3>Kotlin</h3>
              <p>Modern Android development for reliability.</p>
            </article>
            <article className="tech-card">
              <h3>Firebase</h3>
              <p>Authentication, analytics, and push messaging.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>SaaS development stack</h2>
          <p>Our SaaS development services prioritize multi-tenant architecture, automation, and secure cloud infrastructure.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Multi-tenant architecture</h3>
              <p>Tenant isolation and shared services for scale.</p>
            </article>
            <article className="tech-card">
              <h3>AWS</h3>
              <p>Cloud services for performance and availability.</p>
            </article>
            <article className="tech-card">
              <h3>Docker</h3>
              <p>Consistent deployments from dev to production.</p>
            </article>
            <article className="tech-card">
              <h3>Kubernetes</h3>
              <p>Orchestration for resilient SaaS platforms.</p>
            </article>
            <article className="tech-card">
              <h3>CI/CD</h3>
              <p>Automated delivery with tested, repeatable releases.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>AI chatbot development stack</h2>
          <p>Our AI chatbot development company uses modern LLMs, orchestration tools, and NLP to deliver reliable assistants.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>OpenAI</h3>
              <p>Advanced language models for natural conversations.</p>
            </article>
            <article className="tech-card">
              <h3>LangChain</h3>
              <p>Agent workflows, tools, and prompt management.</p>
            </article>
            <article className="tech-card">
              <h3>Python</h3>
              <p>Data pipelines and backend orchestration.</p>
            </article>
            <article className="tech-card">
              <h3>NLP</h3>
              <p>Intent detection and entity extraction.</p>
            </article>
            <article className="tech-card">
              <h3>TensorFlow</h3>
              <p>Custom model training and evaluation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>UI/UX design stack</h2>
          <p>We use collaborative design tools and research methods to deliver UX that converts across web and mobile.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Figma</h3>
              <p>Collaborative design systems and UI libraries.</p>
            </article>
            <article className="tech-card">
              <h3>Adobe XD</h3>
              <p>High-fidelity mockups and stakeholder reviews.</p>
            </article>
            <article className="tech-card">
              <h3>User Research</h3>
              <p>Interviews, surveys, and usability testing.</p>
            </article>
            <article className="tech-card">
              <h3>Prototyping</h3>
              <p>Clickable flows that validate journeys early.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>QA & testing stack</h2>
          <p>Our QA & testing services blend manual expertise with automation frameworks to improve release reliability.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>Selenium</h3>
              <p>Cross-browser automated regression testing.</p>
            </article>
            <article className="tech-card">
              <h3>Cypress</h3>
              <p>Fast end-to-end testing for web apps.</p>
            </article>
            <article className="tech-card">
              <h3>Jest</h3>
              <p>Unit and integration tests for core logic.</p>
            </article>
            <article className="tech-card">
              <h3>Manual Testing</h3>
              <p>Exploratory QA for usability and edge cases.</p>
            </article>
            <article className="tech-card">
              <h3>Automation Testing</h3>
              <p>CI-ready suites for faster, safer releases.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Explore service pages</h2>
          <p>Review our focused service pages for deeper coverage and case studies.</p>
          <ul className="seo-link-list">
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development</Link></li>
            <li><Link to="/ai-ml-development">AI chatbot development</Link></li>
            <li><Link to="/saas">SaaS development services</Link></li>
            <li><Link to="/ui-ux-design">UI/UX design</Link></li>
            <li><Link to="/qa-testing">QA & testing</Link></li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Align your product with the right stack</h2>
          <p>Tell us your goals and we will recommend the most effective technology mix.</p>
          <button className="btn-primary" onClick={openContact} data-cta="Tech Stack CTA">Book a discovery call</button>
        </div>
      </section>
    </main>
  );
}
