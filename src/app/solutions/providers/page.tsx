import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Provider Solutions — Urvika.ai",
  description: "Automate referral management, lab results, and care coordination with Urvika.ai voice AI.",
};

export default function ProvidersPage() {
  return (
    <SolutionPageTemplate
      category="Providers"
      title="Streamline Provider Communications with AI"
      subtitle="Automate referral management, lab result communications, and inter-provider coordination to free up clinical staff and improve care coordination."
      description="Provider-to-provider communication is critical for patient outcomes but incredibly time-consuming. Phone tag, fax delays, and missed follow-ups create gaps in care. Urvika.ai automates these interactions, ensuring seamless coordination across the care continuum."
      heroColor="bg-gradient-to-br from-violet-50 to-purple-50"
      stats={[
        { value: "60%", label: "Faster Referrals" },
        { value: "3x", label: "Care Coordination Volume" },
        { value: "45%", label: "Less Phone Tag" },
        { value: "150+", label: "EHR Integrations" },
      ]}
      features={[
        {
          title: "Referral Management",
          description: "Automate outbound referral calls, schedule specialist appointments, and follow up on pending referrals to close the loop on every patient.",
        },
        {
          title: "Lab Results Communication",
          description: "Proactively communicate lab results to patients and ordering providers, with intelligent escalation for critical or abnormal findings.",
        },
        {
          title: "Care Coordination",
          description: "Facilitate communication between primary care, specialists, and ancillary services to ensure coordinated, high-quality patient care.",
        },
        {
          title: "Provider Outreach",
          description: "Automated outreach to referring providers for clinical updates, care plan changes, and discharge summaries.",
        },
        {
          title: "Record Retrieval",
          description: "AI agents call provider offices to request medical records, imaging results, and other documentation needed for patient care.",
        },
        {
          title: "Appointment Coordination",
          description: "Cross-provider appointment scheduling and coordination to minimize patient burden and ensure timely care delivery.",
        },
      ]}
      useCases={[
        "Specialist referral scheduling",
        "Discharge summary follow-ups",
        "Imaging result notifications",
        "Cross-facility care coordination",
        "Medical record requests",
        "Provider status updates",
        "Clinical consult scheduling",
        "Transfer coordination",
      ]}
    />
  );
}
