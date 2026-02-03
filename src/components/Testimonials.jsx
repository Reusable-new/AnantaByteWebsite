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
    { img: "/image/avatar1.svg", name: "Sarah Johnson", role: "CEO, TechStart", text: "Ananta Byte delivered our SaaS platform on time with great quality." },
    { img: "/image/avatar2.svg", name: "Michael Chen", role: "CTO, InnovateLabs", text: "Their architecture and implementation helped us scale fast." },
    { img: "/image/avatar3.svg", name: "Emily Rodriguez", role: "Founder, GrowthCo", text: "Professional, detail-oriented and delivered an excellent product." },
    { img: "/image/avatar1.svg", name: "Aisha Khan", role: "Product Lead, NovaCore", text: "Clear communication and fast delivery made the process smooth." },
    { img: "/image/avatar2.svg", name: "David Park", role: "COO, BrightOps", text: "The team delivered a stable product with great attention to detail." },
    { img: "/image/avatar3.svg", name: "Priya Shah", role: "Founder, LaunchBay", text: "Strong UX and performance improvements boosted our conversions." }
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
