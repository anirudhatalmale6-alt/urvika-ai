"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
              About Urvika.ai
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Healthcare One Call at a Time
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Urvika.ai was founded with a singular mission: to eliminate the
                administrative burden that keeps healthcare professionals from
                doing what they do best — caring for patients.
              </p>
              <p>
                Our voice AI platform handles the millions of routine phone calls
                that consume countless hours every day across the healthcare
                system. From benefits verification to appointment scheduling,
                our AI agents work tirelessly so your team doesn&apos;t have to.
              </p>
              <p>
                Backed by cutting-edge AI research and a deep understanding of
                healthcare workflows, we&apos;ve built the most trusted voice AI
                platform in the industry — processing millions of calls with
                industry-leading accuracy.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Join Our Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-[#0B94F5]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0B94F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">2M+</div>
              <div className="text-sm text-gray-500">Calls Processed Monthly</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">500K+</div>
              <div className="text-sm text-gray-500">Staff Hours Saved Annually</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">99.2%</div>
              <div className="text-sm text-gray-500">Task Completion Accuracy</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-500">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
