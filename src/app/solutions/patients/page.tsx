import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export const metadata = {
  title: "Patient Engagement Solutions — Urvika.ai",
  description: "Automate patient outreach, appointment scheduling, medication reminders, and follow-up calls with Urvika.ai voice AI.",
};

export default function PatientsPage() {
  return (
    <SolutionPageTemplate
      category="Patients"
      title="Engage Patients at Scale with Voice AI"
      subtitle="Automated outreach, appointment scheduling, medication reminders, and follow-up calls that keep patients engaged and informed throughout their care journey."
      description="Healthcare organizations struggle with patient engagement at scale. Missed appointments, medication non-adherence, and lost follow-ups cost the system billions annually. Urvika.ai's voice AI agents handle patient communications with empathy and precision, ensuring every patient gets the attention they deserve."
      heroColor="bg-gradient-to-br from-blue-50 to-cyan-50"
      stats={[
        { value: "40%", label: "Reduction in No-Shows" },
        { value: "3x", label: "Increase in Patient Reach" },
        { value: "92%", label: "Patient Satisfaction" },
        { value: "24/7", label: "Always Available" },
      ]}
      features={[
        {
          title: "Appointment Scheduling & Reminders",
          description: "AI agents call patients to schedule, confirm, and remind them of upcoming appointments. Intelligent rescheduling when conflicts arise.",
        },
        {
          title: "Medication Adherence Calls",
          description: "Proactive outreach to ensure patients are taking medications as prescribed, with escalation to care teams when issues are detected.",
        },
        {
          title: "Post-Discharge Follow-ups",
          description: "Automated follow-up calls after hospital discharge to check on recovery, answer questions, and flag concerns to providers.",
        },
        {
          title: "Patient Satisfaction Surveys",
          description: "Conduct CAHPS and custom satisfaction surveys via natural voice conversations, improving response rates by 3x over digital-only approaches.",
        },
        {
          title: "Care Gap Outreach",
          description: "Identify and reach patients overdue for preventive care, screenings, or chronic condition management to close gaps in care.",
        },
        {
          title: "Insurance & Billing Support",
          description: "Help patients understand their coverage, explain bills, and set up payment plans through conversational voice AI interactions.",
        },
      ]}
      useCases={[
        "Annual wellness visit scheduling",
        "Pre-operative instructions and preparation",
        "Chronic disease management check-ins",
        "Prescription refill reminders",
        "Post-procedure recovery monitoring",
        "Health risk assessment outreach",
        "New patient onboarding calls",
        "Referral follow-up coordination",
      ]}
    />
  );
}
