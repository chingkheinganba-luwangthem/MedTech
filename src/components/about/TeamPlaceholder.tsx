"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function TeamPlaceholder() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto"
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">Leadership</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6"
        >
          Team Profiles <span className="text-gradient-gold">Publishing Soon</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We are finalizing the profiles of our visionary leaders and placement experts. Check back soon to meet the team dedicated to accelerating your global career.
        </motion.p>
      </div>
    </section>
  );
}
