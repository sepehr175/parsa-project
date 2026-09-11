import SectionHeading from "./SectionHeading";

type Persona = {
  name: string;
  role: string;
  photo: string;
  // Per-photo crop controls — each photo can be art-directed independently:
  // - photoZoom: extra zoom on top of object-cover's minimum fill scale,
  //   applied to BOTH axes (horizontal and vertical). 1 = no extra zoom.
  //   Defaults to IMAGE_ZOOM if not set.
  // - photoZoomY: overrides the vertical-only zoom, independent of
  //   photoZoom. Use this to add/remove headroom at the top or bottom
  //   without touching how much gets cropped from the sides. Defaults to
  //   photoZoom (i.e. uniform zoom) if not set.
  // - photoFocusY: 0-100, which horizontal "slice" of the photo the zoom is
  //   anchored to. 0 = anchored to the top (crops away the bottom as it
  //   zooms), 100 = anchored to the bottom (crops away the top). Values in
  //   between pan the visible window down the photo without changing zoom.
  //   Defaults to 0 (top) if not set.
  photoZoom?: number;
  photoZoomY?: number;
  photoFocusY?: number;
  // How far the quote card sits above the very bottom edge, in pixels.
  // Defaults to 16 if not set.
  quoteMarginBottom?: number;
  quote: string;
  age: string;
  location: string;
  job: string;
  investmentProfile: string;
  motivations: string;
  painPoints: string[];
  touchpoints: string[];
};

// NOTE: these photo URLs are temporary Figma-hosted asset links (expire ~7 days
// after export). Before shipping to production, download the images and
// replace these with local files under /public.

// How much extra zoom to apply on top of object-cover's minimum fill scale,
// to match Figma's tighter crop. 1 = no extra zoom (plain object-cover).
// This is a visual approximation — see the comment above the <img> below for
// how to get the exact value straight from Figma's image fill Scale %.
const IMAGE_ZOOM = 1.25;
const personas: Persona[] = [
  {
    name: "Tariq Al-Mansoor",
    role: "The Overseas Wealth Builder",
    photo: "https://www.figma.com/api/mcp/asset/5811e5f3-05e7-45b8-ba9d-d555f6245e5c.png",
    photoZoom: 1.3, // nudged down again, to extend the visible window further down
    photoFocusY: 100, // fully anchored to the bottom now
    quoteMarginBottom: 4, // brought down closer to the bottom edge (default is 16)
    quote:
      "\"We are moving to the UK for our children's education and want to buy a family asset rather than wasting money on\u00A0rent.\"",
    age: "42",
    location: "Dubai, UAE",
    job: "Senior Tech Director",
    investmentProfile: "Capital growth & passive rental income (£300k–£600k budget)",
    motivations:
      "Diversifying capital into stable UK real estate markets (London commuter belt, Manchester, Birmingham) without dealing with daily landlord operations.",
    painPoints: [
      "Cross-border complexity (currency exchange, UK stamp duty, non-resident taxes).",
      "Distrust of opaque agent fees and exaggerated ROI promises.",
      "Inability to physically inspect developments or manage tenant issues.",
    ],
    touchpoints: [
      "Instant ROI & Stamp Duty Calculators for multi-scenario modeling.",
      "Hands-Off Rental Management service pages.",
      "High-level market research & city guides.",
    ],
  },
  {
    name: "Priya & Vikram Sharma",
    role: "The Overseas Wealth Builder",
    photo: "https://www.figma.com/api/mcp/asset/cd9bc764-841e-44e0-ad11-e0127e9fc884.png",
    photoZoom: 1.65, // back to a single uniform zoom — the separate photoZoomY attempt didn't work out, reverted
    photoFocusY: 18, // nudged down a bit — was defaulting to top (0), per feedback
    quote:
      "\"We are moving to the UK for our children's education and want to buy a family asset rather than wasting money on\u00A0rent.\"",
    age: "38 & 40",
    location: "Mumbai, India → Relocating to London",
    job: "Financial Analyst & Consultant",
    investmentProfile: "First-time UK buyer / Owner-occupier to long-term hold (£450k–£750k budget)",
    motivations:
      "Securing a home close to top universities/schools while navigating relocation, visas, and purchasing simultaneously.",
    painPoints: [
      "Overwhelmed by navigating UK visa rules, university admissions, and property searches concurrently.",
      "Unclear on local neighborhood dynamics, school catchment zones, and resale potential.",
    ],
    touchpoints: [
      "Purchasing & Consultancy structured step-by-step guidance.",
      "Immigration & University Application ancillary advisory services.",
      "Localized City & Investment Guides.",
    ],
  },
  {
    name: "James Bennett",
    role: "The Domestic Portfolio Optimizer",
    photo: "https://www.figma.com/api/mcp/asset/7eaff3c8-854e-42b4-8c3e-c555f82c1842.png",
    quote:
      '"I have equity tied up in UK buy-to-lets and need to know when to refinance, restructure, or execute a profitable exit."',
    age: "51",
    location: "Bristol, UK (Domestic Portfolio Landlord)",
    job: "Business Owner",
    investmentProfile: "Portfolio rebalancing & capital realization (5+ properties)",
    motivations:
      "Maximizing net yield amidst changing interest rates and executing well-timed asset disposals to fund new commercial ventures.",
    painPoints: [
      "Changing tax legislation and shifting mortgage rates eroding margins.",
      "Frustration with generic estate agents who lack strategic exit planning capabilities.",
    ],
    touchpoints: [
      "Mortgage & Rental Yield Calculators for portfolio stress-testing.",
      "Exit Strategy & Sales consultation requests.",
      "Market News & Insights feeds.",
    ],
  },
];

