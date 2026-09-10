import SectionHeading from "./SectionHeading";

const gaps = [
  {
    title: "Spreadsheet Dependence/Tool Gating",
    body: "Most competitors (Baron & Cabot, Verta, Samuel Dawson) gate financial details behind contact forms or force investors to use external Excel models, causing high early-stage drop-off.",
  },
  {
    title: "Narrow Lifecycle Focus",
    body: "Traditional agencies (Portico) stop at lettings management, while investment brokers (Verta, SDP) focus solely on the initial acquisition without dedicated Exit Strategy or portfolio rebalancing flows.",
  },
  {
    title: "Fragmented Expat Journey",
    body: "No competitor bridges the gap between buying UK real estate and managing the broader family ecosystem (e.g., student university admissions and visa logistics).",
  },
];

export default function KeyGaps() {
  return (
    <section>
      <SectionHeading>Key UX Gaps Identified in Competitors</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#f6f7f9] rounded-3xl p-6">
        {gaps.map((g) => (
          <div key={g.title} className="bg-white rounded-2xl p-6 flex flex-col gap-2">
            <h3 className="text-lg font-bold leading-7 text-[#202631]">{g.title}</h3>
            <p className="text-xs leading-[18px] text-[#202631]">{g.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
