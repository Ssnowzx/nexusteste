"use client";

const FEATURES = [
  {
    title: "Ultra Low Latency",
    description:
      "Experience sub-millisecond response times with our edge-optimized infrastructure. Every click, every move, instantly reflected.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 14H28L22 20L24 30L16 24L8 30L10 20L4 14H12L16 4Z" stroke="url(#featGrad1)" strokeWidth="2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="featGrad1" x1="4" y1="4" x2="28" y2="30">
            <stop stopColor="#6c5ce7" />
            <stop offset="1" stopColor="#00d2ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Ray Tracing Ready",
    description:
      "Photorealistic lighting and reflections powered by real-time ray tracing. See every detail as the developers intended.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6V2M16 30v-4M6 16H2M30 16h-4M8.93 8.93L6.1 6.1M25.9 25.9l-2.83-2.83M8.93 23.07L6.1 25.9M25.9 6.1l-2.83 2.83" stroke="url(#featGrad2)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="6" stroke="url(#featGrad2)" strokeWidth="2" />
        <defs>
          <linearGradient id="featGrad2" x1="2" y1="2" x2="30" y2="30">
            <stop stopColor="#6c5ce7" />
            <stop offset="1" stopColor="#00d2ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Anti-Cheat Shield",
    description:
      "Military-grade anti-cheat protection keeps every match fair. Play with confidence knowing the competition is clean.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v8c0 7.73 5.12 14.96 12 17 6.88-2.04 12-9.27 12-17V8L16 3z" stroke="url(#featGrad3)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16l3 3 5-6" stroke="url(#featGrad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="featGrad3" x1="4" y1="3" x2="28" y2="28">
            <stop stopColor="#6c5ce7" />
            <stop offset="1" stopColor="#00d2ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    description:
      "Play anywhere, on any device. Seamless cross-platform support means your progress follows you from PC to console to mobile.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="url(#featGrad4)" strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="6" ry="12" stroke="url(#featGrad4)" strokeWidth="2" />
        <path d="M4 16h24M16 4v24" stroke="url(#featGrad4)" strokeWidth="2" />
        <defs>
          <linearGradient id="featGrad4" x1="4" y1="4" x2="28" y2="28">
            <stop stopColor="#6c5ce7" />
            <stop offset="1" stopColor="#00d2ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-pixel)] text-lg uppercase tracking-wide sm:text-2xl lg:text-4xl">
            Why Gamers Choose <span className="gradient-text">NEXUS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Built from the ground up for performance, security, and the best
            gaming experience possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card fade-in-up p-5 transition-transform hover:scale-[1.02] sm:p-8"
              style={{
                boxShadow: "0 0 0 0 rgba(108, 92, 231, 0)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(108, 92, 231, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 0 rgba(108, 92, 231, 0)";
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
