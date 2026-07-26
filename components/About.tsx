import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-horror-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Deskripsi Teks */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <ScrollReveal animationType="fade-left" className="space-y-8">
            <div className="space-y-3">
              <span className="text-horror-brightRed text-xs font-bold tracking-widest uppercase block">The Pitch</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
                Masuk Ke Dalam <br/>
                <span className="text-horror-blood">Alam Bawah Sadar</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-light">
              <p className="border-l-2 border-horror-blood pl-4 italic bg-horror-darkRed/10 py-2 text-gray-300">
                &quot;Olivia’s Nightmares dibuat sebagai game horor yang berfokus pada psikologis yang terganggu dan nuansa menegangka. Pemain akan masuk ke dalam alam bawah sadar karakter bernama Olivia yang dipenuhi oleh ketakutan.&quot;
              </p>
              <p>
                Sebagai game <strong className="text-white font-medium">First-Person Survival Horror</strong>, Anda harus menjelajahi area mimpi buruk yang menegangkan untuk mencari beberapa kunci rahasia yang merupakan satu-satunya jalan untuk membuka pintu keluar dan terbangun.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* SPOT GAMBAR PORTRAIT (SCREENSHOT GAMEPLAY 1) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <ScrollReveal animationType="fade-right" delayClass="reveal-delay-200">
            <div className="relative group overflow-hidden border border-horror-blood/30 rounded-sm bg-neutral-900 aspect-[4/5] w-full red-glow">
              <img 
                src="/images/Gambar1.jpg" 
                alt="Gameplay Screenshot 1" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horror-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] text-horror-brightRed font-mono uppercase tracking-widest block mb-1">Eksplorasi ruang kegelapan murni dengan visibilitas terbatas.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}