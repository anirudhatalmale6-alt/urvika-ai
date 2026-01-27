import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Specialty Pharmacy Solutions — Urvika.ai",
  description: "Voice AI for specialty pharmacies — automate payor interactions, patient onboarding, and adherence calls.",
};

export default function SpecialtyPharmaciesPage() {
  return (
    <SolutionPageTemplate
      category="Specialty Pharmacies"
      title="Scale Specialty Pharmacy Operations with AI"
      subtitle="Automate communications to payors and pharmacies, reduce staffing demands, and eliminate call backlogs with AI agents built for specialty pharmacy workflows."
      description="Specialty pharmacies face enormous call volumes with complex payor interactions, patient onboarding processes, and adherence management requirements. Urvika.ai handles the majority of routine outbound calls with a quality indistinguishable from your best staff — enabling you to scale without proportional headcount growth."
      heroColor="bg-gradient-to-br from-pink-50 to-rose-50"
      stats={[
        { value: "3x", label: "Call Capacity" },
        { value: "80%", label: "Automation Rate" },
        { value: "45%", label: "Faster Onboarding" },
        { value: "99%", label: "Adherence Outreach" },
      ]}
      features={[
        {
          title: "Payor & PBM Interactions",
          description: "AI agents navigate complex payor and PBM phone systems for coverage verification, prior authorization, and appeals — handling hold times automatically.",
        },
        {
          title: "Patient Onboarding",
          description: "Automated onboarding calls for new specialty patients including consent collection, insurance verification, and therapy education.",
        },
        {
          title: "Adherence Management",
          description: "Proactive adherence calls to ensure patients are refilling on time, managing side effects, and staying on therapy with intelligent escalation.",
        },
        {
          title: "Refill Coordination",
          description: "Automated refill reminder calls, shipment scheduling, and delivery confirmations to keep patients on their medication regimen.",
        },
        {
          title: "Benefits Investigation",
          description: "Comprehensive benefits investigation for high-cost specialty medications including coverage determination, copay assistance, and alternate funding.",
        },
        {
          title: "Hub Services Support",
          description: "Augment your hub services with AI agents that handle manufacturer program enrollment, copay card activation, and patient assistance applications.",
        },
      ]}
      useCases={[
        "Prior auth for specialty medications",
        "New patient intake and onboarding",
        "Refill reminder outreach",
        "Side effect check-in calls",
        "Copay assistance enrollment",
        "Shipment delivery confirmation",
        "PBM override requests",
        "Therapy compliance monitoring",
      ]}
    />
  );
}
