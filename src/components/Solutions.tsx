"use client";

const audiences = [
  {
    title: "Patients",
    description:
      "Automated outreach, appointment scheduling, medication reminders, and follow-up calls that keep patients engaged and informed throughout their care journey.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    features: [
      "Appointment Scheduling & Reminders",
      "Medication Adherence Calls",
      "Post-Discharge Follow-ups",
      "Patient Satisfaction Surveys",
      "Care Gap Outreach",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Payors",
    description:
      "Streamline benefits verification, prior authorization, and claims status inquiries with AI agents that navigate complex payor phone trees and systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    features: [
      "Benefits Verification",
      "Prior Authorization",
      "Claims Status Inquiry",
      "Eligibility Checks",
      "Appeals & Denials Management",
    ],
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Providers",
    description:
      "Automate referral management, lab result communications, and inter-provider coordination to free up clinical staff and improve care coordination.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    features: [
      "Referral Management",
      "Lab Results Communication",
      "Care Coordination",
      "Provider-to-Provider Outreach",
      "Record Retrieval",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

const industries = [
  { name: "Health Systems", icon: "🏥" },
  { name: "Ambulatory Surgery Centers", icon: "🔬" },
  { name: "Labs & Diagnostics", icon: "🧪" },
  { name: "Specialty Pharmacies", icon: "💊" },
  { name: "Pharmaceutical & Life Sciences", icon: "⚗️" },
  { name: "Payor Partnerships", icon: "🤝" },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
            Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Call Anyone. Automate Everything.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our voice AI agents and copilots automate phone calls to patients,
            payors, and providers — overcoming healthcare staffing challenges,
            increasing revenue, and improving patient outcomes at scale.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${item.color} p-6`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2.5">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#0B94F5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#0B94F5] font-semibold text-sm mt-6 hover:text-[#0a85dc] transition-colors group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Solutions by Industry
            </h3>
            <p className="text-gray-500">
              Tailored voice AI solutions for every corner of the healthcare ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href="#contact"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#0B94F5]/20 hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0B94F5] transition-colors leading-tight">
                  {ind.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
