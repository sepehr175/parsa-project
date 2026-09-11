export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.3] text-[#202631] mb-6 lg:mb-8 break-words">
      {children}
    </h2>
  );
}
