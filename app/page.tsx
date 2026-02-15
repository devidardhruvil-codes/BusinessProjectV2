"use client";

import Link from "next/link";
import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    colorHex: "#3b82f6",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Web Development",
    shortDesc: "Modern, performant web applications.",
    longDesc:
      "We design and build custom web applications tailored to your business — from sleek marketing sites to complex platforms. Every project is built with scalability, speed, and great user experience at its core.",
    highlights: ["Next.js & React", "API Integration", "Performance Audits"],
  },
  {
    colorHex: "#8b5cf6",
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
    colorHex: "#f59e0b",
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
    color: "#3b82f6",
  },
  {
    step: "02",
    title: "Strategise",
    desc: "We map a clear roadmap — architecture, timelines, and milestones aligned to your business.",
    color: "#8b5cf6",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our team executes with agile sprints, continuous delivery, and transparent communication.",
    color: "#10b981",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We deploy, monitor, and support — ensuring a smooth go-live and long-term performance.",
    color: "#f59e0b",
  },
];

const techStack = [
  {
    label: "Digital Marketing",
    color: "#3b82f6",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    delay: "0s",
    pos: "top-10 left-8 md:left-12",
  },
  {
    label: "Web Development",
    color: "#10b981",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    delay: "0.4s",
    pos: "top-28 right-8 md:right-12",
  },
  {
    label: "Data Visualisation",
    color: "#ef4444",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    delay: "0.2s",
    pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    label: "Mobile Apps",
    color: "#8b5cf6",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    delay: "0.6s",
    pos: "bottom-28 left-8 md:left-16",
  },
  {
    label: "AI ChatBot",
    color: "#06b6d4",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    delay: "0.8s",
    pos: "bottom-10 right-8 md:right-12",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggle = (i: number) =>
    setActiveService((prev) => (prev === i ? null : i));

  return (
    <main className="min-h-screen bg-white pt-6 md:pt-4">
      {/* ── HERO ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
              IT Services & Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-gray-900 tracking-tight">
              Stay ahead with
              <br />
              progressive
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                IT strategies.
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A results-driven IT services company focused on understanding your
              business goals and delivering scalable, modern technology
              solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              {[
                { label: "200+ Projects", color: "#3b82f6" },
                { label: "98% Satisfaction", color: "#10b981" },
                { label: "8+ Years", color: "#f59e0b" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: badge.color }}
                  />
                  {badge.label}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-0 hover:gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
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
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl ring-1 ring-white/10">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl" />
            <div className="absolute inset-0 p-6 md:p-8">
              {techStack.map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.pos} bg-white/8 backdrop-blur-md px-4 md:px-5 py-3 md:py-3.5 rounded-2xl border border-white/15 shadow-lg`}
                  style={{
                    animation: `floatCard 4s ease-in-out infinite`,
                    animationDelay: item.delay,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}25` }}
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={item.color}
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
          {stats.map((s, i) => (
            <div key={i} className="text-center lg:px-8">
              <p className="text-4xl lg:text-5xl font-bold text-gray-900">
                {s.value}
              </p>
              <p className="text-sm text-gray-500 mt-1.5 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ACCORDION ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-6xl mx-auto">
        {/* Section header — asymmetric two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-5">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Six ways we move
              <br />
              your business forward.
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-100">
          {services.map((s, i) => {
            const isOpen = activeService === i;
            return (
              <div key={i}>
                {/* Trigger row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-5 py-6 text-left"
                >
                  {/* Number */}
                  <span
                    className="text-xs font-bold tabular-nums w-7 flex-shrink-0 transition-colors duration-300"
                    style={{ color: isOpen ? s.colorHex : "#d1d5db" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon pill */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? `${s.colorHex}18` : "#f9fafb",
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

                  {/* Title + collapsed hint */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="block text-base sm:text-lg font-semibold transition-colors duration-200"
                      style={{ color: isOpen ? "#111827" : "#374151" }}
                    >
                      {s.title}
                    </span>
                    {!isOpen && (
                      <span className="block text-sm text-gray-400 mt-0.5 truncate">
                        {s.shortDesc}
                      </span>
                    )}
                  </div>

                  {/* +/× toggle */}
                  <div
                    className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? s.colorHex : "#e5e7eb",
                      background: isOpen ? `${s.colorHex}10` : "transparent",
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
                    maxHeight: isOpen ? "320px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pl-[4.25rem] pb-8 pr-4 sm:pr-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {s.longDesc}
                    </p>
                    <div className="space-y-5">
                      <div className="space-y-2.5">
                        {s.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-center gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: s.colorHex }}
                            />
                            <span className="text-sm text-gray-600 font-medium">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group/link"
                        style={{ color: s.colorHex }}
                      >
                        Get a free consultation
                        <svg
                          className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200"
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

        {/* Footer nudge */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Not sure which service fits your needs?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors duration-200"
          >
            Talk to our team
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
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-18 bg-gray-50/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-violet-500 bg-violet-50 px-4 py-1.5 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A clear, repeatable process that keeps every project on track from
              day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2.5 w-5 h-px bg-gray-200 z-10" />
                )}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}cc, ${p.color})`,
                  }}
                >
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full mb-6">
          Ready to start?
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let's build something great together.
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Tell us about your project and we'll get back to you within one
          business day.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Start a conversation
            <svg
              className="w-4 h-4"
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
            className="inline-flex items-center justify-center px-9 py-4 text-base font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            See our work
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
}
