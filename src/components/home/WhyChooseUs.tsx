"use client";

import { motion } from "framer-motion";
import { Target, Globe, Users, Crosshair, TrendingUp, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: <Target className="w-5 h-5 text-gold" />,
    title: "Career-First Approach",
    description: "We prioritize your career ambitions and help you identify opportunities that support your professional growth.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-gold" />,
    title: "Exclusive Hiring Access",
    description: "Gain access to opportunities from trusted employers that may not be available through traditional job boards.",
  },
  {
    icon: <Users className="w-5 h-5 text-gold" />,
    title: "Dedicated Success Team",
    description: "Work closely with recruitment specialists committed to supporting you throughout your job search journey.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-gold" />,
    title: "Market Intelligence",
    description: "Leverage current hiring trends, salary insights, and industry expertise to make informed career decisions.",
  },
  {
    icon: <Crosshair className="w-5 h-5 text-gold" />,
    title: "End-to-End Support",
    description: "From resume enhancement to interview coaching and onboarding assistance, we're with you every step of the way.",
  },
  {
    icon: <Globe className="w-5 h-5 text-gold" />,
    title: "Long-Term Career Growth",
    description: "We focus on creating lasting career matches that benefit both candidates and employers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-light/10">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Why Choose <span className="text-gradient-gold block md:inline">Us?</span>

          </motion.h2>
          <p>At Medtech, we deliver trusted end-to-end career support for professionals across IT, non-IT, and medical
            sectors in the USA, UK, Canada, Dubai, and India. With a people-first approach and global reach, we help
            connect exceptional talent with the right opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-xl p-5 md:p-6 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(200,169,81,0.1)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-4 border border-glass-border group-hover:bg-navy-light transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">{reason.icon}</div>
              </div>
              <h3 className="text-base md:text-lg font-heading font-bold text-white mb-2 leading-snug">{reason.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans mt-1">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
