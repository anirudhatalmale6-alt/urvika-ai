"use client";
import { useState } from "react";

const tabs = [
  {
    id: "agents",
    label: "AI Agents",
    title: "Fully Automate Complex Healthcare Calls",
    description:
      "Our AI agents autonomously handle end-to-end phone conversations with patients, payors, and providers. From benefits verification to appointment scheduling, they manage the entire call flow with human-like understanding.",
    features: [
      "Natural language understanding tuned for healthcare terminology",
      "Real-time decision-making using clinical knowledge graphs",
      "Automatic documentation and EHR integration",
      "Escalation to human agents when needed",
    ],
  },
  {
    id: "copilots",
    label: "AI Copilots",
    title: "Augment Your Team with AI-Powered Assistance",
    description:
      "AI Copilots work alongside your staff, providing real-time guidance, auto-filling forms, and suggesting next-best actions during live calls. Your team stays in control while working 3x faster.",
    features: [
      "Real-time transcription and call summarization",
      "Intelligent prompts and suggested responses",
      "Automated form filling and data entry",
      "Quality assurance and compliance monitoring",
    ],
  },
  {
    id: "platform",
    label: "Platform",
    title: "Enterprise-Grade Infrastructure Built for Healthcare",
    description:
      "Our platform is built from the ground up for healthcare — with safety-first AI architecture, HIPAA compliance, SOC 2 certification, and integrations with every major EHR and payor system.",
    features: [
      "Safety-first AI architecture with guardrails",
      "HIPAA compliant & SOC 2 Type II certified",
      "Knowledge graph with healthcare-specific data",
      "Seamless integration with 50+ healthcare systems",
    ],
  },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState("agents");
  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
            Product
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            The first trusted voice AI platform for healthcare
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A safety-first healthcare voice AI platform that automates phone
            calls to patients, payors, and providers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#0B94F5] text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {active.title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              {active.description}
            </p>
            <ul className="space-y-4">
              {active.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0B94F5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#0B94F5]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Get a Demo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Phone Call UI Mockup */}
          <div className="flex justify-center">
            <div className="bg-gray-900 rounded-3xl p-8 w-full max-w-md relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0B94F5]/20 rounded-full blur-3xl" />

              <div className="relative">
                {/* Call status */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0B94F5] to-[#06b6d4] flex items-center justify-center mx-auto mb-4 glow-blue">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Pacific Health Systems</p>
                  <p className="text-gray-400 text-sm">Benefits Verification Call</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">In Progress — 02:34</span>
                  </div>
                </div>

                {/* Waveform visualization */}
                <div className="flex items-center justify-center gap-[3px] h-12 mb-8">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] bg-[#0B94F5] rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`,
                        opacity: 0.4 + Math.random() * 0.6,
                      }}
                    />
                  ))}
                </div>

                {/* Call transcript preview */}
                <div className="bg-white/5 rounded-2xl p-4 mb-8 border border-white/10">
                  <p className="text-gray-400 text-xs font-medium mb-2">LIVE TRANSCRIPT</p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[#0B94F5] text-xs font-semibold flex-shrink-0">AI:</span>
                      <span className="text-gray-300 text-xs">I&apos;m calling to verify benefits for patient ID 4829...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-400 text-xs font-semibold flex-shrink-0">Rep:</span>
                      <span className="text-gray-300 text-xs">Sure, let me pull that up. One moment please.</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#0B94F5] text-xs font-semibold flex-shrink-0">AI:</span>
                      <span className="text-gray-300 text-xs">Of course, I&apos;ll hold.</span>
                    </div>
                  </div>
                </div>

                {/* Call controls */}
                <div className="flex items-center justify-center gap-6">
                  <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
