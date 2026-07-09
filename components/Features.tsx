import ScrollReveal from "@/components/ScrollReveal";

export default function Features() {
  const coreFeatures = [
    {
      title: "Atmosfer Horror Kuat",
      desc: "Pencahayaan minim dan jarak pandang terbatas dirancang khusus untuk memicu kepanikan dan rasa terdesak secara konstan."
    },
    {
      title: "Audio yang Mencekam",
      desc: "Setiap elemen audio menyatu dengan tema pelarian, menuntut pemain cermat memperhatikan detail suara dan suasana ruangan."
    },
    {
      title: "Natural Jump Scare",
      desc: "Fokus pada ketegangan psikologis dari atmosfer atau entitas misterius, bukan sekadar elemen mengagetkan yang murahan."
    }
  ];

  const delays = ["reveal-delay-100", "reveal-delay-200", "reveal-delay-300"];

  return (
    <section className="py-24 bg-gradient-to-b from-horror-black via-horror-darkRed/20 to-horror-black px-4 border-t border-horror-blood/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <ScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-horror-brightRed text-xs font-bold tracking-widest uppercase">Core Experience</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Arah Pengembangan Utama</h2>
        </ScrollReveal>

        {/* 3 Kolom Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreFeatures.map((feat, idx) => (
            <ScrollReveal key={idx} animationType="fade-zoom" delayClass={delays[idx]}>
              <div className="bg-gradient-to-br from-neutral-900 to-horror-black p-8 border border-neutral-800 hover:border-horror-blood/40 rounded-sm transition-all duration-300 h-full group">
                <div className="text-horror-brightRed font-mono text-xs mb-6 tracking-widest group-hover:translate-x-1 transition-transform">
                  // SYSTEM_CORE_0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">{feat.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* SPOT GAMBAR LANDSCAPE (SCREENSHOT GAMEPLAY 2) */}
        <ScrollReveal animationType="fade-zoom" delayClass="reveal-delay-200">
          <div className="relative overflow-hidden border border-horror-blood/20 rounded-sm bg-neutral-900 aspect-[21/9] w-full mt-12">
            <img 
              src="/images/NightmaresView.jpg" 
              alt="Gameplay Screenshot 2" 
              className="absolute inset-0 w-full h-full grayscale object-cover filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-horror-black via-transparent to-horror-black/50" />
            <div className="absolute bottom-6 left-6 md:left-12">
              <h4 className="text-sm md:text-lg font-bold text-white uppercase">Kewaspadaan Adalah Insting Terbaik</h4>
              <p className="text-[11px] md:text-xs text-gray-400 max-w-md font-light hidden sm:block">Gunakan intuisi eksplorasi Anda untuk mendeteksi ancaman di dalam kegelapan.</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}