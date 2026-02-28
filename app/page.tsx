"use client";

import Link from "next/link";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    colorHex: "#6366f1",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Web Development",
    shortDesc: "Modern, performant web applications.",
    longDesc:
      "We design and build custom web applications tailored to your business — from sleek marketing sites to complex platforms. Every project is built with scalability, speed, and great user experience at its core.",
    highlights: ["Next.js & React", "API Integration", "Performance Audits"],
  },
  {
    colorHex: "#a855f7",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Mobile Apps",
    shortDesc: "Native & cross-platform mobile experiences.",
    longDesc:
      "From iOS to Android, we craft apps that feel at home on every device. Whether it's a consumer product or an internal tool, we prioritise smooth interactions and polished design at every screen size.",
    highlights: ["iOS & Android", "React Native", "App Store Optimisation"],
  },
  {
    colorHex: "#10b981",
    iconPath:
      "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Digital Marketing",
    shortDesc: "Strategy that drives real, measurable growth.",
    longDesc:
      "We build data-driven campaigns across search, social, and email — all aligned to your revenue goals. No vanity metrics, just clear ROI and sustainable growth strategies that compound over time.",
    highlights: ["SEO & SEM", "Paid Social", "Conversion Optimisation"],
  },
  {
    colorHex: "#06b6d4",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI Solutions",
    shortDesc: "Intelligent tools built for your workflow.",
    longDesc:
      "From custom chatbots to automated pipelines, we integrate AI where it creates the most value for your business. We cut through the hype and focus on practical automation that saves time and scales effortlessly.",
    highlights: ["Custom LLM Apps", "Process Automation", "AI Chatbots"],
  },
  {
    colorHex: "#ef4444",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Data Analytics",
    shortDesc: "Turn raw data into decisions that matter.",
    longDesc:
      "We build dashboards, reports, and analytics pipelines that surface the insights your team actually needs. From data warehousing to live visualisations, we make your data work as hard as you do.",
    highlights: ["Custom Dashboards", "Data Pipelines", "BI Tools"],
  },
  {
    colorHex: "#fb923c",
    iconPath:
      "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: "IT Consulting",
    shortDesc: "Strategic guidance for smarter tech decisions.",
    longDesc:
      "Navigating technology decisions is complex. We act as your trusted advisor — helping you choose, implement, and manage the right tools and infrastructure so you can focus on building your business.",
    highlights: ["Tech Audits", "Architecture Planning", "Vendor Selection"],
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years of Experience" },
  { value: "50+", label: "Team Members" },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn your goals, constraints, and vision through focused discovery sessions.",
    color: "#6366f1",
  },
  {
    step: "02",
    title: "Strategise",
    desc: "We map a clear roadmap — architecture, timelines, and milestones aligned to your business.",
    color: "#10b981",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our team executes with agile sprints, continuous delivery, and transparent communication.",
    color: "#f59e0b",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We deploy, monitor, and support — ensuring a smooth go-live and long-term performance.",
    color: "#fb923c",
  },
];

