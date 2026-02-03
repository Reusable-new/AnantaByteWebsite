import { useEffect, useRef } from "react";

export default function Mission() {
  const statsRef = useRef(null);

  useEffect(() => {
    const container = statsRef.current;
    if (!container || typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const statEls = Array.from(container.querySelectorAll("[data-target]"));
    if (!statEls.length) return;

    const animateValue = (el, target) => {
      const duration = 1200;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value}${el.dataset.suffix || ""}`;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statEls.forEach((el) => {
              if (el.dataset.animated === "true") return;
              el.dataset.animated = "true";
              animateValue(el, Number(el.dataset.target || 0));
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At Ananta Byte, we’re passionate about transforming ideas into
            powerful digital solutions. We believe in using technology to solve
            real-world problems and create meaningful impact.
          </p>

          <div className="about-stats" ref={statsRef}>
            <div className="stat">
              <span data-target="150" data-suffix="+">0</span>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <span data-target="98" data-suffix="%">0</span>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat">
              <span data-target="25" data-suffix="+">0</span>
              <p>Team Members</p>
            </div>
          </div>
        </div>

        <img className="about-visual" src="/image/hero-mockup.svg" alt="Mission dashboard" />
      </div>
    </section>
  );
}
