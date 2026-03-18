"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Games", href: "#games" },
  { label: "Features", href: "#features" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="8" width="24" height="14" rx="4" stroke="url(#navGrad)" strokeWidth="2" />
            <circle cx="9" cy="15" r="2" fill="url(#navGrad)" />
            <circle cx="19" cy="15" r="2" fill="url(#navGrad)" />
            <rect x="12" y="13" width="4" height="2" rx="1" fill="url(#navGrad)" />
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#6c5ce7" />
                <stop offset="1" stopColor="#00d2ff" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-[var(--font-pixel)] text-sm uppercase tracking-wide text-white">NEXUS</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="uppercase text-xs tracking-widest text-[var(--text-muted)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#" className="btn-primary hidden text-sm md:inline-flex">
          Launch Game
        </a>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 transform border-l border-white/5 bg-[#0a0a1f]/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="uppercase text-sm tracking-widest text-[var(--text-muted)] transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="btn-primary mt-4 w-full text-center text-sm">
              Launch Game
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
