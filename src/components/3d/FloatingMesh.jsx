import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingMesh({ scrollProgress }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;

    // Slow rotation on idle
    groupRef.current.rotation.x += 0.0002;
    groupRef.current.rotation.y += 0.0003;

    // Color change based on scroll
    const hue = scrollProgress * 0.5; // 0 to 0.5 (purple to cyan)
    meshRef.current.material.emissive.setHSL(hue, 1, 0.3);
    meshRef.current.material.color.setHSL(hue, 0.8, 0.5);

    // Scale based on scroll
    const scale = 1 + scrollProgress * 0.3;
    meshRef.current.scale.set(scale, scale, scale);

    // Position shift based on scroll
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + scrollProgress * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main sphere */}
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
          <icosahedronGeometry args={[1.5, 5]} />
          <meshPhongMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            wireframe={false}
            shininess={100}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
          <icosahedronGeometry args={[1.5, 5]} />
          <meshBasicMaterial color="#22d3ee" wireframe={true} transparent opacity={0.3} />
        </mesh>

        {/* Glow effect */}
        <mesh position={[0, 0, 0]} scale={[1.1, 1.1, 1.1]}>
          <icosahedronGeometry args={[1.5, 5]} />
          <meshBasicMaterial color="#7c3aed" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export function FloatingParticles() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0001;
      groupRef.current.rotation.y += 0.0002;
    }
  });

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 8,
    y: (Math.random() - 0.5) * 8,
    z: (Math.random() - 0.5) * 8,
    size: Math.random() * 0.15,
  }));

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial
            color={particle.id % 2 === 0 ? '#7c3aed' : '#22d3ee'}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
