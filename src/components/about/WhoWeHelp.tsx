"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Award, MonitorSmartphone } from "lucide-react";

export function WhoWeHelp() {
  const audiences = [
    {
      title: "Students",
      icon: GraduationCap,
    },
    {
      title: "Freshers",
      icon: Sparkles,
    },
    {
      title: "Experienced\nProfessionals",
      icon: Award,
    },
    {
      title: "IT / Non-IT",
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-navy-light/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-gold uppercase mb-4 block font-heading">
            Our Audience
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Who We <span className="text-gradient-gold">Help</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-glass-border hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(200,169,81,0.1)] transition-all group min-h-[240px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy border border-glass-border flex items-center justify-center mb-6 shadow-inner relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-8 h-8 text-gold relative z-10" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
