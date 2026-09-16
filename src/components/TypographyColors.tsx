import React from "react";

const bgPattern: React.CSSProperties = {
  backgroundImage: "url('/x-pattern.svg')",
  backgroundRepeat: "repeat",
  backgroundSize: "24px 24px",
};

function FontSample({ fontFamily }: { fontFamily: string }) {
  return (
    <div className="flex flex-col gap-[27px]" style={{ fontFamily }}>
      <p className="text-[18px] leading-[24px] tracking-wide text-black text-center lg:text-left">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </p>
      <p className="text-[18px] leading-[24px] tracking-wide text-black text-center lg:text-left">
        abcdefghijklmnopqrstuvwxyz
      </p>
      <p className="text-[18px] leading-[24px] tracking-wide text-black text-center lg:text-left">
        1234567890
      </p>
    </div>
  );
}

const colorSwatches: { label: string; hex: string; bordered?: boolean }[] = [
  { label: "Primary Color", hex: "#CFA73C" },
  { label: "Secondary Color", hex: "#002641" },
  { label: "BG Color", hex: "#FFFFFF", bordered: true },
  { label: "Text Color", hex: "#58595B" },
  { label: "Text Color", hex: "#000000" },
];

const rotiShades = [
  { step: 950, hex: "#34200F" },
  { step: 900, hex: "#5B3E21" },
  { step: 800, hex: "#694720" },
  { step: 700, hex: "#7E571C" },
  { step: 600, hex: "#A0731B" },
  { step: 500, hex: "#BC9020" },
  { step: 400, hex: "#CEA83F" },
  { step: 300, hex: "#DABD68" },
  { step: 200, hex: "#E7D7A2" },
  { step: 100, hex: "#F2EBCE" },
  { step: 50, hex: "#F9F7EC" },
];

const mirageShades = [
  { step: 950, hex: "#0B172D" },
  { step: 900, hex: "#1D4487" },
  { step: 800, hex: "#1C4EAB" },
  { step: 700, hex: "#0E5FD1" },
  { step: 600, hex: "#0974E4" },
  { step: 500, hex: "#2491F0" },
  { step: 400, hex: "#53B1F4" },
  { step: 300, hex: "#8DCDF9" },
  { step: 200, hex: "#BDE0FD" },
  { step: 100, hex: "#DBEDFE" },
  { step: 50, hex: "#F0F7FF" },
];

const bigStoneShades = [
  { step: 950, hex: "#202631" },
  { step: 900, hex: "#303B49" },
  { step: 800, hex: "#364456" },
  { step: 700, hex: "#40576E" },
  { step: 600, hex: "#49637D" },
  { step: 500, hex: "#5C7B99" },
  { step: 400, hex: "#7D98B0" },
  { step: 300, hex: "#ACBBCE" },
  { step: 200, hex: "#D3DAE4" },
  { step: 100, hex: "#EDEEF2" },
  { step: 50, hex: "#F6F7F9" },
];

function ColorSwatch({
  label,
  hex,
  bordered,
}: {
  label: string;
  hex: string;
  bordered?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4">
      <div
        className="w-[140px] h-[150px] md:w-[172px] md:h-[183px] rounded-[20px] md:rounded-[25px] shrink-0"
        style={{
          backgroundColor: hex,
          border: bordered ? "1px solid #E9E9E9" : undefined,
          boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.05)",
        }}
      />
      <div className="flex flex-col items-center gap-1">
        <span className="text-[14px] md:text-[18px] font-medium text-black text-center">{label}</span>
        <span className="text-[13px] md:text-[16px] text-[#58595B] text-center">{hex}</span>
      </div>
    </div>
  );
}

