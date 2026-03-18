"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const platforms = [
    { name: "Steam", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
    )},
    { name: "PlayStation", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.886.49.266.397.932.397 1.622v4.592c2.327 1.196 4.164.212 4.164-2.577 0-2.826-1.381-4.04-4.164-5.05C12.39 3.79 10.393 3.09 8.985 2.596zM2.76 17.725c-1.678-.574-1.907-1.774-.793-2.453.988-.604 2.674-1.085 2.674-1.085l4.435-1.58v2.024l-3.194 1.145c-.363.132-.419.36-.126.507.293.147.828.17 1.191.037l2.129-.765v1.818c-.065.012-.142.024-.211.036-1.932.358-3.998.116-6.105-.684zm18.034-2.73c-1.09-.478-2.474-.632-3.537-.38-1.063.253-1.186.865-.272 1.361l3.236 1.474c.967.493 1.082 1.223.329 1.896-.869.739-2.896 1.169-2.896 1.169l-1.301.392v-2.082l.756-.237c.363-.118.419-.346.126-.493s-.828-.175-1.191-.057l-.691.241v-2.181c1.742-.273 3.488-.061 4.872.51 1.14.497 1.583 1.2.569 2.387"/></svg>
    )},
    { name: "Xbox", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967-1.992-1.397-5.1-4.631-7.9-8.467-2.799 3.837-5.907 7.07-7.9 8.467zM12.003 0C8.881 0 6.035 1.242 3.938 3.281c1.5.378 4.063 1.739 6.582 4.167C12 8.922 13.341 10.6 14.484 12.438 18.003 7.186 20.572 4.577 22.074 3.269 19.972 1.237 17.122 0 12.003 0zM1.56 4.834C.562 6.33 0 8.098 0 12c0 4.672 2.066 8.79 5.353 11.443 1.09-1.072 3.592-4.09 6.033-8.062-2.578-4.152-5.565-7.563-6.606-8.547-.654-.618-1.17-1.372-1.17-1.372l-.086-.098L1.56 4.834zm20.882.016c-.004.004-.004.016-.004.016s-.546.684-1.227 1.38c-.758.705-3.594 3.381-6.32 7.68 2.488 3.914 4.987 6.906 6.07 7.966C23.056 19.623 24 15.96 24 12c0-2.707-.625-5.268-1.742-7.55l.184.4z"/></svg>
    )},
    { name: "PC", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
    )},
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        {/* Pixel Headline */}
        <h1 className="font-[var(--font-pixel)] mb-4 text-xl leading-relaxed tracking-wide uppercase sm:mb-6 sm:text-2xl lg:text-4xl xl:text-5xl">
          THE{" "}
          <span className="gradient-text">ULTIMATE</span>{" "}
          <span className="gradient-text">GAMING</span>
          <br />
          PLATFORM FOR
          <br />
          PLAYERS
        </h1>

        {/* Subheadline — regular font */}
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:mb-12 sm:text-base lg:text-lg">
          Discover, Compete, and Conquer With
          <br />
          Next-Generation Graphics and Immersive Gameplay
        </p>

        {/* Tab Group (like kodus.io Start with Git / Start with Terminal) */}
        <div className="terminal-card mb-6 w-full max-w-lg">
          <div className="tab-group w-full">
            <button
              className={`tab-btn flex-1 ${activeTab === 0 ? "active" : ""}`}
              onClick={() => setActiveTab(0)}
            >
              Start with PC
            </button>
            <button
              className={`tab-btn flex-1 ${activeTab === 1 ? "active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              Start with Console
            </button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-6 py-5 text-[var(--text-muted)]">
            {platforms.map((p) => (
              <div key={p.name} className="transition-colors hover:text-white cursor-pointer" title={p.name}>
                {p.icon}
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center pb-6">
            <a href="#" className="btn-primary">
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Trust text */}
        <p className="text-sm text-[var(--text-subtle)]">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
}
