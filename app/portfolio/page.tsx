// Version 3.0 — Portfolio Page — V1 Content + V2 Aesthetics

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    category: "Web Dev",
    colorHex: "#6366f1",
    client: "FinEdge Solutions",
    industry: "Fintech",
    title: "Real-time trading platform",
    description:
      "Rebuilt a legacy trading dashboard — microservices, live WebSocket feeds, and a clean interface that makes financial data readable at a glance.",
    image: "/images/finedge.png",
    liveUrl: "https://finedge.example.com",
    tags: ["Next.js", "AWS", "WebSockets"],
    results: [
      { value: "10×", label: "Traffic capacity" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    id: 2,
    category: "Mobile",
    colorHex: "#a855f7",
    client: "TradePoint Retail",
    industry: "E-commerce",
    title: "AI-powered shopping app",
    description:
      "iOS & Android app with personalised recommendations, one-tap checkout, and push campaigns that brought lapsed customers back.",
    image: "/images/tradepoint.png",
    liveUrl: "https://tradepoint.example.com",
    tags: ["React Native", "Firebase", "OpenAI"],
    results: [
      { value: "60%", label: "Revenue growth" },
      { value: "4.8★", label: "App Store rating" },
    ],
  },
  {
    id: 3,
    category: "AI",
    colorHex: "#06b6d4",
    client: "LogiCore Systems",
    industry: "Logistics",
    title: "Document intelligence pipeline",
    description:
      "End-to-end AI pipeline that reads, classifies, and routes hundreds of logistics documents daily with 98.4% accuracy.",
    image: "/images/logicore.png",
    liveUrl: "https://logicore.example.com",
    tags: ["Python", "LangChain", "Pinecone"],
    results: [
      { value: "70%", label: "Faster processing" },
      { value: "12 hrs", label: "Saved / week" },
    ],
  },
  {
    id: 4,
    category: "Data",
    colorHex: "#ef4444",
    client: "Meridian Health",
    industry: "Healthcare",
    title: "Executive analytics suite",
    description:
      "Replaced fragile spreadsheets with a live BigQuery warehouse and Looker dashboards that give leadership real-time KPI visibility.",
    image: "/images/meridian.png",
    liveUrl: "https://meridian.example.com",
    tags: ["BigQuery", "dbt", "Looker"],
    results: [
      { value: "15 hrs", label: "Saved / week" },
      { value: "Live", label: "Data freshness" },
    ],
  },
  {
    id: 5,
    category: "Marketing",
    colorHex: "#10b981",
    client: "BloomReach Agency",
    industry: "Marketing",
    title: "Performance marketing overhaul",
    description:
      "Rebuilt Google and Meta campaigns, launched an SEO programme, and redesigned landing pages — cutting CPA by 55%.",
    image: "/images/bloomreach.png",
    liveUrl: "https://bloomreach.example.com",
    tags: ["Google Ads", "Meta Ads", "GA4"],
    results: [
      { value: "2.4×", label: "ROAS" },
      { value: "55%", label: "Lower CPA" },
    ],
  },
  {
    id: 6,
    category: "Web Dev",
    colorHex: "#fb923c",
    client: "NovaBridge",
    industry: "SaaS",
    title: "Cloud infrastructure audit",
    description:
      "Full AWS audit, eliminated waste, moved to IaC with automated cost alerts — saving $180k annually.",
    image: "/images/novabridge.png",
    liveUrl: "https://novabridge.example.com",
    tags: ["AWS", "Terraform", "Kubernetes"],
    results: [
      { value: "30%", label: "Cost reduction" },
      { value: "$180k", label: "Annual savings" },
    ],
  },
];

const categories = ["All", "Web Dev", "Mobile", "AI", "Data", "Marketing"];

