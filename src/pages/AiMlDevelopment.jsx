import SEO from "../components/SEO";

export default function AiMlDevelopment() {
  return (
    <main className="seo-page">
      <SEO
        title="AI and ML Development Services | AnantaByte"
        description="Applied AI and machine learning solutions that automate workflows, improve decisions, and scale operations."
        path="/ai-ml-development"
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
            <a className="btn-primary" href="/#contact">Discuss AI use cases</a>
            <a className="btn-secondary" href="/saas">AI for SaaS teams</a>
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
          <a className="btn-primary" href="/#contact">Schedule a consult</a>
        </div>
      </section>
    </main>
  );
}
