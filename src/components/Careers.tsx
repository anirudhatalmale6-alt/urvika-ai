"use client";
import { useState } from "react";
import HiringForm from "./HiringForm";

const jobs = [
  { title: "Senior ML Engineer", team: "AI Platform", location: "Bengaluru, India", type: "Full-time" },
  { title: "Voice AI Research Scientist", team: "Research", location: "Remote", type: "Full-time" },
  { title: "Healthcare Solutions Architect", team: "Solutions", location: "Bengaluru, India", type: "Full-time" },
  { title: "Full Stack Engineer", team: "Product", location: "Bengaluru, India", type: "Full-time" },
  { title: "Clinical Operations Lead", team: "Operations", location: "Remote", type: "Full-time" },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const handleGeneralApply = () => {
    setSelectedJob(null);
    setShowForm(true);
  };

  return (
    <>
      <section id="careers" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#0B94F5] font-semibold text-sm uppercase tracking-wider mb-3">
              Careers
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Help us build the future of healthcare communications. We&apos;re looking
              for passionate people who want to make a difference.
            </p>
          </div>

          {/* Job Listings */}
          <div className="max-w-3xl mx-auto space-y-3">
            {jobs.map((job, i) => (
              <button
                key={i}
                onClick={() => handleApply(job.title)}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-xl border border-gray-100 hover:border-[#0B94F5]/20 hover:shadow-lg transition-all duration-300 group text-left"
              >
                <div className="mb-3 sm:mb-0">
                  <h4 className="font-bold text-gray-900 group-hover:text-[#0B94F5] transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-500">{job.team}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm text-gray-500">{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center text-[#0B94F5] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Apply
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Don&apos;t see a role that fits?{" "}
              <button
                onClick={handleGeneralApply}
                className="text-[#0B94F5] font-semibold hover:underline"
              >
                Send us your resume
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Form Modal */}
      {showForm && (
        <HiringForm
          jobTitle={selectedJob || undefined}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
