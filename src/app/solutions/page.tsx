import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const audiences = [
  {
    title: "Patients",
    description: "Automated outreach, scheduling, reminders, and follow-up calls.",
    href: "/solutions/patients",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Payors",
    description: "Benefits verification, prior auth, claims status, and eligibility.",
    href: "/solutions/payors",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Providers",
    description: "Referral management, lab results, and care coordination.",
    href: "/solutions/providers",
    color: "from-violet-500 to-purple-600",
  },
];

const industries = [
  { title: "Health Systems", href: "/solutions/health-systems", icon: "🏥" },
  { title: "Ambulatory Surgery Centers", href: "/solutions/ambulatory-surgery-centers", icon: "🔬" },
  { title: "Labs & Diagnostics", href: "/solutions/labs-diagnostics", icon: "🧪" },
  { title: "Specialty Pharmacies", href: "/solutions/specialty-pharmacies", icon: "💊" },
  { title: "Pharma & Life Sciences", href: "/solutions/pharmaceutical-life-sciences", icon: "⚗️" },
  { title: "Payor Partnerships", href: "/solutions/payor-partners", icon: "🤝" },
];

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
            Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Call Anyone. Automate Everything.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our voice AI agents and copilots automate phone calls to patients,
            payors, and providers — overcoming staffing challenges and improving outcomes at scale.
          </p>
        </div>
      </section>

      {/* Call Anyone */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Call Anyone
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${item.color} p-6`}>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center text-[#0B94F5] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Who We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#0B94F5]/20 hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-[#0B94F5] transition-colors leading-tight">
                  {ind.title}
                </span>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#0B94F5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-gray-400 mb-8">See how Urvika.ai can transform your operations.</p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-base shadow-xl shadow-blue-500/25 transition-all">
            Request a Demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
