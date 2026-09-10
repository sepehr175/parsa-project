export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.3] text-[#202631] mb-8">
      {children}
    </h2>
  );
}
