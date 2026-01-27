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
  "Molina Healthcare",
  "Aetna",
];

export default function LogoBar() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
          Trusted by leading healthcare organizations
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-logo-scroll">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center"
              >
                <div className="flex items-center gap-2.5 opacity-30 hover:opacity-60 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-sm">
                      {name.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                  <span className="text-gray-500 font-semibold text-sm whitespace-nowrap">
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
