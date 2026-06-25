import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopLoader } from "@/components/layout/TopLoader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedTech Technologies | The Future of Global Recruitment",
  description: "End-to-end career placement services helping professionals land their dream jobs globally in IT, Non-IT, and Medical sectors.",
  keywords: ["staffing", "recruitment", "talent solutions", "job placement", "medtech jobs", "hiring"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable}`}
    >
      <body
        className="font-sans antialiased selection:bg-gold selection:text-navy min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
