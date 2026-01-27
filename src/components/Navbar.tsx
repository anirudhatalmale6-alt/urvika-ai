"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const solutionLinks = {
  "Call Anyone": [
    { label: "Patients", href: "/solutions/patients" },
    { label: "Payors", href: "/solutions/payors" },
    { label: "Providers", href: "/solutions/providers" },
  ],
  "Who We Serve": [
    { label: "Health Systems", href: "/solutions/health-systems" },
    { label: "Ambulatory Surgery Centers", href: "/solutions/ambulatory-surgery-centers" },
    { label: "Labs & Diagnostics", href: "/solutions/labs-diagnostics" },
    { label: "Specialty Pharmacies", href: "/solutions/specialty-pharmacies" },
    { label: "Pharma & Life Sciences", href: "/solutions/pharmaceutical-life-sciences" },
    { label: "Payor Partnerships", href: "/solutions/payor-partners" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo-icon.svg" alt="Urvika.ai" className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Urvika<span className="text-[#0B94F5]">.ai</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#why-urvika" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Why Urvika
          </a>
          <a href="/#product" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Product
          </a>

          {/* Solutions Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setSolOpen(!solOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Solutions
              <svg className={`w-3.5 h-3.5 transition-transform ${solOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {solOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-6">
                {Object.entries(solutionLinks).map(([group, links]) => (
                  <div key={group}>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {group}
                    </p>
                    <div className="space-y-1">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setSolOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#0B94F5] hover:bg-blue-50 transition-all"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="col-span-2 border-t border-gray-100 pt-4 mt-2">
                  <Link
                    href="/solutions"
                    onClick={() => setSolOpen(false)}
                    className="flex items-center text-sm font-semibold text-[#0B94F5] hover:text-[#0a85dc]"
                  >
                    View All Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a href="/#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Company
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <a href="/#why-urvika" className="block text-gray-700 hover:text-[#0B94F5] hover:bg-blue-50 py-2.5 px-3 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Why Urvika
            </a>
            <a href="/#product" className="block text-gray-700 hover:text-[#0B94F5] hover:bg-blue-50 py-2.5 px-3 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Product
            </a>

            {/* Mobile Solutions Accordion */}
            <button
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className="flex items-center justify-between w-full text-gray-700 hover:text-[#0B94F5] hover:bg-blue-50 py-2.5 px-3 rounded-lg text-sm font-medium"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSolOpen && (
              <div className="pl-4 space-y-1">
                {Object.entries(solutionLinks).map(([group, links]) => (
                  <div key={group} className="mb-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1">{group}</p>
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-gray-600 hover:text-[#0B94F5] hover:bg-blue-50 py-2 px-3 rounded-lg text-sm"
                        onClick={() => { setMobileOpen(false); setMobileSolOpen(false); }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href="/solutions" className="block text-[#0B94F5] font-semibold py-2 px-3 text-sm" onClick={() => { setMobileOpen(false); setMobileSolOpen(false); }}>
                  View All Solutions →
                </Link>
              </div>
            )}

            <a href="/#about" className="block text-gray-700 hover:text-[#0B94F5] hover:bg-blue-50 py-2.5 px-3 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Company
            </a>
            <a
              href="/#contact"
              className="block w-full text-center px-5 py-2.5 rounded-full bg-[#0B94F5] text-white text-sm font-semibold mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
