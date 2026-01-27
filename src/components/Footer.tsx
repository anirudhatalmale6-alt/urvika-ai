"use client";

const footerLinks = {
  Platform: ["AI Agents", "AI Copilots", "Safety Architecture", "Integrations", "Security"],
  Solutions: ["Health Systems", "Specialty Pharmacies", "Labs & Diagnostics", "Payors", "Life Sciences"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Security"],
};

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Ready to Save{" "}
              <span className="gradient-text">Thousands of Hours?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join 150+ healthcare organizations already using Urvika.ai to
              automate their clinical and administrative calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Request a Demo
              </a>
              <a
                href="#platform"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Platform
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Urvika<span className="text-primary-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              AI agents for clinical &amp; administrative healthcare calls. Saving
              the healthcare system hundreds of thousands of hours annually.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Urvika.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
