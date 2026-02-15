"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Replace `image` with your actual screenshot paths, e.g. "/images/finedge.png"
// Replace `liveUrl` with the actual deployed URL of each project.

const projects = [
  {
    id: 1,
    category: "Web Dev",
    colorHex: "#3b82f6",
    client: "FinEdge Solutions",
    industry: "Fintech",
    title: "Real-time trading platform",
    description:
      "Rebuilt a legacy trading dashboard — microservices, live WebSocket feeds, and a clean interface that makes financial data readable at a glance.",
    image: "/images/finedge.png", // ← replace with your screenshot
    liveUrl: "https://finedge.example.com", // ← replace with live site URL
    tags: ["Next.js", "AWS", "WebSockets"],
    results: [
      { value: "10×", label: "Traffic capacity" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    id: 2,
    category: "Mobile",
    colorHex: "#8b5cf6",
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
    colorHex: "#f59e0b",
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

// ─── PLACEHOLDER when no real image is provided ───────────────────────────────
function ImagePlaceholder({ color, title }: { color: string; title: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{
        background: `linear-gradient(135deg, ${color}18 0%, ${color}06 100%)`,
      }}
    >
      {/* Fake browser chrome */}
      <div className="w-4/5 max-w-xs rounded-xl overflow-hidden shadow-lg border border-white/60 bg-white">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[10px] text-gray-400 bg-white rounded px-2 py-0.5 flex-1 text-center font-mono truncate border border-gray-100">
            {title.toLowerCase().replace(/ /g, "-")}.com
          </span>
        </div>
        <div className="p-4 space-y-2">
          <div
            className="h-3 rounded-full w-3/4"
            style={{ background: `${color}30` }}
          />
          <div className="h-2 rounded-full w-full bg-gray-100" />
          <div className="h-2 rounded-full w-5/6 bg-gray-100" />
          <div className="h-2 rounded-full w-2/3 bg-gray-100" />
          <div
            className="mt-3 h-16 rounded-lg"
            style={{ background: `${color}15` }}
          />
          <div className="grid grid-cols-3 gap-1.5 mt-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 rounded-lg bg-gray-50 border border-gray-100"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 font-medium">Add your screenshot</p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white pt-16 md:pt-[68px]">
      {/* ── HERO ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="relative text-center space-y-6 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-gray-900 tracking-tight">
            Work we&apos;re{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              proud of.
            </span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Real projects, real clients, real results. Hover any project to
            visit the live site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md"
            >
              Work with us
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ── SCREENSHOT AREA ── */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 280 }}
                >
                  {/* Real image (shown when file exists) */}
                  <Image
                    src={project.image}
                    alt={`${project.client} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Hide broken image so placeholder shows
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Placeholder (shown behind image; visible when image fails) */}
                  <div className="absolute inset-0 -z-0">
                    <ImagePlaceholder
                      color={project.colorHex}
                      title={project.client}
                    />
                  </div>

                  {/* Hover overlay with "View site" CTA */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${project.colorHex}cc`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-gray-900 font-bold text-sm rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        className="w-4 h-4"
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
                      View live site
                    </a>
                  </div>

                  {/* Category badge — always visible */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm"
                      style={{
                        background: isHovered
                          ? "rgba(255,255,255,0.95)"
                          : `${project.colorHex}15`,
                        color: isHovered ? project.colorHex : project.colorHex,
                        border: `1px solid ${project.colorHex}30`,
                        transition: "background 0.3s ease",
                      }}
                    >
                      {project.industry}
                    </span>
                  </div>

                  {/* External link icon top-right */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                    onClick={(e) => e.stopPropagation()}
                    title="View live site"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
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

                {/* ── PROJECT INFO ── */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 mb-0.5">
                        {project.client}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    {/* Result pills */}
                    <div className="flex gap-2 flex-shrink-0">
                      {project.results.map((r, ri) => (
                        <div
                          key={ri}
                          className="text-center rounded-xl px-3 py-2 min-w-[52px]"
                          style={{ background: `${project.colorHex}10` }}
                        >
                          <p
                            className="text-sm font-bold leading-none"
                            style={{ color: project.colorHex }}
                          >
                            {r.value}
                          </p>
                          <p className="text-[9px] text-gray-400 mt-0.5 leading-tight">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags + link row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 whitespace-nowrap"
                      style={{ color: project.colorHex }}
                    >
                      View site
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS — dark ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#050a14]">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-10">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "200+", label: "Projects delivered", color: "#3b82f6" },
              { value: "98%", label: "Client satisfaction", color: "#10b981" },
              { value: "8+", label: "Years of experience", color: "#8b5cf6" },
              { value: "50+", label: "Team members", color: "#f59e0b" },
            ].map((s, i) => (
              <div key={i} className="space-y-1.5">
                <p
                  className="text-4xl lg:text-5xl font-bold"
                  style={{ color: s.color }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full mb-6">
          Ready to start?
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Your project could be next.
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          We'd love to hear about what you're building. Drop us a message and
          we'll get back to you within one business day.
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
            href="/services"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
