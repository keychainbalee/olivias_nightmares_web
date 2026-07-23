import ScrollReveal from "@/components/ScrollReveal";

export default function Download() {
  return (
    <section className="py-24 bg-horror-black border-t border-horror-blood/20 px-4 relative overflow-hidden">
      {/* Decorative red glow in the background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-horror-blood/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Mockup Image */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 w-full">
          <ScrollReveal animationType="fade-left" delayClass="reveal-delay-200" className="w-full">
            <div className="relative group max-w-lg w-full overflow-hidden border border-horror-blood/30 rounded-lg bg-neutral-900 aspect-[16/9] shadow-[0_0_30px_rgba(102,7,8,0.2)] hover:border-horror-brightRed/50 transition-all duration-500 mx-auto">
              <img 
                src="/images/Gameplay1.png" 
                alt="Mobile Gameplay Mockup" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horror-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-gray-400 bg-black/60 backdrop-blur-sm p-3 rounded border border-white/5">
                <span className="text-horror-brightRed font-bold block mb-1">// APK MOBILE PREVIEW</span>
                Tampilan gameplay First-Person Survival Horror di perangkat Android.
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Text & Download Button */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <ScrollReveal animationType="fade-right" className="space-y-6">
            <div className="space-y-3">
              <span className="text-horror-brightRed text-xs font-bold tracking-widest uppercase block">// Mobile Edition</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
                Bawa Mimpi Buruk <br/>
                <span className="text-horror-blood">Ke Mana Saja</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              Kini Olivia&apos;s Nightmares tersedia untuk perangkat mobile. Rasakan ketakutan psikologis yang mencekam langsung dari genggaman tangan Anda. Unduh versi APK resmi secara gratis dan uji seberapa lama Anda bisa bertahan dalam kegelapan.
            </p>

            <div className="pt-4">
              <a 
                href="https://drive.google.com/drive/folders/1uhXA05YPjx1kZLbnPXekaKf4Y0AsXWRB?usp=sharing" 
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-horror-blood border border-horror-brightRed/40 text-white font-medium tracking-wide uppercase text-sm rounded-sm hover:bg-horror-brightRed hover:shadow-[0_0_25px_rgba(186,24,27,0.7)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
                </svg>
                Unduh APK Sekarang (V 1.1.0)
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
