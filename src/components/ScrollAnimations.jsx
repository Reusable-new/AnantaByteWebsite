import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.2, 0.9, 0.2, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const y = rect.top + scrollY;

      ref.current.style.transform = `translateY(${(scrollY - y) * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={ref}>{children}</div>;
}

export function ScrollRevealText({ children, stagger = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.1 : 0,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.9, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {typeof children === 'string'
        ? children.split(' ').map((word, i) => (
            <motion.span key={i} variants={itemVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))
        : children}
    </motion.div>
  );
}
