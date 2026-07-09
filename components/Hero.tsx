'use client';

import { useState, useEffect } from 'react';
import { Creepster } from 'next/font/google';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start entrance animations after 2.5s (when intro overlay starts fading out)
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* SPOT GAMBAR BACKGROUND UTAMA */}
      <div className={`absolute inset-0 overflow-hidden mix-blend-multiply transition-opacity duration-1500 ${animate ? 'opacity-40' : 'opacity-0'}`}>
        <img 
          src="/images/NightmaresView.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover animate-hero-zoom"
        />
      </div>
      
      {/* Vignette / Overlay Gelap-Merah */}
      <div className={`absolute inset-0 bg-gradient-to-t from-horror-black via-transparent to-horror-black transition-opacity duration-1500 ${animate ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute inset-0 bg-gradient-to-r from-horror-black/80 via-transparent to-horror-black/80 transition-opacity duration-1500 ${animate ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <p className={`text-horror-brightRed tracking-[0.3em] text-xs md:text-sm font-bold uppercase animate-pulse transition-all duration-1000 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          A Psychological Horror Experience
        </p>
        <h1 className={`${creepster.className} text-6xl md:text-9xl font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-horror-blood uppercase drop-shadow-[0_5px_20px_rgba(102,7,8,0.5)] transition-all duration-1000 delay-200 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Olivia&apos;s Nightmares
        </h1>
        <p className={`text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed transition-all duration-1000 delay-400 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Terjebak di alam bawah sadar yang kelam. Cari kunci rahasia, andalkan insting eksplorasi, dan bangun sebelum ketakutan mengurungmu selamanya.
        </p>
        <div className={`pt-4 transition-all duration-1000 delay-600 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tombol Atas (Dinonaktifkan / Tidak Digunakan) */}
          <button 
            disabled 
            className="px-8 py-3 bg-neutral-900/60 border border-neutral-800/80 text-neutral-500 font-medium tracking-wide uppercase text-sm rounded-sm cursor-not-allowed opacity-50 transition-all duration-300"
          >
            Mainkan di Perangkat Anda
          </button>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center transition-all duration-1000 delay-800 ${animate ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-horror-brightRed to-transparent mx-auto animate-bounce" />
      </div>
    </section>
  );
}