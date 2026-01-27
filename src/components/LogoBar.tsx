"use client";

const logos = [
  "Mayo Clinic",
  "Kaiser Permanente",
  "UnitedHealth",
  "Anthem",
  "CVS Health",
  "Cigna",
  "Humana",
  "Centene",
  "HCA Healthcare",
  "Elevance Health",
];

export default function LogoBar() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">
          Trusted by leading healthcare organizations
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-logo-scroll">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-xs">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-400 font-semibold text-sm whitespace-nowrap">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
