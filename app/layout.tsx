import type { Metadata } from "next";
import "./globals.css"; //
import SmoothScroll from "@/components/SmoothScroll";
import IntroOverlay from "@/components/IntroOverlay";

export const metadata: Metadata = {
  title: "Olivia's Nightmares | Official Site",
  description: "First-Person Survival Horror Game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-black text-gray-200 antialiased">
        <IntroOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}