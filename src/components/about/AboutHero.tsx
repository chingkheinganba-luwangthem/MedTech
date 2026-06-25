"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-dark-bg to-dark-bg">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-glow blur-[120px] rounded-full pointer-events-none opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto">
            <span className="text-sm font-medium text-gold tracking-widest uppercase">About MedTech</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 !leading-tight">
            We Connect the Best Talent with <span className="text-gradient-gold">World-Class Opportunities</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed mb-16">
            MedTech Technologies is a premier global talent acquisition and career advisory firm. We specialize in transforming the way professionals discover and secure their next big career breakthrough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mt-12"
        >
          {/* Glow Behind Image */}
          <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(200,169,81,0.2)] bg-navy-light/40 backdrop-blur-sm p-2">
            <img 
              src="/image/about-hero.png" 
              alt="MedTech Professionals" 
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
