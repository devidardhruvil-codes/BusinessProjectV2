import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-20 pb-16">
        {/* Large ghost text watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,18vw,220px)] font-black tracking-[-0.06em] pointer-events-none select-none leading-none whitespace-nowrap"
          style={{ color: "rgba(0,0,0,0.035)" }}
        >
          BRINOVA
        </div>
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* LEFT — Text */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white/60 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                IT Services & Solutions
              </span>
            </div>
            <div>
              <h1
                className="font-black leading-[0.95] tracking-[-0.04em] text-gray-950"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                Stay ahead
                <br />
                <span className="italic font-light text-gray-500 tracking-[-0.02em">
                  of the curve
                </span>
                <br />
                with bold
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">IT strategy.</span>
                  <span
                    className="absolute bottom-2 left-0 w-full h-4 -z-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #facc15 0%, #fb923c 100%)",
                      borderRadius: 2,
                    }}
                  />
                </span>
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light">
              A results-driven IT services company focused on understanding your
              business goals and delivering scalable, modern technology
              solutions.
            </p>
            {/* Stats row */}
            <div className="flex gap-10 pt-2">
              {[
                { num: "120+", label: "Projects Delivered" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "8yr", label: "Industry Experience" },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                    {s.num}
                  </div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-black/30 hover:scale-[1.02]"
              >
                Contact Us
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-gray-900 bg-transparent border-2 border-gray-900/25 rounded-full hover:border-gray-900/60 transition-all duration-300 hover:scale-[1.02]"
              >
                View Projects
              </Link>
            </div>
          </div>
          {/* RIGHT — Black panel with floating service tiles */}
          <div className="relative">
            {/* Main dark card */}
            <div
              className="relative rounded-[2.5rem] overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)",
                boxShadow:
                  "0 60px 120px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
                minHeight: 560,
              }}
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Ambient orbs */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[60px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)",
                }}
              />
              {/* Central badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className="w-20 h-20 rounded-[1.2rem] flex flex-col items-center justify-center border border-white/10 shadow-2xl"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white mb-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mt-1">
                    CORE
                  </span>
                </div>
                {/* Connecting ring */}
                <div
                  className="absolute inset-[-24px] rounded-full border border-white/[0.06] animate-spin"
                  style={{ animationDuration: "18s" }}
                />
                <div
                  className="absolute inset-[-44px] rounded-full border border-white/[0.04] animate-spin"
                  style={{
                    animationDuration: "30s",
                    animationDirection: "reverse",
                  }}
                />
              </div>
              {/* Service tiles — orbiting the center */}
              {/* Top left */}
              <ServiceTile
                top="12%"
                left="6%"
                color="#6366f1"
                bgColor="rgba(99,102,241,0.15)"
                icon={<CloudIcon />}
                label="Digital Marketing"
                delay="0s"
              />
              {/* Top right */}
              <ServiceTile
                top="8%"
                right="8%"
                color="#10b981"
                bgColor="rgba(16,185,129,0.15)"
                icon={<CodeIcon />}
                label="Web Development"
                delay="0.4s"
              />
              {/* Middle right */}
              <ServiceTile
                top="42%"
                right="4%"
                color="#f59e0b"
                bgColor="rgba(245,158,11,0.15)"
                icon={<ChartIcon />}
                label="Data Analytics"
                delay="0.8s"
              />
              {/* Bottom right */}
              <ServiceTile
                bottom="10%"
                right="8%"
                color="#06b6d4"
                bgColor="rgba(6,182,212,0.15)"
                icon={<BotIcon />}
                label="AI Solutions"
                delay="1.2s"
              />
              {/* Bottom left */}
              <ServiceTile
                bottom="14%"
                left="5%"
                color="#a855f7"
                bgColor="rgba(168,85,247,0.15)"
                icon={<MobileIcon />}
                label="Mobile Apps"
                delay="1.6s"
              />
              {/* Middle left */}
              <ServiceTile
                top="44%"
                left="4%"
                color="#fb923c"
                bgColor="rgba(251,146,60,0.15)"
                icon={<SettingsIcon />}
                label="IT Consulting"
                delay="2s"
              />
            </div>
            {/* Decorative circle behind */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full border-2 border-dashed border-gray-300/60 -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full border border-gray-300/40 -z-10" />
          </div>
        </div>
        {/* Bottom floating trust bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-1 px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-black/[0.07] shadow-lg">
          {["Strategy", "Design", "Development", "Analytics", "Support"].map(
            (t, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-gray-300 mx-1" />
                )}
                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  {t}
                </span>
              </span>
            ),
          )}
        </div>
      </section>
      {/* ── MARQUEE STRIP ── */}
      <div className="relative overflow-hidden bg-gray-950 py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, gi) =>
            [
              "Web Development",
              "Mobile Apps",
              "AI Solutions",
              "Digital Marketing",
              "Data Analytics",
              "IT Consulting",
              "UI/UX Design",
              "Cloud Services",
            ].map((label, i) => (
              <span
                key={`${gi}-${i}`}
                className="inline-flex items-center gap-3 px-6 text-sm font-semibold tracking-widest uppercase text-white/30"
              >
                <span className="text-yellow-400/60">✦</span>
                {label}
              </span>
            )),
          )}
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
          .animate-marquee { animation: marquee 28s linear infinite; }
          @keyframes float-a { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-8px) } }
          @keyframes float-b { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-12px) } }
          @keyframes float-c { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-6px) } }
          .float-a { animation: float-a 4s ease-in-out infinite; }
          .float-b { animation: float-b 5.5s ease-in-out infinite; }
          .float-c { animation: float-c 3.5s ease-in-out infinite; }
        `}</style>
      </div>
      {/* ── SERVICES PREVIEW ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              What we do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-gray-950 leading-tight">
              Full-stack
              <br />
              <em className="font-light not-italic text-gray-400">digital</em>
              <br />
              excellence.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              From strategy to launch, we cover every layer of modern technology
              delivery.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-yellow-400 pb-0.5 hover:border-orange-400 transition-colors"
            >
              All Services
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "Web Development",
                desc: "Custom applications built with modern frameworks, optimized for performance and conversions.",
                color: "#6366f1",
              },
              {
                num: "02",
                title: "Mobile Apps",
                desc: "Native and cross-platform apps that engage users with seamless, fluid experiences.",
                color: "#10b981",
              },
              {
                num: "03",
                title: "AI Solutions",
                desc: "Intelligent systems and chatbots that automate workflows and elevate customer interactions.",
                color: "#06b6d4",
              },
              {
                num: "04",
                title: "Digital Marketing",
                desc: "Data-driven campaigns that amplify brand visibility and drive measurable growth.",
                color: "#f59e0b",
              },
              {
                num: "05",
                title: "Data Analytics",
                desc: "Transform raw data into clarity with advanced dashboards and business intelligence tools.",
                color: "#a855f7",
              },
              {
                num: "06",
                title: "IT Consulting",
                desc: "Strategic technology guidance to modernize infrastructure and future-proof your business.",
                color: "#fb923c",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-400 cursor-pointer overflow-hidden"
              >
                {/* Accent left border on hover */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: s.color }}
                />
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-300">
                    {s.num}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 flex items-center justify-center"
                    style={{ background: `${s.color}20` }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: s.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-950 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CTA BAND ── */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24 max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-10 py-20 md:px-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0f0f0f 0%, #1e1b4b 50%, #0f172a 100%)",
          }}
        >
          {/* Orbs */}
          <div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: "rgba(99,102,241,0.2)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: "rgba(16,185,129,0.15)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">
              Ready to grow?
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white leading-tight">
              Let's build something
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
              >
                extraordinary.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
              Tell us about your project and we'll craft the right strategy to
              move you forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 text-sm font-bold tracking-[0.08em] uppercase text-gray-950 bg-white rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-yellow-300/30 hover:scale-[1.03]"
              >
                Start a Project
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-9 py-4 text-sm font-bold tracking-[0.08em] uppercase text-white border border-white/20 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// ── Sub-components ──────────────────────────────────────────────────────────
function ServiceTile({
  top,
  bottom,
  left,
  right,
  color,
  bgColor,
  icon,
  label,
  delay,
}: {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  label: string;
  delay: string;
}) {
  const floatClass = [
    "float-a",
    "float-b",
    "float-c",
    "float-a",
    "float-b",
    "float-c",
  ][Math.floor(Math.random() * 3)];
  return (
    <div
      className={`absolute z-10 float-b`}
      style={{ top, bottom, left, right, animationDelay: delay }}
    >
      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-lg"
        style={{
          background: bgColor,
          borderColor: `${color}30`,
          boxShadow: `0 8px 32px -4px ${color}30`,
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${color}25` }}
        >
          <span style={{ color }}>{icon}</span>
        </div>
        <span className="text-white font-semibold text-[13px] whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}
// Icons
const CloudIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);
const CodeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);
const ChartIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const BotIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);
const MobileIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);
const SettingsIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
