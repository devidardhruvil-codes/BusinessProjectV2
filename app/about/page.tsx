"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const foundationCards = [
  {
    num: "01",
    tag: "PURPOSE",
    title: "Our Mission",
    text: "To empower businesses through cutting-edge technology solutions that are scalable, reliable, and tailored to their unique needs. We believe in building lasting partnerships and delivering measurable value.",
    accent: "#6366f1",
    bg: "linear-gradient(145deg, #0c0c1d 0%, #0f0f2e 100%)",
    iconPaths: ["M13 10V3L4 14h7v7l9-11h-7z"],
  },
  {
    num: "02",
    tag: "DIRECTION",
    title: "Our Vision",
    text: "To be the trusted technology partner for businesses looking to innovate and grow in the digital age. We envision a future where technology seamlessly integrates with business strategy.",
    accent: "#a855f7",
    bg: "linear-gradient(145deg, #130c1d 0%, #1a0f2e 100%)",
    iconPaths: [
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    ],
  },
  {
    num: "03",
    tag: "PRINCIPLES",
    title: "Core Values",
    text: "Integrity, innovation, and excellence guide everything we do. We prioritize transparency, collaboration, and continuous learning to ensure we're always delivering the best solutions for our clients.",
    accent: "#f59e0b",
    bg: "linear-gradient(145deg, #1a1300 0%, #1f1800 100%)",
    iconPaths: [
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    ],
  },
  {
    num: "04",
    tag: "METHOD",
    title: "Our Approach",
    text: "We start by understanding your business goals, then design solutions that align with your objectives. Our agile methodology ensures flexibility, rapid delivery, and ongoing support throughout your journey.",
    accent: "#10b981",
    bg: "linear-gradient(145deg, #001a0f 0%, #001f14 100%)",
    iconPaths: [
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    ],
  },
  {
    num: "05",
    tag: "PROMISE",
    title: "Our Commitment",
    text: "We stand by our work with long-term support, honest communication, and a genuine dedication to your long-term success — because your growth is the true measure of ours.",
    accent: "#ec4899",
    bg: "linear-gradient(145deg, #500724 0%, #0f172a 100%)",
    iconPaths: ["M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"],
  },
];

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks, optimized for performance and user experience.",
    color: "#6366f1",
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications that engage users and deliver seamless experiences.",
    color: "#10b981",
  },
  {
    num: "03",
    title: "AI Solutions",
    desc: "Intelligent chatbots and AI-powered tools that automate processes and enhance customer interactions.",
    color: "#06b6d4",
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that increase visibility and drive conversions across digital channels.",
    color: "#f59e0b",
  },
  {
    num: "05",
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    color: "#a855f7",
  },
  {
    num: "06",
    title: "IT Consulting",
    desc: "Strategic guidance to help you navigate technology decisions and optimize your IT infrastructure.",
    color: "#fb923c",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Founded",
    desc: "Started as a two-person consultancy with a simple idea: technology should work for the business, not the other way around.",
    color: "#6366f1",
  },
  {
    year: "2018",
    title: "First Major Client",
    desc: "Landed our first enterprise engagement, delivering a full digital transformation for a regional logistics firm.",
    color: "#10b981",
  },
  {
    year: "2020",
    title: "Team Expansion",
    desc: "Grew to 20 specialists across development, design, and strategy. Launched our AI & Data practice.",
    color: "#f59e0b",
  },
  {
    year: "2022",
    title: "International Reach",
    desc: "Extended services to clients across three continents. Recognized as a top emerging tech partner.",
    color: "#a855f7",
  },
  {
    year: "2024",
    title: "Today",
    desc: "50+ experts, 200+ projects, and still growing — building technology that genuinely moves businesses forward.",
    color: "#fb923c",
  },
];

