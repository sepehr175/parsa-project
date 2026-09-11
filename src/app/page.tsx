import DesignProcess from "@/components/DesignProcess";
import DesignTimeline from "@/components/DesignTimeline";
import CompetitiveMatrix from "@/components/CompetitiveMatrix";
import FeatureComparison from "@/components/FeatureComparison";
import KeyGaps from "@/components/KeyGaps";
import StrategicPositioning from "@/components/StrategicPositioning";
import UserPersonas from "@/components/UserPersonas";
import EmpathyMap from "@/components/EmpathyMap";
import UserJourneyMap from "@/components/UserJourneyMap";

export default function Home() {
  return (
    <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16 flex flex-col gap-16 sm:gap-20 lg:gap-24">
      <DesignProcess />
      <DesignTimeline />
      <CompetitiveMatrix />
      <FeatureComparison />
      <KeyGaps />
      <StrategicPositioning />
      <UserPersonas />
      <EmpathyMap />
      <UserJourneyMap />
    </main>
  );
}
