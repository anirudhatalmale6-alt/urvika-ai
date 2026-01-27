"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Urvika.ai has transformed our benefits verification process. What used to take our staff hours now happens automatically with remarkable accuracy. We've reallocated over 20 FTEs to patient-facing roles.",
    name: "Dr. Sarah Mitchell",
    title: "VP of Operations",
    company: "Pacific Health Systems",
    avatar: "SM",
    metric: "20+ FTEs Reallocated",
  },
  {
    quote:
      "The accuracy and reliability of Urvika's voice AI is unmatched. Our prior authorization turnaround dropped from days to hours, directly improving patient outcomes and provider satisfaction.",
    name: "James Rodriguez",
    title: "Chief Digital Officer",
    company: "Meridian Healthcare Group",
    avatar: "JR",
    metric: "Prior Auth: Days → Hours",
  },
  {
    quote:
      "We evaluated multiple AI solutions, and Urvika.ai stood out for its healthcare-specific approach. Their understanding of clinical workflows and payor systems is genuinely impressive. ROI was visible within the first quarter.",
    name: "Dr. Amanda Chen",
    title: "CMO",
    company: "Apex Medical Network",
    avatar: "AC",
    metric: "ROI in First Quarter",
  },
  {
    quote:
      "Patient engagement is at an all-time high since deploying Urvika's AI agents for appointment reminders and follow-ups. No-show rates dropped 40% and patient satisfaction scores have never been better.",
    name: "Michael Torres",
    title: "Director of Patient Experience",
    company: "Sunrise Health Partners",
    avatar: "MT",
    metric: "40% Fewer No-Shows",
  },
  {
    quote:
      "As a specialty pharmacy, our call volume is enormous. Urvika.ai handles the majority of our routine outbound calls with a quality indistinguishable from our best staff. It's been a game-changer for scaling operations.",
    name: "Lisa Patel",
    title: "COO",
    company: "CareBridge Specialty Rx",
    avatar: "LP",
    metric: "3x Call Capacity",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            See why leading healthcare organizations choose Urvika.ai to transform their operations.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl card-shadow overflow-hidden">
            <div className="grid md:grid-cols-[280px_1fr]">
              {/* Left: Profile */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B94F5] to-[#06b6d4] flex items-center justify-center text-white font-bold text-xl mb-4">
                  {testimonials[active].avatar}
                </div>
                <h4 className="text-white font-bold text-lg">
                  {testimonials[active].name}
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  {testimonials[active].title}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[active].company}
                </p>
                <div className="mt-5 px-4 py-2 rounded-full bg-[#0B94F5]/10 border border-[#0B94F5]/20">
                  <span className="text-[#0B94F5] text-xs font-bold">
                    {testimonials[active].metric}
                  </span>
                </div>
              </div>

              {/* Right: Quote */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <svg
                  className="w-10 h-10 text-[#0B94F5]/15 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === active
                            ? "bg-[#0B94F5] w-8"
                            : "bg-gray-200 hover:bg-gray-300 w-2"
                        }`}
                        aria-label={`View testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
