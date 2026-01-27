"use client";
import { useEffect, useState } from "react";

const stats = [
  { value: "500K+", label: "Hours Saved Annually" },
  { value: "99.2%", label: "Accuracy Rate" },
  { value: "150+", label: "Enterprise Clients" },
  { value: "24/7", label: "Always Available" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="gradient-hero relative overflow-hidden min-h-screen flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Trusted Voice AI Platform for Healthcare
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            AI Agents for{" "}
            <span className="gradient-text">Clinical &amp; Administrative</span>{" "}
            Healthcare Calls
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Urvika.ai uses voice AI to automate phone calls, saving the healthcare
            system hundreds of thousands of hours annually while improving patient
            outcomes at scale.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              Request a Demo
            </a>
            <a
              href="#platform"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Platform
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
