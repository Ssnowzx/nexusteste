"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does NEXUS cost?",
    answer:
      "NEXUS offers a free tier with access to 100+ games. Our Pro plan at $9.99/month unlocks the full library, exclusive tournaments, and priority matchmaking. Enterprise plans for teams and studios are available on request.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "NEXUS runs on Windows, macOS, Linux, PlayStation 5, Xbox Series X/S, Nintendo Switch, iOS, and Android. Cross-save and cross-play are supported across all platforms.",
  },
  {
    question: "How does multiplayer matchmaking work?",
    answer:
      "Our AI-powered matchmaking system analyzes skill level, connection quality, and play style to find the most balanced and enjoyable matches. Average queue times are under 15 seconds.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "For PC: 4-core CPU, 8GB RAM, GTX 1060 or equivalent, 50GB storage. For ray tracing: RTX 3060 or equivalent recommended. Mobile: iOS 15+ or Android 12+ with at least 4GB RAM.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes. We offer a full refund within 14 days of purchase for any game with less than 2 hours of playtime. Subscription refunds are prorated for the remaining billing period.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Live chat is available 24/7 through the app or website. You can also email support@nexusgaming.gg or join our Discord server where moderators are always online.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-pixel)] text-lg uppercase tracking-wide sm:text-2xl lg:text-4xl">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
            Got questions? We have answers.
          </p>
        </div>

        {/* Terminal-style FAQ */}
        <div
          className="overflow-hidden rounded-2xl border border-[#1a1a35]"
          style={{ background: "#0a0a1a" }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-[#1a1a35] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs text-[var(--text-subtle)]" style={{ fontFamily: "var(--font-mono, monospace)" }}>
              nexus-faq ~ v1.0.0
            </span>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-[#1a1a35]">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i}>
                  <button
                    className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-white/[0.02] sm:px-6 sm:py-5"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="shrink-0 text-sm font-bold"
                      style={{
                        color: "var(--accent-gold)",
                        fontFamily: "var(--font-mono, monospace)",
                      }}
                    >
                      &gt;
                    </span>
                    <span className="flex-1 text-sm font-medium text-white sm:text-base">
                      {item.question}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6c6c8a"
                      strokeWidth="2"
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="flex gap-3 px-4 pb-4 sm:px-6 sm:pb-5">
                      <span
                        className="shrink-0 text-sm font-bold"
                        style={{
                          color: "var(--accent-gold-dark)",
                          fontFamily: "var(--font-mono, monospace)",
                        }}
                      >
                        $
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
