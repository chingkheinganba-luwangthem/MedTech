"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const ParticleCanvas = dynamic(() => import("@/components/shared/ParticleCanvas").then((mod) => mod.ParticleCanvas), { ssr: false });
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gift,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Globe2,
  Zap,
  Users,
  Target,
  Award,
  Briefcase,
  Check
} from "lucide-react";

function AnimatedStat({ value, suffix, label, delay, icon: Icon }: { value: number, suffix: string, label: string, delay: number, icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const interval = 20;
          const steps = duration / interval;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, interval);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(`hero-stat-${label.replace(/\s+/g, '-')}`);
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, label, hasAnimated]);

  return (
    <motion.div
      id={`hero-stat-${label.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mb-4 bg-dark-bg text-gold/80 hover:text-gold transition-colors">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gold mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs font-semibold tracking-wider text-white/50 uppercase leading-snug w-24">
        {label}
      </div>
    </motion.div>
  );
}

function FloatingJobCard({ title, location, salary, status, delay, className }: { title: string, location: string, salary: string, status: string, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      className={`absolute z-20 glass-panel border border-white/10 rounded-xl p-3 md:p-4 bg-dark-bg/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <Briefcase size={16} className="text-gold" />
        </div>
        <div>
          <h4 className="text-sm md:text-base font-bold text-white mb-0.5">{title}</h4>
          <p className="text-[10px] md:text-xs text-gray-400 mb-1">{location}</p>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-[10px] md:text-xs font-medium text-gray-300">{salary}</p>
            <p className="text-[10px] text-green-400 flex items-center gap-1 font-semibold">
              <Check size={10} strokeWidth={3} /> {status}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] lg:h-screen lg:min-h-[750px] lg:max-h-[1080px] pt-32 lg:pt-24 pb-20 lg:pb-8 flex items-center overflow-hidden">
      {/* Base Background Layers */}
      <div className="absolute inset-0 bg-dark-bg -z-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-dark-bg/80 to-dark-bg -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gold-glow blur-[180px] rounded-full pointer-events-none opacity-25 -z-10" />

      {/* Main Visual Background Image */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <Image
          src="/image/hero-bg-final.png"
          alt="Global Network Background"
          fill
          priority
          quality={100}
          className="object-contain object-center pointer-events-none"
        />
      </div>

      {/* Neural Particles / Animated background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticleCanvas />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full h-full flex flex-col justify-center">
        {/* 
            LAYOUT-SYSTEM:
            To move elements manually, adjust the classes below.
            LeftContent: Use margins/width to shift left/right (e.g., md:ml-12, w-[45%])
            CenterIllustration: Use top/left/right to move (e.g., top-[10%], lg:left-[40%])
            StatsGroup: Use flex alignment/margins to move (e.g., ml-auto, pt-20)
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full w-full max-w-[1440px] mx-auto gap-8 relative">

          {/* Vertical Separator (Animated) - Full Height, Right Zone */}
          <div className="hidden lg:block absolute right-[15%] top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-gold/15 to-transparent overflow-hidden rounded-full z-30 pointer-events-none" style={{ boxShadow: '0 0 12px 2px rgba(200,169,81,0.15)' }}>
            <motion.div
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-gold to-transparent"
              style={{ filter: 'blur(1px)', boxShadow: '0 0 20px 6px rgba(200,169,81,0.6)' }}
              animate={{
                y: ["-100%", "300%", "-100%"],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>

          {/* Left Content Block: Title, Description, and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[45%] z-10 pt-6 xl:pt-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] tracking-tight text-white mb-6 ">
              The Future of <br className="hidden lg:block" />
              <span className="text-gold block mt-2">Global <br className="hidden lg:block" />  Recruitment</span>
            </h1>

            <p className="text-sm lg:border-l-2 lg:border-t-0 border-t-2 border-gold pt-3 lg:pt-0 lg:pl-4 md:text-base text-gray-400 font-sans leading-relaxed tracking-wide mb-8 max-w-md">
              Transforming career aspirations into remarkable success by connecting talented professionals with outstanding opportunities across global markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full">
              <Link href="/refer-earn" className="bg-gold hover:brightness-110 text-dark-bg font-bold rounded-full px-6 py-3 text-[13px] border border-gold transition-all flex items-center justify-center gap-6 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <Gift size={16} className="text-dark-bg" />
                  Refer & Earn
                </div>
                <ArrowRight size={16} />
              </Link>

            </div>

            {/* Feature Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-6 mt-4 opacity-90">
              {[
                { icon: ShieldCheck, text: "Verified\nEmployers" },
                { icon: Globe2, text: "Global\nOpportunities" },
                { icon: Zap, text: "Fast\nHiring Process" }
              ].map((feat, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 lg:border-l border-white/20 lg:pl-6 first:lg:border-0 first:lg:pl-0">
                  <feat.icon size={22} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  <span className="text-[11px] md:text-xs text-gray-300 font-medium leading-[1.3] text-center lg:text-left whitespace-pre-line">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Illustration Block: Floating Cards Case */}
          {/* Note: Use this container to shift the central visualization */}
          <div className="relative flex-grow h-[650px] hidden lg:block z-20 pointer-events-none lg:ml-[-50px] xl:ml-[-100px]">
            <FloatingJobCard
              title="Software Engineer"
              location="Bangalore, India"
              salary="₹ 12 LPA"
              status="Hired"
              delay={0.8}
              className="top-[5%] left-[30%]"
            />
            <FloatingJobCard
              title="UI/UX Designer"
              location="Hyderabad, India"
              salary="₹ 8 LPA"
              status="Placed"
              delay={1.2}
              className="top-[30%] right-[-15%]"
            />
            <FloatingJobCard
              title="Data Analyst"
              location="Pune, India"
              salary="₹ 6.5 LPA"
              status="Placed"
              delay={1.0}
              className="bottom-[40%] left-[25%]"
            />
          </div>

          {/* Right Stats Block */}
          {/* Note: Use pt-XX or mt-XX to shift stats up or down */}
          <div className="flex flex-row flex-wrap justify-center lg:flex-col lg:items-end gap-6 lg:gap-10 w-full lg:w-[22%] pt-10 lg:pt-0 lg:pr-2 relative z-10">

            <AnimatedStat value={180} suffix="+" label="Successful Placements" delay={0.6} icon={Users} />
            <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-[-1rem] lg:w-3/4" />
            <AnimatedStat value={90} suffix="%" label="Success Rate" delay={0.8} icon={Target} />
            <div className="hidden lg:block w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-[-1rem] lg:w-3/4" />
            <AnimatedStat value={3} suffix="+" label="Years of Industry Experience" delay={1.0} icon={Award} />
          </div>

        </div>



      </div>
    </section>
  );
}
