"use client";

const GAMES = [
  {
    title: "Void Runners",
    genre: "Action RPG",
    rating: 4.8,
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    accent: "#6c5ce7",
  },
  {
    title: "Quantum Siege",
    genre: "Strategy",
    rating: 4.6,
    gradient: "from-cyan-900 via-teal-800 to-emerald-900",
    accent: "#00d2ff",
  },
  {
    title: "Cyber Dawn",
    genre: "Open World",
    rating: 4.9,
    gradient: "from-rose-900 via-red-800 to-orange-900",
    accent: "#ff6b6b",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < full ? "#ffd93d" : i === full && hasHalf ? "url(#halfStar)" : "#3a3a5a"}>
          {i === full && hasHalf && (
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="#ffd93d" />
                <stop offset="50%" stopColor="#3a3a5a" />
              </linearGradient>
            </defs>
          )}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-[var(--text-muted)]">{rating}</span>
    </div>
  );
}

export default function GameShowcase() {
  return (
    <section id="games" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-pixel)] text-lg uppercase tracking-wide sm:text-2xl lg:text-4xl">
            Featured <span className="gradient-text">Games</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Dive into our most popular titles, handpicked for the best experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {GAMES.map((game) => (
            <div
              key={game.title}
              className="fade-in-up group"
              style={{ perspective: "800px" }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-[var(--glass-border)] transition-transform duration-300 group-hover:rotate-x-2 group-hover:rotate-y-2 group-hover:scale-[1.02]"
                style={{
                  transformStyle: "preserve-3d",
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0) rotateX(0) scale(1)";
                }}
              >
                {/* Gradient border glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${game.accent}40, transparent, ${game.accent}20)`,
                  }}
                />

                {/* Image placeholder */}
                <div className={`h-40 w-full bg-gradient-to-br ${game.gradient} sm:h-48 lg:h-56`} />

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: `${game.accent}20`,
                        color: game.accent,
                      }}
                    >
                      {game.genre}
                    </span>
                  </div>

                  <StarRating rating={game.rating} />

                  <button className="btn-primary mt-4 w-full text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
