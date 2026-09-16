import React from 'react';

export default function InformationArchitecture() {
  return (
    <section className="w-full min-w-0 flex flex-col items-start overflow-hidden px-4 sm:px-6 2xl:px-0">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#1f2024] mb-6 sm:mb-8 tracking-tight text-left">
        Information Architecture
      </h2>
      
      {/* در سایز ۱۳ اینچ (xl) عکس وسط‌چین می‌ماند و فقط در مانیتورهای خیلی بزرگ (2xl) به حالت خاص در می‌آید */}
      <div className="w-full flex justify-center 2xl:justify-start overflow-hidden 2xl:overflow-visible">
        <img
          src="/0ecec4c30e3b59c6d2739b61e55c20af0107178c.png"
          alt="Information Architecture Diagram"
          className="block w-full h-auto object-contain object-center 2xl:object-left max-w-full md:max-w-[90%] lg:max-w-[85%] xl:max-w-[90%] 2xl:max-w-[1400px] 2xl:w-[115%] mx-auto 2xl:mx-0 2xl:-ml-15"
        />
      </div>
    </section>
  );
}
