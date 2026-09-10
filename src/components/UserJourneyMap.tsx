import SectionHeading from "./SectionHeading";

type Stage = {
  stage: string;
  action: string;
  emoji: string;
  feeling: string;
  thinking: string;
  touchpoints: string;
  pain: string;
  opportunity: string;
};

type Journey = {
  name: string;
  role: string;
  photo: string;
  // این پراپرتی اضافه شد تا پوزیشن و زوم عکس‌ها دقیقاً مثل بخش قبلی کنترل بشه
  imageClass?: string;
  scenario: string;
  goal: string;
  stages: Stage[];
};

const journeys: Journey[] = [
  {
    name: "Tariq Al-Mansoor",
    role: "The Overseas Wealth Builder",
    // عکس با مسیر فایل لوکال پابلیک جایگزین شد
    photo: "/6a57e43f2aa4a1891d9951d14c50e5646b6f044e.png",
    imageClass: "object-center",
    scenario:
      "Tariq wants to deploy capital into high-yield UK residential property from Dubai without managing tenants or navigating cross-border tax traps manually.",
    goal: "Validate returns, model net ROI after taxes, and engage a fully managed, hands-off service.",
    stages: [
      {
        stage: "1. Discovery",
        action: "Clicks on a UK investment guide or targeted ad highlighting high-yield regional markets.",
        emoji: "😐",
        feeling: "Skeptical",
        thinking: '"Are these yields realistic, or is it another sales pitch?"',
        touchpoints: "Social ad / Google search / Landing page",
        pain: "Opaque fee structures on competing sites.",
        opportunity: 'Clear value proposition: "Smarter by Design, Hands-Off by Default."',
      },
      {
        stage: "2. Research & Evaluation",
        action: 'Lands on AAQ Properties; reviews the "About Us" track record ($240m+ GDV secured, 1,000+ units).',
        emoji: "🙂",
        feeling: "Intrigued",
        thinking: '"The metrics look institutional and professional, not like a pushy high-street broker."',
        touchpoints: "Homepage hero, Stats strip, Service cards",
        pain: "Unclear if the firm handles non-resident UK buyers.",
        opportunity: "Prominently display international credentials and end-to-end service coverage.",
      },
      {
        stage: "3. Interaction & Calculation",
        action:
          "Navigates to ROI & Stamp Duty Calculators; inputs purchase price, deposit, and projected rental income.",
        emoji: "🧐",
        feeling: "Empowered & Analytical",
        thinking: '"Can I see my net cash flow after non-resident Stamp Duty and management fees?"',
        touchpoints: "Interactive ROI & Stamp Duty calculator tools",
        pain: "Complex input fields or confusing UK tax terminology.",
        opportunity: "Instant, dynamic calculation summaries with visual charts and pre-set tax defaults.",
      },
      {
        stage: "4. Commitment / Action",
        action: "Selects Rental Management & Purchasing; submits a high-intent consultation request.",
        emoji: "😎",
        feeling: "Confident & Decisive",
        thinking: '"I want to talk directly to someone who handles the entire lifecycle end-to-end."',
        touchpoints: "Service landing page CTA, Lead capture form",
        pain: "Long, multi-field lead forms creating friction.",
        opportunity: "2-step frictionless lead form with preferred contact method (WhatsApp/Zoom).",
      },
      {
        stage: "5. Post-Action & Retention",
        action: "Receives tailored investment prospectus; schedules discovery call via WhatsApp/Calendar.",
        emoji: "😊",
        feeling: "Reassured & Satisfied",
        thinking: '"If onboarding is smooth, I\'ll allocate more capital to future phases."',
        touchpoints: "Follow-up email, CRM dashboard, Consultation",
        pain: "Slow response times from overseas advisors.",
        opportunity: "Automated email confirmation with customized PDF summary of calculated numbers.",
      },
    ],
  },
  {
    name: "Priya & Vikram Sharma",
    role: "The Relocating Family",
    photo: "https://www.figma.com/api/mcp/asset/cd9bc764-841e-44e0-ad11-e0127e9fc884.png",
    // تنظیمات زوم و پوزیشن دقیقاً مثل Empathy Map
    imageClass: "object-top scale-[1.15] origin-top", 
    scenario:
      "Priya & Vikram are relocating from Mumbai to the UK for their children's education and need to purchase a property while sorting out schooling and visa logistics.",
    goal: "Find an area with top school catchments, understand buying steps, and bundle property advisory with relocation support.",
    stages: [
      {
        stage: "1. Discovery",
        action: 'Searches for "buying home near UK top universities / South East relocation."',
        emoji: "😰",
        feeling: "Overwhelmed & Anxious",
        thinking: '"Moving is chaotic. how do we coordinate buying a home and university admissions together?"',
        touchpoints: "Organic search / Blog / City Guides",
        pain: "Fragmented advice across separate lawyers, agents, and school consultants.",
        opportunity: 'Position integrated advisory: "Property + Relocation + Education Assistance."',
      },
      {
        stage: "2. Research & Evaluation",
        action: "Browses City Guides and News & Insights; checks the breadth of services.",
        emoji: "😌",
        feeling: "Relieved & Interested",
        thinking: '"They don\'t just sell homes; they assist with immigration and universities too."',
        touchpoints: "City Guide sub-pages, Navigation menu",
        pain: "Unfamiliarity with UK postcodes and school catchment zones.",
        opportunity: "Interactive city guide cards highlighting universities, transport links, and lifestyle.",
      },
      {
        stage: "3. Interaction & Calculation",
        action: "Uses Mortgage & Stamp Duty Calculators; explores University Application & Immigration Services.",
        emoji: "🧐",
        feeling: "Informed & Focused",
        thinking: '"What is our total cash requirement upfront including legal and stamp duty?"',
        touchpoints: "Service detail pages, Interactive calculators",
        pain: "Confusion over international buyer mortgage eligibility.",
        opportunity: "Calculator disclaimer notes clarifying non-resident mortgage loan-to-value (LTV) limits.",
      },
      {
        stage: "4. Commitment / Action",
        action: "Submits a multi-service advisory request on the Consultancy page.",
        emoji: "💪",
        feeling: "Reassured & Proactive",
        thinking: '"Having one partner manage both property and relocation will save us months."',
        touchpoints: "Multi-service inquiry modal / Contact form",
        pain: "Unclear if ancillary services can be bundled with property search.",
        opportunity: 'Checkbox selectors allowing users to bundle "Property + Visa/University Support" in one form.',
      },
      {
        stage: "5. Post-Action & Retention",
        action: "Attends a comprehensive consultation covering property sourcing, visas, and school admissions.",
        emoji: "🏡",
        feeling: "Protected & Supported",
        thinking: '"We feel supported across all aspects of our family\'s move."',
        touchpoints: "Discovery video call, Resource onboarding kit",
        pain: "Fear of missing university admission or completion deadlines.",
        opportunity: "Structured onboarding checklist showing milestone timelines for both property and schooling.",
      },
    ],
  },
  {
    name: "James Bennett",
    role: "The Domestic Portfolio Optimizer",
    photo: "https://www.figma.com/api/mcp/asset/7eaff3c8-854e-42b4-8c3e-c555f82c1842.png",
    // تنظیمات زوم و پوزیشن دقیقاً مثل Empathy Map
    imageClass: "object-top scale-[1.25] origin-top",
    scenario:
      "James is an experienced UK landlord whose profit margins are squeezed by interest rate hikes; he needs to audit yields and strategically sell underperforming units.",
    goal: "Model current rental yields against mortgage costs, evaluate exit timing, and instruct an agent specialized in portfolio disposals.",
    stages: [
      {
        stage: "1. Discovery",
        action: "Searches for portfolio exit strategies or reads an industry market report.",
        emoji: "😤",
        feeling: "Frustrated with Market",
        thinking: '"I need to reallocate capital, high-street estate agents don\'t understand portfolio tax math."',
        touchpoints: "LinkedIn / Real Estate News / Search",
        pain: "Generic agents treating portfolio sales like single-family residential listings.",
        opportunity: 'Highlight specialized "Exit Strategy & Sales" directly in the top-level navigation.',
      },
      {
        stage: "2. Research & Evaluation",
        action: "Evaluates AAQ's Exit Strategy & Sales and Consultancy service pages.",
        emoji: "🧐",
        feeling: "Analytical & Selective",
        thinking: '"Do these advisors have genuine commercial and disposal experience?"',
        touchpoints: "Service page (Exit Strategy), Case studies",
        pain: "Lack of strategic exit frameworks on competitor websites.",
        opportunity: "Provide real-world case studies detailing GDV achieved and average exit timelines.",
      },
      {
        stage: "3. Interaction & Calculation",
        action: "Runs multiple stress tests on the Rental Yield & MC comparing hold vs. sell scenarios.",
        emoji: "📊",
        feeling: "Engaged & Validated",
        thinking: '"If interest rates rise another 0.5%, what does my net cash flow look like?"',
        touchpoints: "Yield & Mortgage Calculator toggle views",
        pain: "Calculators that only do basic gross yields rather than net yields.",
        opportunity: "Net yield toggle factoring in maintenance, void periods, and management costs.",
      },
      {
        stage: "4. Commitment / Action",
        action: "Books an Exit Strategy Portfolio Audit via the direct contact flow.",
        emoji: "🎯",
        feeling: "Decisive & Strategic",
        thinking: '"Let\'s get a professional valuation and structured exit roadmap."',
        touchpoints: "Portfolio appraisal CTA / Schedule consultation form",
        pain: "Vague contact forms that require repeating portfolio details over the phone.",
        opportunity: 'Targeted lead modal asking: "Number of units to review" & "Target exit timeframe".',
      },
      {
        stage: "5. Post-Action & Retention",
        action: "Reviews a bespoke portfolio disposal and equity realization proposal.",
        emoji: "🤝",
        feeling: "Relieved & Satisfied",
        thinking: '"Finally, a data-backed exit strategy that optimizes my capital gains."',
        touchpoints: "Proposal deck, Dedicated account manager",
        pain: "Drawn-out sales cycles with unvetted retail buyers.",
        opportunity: "Fast-track appraisal pipeline with high-priority turnaround for multi-unit portfolios.",
      },
    ],
  },
];

