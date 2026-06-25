"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Gift, DollarSign, Users, Share2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-gold" />,
    title: "$500 Per Referral",
    description: "Earn $500 for every successful placement that comes through your referral.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "No Limit on Referrals",
    description: "Refer as many candidates as you want. There's no cap on your earnings.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-gold" />,
    title: "Simple Process",
    description: "Fill the form, we handle the rest. You'll be notified at every stage.",
  },
  {
    icon: <Gift className="w-6 h-6 text-gold" />,
    title: "Bonus Incentives",
    description: "Top referrers get exclusive bonus rewards and recognition each quarter.",
  },
];

const formSchema = z.object({
  referrerName: z.string().min(2, "Your name is required"),
  referrerEmail: z.string().email("Invalid email"),
  referrerPhone: z.string().min(10, "Valid phone required"),
  candidateName: z.string().min(2, "Candidate name is required"),
  candidateEmail: z.string().email("Invalid email"),
  candidatePhone: z.string().min(10, "Valid phone required"),
  notes: z.string().optional(),
});

export default function ReferEarnPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    console.log(data);
    setSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-dark-bg text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold tracking-widest uppercase">Referral Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Refer & <span className="text-gradient-gold">Earn $500</span>
            </h1>
            <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
              Know someone looking for their next career move? Refer them to MedTech and earn $500 for every successful placement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-navy-light/10">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-glass-border hover:border-gold/30 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-navy border border-glass-border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20 bg-dark-bg relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-glass-border"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-2">Submit a Referral</h2>
            <p className="text-gray-400 mb-8">Fill in the details below and we&apos;ll take it from here.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Referral Submitted!</h3>
                <p className="text-gray-400">We&apos;ll review and reach out to your candidate soon.</p>
                <Button onClick={() => setSubmitted(false)} className="mt-6 bg-gold text-dark-bg hover:opacity-90 rounded-full px-6">
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Your Info */}
                <div>
                  <h3 className="text-sm font-bold text-gold uppercase tracking-widest mb-4 border-b border-glass-border pb-2">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your Name" {...register("referrerName")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.referrerName && <p className="text-red-400 text-xs mt-1">{errors.referrerName.message}</p>}
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" {...register("referrerEmail")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.referrerEmail && <p className="text-red-400 text-xs mt-1">{errors.referrerEmail.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <Input type="tel" placeholder="Your Phone" {...register("referrerPhone")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.referrerPhone && <p className="text-red-400 text-xs mt-1">{errors.referrerPhone.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Candidate Info */}
                <div>
                  <h3 className="text-sm font-bold text-gold uppercase tracking-widest mb-4 border-b border-glass-border pb-2">Candidate Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Candidate Name" {...register("candidateName")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.candidateName && <p className="text-red-400 text-xs mt-1">{errors.candidateName.message}</p>}
                    </div>
                    <div>
                      <Input type="email" placeholder="Candidate Email" {...register("candidateEmail")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.candidateEmail && <p className="text-red-400 text-xs mt-1">{errors.candidateEmail.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <Input type="tel" placeholder="Candidate Phone" {...register("candidatePhone")} className="bg-navy/50 border-glass-border focus:border-gold h-12 rounded-xl text-white placeholder:text-gray-600" />
                      {errors.candidatePhone && <p className="text-red-400 text-xs mt-1">{errors.candidatePhone.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <Textarea placeholder="Additional notes (optional)" {...register("notes")} className="bg-navy/50 border-glass-border focus:border-gold min-h-[100px] rounded-xl text-white resize-none placeholder:text-gray-600" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-dark-bg font-bold rounded-xl transition-all hover:shadow-[0_0_15px_rgba(200,169,81,0.5)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Referral
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
