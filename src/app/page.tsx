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
    <main className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col gap-24">
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