const rowLabels = [
  "User Action",
  "Feeling",
  "Thinking",
  "Touchpoints",
  "Pain Point / Friction",
  "UX Opportunity",
];

function JourneyCard({ j }: { j: Journey }) {
  const lastRow = rowLabels.length - 1;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-start gap-3">
          {/* دایره‌ها دقیقاً روی سایز 36 در 36 قفل شدند */}
          <div className="w-[36px] h-[36px] rounded-full border-[3px] border-white overflow-hidden shrink-0 shadow-sm relative">
            <img 
              src={j.photo} 
              alt={j.name} 
              // اعمال کلاس‌های زوم و پوزیشن دقیق
              className={`w-full h-full object-cover ${j.imageClass || "object-center"}`} 
            />
          </div>
          <h3 className="flex-1 text-2xl font-bold leading-9 text-[#202631]">
            {j.name} - {j.role}
          </h3>
        </div>
        <p className="text-sm leading-5 text-[#202631]">
          <span className="font-bold">Scenario</span>: {j.scenario}
        </p>
        <p className="text-sm leading-5 text-[#202631]">
          <span className="font-bold">Goal</span>: {j.goal}
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1100px] flex flex-col gap-[2px]">
          {/* Header row */}
          <div className="flex gap-[2px]">
            <div className="bg-[#edeef2] flex-1 p-6 text-xs font-bold leading-[18px] text-[#202631] rounded-tl-[24px]">
              Stage
            </div>
            {j.stages.map((s, i) => (
              <div
                key={s.stage}
                className={`bg-[#edeef2] flex-1 p-6 text-xs font-bold leading-[18px] text-[#202631] whitespace-nowrap ${
                  i === j.stages.length - 1 ? "rounded-tr-[24px]" : ""
                }`}
              >
                {s.stage}
              </div>
            ))}
          </div>

          {rowLabels.map((label, rowIdx) => (
            <div key={label} className="flex gap-[2px]">
              <div
                className={`bg-[#edeef2] flex-1 p-6 text-xs font-bold leading-[18px] text-[#202631] ${
                  rowIdx === lastRow ? "rounded-bl-[24px]" : ""
                }`}
              >
                {label}
              </div>
              {j.stages.map((s, colIdx) => {
                let content: React.ReactNode;
                switch (label) {
                  case "User Action":
                    content = s.action;
                    break;
                  case "Feeling":
                    content = (
                      <span className="flex flex-col gap-2">
                        <span className="text-[36px] leading-[48px]">{s.emoji}</span>
                        <span className="font-bold">{s.feeling}</span>
                      </span>
                    );
                    break;
                  case "Thinking":
                    content = s.thinking;
                    break;
                  case "Touchpoints":
                    content = s.touchpoints;
                    break;
                  case "Pain Point / Friction":
                    content = s.pain;
                    break;
                  case "UX Opportunity":
                    content = s.opportunity;
                    break;
                }
                const isLastCell = rowIdx === lastRow && colIdx === j.stages.length - 1;
                return (
                  <div
                    key={s.stage}
                    className={`bg-[#f9f9f9] flex-1 p-6 text-xs leading-[18px] text-[#202631] ${
                      isLastCell ? "rounded-br-[24px]" : ""
                    }`}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UserJourneyMap() {
  return (
    <section>
      <SectionHeading>User Journey Map</SectionHeading>
      <div className="flex flex-col gap-16">
        {journeys.map((j) => (
          <JourneyCard key={j.name} j={j} />
        ))}
      </div>
    </section>
  );
}
