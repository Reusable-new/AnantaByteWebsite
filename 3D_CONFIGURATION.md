# 🎨 3D Configuration & Customization Guide

## Environment & Build Configuration

### Vite Configuration for 3D Assets

Edit `vite.config.js` to optimize 3D assets:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // Enable SharedArrayBuffer for better performance
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'animations': ['framer-motion'],
        },
      },
    },
    // Increase chunk size warning threshold for 3D libraries
    chunkSizeWarningLimit: 1000, // 1MB
  },
})
```

## Component Configuration

### Hero3D Settings

File: `src/components/Hero3D.jsx`

```jsx
// Adjust animation timing
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }} // Change to 'false' for repeat on re-enter
  variants={staggerContainer}
>

// Modify scroll progress calculation
const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
```

**Customizable Values:**
- `delay: 0.2` - Initial animation delay
- `duration: 0.8` - Animation speed
- `once: true` - Animate only once or repeat

### Scene3D Settings

File: `src/components/3d/Scene3D.jsx`

```jsx
// Mobile breakpoint (change 768 to your preference)
setIsMobile(window.innerWidth < 768);

// Canvas performance settings
<Canvas
  gl={{
    antialias: true,      // Enable anti-aliasing
    alpha: true,          // Transparent background
    powerPreference: 'high-performance', // GPU preference
  }}
>
```

**Options:**
- `antialias: false` - Better performance on low-end devices
- `powerPreference: 'low-power'` - Use integrated GPU
- `powerPreference: 'high-performance'` - Use dedicated GPU

### Lighting Configuration

File: `src/components/3d/Scene3D.jsx`

```jsx
// Adjust lighting
<ambientLight intensity={0.6} />        // Overall brightness
<pointLight position={[10, 10, 10]} intensity={0.8} />  // Key light
<pointLight position={[-10, -10, 10]} intensity={0.4} color="#22d3ee" />  // Fill light
```

**Parameters:**
- `intensity`: 0-1 (higher = brighter)
- `position`: [x, y, z] coordinates
- `color`: Hex or CSS color

### FloatingMesh Settings

File: `src/components/3d/FloatingMesh.jsx`

```jsx
// Rotation speed (lower = slower)
groupRef.current.rotation.x += 0.0002;  // X-axis
groupRef.current.rotation.y += 0.0003;  // Y-axis
groupRef.current.rotation.z += 0;        // Z-axis (add if needed)

// Float animation
<Float
  speed={2}              // Float animation speed
  rotationIntensity={0.5}  // Overall rotation amount
  floatIntensity={1}     // Vertical bob amount
>

// Scroll-based scale
const scale = 1 + scrollProgress * 0.3;  // 1.0 to 1.3 scale range

// Color change based on scroll
const hue = scrollProgress * 0.5;  // 0 to 0.5 (purple to cyan)
meshRef.current.material.emissive.setHSL(hue, 1, 0.3);
```

**Customization:**
- Rotation values: `0.0002` to `0.0005` (slower) to `0.001` (faster)
- Scale range: Change `0.3` multiplier to `0.5` (more) or `0.1` (less)
- Color hue: `0` to `1` for different color ranges

### Particle System

File: `src/components/3d/FloatingMesh.jsx`

```jsx
// Particle count (50 particles in example)
const particles = Array.from({ length: 50 }, ...

// Adjust particle distribution
x: (Math.random() - 0.5) * 8,    // -4 to 4 range (change 8 to adjust)
y: (Math.random() - 0.5) * 8,
z: (Math.random() - 0.5) * 8,

// Particle size
size: Math.random() * 0.15,  // 0 to 0.15 size (increase for larger)
```

**Performance Impact:**
- 50 particles: Good performance
- 100+ particles: Noticeable FPS drop on mobile
- 20 particles: Very smooth on all devices

## Style & Theme Customization

### CSS Variables

Edit `src/assets/style.css` to adjust theme colors:

```css
:root{
  --bg:#070a13;              /* Background color */
  --card:#0f1724;            /* Card backgrounds */
  --muted:#97a6b7;           /* Muted text */
  --text:#edf5ff;            /* Primary text */
  --accent1:#7c3aed;         /* Purple */
  --accent2:#22d3ee;         /* Cyan */
  --glass: rgba(255,255,255,0.03);
  --glass-border: rgba(255,255,255,0.06);
}
```

### Animation Effects

File: `src/styles/3d-effects.css`

```css
/* Adjust float animation timing */
@keyframes float-up {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }  /* Change -20px for different height */
}

/* Modify pulse glow speed */
.pulse-glow {
  animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;  /* Change 2s */
}

