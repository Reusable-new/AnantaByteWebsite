import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function Hero3D() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when element is at bottom, 1 when at top
      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden" id="home">
      {/* CSS 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a0a3e] to-[#0f0520]">
        {/* Animated background orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#22d3ee] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* CSS 3D Cube that rotates with scroll */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-30"
          style={{
            perspective: '1000px',
          }}
        >
          <div
            style={{
              width: '200px',
              height: '200px',
              transformStyle: 'preserve-3d',
              transform: `rotateX(${scrollProgress * 360}deg) rotateY(${scrollProgress * 180}deg)`,
              transition: 'transform 0.1s linear',
            }}
          >
            {/* Cube faces */}
            {[
              { transform: 'rotateY(0deg) translateZ(100px)', color: '#7c3aed' },
              { transform: 'rotateY(180deg) translateZ(100px)', color: '#22d3ee' },
              { transform: 'rotateY(90deg) translateZ(100px)', color: '#ec4899' },
              { transform: 'rotateY(-90deg) translateZ(100px)', color: '#06b6d4' },
              { transform: 'rotateX(90deg) translateZ(100px)', color: '#a855f7' },
              { transform: 'rotateX(-90deg) translateZ(100px)', color: '#0891b2' },
            ].map((face, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  backgroundColor: face.color,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transform: face.transform,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(124,58,237,0.05) 25%, rgba(124,58,237,0.05) 26%, transparent 27%, transparent 74%, rgba(124,58,237,0.05) 75%, rgba(124,58,237,0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(124,58,237,0.05) 25%, rgba(124,58,237,0.05) 26%, transparent 27%, transparent 74%, rgba(124,58,237,0.05) 75%, rgba(124,58,237,0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <motion.div
          className="text-center px-4 md:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-[#7c3aed] bg-[rgba(124,58,237,0.1)]"
            variants={fadeInUp}
          >
            <span className="text-[#22d3ee] text-sm font-semibold">🚀 3D Interactive Experience</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-7xl font-900 text-white mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
            style={{
              backgroundImage: 'linear-gradient(135deg, #edf5ff 0%, #22d3ee 50%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Build Tomorrow's
            <br />
            Digital Products
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-[#97a6b7] max-w-2xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Experience the future of web development with cutting-edge 3D design, immersive interactions, and
            next-generation technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center" variants={fadeInUp}>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              className="px-8 py-4 bg-gradient-to-r from-[#7c3aed] to-[#22d3ee] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-[#7c3aed] transition-all duration-300 transform hover:scale-105 pointer-events-auto"
            >
              Start Your Project
            </button>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-[#22d3ee] text-[#22d3ee] font-bold rounded-lg hover:bg-[rgba(34,211,238,0.1)] transition-all duration-300 pointer-events-auto"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#97a6b7] text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-[#22d3ee]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
