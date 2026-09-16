import React from "react";

export default function WireframesSection() {
  return (
    <section
      // حالت absolute، top و left حذف شدند تا جریان طبیعی صفحه حفظ شود و روی هم نیفتند
      className="relative flex flex-col items-center px-4 sm:px-6 w-full mt-[80px] sm:mt-[120px] lg:mt-[150px]"
    >
      <h2
        className="text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-[#000000] mb-[24px] sm:mb-[40px] text-center"
        style={{ fontFamily: "var(--font-Inter, sans-serif)" }}
      >
        Wireframes
      </h2>

      {/* کانتینر تصویر با کنترل عرض در تبلت و آیپد */}
      <div className="w-full flex justify-center items-start overflow-hidden">
        <img
          src="/ns.webp"
          alt="Wireframes Layout"
          className="w-full h-auto object-contain max-w-[500px] sm:max-w-[680px] md:max-w-[850px] lg:max-w-[1100px] xl:max-w-[1435px] mx-auto"
        />
      </div>
    </section>
  );
}
