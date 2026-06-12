import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valence — Silicon to Software. Unified." },
      {
        name: "description",
        content:
          "Valence is a deep-tech corporation unifying silicon engineering and software systems with precision and craft.",
      },
      { property: "og:title", content: "Valence — Silicon to Software. Unified." },
      {
        property: "og:description",
        content:
          "Deep-tech engineering across silicon, systems, and decentralized software.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundLattice />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-8 py-7 md:px-14">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-[15px] font-500 tracking-[0.42em] text-foreground">
            VALENCE
          </span>
        </div>
        <nav className="hidden items-center gap-10 text-[12px] tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#research" className="transition hover:text-foreground">RESEARCH</a>
          <a href="#systems" className="transition hover:text-foreground">SYSTEMS</a>
          <a href="#network" className="transition hover:text-foreground">NETWORK</a>
          <a href="#company" className="transition hover:text-foreground">COMPANY</a>
        </nav>
        <button className="group relative inline-flex items-center gap-2 border border-border/80 px-4 py-2 text-[11px] tracking-[0.25em] text-foreground transition hover:border-[var(--amber)]">
          <span className="h-1 w-1 rounded-full bg-[var(--amber)] shadow-[0_0_8px_var(--amber)]" />
          CONTACT
        </button>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-[1400px] px-8 md:px-14">
        <section className="grid min-h-[78vh] grid-cols-12 items-center gap-8 pt-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-10 flex items-center gap-4 text-[11px] tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-10 bg-[var(--teal)]/70" />
              <span>VLC / 001 · DEEP-TECH INDEX</span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] font-300 leading-[0.98] tracking-[-0.035em]">
              Silicon to Software.
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--amber)] via-foreground to-[var(--teal)] bg-clip-text text-transparent">
                  Unified.
                </span>
                <span className="absolute -bottom-3 left-0 h-px w-full bg-gradient-to-r from-[var(--amber)]/70 via-transparent to-[var(--teal)]/70" />
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Valence engineers the substrate of modern computation — from
              atomic-scale silicon architectures to decentralized software fabrics.
              One company, one continuous gradient of precision.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button className="group relative inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-[12px] tracking-[0.28em] text-background transition hover:bg-[var(--amber)]">
                EXPLORE THE PLATFORM
                <span className="transition group-hover:translate-x-1">→</span>
              </button>
              <button className="inline-flex items-center gap-3 px-2 py-3.5 text-[12px] tracking-[0.28em] text-muted-foreground transition hover:text-foreground">
                <span className="h-px w-6 bg-current" />
                READ THE 2026 BRIEF
              </button>
            </div>
          </div>

          {/* Right side instrument panel */}
          <div className="col-span-12 lg:col-span-4">
            <InstrumentPanel />
          </div>
        </section>

        {/* Bottom strip */}
        <section className="relative mt-8 grid grid-cols-2 gap-px border-t border-border/60 pt-8 md:grid-cols-4">
          {[
            { k: "11", l: "FAB PROCESSES", s: "3nm — 180nm" },
            { k: "42", l: "PROTOCOL NODES", s: "GLOBAL MESH" },
            { k: "1.2B", l: "TRANSACTIONS / DAY", s: "VERIFIED ON-CHAIN" },
            { k: "08", l: "RESEARCH LABS", s: "ZÜRICH · TOKYO · AUSTIN" },
          ].map((m) => (
            <div key={m.l} className="px-4 py-2">
              <div className="font-display text-3xl font-300 tracking-tight text-foreground">
                {m.k}
              </div>
              <div className="mt-2 text-[10px] tracking-[0.28em] text-muted-foreground">
                {m.l}
              </div>
              <div className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground/60">
                {m.s}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 py-6 text-[10px] tracking-[0.28em] text-muted-foreground">
          <span>© 2026 VALENCE CORPORATION</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--teal)] shadow-[0_0_8px_var(--teal)]" />
            ALL SYSTEMS NOMINAL · 47.3768° N
          </span>
        </footer>
      </main>
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" className="text-foreground">
      <path d="M4 6 L16 26 L28 6" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="16" cy="26" r="1.6" fill="var(--amber)" />
      <circle cx="4" cy="6" r="1.2" fill="var(--teal)" />
      <circle cx="28" cy="6" r="1.2" fill="var(--teal)" />
    </svg>
  );
}

