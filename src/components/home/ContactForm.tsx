"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide more details"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-light/10">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top: Centered Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 mx-auto"
          >
            <span className="text-sm font-medium text-gold tracking-widest uppercase">Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Let's Build Your <span className="text-gradient-gold">Success Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Your Next Opportunity Starts Here. Connect with our recruitment experts and take the first step toward a successful career.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-12 items-center max-w-6xl mx-auto">

          {/* Left Column: Contact Details (Eye-catching without card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8 lg:pr-8"
          >
            {/* Address */}
            <div className="flex gap-5 items-center group/item hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-light to-navy border border-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(200,169,81,0.15)] group-hover/item:border-gold group-hover/item:shadow-[0_0_15px_rgba(200,169,81,0.3)] transition-all">
                <MapPin className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg tracking-wider uppercase mb-1">Address</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">
                  Suite XXX, City, State ZIP<br />
                  (Waiting for details)
                </p>
              </div>
            </div>

            {/* Email / Support */}
            <div className="flex gap-5 items-center group/item hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-light to-navy border border-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(200,169,81,0.15)] group-hover/item:border-gold group-hover/item:shadow-[0_0_15px_rgba(200,169,81,0.3)] transition-all">
                <Mail className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg tracking-wider uppercase mb-1">Support</h4>
                <a href="mailto:support@medtech.com" className="text-gray-400 text-sm hover:text-gold transition-colors block">
                  support@medtech.com
                </a>
              </div>
            </div>

            {/* Call */}
            <div className="flex gap-5 items-center group/item hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-light to-navy border border-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(200,169,81,0.15)] group-hover/item:border-gold group-hover/item:shadow-[0_0_15px_rgba(200,169,81,0.3)] transition-all">
                <Phone className="text-gold w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg tracking-wider uppercase mb-1">Call</h4>
                <a href="tel:+1000000000" className="text-gray-400 text-sm hover:text-gold transition-colors block">
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 border border-glass-border/50 relative shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" className="bg-navy/50 border-glass-border focus:border-gold focus:ring-gold/20 h-12 rounded-xl text-white placeholder:text-gray-600" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" className="bg-navy/50 border-glass-border focus:border-gold focus:ring-gold/20 h-12 rounded-xl text-white placeholder:text-gray-600" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="bg-navy/50 border-glass-border focus:border-gold focus:ring-gold/20 h-12 rounded-xl text-white placeholder:text-gray-600" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 xxx-xxx-xxxx" className="bg-navy/50 border-glass-border focus:border-gold focus:ring-gold/20 h-12 rounded-xl text-white placeholder:text-gray-600" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your background and goals..."
                          className="bg-navy/50 border-glass-border focus:border-gold focus:ring-gold/20 min-h-[150px] rounded-xl text-white resize-none placeholder:text-gray-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px] h-14 bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(200,169,81,0.5)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                  >
                    Your message has been sent successfully. We will contact you soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    An error occurred while sending your message. Please try again.
                  </motion.p>
                )}
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
