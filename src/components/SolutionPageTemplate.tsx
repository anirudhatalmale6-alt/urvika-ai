"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Feature {
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface SolutionPageProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  heroColor: string;
  features: Feature[];
  stats: Stat[];
  useCases: string[];
  ctaText?: string;
}

export default function SolutionPageTemplate({
  category,
  title,
  subtitle,
  description,
  heroColor,
  features,
  stats,
  useCases,
  ctaText = "Get a Demo",
}: SolutionPageProps) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={`pt-28 pb-20 ${heroColor} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, #0B94F5 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
              Solutions &middot; {category}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-section" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-500/25">
                {ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/60 hover:bg-white/80 text-gray-900 font-semibold text-base border border-gray-200/60 transition-all duration-200">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">How Urvika.ai Helps</h2>
            <p className="text-lg text-gray-500 leading-relaxed">{description}</p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#0B94F5]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#0B94F5]/10 flex items-center justify-center text-[#0B94F5] mb-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Key Use Cases</h2>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 card-shadow">
                <div className="w-8 h-8 rounded-full bg-[#0B94F5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0B94F5]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 gradient-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Ready to Get Started?</h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            See how Urvika.ai can transform your operations with a personalized demo tailored to your needs.
          </p>
          <a href="/#contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-500/25">
            Request a Demo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
