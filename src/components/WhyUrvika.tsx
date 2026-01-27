"use client";

const reasons = [
  {
    stat: "50%",
    statLabel: "of Fortune 50",
    title: "Trusted by the Largest Healthcare Organizations",
    description:
      "Nearly half of Fortune 50 companies rely on Urvika.ai to power their healthcare communications. Our platform is battle-tested at enterprise scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    stat: "99.2%",
    statLabel: "Accuracy",
    title: "Industry-Leading Accuracy & Reliability",
    description:
      "Our safety-first AI architecture delivers the highest accuracy rates in the industry. Every interaction is monitored, validated, and continuously improved.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    stat: "500K+",
    statLabel: "Hours Saved",
    title: "Hundreds of Thousands of Hours Saved Annually",
    description:
      "Our AI agents handle the routine calls that consume your staff's time — benefits verification, prior auth, appointment scheduling — so your team can focus on patient care.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "24/7",
    statLabel: "Availability",
    title: "Always On, Always Available",
    description:
      "Unlike human agents, our AI never takes breaks, never calls in sick, and never has an off day. Consistent, high-quality interactions around the clock.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function WhyUrvika() {
  return (
    <section id="why-urvika" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
            Why Urvika.ai
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            The most trusted voice AI platform for healthcare
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Purpose-built for healthcare, our platform delivers unmatched
            accuracy, reliability, and scale for clinical and administrative
            voice automation.
          </p>
        </div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B94F5]/10 to-[#06b6d4]/10 flex items-center justify-center text-[#0B94F5] group-hover:from-[#0B94F5] group-hover:to-[#06b6d4] group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-gray-900">
                      {reason.stat}
                    </span>
                    <span className="text-sm font-medium text-gray-400">
                      {reason.statLabel}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
