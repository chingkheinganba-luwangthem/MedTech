import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-glass-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-glow blur-[100px] rounded-full pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16 max-w-6xl mx-auto">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img src="/image/logo1.png" alt="MedTech Logo" className="h-20 w-auto object-contain hover:scale-105 transition-transform" />
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              End-to-end career placement services helping professionals land their dream jobs globally in IT, Non-IT, and Medical sectors.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-sm text-gray-300 bg-navy-light/50 p-3 rounded-lg border border-glass-border w-fit">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:support@medtech.com" className="hover:text-gold transition-colors">
                  support@medtech.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300 bg-navy-light/50 p-3 rounded-lg border border-glass-border w-fit">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+1000000000" className="hover:text-gold transition-colors">
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300 bg-navy-light/50 p-3 rounded-lg border border-glass-border max-w-xs">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Suite XXX, City, State ZIP (Update when provided)</span>
              </div>
            </div>
          </div>

          {/* Links: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-gold tracking-wider text-sm uppercase">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
              <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
            </nav>
          </div>

          {/* Links: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-gold tracking-wider text-sm uppercase">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">All Services</Link>
              <Link href="/services#resume" className="text-gray-400 hover:text-white transition-colors text-sm">Resume Prep</Link>
              <Link href="/services#interview" className="text-gray-400 hover:text-white transition-colors text-sm">Interview Coaching</Link>
              <Link href="/services#technical" className="text-gray-400 hover:text-white transition-colors text-sm">Technical Training</Link>
            </nav>
          </div>

          {/* Links: Programs & Legal */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-semibold text-gold tracking-wider text-sm uppercase">Programs</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/refer-earn" className="text-gray-400 hover:text-white transition-colors text-sm">Refer & Earn</Link>
              </nav>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-semibold text-gold tracking-wider text-sm uppercase">Legal</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              </nav>
            </div>
            
            {/* E-Verify Logo */}
            <div className="mt-2">
              <img src="/image/everify.png" alt="E-Verify" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center gap-6 pt-8 border-t border-glass-border max-w-6xl mx-auto w-full">
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
              <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
              <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
              <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
              <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>

          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MedTech Technologies. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest">
              Powered by <span className="text-gold">Leivex Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