function ShadeScaleRow({
  name,
  shades,
}: {
  name: string;
  shades: { step: number; hex: string }[];
}) {
  return (
    // اینجا به جای lg:w-[1170px] از w-full max-w-[1170px] استفاده شده تا در تبلت بیرون نزند
    <div className="flex flex-col gap-4 w-full max-w-[1170px]">
      <span className="text-[16px] font-bold text-black">{name}</span>
      <div className="flex w-full h-[51px] rounded-[14px] overflow-hidden">
        {shades.map((s) => {
          const isLight = s.step <= 400;
          return (
            <div
              key={s.step}
              className="flex-1 flex items-center justify-center h-full"
              style={{ backgroundColor: s.hex }}
            >
              <span
                className="text-[12px] font-medium"
                style={{ color: isLight ? "#7B3306" : "#FFFFFF" }}
              >
                {s.step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SpecimenPill({
  regularLabel,
  boldLabel,
  fontFamily,
}: {
  regularLabel: string;
  boldLabel: string;
  fontFamily: string;
}) {
  return (
    <div
      className="w-full max-w-[709px] h-auto min-h-[92px] lg:h-[103px] rounded-[20px] lg:rounded-[25px] bg-white flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-3 sm:gap-6 px-5 sm:px-8 py-5 sm:py-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mx-auto lg:mx-0"
      style={{ fontFamily }}
    >
      {/* سایز فونت برای تبلت‌ها md:text-[19px] و برای دسکتاپ xl:text-[25px] شد همراه با whitespace-nowrap تا یک خط بماند */}
      <span className="text-[18px] md:text-[19px] xl:text-[25px] font-normal text-black text-center whitespace-nowrap">{regularLabel}</span>
      <span className="text-[18px] md:text-[19px] xl:text-[25px] font-bold text-black text-center whitespace-nowrap">{boldLabel}</span>
    </div>
  );
}

export default function TypographyColors() {
  return (
    <section className="relative bg-white overflow-hidden" style={bgPattern}>
      <div className="max-w-full w-full ml-0 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:pl-0 lg:pr-20">
        
        <div className="w-full text-center mb-12 sm:mb-16 lg:mb-[76px] px-2 sm:px-6 lg:px-20 overflow-visible">
          <h1
            className="text-[24px] min-[400px]:text-[26px] sm:text-[38px] font-semibold text-black inline-block whitespace-nowrap text-center"
            style={{ fontFamily: "var(--font-Inter)" }}
          >
            Typography &amp; Colors
          </h1>
        </div>

        <div className="pl-0 sm:pl-2 lg:pl-[1%]">
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.3] mb-16 sm:mb-20 lg:mb-[115px] text-center lg:text-left"
            style={{ color: "#202631" }}
          >
            Font Used
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-x-8 gap-y-12 sm:gap-y-16 lg:gap-y-[110px] mb-28 lg:mb-[195px] overflow-hidden">
            <h3
              className="text-[32px] sm:text-[54px] leading-none font-semibold text-center lg:text-left w-full"
              style={{ fontFamily: "var(--font-baskerville)", color: "#18194C" }}
            >
              Baskerville
            </h3>
            <p
              className="text-[15px] sm:text-[22px] leading-[1.75] text-black self-center lg:self-start text-center lg:text-left mx-auto lg:mx-0 max-w-[520px]"
              style={{ fontFamily: "var(--font-baskerville)" }}
            >
              <span className="font-bold">Baskerville</span> is an elegant and timeless serif
              font. Its refined details and classic style create a sophisticated and
              trustworthy feeling. That&rsquo;s why I used this font.
            </p>

            <FontSample fontFamily="var(--font-baskerville)" />
            <SpecimenPill
              regularLabel="Baskerville Regular"
              boldLabel="Baskervville Bold"
              fontFamily="var(--font-baskerville)"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-x-8 gap-y-12 sm:gap-y-16 lg:gap-y-[110px] overflow-hidden">
            <h3
              className="text-[28px] sm:text-[52px] leading-none whitespace-nowrap text-center lg:text-left w-full"
              style={{ fontFamily: "var(--font-cabinet)", color: "#18194C" }}
            >
              Cabinet Grotesk
            </h3>
            <p
              className="text-[15px] sm:text-[20px] leading-[1.75] text-black self-center lg:self-start text-center lg:text-left mx-auto lg:mx-0 max-w-[520px]"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              <span className="font-bold">Cabinet Grotesk</span> is a modern and distinctive
              sans serif font. Its clean shapes and bold personality create a fresh and
              confident look. That&rsquo;s why I used this font.
            </p>

            <FontSample fontFamily="var(--font-cabinet)" />
            <SpecimenPill
              regularLabel="Cabinet Grotesk Regular"
              boldLabel="Cabinet Grotesk Bold"
              fontFamily="var(--font-cabinet)"
            />
          </div>

          <h2
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.3] mt-20 sm:mt-24 lg:mt-[140px] mb-12 sm:mb-16 lg:mb-[76px] text-center lg:text-left"
            style={{ color: "#18194C" }}
          >
            Color Used
          </h2>

          <div className="w-full max-w-[1170px] grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between justify-items-center items-start gap-y-8 gap-x-2 sm:gap-6 lg:gap-0 mb-12 lg:mb-[80px]">
            {colorSwatches.map((c, i) => (
              <ColorSwatch key={`${c.label}-${i}`} label={c.label} hex={c.hex} bordered={c.bordered} />
            ))}
          </div>

          <div className="w-full max-w-[1170px] mb-14 lg:mb-[100px]">
            {/* عرض این بخش داینامیک شد و برای تبلت‌ها دیگر بیرون نمی‌زند */}
            <div
              className="relative overflow-hidden w-full h-[140px] sm:h-[160px] lg:h-[183px] rounded-[20px] lg:rounded-[25px]"
              style={{
                background: "linear-gradient(90deg, #E5CE97 0%, #CEA93E 100%)",
                boxShadow: "0px 2px 10px 0px #0000001A",
              }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1170 183" preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 355 0 C 430 80, 510 145, 600 183"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <span className="text-[18px] sm:text-[20px] text-black font-regular">Primary Gradient</span>
            </div>
            <div className="flex justify-between mt-2 w-full px-2 lg:px-0">
              <span className="text-[15px] sm:text-[16px] text-black">#E5CE97</span>
              <span className="text-[15px] sm:text-[16px] text-black">#CEA93E</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10 w-full max-w-[1170px]">
            <ShadeScaleRow name="Roti" shades={rotiShades} />
            <ShadeScaleRow name="Mirage" shades={mirageShades} />
            <ShadeScaleRow name="Big Stone" shades={bigStoneShades} />
          </div>
        </div>
      </div>
    </section>
  );
}