const techStack = [
  {
    label: "Digital Marketing",
    color: "#6366f1",
    iconPath:
      "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    delay: "0s",
    floatClass: "float-b",
    pos: "top-10 left-8 md:left-12",
  },
  {
    label: "Web Development",
    color: "#10b981",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    delay: "0.4s",
    floatClass: "float-a",
    pos: "top-28 right-8 md:right-12",
  },
  {
    label: "Data Visualisation",
    color: "#ef4444",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    delay: "0.2s",
    floatClass: "float-c",
    pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Mobile Apps",
    color: "#a855f7",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    delay: "0.6s",
    floatClass: "float-b",
    pos: "bottom-28 left-8 md:left-16",
  },
  {
    label: "AI ChatBot",
    color: "#06b6d4",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    delay: "0.8s",
    floatClass: "float-a",
    pos: "bottom-10 right-8 md:right-12",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const toggle = (i: number) =>
    setActiveService((prev) => (prev === i ? null : i));

  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-20 pb-16">
        {/* Ghost watermark */}
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

            <h1
              className="font-black leading-[0.95] tracking-[-0.04em] text-gray-950"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Stay ahead
              <br />
              <span className="italic font-light text-gray-500 tracking-[-0.02em]">
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

            <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light">
              A results-driven IT services company focused on understanding your
              business goals and delivering scalable, modern technology
              solutions.
            </p>

            {/* Inline stats row */}
            <div className="flex gap-10 pt-2">
              {[
                { num: "200+", label: "Projects Delivered" },
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

          {/* RIGHT — Dark panel with floating tiles */}
          <div className="relative">
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

              {/* Floating service tiles */}
              {techStack.map((item, i) => (
                <div
                  key={i}
                  className={`absolute z-10 ${item.pos} ${item.floatClass}`}
                  style={{ animationDelay: item.delay }}
                >
                  <div
                    className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-lg"
                    style={{
                      background: `${item.color}20`,
                      borderColor: `${item.color}30`,
                      boxShadow: `0 8px 32px -4px ${item.color}30`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}25` }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={item.color}
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-[13px] whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full border-2 border-dashed border-gray-300/60 -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full border border-gray-300/40 -z-10" />
          </div>
        </div>

        {/* Bottom trust bar */}
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
      </div>

      {/* ── STATS STRIP ── */}
      <section className="border-b border-black/[0.06] bg-white/40 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-black/[0.07]">
          {stats.map((s, i) => (
            <div key={i} className="text-center lg:px-10">
              <p className="text-5xl lg:text-6xl font-black tracking-[-0.04em] text-gray-950">
                {s.value}
              </p>
              <p className="text-xs font-semibold text-gray-400 mt-2 tracking-[0.15em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ACCORDION ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky left header */}
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              What We Offer
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-gray-950 leading-tight">
              Six ways we
              <br />
              <em className="font-light not-italic text-gray-400">move your</em>
              <br />
              business forward.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              Not sure which service fits your needs?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-yellow-400 pb-0.5 hover:border-orange-400 transition-colors"
            >
              Talk to our team
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

          {/* Accordion */}
          <div className="flex-1 divide-y divide-black/[0.07]">
            {services.map((s, i) => {
              const isOpen = activeService === i;
              return (
                <div key={i}>
                  {/* Trigger row */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-5 py-7 text-left"
                  >
                    {/* Number */}
                    <span
                      className="text-[11px] font-bold tabular-nums w-7 flex-shrink-0 tracking-[0.15em] transition-colors duration-300"
                      style={{ color: isOpen ? s.colorHex : "#d1d5db" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon pill */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen
                          ? `${s.colorHex}18`
                          : "rgba(255,255,255,0.8)",
                        border: `1px solid ${isOpen ? s.colorHex + "30" : "rgba(0,0,0,0.07)"}`,
                      }}
                    >
                      <svg
                        className="w-4 h-4 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke={isOpen ? s.colorHex : "#9ca3af"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={s.iconPath}
                        />
                      </svg>
                    </div>

                    {/* Title + short desc */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="block font-black tracking-[-0.02em] transition-colors duration-200"
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.2rem)",
                          color: isOpen ? "#030712" : "#374151",
                        }}
                      >
                        {s.title}
                      </span>
                      {!isOpen && (
                        <span className="block text-sm text-gray-400 mt-0.5 truncate font-light">
                          {s.shortDesc}
                        </span>
                      )}
                    </div>

                    {/* Toggle +/× */}
                    <div
                      className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        borderColor: isOpen ? s.colorHex : "rgba(0,0,0,0.1)",
                        background: isOpen ? `${s.colorHex}12` : "transparent",
                      }}
                    >
                      <svg
                        className="w-3 h-3 transition-transform duration-300"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          color: isOpen ? s.colorHex : "#9ca3af",
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded panel */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "400px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div
                      className="ml-[4.5rem] mb-8 mr-4 sm:mr-10 p-7 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-8"
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        border: `1px solid ${s.colorHex}20`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {s.longDesc}
                      </p>
                      <div className="space-y-5">
                        <div className="space-y-3">
                          {s.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-center gap-3">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: s.colorHex }}
                              />
                              <span className="text-sm text-gray-700 font-semibold">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-bold border-b-2 pb-0.5 transition-colors duration-200"
                          style={{
                            color: s.colorHex,
                            borderColor: s.colorHex + "50",
                          }}
                        >
                          Get a free consultation
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 bg-gray-950">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start lg:items-end mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                Our Process
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white leading-tight">
                How We
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  Work.
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md lg:pb-3 font-light">
              A clear, repeatable process that keeps every project on track from
              day one.
            </p>
          </div>

          {/* Process cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-2 w-4 h-px bg-white/10 z-10" />
                )}

                {/* Step badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-7 text-sm font-black text-white"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}80, ${p.color})`,
                  }}
                >
                  {p.step}
                </div>

                <h3 className="text-xl font-black text-white tracking-[-0.02em] mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {p.desc}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
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
              Ready to start?
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-white leading-tight">
              Let's build something
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
              >
                great together.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed font-light">
              Tell us about your project and we'll get back to you within one
              business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 text-sm font-bold tracking-[0.08em] uppercase text-gray-950 bg-white rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-yellow-300/30 hover:scale-[1.03]"
              >
                Start a conversation
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
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
