"use client";
import { useState, FormEvent, useRef } from "react";

interface HiringFormProps {
  jobTitle?: string;
  onClose: () => void;
}

export default function HiringForm({ jobTitle, onClose }: HiringFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!resume) {
      setError("Please upload your resume");
      return;
    }
    setLoading(true);
    setError("");

    try {
      // Use FormData for proper file attachment support
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "717cb147-0628-4fa2-96cc-2228296bc2a3");
      formDataToSend.append("subject", `Job Application${jobTitle ? ` for ${jobTitle}` : ""} — ${formData.name}`);
      formDataToSend.append("from_name", formData.name);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("position", jobTitle || "General Application");
      formDataToSend.append("attachment", resume);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Resume file must be less than 5MB");
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setError("Please upload a PDF or Word document");
        return;
      }
      setResume(file);
      setError("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h3>
            <p className="text-gray-500 mb-6">
              Thank you for your interest in joining Urvika.ai. Our HR team will review your application and get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] text-white font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Apply for Position</h3>
            {jobTitle && (
              <p className="text-[#0B94F5] font-medium mb-6">{jobTitle}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#0B94F5] focus:border-transparent focus:bg-white outline-none transition-all"
                  placeholder="+91 99999 99999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume *</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-4 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm cursor-pointer hover:border-[#0B94F5]/50 hover:bg-gray-100 transition-all text-center"
                >
                  {resume ? (
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{resume.name}</span>
                    </div>
                  ) : (
                    <div className="text-gray-500">
                      <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p>Click to upload resume</p>
                      <p className="text-xs mt-1">PDF or Word (max 5MB)</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-full bg-[#0B94F5] hover:bg-[#0a85dc] disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
