import SectionHeading from "./SectionHeading";

type Quad = {
  name: string;
  photo: string;
  thinks: string[];
  feels: string[];
  says: string[];
  does: string[];
  pains: string[];
  gains: string[];
  imageClass?: string;
};

const quads: Quad[] = [
  {
    name: "Tariq Al-Mansoor",
    photo: "/6a57e43f2aa4a1891d9951d14c50e5646b6f044e.png",
    imageClass: "object-center",
    thinks: [
      '"Is this market as stable as everyone claims?"',
      '"Will property management eat up all my net yield?"',
      '"I need pure transparency—no hidden developer fees."',
    ],
    feels: [
      "Cautious about cross-border legal compliance.",
      "Skeptical of aggressive sales reps.",
      "Empowered when given\nclear data and self-\nserve tools.",
    ],
    says: [
      '"I don\'t have time to fix tenant issues."',
      '"Show me the net ROI after UK taxes."',
      '"I need a fully managed, hands-off setup."',
    ],
    does: [
      "Stress-tests numbers using online models.",
      "Compares UK cities against Dubai/EU yields.",
      "Requests brochures and data-heavy decks.",
    ],
    pains: [
      "Currency volatility and UK tax friction.",
      "Inability to inspect sites physically.",
      "Lack of clear, real-time reporting.",
    ],
    gains: [
      "Reliable passive cash flow in GBP.",
      "Long-term capital security for his family.",
      "Complete peace of mind via end-to-end mgmt.",
    ],
  },
  {
    name: "Priya & Vikram Sharma",
    photo: "https://www.figma.com/api/mcp/asset/cd9bc764-841e-44e0-ad11-e0127e9fc884.png",
    imageClass: "object-top scale-[1.15] origin-top", 
    thinks: [
      '"Are we choosing the right neighborhood for schools?"',
      '"What if our visa timeline clashes with completion?"',
      '"Buying seems safer than sinking money into rent."',
    ],
    feels: [
      "Anxious and overwhelmed by multiple parallel tasks.",
      "Protective of their children's future education.",
      "Relieved when encountering structured, clear guides.",
    ],
    says: [
      '"We need a home close to top universities"',
      '"Who can help us manage visas and buying?"',
      '"We need someone to walk us through this."',
    ],
    does: [
      "Cross-references school ratings & postcodes.",
      "Reads regional UK city investment guides.",
      "Books consultations that bundle services.",
    ],
    pains: [
      "Navigating visa and property laws at once.",
      "Unfamiliarity with UK conveyancing.",
      "Fear of overpaying in unfamiliar areas.",
    ],
    gains: [
      "A secure, owned family home upon arrival.",
      "Seamless integration of schooling & visa.",
      "One trusted partner handling everything.",
    ],
  },
  {
    name: "James Bennett",
    photo: "https://www.figma.com/api/mcp/asset/7eaff3c8-854e-42b4-8c3e-c555f82c1842.png",
    // نقطه زوم دقیقاً روی بالا (top) قفل شد و زوم کمی بیشتر شد تا پایین عکس (کمر) از کادر خارج شود
    imageClass: "object-top scale-[1.25] origin-top",
    thinks: [
      '"Interest rate shifts are squeezing my cash margins."',
      '"Is now the right time to sell or should I refinance?"',
      '"Most high-street agents don\'t understand exit math."',
    ],
    feels: [
      "Frustrated with rising regulatory red tape.",
      "Pragmatic and laser-focused on financial metrics.",
      "Decisive once accurate scenario modeling is shown.",
    ],
    says: [
      '"I need to unlock equity for other assets"',
      '"What is the most tax-efficient exit?"',
      '"I want an agent who understands numbers."',
    ],
    does: [
      "Runs rental yield & mortgage stress tests.",
      "Audits existing portfolio performance.",
      "Looks for specialized portfolio exit sales.",
    ],
    pains: [
      "Changing UK tax laws eroding net returns.",
      "Sluggish sales cycles tying up capital.",
      "Ineffective, generic estate agents.",
    ],
    gains: [
      "Maximized capital release upon disposal.",
      "Streamlined portfolio with lower overhead.",
      "Clear exit timeline and yield clarity.",
    ],
  },
];

const STICKY_COLORS = {
  thinks: "#6db9f6",
  feels: "#fe7dca",
  says: "#f8dc5d",
  does: "#7bf0a4",
} as const;

function StickyGroup({
  title,
  items,
  color,
  rounded,
}: {
  title: string;
  items: string[];
  color: string;
  rounded: "top" | "bottom";
}) {
  return (
    <div
      className={`bg-[#f6f7f9] flex-1 flex flex-col items-center justify-center gap-4 px-6 sm:px-10 py-6 ${
        rounded === "top"
          ? "rounded-t-[24px] sm:rounded-t-none sm:first:rounded-tl-[24px] sm:last:rounded-tr-[24px]"
          : "rounded-b-[24px] sm:rounded-b-none sm:first:rounded-bl-[24px] sm:last:rounded-br-[24px]"
      }`}
    >
      <p className="text-lg font-bold leading-7 text-[#1e1e1e] text-center w-full">{title}</p>
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        {items.map((item) => {
          const isTargetText = item.includes("clear data and self-");

          return (
            <div
              key={item}
              className="w-32 h-32 p-4 shrink-0 shadow-[0px_2px_3px_rgba(0,0,0,0.16)]"
              style={{ backgroundColor: color }}
            >
              <p
                className={`text-[#1e1e1e] whitespace-pre-line ${
                  isTargetText
                    ? "text-[10.5px] leading-[16px] tracking-tight"
                    : "text-xs leading-[18px]"
                }`}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ListBlock({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="bg-[#f6f7f9] flex-1 rounded-[24px] p-6 flex flex-col gap-4">
      <p className="text-lg font-bold leading-7" style={{ color }}>
        {title}
      </p>
      <ul className="flex flex-col gap-3 text-xs leading-[18px] text-[#1e1e1e] list-disc list-inside">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function EmpathyMapCard({ q }: { q: Quad }) {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex flex-col sm:flex-row gap-2">
        <StickyGroup title="Thinks" items={q.thinks} color={STICKY_COLORS.thinks} rounded="top" />
        <StickyGroup title="Feels" items={q.feels} color={STICKY_COLORS.feels} rounded="top" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-full border-[7px] border-white overflow-hidden z-10 hidden sm:block">
        <img 
          src={q.photo} 
          alt={q.name} 
          className={`w-full h-full object-cover ${q.imageClass || "object-center"}`} 
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <StickyGroup title="Says" items={q.says} color={STICKY_COLORS.says} rounded="bottom" />
        <StickyGroup title="Does" items={q.does} color={STICKY_COLORS.does} rounded="bottom" />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <ListBlock title="Pains" items={q.pains} color="#ec3964" />
        <ListBlock title="Gains" items={q.gains} color="#20b998" />
      </div>
    </div>
  );
}

export default function EmpathyMap() {
  return (
    <section>
      <SectionHeading>Empathy Map</SectionHeading>
      <div className="flex flex-col gap-12">
        {quads.map((q) => (
          <EmpathyMapCard key={q.name} q={q} />
        ))}
      </div>
    </section>
  );
}
