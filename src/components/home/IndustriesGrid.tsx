"use client";

import { motion } from "framer-motion";
import {
  Sprout, Factory, Car, Building2, Landmark,
  MonitorPlay, Zap, Radio, Calculator, Wrench, HeartPulse
} from "lucide-react";

const industries = [
  { icon: <Sprout className="w-5 h-5" />, name: "Agribusiness" },
  { icon: <Factory className="w-5 h-5" />, name: "Advanced Manufacturing" },
  { icon: <Car className="w-5 h-5" />, name: "Automotive & Mobility" },
  { icon: <Landmark className="w-5 h-5" />, name: "Financial Services" },
  { icon: <Building2 className="w-5 h-5" />, name: "Public Sector & Government" },
  { icon: <MonitorPlay className="w-5 h-5" />, name: "Media & Digital Services" },
  { icon: <Zap className="w-5 h-5" />, name: "Energy & Utilities" },
  { icon: <Radio className="w-5 h-5" />, name: "Telecommunications" },
  { icon: <Calculator className="w-5 h-5" />, name: "Finance & Accounting" },
  { icon: <Wrench className="w-5 h-5" />, name: "Engineering & Manufacturing" },
  { icon: <HeartPulse className="w-5 h-5" />, name: "Healthcare & Life Sciences" },
];

export function IndustriesGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-light/10">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto"
        >
          <span className="text-sm font-medium text-gold tracking-widest uppercase">Industries We Serve</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight"
        >
          Driving Career Growth <br className="hidden md:block" />
          <span className="text-gradient-gold"> Across Industries</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
        >
          From emerging startups to established enterprises, we help professionals find rewarding careers across multiple industries worldwide.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 border border-glass-border hover:border-gold/50 hover:shadow-[0_0_20px_rgba(200,169,81,0.15)] transition-all cursor-default group bg-navy/30 backdrop-blur-md"
            >
              <div className="text-gray-400 group-hover:text-gold transition-colors">
                {industry.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: industries.length * 0.05 }}
            className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 border border-glass-border bg-navy/30 backdrop-blur-md"
          >
            <span className="flex gap-1.5 text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