const team = [
  {
    name: "Pratishtha Gohil",
    role: "CEO & Founder",
    initials: "PG",
    color: "#8b5cf6",
    bio: "15 years in enterprise software. Passionate about bridging the gap between technology and business outcomes.",
  },
  {
    name: "Dhruvil Devidar",
    role: "CTO & Co-Founder",
    initials: "DD",
    color: "#ef4444",
    bio: "Former Google engineer. Leads our engineering culture and drives our technical vision across all products.",
  },
];

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they challenged our thinking and delivered something far better. Our platform handles 10× the traffic it did before.",
    name: "Marcus T.",
    role: "CTO, FinEdge Solutions",
    rating: 5,
    initials: "MT",
    color: "#6366f1",
  },
  {
    quote:
      "The team's communication and transparency throughout the project was exceptional. We always knew exactly where things stood, and they delivered on every promise.",
    name: "Rachel W.",
    role: "Head of Product, NovaBridge",
    rating: 5,
    initials: "RW",
    color: "#a855f7",
  },
  {
    quote:
      "Our e-commerce revenue grew 60% in the first quarter after launch. The new mobile experience they designed is something our customers genuinely love.",
    name: "Daniel K.",
    role: "CEO, TradePoint Retail",
    rating: 5,
    initials: "DK",
    color: "#10b981",
  },
];

const whyUs = [
  {
    title: "Expert Team",
    desc: "Skilled professionals with years of cross-industry experience across every domain.",
    color: "#6366f1",
  },
  {
    title: "Client-Focused",
    desc: "Your success is our priority. We listen first, then deliver.",
    color: "#10b981",
  },
  {
    title: "Proven Results",
    desc: "Track record of delivering projects on time, on scope, and on budget.",
    color: "#f59e0b",
  },
  {
    title: "Innovation-Driven",
    desc: "Always exploring new technologies to keep you ahead of the curve.",
    color: "#a855f7",
  },
];

// ─── CAROUSEL LOGIC ──────────────────────────────────────────────────────────

const TOTAL = foundationCards.length;
const AUTO_INTERVAL = 3200;

