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

const items = [
  { q: "What services does Ananta Byte offer?", a: "We offer web development, mobile apps, SaaS, AI chatbots, UI/UX and more." },
  { q: "Do you build custom SaaS products?", a: "Yes — we design scalable multi-tenant SaaS systems and subscription flows." },
  { q: "Can you integrate AI chatbots?", a: "Absolutely. We build NLP-based chatbots that integrate with sites and CRMs." },
  { q: "What is your development process?", a: "We follow iterative, Agile-friendly sprints with clear milestones and delivery." }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq-section">
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      <p style={{ textAlign: "center", color: "var(--muted)" }}>Everything you need to know about our services</p>

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
