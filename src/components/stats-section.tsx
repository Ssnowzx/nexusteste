const STATS = [
  { value: "50K+", label: "Active Players" },
  { value: "2M+", label: "Games Played" },
  { value: "150+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="fade-in-up text-center">
            <p className="gradient-text font-[var(--font-pixel)] text-2xl uppercase tracking-wide sm:text-3xl lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)] sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
