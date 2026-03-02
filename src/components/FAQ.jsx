// import React, {useState} from 'react'

// const items = [
//   {q:'What services does Ananta Byte offer?', a:'We offer web development, mobile apps, SaaS, AI chatbots, UI/UX and more.'},
//   {q:'Do you build custom SaaS products?', a:'Yes — we design scalable multi-tenant SaaS systems and subscription flows.'},
//   {q:'Can you integrate AI chatbots?', a:'Absolutely. We build NLP-based chatbots that integrate with sites and CRMs.'},
//   {q:'What is your development process?', a:'We follow iterative, Agile-friendly sprints with clear milestones and delivery.'}
// ]

// export default function FAQ(){
//   const [open, setOpen] = useState(null)
//   return (
//     <section className="faq-section reveal">
//       <h2 style={{textAlign:'center'}}>Frequently Asked Questions</h2>
//       <p style={{textAlign:'center', color:'var(--muted)'}}>Everything you need to know about our services</p>

//       <div style={{maxWidth:800, margin:'20px auto'}}>
//         {items.map((it,i)=> (
//           <div className="faq-item" key={i} onClick={()=>setOpen(open===i?null:i)}>
//             <h4>
//               {it.q}
//               <span>{open===i? '−' : '+'}</span>
//             </h4>
//             {open===i && <div className="faq-answer">{it.a}</div>}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

import { useState } from "react";

const defaultItems = [
  { q: "What makes AnantaByte different from other IT services companies?", a: "We combine deep technical expertise with a customer-centric approach, ensuring every solution is tailored to your business goals. Our agile process, transparent communication, and commitment to quality set us apart in delivering MVPs to enterprise-grade solutions." },
  { q: "How do you ensure the security of my data and application?", a: "We follow industry best practices including data encryption, secure coding standards, regular vulnerability assessments, and compliance with GDPR and other standards to protect your data and applications." },
  { q: "Can you help with both MVP development and scaling to enterprise level?", a: "Absolutely! We specialize in building MVPs for startups and scaling them into robust, enterprise-grade solutions as your business grows. Our architecture is designed for scalability from day one." },
  { q: "What is your project delivery process?", a: "Our process includes discovery, planning, agile development, rigorous testing, deployment, and ongoing support. We keep you involved at every stage with regular demos and transparent communication." },
  { q: "Do you offer post-launch support and maintenance?", a: "Yes—we provide comprehensive post-launch support including monitoring, updates, bug fixes, feature enhancements, and maintenance to ensure your product's continued success and performance." }
]

export default function FAQ({ items = defaultItems, title = "Frequently Asked Questions", subtitle = "Everything you need to know about our services" }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq-section">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p style={{ textAlign: "center", color: "var(--muted)" }}>{subtitle}</p>

      <div style={{ maxWidth: 800, margin: "20px auto" }}>
        {items.map((it, i) => (
          <div className="faq-item" key={i} onClick={() => setOpen(open === i ? null : i)}>
            <h4>
              {it.q}
              <span>{open === i ? "−" : "+"}</span>
            </h4>
            {open === i && <div className="faq-answer">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
