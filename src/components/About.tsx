"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              About Urvika.ai
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
              Transforming Healthcare{" "}
              <span className="gradient-text">One Call at a Time</span>
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary-600/25"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-dark-900 to-dark-950 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl" />

              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">2M+</div>
                    <div className="text-sm text-gray-400">Calls Processed Monthly</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500K+</div>
                    <div className="text-sm text-gray-400">Staff Hours Saved Annually</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.2%</div>
                    <div className="text-sm text-gray-400">Task Completion Accuracy</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">150+</div>
                    <div className="text-sm text-gray-400">Enterprise Clients</div>
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
