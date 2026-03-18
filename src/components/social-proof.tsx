const STUDIOS = [
  "VOID Studios",
  "QUANTUM Games",
  "NEXGEN Interactive",
  "PULSE Entertainment",
  "CIPHER Digital",
  "APEX Gaming",
  "STORM Works",
  "NOVA Productions",
];

function StudioLogo({ name }: { name: string }) {
  return (
    <span className="whitespace-nowrap text-base font-bold tracking-widest text-[var(--text-subtle)] transition-colors hover:text-white sm:text-xl lg:text-2xl">
      {name}
    </span>
  );
}

export default function SocialProof() {
  const doubled = [...STUDIOS, ...STUDIOS];

  return (
    <section className="relative overflow-hidden py-16">
      {/* Top gradient line */}
      <div className="mx-auto mb-12 h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent" />

      {/* Terminal card header */}
      <div className="mx-auto mb-10 max-w-xs overflow-hidden rounded-lg border border-[var(--glass-border)]" style={{ background: "var(--bg-mid)" }}>
        <div className="flex items-center gap-2 border-b border-[var(--glass-border)] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="px-4 py-3 text-center font-[var(--font-pixel)] text-xs uppercase tracking-widest text-[var(--text-muted)]">
          trusted_by.exe
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050510] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050510] to-transparent sm:w-24" />

        <div className="overflow-hidden">
          <div className="carousel-track" style={{ gap: "48px" }}>
            {doubled.map((name, i) => (
              <StudioLogo key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="mx-auto mt-12 h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/20 to-transparent" />
    </section>
  );
}
