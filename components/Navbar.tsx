"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const NAV_LINKS = ["Services", "About", "Portfolio", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Scroll-aware background — elevates navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const isActive = (item: string) => {
    return pathname === `/${item.toLowerCase()}`;
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_0_rgba(0,0,0,0.06)] border-b border-gray-100"
          : "bg-white/70 backdrop-blur-lg border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="text-2xl sm:text-[1.65rem] font-black tracking-[-0.04em] text-gray-950 flex items-baseline gap-0 select-none"
          >
            Brin
            <span className="font-extrabold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">
              ova
            </span>
          </Link>
          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                  )}
                </Link>
              );
            })}
          </div>
          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-0 hover:gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get in touch
              <svg
                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
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
          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px] w-full" : "w-full"}`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : "w-full"}`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px] w-full" : "w-full"}`}
              />
            </div>
          </button>
        </div>
      </div>
      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl px-5 py-4 space-y-1">
          {NAV_LINKS.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{item}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                )}
              </Link>
            );
          })}
          {/* Mobile CTA */}
          <div className="pt-3 pb-1">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
              <svg
                className="w-3.5 h-3.5"
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
      </div>
    </nav>
  );
};
export default Navbar;
