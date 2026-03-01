"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const contactDetails = [
  {
    label: "Email Us",
    value: "dhruvildevidar@gmail.com",
    sub: "We reply within one business day.",
    color: "#6366f1",
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Call Us",
    value: "+91 8128306632",
    sub: "Mon – Fri, 9 am – 6 pm EST.",
    color: "#a855f7",
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
];

const afterSubmitSteps = [
  {
    number: "01",
    title: "We read your message",
    desc: "Every submission lands directly in our team inbox — no ticketing system, no auto-sorting. A real person reads it the same day.",
    color: "#6366f1",
    iconPath:
      "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: "02",
    title: "A real person replies",
    desc: "Within 4 business hours, someone from our team reaches out personally — no templates, no bots. Just a genuine conversation starter.",
    color: "#10b981",
    iconPath:
      "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    number: "03",
    title: "We scope it together",
    desc: "If there's a fit, we'll suggest a 30-min call to align on goals, timeline, and budget — no pressure, no sales pitch. Just clarity.",
    color: "#fb923c",
    iconPath:
      "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
];

const handlers = [
  {
    name: "Pratishtha Gohil",
    role: "CEO & Founder",
    initials: "PG",
    color: "#a855f7",
    handles: ["Strategy", "Enterprise"],
    note: "Leads all new enterprise conversations personally.",
  },
  {
    name: "Dhruvil Devidar",
    role: "CTO & Co-founder",
    initials: "DD",
    color: "#ef4444",
    handles: ["Startups", "Growth"],
    note: "Your first point of contact for most enquiries.",
  },
];

const faqs = [
  {
    q: "How quickly can you start on a new project?",
    a: "Typically within 1–2 weeks of our initial scoping call, depending on team availability and project complexity.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We tailor our engagement model to fit your stage — whether that's a lean MVP sprint or a full-scale enterprise rollout.",
  },
  {
    q: "What does your development process look like?",
    a: "We follow an agile process: discovery, architecture, iterative sprints with regular demos, then launch and ongoing support.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We do code audits, refactors, and can take ownership of existing projects. We'll give you an honest assessment upfront.",
  },
  {
    q: "Do you offer retainer or ongoing support plans?",
    a: "Yes — many clients move to a monthly retainer after their initial project for continuous development, maintenance, and strategic advisory.",
  },
];

const services = [
  "Web Development",
  "Mobile App",
  "Digital Marketing",
  "AI Solutions",
  "Data Analytics",
  "IT Consulting",
  "Other",
];
const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];
const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

