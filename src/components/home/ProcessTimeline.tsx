"use client";

import { motion } from "framer-motion";
import { Users, FileSearch, Target, FileCheck, Search, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "STRATEGIC CAREER CONSULTATION CALL",
    icon: <Users className="w-5 h-5" />,
    align: "bottom",
  },
  {
    number: "02",
    title: "MUTUAL FIT PROFILE ASSESSMENT",
    icon: <FileSearch className="w-5 h-5" />,
    align: "top",
  },
  {
    number: "03",
    title: "CAPABILITY ENHANCEMENT & TECHNICAL UPSKILLING",
    icon: <Target className="w-5 h-5" />,
    align: "bottom",
  },
  {
    number: "04",
    title: "RESUME OPTIMIZATION, PORTFOLIO BUILDING & PROFILE SESSION",
    icon: <FileCheck className="w-5 h-5" />,
    align: "top",
  },
  {
    number: "05",
    title: "STRATEGIC TALENT MARKETING FOR INTERVIEW OPPORTUNITIES",
    icon: <Search className="w-5 h-5" />,
    align: "bottom",
  },
  {
    number: "06",
    title: "INTERVIEW EXCELLENCE, COACHING & ASSISTANCE",
    icon: <MessageSquare className="w-5 h-5" />,
    align: "top",
  },
  {
    number: "07",
    title: "COMPLIANCE, BGV & DOCUMENTATION SUPPORT",
    icon: <ShieldCheck className="w-5 h-5" />,
    align: "bottom",
  },
  {
    number: "08",
    title: "ONGOING SUPPORT (ON DEMAND)",
    icon: <Zap className="w-5 h-5" />,
    align: "top",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">Our Process</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Promising & Transparent <span className="text-gradient-gold">Process Flow</span>
          </motion.h2>
          <p className="text-gray-400 mt-4">for Job Seekers</p>
        </div>

        {/* Desktop View (Horizontal timeline) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto py-40">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-navy-light -translate-y-1/2 z-0" />
          
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-navy-light via-gold to-gold-light -translate-y-1/2 z-0 origin-left" 
            style={{ boxShadow: "0 0 10px rgba(200,169,81,0.5)" }}
          />

          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative w-32">
                
                {/* Top Card */}
                {step.align === "top" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 0.5 + Math.abs(index - 3.5) * 0.1 }}
                    className="absolute bottom-full mb-8 w-48 -ml-8 glass-panel p-4 rounded-xl border border-glass-border border-b-gold/50 shadow-lg group hover:-translate-y-2 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2 text-gold">
                      {step.icon}
                      <span className="font-heading font-bold">{step.number}</span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium leading-relaxed">{step.title}</p>
                    
                    {/* Connecting Line */}
                    <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-glass-border to-transparent -translate-x-1/2" />
                  </motion.div>
                )}

                {/* Node on Timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: (index / steps.length) * 2, type: "spring" }}
                  className="w-6 h-6 rounded-full bg-navy border-[4px] border-gold relative z-20 flex items-center justify-center shadow-[0_0_15px_rgba(200,169,81,0.6)]"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </motion.div>

                {/* Bottom Card */}
                {step.align === "bottom" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 0.5 + Math.abs(index - 3.5) * 0.1 }}
                    className="absolute top-full mt-8 w-48 -ml-8 glass-panel p-4 rounded-xl border border-glass-border border-t-gold/50 shadow-lg group hover:translate-y-2 transition-all cursor-default"
                  >
                    {/* Connecting Line */}
                    <div className="absolute bottom-full left-1/2 w-0.5 h-8 bg-gradient-to-t from-glass-border to-transparent -translate-x-1/2" />
                    
                    <div className="flex items-center gap-2 mb-2 text-gold">
                      {step.icon}
                      <span className="font-heading font-bold">{step.number}</span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium leading-relaxed">{step.title}</p>
                  </motion.div>
                )}
                
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Vertical timeline) */}
        <div className="block lg:hidden relative max-w-sm mx-auto pl-8">
          {/* Main Vertical Line */}
          <div className="absolute top-0 bottom-0 left-3 w-1 bg-navy-light" />
          
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6"
              >
                {/* Node */}
                <div className="absolute top-4 left-[-1.1rem] w-4 h-4 rounded-full bg-navy border-2 border-gold z-10 shadow-[0_0_10px_rgba(200,169,81,0.5)]" />
                
                {/* Card */}
                <div className="glass-panel p-5 rounded-xl border border-glass-border border-l-gold/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-2 text-gold border-b border-glass-border pb-2">
                    {step.icon}
                    <span className="font-heading font-bold text-lg">{step.number}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed mt-2">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
