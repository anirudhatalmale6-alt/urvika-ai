"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Urvika.ai has transformed our benefits verification process. What used to take our staff hours now happens automatically with remarkable accuracy. We've been able to reallocate over 20 FTEs to patient-facing roles.",
    name: "Dr. Sarah Mitchell",
    title: "VP of Operations",
    company: "Pacific Health Systems",
    avatar: "SM",
  },
  {
    quote:
      "The accuracy and reliability of Urvika's voice AI is unmatched. Our prior authorization turnaround dropped from days to hours, directly improving patient outcomes and provider satisfaction scores.",
    name: "James Rodriguez",
    title: "Chief Digital Officer",
    company: "Meridian Healthcare Group",
    avatar: "JR",
  },
  {
    quote:
      "We evaluated multiple AI solutions, and Urvika.ai stood out for its healthcare-specific approach. Their understanding of clinical workflows and payor systems is genuinely impressive. ROI was visible within the first quarter.",
    name: "Dr. Amanda Chen",
    title: "CMO",
    company: "Apex Medical Network",
    avatar: "AC",
  },
  {
    quote:
      "Patient engagement is at an all-time high since deploying Urvika's AI agents for appointment reminders and follow-ups. No-show rates dropped 40% and patient satisfaction scores have never been better.",
    name: "Michael Torres",
    title: "Director of Patient Experience",
    company: "Sunrise Health Partners",
    avatar: "MT",
  },
  {
    quote:
      "As a specialty pharmacy, our call volume is enormous. Urvika.ai handles the majority of our routine outbound calls with a quality that's indistinguishable from our best staff. It's been a game-changer for scaling operations.",
    name: "Lisa Patel",
    title: "COO",
    company: "CareBridge Specialty Rx",
    avatar: "LP",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            Trusted by Healthcare{" "}
            <span className="gradient-text">Leaders Nationwide</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            See why leading healthcare organizations choose Urvika.ai to
            transform their operations.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          {/* Main quote */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-8 relative">
            <svg
              className="absolute top-8 left-8 w-12 h-12 text-primary-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <div className="relative">
              <p className="text-lg sm:text-xl text-dark-900 leading-relaxed mb-8 pl-0 sm:pl-4">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pl-0 sm:pl-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-bold text-dark-900">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[active].title},{" "}
                    {testimonials[active].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
