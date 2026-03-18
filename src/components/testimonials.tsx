"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  tag: string;
  initials: string;
  quote: string;
  gradientFrom: string;
  gradientTo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Chen",
    tag: "@shadow_blade",
    initials: "MC",
    quote:
      "NEXUS completely changed how I play online. The latency is insane - I went from 60ms to under 10ms. My K/D ratio literally doubled overnight.",
    gradientFrom: "#6c5ce7",
    gradientTo: "#00d2ff",
  },
  {
    name: "Sarah Williams",
    tag: "@pixel_queen",
    initials: "SW",
    quote:
      "The cross-platform feature is a game changer. I started a session on PC during lunch and finished it on my Switch on the commute home. Seamless.",
    gradientFrom: "#00d2ff",
    gradientTo: "#0cebeb",
  },
  {
    name: "Diego Ramirez",
    tag: "@el_fuego_gamer",
    initials: "DR",
    quote:
      "Been gaming for 15 years and this is the cleanest platform I have ever used. Anti-cheat actually works, community is great, and the UI is gorgeous.",
    gradientFrom: "#ff6b6b",
    gradientTo: "#ffd93d",
  },
  {
    name: "Yuki Tanaka",
    tag: "@neon_samurai",
    initials: "YT",
    quote:
      "Void Runners on NEXUS with ray tracing enabled is breathtaking. I spent the first hour just walking around looking at reflections. 10/10.",
    gradientFrom: "#6c5ce7",
    gradientTo: "#ff6b6b",
  },
  {
    name: "Alex Novak",
    tag: "@ctrl_alt_defeat",
    initials: "AN",
    quote:
      "Their support team resolved my issue in under 5 minutes on a Sunday night. That kind of dedication is why I tell all my friends about NEXUS.",
    gradientFrom: "#0cebeb",
    gradientTo: "#6c5ce7",
  },
  {
    name: "Priya Patel",
    tag: "@starlight_sniper",
    initials: "PP",
    quote:
      "I joined for the free tier and upgraded within a week. The premium features are worth every penny, especially the exclusive tournaments.",
    gradientFrom: "#ffd93d",
    gradientTo: "#ff6b6b",
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-gold)">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const cardWidth = el.scrollWidth / TESTIMONIALS.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveDot(index);
  }

  return (
    <section id="community" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-pixel)] text-lg uppercase tracking-wide sm:text-2xl lg:text-4xl">
            What Gamers <span className="gradient-text">Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Join a community of passionate gamers who love the NEXUS experience.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.tag}
              className="glass-card flex min-w-[260px] shrink-0 snap-center flex-col p-4 sm:min-w-[380px] sm:p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[var(--text-subtle)]">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                activeDot === i
                  ? "w-6 bg-gradient-to-r from-[#6c5ce7] to-[#00d2ff]"
                  : "w-2 bg-[#3a3a5a]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
