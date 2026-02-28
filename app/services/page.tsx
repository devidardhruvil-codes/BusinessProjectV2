// Version 3.0 — V1 Content + V2 Aesthetics — Single Component

"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "web-development",
    colorHex: "#6366f1",
    label: "01",
    tag: "Web Development",
    headline: "Websites & apps built to perform.",
    shortDesc:
      "Custom web applications crafted for speed, scalability, and exceptional user experience.",
    longDesc:
      "From sleek marketing sites to complex SaaS platforms, we engineer web experiences that are fast by default, accessible by design, and built to scale as your business grows. We don't use templates — every line of code is written with your specific goals in mind.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    highlights: ["Next.js & React", "API Integration", "Performance Audits"],
    deliverables: [
      "Custom design & development",
      "Mobile-responsive layouts",
      "CMS integration",
      "SEO-ready architecture",
      "Analytics & tracking setup",
      "Post-launch support",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    whoFor:
      "Startups, scale-ups, and enterprises that need a digital home that converts.",
    stat: { value: "3×", label: "avg. performance improvement" },
  },
  {
    id: "mobile-apps",
    colorHex: "#a855f7",
    label: "02",
    tag: "Mobile Apps",
    headline: "Native feel. Cross-platform reach.",
    shortDesc:
      "iOS and Android apps that users love, built with the right stack for your product.",
    longDesc:
      "We design and build mobile apps that feel at home on every device. Whether you need a consumer-facing product, an internal operations tool, or a companion app to your web platform — we handle the full lifecycle from concept to App Store.",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    highlights: ["iOS & Android", "React Native", "App Store Optimisation"],
    deliverables: [
      "UI/UX design & prototyping",
      "iOS & Android development",
      "App Store submission",
      "Push notification setup",
      "Offline-first architecture",
      "Performance optimisation",
    ],
    tech: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "GraphQL"],
    whoFor:
      "Founders and product teams ready to ship a mobile experience users actually keep.",
    stat: { value: "4.8★", label: "average app store rating" },
  },
  {
    id: "digital-marketing",
    colorHex: "#10b981",
    label: "03",
    tag: "Digital Marketing",
    headline: "Growth that compounds over time.",
    shortDesc:
      "Data-driven campaigns that target the right audience and turn clicks into customers.",
    longDesc:
      "We build marketing systems — not one-off campaigns. From search to social to email, every channel is aligned to your revenue targets. We obsess over attribution, cut what doesn't work fast, and scale what does.",
    iconPath:
      "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    highlights: ["SEO & SEM", "Paid Social", "Conversion Optimisation"],
    deliverables: [
      "SEO audit & strategy",
      "Google & Meta ad campaigns",
      "Email marketing flows",
      "Content strategy",
      "Monthly performance reports",
      "Landing page optimisation",
    ],
    tech: ["Google Ads", "Meta Ads", "HubSpot", "Klaviyo", "Ahrefs", "GA4"],
    whoFor:
      "Businesses with a proven product that need a scalable, predictable acquisition engine.",
    stat: { value: "60%", label: "avg. revenue uplift in 90 days" },
  },
  {
    id: "ai-solutions",
    colorHex: "#06b6d4",
    label: "04",
    tag: "AI Solutions",
    headline: "AI that earns its keep.",
    shortDesc:
      "Custom LLM apps, automation pipelines, and intelligent tools built around your workflow.",
    longDesc:
      "We cut through the AI hype and focus on where it creates real value: automating repetitive processes, surfacing insights from your data, and building chatbots that actually answer questions. Every solution is practical, measurable, and built to scale.",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    highlights: ["Custom LLM Apps", "Process Automation", "AI Chatbots"],
    deliverables: [
      "AI strategy & use-case audit",
      "Custom chatbot development",
      "Document processing pipelines",
      "LLM fine-tuning & RAG setup",
      "Workflow automation",
      "Monitoring & evaluation",
    ],
    tech: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"],
    whoFor:
      "Teams drowning in manual processes or sitting on untapped data with no time to act.",
    stat: { value: "70%", label: "reduction in manual processing time" },
  },
  {
    id: "data-analytics",
    colorHex: "#ef4444",
    label: "05",
    tag: "Data Analytics",
    headline: "Your data, finally working for you.",
    shortDesc:
      "Dashboards, pipelines, and reporting that surface the insights your team actually needs.",
    longDesc:
      "We build analytics infrastructure that turns raw data into decisions. From wiring up your data warehouse to shipping live dashboards to your leadership team — we handle the full stack so you can focus on acting on the insights, not fighting with spreadsheets.",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    highlights: ["Custom Dashboards", "Data Pipelines", "BI Tools"],
    deliverables: [
      "Data warehouse setup",
      "ETL pipeline development",
      "Custom dashboard design",
      "KPI framework definition",
      "Automated reporting",
      "Team training & handoff",
    ],
    tech: ["dbt", "BigQuery", "Snowflake", "Metabase", "Looker", "Python"],
    whoFor:
      "Operations and finance leaders making decisions based on gut feel instead of data.",
    stat: { value: "15 hrs", label: "saved per week on manual reporting" },
  },
  {
    id: "it-consulting",
    colorHex: "#fb923c",
    label: "06",
    tag: "IT Consulting",
    headline: "Smarter tech decisions start here.",
    shortDesc:
      "Strategic guidance to help you choose, implement, and manage the right technology.",
    longDesc:
      "Technology decisions are expensive to get wrong. We act as your trusted advisor — auditing your current stack, identifying gaps and redundancies, and mapping a clear path forward. No vendor bias, no upselling. Just clear, strategic thinking.",
    iconPath:
      "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    highlights: ["Tech Audits", "Architecture Planning", "Vendor Selection"],
    deliverables: [
      "Full technology audit",
      "Architecture recommendations",
      "Vendor evaluation & selection",
      "Security & compliance review",
      "Roadmap & budget planning",
      "Ongoing advisory retainer",
    ],
    tech: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "DataDog"],
    whoFor:
      "CTOs and founders navigating a critical technology decision or scaling challenge.",
    stat: { value: "30%", label: "avg. infrastructure cost reduction" },
  },
];

