import React from "react";

export default function DesignSystemSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10 sm:py-12 lg:py-12 px-0 sm:px-2 lg:px-4 w-full min-w-0">
      <h2
        className="text-[30px] sm:text-[36px] lg:text-[40px] font-semibold text-[#000000] text-center mb-6 sm:mb-8"
        style={{ fontFamily: "var(--font-Inter)" }}
      >
        Design System
      </h2>

      <div className="w-full max-w-[1260px] h-auto lg:h-[803px] flex items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.05)] bg-white">
        <img
          src="/sm.png"
          alt="Design System"
          className="block w-full h-auto lg:h-full object-contain"
        />
      </div>
    </section>
  );
}
