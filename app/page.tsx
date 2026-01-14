import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import EffortlessCRM from "@/components/EffortlessCRM";
import ReviveSalesOpportunities from "@/components/ReviveSalesOpportunities";
import AIFollowUpEmails from "@/components/AIFollowUpEmails";
import ReportingIntelligence from "@/components/ReportingIntelligence";
import SundaysBack from "@/components/SundaysBack";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafeff]">
      <Hero />
      <Testimonials />
      <Benefits />
      <EffortlessCRM />
      <ReviveSalesOpportunities />
      <AIFollowUpEmails />
      <ReportingIntelligence />
      <SundaysBack />
      <div className="hidden">

      </div>

    </div>
  );
}
