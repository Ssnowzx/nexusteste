import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import ChatWidget from "@/components/chat-widget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixelFont = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS Gaming | Next-Gen Gaming Platform",
  description:
    "The ultimate platform for gamers. Discover, compete, and conquer with next-generation graphics and immersive gameplay.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pixelFont.variable}`}>
      <body className="min-h-screen bg-[var(--bg-deepest)] text-white font-[var(--font-inter)] antialiased">
        {/* Background Grid */}
        <div className="bg-grid" />
        {/* Pixel Invaders decoration */}
        <svg className="pixel-invader" style={{ top: "18%", left: "48%"}} viewBox="0 0 11 8" fill="rgba(138,138,163,0.5)">
          <rect x="2" y="0" width="1" height="1"/><rect x="8" y="0" width="1" height="1"/>
          <rect x="3" y="1" width="1" height="1"/><rect x="7" y="1" width="1" height="1"/>
          <rect x="2" y="2" width="7" height="1"/>
          <rect x="1" y="3" width="2" height="1"/><rect x="4" y="3" width="3" height="1"/><rect x="8" y="3" width="2" height="1"/>
          <rect x="0" y="4" width="11" height="1"/>
          <rect x="0" y="5" width="1" height="1"/><rect x="2" y="5" width="7" height="1"/><rect x="10" y="5" width="1" height="1"/>
          <rect x="0" y="6" width="1" height="1"/><rect x="2" y="6" width="1" height="1"/><rect x="8" y="6" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/>
          <rect x="3" y="7" width="2" height="1"/><rect x="6" y="7" width="2" height="1"/>
        </svg>
        <svg className="pixel-invader" style={{ top: "72%", left: "48%"}} viewBox="0 0 11 8" fill="rgba(138,138,163,0.5)">
          <rect x="2" y="0" width="1" height="1"/><rect x="8" y="0" width="1" height="1"/>
          <rect x="3" y="1" width="1" height="1"/><rect x="7" y="1" width="1" height="1"/>
          <rect x="2" y="2" width="7" height="1"/>
          <rect x="1" y="3" width="2" height="1"/><rect x="4" y="3" width="3" height="1"/><rect x="8" y="3" width="2" height="1"/>
          <rect x="0" y="4" width="11" height="1"/>
          <rect x="0" y="5" width="1" height="1"/><rect x="2" y="5" width="7" height="1"/><rect x="10" y="5" width="1" height="1"/>
          <rect x="0" y="6" width="1" height="1"/><rect x="2" y="6" width="1" height="1"/><rect x="8" y="6" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/>
          <rect x="3" y="7" width="2" height="1"/><rect x="6" y="7" width="2" height="1"/>
        </svg>
        <div className="relative z-10">
          {children}
        </div>
        <ChatWidget />
      </body>
    </html>
  );
}
