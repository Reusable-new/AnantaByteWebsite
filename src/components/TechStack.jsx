import React from 'react'

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      icon: "⚛️",
      techs: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Backend",
      icon: "⚙️",
      techs: ["Node.js", "Python", ".NET", "Java", "Go"]
    },
    {
      name: "Mobile",
      icon: "📱",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      name: "Cloud & DevOps",
      icon: "☁️",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      name: "Databases",
      icon: "💾",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      name: "AI & ML",
      icon: "🤖",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "LLaMA"]
    }
  ]

  return (
    <section className="techstack-section" id="tech-stack">
      <h2>Tools & Technologies We Use</h2>
      <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: 32 }}>
        Cutting-edge technology stacks for scalable, high-performance solutions
      </p>

      <div className="techstack-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="tech-category">
            <div className="tech-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <div className="tech-list">
              {category.techs.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
