"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function PremiumCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-panel p-10 md:p-16 rounded-[2.5rem] border border-gold/20 relative overflow-hidden bg-gradient-to-br from-navy via-dark-bg to-navy-light text-center"
        >
          {/* Glow effects inside card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 !leading-tight text-white max-w-3xl">
              Ready to Accelerate Your <span className="text-gradient-gold">Professional Career?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans">
              Join thousands of successful candidates who have secured their dream roles at top-tier global companies through our premium placement services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/#contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-dark-bg font-bold h-14 px-8 text-lg rounded-full group transition-all hover:shadow-[0_0_20px_rgba(200,169,81,0.4)]">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="mailto:support@medtech.com" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-glass-border bg-glass hover:bg-white/10 text-white transition-all">
                  <Mail className="mr-2 w-5 h-5 text-gold" />
                  Contact Support
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Recruiters are currently available for consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