/* Adjust shimmer speed */
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
.text-reveal::after {
  animation: shimmer 2s infinite;  /* Change 2s for speed */
}
```

## Mobile Optimization

### Adjust Mobile Breakpoint

In `src/components/3d/Scene3D.jsx`:

```jsx
// Current: switches to mobile at 768px
setIsMobile(window.innerWidth < 768);

// More aggressive:
setIsMobile(window.innerWidth < 1024);

// More conservative:
setIsMobile(window.innerWidth < 600);
```

### Reduce Particles on Mobile

In `src/components/3d/FloatingMesh.jsx`:

```jsx
// Inside Scene component, add:
const particleCount = isMobile ? 20 : 50;

// Then use:
const particles = Array.from({ length: particleCount }, ...
```

### Mobile Fallback Design

File: `src/components/3d/Scene3D.jsx`

```jsx
if (isMobile) {
  return (
    <div className="...">
      <div className="w-40 h-40 mx-auto mb-8 rounded-full 
        bg-gradient-to-br from-[#7c3aed] to-[#22d3ee] 
        opacity-40 blur-3xl animate-pulse" />
    </div>
  );
}
```

**Customize fallback:**
- Change `w-40 h-40` for different sizes
- Update colors: `from-[#color] to-[#color]`
- Adjust `blur-3xl` for glow intensity

## Performance Tuning

### Reduce Quality for Better Performance

```jsx
// FloatingMesh.jsx - Reduce geometry quality
<icosahedronGeometry args={[1.5, 3]} />  // Was 5 (more detail = slower)

// Scene3D.jsx - Disable antialiasing
<Canvas gl={{ antialias: false }}>
```

### Lazy Load 3D Components

```jsx
// In App.jsx
const Hero3D = lazy(() => import('./components/Hero3D'));

// Wrap in Suspense
<Suspense fallback={<LoadingFallback />}>
  <Hero3D />
</Suspense>
```

### Monitor Performance

```jsx
// Add to any component for FPS monitoring
useEffect(() => {
  const fpsMonitor = setInterval(() => {
    console.log('FPS:', window.performance.now());
  }, 1000);
  return () => clearInterval(fpsMonitor);
}, []);
```

## Advanced: Add 3D Models

### Import GLTF/GLB Models

```jsx
// Install: npm install @react-three/fiber gltfjsx
// Convert model: npx gltfjsx model.glb

import Model from './Model';

function Scene() {
  return <Model />;
}
```

### Add Physics

```jsx
// Install: npm install @react-three/cannon
import { Physics, useBox } from '@react-three/cannon';

function PhysicsObject() {
  const [ref] = useBox(() => ({ mass: 1 }));
  return <mesh ref={ref}></mesh>;
}
```

## Color Schemes

### Current (Purple & Cyan)
```
Primary: #7c3aed (Purple)
Secondary: #22d3ee (Cyan)
Background: #070a13
Card: #0f1724
```

### Alternative: Orange & Blue
```
Primary: #f97316
Secondary: #0ea5e9
Background: #0f0f0f
Card: #1a1a1a
```

### Alternative: Pink & Green
```
Primary: #ec4899
Secondary: #10b981
Background: #0d0013
Card: #1a0033
```

## Deployment Optimizations

### Before Deploying

1. **Build Analysis**
   ```bash
   npm run build
   # Check dist folder size
   ls -lh dist/
   ```

2. **Performance Check**
   ```bash
   npm run preview
   # Use Lighthouse (DevTools > Lighthouse tab)
   ```

3. **Mobile Test**
   - Use real device or DevTools mobile simulation
   - Check performance metrics
   - Verify 3D fallback works

### Environment Variables

Create `.env` file:

```
VITE_SITE_URL=https://yourdomain.com
VITE_3D_ENABLED=true
VITE_MOBILE_BREAKPOINT=768
```

Use in code:

```jsx
const is3DEnabled = import.meta.env.VITE_3D_ENABLED !== 'false';
const mobileBreakpoint = parseInt(import.meta.env.VITE_MOBILE_BREAKPOINT);
```

## Troubleshooting Configuration

### WebGL Not Available
```jsx
// Check for WebGL support
const canvas = document.createElement('canvas');
const webgl = !!(window.WebGLRenderingContext && 
  (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
```

### High DPI Scaling Issues
```jsx
// In Scene3D.jsx Canvas
<Canvas
  dpr={[1, 2]}  // Limit DPI scaling
  gl={{ antialias: true }}
>
```

### Memory Leaks
```jsx
// Always clean up in useEffect
useEffect(() => {
  const handleScroll = () => { /* ... */ };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

**Need Help?** Check component inline comments or refer to `QUICKSTART_3D.md` for quick answers.
