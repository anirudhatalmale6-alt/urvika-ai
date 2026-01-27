"use client";

const audiences = [
  {
    title: "Patients",
    description: "Automated outreach, appointment scheduling, medication reminders, and follow-up calls that keep patients engaged and informed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    features: ["Appointment Scheduling", "Medication Reminders", "Follow-up Calls", "Patient Surveys"],
  },
  {
    title: "Payors",
    description: "Streamline benefits verification, prior authorization, and claims status inquiries with AI agents that navigate complex payor systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    features: ["Benefits Verification", "Prior Authorization", "Claims Status", "Eligibility Checks"],
  },
  {
    title: "Providers",
    description: "Automate referral management, lab result communications, and inter-provider coordination to free up clinical staff for patient care.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    features: ["Referral Management", "Lab Results", "Care Coordination", "Provider Outreach"],
  },
];

const industries = [
  "Health Systems",
  "Ambulatory Surgery Centers",
  "Labs & Diagnostics",
  "Specialty Pharmacies",
  "Pharmaceutical & Life Sciences",
  "Payor Partnerships",
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            Call Anyone.{" "}
            <span className="gradient-text">Automate Everything.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our voice AI agents and copilots automate phone calls to patients,
            payors, and providers — overcoming staffing challenges while improving outcomes.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
