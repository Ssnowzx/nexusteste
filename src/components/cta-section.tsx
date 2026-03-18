export default function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(0, 210, 255, 0.15), rgba(12, 235, 235, 0.1))",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute left-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full opacity-20 blur-[100px] sm:h-64 sm:w-64"
        style={{ background: "#6c5ce7" }}
      />
      <div
        className="absolute right-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full opacity-15 blur-[100px] sm:h-64 sm:w-64"
        style={{ background: "#00d2ff" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="glow-text mb-4 font-[var(--font-pixel)] text-lg uppercase tracking-wide sm:mb-6 sm:text-2xl lg:text-4xl">
          Ready to Level Up?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm text-[var(--text-muted)] sm:mb-10 sm:text-base lg:text-lg">
          Join thousands of gamers and start your journey today.
        </p>
        <a
          href="#"
          className="btn-primary text-sm transition-transform hover:scale-105 sm:text-base lg:text-lg"
        >
          Get Started Free
        </a>
        <p className="mt-6 text-sm text-[var(--text-subtle)]">
          No credit card required &bull; Free forever plan
        </p>
      </div>
    </section>
  );
}
