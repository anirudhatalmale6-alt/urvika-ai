import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Labs & Diagnostics Solutions — Urvika.ai",
  description: "Voice AI for labs and diagnostics — automate result notifications, order follow-ups, and insurance verification.",
};

export default function LabsDiagnosticsPage() {
  return (
    <SolutionPageTemplate
      category="Labs & Diagnostics"
      title="Automate Lab Communications at Scale"
      subtitle="Streamline result notifications, specimen collection scheduling, insurance verification, and provider follow-ups with AI-powered voice automation."
      description="Labs and diagnostics companies handle massive call volumes — from verifying insurance coverage to communicating results and coordinating specimen collection. Urvika.ai automates these repetitive interactions, letting your team focus on delivering accurate diagnostic results."
      heroColor="bg-gradient-to-br from-amber-50 to-orange-50"
      stats={[
        { value: "70%", label: "Faster Result Delivery" },
        { value: "2M+", label: "Calls Automated Monthly" },
        { value: "95%", label: "First-Call Resolution" },
        { value: "60%", label: "Cost Reduction" },
      ]}
      features={[
        {
          title: "Result Notifications",
          description: "Automated outbound calls to patients and providers with test results, including critical value escalation and acknowledgment tracking.",
        },
        {
          title: "Specimen Collection Scheduling",
          description: "AI agents schedule and confirm specimen collection appointments, send preparation instructions, and manage rescheduling.",
        },
        {
          title: "Insurance Verification",
          description: "Verify coverage and obtain pre-authorization for diagnostic tests before collection to prevent claim denials.",
        },
        {
          title: "Provider Order Follow-ups",
          description: "Automated follow-up with ordering providers on incomplete orders, missing information, and result acknowledgments.",
        },
        {
          title: "Patient Preparation Calls",
          description: "Ensure patients are properly prepared for tests with automated instruction calls covering fasting, medication holds, and timing requirements.",
        },
        {
          title: "Supply Chain Coordination",
          description: "Automate communications with collection sites, courier services, and processing facilities to optimize specimen handling workflows.",
        },
      ]}
      useCases={[
        "Critical lab value notifications",
        "Blood draw appointment scheduling",
        "Fasting instruction reminders",
        "Insurance pre-authorization",
        "Provider result acknowledgment",
        "Genetic test counseling scheduling",
        "Pathology report delivery",
        "Collection site coordination",
      ]}
    />
  );
}
