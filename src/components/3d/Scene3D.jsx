import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import { FloatingMesh, FloatingParticles } from './FloatingMesh';

function Scene({ scrollProgress }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#22d3ee" />
      <FloatingParticles />
      <FloatingMesh scrollProgress={scrollProgress} />
      <Preload all />
    </>
  );
}

export function Scene3D({ scrollProgress = 0 }) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className="w-full h-screen bg-gradient-to-b from-[#070a13] via-[#0f1724] to-[#070a13] flex items-center justify-center relative overflow-hidden"
      >
        <div className="relative z-10 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#22d3ee] opacity-40 blur-3xl animate-pulse" />
          <p className="text-[#97a6b7] text-sm">3D content optimized for desktop</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(7,10,19,1) 0%, rgba(15,23,36,0.5) 50%, rgba(7,10,19,1) 100%)',
      }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <Scene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(7,10,19,0.3)]" />
    </div>
  );
}
