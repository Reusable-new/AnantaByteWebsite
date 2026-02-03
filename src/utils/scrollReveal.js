// Simple scroll reveal using IntersectionObserver
export function initScrollReveal(){
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },{threshold:0.12})

  document.querySelectorAll('.reveal').forEach(el=> observer.observe(el))
}

// initialize on DOMContentLoaded
if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initScrollReveal)
}else{
  initScrollReveal()
}