"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Target, Award, ChevronDown, ChevronUp, Zap, Star, Crown, CheckCircle2, ArrowRight, Shield, Plus, Minus } from "lucide-react";

// ─── Stats Data ───────────────────────────────────────────────────────────────
const stats = [
  {
    icon: Users,
    value: "56",
    label: "Open Candidate Slots",
    color: "text-gold",
    glowClass: "bg-gold/10 border-gold/20",
    borderGlow: "shadow-[0_0_30px_rgba(200,169,81,0.15)]",
    iconColor: "text-gold",
  },
  {
    icon: Target,
    value: "56",
    label: "Active Recruiters Available",
    color: "text-gold",
    glowClass: "bg-gold/10 border-gold/20",
    borderGlow: "shadow-[0_0_30px_rgba(200,169,81,0.15)]",
    iconColor: "text-gold",
  },
  {
    icon: Award,
    value: "15",
    label: "Technical Trainers Available",
    color: "text-gold",
    glowClass: "bg-gold/10 border-gold/20",
    borderGlow: "shadow-[0_0_30px_rgba(200,169,81,0.15)]",
    iconColor: "text-gold",
  },
];

// ─── Plans Data ───────────────────────────────────────────────────────────────
const plans = [
  {
    id: "core",
    icon: Zap,
    name: "Core Plan",
    badge: "MOST POPULAR",
    badgeClass: "bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30",
    price: "$2,000",
    commission: "12%",
    accentColor: "border-[#38BDF8]/50",
    accentGlow: "shadow-[0_0_40px_rgba(56,189,248,0.10)]",
    headerAccent: "text-[#38BDF8]",
    checkAccent: "text-[#38BDF8]",
    showMoreClass: "text-[#38BDF8]/70 hover:text-[#38BDF8]",
    commissionAccent: "text-[#38BDF8]",
    enrollBg: "bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/40 hover:border-[#38BDF8] text-[#38BDF8]",
    summaryBullets: [
      "7 Months Dedicated Support",
      "Strategic Profile Marketing",
      "Support to secure interviews",
    ],
    features: [
      "Interview Preparation",
      "Interview Preparation Material",
      "Expert CV Coach Consultation",
      "Resume Optimization",
      "One on One RUS",
      "LinkedIn and Job Portals Optimization",
      "Dedicated mentor for Guidance",
      "Resume Marketing",
      "Full-Time / W2 Opportunity Marketing",
      "Dedicated Recruiters",
      "Daily Applications (100-150/day)",
      "Weekly Report",
    ],
  },
  {
    id: "prime",
    icon: Star,
    name: "Prime Plan",
    badge: "BEST VALUE",
    badgeClass: "bg-[#C084FC]/20 text-[#C084FC] border border-[#C084FC]/30",
    price: "$3,500",
    commission: "11%",
    accentColor: "border-[#C084FC]/50",
    accentGlow: "shadow-[0_0_40px_rgba(192,132,252,0.10)]",
    headerAccent: "text-[#C084FC]",
    checkAccent: "text-[#C084FC]",
    showMoreClass: "text-[#C084FC]/70 hover:text-[#C084FC]",
    commissionAccent: "text-[#C084FC]",
    enrollBg: "bg-[#C084FC]/10 hover:bg-[#C084FC]/20 border border-[#C084FC]/40 hover:border-[#C084FC] text-[#C084FC]",
    summaryBullets: [
      "7 Months Dedicated Support",
      "Technical Guidance & Skill Support",
      "Complete Handholding Support",
    ],
    features: [
      "Everything in Core Plan",
      "Technical Assistance",
      "Live Mock Interview Session",
      "Technical Expert Sessions",
      "Tailored Resume Applications",
      "Job Description Sessions (05)",
      "Technical Queries Sessions (05)",
      "Assessment Support on Coding (05)",
      "Email Support",
      "AIS (Automated Interview Setup System)",
    ],
  },
  {
    id: "premium",
    icon: Crown,
    name: "Premium Plan",
    badge: "ALL-INCLUSIVE",
    badgeClass: "bg-gold/20 text-gold border border-gold/30",
    price: "$4,500",
    commission: "10%",
    accentColor: "border-gold",
    accentGlow: "shadow-[0_0_40px_rgba(200,169,81,0.20)]",
    headerAccent: "text-gold",
    checkAccent: "text-gold",
    showMoreClass: "text-gold/70 hover:text-gold",
    commissionAccent: "text-gold",
    enrollBg: "bg-gold/10 hover:bg-gold/20 border border-gold/50 hover:border-gold text-gold",
    summaryBullets: [
      "120 to 150 days job guarantee",
      "Transparent Refund Policy",
    ],
    features: [
      "Everything in Core & Prime Plans",
      "Tailored Resume Applications",
      "Additional Premium Support",
      "Priority Placement",
      "Full Access to Technical Support Sessions",
      "120 to 150 days job guarantee",
      "Refund Policy (T&C Apply)",
    ],
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Do I have to pay the initial fee upfront?",
    a: "Yes, the initial fee is required upfront to begin our dedicated placement support. This covers our team's resources, resume building, profile optimization, and recruiter assignments from day one.",
  },
  {
    q: "When exactly do I pay the percentage?",
    a: "The percentage fee is only applicable after you successfully secure a job through our placement services. It is deducted from your paychecks from your new US employer — no payment is required before placement.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade from Core to Prime or Prime to Premium at any time. The difference in plan pricing will be adjusted accordingly, and you'll immediately gain access to additional features.",
  },
  {
    q: "Is there a refund policy?",
    a: "The Premium Plan includes a transparent refund policy (T&C Apply). For Core and Prime plans, please speak with your account manager for details on our satisfaction guarantee.",
  },
  {
    q: "How long does the placement process take?",
    a: "Most candidates receive their first interview opportunities within 30–60 days. The Premium Plan includes a 120–150 day job guarantee, ensuring you receive full support until placement.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? "border-gold/40 shadow-[0_0_30px_rgba(200,169,81,0.08)]" : "border-white/8 hover:border-gold/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <span className={`text-sm md:text-base font-semibold transition-colors ${
          open ? "text-white" : "text-gray-200 group-hover:text-white"
        }`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
          open
            ? "bg-gold/10 border-gold/40 text-gold"
            : "border-white/15 text-gray-400 group-hover:border-gold/30 group-hover:text-gold"
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="w-full h-px bg-white/8 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Plan Card ────────────────────────────────────────────────────────────────
function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const Icon = plan.icon;

  const mid = Math.ceil(plan.features.length / 2);
  const leftFeatures = plan.features.slice(0, mid);
  const rightFeatures = plan.features.slice(mid);

  return (
    <div
      className={`glass-panel rounded-2xl border ${plan.accentColor} ${plan.accentGlow} overflow-hidden transition-all duration-500`}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${plan.headerAccent}`} />
            <h3 className={`text-xl font-bold ${plan.headerAccent}`}>{plan.name}</h3>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-colors cursor-pointer ${plan.showMoreClass}`}
          >
            {open ? "SHOW LESS" : "SHOW MORE"}
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <span className={`inline-block text-[10px] font-bold tracking-widest px-3 py-1 rounded-full ${plan.badgeClass} mb-4`}>
          {plan.badge}
        </span>

        <div>
          <p className="text-5xl font-extrabold text-white tracking-tight">
            {plan.price} <span className="text-2xl font-semibold text-white/60">initially</span>
          </p>
          <p className="text-sm text-gray-400 mt-1 italic">
            + <span className={`font-bold not-italic ${plan.commissionAccent}`}>{plan.commission}</span> of your annual package 1st year only
          </p>
        </div>
      </div>

      {/* Expanded Features */}
      {open && (
        <div className="border-t border-white/8 px-6 pb-6 pt-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {leftFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.checkAccent}`} />
                <span className="text-sm text-gray-300">{f}</span>
              </div>
            ))}
            {rightFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.checkAccent}`} />
                <span className="text-sm text-gray-300">{f}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push(`/partner-portal/enroll?plan=${plan.id}`)}
            className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold tracking-widest text-sm transition-all duration-300 cursor-pointer ${plan.enrollBg}`}
          >
            <ArrowRight className="w-4 h-4" />
            ENROLL NOW
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Background glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-gold-glow blur-[160px] rounded-full pointer-events-none opacity-40 z-0" />
      <div className="fixed bottom-1/4 right-0 w-[400px] h-[400px] bg-gold-glow blur-[140px] rounded-full pointer-events-none opacity-20 z-0" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* ── Hero ────────────────────────────────────────────── */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full bg-gold/5">
              Partner Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Placement Support <span className="text-gradient-gold">Packages</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Find the perfect plan for your goals and benefit from our complete career guidance and placement assistance.
            </p>
          </div>

          {/* ── Stats ───────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`glass-panel rounded-2xl border ${stat.glowClass} ${stat.borderGlow} p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`p-3 rounded-xl ${stat.glowClass} border`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-white leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Plans ───────────────────────────────────────────── */}
          <div className="space-y-4">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* ── Payment Note ────────────────────────────────────── */}
          <div className="mt-10 glass-panel rounded-2xl border border-gold/20 shadow-[0_0_40px_rgba(200,169,81,0.07)] p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Payment Note</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              The upfront fee covers our entire service engagement. The percentage will be payable from your
              paychecks after getting a job from your new US employer.{" "}
              <span className="text-white font-semibold">No hidden charges. No risk.</span>
            </p>
          </div>

          {/* ── FAQ ─────────────────────────────────────────────── */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
              <p className="text-gray-500 text-sm mt-3">Everything you need to know about our placement plans</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} />
              ))}
            </div>
          </div>

          {/* ── Footer Note ─────────────────────────────────────── */}
          <p className="text-center text-xs text-gray-500 mt-10">
            All plans include a dedicated account manager. Terms &amp; Conditions apply. Prices are subject to change.
          </p>
        </div>
      </div>
    </div>
  );
}
