"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
// ── DATA ────────────────────────────────────────────────────────────────────
const foundationCards = [
  {
    num: "01",
    tag: "PURPOSE",
    title: "Our Mission",
    text: "To empower businesses through cutting-edge technology solutions that are scalable, reliable, and tailored to their unique needs. We believe in building lasting partnerships and delivering measurable value.",
    accent: "#6366f1",
    bg: "linear-gradient(145deg, #0c0c1d 0%, #0f0f2e 100%)",
  },
  {
    num: "02",
    tag: "DIRECTION",
    title: "Our Vision",
    text: "To be the trusted technology partner for businesses looking to innovate and grow in the digital age. We envision a future where technology seamlessly integrates with business strategy.",
    accent: "#a855f7",
    bg: "linear-gradient(145deg, #130c1d 0%, #1a0f2e 100%)",
  },
  {
    num: "03",
    tag: "PRINCIPLES",
    title: "Core Values",
    text: "Integrity, innovation, and excellence guide everything we do. We prioritize transparency, collaboration, and continuous learning to ensure we're always delivering the best solutions for our clients.",
    accent: "#f59e0b",
    bg: "linear-gradient(145deg, #1a1300 0%, #1f1800 100%)",
  },
  {
    num: "04",
    tag: "METHOD",
    title: "Our Approach",
    text: "We start by understanding your business goals, then design solutions that align with your objectives. Our agile methodology ensures flexibility, rapid delivery, and ongoing support throughout your journey.",
    accent: "#10b981",
    bg: "linear-gradient(145deg, #001a0f 0%, #001f14 100%)",
  },
  {
    num: "05",
    tag: "PROMISE",
    title: "Our Commitment",
    text: "We stand by our work with long-term support, honest communication, and a genuine dedication to your long-term success — because your growth is the true measure of ours.",
    accent: "#ec4899", // pink/fuchsia
    bg: "linear-gradient(145deg, #500724 0%, #0f172a 100%)",
  },
];
const services = [
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
];
const whyUs = [
  {
    title: "Expert Team",
    desc: "Skilled professionals with years of industry experience across every domain.",
  },
  {
    title: "Client-Focused",
    desc: "Your success is our priority. We listen first, then deliver.",
  },
  {
    title: "Proven Results",
    desc: "Track record of delivering projects on time and on budget.",
  },
  {
    title: "Innovation-Driven",
    desc: "Always exploring new technologies to keep you ahead of the curve.",
  },
];
// ── CAROUSEL LOGIC ──────────────────────────────────────────────────────────
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
// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
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
              Our Story
            </span>
          </div>
          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] text-gray-950 mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Built on trust,
            <br />
            <span className="italic font-light text-gray-400 tracking-[-0.02em]">
              driven by
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">innovation.</span>
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
        {/* Stat strip */}
        <div className="relative mt-16 flex flex-wrap gap-8 sm:gap-16">
          {[
            { num: "120+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "8yr", label: "Industry Experience" },
            { num: "40+", label: "Team Members" },
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
        {/* Dark bg with dynamic ambient glow */}
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
        {/* Section label */}
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
                      <FoundationIcon index={idx} color={card.accent} />
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
            {foundationCards.map((c, i) => (
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
            <p className="text-gray-500 leading-relaxed text-sm">
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
      {/* ── WHY CHOOSE US ── */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24 max-w-[1400px] mx-auto">
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
                  The difference
                  <br />
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}
                  >
                    is in the details.
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
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
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — decorative dark panel */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Floating stat chips */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Outer ring */}
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
                  {/* Center */}
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
                  {/* Orbiting dots */}
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
              {/* Floating chips */}
              <div
                className="absolute top-8 right-8 px-4 py-2.5 rounded-xl border border-white/10 text-center animate-float-a"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-xl font-black text-white">120+</div>
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
      {/* ── CTA BAND ── */}
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
              Ready to grow?
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
      {/* Global styles */}
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
// ── Foundation card icons ────────────────────────────────────────────────────
function FoundationIcon({ index, color }: { index: number; color: string }) {
  const icons = [
    // Mission — lightning bolt
    <svg
      key={0}
      className="w-6 h-6"
      style={{ color }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
    // Vision — eye
    <svg
      key={1}
      className="w-6 h-6"
      style={{ color }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>,
    // Values — heart
    <svg
      key={2}
      className="w-6 h-6"
      style={{ color }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>,
    // Approach — shield
    <svg
      key={3}
      className="w-6 h-6"
      style={{ color }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}
