"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "web-development",
    colorHex: "#3b82f6",
    label: "01",
    tag: "Web Development",
    headline: "Websites & apps built to perform.",
    shortDesc:
      "Custom web applications crafted for speed, scalability, and exceptional user experience.",
    longDesc:
      "From sleek marketing sites to complex SaaS platforms, we engineer web experiences that are fast by default, accessible by design, and built to scale as your business grows. We don't use templates — every line of code is written with your specific goals in mind.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
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
    colorHex: "#8b5cf6",
    label: "02",
    tag: "Mobile Apps",
    headline: "Native feel. Cross-platform reach.",
    shortDesc:
      "iOS and Android apps that users love, built with the right stack for your product.",
    longDesc:
      "We design and build mobile apps that feel at home on every device. Whether you need a consumer-facing product, an internal operations tool, or a companion app to your web platform — we handle the full lifecycle from concept to App Store.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
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
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
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
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
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
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
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
      "Operations and finance leaders who are making decisions based on gut feel instead of data.",
    stat: { value: "15 hrs", label: "saved per week on manual reporting" },
  },
  {
    id: "it-consulting",
    colorHex: "#f59e0b",
    label: "06",
    tag: "IT Consulting",
    headline: "Smarter tech decisions start here.",
    shortDesc:
      "Strategic guidance to help you choose, implement, and manage the right technology.",
    longDesc:
      "Technology decisions are expensive to get wrong. We act as your trusted advisor — auditing your current stack, identifying gaps and redundancies, and mapping a clear path forward. No vendor bias, no upselling. Just clear, strategic thinking.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
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
    color: "#3b82f6",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
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
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
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
    color: "#8b5cf6",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
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
    color: "#3b82f6",
    client: "FinEdge Solutions",
  },
  {
    metric: "60%",
    desc: "e-commerce revenue growth in Q1 post-launch",
    service: "Mobile Apps",
    color: "#8b5cf6",
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
    color: "#f59e0b",
    client: "NovaBridge",
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
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleStats(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToService = (index: number) => {
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveService(index);
  };

  return (
    <main className="min-h-screen bg-white pt-15 md:pt-14">
      {/* ── HERO ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative text-center space-y-7 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
            Services We Offer
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 tracking-tight">
            Six ways we
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              move your business
            </span>
            <br />
            forward.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every service is built around one question: what's the
            highest-leverage move for your business right now? We find it, then
            execute it well.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a free consultation
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
              href="/portfolio"
              className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Service pill navigation */}
        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-2.5">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => scrollToService(i)}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200"
              style={{
                borderColor: activeService === i ? s.colorHex : "#e5e7eb",
                background: activeService === i ? `${s.colorHex}10` : "white",
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

      {/* ── SERVICE DEEP DIVES ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="space-y-24">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.id}
                ref={(el) => {
                  serviceRefs.current[i] = el;
                }}
                className="scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* Content side */}
                  <div
                    className={`space-y-6 ${!isEven ? "lg:[direction:ltr]" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold tabular-nums"
                        style={{ color: s.colorHex }}
                      >
                        {s.label}
                      </span>
                      <div
                        className="h-px flex-1 max-w-[40px]"
                        style={{ background: `${s.colorHex}40` }}
                      />
                      <span
                        className="text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                        style={{
                          background: `${s.colorHex}12`,
                          color: s.colorHex,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                      {s.headline}
                    </h2>

                    <p className="text-gray-500 text-base leading-relaxed">
                      {s.longDesc}
                    </p>

                    {/* Who it's for */}
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl border"
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
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          Best for
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {s.whoFor}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:opacity-90"
                        style={{ background: s.colorHex }}
                      >
                        Start a conversation
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
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
                      >
                        See case studies
                      </Link>
                    </div>
                  </div>

                  {/* Card side */}
                  <div
                    className={`space-y-4 ${!isEven ? "lg:[direction:ltr]" : ""}`}
                  >
                    {/* Deliverables card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
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
                              d={s.icon}
                            />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm">
                          What's included
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {s.deliverables.map((d, di) => (
                          <div key={di} className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: s.colorHex }}
                            />
                            <span className="text-sm text-gray-600">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack + stat in a row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          Technology
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {s.tech.map((t, ti) => (
                            <span
                              key={ti}
                              className="text-xs font-semibold px-2.5 py-1 rounded-lg"
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
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Typical result
                        </p>
                        <div>
                          <p
                            className="text-3xl font-bold mt-2"
                            style={{ color: s.colorHex }}
                          >
                            {s.stat.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {s.stat.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {i < services.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS — dark section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#050a14]">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose your engagement model
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We adapt to how you work — whether that's a defined project,
              ongoing partnership, or senior advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {model.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap"
                      style={{ background: model.color }}
                    >
                      {model.badge}
                    </span>
                  </div>
                )}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-white/10"
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
                      d={model.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {model.title}
                </h3>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{ background: model.color }}
                />
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {model.desc}
                </p>
                <div className="space-y-2.5 flex-1">
                  {model.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${model.color}25` }}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={model.color}
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-3 font-medium">
                    Best for
                  </p>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: model.color }}
                  >
                    {model.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white border border-white/20 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Not sure which fits? Let's talk
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
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full">
              Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Numbers from
              <br />
              real clients.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              We track outcomes, not outputs. Here's what our work has actually
              delivered for the businesses that trusted us.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors duration-200"
            >
              Read full case studies
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ color: r.color }}
                >
                  {r.metric}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {r.desc}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-violet-500 bg-violet-50 px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What makes us different
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We've been doing this long enough to know what separates good
              agencies from great partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                color: "#3b82f6",
                title: "No outsourcing, ever",
                desc: "Every project is built by our in-house team. You'll know the names of the people building your product.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                color: "#8b5cf6",
                title: "Honest scope, honest pricing",
                desc: "We tell you what you need, not what sounds impressive. If something isn't worth building, we'll say so.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                color: "#10b981",
                title: "Business-first thinking",
                desc: "We ask about revenue goals before we ask about tech stack. The best solution is the one that moves your numbers.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                color: "#f59e0b",
                title: "Agile, not chaotic",
                desc: "Weekly sprints, demos, and clear milestones. You always know exactly where your project stands.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                color: "#ef4444",
                title: "We measure what matters",
                desc: "Vanity metrics stay out of our reports. We track the KPIs tied directly to your business outcomes.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                color: "#06b6d4",
                title: "Long-term partners",
                desc: "Most of our clients have been with us 2+ years. We're invested in your growth, not just your invoice.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}15` }}
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Frequently asked
          </h2>
          <p className="text-gray-500 text-lg">
            Things people usually wonder before getting in touch.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-gray-200 shadow-md" : "border-gray-100 hover:border-gray-200"}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-gray-900" : "bg-gray-100"}`}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${openFaq === i ? "rotate-45 text-white" : "text-gray-600"}`}
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
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}
              >
                <p className="px-6 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
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
          business day — with real thinking, not a template.
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
    </main>
  );
}
