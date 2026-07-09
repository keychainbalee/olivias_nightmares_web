'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.8, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Cinematic exponential out easing
        lerp: 0.06, 
        wheelMultiplier: 1.1,
        touchMultiplier: 1.5,
        syncTouch: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}