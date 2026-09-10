import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    title: "Discovery & Research",
    subtitle: 'Understanding the "Why"',
    items: [
      "Competitor Benchmarking",
      "User Interviews & Surveys",
      "Key Insights & Pain Points",
      "Personas & Empathy Maps",
    ],
  },
  {
    num: "02",
    title: "Strategy & Definition",
    subtitle: "Scoping the Solution",
    items: [
      "Problem Framing",
      "Information Architecture (IA)",
      "User Journey Mapping & Task Flows",
      "Feature Prioritization",
    ],
  },
  {
    num: "03",
    title: "Ideation & Wireframing",
    subtitle: "Exploration & Structure",
    items: [
      "Low-Fidelity Sketches & Wireframes",
      "Mid-Fidelity Prototypes",
      "Concept Iterations",
    ],
  },
  {
    num: "04",
    title: "Design System & UI Design",
    subtitle: "Exploration & Structure",
    items: [
      "Design System & Foundations",
      "High-Fidelity Visual Design",
      "Micro-interactions & States",
      "Responsive Layouts",
    ],
  },
  {
    num: "05",
    title: "Testing, Launch & Impact",
    subtitle: "Validation & Results",
    items: [
      "Usability Testing & Feedback",
      "Design-to-Development Handoff",
      "Key Metrics & Outcomes",
      "Reflection & Next Steps",
    ],
  },
];

// All measurements below are pulled directly from the Figma file
// (node "Frame 1686561442") so the header row reproduces the exact
// chevron geometry:
//   - HEADER_H = 114px  → the header row height, exactly as in Figma
//   - ITEM_W   = 265.6px → width of each arrow shape
//   - NOTCH    = 14px    → depth of the arrow tip / notch
//   - GAP      = 2px     → width of the white chevron-shaped divider
//                          between two arrow boxes. Measured directly
//                          off the Figma pixel-grid screenshots: the
//                          navy area's height matches the known 114px
//                          row height at ~8.8–9.3 screenshot-px per
//                          design px, and the white line is ~17
//                          screenshot-px wide at that same scale —
//                          i.e. ~2 design px, not 16. (16 was very
//                          close to the arrow tip's NOTCH depth, not
//                          the divider width.)
//
// Without a gap, placing box N+1 at `ITEM_W - NOTCH` from box N makes
// its notch fit exactly into box N's tip (0px seam). To get a real,
// crisp GAP-wide white "arrow" of empty space between them, we simply
// add GAP on top of that interlocking offset. Because both facing
// edges are angled at the same slope, the empty space itself reads as
// a thin chevron — exactly like the reference image.
const HEADER_H = 114;
const ITEM_W = 265.6;
const NOTCH = 14;
const GAP = 2;
const STEP = ITEM_W - NOTCH + GAP; // = 267.6px, left-edge distance between consecutive boxes
const CANVAS_W = STEP * (steps.length - 1) + ITEM_W; // total header width at 1:1 scale

// NOTCH must be expressed as a % of the item's OWN width inside the
// clip-path, not a fixed px value. A fixed px notch stays the same
// physical size no matter how small the rendered box gets, so on a
// narrower screen the notch/tip becomes huge relative to the shrunken
// box — that's what was making the white gap look like a thick, warped
// blob instead of a crisp thin line. Expressing it as a % keeps the
// whole chevron (and the gap between chevrons) perfectly proportional
// to Figma's 16px-wide / 114px-tall line at any render size.
const NOTCH_PCT = (NOTCH / ITEM_W) * 100;

const pct = (px: number, total: number) => `${(px / total) * 100}%`;

export default function DesignProcess() {
  return (
    <section>
      <SectionHeading>Design Process</SectionHeading>
      <div className="flex flex-col gap-2">
        {/* Chevron header row — absolutely positioned at Figma's exact
            proportions so the interlock, the 16px white gap, and the
            text offset never drift, regardless of the rendered width. */}
        <div
          className="relative w-full bg-white"
          style={{ aspectRatio: `${CANVAS_W} / ${HEADER_H}` }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="absolute top-0 h-full bg-[#0b172d] text-white flex flex-col gap-2 pl-[30px] pr-[30px] py-4"
              style={{
                left: pct(i * STEP, CANVAS_W),
                width: pct(ITEM_W, CANVAS_W),
                clipPath: `polygon(0 0, calc(100% - ${NOTCH_PCT}%) 0, 100% 50%, calc(100% - ${NOTCH_PCT}%) 100%, 0 100%, ${NOTCH_PCT}% 50%)`,
              }}
            >
              <p className="text-[18px] leading-7">{step.num}</p>
              <p className="text-sm font-bold leading-5">{step.title}</p>
              <p className="text-xs leading-[18px] text-white">{step.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2px]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#f6f7f9] rounded-b-3xl p-4 flex flex-col gap-3 text-xs text-[#202631]"
            >
              {step.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}