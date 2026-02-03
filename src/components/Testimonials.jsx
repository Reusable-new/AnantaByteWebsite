// import React from 'react'

// function TestCard({name, role, text, img}){
//   return (
//     <div className="test-card">
//       <div className="meta">
//         <img src={img} alt={name} />
//         <div>
//           <strong>{name}</strong>
//           <div style={{fontSize:12, color:'var(--muted)'}}>{role}</div>
//         </div>
//       </div>
//       <div className="stars">★★★★★</div>
//       <p style={{marginTop:12,color:'var(--muted)'}}>{text}</p>
//     </div>
//   )
// }

// export default function Testimonials(){
//   return (
//     <section className="testimonials reveal">
//       <h2 style={{textAlign:'center'}}>Trusted by Startups & Growing Businesses</h2>
//       <p style={{textAlign:'center', color:'var(--muted)'}}>What our clients say about working with us</p>

//       <div className="test-grid" style={{marginTop:24}}>
//         <TestCard img={'/image/avatar1.svg'} name="Sarah Johnson" role="CEO, TechStart" text="Ananta Byte delivered our SaaS platform on time with great quality." />
//         <TestCard img={'/image/avatar2.svg'} name="Michael Chen" role="CTO, InnovateLabs" text="Their architecture and implementation helped us scale fast." />
//         <TestCard img={'/image/avatar3.svg'} name="Emily Rodriguez" role="Founder, GrowthCo" text="Professional, detail-oriented and delivered an excellent product." />
//       </div>
//     </section>
//   )
// }

function TestCard({ name, role, text, img }) {
  return (
    <div className="test-card">
      <div className="meta">
        <img src={img} alt={name} />
        <div>
          <strong>{name}</strong>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>{role}</div>
        </div>
      </div>
      <div className="stars">★★★★★</div>
      <p style={{ marginTop: 12, color: "var(--muted)" }}>{text}</p>
    </div>
  )
}

export default function Testimonials() {
  const items = [
    { img: "/image/avatar1.svg", name: "Gaurav", role: "UI/UX work", text: "Clean, modern UI/UX with thoughtful flows that improved usability and user confidence." },
    { img: "/image/avatar2.svg", name: "Guarav", role: "SalonIQ", text: "Delivered a polished SalonIQ experience with smooth booking and clear service journeys." },
    { img: "/image/avatar3.svg", name: "Mohit", role: "QA report", text: "Detailed QA reporting that caught edge cases early and raised overall product quality." }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 style={{ textAlign: "center" }}>Trusted by Startups & Growing Businesses</h2>
      <p style={{ textAlign: "center", color: "var(--muted)" }}>What our clients say about working with us</p>

      <div className="testimonials-viewport" style={{ marginTop: 24 }}>
        <div
          className="testimonials-track"
          style={{ "--card-count": items.length }}
        >
          {items.concat(items).map((it, idx) => (
            <TestCard key={idx} img={it.img} name={it.name} role={it.role} text={it.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