const engagementModels = [
  {
    title: "Fixed-Scope Project",
    color: "#6366f1",
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    desc: "A clearly scoped engagement with defined deliverables, timeline, and price. Best for when you know what you need and want certainty.",
    features: [
      "Fixed price & timeline",
      "Detailed project specification",
      "Weekly progress updates",
      "Defined deliverables & sign-off",
    ],
    ideal: "One-time builds, redesigns, migrations",
  },
  {
    title: "Monthly Retainer",
    color: "#10b981",
    badge: "Most Popular",
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    desc: "A dedicated block of hours each month for ongoing development, strategy, and support. Flexible, continuous, and deeply aligned with your goals.",
    features: [
      "Dedicated hours per month",
      "Priority response times",
      "Strategy & advisory included",
      "Roll-over hours policy",
    ],
    ideal: "Continuous growth, iteration, maintenance",
  },
  {
    title: "Strategic Advisory",
    color: "#a855f7",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    desc: "Senior-level guidance without the overhead of a full engagement. A fractional CTO or strategy partner on-call when you need clear thinking.",
    features: [
      "Weekly strategy sessions",
      "Direct access to senior team",
      "Vendor & team reviews",
      "No long-term commitment",
    ],
    ideal: "Decision support, audits, fractional CTO",
  },
];

