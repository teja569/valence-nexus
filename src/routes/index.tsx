import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valence — Silicon to Software. Unified." },
      {
        name: "description",
        content:
          "Valence is a deep-tech corporation delivering website development, app development, SaaS, blockchain, embedded systems, VLSI and PCB design.",
      },
      { property: "og:title", content: "Valence — Silicon to Software. Unified." },
      {
        property: "og:description",
        content: "Deep-tech engineering across silicon, systems, and decentralized software.",
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

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "01",
    title: "Website Development",
    tag: "WEB",
    accent: "var(--teal)",
    description:
      "High-performance, pixel-perfect web experiences engineered from the ground up — responsive, accessible, and built to scale.",
    stack: ["React", "Next.js", "TanStack", "TypeScript"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="4" y="8" width="32" height="24" rx="1.5" stroke="var(--teal)" strokeWidth="1" />
        <path d="M4 14h32" stroke="var(--teal)" strokeWidth="1" />
        <circle cx="9" cy="11" r="1.2" fill="var(--teal)" opacity="0.7" />
        <circle cx="13.5" cy="11" r="1.2" fill="var(--teal)" opacity="0.4" />
        <path d="M14 20l-4 4 4 4" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" />
        <path d="M26 20l4 4-4 4" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" />
        <path d="M22 19l-4 10" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "App Development",
    tag: "MOBILE",
    accent: "var(--amber)",
    description:
      "Native and cross-platform mobile applications for iOS and Android, crafted with precision UX and production-grade architecture.",
    stack: ["React Native", "Swift", "Kotlin", "Expo"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="11" y="4" width="18" height="32" rx="3" stroke="var(--amber)" strokeWidth="1" />
        <path d="M11 10h18M11 30h18" stroke="var(--amber)" strokeWidth="1" />
        <circle cx="20" cy="33.5" r="1.2" fill="var(--amber)" opacity="0.7" />
        <rect x="17" y="6.5" width="6" height="1" rx="0.5" fill="var(--amber)" opacity="0.4" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="var(--amber)" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "SaaS Applications",
    tag: "SAAS",
    accent: "var(--teal)",
    description:
      "End-to-end SaaS platforms with multi-tenancy, subscription billing, analytics dashboards, and enterprise-grade security baked in.",
    stack: ["Cloud-native", "Stripe", "Auth", "Observability"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path d="M10 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--teal)" strokeWidth="1" />
        <path d="M6 28c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="var(--teal)" strokeWidth="1" opacity="0.4" />
        <circle cx="20" cy="28" r="3" fill="var(--teal)" opacity="0.8" />
        <path d="M20 8v4M28 12l-3 3M12 12l3 3" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Blockchain",
    tag: "WEB3",
    accent: "var(--amber)",
    description:
      "Smart contracts, DeFi protocols, NFT infrastructure, and decentralized applications across EVM-compatible and custom chains.",
    stack: ["Solidity", "Rust", "EVM", "IPFS"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <polygon points="20,6 32,13 32,27 20,34 8,27 8,13" stroke="var(--amber)" strokeWidth="1" />
        <polygon points="20,12 27,16 27,24 20,28 13,24 13,16" stroke="var(--amber)" strokeWidth="0.8" opacity="0.5" />
        <circle cx="20" cy="20" r="2.5" fill="var(--amber)" opacity="0.9" />
        <path d="M20,6 L20,12 M32,13 L27,16 M32,27 L27,24 M20,34 L20,28 M8,27 L13,24 M8,13 L13,16" stroke="var(--amber)" strokeWidth="0.6" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Embedded Systems",
    tag: "HARDWARE",
    accent: "var(--teal)",
    description:
      "Firmware and real-time software for microcontrollers, DSPs, and IoT edge devices — from bare-metal to RTOS environments.",
    stack: ["C/C++", "FreeRTOS", "ARM", "RISC-V"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <rect x="12" y="12" width="16" height="16" rx="1" stroke="var(--teal)" strokeWidth="1" />
        <rect x="15" y="15" width="10" height="10" rx="0.5" stroke="var(--teal)" strokeWidth="0.8" opacity="0.5" />
        <path d="M16 12V8M20 12V8M24 12V8M16 28v4M20 28v4M24 28v4M12 16H8M12 20H8M12 24H8M28 16h4M28 20h4M28 24h4" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "VLSI & PCB Design",
    tag: "SILICON",
    accent: "var(--amber)",
    description:
      "Custom ASIC design, RTL-to-GDSII flows, and multi-layer PCB layout for high-speed, mixed-signal, and RF applications.",
    stack: ["Verilog", "VHDL", "KiCad", "Cadence"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path d="M6 20h6M28 20h6" stroke="var(--amber)" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 12h16v16H12z" stroke="var(--amber)" strokeWidth="1" />
        <path d="M16 8v4M24 8v4M16 28v4M24 28v4" stroke="var(--amber)" strokeWidth="1" strokeLinecap="round" />
        <path d="M17 17h6v6h-6z" fill="var(--amber)" opacity="0.25" />
        <circle cx="20" cy="20" r="1.5" fill="var(--amber)" opacity="0.8" />
        <path d="M12 16H8M12 24H8M28 16h4M28 24h4" stroke="var(--amber)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

const TEAM = [
  {
    name: "Teja Sai Polamarasetty",
    initial: "T",
    role: "Founder & CEO",
    tag: "LEADERSHIP",
    accent: "var(--amber)",
    bio: "Visionary engineer and entrepreneur driving Valence's mission to unify silicon and software. Leads product strategy, company vision, and growth across every discipline.",
  },
  {
    name: "Phanindra",
    initial: "P",
    role: "Chief Financial Officer",
    tag: "FINANCE",
    accent: "var(--teal)",
    bio: "Stewards Valence's financial strategy, investor relations, and operational efficiency — ensuring sustainable growth at every layer of the stack.",
  },
];

const TICKER_ITEMS = [
  "WEBSITE DEVELOPMENT",
  "APP DEVELOPMENT",
  "SAAS PLATFORMS",
  "BLOCKCHAIN",
  "EMBEDDED SYSTEMS",
  "VLSI DESIGN",
  "PCB DESIGN",
  "SILICON TO SOFTWARE",
];

const NAV_LINKS = [
  ["#services", "SERVICES"],
  ["#systems", "SYSTEMS"],
  ["#team", "TEAM"],
  ["#company", "CONTACT"],
] as const;

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfOUYubqMOMjZjBFUa9glZmytp8xwxDSFcAZdF_ShHKD2-LAw/viewform?usp=publish-editor";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, visible } = useReveal();
  const translate =
    direction === "up"
      ? "translateY(24px)"
      : direction === "left"
        ? "translateX(-24px)"
        : "translateX(24px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : translate,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes banner-slide {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .banner-in { animation: banner-slide 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 28s linear infinite; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up   { animation: fade-up 0.7s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s;  opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s;  opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1; }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }

        .card-glow:hover {
          box-shadow: 0 0 36px -8px var(--card-glow-color, var(--teal));
        }

        @keyframes slide-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .mobile-menu-enter { animation: slide-in 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      <BackgroundLattice />

      {/* ── Promo Banner ────────────────────────────────────────────────── */}
      {bannerOpen && (
        <div className="banner-in relative z-50 border-b border-[var(--amber)]/25 bg-gradient-to-r from-[var(--amber)]/15 via-[var(--amber)]/10 to-[var(--teal)]/15 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-2.5 sm:px-6">
            {/* content */}
            <div className="flex flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.28em] text-[var(--amber)] sm:text-[10px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--amber)]" />
                LIMITED OFFER
              </span>
              <p className="text-[11px] tracking-wide text-foreground/90 sm:text-[12px]">
                First{" "}
                <span className="font-semibold text-[var(--amber)]">5 clients</span>{" "}
                get our services{" "}
                <span className="font-semibold text-[var(--amber)]">completely free.</span>
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 border border-[var(--amber)]/60 bg-[var(--amber)]/10 px-3 py-1 text-[9px] tracking-[0.22em] text-[var(--amber)] transition hover:bg-[var(--amber)] hover:text-background sm:text-[10px]"
              >
                CLAIM YOUR SPOT
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            {/* close */}
            <button
              onClick={() => setBannerOpen(false)}
              aria-label="Dismiss banner"
              className="shrink-0 p-1 text-muted-foreground/60 transition hover:text-foreground"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Sticky Nav ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8 md:px-14 md:py-5">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-display text-[13px] font-600 tracking-[0.38em] text-foreground sm:text-[14px] sm:tracking-[0.44em]">
              VALENCE
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[11px] tracking-[0.22em] text-muted-foreground md:flex lg:gap-10">
            {NAV_LINKS.map(([href, label]) => (
              <a key={href} href={href} className="group relative py-1 transition hover:text-foreground">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--amber)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="mailto:tejasai29062004@gmail.com?subject=Project%20Enquiry%20via%20Valence"
            className="group relative hidden overflow-hidden border border-border/70 px-5 py-2 text-[11px] tracking-[0.25em] text-foreground transition hover:border-[var(--amber)] md:inline-flex md:items-center md:gap-2"
          >
            <span className="absolute inset-0 -translate-x-full bg-[var(--amber)]/10 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative h-1 w-1 rounded-full bg-[var(--amber)] shadow-[0_0_6px_var(--amber)]" />
            <span className="relative">GET IN TOUCH</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="h-px w-6 bg-foreground transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span className="h-px w-6 bg-foreground transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span className="h-px w-6 bg-foreground transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" onClick={closeMobile} />
          <div className="mobile-menu-enter fixed right-0 top-0 z-50 flex h-full w-[80vw] max-w-xs flex-col border-l border-border/50 bg-background/95 px-6 py-7 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-[12px] tracking-[0.4em] text-muted-foreground">VALENCE</span>
              <button onClick={closeMobile} className="p-1 text-muted-foreground hover:text-foreground">✕</button>
            </div>

            <nav className="mt-10 flex flex-col gap-5">
              {NAV_LINKS.map(([href, label]) => (
                <a key={href} href={href} onClick={closeMobile}
                  className="border-b border-border/40 pb-4 text-[13px] tracking-[0.28em] text-muted-foreground transition hover:text-foreground">
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <a
                href="mailto:tejasai29062004@gmail.com?subject=Project%20Enquiry%20via%20Valence"
                onClick={closeMobile}
                className="flex w-full items-center justify-center gap-2 bg-foreground px-6 py-3.5 text-[11px] tracking-[0.28em] text-background"
              >
                GET IN TOUCH →
              </a>
              <div className="space-y-2 text-[10px] tracking-[0.18em] text-muted-foreground/60">
                <a href="tel:+918106996118" className="block hover:text-foreground">+91 81069 96118</a>
                <a href="mailto:tejasai29062004@gmail.com" className="block hover:text-foreground">tejasai29062004@gmail.com</a>
              </div>
            </div>
          </div>
        </>
      )}

      <main className="relative z-10">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-8 md:px-14">
          <div className="grid grid-cols-12 items-center gap-6 pb-12 pt-10 md:min-h-[88vh] md:gap-8 md:pt-12">

            {/* Text col — full width on mobile, 7 cols on lg */}
            <div className="col-span-12 lg:col-span-7">
              <div className="fade-up fade-up-1 mb-8 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.32em] text-muted-foreground md:mb-10">
                <span className="h-px w-8 bg-[var(--teal)]/70 sm:w-10" />
                <span>VLC / 001 · DEEP-TECH</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-2.5 py-0.5 text-[9px] tracking-[0.2em] text-[var(--teal)]">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--teal)]" />
                  ACTIVE
                </span>
              </div>

              <h1 className="fade-up fade-up-2 font-display text-[clamp(2.4rem,8vw,7rem)] font-300 leading-[0.95] tracking-[-0.04em]">
                Silicon
                <br />to Software.
                <br />
                <span className="relative mt-1 inline-block">
                  <span
                    className="bg-clip-text text-transparent pulse-glow"
                    style={{ backgroundImage: "linear-gradient(90deg, var(--amber) 0%, oklch(0.96 0.005 240) 50%, var(--teal) 100%)" }}
                  >
                    Unified.
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-gradient-to-r from-[var(--amber)]/80 via-transparent to-[var(--teal)]/80" />
                </span>
              </h1>

              <p className="fade-up fade-up-3 mt-8 max-w-lg text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px] md:mt-10">
                Valence engineers the full spectrum of modern technology — from
                atomic-scale silicon and embedded firmware to cloud-native SaaS,
                decentralized networks, and production-grade applications.
              </p>

              <div className="fade-up fade-up-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-12">
                <a
                  href="#services"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-foreground px-6 py-3.5 text-[12px] tracking-[0.28em] text-background transition sm:justify-start sm:px-7"
                >
                  <span className="absolute inset-0 -translate-y-full bg-[var(--amber)] transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative">EXPLORE SERVICES</span>
                  <span className="relative transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#team"
                  className="inline-flex items-center justify-center gap-3 py-3 text-[12px] tracking-[0.28em] text-muted-foreground transition hover:text-foreground sm:justify-start sm:px-2 sm:py-3.5"
                >
                  <span className="h-px w-6 bg-current" />
                  MEET THE TEAM
                </a>
              </div>
            </div>

            {/* Instrument panel — hidden on mobile, shown from lg */}
            <div className="col-span-12 mt-4 hidden lg:col-span-5 lg:mt-0 lg:block">
              <InstrumentPanel />
            </div>

            {/* Compact panel visible only on md (tablet) */}
            <div className="col-span-12 mt-6 block lg:hidden">
              <InstrumentPanelCompact />
            </div>
          </div>
        </section>

        {/* ── Stats bar ───────────────────────────────────────────────────── */}
        <Reveal className="mx-auto max-w-[1400px] px-4 sm:px-8 md:px-14">
          <div className="grid grid-cols-2 gap-px border-t border-border/50 bg-border/20 md:grid-cols-4">
            {[
              { k: "6",    l: "CORE DISCIPLINES", s: "SILICON · SOFTWARE" },
              { k: "3+",   l: "YEARS IN MARKET",  s: "SHIPPING SINCE 2023" },
              { k: "∞",    l: "STACK DEPTH",       s: "PCB TO CLOUD" },
              { k: "100%", l: "FULL-STACK",        s: "VIZAG · GLOBAL" },
            ].map((m) => (
              <div key={m.l} className="bg-background px-4 py-5 sm:px-6 sm:py-6">
                <div className="font-display text-[1.7rem] font-300 tracking-tight text-foreground sm:text-[2rem]">{m.k}</div>
                <div className="mt-1.5 text-[9px] tracking-[0.25em] text-muted-foreground sm:mt-2 sm:text-[9.5px] sm:tracking-[0.3em]">{m.l}</div>
                <div className="mt-1 text-[9px] tracking-[0.18em] text-muted-foreground/50 sm:tracking-[0.2em]">{m.s}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Marquee ticker ──────────────────────────────────────────────── */}
        <div className="mt-10 overflow-hidden border-y border-border/40 bg-card/20 py-3 md:mt-16">
          <div className="flex whitespace-nowrap">
            <div className="marquee-track flex shrink-0 items-center">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-4 px-5 font-mono text-[9px] tracking-[0.3em] text-muted-foreground/60 sm:gap-5 sm:px-6 sm:text-[10px] sm:tracking-[0.35em]">
                  <span className="h-1 w-1 rounded-full" style={{ backgroundColor: i % 2 === 0 ? "var(--amber)" : "var(--teal)" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services ────────────────────────────────────────────────────── */}
        <section id="services" className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-8 md:mt-28 md:px-14">
          <Reveal>
            <SectionLabel index="002" label="SERVICES" />
            <div className="mt-5 flex flex-col gap-3 md:mt-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-display text-[clamp(1.8rem,5vw,3.4rem)] font-300 leading-[1.05] tracking-[-0.03em]">
                What We Build
              </h2>
              <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground lg:text-right">
                Six disciplines. One team.<br className="hidden sm:block" />Every engagement, obsessive craft.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:gap-4 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Process ─────────────────────────────────────────────────────── */}
        <section id="systems" className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-8 md:mt-28 md:px-14">
          <Reveal>
            <SectionLabel index="003" label="HOW WE WORK" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-px border border-border/40 bg-border/20 sm:grid-cols-2 md:mt-10 md:grid-cols-4">
            {[
              { n: "01", title: "Discovery",    desc: "We map your goals, constraints, and tech landscape before writing a single line." },
              { n: "02", title: "Architecture", desc: "System design crafted for longevity — scalable, secure, and maintainable." },
              { n: "03", title: "Execution",    desc: "Iterative delivery with full transparency. No black boxes, no surprises." },
              { n: "04", title: "Handoff",      desc: "Documented, tested, and production-ready. You own everything." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="group relative h-full bg-background p-6 transition hover:bg-card/50 md:p-7">
                  <span className="font-mono text-[10px] tracking-[0.3em]" style={{ color: i % 2 === 0 ? "var(--teal)" : "var(--amber)" }}>
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-[1rem] font-500 tracking-tight md:mt-4">{step.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{step.desc}</p>
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: i % 2 === 0 ? "var(--teal)" : "var(--amber)" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Team ────────────────────────────────────────────────────────── */}
        <section id="team" className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-8 md:mt-28 md:px-14">
          <Reveal>
            <SectionLabel index="004" label="LEADERSHIP" />
            <div className="mt-5 flex flex-col gap-3 md:mt-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-display text-[clamp(1.8rem,5vw,3.4rem)] font-300 leading-[1.05] tracking-[-0.03em]">
                The People Behind Valence
              </h2>
              <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground lg:text-right">
                Built by engineers who have worked<br className="hidden sm:block" />across the full stack — PCB to cloud.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section id="company" className="mx-auto mb-0 mt-16 max-w-[1400px] px-4 sm:px-8 md:mt-28 md:px-14">
          <Reveal>
            <div className="relative overflow-hidden border border-border/50 bg-card/20 p-6 sm:p-10 md:p-16 lg:p-20">
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(ellipse, var(--amber) 0%, transparent 70%)" }}
              />
              {["left-0 top-0","right-0 top-0 rotate-90","right-0 bottom-0 rotate-180","left-0 bottom-0 -rotate-90"].map((c) => (
                <span key={c} className={`absolute h-4 w-4 border-l-2 border-t-2 border-[var(--amber)]/50 sm:h-5 sm:w-5 ${c}`} />
              ))}

              <SectionLabel index="005" label="START A PROJECT" />
              <h2 className="relative mt-5 font-display text-[clamp(1.8rem,5vw,3.8rem)] font-300 leading-[1.05] tracking-[-0.03em] md:mt-6">
                Ready to build something{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, var(--amber), var(--teal))" }}>
                  extraordinary?
                </span>
              </h2>
              <p className="relative mt-4 max-w-xl text-[13px] leading-relaxed text-muted-foreground sm:text-[14px] md:mt-5">
                Whether you need a consumer app, a blockchain protocol, custom silicon,
                or a full-stack SaaS platform — Valence has the depth to deliver from
                concept to production.
              </p>

              <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
                <a
                  href="mailto:tejasai29062004@gmail.com?subject=Project%20Enquiry%20via%20Valence"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-foreground px-6 py-4 text-[12px] tracking-[0.28em] text-background sm:justify-start sm:px-8"
                >
                  <span className="absolute inset-0 -translate-y-full bg-[var(--amber)] transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative">START A PROJECT</span>
                  <span className="relative transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="tel:+918106996118"
                  className="inline-flex items-center justify-center gap-3 border border-border/60 px-6 py-4 text-[12px] tracking-[0.28em] text-muted-foreground transition hover:border-[var(--teal)] hover:text-foreground sm:justify-start sm:px-8"
                >
                  SCHEDULE A CALL
                </a>
              </div>

              <div className="relative mt-8 grid grid-cols-1 gap-5 border-t border-border/40 pt-7 sm:grid-cols-3 sm:gap-4 md:mt-10 md:pt-8">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/50">PHONE</p>
                  <a href="tel:+918106996118" className="mt-2 block text-[13px] tracking-wide text-foreground transition hover:text-[var(--amber)]">
                    +91 81069 96118
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/50">EMAIL</p>
                  <a href="mailto:tejasai29062004@gmail.com" className="mt-2 block break-all text-[13px] tracking-wide text-foreground transition hover:text-[var(--teal)]">
                    tejasai29062004@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/50">LOCATION</p>
                  <p className="mt-2 text-[13px] tracking-wide text-foreground">Visakhapatnam, India · Global</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="mx-auto mt-0 max-w-[1400px] px-4 sm:px-8 md:px-14">
          <div className="flex flex-col items-center gap-3 border-t border-border/40 py-6 text-[9px] tracking-[0.22em] text-muted-foreground sm:flex-row sm:justify-between sm:text-[10px] sm:tracking-[0.28em]">
            <div className="flex items-center gap-2.5">
              <LogoMark size={16} />
              <span className="text-center sm:text-left">© 2026 VALENCE CORPORATION · ALL RIGHTS RESERVED</span>
            </div>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--teal)] shadow-[0_0_8px_var(--teal)]" />
              ALL SYSTEMS NOMINAL
            </span>
          </div>
        </footer>

      </main>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] text-muted-foreground sm:gap-4 sm:text-[11px] sm:tracking-[0.32em]">
      <span className="h-px w-8 bg-[var(--amber)]/60 sm:w-10" />
      <span className="text-[var(--amber)]/70">VLC / {index}</span>
      <span className="text-border">·</span>
      <span>{label}</span>
    </div>
  );
}

function ServiceCard({ id, title, tag, accent, description, stack, icon }: (typeof SERVICES)[number]) {
  return (
    <div
      className="card-glow group relative flex h-full flex-col border border-border/50 bg-card/20 p-5 transition-all duration-300 hover:border-border hover:bg-card/50 sm:p-7"
      style={{ "--card-glow-color": accent } as React.CSSProperties}
    >
      <span className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: accent }} />

      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center border border-current/20 bg-current/5 sm:h-12 sm:w-12" style={{ color: accent } as React.CSSProperties}>
          {icon}
        </div>
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/40">{id}</span>
      </div>

      <div className="mt-4 sm:mt-5">
        <span className="font-mono text-[9px] tracking-[0.3em]" style={{ color: accent }}>{tag}</span>
      </div>
      <h3 className="mt-1.5 font-display text-[1rem] font-500 tracking-tight text-foreground sm:mt-2 sm:text-[1.1rem]">{title}</h3>
      <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[13px]">{description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
        {stack.map((t) => (
          <span key={t} className="border border-border/50 bg-background/50 px-2 py-0.5 font-mono text-[9px] tracking-[0.15em] text-muted-foreground/60 transition-colors group-hover:border-border sm:px-2.5 sm:py-1 sm:tracking-[0.18em]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function TeamCard({ name, initial, role, tag, accent, bio }: (typeof TEAM)[number]) {
  return (
    <div
      className="card-glow group relative overflow-hidden border border-border/50 bg-card/20 p-6 transition-all duration-300 hover:border-border hover:bg-card/40 sm:flex sm:gap-7 sm:p-8"
      style={{ "--card-glow-color": accent } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" style={{ backgroundColor: accent }} />
      <span className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: accent }} />

      <div className="mb-5 shrink-0 sm:mb-0">
        <div className="relative flex h-16 w-16 items-center justify-center border text-[1.6rem] font-300 sm:h-20 sm:w-20 sm:text-[2rem]" style={{ borderColor: `${accent}40`, color: accent }}>
          <span className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at center, ${accent}, transparent)` }} />
          <span className="relative">{initial}</span>
        </div>
      </div>

      <div className="flex-1">
        <span className="font-mono text-[9px] tracking-[0.3em]" style={{ color: accent }}>{tag}</span>
        <h3 className="mt-1.5 font-display text-[1.05rem] font-500 tracking-tight text-foreground sm:mt-2 sm:text-[1.15rem]">{name}</h3>
        <p className="mt-0.5 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">{role.toUpperCase()}</p>
        <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-[13px]">{bio}</p>
      </div>
    </div>
  );
}

function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="shrink-0 text-foreground">
      <path d="M4 6 L16 26 L28 6" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="16" cy="26" r="1.6" fill="var(--amber)" />
      <circle cx="4" cy="6" r="1.2" fill="var(--teal)" />
      <circle cx="28" cy="6" r="1.2" fill="var(--teal)" />
    </svg>
  );
}

/* Full instrument panel — desktop only */
function InstrumentPanel() {
  return (
    <div className="relative w-full border border-border/60 bg-card/30 p-6 backdrop-blur-sm">
      {["left-0 top-0","right-0 top-0 rotate-90","right-0 bottom-0 rotate-180","left-0 bottom-0 -rotate-90"].map((c) => (
        <span key={c} className={`absolute h-3.5 w-3.5 border-l-[1.5px] border-t-[1.5px] border-[var(--amber)] ${c}`} />
      ))}
      <div className="flex items-center justify-between text-[10px] tracking-[0.28em] text-muted-foreground">
        <span>NODE / VLC-Δ</span>
        <span className="flex items-center gap-1.5 text-[var(--teal)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--teal)]" />
          LIVE
        </span>
      </div>
      <svg viewBox="0 0 240 260" className="mt-4 w-full">
        <defs>
          <linearGradient id="bond" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="glow-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-t" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="url(#bond)" strokeWidth="0.7" fill="none" opacity="0.8">
          <path d="M120 25 L120 80 L65 115 L65 185 L120 220 L175 185 L175 115 L120 80" />
          <path d="M65 115 L175 115" /><path d="M65 185 L175 185" />
          <path d="M120 80 L120 220" />
          <path d="M35 150 L65 150 M175 150 L205 150" />
          <path d="M120 25 L120 8 M120 220 L120 252" />
        </g>
        {([
          [120,25,"a"],[120,80,"t"],[65,115,"a"],[175,115,"t"],
          [120,150,"a"],[65,185,"t"],[175,185,"a"],[120,220,"t"],
        ] as [number,number,string][]).map(([x,y,type],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill={type==="a"?"url(#glow-a)":"url(#glow-t)"} />
            <circle cx={x} cy={y} r="2.6" fill={type==="a"?"var(--amber)":"var(--teal)"} />
          </g>
        ))}
        <g fontFamily="JetBrains Mono, monospace" fontSize="6" fill="oklch(0.68 0.018 248)" letterSpacing="1.2">
          <text x="124" y="17">Si</text><text x="124" y="73">C</text>
          <text x="49" y="109">N</text><text x="181" y="109">O</text>
          <text x="124" y="143">Fe</text><text x="124" y="246">⌬</text>
        </g>
      </svg>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/50 pt-4 font-mono text-[9px] tracking-widest text-muted-foreground">
        {[{ v: "0.42", l: "FLUX", c: "text-foreground" },{ v: "128k", l: "CYCLES", c: "text-foreground" },{ v: "SYNC", l: "STATE", c: "text-[var(--amber)]" }].map((d) => (
          <div key={d.l}><div className={d.c}>{d.v}</div><div className="mt-1 opacity-60">{d.l}</div></div>
        ))}
      </div>
    </div>
  );
}

/* Compact horizontal panel — tablet/mobile only */
function InstrumentPanelCompact() {
  return (
    <div className="relative border border-border/60 bg-card/30 p-4 backdrop-blur-sm sm:p-5">
      {["left-0 top-0","right-0 top-0 rotate-90","right-0 bottom-0 rotate-180","left-0 bottom-0 -rotate-90"].map((c) => (
        <span key={c} className={`absolute h-3 w-3 border-l border-t border-[var(--amber)] ${c}`} />
      ))}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.28em] text-muted-foreground">NODE / VLC-Δ</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-[var(--teal)]">
          <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--teal)]" />
          LIVE
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border/50 pt-4 font-mono text-[9px] tracking-widest text-muted-foreground sm:grid-cols-6">
        {[
          { v: "0.42", l: "FLUX",   c: "text-foreground" },
          { v: "128k", l: "CYCLES", c: "text-foreground" },
          { v: "SYNC", l: "STATE",  c: "text-[var(--amber)]" },
          { v: "Si",   l: "LAYER",  c: "text-[var(--teal)]" },
          { v: "3nm",  l: "NODE",   c: "text-foreground" },
          { v: "VLC",  l: "NET",    c: "text-foreground" },
        ].map((d) => (
          <div key={d.l}><div className={d.c}>{d.v}</div><div className="mt-1 opacity-60">{d.l}</div></div>
        ))}
      </div>
    </div>
  );
}

function BackgroundLattice() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,transparent_30%,oklch(0.12_0.02_252)_90%)]" />
      <svg className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 1000">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0 L0 0 0 80" fill="none" stroke="oklch(0.55 0.04 240)" strokeWidth="0.4" />
          </pattern>
          <pattern id="vlsi" width="240" height="240" patternUnits="userSpaceOnUse">
            <path d="M20 20 H120 V80 H180 V160 H100 V220 H40" fill="none" stroke="var(--teal)" strokeWidth="0.6" opacity="0.55" />
            <path d="M200 40 V120 H140 V180" fill="none" stroke="var(--amber)" strokeWidth="0.6" opacity="0.5" />
            <circle cx="120" cy="80" r="1.6" fill="var(--amber)" />
            <circle cx="180" cy="160" r="1.6" fill="var(--teal)" />
            <circle cx="40" cy="220" r="1.4" fill="var(--amber)" opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#vlsi)" opacity="0.7" />
      </svg>
      <svg className="pointer-events-none fixed right-[-10%] top-[5%] z-0 h-[120%] w-[80%] opacity-[0.1]" viewBox="0 0 800 800">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => {
            const x = c * 90 + (r % 2) * 45;
            const y = r * 78;
            return (
              <polygon key={`${r}-${c}`}
                points={`${x},${y+26} ${x+26},${y} ${x+52},${y+26} ${x+52},${y+78} ${x+26},${y+104} ${x},${y+78}`}
                fill="none" stroke="oklch(0.7 0.05 200)" strokeWidth="0.5" />
            );
          })
        )}
      </svg>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,oklch(1_0_0_/_0.01)_3px,oklch(1_0_0_/_0.01)_4px)]" />
    </>
  );
}
