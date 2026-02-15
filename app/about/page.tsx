"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const cards = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    ),
    title: "Our Mission",
    tag: "01 — PURPOSE",
    text: "To empower businesses through cutting-edge technology solutions that are scalable, reliable, and tailored to their unique needs. We believe in building lasting partnerships and delivering measurable value.",
    accent: "#3b82f6",
    bg: "from-blue-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Our Vision",
    tag: "02 — DIRECTION",
    text: "To be the trusted technology partner for businesses looking to innovate and grow in the digital age. We envision a future where technology seamlessly integrates with business strategy.",
    accent: "#8b5cf6",
    bg: "from-violet-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Core Values",
    tag: "03 — PRINCIPLES",
    text: "Integrity, innovation, and excellence guide everything we do. We prioritize transparency, collaboration, and continuous learning to ensure we're always delivering the best solutions for our clients.",
    accent: "#f59e0b",
    bg: "from-amber-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Our Approach",
    tag: "04 — METHOD",
    text: "We start by understanding your business goals, then design solutions that align with your objectives. Our agile methodology ensures flexibility, rapid delivery, and ongoing support throughout your journey.",
    accent: "#10b981",
    bg: "from-emerald-950 to-slate-900",
  },

  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Our Commitment",
    tag: "05 — PROMISE",
    text: "We stand by our work with long-term support, honest communication, and a genuine dedication to your long-term success — because your growth is the true measure of ours.",
    accent: "#ec4899", // pink/fuchsia
    bg: "from-pink-950 to-slate-900",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years of Experience" },
  { value: "50+", label: "Team Members" },
];

