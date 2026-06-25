"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 relative overflow-hidden bg-navy-light/10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border border-glass-border hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(200,169,81,0.1)] transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-navy border border-glass-border flex items-center justify-center mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <Target className="w-8 h-8 text-gold relative z-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed font-sans text-lg">
              To empower job seekers, especially international students and professionals, by offering holistic career services from resume building and interview coaching to visa support and job placements with a focus on lasting growth and trust.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border border-glass-border hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(200,169,81,0.1)] transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-navy border border-glass-border flex items-center justify-center mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              <Eye className="w-8 h-8 text-gold relative z-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed font-sans text-lg">
              We want to become most trusted and reliable job placement partner in the international market
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
