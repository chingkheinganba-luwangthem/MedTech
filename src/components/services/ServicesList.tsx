"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Target, 
  Rocket, 
  Search, 
  UserCheck, 
  Mic, 
  Brain, 
  TrendingUp, 
  Cpu,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-5 h-5 text-gold relative z-10" />,
    badge: "CORE SERVICE",
    title: "Resume Preparation, Profile Understanding & Portfolio Development",
    description: "We create ATS optimized resumes, build strong portfolios, and guide you through your profile so you can confidently present your skills and experience in interviews.",
    bullets: [
      "ATS keyword optimization",
      "Portfolio development support",
      "Profile walkthrough sessions",
      "Expert technical storytelling"
    ]
  },
  {
    icon: <Target className="w-5 h-5 text-gold relative z-10" />,
    badge: "SKILL BUILDER",
    title: "Capability Enhancement & Technical Training",
    description: "Targeted technical training programs designed to bridge skill gaps and align your profile with current industry demands, ensuring you are fully prepared for real-world job requirements.",
    bullets: [
      "Assessment of skill gaps",
      "Custom tech curriculum",
      "Hands-on project training",
      "Industry-standard tech stacks"
    ]
  },
  {
    icon: <Rocket className="w-5 h-5 text-gold relative z-10" />,
    badge: "JOB ACCELERATOR",
    title: "High-Volume Strategic Job Applications (100 to 200 Daily)",
    description: "We implement a data-driven application strategy, submitting 100 to 200 targeted job applications daily to maximize your reach and significantly increase interview opportunities.",
    bullets: [
      "100 to 200 daily applications",
      "Data-driven job targeting",
      "Application tracking & management",
      "Increased interview callbacks"
    ]
  },
  {
    icon: <Search className="w-5 h-5 text-gold relative z-10" />,
    badge: "EXCLUSIVE",
    title: "Access to Hidden Job Opportunities",
    description: "We tap into exclusive and unadvertised job openings through recruiter networks, direct outreach, and other internal process which gives you access to opportunities beyond traditional job portals.",
    bullets: [
      "Recruiter network access",
      "Unadvertised job openings",
      "Direct outreach strategy",
      "Internal referral channels"
    ]
  },
  {
    icon: <UserCheck className="w-5 h-5 text-gold relative z-10" />,
    badge: "PERSONALIZED",
    title: "Dedicated Personal Recruiter",
    description: "You are assigned a dedicated recruiter who actively markets your profile, manages applications, coordinates interviews, and ensures continuous progress throughout your job search journey.",
    bullets: [
      "1-on-1 recruiter support",
      "Active profile marketing",
      "Interview coordination",
      "Direct career advocacy"
    ]
  },
  {
    icon: <Mic className="w-5 h-5 text-gold relative z-10" />,
    badge: "HIGH IMPACT",
    title: "Interview Assistance, Performance Coaching & Ongoing Support",
    description: "Comprehensive interview support including mock interviews, technical preparation, real-time guidance, and continuous assistance to improve your confidence and success rate.",
    bullets: [
      "Live mock interviews",
      "Technical round prep",
      "Real-time interview guidance",
      "Behavioral coaching (STAR method)"
    ]
  },
  {
    icon: <Brain className="w-5 h-5 text-gold relative z-10" />,
    badge: "ADVANCED",
    title: "Senior Level Guidance & Strategic Follow Ups",
    description: "Receive expert mentorship for handling complex interview questions, salary negotiations, and structured post-interview follow-ups to strengthen your selection chances.",
    bullets: [
      "Salary negotiation coaching",
      "Senior mentorship sessions",
      "Strategic follow-up strategy",
      "Complex question handling"
    ]
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-gold relative z-10" />,
    badge: "20% - 30%",
    title: "Average Salary Hike",
    description: "Candidates working with us achieve an average salary increase of 20% - 30% through our strategic guidance and job placement support.",
    bullets: [
      "Personalized salary growth strategy",
      "Market-aligned profile positioning",
      "High-paying opportunity targeting",
      "Interview & negotiation support"
    ]
  },
  {
    icon: <Cpu className="w-5 h-5 text-gold relative z-10" />,
    badge: "SMART AUTOMATION",
    title: "AI-Driven Strategy",
    description: "Our process uses cutting-edge AI tools and smart Chrome extensions to identify the right opportunities, tailor applications, and apply with precision significantly increasing interview chances.",
    bullets: [
      "AI-powered job matching",
      "Smart resume customization",
      "Automated application workflows",
      "Data-driven interview optimization"
    ]
  }
];

export function ServicesList() {
  return (
    <section className="pb-24 pt-12 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex flex-col group hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(200,169,81,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top gradient line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy border border-glass-border flex items-center justify-center relative overflow-hidden group-hover:-translate-y-1 transition-transform shadow-inner">
                  <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {service.icon}
                </div>
                <div className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-navy/80 border border-gold/30 tracking-wider text-gold uppercase shadow-[0_0_10px_rgba(200,169,81,0.1)]">
                  {service.badge}
                </div>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="space-y-2 mt-auto pt-5 border-t border-glass-border/50">
                {service.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span className="text-[11px] text-gray-300 leading-tight">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
