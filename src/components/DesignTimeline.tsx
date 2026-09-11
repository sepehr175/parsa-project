import SectionHeading from "./SectionHeading";

const weeks = ["Week 1-2", "Week 3-4", "Week 5-6", "Week 7-8"];

const phases = [
  { label: "Discovery & Research", left: 8, top: 46 },
  { label: "Strategy & Information Architecture", left: 326, top: 98 },
  { label: "UI Design & Design System", left: 645, top: 150 },
  { label: "Testing, Handoff & Launch", left: 963, top: 202 },
];

// Each detail item is a { lines, compact? } object.
// `lines` forces the exact line break requested — first line stays
// first line, second line stays second line — instead of letting the
// browser wrap the text naturally at an unpredictable point.
// `compact: true` marks the few items that are too long for the box
// at the normal size, so they get a smaller font just for that item.
type DetailItem = { lines: string[]; compact?: boolean };

const details: DetailItem[][] = [
  [
    { lines: ["Stakeholder alignment & goal setting"] },
    { lines: ["Competitor benchmarking & market analysis"] },
    { lines: ["User interviews, surveys, and pain-point", "synthesis"] },
    { lines: ["Personas and primary user journey maps"] },
  ],
  [
    { lines: ['"How Might We" framing & core feature', "prioritization"] },
    { lines: ["Sitemap creation and content hierarchy", "modeling"] },
    {
      lines: ["Primary user flows (e.g., calculation workflows,", "inquiry funnels)"],
      compact: true,
    },
    { lines: ["Low-fidelity wireframing and initial concept", "validation"] },
  ],
  [
    {
      lines: ["Design system foundation (typography scale,", "color tokens, grid structure)"],
      compact: true,
    },
    { lines: ["High-fidelity responsive screen design", "(desktop & mobile)"] },
    { lines: ["Interactive component states, micro-", "interactions, and input validation"] },
    { lines: ["Clickable prototype assembly for testing"] },
  ],
  [
    { lines: ["Usability testing sessions & design refinements"], compact: true },
    { lines: ["Developer handoff, component token", "documentation, and asset exports"] },
    { lines: ["QA design review against staging builds"] },
    { lines: ["Post-launch monitoring and analytics setup"] },
  ],
];

// Reference canvas is 1272 x 504 (from Figma). Positions below are expressed
// as percentages of that canvas so the whole timeline scales proportionally.
const CANVAS_W = 1272;
const CANVAS_H = 504;
const pct = (px: number, total: number) => `${(px / total) * 100}%`;

export default function DesignTimeline() {
  return (
    <section>
      <SectionHeading>Design Timeline</SectionHeading>
      <div className="relative w-full hidden lg:block" style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}>
        {/* Week header row */}
        <div
          className="absolute inset-x-0 top-0 grid grid-cols-4 gap-[2px]"
          style={{ height: pct(36, CANVAS_H) }}
        >
          {weeks.map((w) => (
            <div key={w} className="bg-[#f6f7f9] rounded-t-[24px] flex items-center px-6">
              <p className="text-sm leading-5 text-[#202631]">{w}</p>
            </div>
          ))}
        </div>

        {/* Background swimlane columns */}
        <div
          className="absolute inset-x-0 grid grid-cols-8 gap-[2px]"
          style={{ top: pct(38, CANVAS_H), height: pct(224, CANVAS_H) }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-[#f6f7f9]" />
          ))}
        </div>

        {/* Detail text columns */}
        <div
          className="absolute inset-x-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]"
          style={{ top: pct(264, CANVAS_H), height: pct(240, CANVAS_H) }}
        >
          {details.map((col, colIdx) => (
            <div key={colIdx} className="bg-[#f6f7f9] rounded-b-[24px] p-6 flex flex-col gap-4">
              {col.map((item, itemIdx) => (
                <p
                  key={itemIdx}
                  className={
                    item.compact
                      ? "text-[12.5px] leading-[15px] text-[#202631]"
                      : "text-[12.5px] leading-[17px] text-[#202631]"
                  }
                >
                  {item.lines.map((line, lineIdx) => (
                    <span key={lineIdx} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Staggered phase pills */}
        {phases.map((phase) => (
          <div
            key={phase.label}
            className="absolute bg-[#0b172d] rounded-2xl px-6 py-4 hidden lg:flex items-center"
            style={{
              left: pct(phase.left, CANVAS_W),
              top: pct(phase.top, CANVAS_H),
              width: pct(300, CANVAS_W),
            }}
          >
            <p className="text-sm font-bold leading-5 text-white whitespace-nowrap">
              {phase.label}
            </p>
          </div>
        ))}
      </div>

      {/* Compact stacked list of phases for small screens, where the
          absolutely-positioned staircase above is hidden. */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {weeks.map((w) => (
            <div key={w} className="bg-[#f6f7f9] rounded-2xl p-4 min-h-[72px] flex items-center">
              <p className="text-sm leading-5 text-[#202631] break-words">{w}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {details.map((col, i) => (
            <div key={i} className="bg-[#f6f7f9] rounded-2xl p-4 flex flex-col gap-3">
              {col.map((item, j) => (
                <p key={j} className={item.compact ? "text-xs leading-4 text-[#202631]" : "text-xs leading-[17px] text-[#202631] break-words"}>
                  {item.lines.join(" ")}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {phases.map((phase) => (
            <div key={phase.label} className="bg-[#0b172d] rounded-2xl px-4 py-3">
              <p className="text-sm font-bold leading-5 text-white break-words">{phase.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}