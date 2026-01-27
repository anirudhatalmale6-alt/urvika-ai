import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Payor Partnership Solutions — Urvika.ai",
  description: "Voice AI for health plans — automate member outreach, provider network management, and claims coordination.",
};

export default function PayorPartnersPage() {
  return (
    <SolutionPageTemplate
      category="Payor Partnerships"
      title="Transform Health Plan Operations with AI"
      subtitle="Automate member outreach, provider network management, care management programs, and claims coordination — helping health plans improve outcomes and reduce costs."
      description="Health plans face growing pressure to improve member outcomes while controlling administrative costs. Urvika.ai partners with payors to automate high-volume, repetitive phone communications — from member engagement to provider outreach — driving better Star Ratings and HEDIS scores at scale."
      heroColor="bg-gradient-to-br from-sky-50 to-cyan-50"
      stats={[
        { value: "4x", label: "Member Outreach Scale" },
        { value: "30%", label: "Better Engagement" },
        { value: "50%", label: "Cost Per Interaction Reduction" },
        { value: "15pts", label: "Star Rating Improvement" },
      ]}
      features={[
        {
          title: "Member Engagement",
          description: "Proactive outreach to members for wellness visits, preventive screenings, care gap closure, and health risk assessments at population scale.",
        },
        {
          title: "Provider Network Management",
          description: "Automated provider outreach for credentialing follow-ups, directory verification, and network adequacy management calls.",
        },
        {
          title: "Care Management Programs",
          description: "AI-powered care management outreach including chronic disease check-ins, transitional care follow-ups, and medication therapy management.",
        },
        {
          title: "Claims Coordination",
          description: "Automate provider calls for claims clarification, coordination of benefits, and overpayment recovery to streamline revenue integrity.",
        },
        {
          title: "Quality Measure Outreach",
          description: "Targeted member outreach to close quality gaps and improve HEDIS scores, Star Ratings, and value-based contract performance.",
        },
        {
          title: "Member Services Augmentation",
          description: "Supplement your contact center with AI agents handling routine member inquiries, ID card requests, and benefit explanations.",
        },
      ]}
      useCases={[
        "Annual wellness visit outreach",
        "HEDIS gap closure campaigns",
        "New member onboarding calls",
        "Provider directory verification",
        "Care transition follow-ups",
        "Medication therapy management",
        "Claims clarification calls",
        "Health risk assessment outreach",
      ]}
    />
  );
}
