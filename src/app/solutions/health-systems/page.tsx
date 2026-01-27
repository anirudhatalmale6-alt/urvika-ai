import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Health Systems Solutions — Urvika.ai",
  description: "Voice AI automation for health systems — reduce administrative burden, improve patient outcomes, and scale operations.",
};

export default function HealthSystemsPage() {
  return (
    <SolutionPageTemplate
      category="Health Systems"
      title="Reduce Administrative Burden Across Your Health System"
      subtitle="Overcome staffing and cost pressures by automating benefit verification, prior authorization inquiries, patient outreach, and provider coordination at scale."
      description="Health systems face unprecedented staffing challenges and cost pressures. Urvika.ai's voice AI platform automates the routine phone calls that consume thousands of staff hours daily — from payor interactions to patient engagement — enabling your team to focus on what matters most: patient care."
      heroColor="bg-gradient-to-br from-blue-50 to-indigo-50"
      stats={[
        { value: "500K+", label: "Hours Saved Annually" },
        { value: "40%", label: "Cost Reduction" },
        { value: "20+", label: "FTEs Reallocated" },
        { value: "99.2%", label: "Accuracy Rate" },
      ]}
      features={[
        {
          title: "Enterprise-Scale Automation",
          description: "Deploy AI agents across your entire health system — from large hospitals to community clinics — with centralized management and reporting.",
        },
        {
          title: "Revenue Cycle Optimization",
          description: "Automate benefits verification, prior auth, and claims follow-up to accelerate cash flow and reduce denials across all facilities.",
        },
        {
          title: "Patient Access Improvement",
          description: "AI-powered scheduling, reminders, and outreach that reduce no-shows by 40% and improve patient access system-wide.",
        },
        {
          title: "EHR Integration",
          description: "Seamless integration with Epic, Cerner, Meditech, and other major EHR systems for real-time data exchange and automated documentation.",
        },
        {
          title: "Workforce Optimization",
          description: "Reallocate staff from repetitive phone work to high-value, patient-facing roles — improving both employee satisfaction and patient outcomes.",
        },
        {
          title: "Analytics & Reporting",
          description: "Real-time dashboards and detailed analytics on call volumes, outcomes, turnaround times, and ROI across your entire organization.",
        },
      ]}
      useCases={[
        "System-wide benefits verification",
        "Centralized prior authorization",
        "Patient appointment management",
        "Discharge follow-up programs",
        "Care gap closure campaigns",
        "Provider referral coordination",
        "Claims denial management",
        "Quality measure compliance",
      ]}
    />
  );
}
