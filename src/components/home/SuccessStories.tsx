"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Operations Executive @ Randstad USA",
    quote: "I'm from a non-IT background, so I was not sure where to start. MedTech team explained things clearly and helped me with interviews. It was a good experience overall.",
    initials: "AV"
  },
  {
    name: "Kavya Nair",
    role: "Cloud Architect @ AWS",
    quote: "The personalized recruiter service changed everything for me. I was able to land a senior role with a 35% salary hike within just 8 weeks of starting the program.",
    initials: "KN"
  },
  {
    name: "Rohit Singh",
    role: "Data Analyst @ Insight Global",
    quote: "Their ATS optimized resume and strategic talent marketing gave me access to hidden job pools I didn't even know existed. Highly recommend their services.",
    initials: "RS"
  },
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Tech Mahindra",
    quote: "The mock interviews and technical training were exactly what I needed to build my confidence. I felt fully prepared when securing my dream job offer.",
    initials: "RS"
  },
  {
    name: "Sneha Reddy",
    role: "Product Manager @ Cognizant",
    quote: "Professional, transparent, and incredibly effective. The team guided me through every step, including salary negotiations and background verification.",
    initials: "SR"
  }
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 2000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-light/10">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Candidate Testimonials <span className="text-gradient-gold"></span>
          </motion.h2>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-glass-border">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full" />
            <div className="absolute -left-6 -top-6">
              <Quote className="w-24 h-24 text-white/5 rotate-180" />
            </div>

            <div className="relative z-10 min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  <p className="text-xl md:text-2xl text-gray-300 font-sans leading-relaxed italic relative z-10">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>

                  <div className="flex items-center justify-between border-t border-glass-border pt-6 mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-light to-navy border border-gold/30 flex items-center justify-center font-heading font-bold text-white shadow-[0_0_10px_rgba(200,169,81,0.2)]">
                        {testimonials[currentIndex].initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white font-heading">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gold">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>

                    <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] transition-colors border border-glass-border">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-navy hover:bg-navy-light border border-glass-border transition-all hover:border-gold group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-gold transition-colors" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-gold w-8" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-navy hover:bg-navy-light border border-glass-border transition-all hover:border-gold group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gold transition-colors" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
