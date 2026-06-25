"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass-panel shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2 backdrop-blur-xl bg-dark-bg/60 border-b border-white/5"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center group z-50 flex-shrink-0 ml-23">
            <Image
              src="/image/logo1.png"
              alt="MedTech Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain brightness-110 grayscale-0"
            />
          </Link>

          {/* Desktop Navigation - Centered Pill */}
          <nav className="hidden xl:flex flex-1 justify-center items-center px-4 mr-40">
            <div className="flex items-center gap-1 glass-panel px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-white/10 bg-navy-light/40">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-2 py-1 mx-2 text-xs md:text-sm font-sans font-medium tracking-[0.15em] capitalize transition-colors z-10 whitespace-nowrap ${isActive ? "text-gold" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold shadow-[0_0_8px_rgba(200,169,81,0.8)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}

              <div className="w-px h-5 bg-white/20 mx-2" />

              <Link
                href="/partner-portal"
                className={`relative px-4 py-2 text-xs md:text-sm font-sans font-medium tracking-[0.15em] capitalize transition-colors z-10 flex items-center gap-2 whitespace-nowrap ${
                  pathname === "/partner-portal" ? "text-gold" : "text-white/80 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(200,169,81,0.8)]" />
                Partner Portal
              </Link>

              <div className="w-px h-5 bg-white/20 mx-2" />

              <Link
                href="/contact"
                className="bg-[#1C2033]/80 text-gold border border-gold/40 hover:bg-gold hover:text-dark-bg font-bold rounded-full px-6 py-2 ml-2 text-[10px] md:text-xs capitalize tracking-[0.15em] transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white hover:text-gold transition-colors z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 glass-panel border-t-0 p-4 flex flex-col gap-2 shadow-xl bg-dark-bg/95 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium capitalize tracking-widest px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-gold text-dark-bg shadow-[0_0_15px_rgba(200,169,81,0.3)]" : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/partner-portal"
            className={`text-sm font-medium capitalize tracking-widest px-4 py-3 rounded-lg transition-colors flex items-center gap-2 ${
              pathname === "/partner-portal" ? "bg-gold text-dark-bg" : "text-gray-300 hover:bg-white/5 hover:text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Partner Portal
          </Link>
          <div className="pt-2 border-t border-white/10 mt-2">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-gold hover:bg-gold-light text-dark-bg font-bold capitalize tracking-widest rounded-lg py-3 transition-colors">
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
