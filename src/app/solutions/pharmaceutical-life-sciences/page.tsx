import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Pharmaceutical & Life Sciences Solutions — Urvika.ai",
  description: "Voice AI for pharma — automate HCP outreach, patient support programs, and clinical trial coordination.",
};

export default function PharmaPage() {
  return (
    <SolutionPageTemplate
      category="Pharmaceutical & Life Sciences"
      title="Accelerate Pharma Operations with Voice AI"
      subtitle="Automate HCP outreach, patient support program enrollment, clinical trial coordination, and market access activities at unprecedented scale."
      description="Pharmaceutical and life sciences companies need to reach thousands of healthcare providers, manage complex patient support programs, and coordinate clinical trials — all while navigating strict regulatory requirements. Urvika.ai provides compliant, scalable voice AI that handles these communications with precision."
      heroColor="bg-gradient-to-br from-indigo-50 to-blue-50"
      stats={[
        { value: "5x", label: "HCP Outreach Scale" },
        { value: "60%", label: "Faster Enrollment" },
        { value: "100%", label: "Compliance Rate" },
        { value: "10K+", label: "Daily Calls Capacity" },
      ]}
      features={[
        {
          title: "HCP Outreach & Education",
          description: "Scalable outreach to healthcare providers for product education, formulary status updates, and medical information requests.",
        },
        {
          title: "Patient Support Programs",
          description: "Automate patient enrollment, financial assistance applications, adherence check-ins, and program status updates for brand support programs.",
        },
        {
          title: "Clinical Trial Coordination",
          description: "AI-powered screening calls, visit reminders, and follow-up coordination for clinical trial participants and investigator sites.",
        },
        {
          title: "Market Access Support",
          description: "Automated payor outreach for formulary placement, coverage policy inquiries, and value-based contract discussions.",
        },
        {
          title: "Medical Affairs Support",
          description: "Handle medical information requests, adverse event reporting intake, and REMS program compliance calls at scale.",
        },
        {
          title: "Commercial Launch Support",
          description: "Scale your launch team with AI agents handling provider outreach, sample requests, and territory management calls.",
        },
      ]}
      useCases={[
        "Product launch HCP outreach",
        "Patient assistance enrollment",
        "Clinical trial recruitment",
        "Adverse event reporting",
        "Formulary status inquiries",
        "Speaker program coordination",
        "Copay card activation",
        "REMS compliance calls",
      ]}
    />
  );
}
