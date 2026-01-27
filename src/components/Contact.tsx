"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          subject: `New Demo Request from ${formData.firstName} ${formData.lastName} — ${formData.company}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || "Not provided",
          role: formData.role || "Not specified",
          message: formData.message || "No message provided",
        }),
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B94F5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Schedule a personalized demo to see how Urvika.ai can automate
              your healthcare communications, reduce costs, and improve patient
              outcomes.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B94F5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0B94F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Personalized Demo</h4>
                  <p className="text-sm text-gray-400">See the platform in action with your specific use cases.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B94F5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0B94F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">ROI Assessment</h4>
                  <p className="text-sm text-gray-400">Custom analysis of potential savings and efficiency gains.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B94F5]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0B94F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Implementation Plan</h4>
                  <p className="text-sm text-gray-400">Tailored deployment roadmap for your organization.</p>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#0B94F5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Our Office</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Alphanio Nexgen, No.39, 2nd Floor, Suite 1263,<br />
                    NGEF Ln, Stage 1, Indiranagar,<br />
                    Bengaluru, Karnataka 560038
                  </p>
                  <a href="mailto:hr@alphanio.com" className="text-sm text-[#0B94F5] hover:text-blue-300 mt-2 inline-block font-medium">
                    hr@alphanio.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center card-shadow">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-500">
                  We&apos;ve received your request. Our team will reach out within 24 hours to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Demo</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company *</label>
                    <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all" placeholder="Your Organization" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all" placeholder="+91 99999 99999" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Role</label>
                  <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all">
                    <option value="">Select your role</option>
                    <option value="executive">C-Suite / Executive</option>
                    <option value="director">Director / VP</option>
                    <option value="manager">Manager</option>
                    <option value="operations">Operations</option>
                    <option value="it">IT / Engineering</option>
                    <option value="clinical">Clinical</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about your needs..." />
                </div>
                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <button type="submit" disabled={loading} className="w-full px-6 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-500/25">
                  {loading ? "Sending..." : "Get a Demo"}
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
