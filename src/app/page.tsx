import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PurposeSection } from "@/components/PurposeSection";
import { ProgramTracksSection } from "@/components/ProgramTracksSection";
import { MeetingScheduleSection } from "@/components/MeetingScheduleSection";
import { InsightsSection } from "@/components/InsightsSection";
import { MentorsSection } from "@/components/MentorsSection";
import { ApplyCTASection } from "@/components/ApplyCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PurposeSection />
      <ProgramTracksSection />
      <MeetingScheduleSection />
      <InsightsSection />
      <MentorsSection />
      <ApplyCTASection />
      <Footer />
    </main>
  );
}