const timeline = [
  {
    year: "2016",
    title: "Founded",
    desc: "Started as a two-person consultancy with a simple idea: technology should work for the business, not the other way around.",
  },
  {
    year: "2018",
    title: "First Major Client",
    desc: "Landed our first enterprise engagement, delivering a full digital transformation for a regional logistics firm.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    desc: "Grew to 20 specialists across development, design, and strategy. Launched our AI & Data practice.",
  },
  {
    year: "2022",
    title: "International Reach",
    desc: "Extended services to clients across three continents. Recognized as a top emerging tech partner.",
  },
  {
    year: "2024",
    title: "Today",
    desc: "50+ experts, 200+ projects, and still growing — building technology that genuinely moves businesses forward.",
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
    color: "#3b82f6",
  },
  {
    quote:
      "The team's communication and transparency throughout the project was exceptional. We always knew exactly where things stood, and they delivered on every promise.",
    name: "Rachel W.",
    role: "Head of Product, NovaBridge",
    rating: 5,
    initials: "RW",
    color: "#8b5cf6",
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

// ─── CAROUSEL ────────────────────────────────────────────────────────────────

const TOTAL = cards.length;
const AUTO_INTERVAL = 3000;

function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset / absOffset;
  if (absOffset === 0)
    return {
      transform: "translateX(0%) scale(1) rotateY(0deg)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
    };
  if (absOffset === 1)
    return {
      transform: `translateX(${sign * 72}%) scale(0.82) rotateY(${-sign * 18}deg)`,
      zIndex: 8,
      opacity: 0.75,
      filter: "brightness(0.6)",
    };
  if (absOffset === 2)
    return {
      transform: `translateX(${sign * 120}%) scale(0.65) rotateY(${-sign * 28}deg)`,
      zIndex: 6,
      opacity: 0.35,
      filter: "brightness(0.35)",
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
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => setActive(((idx % TOTAL) + TOTAL) % TOTAL),
    [],
  );
  const pauseBriefly = () => {
    setPaused(true);
    setTimeout(() => setPaused(false), 1500);
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

  const onPointerDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    dragStartX.current =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).touches?.[0]?.clientX;
    setDragging(true);
    setPaused(true);
  };
  const onPointerUp = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!dragging || dragStartX.current === null) return;
    const endX =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).changedTouches?.[0]?.clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 40) delta > 0 ? goTo(active + 1) : goTo(active - 1);
    setDragging(false);
    dragStartX.current = null;
    setTimeout(() => setPaused(false), 1500);
  };
  const getOffset = (idx: number) => {
    let diff = idx - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;
    return diff;
  };

  return (
    <main className="min-h-screen bg-white pt-15 md:pt-14">
      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="relative text-center space-y-7 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 tracking-tight">
            Technology that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              moves business
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We're a team of passionate technologists committed to delivering
            innovative IT solutions that drive real, measurable results.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get in touch
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
              className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
            >
              Our work
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsRef}
        className="border-y border-gray-100 bg-gray-50/60"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
          {stats.map((s, i) => (
            <div key={i} className="text-center lg:px-8">
              <p
                className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-700"
                style={{
                  opacity: visibleStats ? 1 : 0,
                  transform: visibleStats
                    ? "translateY(0)"
                    : "translateY(16px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-500 mt-1.5 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="relative py-24 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[#050a14]">
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 65% 55% at 50% 65%, ${cards[active].accent}28 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="relative text-center mb-14 px-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Foundation
          </h2>
        </div>
        <div
          className="relative mx-auto"
          style={{
            height: 380,
            maxWidth: 900,
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
          {cards.map((card, idx: number) => {
            const offset = getOffset(idx);
            const style = getCardStyle(offset);
            const isActive = offset === 0;
            return (
              <div
                key={idx}
                className="absolute top-0 left-1/2"
                style={{
                  width: 288,
                  marginLeft: -144,
                  height: 340,
                  transition:
                    "transform 0.65s cubic-bezier(.25,.8,.25,1), opacity 0.65s ease, filter 0.65s ease",
                  cursor: isActive ? "grab" : "pointer",
                  ...style,
                }}
                onClick={() => {
                  if (!dragging && !isActive) goTo(idx);
                }}
              >
                <div
                  className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br ${card.bg} border border-white/10`}
                  style={{
                    boxShadow: isActive
                      ? `0 32px 64px -12px ${card.accent}55, 0 0 0 1px ${card.accent}33, inset 0 1px 0 rgba(255,255,255,0.07)`
                      : "0 12px 32px -8px rgba(0,0,0,0.6)",
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}99, transparent)`,
                    }}
                  />
                  <div
                    className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-25"
                    style={{ background: card.accent }}
                  />
                  <div
                    className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full blur-3xl opacity-15"
                    style={{ background: card.accent }}
                  />
                  <div className="relative z-10 flex flex-col h-full p-7">
                    <p
                      className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-5"
                      style={{ color: card.accent }}
                    >
                      {card.tag}
                    </p>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/10"
                      style={{ background: `${card.accent}28` }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
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
        <div className="relative flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2 items-center">
            {cards.map((c, i: number) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  pauseBriefly();
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background:
                    i === active
                      ? cards[active].accent
                      : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="relative mx-auto mt-6 max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            key={`${active}-${paused}`}
            className="h-full rounded-full"
            style={{
              background: cards[active].accent,
              animation: paused
                ? "none"
                : `progressFill ${AUTO_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A comprehensive range of IT services designed to help your business
            thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              colorHex: "#3b82f6",
              iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              title: "Web Development",
              desc: "Custom web applications built with modern frameworks, optimized for performance and user experience.",
            },
            {
              colorHex: "#8b5cf6",
              iconPath:
                "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              title: "Mobile Apps",
              desc: "Native and cross-platform mobile applications that engage users and deliver seamless experiences.",
            },
            {
              colorHex: "#10b981",
              iconPath:
                "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
              title: "Digital Marketing",
              desc: "Data-driven marketing strategies that increase visibility and drive conversions across digital channels.",
            },
            {
              colorHex: "#06b6d4",
              iconPath:
                "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "AI Solutions",
              desc: "Intelligent chatbots and AI-powered tools that automate processes and enhance customer interactions.",
            },
            {
              colorHex: "#ef4444",
              iconPath:
                "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              title: "Data Analytics",
              desc: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
            },
            {
              colorHex: "#f59e0b",
              iconPath:
                "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              title: "IT Consulting",
              desc: "Strategic guidance to help you navigate technology decisions and optimize your IT infrastructure.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${s.colorHex}15` }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={s.colorHex}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={s.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-violet-500 bg-violet-50 px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Got Here
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              From a small consultancy to a full-service technology partner.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-1/2" />
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
                    <div
                      className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0
                      ${isActive ? "bg-gray-900 border-gray-900 shadow-lg shadow-gray-900/20" : "bg-white border-gray-300 group-hover:border-gray-500"}`}
                    >
                      <span
                        className={`text-xs font-bold transition-colors ${isActive ? "text-white" : "text-gray-500"}`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div
                      className={`lg:w-[calc(50%-3rem)] ${isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"} flex-1 lg:flex-initial`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-5 border transition-all duration-300 ${isActive ? "border-gray-200 shadow-lg" : "border-transparent hover:border-gray-100 hover:shadow-md"}`}
                      >
                        <p className="text-xs font-semibold text-gray-400 mb-1">
                          {item.year}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
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

      {/* TEAM */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full mb-4">
            The People
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The experts behind every solution — passionate, skilled, and
            invested in your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
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
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Real words from real partners we've been proud to work alongside.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, si) => (
                    <svg
                      key={si}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}cc, ${t.color})`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 lg:p-16 space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full mb-5">
                  Why Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  The right partner
                  <br />
                  makes the difference
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                We combine technical expertise with a deep understanding of
                business to deliver solutions that truly move the needle.
              </p>
              <div className="space-y-5 pt-2">
                {[
                  {
                    title: "Expert Team",
                    desc: "Skilled professionals with years of cross-industry experience.",
                    color: "#3b82f6",
                  },
                  {
                    title: "Client-Focused",
                    desc: "Your success is our priority, every step of the way.",
                    color: "#8b5cf6",
                  },
                  {
                    title: "Proven Results",
                    desc: "Track record of delivering on time, on scope, on budget.",
                    color: "#10b981",
                  },
                  {
                    title: "Innovation-Driven",
                    desc: "Always exploring new technologies to keep you ahead.",
                    color: "#f59e0b",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `${item.color}25`,
                        border: `1px solid ${item.color}50`,
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={item.color}
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]" />
              </div>
              <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-3 px-8 w-full max-w-xs">
                {[
                  { label: "Client Retention", value: "94%", color: "#3b82f6" },
                  { label: "On-Time Delivery", value: "99%", color: "#10b981" },
                  { label: "5-Star Reviews", value: "200+", color: "#f59e0b" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 backdrop-blur-sm"
                  >
                    <span className="text-gray-400 text-sm font-medium">
                      {m.label}
                    </span>
                    <span
                      className="text-xl font-bold"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to build something great?
        </h2>
        <p className="text-gray-500 text-lg mb-8">
          Let's talk about your goals and find the right path forward together.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
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
      </section>
      <style>
        {`
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }`}
      </style>
    </main>
  );
}