const stats = [
  { value: "200+", label: "Projects delivered", color: "#6366f1" },
  { value: "98%", label: "Client satisfaction", color: "#10b981" },
  { value: "8+", label: "Years of experience", color: "#a855f7" },
  { value: "50+", label: "Team members", color: "#fb923c" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-10 max-w-[1400px] mx-auto">
        {/* Ghost watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-[-0.06em] pointer-events-none select-none leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(60px,13vw,170px)",
            color: "rgba(0,0,0,0.033)",
          }}
        >
          PORTFOLIO
        </div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white/60 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
              Our Work
            </span>
          </div>

          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] text-gray-950 mb-8"
            style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)" }}
          >
            Work we&apos;re
            <br />
            <span className="italic font-light text-gray-400 tracking-[-0.02em]">
              genuinely
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">proud of.</span>
              <span
                className="absolute bottom-2 left-0 w-full h-4 -z-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #facc15 0%, #fb923c 100%)",
                }}
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light mb-10">
            Real projects, real clients, real results. Every number here is
            pulled from an actual engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02]"
            >
              Work with us
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
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-gray-900 border-2 border-gray-900/25 rounded-full hover:border-gray-900/60 transition-all duration-300 hover:scale-[1.02]"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="relative overflow-hidden bg-gray-950 py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, gi) =>
            projects.map((p, i) => (
              <span
                key={`${gi}-${i}`}
                className="inline-flex items-center gap-3 px-6 text-sm font-semibold tracking-widest uppercase text-white/30"
              >
                <span className="text-yellow-400/60">✦</span>
                {p.client}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ── PROJECT SHOWCASE — Split-screen explorer ── */}
      <section className="py-16 max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-1.5">
              Selected Work
            </p>
            <p className="text-sm text-gray-500 font-light">
              <span className="hidden lg:inline">
                Hover to preview · click to visit
              </span>
              <span className="lg:hidden">Tap any project to expand</span>
            </p>
          </div>
        </div>

        {filtered.length > 0 ? (
          <>
            {/* ══ DESKTOP: split-screen hover explorer (lg+) ══ */}
            <div className="hidden lg:flex gap-0">
              {/* LEFT — sticky preview panel */}
              <div className="sticky top-8 self-start w-[480px] xl:w-[540px] shrink-0 ml-10 xl:ml-16 h-[calc(100vh-4rem)] max-h-[700px]">
                {(() => {
                  const preview = hoveredId
                    ? (projects.find((p) => p.id === hoveredId) ?? filtered[0])
                    : filtered[0];
                  return (
                    <div
                      className="relative w-full h-full rounded-[2rem] overflow-hidden transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(160deg, #0d0d14 0%, #101624 100%)",
                        boxShadow: `0 32px 80px -16px ${preview.colorHex}30, 0 0 0 1px rgba(255,255,255,0.06)`,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                          backgroundImage:
                            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                          backgroundSize: "36px 36px",
                        }}
                      />
                      <div
                        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[90px] pointer-events-none transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, ${preview.colorHex}35 0%, transparent 70%)`,
                        }}
                      />
                      <div
                        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-[70px] pointer-events-none transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, ${preview.colorHex}18 0%, transparent 70%)`,
                        }}
                      />
                      <Image
                        src={preview.image}
                        alt={preview.client}
                        fill
                        className="object-cover object-top opacity-[0.18] transition-all duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />

                      <div className="relative z-10 flex flex-col h-full p-8">
                        {/* Top bar */}
                        <div className="flex items-center justify-between mb-auto">
                          <span
                            className="text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1.5 rounded-full transition-all duration-500"
                            style={{
                              background: `${preview.colorHex}20`,
                              color: preview.colorHex,
                              border: `1px solid ${preview.colorHex}35`,
                            }}
                          >
                            {preview.industry}
                          </span>
                          <a
                            href={preview.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-white/50"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                        {/* Browser mockup */}
                        <div className="flex-1 flex items-center justify-center py-6">
                          <div
                            className="w-full max-w-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              backdropFilter: "blur(12px)",
                            }}
                          >
                            <div
                              className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/[0.07]"
                              style={{ background: "rgba(255,255,255,0.03)" }}
                            >
                              <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                              <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                              <div className="ml-2 flex-1 bg-white/5 rounded px-3 py-1 border border-white/5 flex items-center gap-1.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500"
                                  style={{
                                    background: preview.colorHex,
                                    opacity: 0.6,
                                  }}
                                />
                                <span className="text-[9px] text-white/20 font-mono truncate">
                                  {preview.client
                                    .toLowerCase()
                                    .replace(/ /g, "")}
                                  .io
                                </span>
                              </div>
                            </div>
                            <div className="p-5 space-y-3">
                              <div className="flex items-center justify-between mb-4">
                                <div
                                  className="h-3 w-16 rounded transition-all duration-500"
                                  style={{
                                    background: `${preview.colorHex}40`,
                                  }}
                                />
                                <div className="flex gap-2">
                                  {[1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className="h-1.5 w-8 rounded-full bg-white/8"
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="h-3 rounded w-3/4 bg-white/10" />
                              <div className="h-2 rounded-full w-full bg-white/5" />
                              <div className="h-2 rounded-full w-4/5 bg-white/5" />
                              <div className="grid grid-cols-3 gap-2 mt-4">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="rounded-xl border border-white/5 overflow-hidden"
                                    style={{
                                      background: "rgba(255,255,255,0.02)",
                                    }}
                                  >
                                    <div
                                      className="h-10 transition-all duration-500"
                                      style={{
                                        background: `${preview.colorHex}${i === 1 ? "20" : "0c"}`,
                                      }}
                                    />
                                    <div className="p-2 space-y-1">
                                      <div className="h-1.5 rounded-full w-full bg-white/8" />
                                      <div className="h-1.5 rounded-full w-3/4 bg-white/5" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-center mt-3">
                                <div
                                  className="h-6 w-24 rounded-full transition-all duration-500"
                                  style={{
                                    background: `${preview.colorHex}30`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Bottom stats + CTA */}
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            {preview.results.map((r, ri) => (
                              <div
                                key={ri}
                                className="flex-1 px-4 py-3 rounded-2xl border transition-all duration-500"
                                style={{
                                  background: `${preview.colorHex}10`,
                                  borderColor: `${preview.colorHex}25`,
                                }}
                              >
                                <p
                                  className="text-xl font-black leading-none transition-all duration-500"
                                  style={{ color: preview.colorHex }}
                                >
                                  {r.value}
                                </p>
                                <p className="text-[10px] text-white/30 mt-1 font-medium">
                                  {r.label}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {preview.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all duration-500"
                                style={{
                                  background: `${preview.colorHex}14`,
                                  color: preview.colorHex,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={preview.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/cta flex items-center justify-between w-full px-5 py-3.5 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                          >
                            <span className="text-sm font-black text-white tracking-tight">
                              {preview.client}
                            </span>
                            <span
                              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300"
                              style={{ color: preview.colorHex }}
                            >
                              Visit site
                              <svg
                                className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* RIGHT — hover list */}
              <div className="flex-1 min-w-0 px-10 xl:px-14">
                {filtered.map((project) => {
                  const isActive = (hoveredId ?? filtered[0].id) === project.id;
                  const globalIdx = projects.findIndex(
                    (p) => p.id === project.id,
                  );
                  return (
                    <a
                      key={project.id}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-10 py-8 border-b border-black/[0.07] no-underline transition-all duration-300"
                      style={{
                        background: isActive
                          ? `${project.colorHex}05`
                          : "transparent",
                      }}
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={(e) => e.preventDefault()}
                    >
                      <div
                        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-300"
                        style={{
                          background: isActive
                            ? project.colorHex
                            : "transparent",
                        }}
                      />
                      <span
                        className="text-5xl font-black tabular-nums leading-none shrink-0 select-none pl-5 transition-all duration-300"
                        style={{
                          color: isActive
                            ? project.colorHex
                            : "rgba(0,0,0,0.06)",
                        }}
                      >
                        {String(globalIdx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                            style={{
                              background: `${project.colorHex}12`,
                              color: project.colorHex,
                            }}
                          >
                            {project.industry}
                          </span>
                          <span className="text-xs text-gray-400 font-light">
                            {project.client}
                          </span>
                        </div>
                        <h3
                          className="font-black leading-tight tracking-[-0.03em] transition-all duration-300"
                          style={{
                            fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
                            color: isActive ? "#030712" : "#6b7280",
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-sm text-gray-500 font-light leading-relaxed overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: isActive ? "60px" : "0px",
                            opacity: isActive ? 1 : 0,
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {project.results.map((r, ri) => (
                          <div
                            key={ri}
                            className="text-right transition-all duration-300"
                          >
                            <p
                              className="text-xl font-black leading-none tabular-nums"
                              style={{
                                color: isActive ? project.colorHex : "#d1d5db",
                              }}
                            >
                              {r.value}
                            </p>
                            <p className="text-[9px] text-gray-400 mt-0.5 font-medium uppercase tracking-wide">
                              {r.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-1 transition-all duration-300"
                        style={{
                          background: isActive
                            ? project.colorHex
                            : "rgba(0,0,0,0.04)",
                          transform: isActive
                            ? "translateX(4px)"
                            : "translateX(0)",
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: isActive ? "#fff" : "#d1d5db" }}
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
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ══ MOBILE: tap-to-expand accordion (below lg) ══ */}
            <div className="lg:hidden px-6 sm:px-10">
              {filtered.map((project) => {
                const isOpen = hoveredId === project.id;
                const globalIdx = projects.findIndex(
                  (p) => p.id === project.id,
                );
                return (
                  <div
                    key={`mob-${project.id}`}
                    className="border-b border-black/[0.07] last:border-0"
                  >
                    {/* Tap row */}
                    <button
                      className="w-full flex items-center gap-4 py-6 text-left transition-all duration-300"
                      style={{
                        background: isOpen
                          ? `${project.colorHex}05`
                          : "transparent",
                      }}
                      onClick={() => setHoveredId(isOpen ? null : project.id)}
                    >
                      {/* Left accent */}
                      <div
                        className="w-1 self-stretch rounded-full shrink-0 transition-all duration-300"
                        style={{
                          background: isOpen ? project.colorHex : "transparent",
                          minHeight: 48,
                        }}
                      />

                      {/* Index + text */}
                      <span
                        className="text-3xl font-black tabular-nums leading-none shrink-0 select-none transition-all duration-300 w-12 text-center"
                        style={{
                          color: isOpen ? project.colorHex : "rgba(0,0,0,0.08)",
                        }}
                      >
                        {String(globalIdx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
                            style={{
                              background: `${project.colorHex}12`,
                              color: project.colorHex,
                            }}
                          >
                            {project.industry}
                          </span>
                          <span className="text-[11px] text-gray-400 font-light">
                            {project.client}
                          </span>
                        </div>
                        <h3
                          className="font-black text-base tracking-tight leading-snug transition-colors duration-300"
                          style={{ color: isOpen ? "#030712" : "#6b7280" }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* Expand icon */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mr-1"
                        style={{
                          background: isOpen
                            ? project.colorHex
                            : "rgba(0,0,0,0.05)",
                          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: isOpen ? "#fff" : "#9ca3af" }}
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
                      </div>
                    </button>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: isOpen ? "520px" : "0px" }}
                    >
                      <div className="pb-6 space-y-5">
                        {/* Dark preview card */}
                        <div
                          className="relative rounded-2xl overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(140deg, #0d0d14, #101624)",
                            minHeight: 200,
                          }}
                        >
                          <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                              backgroundImage:
                                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                              backgroundSize: "28px 28px",
                            }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `radial-gradient(ellipse at 70% 30%, ${project.colorHex}28 0%, transparent 65%)`,
                            }}
                          />
                          <Image
                            src={project.image}
                            alt={project.client}
                            fill
                            className="object-cover object-top opacity-10"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                          {/* Mini browser mockup */}
                          <div className="relative z-10 flex items-center justify-center py-6 px-6">
                            <div
                              className="w-full max-w-[260px] rounded-xl overflow-hidden border border-white/10 shadow-xl"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                backdropFilter: "blur(8px)",
                              }}
                            >
                              <div
                                className="flex items-center gap-1 px-2.5 py-2 border-b border-white/[0.07]"
                                style={{ background: "rgba(255,255,255,0.03)" }}
                              >
                                <span className="w-2 h-2 rounded-full bg-red-400/50" />
                                <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
                                <span className="w-2 h-2 rounded-full bg-green-400/50" />
                                <div className="ml-1.5 flex-1 bg-white/5 rounded px-2 py-0.5 text-[8px] text-white/20 font-mono truncate border border-white/5">
                                  {project.client
                                    .toLowerCase()
                                    .replace(/ /g, "")}
                                  .io
                                </div>
                              </div>
                              <div className="p-3 space-y-2">
                                <div
                                  className="h-2.5 rounded w-2/3"
                                  style={{
                                    background: `${project.colorHex}40`,
                                  }}
                                />
                                <div className="h-1.5 rounded-full w-full bg-white/5" />
                                <div className="h-1.5 rounded-full w-4/5 bg-white/5" />
                                <div className="grid grid-cols-3 gap-1.5 mt-2">
                                  {[1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className="h-8 rounded-lg border border-white/5"
                                      style={{
                                        background: `${project.colorHex}${i === 1 ? "18" : "08"}`,
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Floating stats */}
                          <div className="absolute bottom-3 left-3 flex gap-2">
                            {project.results.map((r, ri) => (
                              <div
                                key={ri}
                                className="px-2.5 py-1.5 rounded-lg border backdrop-blur-sm"
                                style={{
                                  background: `${project.colorHex}20`,
                                  borderColor: `${project.colorHex}40`,
                                }}
                              >
                                <p
                                  className="text-xs font-black leading-none"
                                  style={{ color: project.colorHex }}
                                >
                                  {r.value}
                                </p>
                                <p className="text-[8px] text-white/40 mt-0.5">
                                  {r.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500 font-light leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags + CTA row */}
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                                style={{
                                  background: `${project.colorHex}10`,
                                  color: project.colorHex,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-[0.06em] uppercase text-white transition-all duration-200"
                            style={{ background: project.colorHex }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit site
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="px-6 sm:px-10 lg:px-16 text-center py-24">
            <p className="text-gray-400 font-light">
              No projects in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* ── STATS — dark ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
            {/* Left label */}
            <div className="shrink-0 space-y-3">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                By the numbers
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                The results
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  speak for themselves.
                </span>
              </h2>
            </div>

            {/* Stats grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${s.color}, transparent)`,
                    }}
                  />
                  <p
                    className="text-4xl lg:text-5xl font-black mb-2 tracking-tight"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm text-gray-500 font-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-10 py-20 md:px-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0f0f0f 0%, #1e1b4b 50%, #0f172a 100%)",
          }}
        >
          <div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: "rgba(99,102,241,0.2)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px]"
            style={{ background: "rgba(251,146,60,0.15)" }}
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
            <h2
              className="font-black tracking-[-0.04em] text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Your project
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
              >
                could be next.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed font-light">
              We'd love to hear about what you're building. Drop us a message
              and we'll get back to you within one business day.
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
                href="/services"
                className="inline-flex items-center justify-center px-9 py-4 text-sm font-bold tracking-[0.08em] uppercase text-white border border-white/20 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        .animate-marquee { animation: marquee 28s linear infinite; }
      `}</style>
    </main>
  );
}
