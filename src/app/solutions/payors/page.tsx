import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Payor Solutions — Urvika.ai",
  description: "Automate benefits verification, prior authorization, and claims status inquiries with Urvika.ai voice AI.",
};

export default function PayorsPage() {
  return (
    <SolutionPageTemplate
      category="Payors"
      title="Navigate Complex Payor Systems with AI"
      subtitle="Streamline benefits verification, prior authorization, and claims status inquiries with AI agents that navigate complex payor phone trees and systems."
      description="Payor interactions are the most time-consuming administrative task in healthcare. Hold times, complex phone trees, and inconsistent processes waste thousands of staff hours daily. Urvika.ai's AI agents handle these calls autonomously, delivering consistent results around the clock."
      heroColor="bg-gradient-to-br from-cyan-50 to-teal-50"
      stats={[
        { value: "85%", label: "Reduction in Hold Time" },
        { value: "Days→Hrs", label: "Prior Auth Turnaround" },
        { value: "99.2%", label: "Data Accuracy" },
        { value: "20+ FTEs", label: "Typically Reallocated" },
      ]}
      features={[
        {
          title: "Benefits Verification",
          description: "AI agents call payors to verify patient insurance benefits, eligibility, copays, and deductibles — handling hold times and complex phone menus automatically.",
        },
        {
          title: "Prior Authorization",
          description: "Automate the entire prior auth process from initial submission to status checks and follow-ups, reducing turnaround from days to hours.",
        },
        {
          title: "Claims Status Inquiry",
          description: "Proactively check on claim status, identify denials early, and escalate issues to your revenue cycle team before they become problems.",
        },
        {
          title: "Eligibility Checks",
          description: "Real-time eligibility verification before patient visits to prevent claim denials and surprise billing scenarios.",
        },
        {
          title: "Appeals & Denials Management",
          description: "Automated follow-up on denied claims with intelligent escalation and documentation gathering to maximize appeal success rates.",
        },
        {
          title: "PBM Interactions",
          description: "Navigate pharmacy benefit manager systems for prescription coverage verification, formulary checks, and override requests.",
        },
      ]}
      useCases={[
        "Real-time insurance verification",
        "Surgical prior authorization",
        "Medication prior authorization",
        "Claims status tracking",
        "Denial appeal follow-ups",
        "Out-of-network benefit checks",
        "PBM coverage verification",
        "Coordination of benefits inquiry",
      ]}
    />
  );
}
