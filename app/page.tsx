import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Download />
      
      {/* Footer Sederhana */}
      <footer className="py-8 text-center text-xs text-neutral-600 border-t border-neutral-900 bg-horror-black">
        <p>&copy; {new Date().getFullYear()} Olivia&apos;s Nightmares. All Rights Reserved.</p>
      </footer>
    </main>
  );
}