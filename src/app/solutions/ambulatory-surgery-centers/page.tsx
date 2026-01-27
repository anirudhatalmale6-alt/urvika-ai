import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Ambulatory Surgery Center Solutions — Urvika.ai",
  description: "Voice AI for ASCs — automate prior authorizations, patient prep calls, and post-surgical follow-ups.",
};

export default function ASCPage() {
  return (
    <SolutionPageTemplate
      category="Ambulatory Surgery Centers"
      title="Maximize ASC Efficiency with Voice AI"
      subtitle="Automate prior authorizations, patient preparation calls, insurance verification, and post-surgical follow-ups to keep your OR running at full capacity."
      description="Ambulatory surgery centers operate on tight margins with lean teams. Every cancelled case due to missing prior auth or a no-show patient impacts the bottom line. Urvika.ai ensures your schedule stays full and your team stays focused on surgical care."
      heroColor="bg-gradient-to-br from-emerald-50 to-teal-50"
      stats={[
        { value: "35%", label: "Fewer Case Cancellations" },
        { value: "90%", label: "Prior Auth Automation" },
        { value: "50%", label: "Less Admin Time" },
        { value: "98%", label: "Patient Prep Completion" },
      ]}
      features={[
        {
          title: "Surgical Prior Authorization",
          description: "AI agents handle surgical prior auth requests end-to-end, including initial submissions, status checks, and peer-to-peer scheduling.",
        },
        {
          title: "Patient Preparation Calls",
          description: "Automated pre-op instruction calls ensuring patients are properly prepared — reducing day-of cancellations and delays.",
        },
        {
          title: "Insurance Verification",
          description: "Verify benefits, coverage, and out-of-pocket costs before every procedure to eliminate surprise billing and claim denials.",
        },
        {
          title: "Post-Surgical Follow-ups",
          description: "Automated recovery check-in calls to monitor patient outcomes and flag complications early for provider intervention.",
        },
        {
          title: "Scheduling Optimization",
          description: "Fill cancellation slots quickly with automated patient outreach and waitlist management to maximize OR utilization.",
        },
        {
          title: "Financial Clearance",
          description: "Pre-visit financial clearance calls to collect copays, set up payment plans, and ensure patients understand their financial responsibility.",
        },
      ]}
      useCases={[
        "Orthopedic surgery pre-auth",
        "Pre-operative patient instructions",
        "Day-before confirmation calls",
        "Post-discharge recovery checks",
        "Insurance benefits verification",
        "Waitlist management outreach",
        "Financial counseling calls",
        "Surgeon office coordination",
      ]}
    />
  );
}
