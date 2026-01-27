"use client";
import { useState, useEffect, useCallback, useRef } from "react";

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

interface TranscriptLine {
  speaker: "AI" | "Rep";
  text: string;
  delay: number; // seconds after call starts
}

const transcript: TranscriptLine[] = [
  { speaker: "AI", text: "Hello, this is Urvika AI calling on behalf of Sunrise Medical Group. I need to verify benefits for patient ID 4829.", delay: 2 },
  { speaker: "Rep", text: "Sure, let me pull that up. Can you confirm the patient date of birth?", delay: 6 },
  { speaker: "AI", text: "Yes, date of birth is March 15th, 1987.", delay: 9 },
  { speaker: "Rep", text: "Thank you. I see the patient is active. What procedure code do you need verified?", delay: 13 },
  { speaker: "AI", text: "I need to verify coverage for CPT code 99213 — an office visit, level 3.", delay: 16 },
  { speaker: "Rep", text: "That code is covered under the plan. The copay is $30, no prior auth required.", delay: 20 },
  { speaker: "AI", text: "Perfect. And can you confirm if there is a deductible remaining?", delay: 23 },
  { speaker: "Rep", text: "The annual deductible is $500, and $320 has been met so far. So $180 remaining.", delay: 27 },
  { speaker: "AI", text: "Got it. $180 remaining on a $500 deductible. Reference number for this call?", delay: 30 },
  { speaker: "Rep", text: "Reference number is BV-2024-88431. Is there anything else?", delay: 34 },
  { speaker: "AI", text: "That covers everything. Thank you for your help. Have a great day!", delay: 37 },
  { speaker: "Rep", text: "You too. Goodbye!", delay: 40 },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function CallSimulation() {
  const [callActive, setCallActive] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [muted, setMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const waveformBars = useRef<number[]>(
    Array.from({ length: 32 }, () => Math.random())
  );

  // Timer
  useEffect(() => {
    if (!callActive) return;
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [callActive]);

  // Reveal transcript lines based on elapsed time
  useEffect(() => {
    const count = transcript.filter((line) => elapsed >= line.delay).length;
    setVisibleLines(count);
  }, [elapsed]);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines]);

  // End call after last line
  useEffect(() => {
    if (visibleLines >= transcript.length && callActive && elapsed > transcript[transcript.length - 1].delay + 2) {
      setCallActive(false);
      setCallEnded(true);
    }
  }, [visibleLines, elapsed, callActive]);

  // Waveform animation
  const [waveKey, setWaveKey] = useState(0);
  useEffect(() => {
    if (!callActive || muted) return;
    const interval = setInterval(() => {
      waveformBars.current = Array.from({ length: 32 }, () => Math.random());
      setWaveKey((k) => k + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [callActive, muted]);

  const restartCall = useCallback(() => {
    setCallActive(true);
    setElapsed(0);
    setVisibleLines(0);
    setMuted(false);
    setSpeakerOn(false);
    setCallEnded(false);
  }, []);

  const endCall = useCallback(() => {
    setCallActive(false);
    setCallEnded(true);
  }, []);

  return (
    <div className="bg-gray-900 rounded-3xl p-8 w-full max-w-md relative overflow-hidden">
      {/* Background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl transition-colors duration-500 ${callActive ? "bg-[#0B94F5]/20" : "bg-gray-700/20"}`} />

      <div className="relative">
        {/* Call status */}
        <div className="text-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${callActive ? "bg-gradient-to-br from-[#0B94F5] to-[#06b6d4] glow-blue" : "bg-gray-700"}`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">Pacific Health Systems</p>
          <p className="text-gray-400 text-sm">Benefits Verification Call</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            {callActive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  In Progress — {formatTime(elapsed)}
                </span>
              </>
            ) : callEnded ? (
              <>
                <span className="w-2 h-2 rounded-full bg-gray-500" />
                <span className="text-gray-400 text-sm font-medium">
                  Call Ended — {formatTime(elapsed)}
                </span>
              </>
            ) : null}
          </div>
          {muted && callActive && (
            <div className="mt-2">
              <span className="text-red-400 text-xs font-medium bg-red-400/10 px-2 py-0.5 rounded-full">Muted</span>
            </div>
          )}
          {speakerOn && callActive && (
            <div className="mt-1">
              <span className="text-cyan-400 text-xs font-medium bg-cyan-400/10 px-2 py-0.5 rounded-full">Speaker On</span>
            </div>
          )}
        </div>

        {/* Waveform visualization */}
        <div className="flex items-center justify-center gap-[3px] h-12 mb-6">
          {waveformBars.current.map((val, i) => (
            <div
              key={`${i}-${waveKey}`}
              className="w-[3px] rounded-full transition-all duration-150"
              style={{
                height: callActive && !muted ? `${15 + val * 85}%` : "8%",
                backgroundColor: callActive ? "#0B94F5" : "#4B5563",
                opacity: callActive && !muted ? 0.4 + val * 0.6 : 0.3,
              }}
            />
          ))}
        </div>

        {/* Call transcript preview */}
        <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
          <p className="text-gray-400 text-xs font-medium mb-2">LIVE TRANSCRIPT</p>
          <div
            ref={transcriptRef}
            className="space-y-2.5 max-h-36 overflow-y-auto scrollbar-thin pr-1"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 transparent" }}
          >
            {visibleLines === 0 && callActive && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs italic">Connecting...</span>
                <span className="flex gap-1">
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                </span>
              </div>
            )}
            {transcript.slice(0, visibleLines).map((line, idx) => (
              <div
                key={idx}
                className="flex gap-2 animate-fade-in"
                style={{ animationDuration: "0.4s" }}
              >
                <span className={`text-xs font-semibold flex-shrink-0 ${line.speaker === "AI" ? "text-[#0B94F5]" : "text-green-400"}`}>
                  {line.speaker}:
                </span>
                <span className="text-gray-300 text-xs">{line.text}</span>
              </div>
            ))}
            {callEnded && visibleLines >= transcript.length && (
              <div className="pt-2 border-t border-white/5 mt-2">
                <p className="text-gray-500 text-xs italic">Call completed successfully</p>
                <div className="flex gap-3 mt-1.5">
                  <span className="text-xs text-gray-500">Duration: {formatTime(elapsed)}</span>
                  <span className="text-xs text-green-400">&#10003; Verified</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call controls */}
        <div className="flex items-center justify-center gap-6">
          {/* Mute */}
          <button
            onClick={() => callActive && setMuted((m) => !m)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              muted
                ? "bg-red-500/20 text-red-400 ring-1 ring-red-500/30"
                : "bg-white/10 text-white hover:bg-white/20"
            } ${!callActive ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>

          {/* End / Restart */}
          {callActive ? (
            <button
              onClick={endCall}
              className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30 hover:bg-red-600 transition-all duration-200 cursor-pointer hover:scale-105"
              title="End Call"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={restartCall}
              className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all duration-200 cursor-pointer hover:scale-105"
              title="Replay Demo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          )}

          {/* Speaker */}
          <button
            onClick={() => callActive && setSpeakerOn((s) => !s)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              speakerOn
                ? "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30"
                : "bg-white/10 text-white hover:bg-white/20"
            } ${!callActive ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            title={speakerOn ? "Speaker Off" : "Speaker On"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

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

          {/* Right: Interactive Phone Call UI */}
          <div className="flex justify-center">
            <CallSimulation />
          </div>
        </div>
      </div>
    </section>
  );
}
