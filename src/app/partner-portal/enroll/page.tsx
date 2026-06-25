"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, Zap, Star, Crown, Send } from "lucide-react";

// ─── Plan Config ─────────────────────────────────────────────────────────────
const planConfig = {
  core: {
    name: "Core Plan",
    price: "$2,000",
    commission: "12%",
    icon: Zap,
    // Sky-blue accent for Core
    accent: "#38BDF8",
    accentClass: "text-[#38BDF8]",
    borderClass: "border-[#38BDF8]/40",
    glowClass: "shadow-[0_0_40px_rgba(56,189,248,0.12)]",
    badgeBg: "bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]",
    inputFocusStyle: { borderBottomColor: "#38BDF8" },
    btnClass: "bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/40 hover:border-[#38BDF8] text-[#38BDF8]",
    checkboxAccent: "accent-[#38BDF8]",
  },
  prime: {
    name: "Prime Plan",
    price: "$3,500",
    commission: "11%",
    icon: Star,
    // Violet accent for Prime
    accent: "#C084FC",
    accentClass: "text-[#C084FC]",
    borderClass: "border-[#C084FC]/40",
    glowClass: "shadow-[0_0_40px_rgba(192,132,252,0.12)]",
    badgeBg: "bg-[#C084FC]/10 border border-[#C084FC]/30 text-[#C084FC]",
    inputFocusStyle: { borderBottomColor: "#C084FC" },
    btnClass: "bg-[#C084FC]/10 hover:bg-[#C084FC]/20 border border-[#C084FC]/40 hover:border-[#C084FC] text-[#C084FC]",
    checkboxAccent: "accent-[#C084FC]",
  },
  premium: {
    name: "Premium Plan",
    price: "$4,500",
    commission: "10%",
    icon: Crown,
    // Gold accent for Premium (same as site theme)
    accent: "#C8A951",
    accentClass: "text-gold",
    borderClass: "border-gold/40",
    glowClass: "shadow-[0_0_40px_rgba(200,169,81,0.15)]",
    badgeBg: "bg-gold/10 border border-gold/30 text-gold",
    inputFocusStyle: { borderBottomColor: "#C8A951" },
    btnClass: "bg-gold/10 hover:bg-gold/20 border border-gold/40 hover:border-gold text-gold",
    checkboxAccent: "accent-[#C8A951]",
  },
} as const;

type PlanKey = keyof typeof planConfig;

// ─── Input Field ─────────────────────────────────────────────────────────────
function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  required,
  accent,
  placeholder = "",
}: {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  accent: string;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 group">
      <label className="text-xs font-medium text-gray-400 tracking-wide">
        {label}{required && <span className="text-gray-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ borderBottomColor: focused ? accent : undefined }}
        className="bg-transparent border-0 border-b border-white/15 focus:outline-none text-white pb-2 text-sm transition-colors placeholder:text-gray-600"
      />
    </div>
  );
}

// ─── Enroll Form ─────────────────────────────────────────────────────────────
function EnrollForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planKey = (searchParams.get("plan") as PlanKey) || "core";
  const plan = planConfig[planKey] || planConfig.core;
  const PlanIcon = plan.icon;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    selectedPlan: plan.name,
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { setError("Please agree to the Privacy Policy."); return; }
    setSubmitting(true);
    setError("");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSuccess("Your enrollment has been submitted! Our team will contact you shortly.");
    setForm({ name: "", email: "", phone: "", role: "", message: "", selectedPlan: plan.name });
    setAgreed(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Background glow matching plan color */}
      <div
        className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-20 z-0"
        style={{ backgroundColor: plan.accent }}
      />

      <div className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Back button */}
          <button
            onClick={() => router.push("/partner-portal")}
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Plans
          </button>

          {/* Card */}
          <div className={`glass-panel rounded-3xl border ${plan.borderClass} ${plan.glowClass} p-8 md:p-10`}>

            {/* Plan badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest px-4 py-2 rounded-full ${plan.badgeBg}`}>
                <PlanIcon className="w-3.5 h-3.5" />
                {plan.name} — {plan.price}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1">
              Enrollment Application
            </h1>
            <p className={`text-sm mb-8 ${plan.accentClass}`}>
              + {plan.commission} of your annual package (1st year only)
            </p>

            {/* Messages */}
            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl text-sm">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Full Name" name="name" required value={form.name} onChange={handleChange} accent={plan.accent} />
                <FormInput label="Email Address" name="email" type="email" required value={form.email} onChange={handleChange} accent={plan.accent} />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Phone (+1)" name="phone" type="tel" required value={form.phone} onChange={handleChange} accent={plan.accent} />
                <FormInput label="Target Role (US Market)" name="role" value={form.role} onChange={handleChange} accent={plan.accent} />
              </div>

              {/* Plan Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400 tracking-wide">Plan Selection<span className="text-gray-500">*</span></label>
                <select
                  name="selectedPlan"
                  required
                  value={form.selectedPlan}
                  onChange={handleChange}
                  style={{ borderBottomColor: plan.accent }}
                  className="bg-transparent border-0 border-b border-white/15 focus:outline-none text-white pb-2 text-sm appearance-none cursor-pointer"
                >
                  <option value="Core Plan" className="bg-[#01040F]">Core Plan — $2,000</option>
                  <option value="Prime Plan" className="bg-[#01040F]">Prime Plan — $3,500</option>
                  <option value="Premium Plan" className="bg-[#01040F]">Premium Plan — $4,500</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400 tracking-wide">Additional Info / Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  style={{ borderBottomColor: plan.accent }}
                  className="bg-transparent border-0 border-b border-white/15 focus:outline-none text-white pb-2 text-sm resize-none placeholder:text-gray-600 transition-colors"
                  placeholder="Tell us about your background or any specific requirements..."
                />
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/8" />

              {/* Privacy */}
              <label className="flex items-center gap-3 cursor-pointer w-fit group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className={`w-4 h-4 rounded ${plan.checkboxAccent} bg-transparent border-gray-500 cursor-pointer`}
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  I agree with MedTech's{" "}
                  <span className={`font-semibold ${plan.accentClass}`}>Privacy Policy</span>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className={`flex items-center justify-center gap-3 w-full md:w-auto px-10 py-3.5 rounded-xl font-bold text-sm tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-60 ${plan.btnClass}`}
              >
                <Send className="w-4 h-4" />
                {submitting ? "SUBMITTING..." : "SUBMIT ENROLLMENT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-bg flex items-center justify-center text-gold">Loading...</div>}>
      <EnrollForm />
    </Suspense>
  );
}
