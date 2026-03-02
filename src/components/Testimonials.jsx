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

import { useState, useEffect } from "react";
import { getTestimonials } from "../utils/firebaseService";

function TestCard({ name, role, text, img, rating }) {
  return (
    <div className="test-card">
      <div className="meta">
        <img src={img || "/image/avatar1.svg"} alt={name} loading="lazy" />
        <div>
          <strong>{name}</strong>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>{role}</div>
        </div>
      </div>
      <div className="stars">{"★".repeat(rating || 5)}</div>
      <p style={{ marginTop: 12, color: "var(--muted)" }}>{text}</p>
    </div>
  )
}

export default function Testimonials() {
  const [items, setItems] = useState([
    { 
      img: "/image/avatar1.svg", 
      name: "Gaurav", 
      role: "UI/UX Work", 
      text: "Clean, modern UI/UX with thoughtful flows that improved usability and user confidence.",
      rating: 5
    },
    { 
      img: "/image/avatar2.svg", 
      name: "Sarah Johnson", 
      role: "CEO, TechStart", 
      text: "AnantaByte delivered our SaaS MVP on time and within budget. Their agile approach kept us aligned throughout development.",
      rating: 5
    },
    { 
      img: "/image/avatar3.svg", 
      name: "Michael Chen", 
      role: "CTO, InnovateLabs", 
      text: "The architecture and implementation was stellar. They helped us scale from 1k to 100k users seamlessly.",
      rating: 5
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const testimonials = await getTestimonials();
      // Use fetched testimonials if available, otherwise use defaults
      if (testimonials.length > 0) {
        setItems(testimonials);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2 style={{ textAlign: "center" }}>Trusted by Startups & Growing Businesses</h2>
      <p style={{ textAlign: "center", color: "var(--muted)" }}>What our clients say about working with us</p>

      <div className="testimonials-viewport" style={{ marginTop: 24 }}>
        <div
          className="testimonials-track"
          style={{ "--card-count": items.length || 1 }}
        >
          {items.length > 0 ? (
            items.concat(items).map((it, idx) => (
              <TestCard 
                key={idx} 
                img={it.image || it.img} 
                name={it.name} 
                role={it.role} 
                text={it.message || it.text}
                rating={it.rating}
              />
            ))
          ) : (
            <TestCard 
              name="No testimonials yet" 
              role="Check back soon" 
              text="Admin can add testimonials from the dashboard" 
              img="/image/avatar1.svg"
            />
          )}
        </div>
      </div>
    </section>
  )
}
