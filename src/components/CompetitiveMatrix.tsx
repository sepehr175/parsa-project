import SectionHeading from "./SectionHeading";

const columns = [
  "Competitor",
  "Market Positioning",
  "UX Strengths",
  "UX Weaknesses & Gaps",
  "Key Value Offerings",
];

const rows = [
  [
    "Portico",
    "Traditional London estate agency & lettings manager",
    "Clean typography, hyper-local branch search, instant online property valuation tool.",
    "Traditional agency feel; heavily London-centric with limited cross-border investor tooling.",
    "Sales, lettings, maintenance, Airbnb management.",
  ],
  [
    "Baron & Cabot",
    "Global advisory for UK off-plan & buy-to-let investments",
    "Strong educational focus (guides, webinars), high emphasis on global investor trust.",
    "Text-heavy landing pages, aggressive sales gating before value delivery, cluttered UI.",
    "Sourcing, mortgage support, international buyer guides.",
  ],
  [
    "API Global",
    "B2B/B2C global property investment distributor",
    "Institutional credibility, clear global footprint metrics, polished enterprise UI.",
    "Geared primarily toward institutional funds & master brokers; less personalized B2C journey.",
    "End-to-end distribution, portfolio optimization, lettings.",
  ],
  [
    "Verta Property",
    "Commission-free UK property sourcing agency",
    'Transparent fee narrative ("free for investors"), approachable tone of voice.',
    "Lacks self-serve interactive tools; relies heavily on standard contact forms for discovery.",
    "Deal sourcing, project coordination, full-cycle handoff.",
  ],
  [
    "Samuel Dawson Property",
    "Luxury London & Dubai cross-border specialist",
    "High-end visual aesthetic, luxury branding, prime asset focus (Emaar, Berkeley).",
    "Complex input fields or confusing UK tax terminology.",
    "Long, multi-field lead forms creating friction.",
  ],
];

export default function CompetitiveMatrix() {
  const lastRow = rows.length - 1;
  return (
    <section>
      <SectionHeading>Competitive Landscape Matrix</SectionHeading>
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-[900px] flex flex-col gap-[2px]">
          {/* Header row */}
          <div className="flex gap-[2px]">
            {columns.map((c, i) => (
              <div
                key={c}
                className={`bg-[#edeef2] p-6 text-xs font-bold leading-[18px] text-[#202631] whitespace-nowrap ${
                  i === 0 ? "w-[200px] shrink-0 rounded-tl-[24px]" : "flex-1"
                } ${i === columns.length - 1 ? "rounded-tr-[24px]" : ""}`}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Body rows */}
          {rows.map((row, i) => (
            <div key={row[0]} className="flex gap-[2px]">
              {row.map((cell, j) => (
                <div
                  key={j}
                  className={`p-6 text-xs leading-[18px] text-[#202631] ${
                    j === 0
                      ? `bg-[#edeef2] w-[200px] shrink-0 font-bold whitespace-nowrap ${
                          i === lastRow ? "rounded-bl-[24px]" : ""
                        }`
                      : `bg-[#f6f7f9] flex-1 font-normal ${
                          i === lastRow && j === row.length - 1 ? "rounded-br-[24px]" : ""
                        }`
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
  </div>
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
        {rows.map((row) => (
          <article key={row[0]} className="bg-[#f6f7f9] rounded-2xl p-4 flex flex-col gap-3 min-w-0">
            <h3 className="text-base font-bold leading-6 text-[#202631] break-words">{row[0]}</h3>
            {columns.slice(1).map((column, i) => (
              <div key={column} className="bg-white rounded-xl p-3 min-w-0">
                <p className="text-[11px] font-bold leading-4 text-[#68727f] mb-1">{column}</p>
                <p className="text-xs leading-[18px] text-[#202631] break-words">{row[i + 1]}</p>
              </div>
            ))}
          </article>
        ))}
      </div>   </section>
  );
}
