'use client';

import { useEffect, useState } from 'react';

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable body scroll during intro
    document.body.style.overflow = 'hidden';

    // Countdown / Progress logic (2 seconds)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 100 steps * 20ms = 2000ms (2 seconds)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Start fade out after 2.5s

    const mountTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
    }, 3300); // Fully unmount after 3.3s

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(mountTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle vignette red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,7,8,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 text-center space-y-6 px-4 w-full max-w-md">
        {/* Warning Badge */}
        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-horror-brightRed font-black animate-pulse">
          [ Peringatan: Horor Psikologis ]
        </p>

        {/* Flickering Title */}
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-white animate-flicker">
          Olivia&apos;s Nightmares
        </h1>

        {/* Warning Text */}
        <p className="text-neutral-500 max-w-sm mx-auto text-[11px] md:text-xs font-mono uppercase leading-relaxed tracking-wider">
          Mimpi buruk akan dimulai. <br />
          Gunakan headphone untuk sensasi atmosfer terbaik.
        </p>

        {/* Countdown Progress Bar */}
        <div className="w-64 mx-auto space-y-2 pt-6">
          <div className="flex justify-between text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
            <span>Loading subconscious</span>
            <span className="text-horror-brightRed font-bold">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-neutral-900 overflow-hidden relative rounded-full">
            <div 
              className="h-full bg-horror-blood transition-all duration-75 ease-out shadow-[0_0_8px_rgba(102,7,8,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Decorative scanning line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
}
