import SectionHeading from "./SectionHeading";

// Reference canvas for the quadrant chart is 596 x 596 (from Figma).
const CANVAS = 596;
const pct = (px: number) => `${(px / CANVAS) * 100}%`;

const dots = [
  { name: "Portico", sub: "(Local Estate Agency)", left: 148, top: 153 },
  { name: "API Global", sub: "(Global Institutional Platform)", left: 448, top: 129 },
  { name: "Baron & Cabot", sub: "(Brochureware & Luxury Advisory)", left: 448, top: 354 },
  {
    name: "Samuel Dawson Property",
    sub: "(Brochureware & Luxury Advisory)",
    left: 422,
    top: 454,
  },
  { name: "Verta Property", sub: "(Boutique Sourcing)", left: 148, top: 378 },
];

const opportunities = [
  {
    title: "Interactive Transparency First",
    body: "Placing un-gated Mortgage, Rental Yield, Stamp Duty, and ROI calculators directly on the site positions AAQ as a utility-first advisory rather than a high-pressure sales broker.",
  },
  {
    title: 'Unified "Living + Investing" Ecosystem',
    body: "Integrating ancillary services (Immigration Support and University Applications) under one roof solves the complete relocation friction point for international family investors.",
  },
  {
    title: "Institutional Credibility with Modern Simplicity",
    body: "Pairing clean editorial layouts with clear social proof ($240m+ GDV, 1,000+ units) eliminates the visual clutter seen in legacy UK brokerage portals.",
  },
];

export default function StrategicPositioning() {
  return (
    <section>
      <SectionHeading>AAQ Properties Strategic Positioning & UX Opportunities</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quadrant chart */}
        <div className="bg-[#f6f7f9] rounded-3xl aspect-square relative overflow-hidden">
          {/* faint graph-paper grid */}
          <div
            className="absolute"
            style={{
              left: pct(24),
              top: pct(53),
              right: pct(24),
              bottom: pct(43),
              backgroundImage:
                "repeating-linear-gradient(to right, #edeef2 0, #edeef2 1px, transparent 1px, transparent 24px), repeating-linear-gradient(to bottom, #edeef2 0, #edeef2 1px, transparent 1px, transparent 24px)",
            }}
          />

          {/* axes */}
          <div
            className="absolute bg-[#303b49]"
            style={{ left: pct(24), right: pct(24), top: pct(275), height: 2 }}
          />
          <div
            className="absolute bg-[#303b49]"
            style={{ top: pct(50), bottom: pct(50), left: pct(298), width: 2 }}
          />

          {/* axis labels */}
          <p
            className="absolute text-xs leading-[18px] text-[#5c7b99] text-center"
            style={{ left: pct(188), top: pct(24), width: pct(220) }}
          >
            High Digital Interactivity & Tools
          </p>
          <p
            className="absolute text-xs leading-[18px] text-[#5c7b99] text-center"
            style={{ left: pct(190), top: pct(554), width: pct(216) }}
          >
            Static / Form-Gated Experience
          </p>
          <p
            className="absolute text-xs leading-[18px] text-[#5c7b99]"
            style={{ left: pct(24), top: pct(291), width: pct(220) }}
          >
            Local / UK-Only Focus
          </p>
          <p
            className="absolute text-xs leading-[18px] text-[#5c7b99] text-right"
            style={{ left: pct(431), top: pct(291), width: pct(141) }}
          >
            Global / Expat Focus
          </p>

          {/* competitor dots */}
          {dots.map((d) => (
            <div key={d.name}>
              <span
                className="absolute w-3 h-3 rounded-full bg-[#0b172d]"
                style={{
                  left: pct(d.left),
                  top: pct(d.top),
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute text-xs leading-[18px] text-center w-[220px]"
                style={{
                  left: pct(d.left),
                  top: `calc(${pct(d.top)} + 14px)`,
                  transform: "translateX(-50%)",
                }}
              >
                <span className="font-bold text-[#303b49] block">{d.name}</span>
                <span className="font-normal text-[#303b49] block">{d.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Opportunities */}
        <div className="bg-[#f6f7f9] rounded-3xl p-6 flex flex-col gap-4">
          {opportunities.map((o) => (
            <div key={o.title} className="bg-white rounded-2xl p-6 flex-1 flex flex-col gap-4">
              <h3 className="text-lg font-bold leading-7 text-black">{o.title}</h3>
              <p className="text-xs leading-[18px] text-black">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}