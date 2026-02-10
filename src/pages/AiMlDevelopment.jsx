import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'));
}

export default function AiMlDevelopment() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI and ML Development",
    description: "Applied AI and ML solutions: automation, personalization, forecasting, and model deployment.",
    url: "https://anantabyte.com/ai-ml-development",
    provider: { "@type": "Organization", name: "AnantaByte", url: "https://anantabyte.com" }
  };
  return (
    <main className="seo-page">
      <SEO
        title="AI and ML Development Services | AnantaByte"
        description="Applied AI and machine learning solutions that automate workflows, improve decisions, and scale operations."
        path="/ai-ml-development"
        image="/image/ai-og.svg"
        jsonLd={serviceJsonLd}
      />
      <section className="seo-hero">
        <div className="seo-container">
          <p className="seo-eyebrow">Service</p>
          <h1>AI and ML Development Services</h1>
          <p>
            Turn data into intelligent products. We build AI powered features that
            integrate smoothly with your existing stack and deliver measurable value.
          </p>
          <div className="seo-hero-cta">
            <button className="btn-primary" onClick={openContact} data-cta="AI Discuss">Discuss AI use cases</button>
            <Link className="btn-secondary" to="/saas" data-cta="AI SaaS">AI for SaaS teams</Link>
          </div>
          <div className="seo-hero-visual">
            <img src="/image/hero-mockup.svg" alt="AI and ML illustration" />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>Why AI delivers value</h2>
          <p>We focus on practical ML that reduces costs, increases engagement, and improves decision-making. Common outcomes include automated support routing, personalized recommendations, and demand forecasting — all built with production-ready monitoring and security.</p>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Case Studies</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Recommendation engine</h3>
              <p>Built a personalized recommendations system that increased conversion by 22%.</p>
            </div>
            <div className="seo-card">
              <h3>Demand forecast</h3>
              <p>Implemented forecasting models that improved inventory planning accuracy.</p>
            </div>
            <div className="seo-card">
              <h3>AI chatbot</h3>
              <p>Delivered a support bot that automated common queries and reduced time to resolution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="seo-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h4>What data is needed for ML?<span>Depends on the problem</span></h4>
            <div className="faq-answer">We run a data assessment to determine availability and quality before proposing solutions.</div>
          </div>
          <div className="faq-item">
            <h4>How do you handle privacy?<span>Privacy-first approach</span></h4>
            <div className="faq-answer">We follow privacy-preserving practices, anonymization, and access controls as required.</div>
          </div>
        </div>
      </section>

      <section className="seo-section alt">
        <div className="seo-container">
          <h2>Practical AI use cases</h2>
          <div className="seo-grid">
            <div className="seo-card">
              <h3>Automation and routing</h3>
              <p>Classify, prioritize, and route tasks at scale.</p>
            </div>
            <div className="seo-card">
              <h3>Personalization</h3>
              <p>Recommendations and next best actions for users.</p>
            </div>
            <div className="seo-card">
              <h3>Insights and forecasting</h3>
              <p>Predict demand, churn, and operational needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <h2>From data to deployment</h2>
          <ul className="seo-list">
            <li>Data assessment and feature engineering.</li>
            <li>Model selection and evaluation aligned to KPIs.</li>
            <li>Deployment pipelines and monitoring.</li>
            <li>Human in the loop workflows for quality control.</li>
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
