// import React from 'react'

// export default function CTA(){
//   return (
//     <div className="cta-band reveal">
//       <h3>Ready to Build Your Next Product?</h3>
//       <p>Let's turn your vision into reality with our expert development team.</p>
//       <div style={{marginTop:12}}>
//         <button className="btn-primary">Start Your Project Today</button>
//       </div>
//     </div>
//   )
// }

export default function CTA(){
  return (
    <div className="cta-band">
      <h3>Ready to Build Your Next Product?</h3>
      <p>Let's turn your vision into reality with our expert development team.</p>
      <div style={{marginTop:12}}>
        <a className="btn-primary" href="#contact">Start Your Project Today</a>
      </div>
    </div>
  )
}
