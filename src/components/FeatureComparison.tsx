import SectionHeading from "./SectionHeading";

const columns = [
  "Feature / UX Element",
  "AAQ Properties",
  "Portico",
  "Baron & Cabot",
  "API Global",
  "Verta Property",
  "Samuel Dawson",
];

const rows = [
  [
    "Self-Serve Financial Calculators (Mortgage, Yield, Stamp Duty, ROI)",
    "High (Dedicated suite)",
    "Partial (Valuation only)",
    "Partial (Basic yield)",
    "Minimal",
    "Low",
    "Low",
  ],
  [
    "Cross-Border Relocation Services (Immigration & Education)",
    "Yes (Integrated)",
    "No",
    "No",
    "No",
    "No",
    "No",
  ],
  [
    "Full Lifecycle Support (Acquire → Manage → Exit)",
    "Yes",
    "Partial",
    "Partial",
    "Yes",
    "Partial",
    "Partial",
  ],
  [
    "Educational & Localized Guides",
    "Yes",
    "Partial",
    "Yes",
    "Yes",
    "Low",
    "Low",
  ],
  [
    "Modern, Scannable UI (Non-Cluttered)",
    "High",
    "Medium",
    "Low",
    "High",
    "Medium",
    "Medium",
  ],
];

export default function FeatureComparison() {
  const lastRow = rows.length - 1;
  return (
    <section>
      <SectionHeading>Feature & UX Capability Comparison</SectionHeading>
      <div className="overflow-x-auto">
        <div className="min-w-[1100px] flex flex-col gap-[2px]">
          {/* Header row */}
          <div className="flex gap-[2px]">
            {columns.map((c, i) => (
              <div
                key={c}
                className={`bg-[#edeef2] p-6 text-xs font-bold leading-[18px] text-[#202631] whitespace-nowrap ${
                  i === 0 ? "w-[288px] shrink-0 rounded-tl-[24px]" : "flex-1"
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
                  className={`p-6 text-xs font-normal leading-[18px] text-[#202631] ${
                    j === 0
                      ? `bg-[#edeef2] w-[288px] shrink-0 ${
                          i === lastRow ? "rounded-bl-[24px]" : ""
                        }`
                      : `bg-[#f6f7f9] flex-1 ${
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
    </section>
  );
}
