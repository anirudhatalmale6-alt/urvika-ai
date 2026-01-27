"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with cyan/blue gradient like infinitus */}
      <div className="gradient-hero relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #0B94F5 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              AI agents for clinical + administrative healthcare calls
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Urvika.ai uses voice AI to automate phone calls, saving the
              healthcare system hundreds of thousands of hours annually.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                Get a Demo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/60 hover:bg-white/80 text-gray-900 font-semibold text-base border border-gray-200/60 transition-all duration-200 hover:-translate-y-0.5"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