function InstrumentPanel() {
  return (
    <div className="relative aspect-[4/5] w-full border border-border/70 bg-card/40 p-6 backdrop-blur-sm">
      {/* corner marks */}
      {[
        "left-0 top-0",
        "right-0 top-0 rotate-90",
        "right-0 bottom-0 rotate-180",
        "left-0 bottom-0 -rotate-90",
      ].map((c) => (
        <span
          key={c}
          className={`absolute h-3 w-3 border-l border-t border-[var(--amber)] ${c}`}
        />
      ))}

      <div className="flex items-center justify-between text-[10px] tracking-[0.28em] text-muted-foreground">
        <span>NODE / VLC-Δ</span>
        <span className="text-[var(--teal)]">● LIVE</span>
      </div>

      {/* SVG bonding diagram */}
      <svg viewBox="0 0 240 280" className="mt-6 w-full">
        <defs>
          <linearGradient id="bond" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="node">
            <stop offset="0%" stopColor="var(--amber)" />
            <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* lattice traces */}
        <g stroke="url(#bond)" strokeWidth="0.6" fill="none" opacity="0.85">
          <path d="M120 30 L120 90 L60 130 L60 200 L120 240 L180 200 L180 130 L120 90" />
          <path d="M60 130 L180 130" />
          <path d="M60 200 L180 200" />
          <path d="M120 90 L120 240" />
          <path d="M30 165 L60 165 M180 165 L210 165" />
          <path d="M120 30 L120 10 M120 240 L120 270" />
        </g>

        {/* atomic nodes */}
        {[
          [120, 30], [120, 90], [60, 130], [180, 130],
          [120, 165], [60, 200], [180, 200], [120, 240],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="url(#node)" opacity="0.5" />
            <circle cx={x} cy={y} r="2.4" fill="var(--amber)" />
          </g>
        ))}

        {/* micro labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="6" fill="oklch(0.68 0.018 248)" letterSpacing="1">
          <text x="124" y="20">Si</text>
          <text x="124" y="82">C</text>
          <text x="44" y="124">N</text>
          <text x="186" y="124">O</text>
          <text x="124" y="158">Fe</text>
          <text x="124" y="262">⌬</text>
        </g>
      </svg>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-4 font-mono text-[9px] tracking-widest text-muted-foreground">
        <div>
          <div className="text-foreground">0.42</div>
          <div className="mt-1">FLUX</div>
        </div>
        <div>
          <div className="text-foreground">128k</div>
          <div className="mt-1">CYCLES</div>
        </div>
        <div>
          <div className="text-[var(--amber)]">SYNC</div>
          <div className="mt-1">STATE</div>
        </div>
      </div>
    </div>
  );
}

function BackgroundLattice() {
  return (
    <>
      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,transparent_30%,oklch(0.12_0.02_252)_90%)]" />

      {/* circuit grid SVG */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1600 1000"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0 L0 0 0 80" fill="none" stroke="oklch(0.55 0.04 240)" strokeWidth="0.4" />
          </pattern>
          <pattern id="vlsi" width="240" height="240" patternUnits="userSpaceOnUse">
            <path
              d="M20 20 H120 V80 H180 V160 H100 V220 H40"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="0.6"
              opacity="0.55"
            />
            <path
              d="M200 40 V120 H140 V180"
              fill="none"
              stroke="var(--amber)"
              strokeWidth="0.6"
              opacity="0.5"
            />
            <circle cx="120" cy="80" r="1.6" fill="var(--amber)" />
            <circle cx="180" cy="160" r="1.6" fill="var(--teal)" />
            <circle cx="40" cy="220" r="1.4" fill="var(--amber)" opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#vlsi)" opacity="0.7" />
      </svg>

      {/* hex / blockchain mesh */}
      <svg
        className="pointer-events-none absolute right-[-10%] top-[5%] z-0 h-[120%] w-[80%] opacity-[0.12]"
        viewBox="0 0 800 800"
      >
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => {
            const x = c * 90 + (r % 2) * 45;
            const y = r * 78;
            return (
              <polygon
                key={`${r}-${c}`}
                points={`${x},${y + 26} ${x + 26},${y} ${x + 52},${y + 26} ${x + 52},${y + 78} ${x + 26},${y + 104} ${x},${y + 78}`}
                fill="none"
                stroke="oklch(0.7 0.05 200)"
                strokeWidth="0.5"
              />
            );
          }),
        )}
      </svg>

      {/* faint scanlines */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,oklch(1_0_0_/_0.012)_3px,oklch(1_0_0_/_0.012)_4px)]" />
    </>
  );
}
