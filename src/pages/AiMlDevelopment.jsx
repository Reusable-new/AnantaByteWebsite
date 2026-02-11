import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function AiMlDevelopment() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Chatbot Development",
    description: "AI chatbot development for support, sales, and internal automation with secure integrations.",
    url: "https://anantabyte.com/ai-ml-development",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="AI Chatbot Development Company | Conversational AI | AnantaByte"
        description="AI chatbot development company building conversational AI with OpenAI, LangChain, NLP, Python, and TensorFlow."
        path="/ai-ml-development"
        image="/image/ai-og.svg"
        jsonLd={serviceJsonLd}
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>AI Chatbot Development Services</h1>
          <p>
            Build conversational AI that resolves tickets, qualifies leads, and guides
            users with accuracy. We design chatbots that integrate with your systems
            and deliver measurable automation gains.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="AI Discuss">Discuss AI use cases</button>
            <Link className="btn-secondary" to="/saas" data-cta="AI SaaS">AI for SaaS teams</Link>
          </div>
          <div className="seo-hero-visual">
            <img className="seo-hero-img" src="/image/hero-mockup.svg" alt="AI chatbot illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Why AI chatbots deliver value</h2>
          <p>We focus on practical conversational AI that reduces support load, improves response times, and enhances customer satisfaction. Our chatbots integrate with knowledge bases, CRMs, and ticketing tools with production-ready monitoring.</p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Technologies we use for AI chatbot development</h2>
          <p>As an AI chatbot development company, we combine leading LLMs with secure orchestration, data connectors, and evaluation pipelines to ship reliable assistants.</p>
          <div className="tech-grid">
            <article className="tech-card">
              <h3>OpenAI</h3>
              <p>State-of-the-art models for natural, context-aware conversations.</p>
            </article>
            <article className="tech-card">
              <h3>LangChain</h3>
              <p>Tooling for agent workflows, memory, and prompt management.</p>
            </article>
            <article className="tech-card">
              <h3>Python</h3>
              <p>Reliable model integration, data processing, and backend services.</p>
            </article>
            <article className="tech-card">
              <h3>NLP</h3>
              <p>Intent detection and entity extraction for precise automation.</p>
            </article>
            <article className="tech-card">
              <h3>TensorFlow</h3>
              <p>Custom model training and evaluation for specialized tasks.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Support chatbot</h3>
              <p>Automated common requests and reduced time to resolution for customers.</p>
            </div>
            <div className="seo-card">
              <h3>Sales qualification bot</h3>
              <p>Qualified inbound leads and routed high-intent prospects to sales teams.</p>
            </div>
            <div className="seo-card">
              <h3>Internal assistant</h3>
              <p>Connected knowledge sources to answer internal questions securely.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          { q: "What data is needed for ML?", a: "We run a data assessment to determine availability and quality before proposing solutions." },
          { q: "How do you handle privacy?", a: "We follow privacy-preserving practices, anonymization, and access controls as required." }
        ]}
        title="Frequently asked questions"
        subtitle="Answers about data readiness, privacy, and AI chatbot delivery"
      />

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Chatbot use cases</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Customer support</h3>
              <p>Deflect tickets with accurate answers and smart routing.</p>
            </div>
            <div className="seo-card">
              <h3>Sales enablement</h3>
              <p>Qualify leads and schedule demos automatically.</p>
            </div>
            <div className="seo-card">
              <h3>Internal productivity</h3>
              <p>Answer internal questions across docs and tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>From discovery to deployment</h2>
          <ul className="seo-list">
            <li>Conversation design, intents, and knowledge mapping.</li>
            <li>Model selection, prompts, and evaluation aligned to KPIs.</li>
            <li>Integration with CRMs, ticketing, and internal data sources.</li>
            <li>Monitoring, feedback loops, and quality control.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Responsible AI practices</h2>
          <ul className="seo-list">
            <li>Privacy aware data handling and access controls.</li>
            <li>Model testing for bias and reliability.</li>
            <li>Clear documentation and review checkpoints.</li>
          </ul>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Explore related services</h2>
          <p>Pair AI chatbots with product teams that deliver end-to-end outcomes.</p>
          <ul className="seo-link-list">
            <li><Link to="/saas">SaaS application development</Link></li>
            <li><Link to="/web-development">Web development</Link></li>
            <li><Link to="/mobile-app-development">Mobile app development</Link></li>
            <li><Link to="/technology-stack">Technology stack</Link></li>
          </ul>
        </div>
      </section>

      <section className="seo-cta">
        <div className="seo-container">
          <h2>Make AI a real product advantage</h2>
          <p>We can scope a pilot or expand existing AI systems.</p>
          <button className="btn-primary" onClick={openContact} data-cta="AI Schedule">Schedule a consult</button>
        </div>
      </section>
    </main>
  );
}