const socialLinks = [
  {
    label: "LinkedIn",
    color: "#0077b5",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "X / Twitter",
    color: "#030712",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "GitHub",
    color: "#030712",
    path: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
];

// ─── REUSED STYLES ────────────────────────────────────────────────────────────

const inputCls =
  "w-full px-4 py-3.5 bg-[#f5f3ef] border border-black/[0.08] rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all duration-200 font-light";
const labelCls =
  "block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2";

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"message" | "call">("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab("message");
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* ────────────────────────────── HERO ────────────────────────────── */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-28 pb-16 max-w-[1400px] mx-auto">
        {/* Ghost watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-[-0.06em] pointer-events-none select-none leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(60px,13vw,170px)",
            color: "rgba(0,0,0,0.03)",
          }}
        >
          CONTACT
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-14 items-center">
          {/* Left — headline */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 bg-white/60 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-600">
                Contact Us
              </span>
            </div>

            <h1
              className="font-black leading-[0.92] tracking-[-0.04em] text-gray-950"
              style={{ fontSize: "clamp(3.2rem, 7vw, 6.5rem)" }}
            >
              Let's build
              <br />
              <span className="italic font-light text-gray-400 tracking-[-0.02em]">
                something
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">great.</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-4 -z-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #facc15 0%, #fb923c 100%)",
                  }}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed font-light">
              Tell us about your project and we'll get back to you within one
              business day — personally, not with a template.
            </p>

            {/* Response speed chips */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  value: "< 4 hrs",
                  label: "Initial response",
                  color: "#6366f1",
                },
                {
                  value: "1–2 days",
                  label: "Scoping call booked",
                  color: "#10b981",
                },
                {
                  value: "3–5 days",
                  label: "Proposal delivered",
                  color: "#fb923c",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-black/[0.06] shadow-sm"
                >
                  <span
                    className="text-lg font-black leading-none"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02]"
              >
                Send a message
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
              </button>
              <a
                href="https://cal.com/brinova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-gray-900 border-2 border-gray-900/20 rounded-full hover:border-gray-900/60 transition-all duration-300 hover:scale-[1.02]"
              >
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                Book a 30-min call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────── MARQUEE ─────────────────────────── */}
      <div className="relative overflow-hidden bg-gray-950 py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, gi) =>
            [
              "Send a message",
              "Book a call",
              "< 4 hr response",
              "Real humans only",
              "No templates",
              "Let's talk",
              "We move fast",
            ].map((t, i) => (
              <span
                key={`${gi}-${i}`}
                className="inline-flex items-center gap-3 px-6 text-sm font-semibold tracking-widest uppercase text-white/30"
              >
                <span className="text-yellow-400/60">✦</span>
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ────────────────────────── FORM + SIDEBAR ───────────────────────── */}
      <section
        ref={formRef}
        className="px-6 sm:px-10 lg:px-16 py-20 max-w-[1400px] mx-auto scroll-mt-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
          {/* ── FORM CARD ── */}
          <div className="bg-white border border-black/[0.06] rounded-[2rem] p-8 md:p-10 shadow-sm">
            {submitted ? (
              /* Success */
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #facc15, #fb923c)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-gray-950"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-950 tracking-tight">
                    Message sent!
                  </h3>
                  <p className="text-gray-500 font-light max-w-sm leading-relaxed">
                    Thanks,{" "}
                    <span className="font-black text-gray-900">
                      {formData.name}
                    </span>
                    . Someone from our team will be in touch within 4 business
                    hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      budget: "",
                      timeline: "",
                      message: "",
                    });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-black tracking-[0.06em] uppercase text-gray-900 border-2 border-gray-900/20 rounded-full hover:border-gray-900/50 transition-all duration-200"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                {/* Tab switcher */}
                <div className="flex items-center gap-1 bg-[#f5f3ef] rounded-2xl p-1 mb-8 w-fit">
                  {(["message", "call"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-5 py-2.5 rounded-xl text-sm font-black tracking-tight transition-all duration-200"
                      style={
                        activeTab === tab
                          ? {
                              background: "#fff",
                              color: "#030712",
                              boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
                            }
                          : { color: "#9ca3af" }
                      }
                    >
                      {tab === "message" ? "Send a message" : "Book a call"}
                    </button>
                  ))}
                </div>

                {activeTab === "message" ? (
                  /* Message form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 pb-1">
                      <h2 className="text-2xl font-black text-gray-950 tracking-tight">
                        Tell us about your project
                      </h2>
                      <p className="text-sm text-gray-500 font-light">
                        The more context you give, the better we can help.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls} htmlFor="name">
                          Full Name <span style={{ color: "#6366f1" }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Alex Morgan"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="email">
                          Email Address{" "}
                          <span style={{ color: "#6366f1" }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls} htmlFor="company">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="service">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={
                            inputCls + " appearance-none cursor-pointer"
                          }
                        >
                          <option value="" disabled>
                            Select a service…
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls} htmlFor="budget">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={
                            inputCls + " appearance-none cursor-pointer"
                          }
                        >
                          <option value="" disabled>
                            Approx. budget…
                          </option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="timeline">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={
                            inputCls + " appearance-none cursor-pointer"
                          }
                        >
                          <option value="" disabled>
                            When do you need it…
                          </option>
                          {timelines.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="message">
                        Message <span style={{ color: "#6366f1" }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project, goals, or any challenges you're facing…"
                        value={formData.message}
                        onChange={handleChange}
                        className={inputCls + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.01]"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
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
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center font-light">
                      We respect your privacy. Your information is never shared
                      with third parties.
                    </p>
                  </form>
                ) : (
                  /* Book a call */
                  <div className="space-y-7">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-gray-950 tracking-tight">
                        Book a discovery call
                      </h2>
                      <p className="text-sm text-gray-500 font-light">
                        30 minutes. No pressure. Just a real conversation about
                        your project.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          label: "Duration",
                          value: "30 minutes",
                          color: "#6366f1",
                        },
                        {
                          label: "Format",
                          value: "Video or phone",
                          color: "#a855f7",
                        },
                        {
                          label: "Availability",
                          value: "Mon–Fri, 9–6pm",
                          color: "#10b981",
                        },
                        {
                          label: "What to expect",
                          value: "Goals & next steps",
                          color: "#fb923c",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-[#f5f3ef] border border-black/[0.05] rounded-2xl px-4 py-4"
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 mb-1.5">
                            {item.label}
                          </p>
                          <p
                            className="text-sm font-black tracking-tight"
                            style={{ color: item.color }}
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://cal.com/brinova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-[0.06em] uppercase text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-[1.01] shadow-xl shadow-black/20"
                    >
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
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Open calendar
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
                    </a>
                    <p className="text-xs text-gray-400 text-center font-light">
                      Prefer email? Switch back to the message tab above.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-4">
            {contactDetails.map((d, i) => (
              <div
                key={i}
                className="group relative bg-white border border-black/[0.06] rounded-2xl p-5 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: d.color }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${d.color}12` }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={d.color}
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={d.iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                    {d.label}
                  </p>
                  <p className="font-black text-gray-900 text-sm tracking-tight">
                    {d.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 font-light">
                    {d.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Dark card */}
            <div
              className="relative overflow-hidden rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #0d0d14, #111827)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 space-y-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-indigo-400">
                    We move fast
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Most enquiries get a personal response within 4 hours during
                  business hours — never a bot, never a template.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {handlers.map((h, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-xs font-black"
                        style={{
                          background: `linear-gradient(135deg, ${h.color}bb, ${h.color})`,
                          borderColor: "#0d0d14",
                        }}
                      >
                        {h.initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs font-light">
                    Your message goes straight to our team
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white border border-black/[0.06] rounded-2xl p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Find us online
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((s, i) => (
                  <button
                    key={i}
                    title={s.label}
                    className="w-10 h-10 rounded-xl bg-[#f5f3ef] border border-black/[0.05] flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: s.color }}
                    >
                      <path d={s.path} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── WHAT HAPPENS NEXT — dark ─────────────────────── */}
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
            className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start lg:items-end mb-16">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/30">
                The Process
              </p>
              <h2
                className="font-black tracking-[-0.04em] text-white leading-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                What happens after
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                >
                  you hit send.
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm lg:pb-3 font-light">
              No black holes. No auto-responders. Here's exactly what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {afterSubmitSteps.map((step, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 hover:border-white/[0.14] transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="absolute inset-x-8 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                  }}
                />
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${step.color}20`,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={step.color}
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={step.iconPath}
                    />
                  </svg>
                </div>
                <p
                  className="text-[10px] font-black tracking-[0.25em] uppercase mb-3"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </p>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{ background: step.color }}
                />
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHO YOU'LL HEAR FROM ──────────────────────────── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28 lg:w-64 xl:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              Real People
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Who you'll
              <br />
              <em className="font-light not-italic text-gray-400">
                hear from.
              </em>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              Depending on your brief, one of these people will personally reach
              out.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 pb-0.5 hover:border-orange-400 transition-colors duration-200"
              style={{ borderColor: "#facc15" }}
            >
              Get in touch
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
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {handlers.map((person, i) => (
              <div
                key={i}
                className="group relative bg-white border border-black/[0.06] rounded-2xl p-7 hover:shadow-2xl hover:shadow-black/[0.07] transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: person.color }}
                />
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${person.color}bb, ${person.color})`,
                    }}
                  >
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-950 text-base tracking-tight">
                      {person.name}
                    </h3>
                    <p
                      className="text-sm font-bold"
                      style={{ color: person.color }}
                    >
                      {person.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-light">
                  {person.note}
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.handles.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-black px-3 py-1.5 rounded-full"
                      style={{
                        background: `${person.color}10`,
                        color: person.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FAQ ───────────────────────────────────── */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-28 lg:w-64 xl:w-72 shrink-0 space-y-5">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
              FAQ
            </p>
            <h2
              className="font-black tracking-[-0.04em] text-gray-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Common
              <br />
              <em className="font-light not-italic text-gray-400">
                questions.
              </em>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm font-light">
              A few things people usually ask before reaching out.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 pb-0.5 hover:border-orange-400 transition-colors duration-200"
              style={{ borderColor: "#facc15" }}
            >
              Still wondering? Let's talk
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
            </button>
          </div>

          <div className="flex-1 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isOpen
                      ? "rgba(0,0,0,0.1)"
                      : "rgba(0,0,0,0.06)",
                    boxShadow: isOpen
                      ? "0 8px 32px -4px rgba(0,0,0,0.08)"
                      : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="font-black text-gray-900 text-sm leading-snug tracking-tight">
                      {faq.q}
                    </span>
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #facc15, #fb923c)"
                          : "rgba(0,0,0,0.06)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={isOpen ? "#111" : "#9ca3af"}
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
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-7 pb-6 text-sm text-gray-500 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA ───────────────────────────────────── */}
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
            style={{ background: "rgba(251,146,60,0.15)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
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
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 text-sm font-bold tracking-[0.08em] uppercase text-gray-950 bg-white rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-yellow-300/30 hover:scale-[1.03]"
              >
                Start a conversation
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </button>
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
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 26s linear infinite; }
      `}</style>
    </main>
  );
}
