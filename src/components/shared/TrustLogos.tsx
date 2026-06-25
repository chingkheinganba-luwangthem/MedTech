"use client";

import { motion } from "framer-motion";
import { siAccenture, siApple, siCisco, siMeta } from "simple-icons";
import Image from "next/image";

/* ─── Inline SVG brand logos (guaranteed to render, no external deps) ─── */

function GoogleLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function MicrosoftLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 23 23" width={size} height={size}>
      <rect fill="#F25022" x="0" y="0" width="11" height="11"/>
      <rect fill="#7FBA00" x="12" y="0" width="11" height="11"/>
      <rect fill="#00A4EF" x="0" y="12" width="11" height="11"/>
      <rect fill="#FFB900" x="12" y="12" width="11" height="11"/>
    </svg>
  );
}

function AmazonLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#FF9900" d="M27.22 35.06c-5.22 3.86-12.78 5.91-19.29 5.91C3.54 40.97.18 39.51 0 39.02c-.11-.3.23-.55.57-.37 5.58 2.96 12.49 4.74 19.62 4.74 4.81 0 10.11-.99 14.98-3.06.73-.31 1.35.48.69.97l-.64.76z"/>
      <path fill="#FF9900" d="M44.85 33.04c-.49-.63-3.25-.3-4.49-.15-.38.05-.43-.28-.1-.52 2.2-1.55 5.81-1.1 6.23-.58.42.53-.11 4.18-2.17 5.93-.32.27-.62.12-.48-.23.46-1.16 1.5-3.82 1.01-4.45z"/>
      <path fill="#ffffff" d="M35.5 18.55c0 2.59.07 4.74-1.24 7.04-1.06 1.86-2.74 3.01-4.61 3.01-2.56 0-4.05-1.95-4.05-4.83 0-5.69 5.1-6.72 9.9-6.72v1.5zm6.72 16.25c-.44.39-1.08.42-1.58.16-2.22-1.85-2.62-2.7-3.84-4.46-3.67 3.75-6.27 4.87-11.02 4.87-5.63 0-10.01-3.47-10.01-10.42 0-5.43 2.94-9.13 7.13-10.94 3.64-1.6 8.72-1.89 12.6-2.33V11c0-1.72.13-3.75-.88-5.24-.88-1.33-2.56-1.89-4.04-1.89-2.75 0-5.2 1.41-5.8 4.33-.12.65-.6 1.29-1.25 1.32l-7-0.75c-.59-.13-1.24-.6-1.08-1.49C17.83 1.15 23.87 0 29.24 0c2.74 0 6.33.73 8.5 2.81 2.74 2.56 2.48 5.98 2.48 9.71v8.79c0 2.64 1.1 3.79 2.13 5.22.36.51.44 1.13-.02 1.51l-3.58 3.07-.01-.01-.02.01-2.5-1.31z"/>
    </svg>
  );
}

function WalmartLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#FFC220" d="M24 4l3.09 9.51h10L28.95 20l3.09 9.51L24 22l-8.04 7.51L19.05 20l-8.14-6.49h10z"/>
      <path fill="#0071CE" d="M7.5 34h33v5h-33z"/>
      <path fill="#0071CE" d="M4 28h40v3H4z"/>
    </svg>
  );
}

function IBMLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 40" width={size * 1.4} height={size}>
      <g fill="#052FAD">
        <rect x="0" y="0" width="28" height="4"/>
        <rect x="8" y="8" width="12" height="4"/>
        <rect x="0" y="16" width="28" height="4"/>
        <rect x="8" y="24" width="12" height="4"/>
        <rect x="0" y="32" width="28" height="4"/>
        <rect x="36" y="0" width="28" height="4"/>
        <rect x="36" y="8" width="20" height="4"/>
        <rect x="36" y="16" width="24" height="4"/>
        <rect x="36" y="24" width="20" height="4"/>
        <rect x="36" y="32" width="28" height="4"/>
        <rect x="72" y="0" width="28" height="4"/>
        <rect x="72" y="8" width="16" height="4"/><rect x="92" y="8" width="8" height="4"/>
        <rect x="72" y="16" width="12" height="4"/><rect x="88" y="16" width="12" height="4"/>
        <rect x="72" y="24" width="16" height="4"/><rect x="92" y="24" width="8" height="4"/>
        <rect x="72" y="32" width="28" height="4"/>
      </g>
    </svg>
  );
}

function OracleLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 30" width={size * 1.8} height={size * 0.6}>
      <text x="0" y="24" fill="#F80000" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28">ORACLE</text>
    </svg>
  );
}

function CognizantLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 30" width={size * 1.6} height={size * 0.5}>
      <text x="0" y="23" fill="#009CDE" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20">Cognizant</text>
    </svg>
  );
}

function DeloitteLogo({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 30" width={size * 1.6} height={size * 0.5}>
      <text x="0" y="23" fill="#86BC25" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22">Deloitte</text>
      <circle cx="115" cy="12" r="5" fill="#86BC25"/>
    </svg>
  );
}

function SimpleIconLogo({ path, hex, size = 40 }: { path: string; hex: string; size?: number }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={`#${hex}`}>
      <path d={path} />
    </svg>
  );
}

function BrandInitials({ name, color, initials }: { name: string; color: string; initials: string }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-sm border border-white/10 transition-transform duration-300 group-hover:scale-110"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {initials}
    </div>
  );
}

interface CompanyItem {
  name: string;
  logo: React.ReactNode;
}

const companies: CompanyItem[] = [
  { name: "Cognizant", logo: <CognizantLogo /> },
  { name: "Insight Global", logo: <BrandInitials name="Insight Global" color="#FF6B35" initials="IG" /> },
  { name: "Randstad", logo: <BrandInitials name="Randstad" color="#0F3282" initials="R" /> },
  { name: "Slalom", logo: <BrandInitials name="Slalom" color="#0C62FB" initials="S" /> },
  { name: "Apex Systems", logo: <BrandInitials name="Apex Systems" color="#00A7E1" initials="AS" /> },
  { name: "Walmart", logo: <WalmartLogo /> },
  { name: "Accenture", logo: <SimpleIconLogo path={siAccenture.path} hex={siAccenture.hex} /> },
  { name: "Deloitte", logo: <DeloitteLogo /> },
  { name: "Apple", logo: <SimpleIconLogo path={siApple.path} hex="FFFFFF" /> },
  { name: "Google", logo: <GoogleLogo /> },
  { name: "Microsoft", logo: <MicrosoftLogo /> },
  { name: "Amazon", logo: <AmazonLogo /> },
  { name: "Meta", logo: <SimpleIconLogo path={siMeta.path} hex={siMeta.hex} /> },
  { name: "IBM", logo: <IBMLogo /> },
  { name: "Cisco", logo: <SimpleIconLogo path={siCisco.path} hex={siCisco.hex} /> },
  { name: "Oracle", logo: <OracleLogo /> },
];

export function TrustLogos() {
  return (
    <section className="py-20 border-y border-glass-border bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Where Our Candidates{" "}
            <span className="text-gradient-gold block md:inline">Thrive</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div
              key={`logo-${i}`}
              className="flex flex-col items-center justify-center gap-4 w-40 group"
            >
              <div className="h-14 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {company.logo}
              </div>
              <span className="font-heading font-semibold text-sm text-gray-400 group-hover:text-white transition-colors text-center tracking-wide">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex justify-center"
        >
          <Image
            src="/image/logo1.png"
            alt="MedTech Logo"
            width={300}
            height={80}
            className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>
    </section>
  );
}
