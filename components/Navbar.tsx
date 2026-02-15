"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const navLinks = ["Services", "About", "Portfolio", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Elevate navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* ── Main bar ── */}
        <div
          className="transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(245,243,239,0.92)"
              : "rgba(245,243,239,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: scrolled
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(0,0,0,0.04)",
            boxShadow: scrolled ? "0 4px 32px -4px rgba(0,0,0,0.10)" : "none",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="group flex items-baseline gap-0 select-none"
              aria-label="Brinova home"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-[-0.05em] text-gray-950 transition-opacity duration-200 group-hover:opacity-80">
                Brin
              </span>
              <span
                className="text-2xl sm:text-3xl font-black tracking-[-0.05em] text-transparent transition-all duration-200"
                style={{
                  WebkitTextStroke: "1.5px #1a1a1a",
                  opacity: 0.45,
                }}
              >
                ova
              </span>
              {/* Accent dot */}
              <span
                className="ml-0.5 mb-0.5 w-1.5 h-1.5 rounded-full self-end mb-1 shrink-0 transition-transform duration-300 group-hover:scale-125"
                style={{
                  background: "linear-gradient(135deg, #facc15, #fb923c)",
                }}
              />
            </Link>
            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const href = `/${item.toLowerCase()}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={item}
                    href={href}
                    className="relative px-4 py-2 text-sm font-semibold tracking-[0.04em] uppercase transition-colors duration-200 rounded-full group"
                    style={{
                      color: isActive ? "#0f0f0f" : "#6b7280",
                    }}
                  >
                    {/* Active pill bg */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(0,0,0,0.06)" }}
                      />
                    )}
                    {/* Hover bg */}
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(0,0,0,0.04)" }}
                    />
                    <span className="relative">{item}</span>
                    {/* Active yellow underline dot */}
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #facc15, #fb923c)",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-[0.06em] uppercase text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #111 0%, #333 100%)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
                }}
              >
                Get Started
                <svg
                  className="w-3.5 h-3.5"
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
              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none"
                style={{
                  background: isOpen ? "rgba(0,0,0,0.07)" : "transparent",
                }}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className="block h-[1.5px] rounded-full bg-gray-900 transition-all duration-300 origin-left"
                    style={{
                      transform: isOpen
                        ? "rotate(45deg) translateY(-1px)"
                        : "none",
                      width: isOpen ? "110%" : "100%",
                    }}
                  />
                  <span
                    className="block h-[1.5px] rounded-full bg-gray-900 transition-all duration-300"
                    style={{
                      opacity: isOpen ? 0 : 1,
                      transform: isOpen ? "scaleX(0.5)" : "none",
                    }}
                  />
                  <span
                    className="block h-[1.5px] rounded-full bg-gray-900 transition-all duration-300 origin-left"
                    style={{
                      transform: isOpen
                        ? "rotate(-45deg) translateY(1px)"
                        : "none",
                      width: isOpen ? "110%" : "80%",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* ── Mobile Menu ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? "480px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {/* Dark panel — matching the site's dark section aesthetic */}
          <div
            style={{
              background: "linear-gradient(145deg, #0f0f0f 0%, #1a1a2e 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Ambient orb */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
              }}
            />
            <div className="relative px-6 pt-6 pb-8 space-y-1">
              {navLinks.map((item, i) => {
                const href = `/${item.toLowerCase()}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between w-full px-4 py-4 rounded-2xl transition-all duration-200 group"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.07)"
                        : "transparent",
                      animationDelay: `${i * 60}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Number tag */}
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                        0{i + 1}
                      </span>
                      <span
                        className="text-lg font-black tracking-[-0.03em] transition-colors duration-200"
                        style={{
                          color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                    {/* Arrow */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, #facc15, #fb923c)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        style={{
                          color: isActive ? "#111" : "rgba(255,255,255,0.4)",
                        }}
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
                  </Link>
                );
              })}
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-sm font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(135deg, #facc15 0%, #fb923c 100%)",
                    color: "#111",
                    boxShadow: "0 8px 24px rgba(251,146,60,0.3)",
                  }}
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
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
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(2px)" }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
export default Navbar;
