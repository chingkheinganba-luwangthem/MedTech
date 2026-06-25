"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ChevronRight, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = ["View all", "Recruiting", "Advisory", "Resume Services", "Training"];

const jobs = [
  {
    id: 1,
    title: "Jr Bench Sales Recruitment Specialists",
    description: "Help candidate by maintaining the profile",
    category: "Recruiting",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "RECRUITING"],
      requirements: [
        "Experience or strong willingness to learn US IT bench sales",
        "Strong communication skills",
        "Ability to maintain candidate profiles effectively"
      ]
    }
  },
  {
    id: 2,
    title: "Sr Bench Sales Recruitment Specialists",
    description: "Help candidate by maintaining the profile",
    category: "Recruiting",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "RECRUITING"],
      requirements: [
        "Extensive experience in US IT bench sales",
        "Proven track record of candidate placements",
        "Ability to manage and market candidate profiles securely"
      ]
    }
  },
  {
    id: 3,
    title: "Jr Career Advisors",
    description: "Guide the candidate for fulltime job search journey",
    category: "Advisory",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "ADVISORY"],
      requirements: [
        "Understanding of the US job market",
        "Good communication and mentoring skills"
      ]
    }
  },
  {
    id: 4,
    title: "Sr Career Advisors",
    description: "Guide the candidate for fulltime job search journey",
    category: "Advisory",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "ADVISORY"],
      requirements: [
        "Deep expertise in career counseling",
        "Strong leadership and coaching abilities"
      ]
    }
  },
  {
    id: 5,
    title: "Candidate Relation Manager",
    description: "To help candidate through job search process and maintain relation.",
    category: "Advisory",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "ADVISORY"],
      requirements: [
        "Excellent interpersonal and relationship management skills",
        "Experience in candidate, customer, or client success"
      ]
    }
  },
  {
    id: 6,
    title: "Senior Resume experts",
    description: "Help candidate to make ATS friendly resume and to standout in the job market compare to others",
    category: "Resume Services",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["RECRUITING", "RESUME SERVICES"],
      requirements: [
        "Expert knowledge of ATS systems and keyword optimization",
        "Strong professional writing and editing skills spanning tech domains"
      ]
    }
  },
  {
    id: 7,
    title: "Technical Expert",
    description: "Looking for experienced professionals who can teach and mentor candidates in specific technical domains. (Full Stack Developer, Data Engineer / Data Analyst,Cloud + DevOps Engineer,QA Automation Tester,AI / ML).",
    category: "Training",
    location: "100% WFO",
    type: "Full-Time",
    details: {
      tags: ["TRAINING", "TECHNICAL"],
      requirements: [
        "Subject matter expertise in one or more tech domains",
        "Previous teaching or mentoring experience",
        "Excellent ability to explain complex technical concepts"
      ]
    }
  }
];

export function JobBoard() {
  const [activeCategory, setActiveCategory] = useState("View all");
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const filteredJobs = jobs.filter((job) => {
    return activeCategory === "View all" || job.category === activeCategory;
  });

  const toggleExpand = (id: number) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-gold text-dark-bg border-gold shadow-[0_0_15px_rgba(200,169,81,0.3)]"
                  : "glass-panel border-glass-border text-gray-300 hover:border-gold/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-panel rounded-2xl border border-glass-border hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(200,169,81,0.08)] transition-all group overflow-hidden"
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                    
                    {/* Left Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 max-w-3xl leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-glass-border bg-navy/50 text-gray-300 font-medium">
                          <MapPin className="w-4 h-4 text-gold/80" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-glass-border bg-navy/50 text-gray-300 font-medium">
                          <Clock className="w-4 h-4 text-gold/80" /> {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                      <Link href={`/careers/apply?role=${encodeURIComponent(job.title)}`}>
                        <Button className="bg-transparent hover:bg-transparent text-white hover:text-gold p-0 h-auto font-bold text-base transition-colors group/apply">
                          Apply <ArrowRight className="ml-1 w-4 h-4 group-hover/apply:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      
                      <button 
                        onClick={() => toggleExpand(job.id)}
                        className="text-gold flex items-center gap-1.5 text-sm font-medium hover:text-gold-light transition-colors"
                      >
                        {isExpanded ? "Less Details" : "View Details"}
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-glass-border/50 bg-navy-light/10"
                      >
                        <div className="p-6 md:p-8">
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {job.details.tags.map((tag, i) => (
                              <span key={i} className="px-4 py-1 rounded-full border border-gold/30 bg-navy text-[10px] uppercase tracking-widest text-gold font-bold shadow-[0_0_10px_rgba(200,169,81,0.1)]">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Requirements */}
                          <h4 className="text-gold tracking-widest text-xs uppercase font-bold mb-4">
                            REQUIREMENTS
                          </h4>
                          
                          <ul className="space-y-3 mb-8">
                            {job.details.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                <ChevronRight className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Button */}
                          <Link href={`/careers/apply?role=${encodeURIComponent(job.title)}`}>
                            <Button className="bg-gradient-to-r from-gold to-gold-light hover:scale-105 text-dark-bg font-bold rounded-xl px-8 h-12 transition-all shadow-[0_0_15px_rgba(200,169,81,0.3)]">
                              Apply for this Role
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
