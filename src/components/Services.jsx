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

function ServiceCard({ bg, icon, title, text }) {
  return (
    <div className="service-card">
      <div className="icon" style={{ background: bg }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ marginTop: 6, color: "var(--muted)", fontSize: 14 }}>{text}</p>
    </div>
  )
}

export default function Services() {
  const items = [
    { bg: "linear-gradient(90deg,#3b82f6,#60a5fa)", icon: "🌐", title: "Web Development", text: "Modern, responsive websites and web applications." },
    { bg: "linear-gradient(90deg,#06b6d4,#22d3ee)", icon: "📱", title: "Mobile App Development", text: "Native and cross-platform apps for iOS and Android." },
    { bg: "linear-gradient(90deg,#ec4899,#f472b6)", icon: "🤖", title: "AI Chatbot Development", text: "Intelligent chatbots for support, sales, and automation." },
    { bg: "linear-gradient(90deg,#38bdf8,#0ea5e9)", icon: "☁️", title: "SaaS Application Development", text: "Scalable SaaS platforms with secure multi-tenant architecture." },
    { bg: "linear-gradient(90deg,#a855f7,#7c3aed)", icon: "🎨", title: "UI/UX Design", text: "User-centered design that improves engagement and conversion." },
    { bg: "linear-gradient(90deg,#22c55e,#4ade80)", icon: "🧪", title: "QA & Testing", text: "Comprehensive testing to ensure quality and reliability." }
  ]

  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <p style={{ color: "var(--muted)" }}>Comprehensive solutions for your digital transformation</p>

      <div className="services-grid">
        {items.map((it, idx) => (
          <ServiceCard key={idx} bg={it.bg} icon={it.icon} title={it.title} text={it.text} />
        ))}
      </div>
    </section>
  )
}