function PersonaCard({ p }: { p: Persona }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] rounded-3xl overflow-hidden">
      {/*
        Photo + quote frame — matches the Figma "Layout" panel:
        - Width: Fixed 380px (set on the grid column, lg:grid-cols-[380px_1fr])
        - Height: Fill (handled automatically by CSS Grid's default
          align-items: stretch, so it always matches the right panel's height —
          no need to hardcode 592px / 574px per card)
        - Padding: 24px  -> p-6
        - Gap: 24px      -> gap-6
        - Radius: top-left & bottom-left 24px only (the outer rounded-3xl +
          overflow-hidden on the grid wrapper already covers this, since this
          panel sits at the top-left/bottom-left of the whole card)
        - Fill: #F9F9F9  -> bg-[#f9f9f9]
      */}
      <div className="relative flex flex-col justify-end gap-4 sm:gap-6 p-4 sm:p-6 bg-[#f9f9f9] min-h-[680px] sm:min-h-[720px] md:min-h-[760px] lg:min-h-0">
        {/*
          Photo frame: bleeds edge-to-edge (inset-0), matching the reference —
          the 24px frame padding belongs to the quote card below, not the
          photo. overflow-hidden clips the zoomed image so it can't spill
          past this panel's bounds (the outer grid wrapper's rounded-3xl +
          overflow-hidden then rounds the visible corners).
        */}
        <div className="absolute inset-0 overflow-hidden">
          {/*
            Keep the desktop image exactly as before.
            Mobile/tablet gets a separate art-directed image so its crop can be
            tuned without changing desktop at all.
          */}
          <img
            src={p.photo}
            alt={p.name}
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: `50% ${p.photoFocusY ?? 0}%`,
              transform: `scale(${p.photoZoom ?? IMAGE_ZOOM}, ${p.photoZoomY ?? p.photoZoom ?? IMAGE_ZOOM})`,
              transformOrigin: `50% ${p.photoFocusY ?? 0}%`,
            }}
          />

          {/* Tablet: keep the existing tablet crop exactly as it was. */}
          <img
            src={p.photo}
            alt={p.name}
            className={`hidden md:max-lg:block absolute inset-0 w-full h-full object-cover ${
              p.name === "James Bennett"
                ? "[object-position:50%_22%]"
                : p.name === "Priya & Vikram Sharma"
                  ? "[object-position:50%_18%]"
                  : "[object-position:50%_30%]"
            }`}
          />

          {/*
            Mobile only: art-directed independently from tablet/desktop.
            The goal is to crop away the empty headroom while keeping the
            subject centered and preserving a useful amount of the body.
          */}
          <img
            src={p.photo}
            alt={p.name}
            className="md:hidden absolute inset-0 w-full h-full object-cover"
            style={
              p.name === "James Bennett"
                ? {
                    // Mobile only: show the full head/shoulders and keep the
                    // framing around the upper body instead of cutting the top.
                    objectPosition: "50% 38%",
                    transform: "scale(1.10)",
                    transformOrigin: "50% 42%",
                  }
                : p.name === "Priya & Vikram Sharma"
                  ? {
                      // Mobile only: keep the top of both heads visible while
                      // retaining a slightly tighter family portrait crop.
                      objectPosition: "50% 40%",
                      transform: "scale(1.20)",
                      transformOrigin: "50% 44%",
                    }
                  : {
                      objectPosition: "50% 62%",
                      transform: "scale(1.30)",
                      transformOrigin: "50% 68%",
                    }
            }
          />
        </div>
        {/*
          Quote card: this is the piece that actually gets the frame's 24px
          padding (via the parent's p-6) — it sits inset from the edges while
          the photo behind it bleeds full-frame. marginBottom additionally
          lifts it off the very bottom so a strip of photo stays visible
          beneath it (per-persona via p.quoteMarginBottom, default 16px).
        */}
        <div
          className="absolute left-4 right-4 bottom-6 sm:left-6 sm:right-6 sm:bottom-8 lg:relative lg:left-auto lg:right-auto lg:bottom-auto backdrop-blur-[16px] bg-[#0F172B5C] rounded-2xl p-4 sm:p-5 lg:p-4 w-auto lg:w-full min-w-0 flex gap-3 lg:gap-2 items-center"
          style={{ marginBottom: Math.max(24, p.quoteMarginBottom ?? 16) }}
        >
          {/* آیکون نقل‌قول بازشو (چپ) */}
          <svg className="hidden lg:block shrink-0 self-start rotate-180" width="11" height="140" viewBox="0 0 11 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.38991 131.545V133.386C5.38991 133.909 5.28764 134.443 5.0831 134.989C4.88423 135.528 4.61719 136.04 4.28196 136.523C3.94673 137 3.58026 137.406 3.18253 137.741L1.58026 136.795C1.86435 136.347 2.11435 135.849 2.33026 135.304C2.55185 134.759 2.66264 134.125 2.66264 133.403V131.545H5.38991ZM9.67685 131.545V133.386C9.67685 133.909 9.57457 134.443 9.37003 134.989C9.17117 135.528 8.90412 136.04 8.56889 136.523C8.23366 137 7.86435 137.406 7.46094 137.741L5.85866 136.795C6.14844 136.347 6.40128 135.849 6.61719 135.304C6.83878 134.759 6.94957 134.125 6.94957 133.403V131.545H9.67685Z" fill="white"/>
          </svg>
          
          <span className="lg:hidden absolute left-4 top-3 text-3xl leading-none font-bold text-white select-none">“</span>

          <p className="min-w-0 flex-1 text-[15px] sm:text-lg lg:text-lg font-bold leading-6 sm:leading-7 text-white break-words px-8 sm:px-10 lg:px-0">{p.quote}</p>

          <span className="lg:hidden absolute right-4 bottom-2 text-3xl leading-none font-bold text-white select-none">”</span>
          
          {/* آیکون نقل‌قول بسته‌شو (راست) */}
          <svg className="hidden lg:block shrink-0 self-end" width="11" height="140" viewBox="0 0 11 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.38991 131.545V133.386C5.38991 133.909 5.28764 134.443 5.0831 134.989C4.88423 135.528 4.61719 136.04 4.28196 136.523C3.94673 137 3.58026 137.406 3.18253 137.741L1.58026 136.795C1.86435 136.347 2.11435 135.849 2.33026 135.304C2.55185 134.759 2.66264 134.125 2.66264 133.403V131.545H5.38991ZM9.67685 131.545V133.386C9.67685 133.909 9.57457 134.443 9.37003 134.989C9.17117 135.528 8.90412 136.04 8.56889 136.523C8.23366 137 7.86435 137.406 7.46094 137.741L5.85866 136.795C6.14844 136.347 6.40128 135.849 6.61719 135.304C6.83878 134.759 6.94957 134.125 6.94957 133.403V131.545H9.67685Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Mobile/tablet art-direction only. Desktop keeps the existing Figma crop untouched. */}

      {/* Details panel */}
      <div className="bg-[#f6f7f9] p-6 sm:p-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-[24px] font-bold leading-9 text-[#1e1e1e]">{p.name}</h3>
          <p className="text-lg leading-7 text-[#1e1e1e]">{p.role}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 text-xs leading-[18px]">
              <div className="flex items-start justify-between gap-3 min-w-0">
                <span className="font-normal text-[#1e1e1e]">Age</span>
                <span className="font-bold text-[#1e1e1e]">{p.age}</span>
              </div>
              <div className="flex items-start justify-between gap-3 min-w-0">
                <span className="font-normal text-[#1e1e1e]">Location</span>
                <span className="font-bold text-[#1e1e1e] text-right min-w-0 max-w-[68%] break-words">{p.location}</span>
              </div>
              <div className="flex items-start justify-between gap-3 min-w-0">
                <span className="font-normal text-[#1e1e1e]">Job</span>
                <span className="font-bold text-[#1e1e1e] text-right min-w-0 max-w-[68%] break-words">{p.job}</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3">
              <h4 className="text-lg font-bold leading-7 text-[#1e1e1e]">Investment Profile</h4>
              <p className="text-xs leading-[18px] text-[#1e1e1e]">{p.investmentProfile}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3">
              <h4 className="text-lg font-bold leading-7 text-[#1e1e1e]">Motivations</h4>
              <p className="text-xs leading-[18px] text-[#1e1e1e]">{p.motivations}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-2xl p-6 flex-1 flex flex-col gap-3">
              <h4 className="text-lg font-bold leading-7 text-[#1e1e1e]">Core Pain Points</h4>
              {/* تغییرات اعمال شده برای تراز شدن صحیح متن‌ها زیر همدیگه */}
              <ul className="flex flex-col gap-2 text-xs leading-[18px] text-[#1e1e1e] list-disc list-outside pl-4">
                {p.painPoints.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 flex-1 flex flex-col gap-3">
              <h4 className="text-lg font-bold leading-7 text-[#1e1e1e]">Platform Touchpoints</h4>
              {/* تغییرات اعمال شده برای تراز شدن صحیح متن‌ها زیر همدیگه */}
              <ul className="flex flex-col gap-2 text-xs leading-[18px] text-[#1e1e1e] list-disc list-outside pl-4">
                {p.touchpoints.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserPersonas() {
  return (
    <section>
      <SectionHeading>User Personas</SectionHeading>
      <div className="flex flex-col gap-4">
        {personas.map((p) => (
          <PersonaCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}
