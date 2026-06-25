"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MedTech Technologies?",
    answer: "We are a premium global talent acquisition and career advisory firm. We help professionals across IT, non-IT, and Medical sectors secure top-tier opportunities in the USA, UK, Canada, Dubai, and India through personalized training, resume optimization, and strategic marketing."
  },
  {
    question: "Who can benefit from your services?",
    answer: "Our services are designed for everyone from recent graduates looking to launch their careers, to mid-level professionals seeking salary hikes, and senior executives pursuing leadership roles. We provide tailored strategies for each experience level."
  },
  {
    question: "How does the placement process work?",
    answer: "Our 8-step process begins with a strategic career consultation, followed by profile assessment, skill enhancement, resume building, and aggressive talent marketing. We support you through the interview process, help negotiate salary, and assist with compliance and onboarding."
  },
  {
    question: "Are you an authorized organization?",
    answer: "Yes, we are a fully authorized and E-Verified organization maintaining strategic partnerships with leading corporations worldwide, operating with absolute transparency and compliance at every stage."
  }
];

export function FaqSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 md:p-10 rounded-2xl border border-glass-border"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-glass-border last:border-0 px-2">
                <AccordionTrigger className="text-left font-heading hover:text-gold text-lg py-6 transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
