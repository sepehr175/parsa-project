import type { Metadata } from "next";
import { Inter, Baskervville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baskervville = Baskervville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AAQ Properties — Design Process & Timeline",
  description: "UX research & design process documentation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${baskervville.variable} antialiased`}>
      <body className="min-h-full bg-white font-sans">{children}</body>
    </html>
  );
}
