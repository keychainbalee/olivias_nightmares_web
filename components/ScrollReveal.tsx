'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayClass?: string; // e.g., 'reveal-delay-100'
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-zoom';
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delayClass = '',
  animationType = 'fade-up'
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05, // Trigger when 5% is visible
        rootMargin: '0px 0px -20px 0px', // Responsive margins
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-${animationType} ${isVisible ? 'reveal-active' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
