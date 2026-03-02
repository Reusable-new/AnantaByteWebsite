// import React from 'react'

// function ServiceCard({ bg, icon, title, text }) {
//   return (
//     <div className="service-card">
//       <div className="icon" style={{background:bg}}>{icon}</div>
//       <h3>{title}</h3>
//       <p style={{marginTop:6,color:'var(--muted)',fontSize:14}}>{text}</p>
//     </div>
//   )
// }

// export default function Services() {
//   const items = [
//     {bg:'linear-gradient(90deg,#3b82f6,#60a5fa)',icon:'</>',title:'Web Development',text:'Modern responsive websites and web applications.'},
//     {bg:'linear-gradient(90deg,#06b6d4,#22d3ee)',icon:'📱',title:'Mobile App Development',text:'iOS and Android apps with excellent UX.'},
//     {bg:'linear-gradient(90deg,#ec4899,#f472b6)',icon:'✏️',title:'UI/UX Design',text:'Intuitive interfaces for better conversion.'},
//     {bg:'linear-gradient(90deg,#38bdf8,#0ea5e9)',icon:'🔌',title:'API Integration',text:'Secure integrations with third-party services.'},
//     {bg:'linear-gradient(90deg,#22c55e,#4ade80)',icon:'✔️',title:'QA & Testing',text:'Automated and manual testing services.'},
//     {bg:'linear-gradient(90deg,#a855f7,#7c3aed)',icon:'🤖',title:'AI Chatbots',text:'Smart chatbots for support and automation.'}
//   ]

//   return (
//     <section className="services-section" id="services">
//       <h2>Our Services</h2>
//       <p style={{color:'var(--muted)'}}>Comprehensive solutions for your digital transformation</p>

//       <div className="services-grid">
//         {items.map((it,idx)=> (
//           <ServiceCard key={idx} bg={it.bg} icon={it.icon} title={it.title} text={it.text} />
//         ))}
//       </div>
//     </section>
//   )
// }

import { Link } from "react-router-dom";

function ServiceCard({ bg, icon, title, text, to }) {
  const card = (
    <div className="service-card">
      <div className="icon" style={{ background: bg }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ marginTop: 6, color: "var(--muted)", fontSize: 14 }}>{text}</p>
    </div>
  );

  return to ? <Link to={to} className="service-link">{card}</Link> : card;
}

export default function Services() {
  const items = [
    { bg: "linear-gradient(90deg,#3b82f6,#60a5fa)", icon: "🌐", title: "Web Application Development", text: "Custom, high-performance web apps, PWAs, and e-commerce solutions built with modern frameworks.", to: "/web-development" },
    { bg: "linear-gradient(90deg,#06b6d4,#22d3ee)", icon: "📱", title: "Mobile App Development", text: "Native iOS and Android apps, plus cross-platform solutions with exceptional UX.", to: "/mobile-app-development" },
    { bg: "linear-gradient(90deg,#ec4899,#f472b6)", icon: "🤖", title: "AI & Chatbot Solutions", text: "Intelligent NLP-based chatbots and AI solutions for automation and customer engagement.", to: "/ai-ml-development" },
    { bg: "linear-gradient(90deg,#38bdf8,#0ea5e9)", icon: "☁️", title: "SaaS Product Development", text: "End-to-end SaaS development with multi-tenant architecture and subscription management.", to: "/saas" },
    { bg: "linear-gradient(90deg,#a855f7,#7c3aed)", icon: "🎨", title: "UI/UX Design", text: "User-centered design that maximizes engagement, conversion, and user satisfaction.", to: "/ui-ux-design" },
    { bg: "linear-gradient(90deg,#22c55e,#4ade80)", icon: "🧪", title: "QA & Testing", text: "Comprehensive automated and manual testing ensuring secure, reliable, bug-free products.", to: "/qa-testing" }
  ]

  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <p style={{ color: "var(--muted)" }}>Comprehensive solutions for your digital transformation</p>

      <div className="services-grid">
        {items.map((it, idx) => (
          <ServiceCard key={idx} bg={it.bg} icon={it.icon} title={it.title} text={it.text} to={it.to} />
        ))}
      </div>
    </section>
  )
}