const results = [
  {
    metric: "10×",
    desc: "traffic capacity after infrastructure overhaul",
    service: "Web Development",
    color: "#6366f1",
    client: "FinEdge Solutions",
  },
  {
    metric: "60%",
    desc: "e-commerce revenue growth in Q1 post-launch",
    service: "Mobile Apps",
    color: "#a855f7",
    client: "TradePoint Retail",
  },
  {
    metric: "70%",
    desc: "reduction in document processing time via AI",
    service: "AI Solutions",
    color: "#06b6d4",
    client: "LogiCore Systems",
  },
  {
    metric: "30%",
    desc: "infrastructure cost savings after cloud audit",
    service: "IT Consulting",
    color: "#fb923c",
    client: "NovaBridge",
  },
];

const whyUs = [
  {
    color: "#6366f1",
    title: "No outsourcing, ever",
    desc: "Every project is built by our in-house team. You'll know the names of the people building your product.",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    color: "#a855f7",
    title: "Honest scope, honest pricing",
    desc: "We tell you what you need, not what sounds impressive. If something isn't worth building, we'll say so.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    color: "#10b981",
    title: "Business-first thinking",
    desc: "We ask about revenue goals before we ask about tech stack. The best solution is the one that moves your numbers.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    color: "#f59e0b",
    title: "Agile, not chaotic",
    desc: "Weekly sprints, demos, and clear milestones. You always know exactly where your project stands.",
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    color: "#ef4444",
    title: "We measure what matters",
    desc: "Vanity metrics stay out of our reports. We track the KPIs tied directly to your business outcomes.",
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    color: "#06b6d4",
    title: "Long-term partners",
    desc: "Most of our clients have been with us 2+ years. We're invested in your growth, not just your invoice.",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const faqs = [
  {
    q: "Do you specialise in one service or cover them all?",
    a: "We genuinely do all six — and they're designed to work together. Most of our long-term clients start with one service and expand as we build trust. Each practice has dedicated specialists, not generalists.",
  },
  {
    q: "How do I know which service is right for my business?",
    a: "That's exactly what our free discovery call is for. We'll ask about your goals, constraints, and where the biggest bottleneck is — then recommend the right starting point honestly, even if it's not the biggest engagement.",
  },
  {
    q: "Can you combine multiple services in one engagement?",
    a: "Absolutely. Many projects naturally span services — for example, a product launch might involve web development, AI features, and a paid marketing strategy. We scope these as integrated engagements with a single point of contact.",
  },
  {
    q: "What's your minimum project size?",
    a: "We don't have a rigid minimum, but our sweet spot is projects from $10k upward. For smaller scopes, our advisory retainer is often a better fit.",
  },
  {
    q: "Do you work with clients outside of your timezone?",
    a: "Yes — we have clients across North America, Europe, and the Middle East. We overlap office hours by a few hours each day and use async communication to keep things moving.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToService = (index: number) => {
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveService(index);
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-16 max-w-[1400px] mx-auto">
        {/* Ghost watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(60px,14vw,180px)] font-black tracking-[-0.06em] pointer-events-none select-none leading-none whitespace-nowrap"
          style={{ color: "rgba(0,0,0,0.033)" }}
        >
          BRINOVA
        </div>

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white/60 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
              Services We Offer
            </span>
          </div>

          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] text-gray-950 mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Six ways we
            <br />
            <span className="italic font-light text-gray-400 tracking-[-0.02em]">
              move your business
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">forward.</span>
              <span
                className="absolute bottom-2 left-0 w-full h-4 -z-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #facc15 0%, #fb923c 100%)",
                }}
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed font-light">
            Every service is built around one question: what's the
            highest-leverage move for your business right now? We find it, then
            execute it well.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="relative mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02]"
          >
            Get a free consultation
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
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-gray-900 border-2 border-gray-900/25 rounded-full hover:border-gray-900/60 transition-all duration-300 hover:scale-[1.02]"
          >
            See our work
          </Link>
        </div>

        {/* Service pill nav */}
        <div className="relative mt-12 flex flex-wrap items-center gap-2.5">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => scrollToService(i)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor:
                  activeService === i ? s.colorHex : "rgba(0,0,0,0.1)",
                background:
                  activeService === i
                    ? `${s.colorHex}12`
                    : "rgba(255,255,255,0.7)",
                color: activeService === i ? s.colorHex : "#6b7280",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: s.colorHex }}
              />
              {s.tag}
            </button>
          ))}
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="relative overflow-hidden bg-gray-950 py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, gi) =>
            services.map((s, i) => (
              <span
                key={`${gi}-${i}`}
                className="inline-flex items-center gap-3 px-6 text-sm font-semibold tracking-widest uppercase text-white/30"
              >
                <span className="text-yellow-400/60">✦</span>
                {s.tag}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ── SERVICE DEEP DIVES ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="space-y-0">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.id}
                ref={(el) => {
                  serviceRefs.current[i] = el;
                }}
                className="scroll-mt-24 py-20 border-b border-black/[0.07] last:border-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "lg:flex lg:flex-row-reverse" : ""}`}
                >
                  {/* Content side */}
                  <div className="space-y-7">
                    {/* Label row */}
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[11px] font-black tabular-nums tracking-[0.15em]"
                        style={{ color: s.colorHex }}
                      >
                        {s.label}
                      </span>
                      <div
                        className="h-px w-10"
                        style={{ background: `${s.colorHex}40` }}
                      />
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                        style={{
                          background: `${s.colorHex}12`,
                          color: s.colorHex,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    <h2
                      className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
                      style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                    >
                      {s.headline}
                    </h2>

                    <p className="text-gray-500 text-base leading-relaxed font-light max-w-lg">
                      {s.longDesc}
                    </p>

                    {/* Who it's for */}
                    <div
                      className="flex items-start gap-3.5 p-5 rounded-2xl border"
                      style={{
                        borderColor: `${s.colorHex}25`,
                        background: `${s.colorHex}07`,
                      }}
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={s.colorHex}
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                          Best for
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                          {s.whoFor}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold tracking-[0.06em] uppercase text-white rounded-full transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-[1.02]"
                        style={{ background: s.colorHex }}
                      >
                        Start a conversation
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold tracking-[0.06em] uppercase text-gray-900 border-2 border-gray-900/20 rounded-full hover:border-gray-900/50 transition-all duration-200"
                      >
                        See case studies
                      </Link>
                    </div>
                  </div>

                  {/* Cards side */}
                  <div className="space-y-4">
                    {/* Deliverables card */}
                    <div className="bg-white border border-black/[0.06] rounded-2xl p-7 hover:shadow-2xl hover:shadow-black/[0.07] transition-all duration-300 group overflow-hidden relative">
                      <div
                        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: s.colorHex }}
                      />
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: `${s.colorHex}15` }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={s.colorHex}
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={s.iconPath}
                            />
                          </svg>
                        </div>
                        <h3 className="font-black text-gray-900 text-sm tracking-tight">
                          What's included
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {s.deliverables.map((d, di) => (
                          <div key={di} className="flex items-center gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: s.colorHex }}
                            />
                            <span className="text-sm text-gray-600 font-light">
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech + stat row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border border-black/[0.06] rounded-2xl p-5">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">
                          Technology
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {s.tech.map((t, ti) => (
                            <span
                              key={ti}
                              className="text-xs font-bold px-2.5 py-1 rounded-lg"
                              style={{
                                background: `${s.colorHex}10`,
                                color: s.colorHex,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className="rounded-2xl p-5 flex flex-col justify-between"
                        style={{
                          background: `linear-gradient(135deg, ${s.colorHex}18, ${s.colorHex}08)`,
                          border: `1px solid ${s.colorHex}20`,
                        }}
                      >
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                          Typical result
                        </p>
                        <div>
                          <p
                            className="text-3xl font-black mt-2 tracking-tight"
                            style={{ color: s.colorHex }}
                          >
                            {s.stat.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                            {s.stat.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]">
          <div
            className="absolute inset-0 transition-all duration-700 opacity-[0.04]"
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
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start lg:items-end mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                How We Work
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-white leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                Choose your
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  engagement model.
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md lg:pb-3 font-light">
              We adapt to how you work — whether that's a defined project,
              ongoing partnership, or senior advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 flex flex-col group"
              >
                {model.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-black px-4 py-1.5 rounded-full text-white whitespace-nowrap tracking-[0.08em] uppercase"
                      style={{
                        background: `linear-gradient(90deg, #facc15, #fb923c)`,
                        color: "#111",
                      }}
                    >
                      {model.badge}
                    </span>
                  </div>
                )}

                {/* Top accent line */}
                <div
                  className="absolute inset-x-8 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${model.color}, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/10"
                  style={{ background: `${model.color}20` }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={model.color}
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={model.iconPath}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                  {model.title}
                </h3>
                <div
                  className="w-8 h-0.5 rounded-full mb-5"
                  style={{ background: model.color }}
                />

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {model.desc}
                </p>

                <div className="space-y-3 flex-1">
                  {model.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #facc15, #fb923c)",
                        }}
                      >
                        <svg
                          className="w-2.5 h-2.5 text-gray-950"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 font-light">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-white/[0.07]">
                  <p className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase mb-2">
                    Best for
                  </p>
                  <p
                    className="text-xs font-bold"
                    style={{ color: model.color }}
                  >
                    {model.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white border border-white/20 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Not sure which fits? Let's talk
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              Real Results
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Numbers from
              <br />
              <em className="font-light not-italic text-gray-400">
                real clients.
              </em>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              We track outcomes, not outputs. Here's what our work has actually
              delivered.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-yellow-400 pb-0.5 hover:border-orange-400 transition-colors"
            >
              Read full case studies
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

          {/* Results cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div
                key={i}
                className="group relative bg-white border border-black/[0.06] rounded-2xl p-7 hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: r.color }}
                />
                <p
                  className="text-5xl font-black mb-3 tracking-tight"
                  style={{ color: r.color }}
                >
                  {r.metric}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 font-light">
                  {r.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
                  <span
                    className="text-[10px] font-black px-2.5 py-1 rounded-full tracking-[0.1em] uppercase"
                    style={{ background: `${r.color}10`, color: r.color }}
                  >
                    {r.service}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {r.client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 bg-gray-950">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start lg:items-end mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                Why Choose Us
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-white leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                What makes us
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  different.
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md lg:pb-3 font-light">
              We've been doing this long enough to know what separates good
              agencies from great partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-7 right-7 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border border-white/10"
                  style={{ background: `${item.color}20` }}
                >
                  <svg
                    className="w-5 h-5"
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

                <h3 className="font-black text-white mb-2 tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky left label */}
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              FAQ
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Frequently
              <br />
              <em className="font-light not-italic text-gray-400">asked.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              Things people usually wonder before getting in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-yellow-400 pb-0.5 hover:border-orange-400 transition-colors"
            >
              Still have questions?
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

          {/* FAQ accordion */}
          <div className="flex-1 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  borderColor:
                    openFaq === i ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.06)",
                  boxShadow:
                    openFaq === i ? "0 8px 32px -4px rgba(0,0,0,0.08)" : "none",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-gray-900 text-sm leading-snug tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background:
                        openFaq === i
                          ? "linear-gradient(135deg, #facc15, #fb923c)"
                          : "rgba(0,0,0,0.06)",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300"
                      style={{
                        transform:
                          openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                        color: openFaq === i ? "#111" : "#9ca3af",
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
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? "160px" : "0px",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="px-7 pb-6 text-sm text-gray-500 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24 max-w-[1400px] mx-auto">
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
            <h2
              className="font-black tracking-[-0.04em] text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
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
              business day — with real thinking, not a template.
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
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </main>
  );
}