function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset / absOffset;
  if (absOffset === 0)
    return {
      transform: "translateX(0%) scale(1)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
    };
  if (absOffset === 1)
    return {
      transform: `translateX(${sign * 72}%) scale(0.82)`,
      zIndex: 8,
      opacity: 0.65,
      filter: "brightness(0.5)",
    };
  if (absOffset === 2)
    return {
      transform: `translateX(${sign * 120}%) scale(0.65)`,
      zIndex: 6,
      opacity: 0.3,
      filter: "brightness(0.3)",
    };
  return {
    transform: `translateX(${sign * 160}%) scale(0.5)`,
    zIndex: 4,
    opacity: 0,
    pointerEvents: "none",
  };
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(4);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => setActive(((idx % TOTAL) + TOTAL) % TOTAL),
    [],
  );
  const pauseBriefly = () => {
    setPaused(true);
    setTimeout(() => setPaused(false), 1600);
  };
  const prev = () => {
    goTo(active - 1);
    pauseBriefly();
  };
  const next = () => {
    goTo(active + 1);
    pauseBriefly();
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % TOTAL),
      AUTO_INTERVAL,
    );
    return () => clearInterval(t);
  }, [paused]);

  const onPointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).touches?.[0]?.clientX;
    setDragging(true);
    setPaused(true);
  };
  const onPointerUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || dragStartX.current === null) return;
    const endX =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).changedTouches?.[0]?.clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 40) delta > 0 ? goTo(active + 1) : goTo(active - 1);
    setDragging(false);
    dragStartX.current = null;
    setTimeout(() => setPaused(false), 1600);
  };
  const getOffset = (idx: number) => {
    let diff = idx - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;
    return diff;
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-20 max-w-[1400px] mx-auto">
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
              About Us
            </span>
          </div>

          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] text-gray-950 mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Technology that
            <br />
            <span className="italic font-light text-gray-400 tracking-[-0.02em]">
              moves
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">business forward.</span>
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
            We're a team of passionate technologists committed to delivering
            innovative IT solutions that drive real, measurable business
            results.
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative mt-16 flex flex-wrap gap-8 sm:gap-16">
          {[
            { num: "200+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "8+", label: "Years of Experience" },
            { num: "50+", label: "Team Members" },
          ].map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                {s.num}
              </div>
              <div className="text-xs text-gray-400 font-semibold tracking-[0.15em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="relative overflow-hidden bg-gray-950 py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, gi) =>
            [
              "Our Mission",
              "Our Vision",
              "Core Values",
              "Our Approach",
              "Expert Team",
              "Proven Results",
              "Innovation-Driven",
              "Client-Focused",
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

      {/* ── FOUNDATION CAROUSEL ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Dark bg */}
        <div className="absolute inset-0 bg-[#060810]">
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 70%, ${foundationCards[active].accent}22 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative text-center mb-16 px-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3 font-bold">
            Who we are
          </p>
          <h2
            className="font-black tracking-[-0.04em] text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Our Foundation
          </h2>
        </div>

        {/* 3-D Track */}
        <div
          className="relative mx-auto"
          style={{
            height: 400,
            maxWidth: 920,
            perspective: "1200px",
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onMouseLeave={(e) => {
            if (dragging) onPointerUp(e);
          }}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          {foundationCards.map((card, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            return (
              <div
                key={idx}
                className="absolute top-0 left-1/2"
                style={{
                  width: 300,
                  marginLeft: -150,
                  height: 360,
                  transition:
                    "transform 0.65s cubic-bezier(.25,.8,.25,1), opacity 0.6s ease, filter 0.6s ease",
                  cursor: isActive ? "grab" : "pointer",
                  ...getCardStyle(offset),
                }}
                onClick={() => {
                  if (!dragging && !isActive) goTo(idx);
                }}
              >
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10"
                  style={{
                    background: card.bg,
                    boxShadow: isActive
                      ? `0 40px 80px -16px ${card.accent}44, 0 0 0 1px ${card.accent}22, inset 0 1px 0 rgba(255,255,255,0.06)`
                      : "0 12px 32px -8px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Shimmer top line */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}bb, transparent)`,
                    }}
                  />
                  {/* Blob */}
                  <div
                    className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-20"
                    style={{ background: card.accent }}
                  />
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-8">
                    <div className="flex items-start justify-between mb-6">
                      <p
                        className="text-[10px] tracking-[0.28em] uppercase font-bold"
                        style={{ color: card.accent }}
                      >
                        {card.num} — {card.tag}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/10"
                      style={{ background: `${card.accent}20` }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: card.accent }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {card.iconPaths.map((d, pi) => (
                          <path
                            key={pi}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={d}
                          />
                        ))}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <div
                      className="w-10 h-0.5 mb-4 rounded-full"
                      style={{ background: card.accent }}
                    />
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2 items-center">
            {foundationCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  pauseBriefly();
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 30 : 8,
                  height: 8,
                  background:
                    i === active
                      ? foundationCards[active].accent
                      : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative mx-auto mt-6 max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            key={`${active}-${paused}`}
            className="h-full rounded-full"
            style={{
              background: foundationCards[active].accent,
              animation: paused
                ? "none"
                : `progressFill ${AUTO_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky label */}
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              What we do
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Full-stack
              <br />
              <em className="font-light not-italic text-gray-400">digital</em>
              <br />
              excellence.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              From strategy to launch — every layer of modern technology,
              delivered with precision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-yellow-400 pb-0.5 hover:border-orange-400 transition-colors"
            >
              Work With Us
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-300 cursor-pointer overflow-hidden"
              >
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
                    style={{ background: `${s.color}18` }}
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">
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

      {/* ── TIMELINE ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 bg-gray-950">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start lg:items-end mb-20">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                Our Story
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-white leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                How We
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  Got Here.
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md lg:pb-3 font-light">
              From a small consultancy to a full-service technology partner —
              built one milestone at a time.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/[0.07] lg:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isActive = i === activeTimeline;
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex items-start gap-6 lg:gap-0 cursor-pointer group ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    onClick={() => setActiveTimeline(i)}
                  >
                    {/* Year dot */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0
                        ${isActive ? "border-transparent shadow-lg" : "bg-gray-900 border-white/10 group-hover:border-white/25"}`}
                      style={
                        isActive
                          ? {
                              background: item.color,
                              boxShadow: `0 0 24px ${item.color}66`,
                            }
                          : {}
                      }
                    >
                      <span
                        className={`text-[10px] font-black transition-colors tracking-wider ${isActive ? "text-white" : "text-gray-500"}`}
                      >
                        {item.year}
                      </span>
                    </div>

                    <div
                      className={`lg:w-[calc(50%-3rem)] ${isLeft ? "lg:pr-10 lg:text-right" : "lg:pl-10"} flex-1 lg:flex-initial`}
                    >
                      <div
                        className="p-6 rounded-2xl border transition-all duration-300"
                        style={
                          isActive
                            ? {
                                background: "rgba(255,255,255,0.05)",
                                borderColor: `${item.color}40`,
                                backdropFilter: "blur(8px)",
                                boxShadow: `0 0 40px -8px ${item.color}20`,
                              }
                            : {
                                background: "rgba(255,255,255,0.02)",
                                borderColor: "rgba(255,255,255,0.06)",
                              }
                        }
                      >
                        <p
                          className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                          style={{
                            color: isActive
                              ? item.color
                              : "rgba(255,255,255,0.3)",
                          }}
                        >
                          {item.year}
                        </p>
                        <h3
                          className={`text-lg font-black tracking-tight mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400"}`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left header */}
          <div className="lg:sticky lg:top-28 lg:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              The People
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Meet the
              <br />
              <em className="font-light not-italic text-gray-400">team</em>
              <br />
              behind it all.
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              Passionate, skilled, and genuinely invested in your success.
            </p>
          </div>

          {/* Team cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: member.color }}
                />
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-base tracking-tight">
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: member.color }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
                <div className="mt-5 pt-5 border-t border-gray-50 flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 bg-[#f0ede8]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 items-start lg:items-end mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
                Testimonials
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                What Clients
                <br />
                <span className="italic font-light text-gray-400 tracking-[-0.02em]">
                  Say.
                </span>
              </h2>
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-md lg:pb-3 font-light">
              Real words from real partners we've been proud to work alongside.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white border border-black/[0.06] hover:border-black/10 hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: t.color }}
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, si) => (
                    <svg
                      key={si}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 font-light">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}cc, ${t.color})`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[2.5rem]"
          style={{
            background:
              "linear-gradient(145deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)",
            boxShadow: "0 60px 120px -20px rgba(0,0,0,0.35)",
          }}
        >
          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Orbs */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — content */}
            <div className="p-10 md:p-14 lg:p-16 space-y-8">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                  Why us
                </p>
                <h2
                  className="font-black tracking-[-0.04em] text-white leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  The right partner
                  <br />
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}
                  >
                    makes the difference.
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md font-light">
                We combine technical expertise with a deep understanding of
                business needs to deliver solutions that truly make a
                difference.
              </p>
              <div className="space-y-5 pt-2">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #facc15, #fb923c)",
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-gray-950"
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
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — decorative orbital panel */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div
                    className="absolute inset-0 rounded-full border border-white/[0.08] animate-spin"
                    style={{ animationDuration: "22s" }}
                  />
                  <div
                    className="absolute inset-[-32px] rounded-full border border-white/[0.05] animate-spin"
                    style={{
                      animationDuration: "36s",
                      animationDirection: "reverse",
                    }}
                  />
                  <div
                    className="absolute inset-8 rounded-full flex flex-col items-center justify-center border border-white/10"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="text-3xl font-black text-white">8+</span>
                    <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase mt-1">
                      Years
                    </span>
                  </div>
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full top-1/2 left-1/2"
                      style={{
                        background: [
                          "#6366f1",
                          "#10b981",
                          "#f59e0b",
                          "#06b6d4",
                          "#a855f7",
                          "#fb923c",
                        ][i],
                        transform: `rotate(${deg}deg) translateX(96px) translateY(-50%)`,
                        boxShadow: `0 0 10px ${["#6366f1", "#10b981", "#f59e0b", "#06b6d4", "#a855f7", "#fb923c"][i]}88`,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Floating stat chips */}
              <div
                className="absolute top-8 right-8 px-4 py-2.5 rounded-xl border border-white/10 text-center animate-float-a"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-xl font-black text-white">200+</div>
                <div className="text-[10px] text-white/40 font-semibold tracking-widest uppercase">
                  Projects
                </div>
              </div>
              <div
                className="absolute bottom-8 left-8 px-4 py-2.5 rounded-xl border border-white/10 text-center animate-float-b"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-xl font-black text-white">98%</div>
                <div className="text-[10px] text-white/40 font-semibold tracking-widest uppercase">
                  Satisfaction
                </div>
              </div>
            </div>
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
              Ready to build?
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Ready to build something
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
              >
                great together?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed font-light">
              Let's talk about your goals and find the right path forward
              together.
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
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @keyframes progressFill { from { width: 0% } to { width: 100% } }
        @keyframes float-a { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-10px) } }
        @keyframes float-b { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-14px) } }
        .animate-float-a { animation: float-a 4.5s ease-in-out infinite; }
        .animate-float-b { animation: float-b 6s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
