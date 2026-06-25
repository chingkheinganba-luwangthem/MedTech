"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Jr Bench Sales Recruitment Specialists",
  "Sr Bench Sales Recruitment Specialists",
  "Jr Career Advisors",
  "Sr Career Advisors",
  "Candidate Relation Manager",
  "Senior Resume experts",
  "Technical Expert"
];

function ApplyForm() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get("role") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: initialRole,
    gender: "",
    message: "",
  });
  
  const [resume, setResume] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialRole) {
      setFormData((prev) => ({ ...prev, role: initialRole }));
    }
  }, [initialRole]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    
    if (!agreed) {
      setErrorMsg("You must agree to the Privacy Policy.");
      return;
    }

    if (!resume) {
      setErrorMsg("Please upload your resume.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("role", formData.role);
      data.append("gender", formData.gender);
      data.append("message", formData.message);
      data.append("resume", resume);

      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSuccessMsg("Application submitted successfully! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", role: initialRole, gender: "", message: "" });
        setResume(null);
        setAgreed(false);
      } else {
        const err = await response.json();
        setErrorMsg(err.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl border border-glass-border shadow-2xl w-full">
      <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
        Apply: {formData.role || "Select a Role"}
      </h1>

      {successMsg && (
        <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl">
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Name*</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gold focus:ring-0 text-white pb-2 outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gold focus:ring-0 text-white pb-2 outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Phone No (+91)*</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gold focus:ring-0 text-white pb-2 outline-none transition-colors"
            />
          </div>

          {/* Role Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Role*</label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gold focus:ring-0 text-white pb-2 outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-navy text-gray-400">Select a Role</option>
              {roles.map((r) => (
                <option key={r} value={r} className="bg-navy text-white">
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Gender */}
          <div className="space-y-4">
            <label className="text-sm font-medium text-gray-300 block">Gender*</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold bg-transparent border-gray-500 focus:ring-gold focus:ring-offset-dark-bg cursor-pointer"
                />
                <span className="text-white group-hover:text-gold transition-colors">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold bg-transparent border-gray-500 focus:ring-gold focus:ring-offset-dark-bg cursor-pointer"
                />
                <span className="text-white group-hover:text-gold transition-colors">Female</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  required
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold bg-transparent border-gray-500 focus:ring-gold focus:ring-offset-dark-bg cursor-pointer"
                />
                <span className="text-white group-hover:text-gold transition-colors">Other</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Your Message</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gold focus:ring-0 text-white pb-2 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2 pt-2">
          <label className="text-sm font-medium text-gray-300 block">Resume*</label>
          <div className="flex items-center gap-4">
            <label className="px-4 py-2 bg-[#E6E6FA] text-black font-semibold rounded cursor-pointer hover:bg-white transition-colors">
              Choose File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <span className="text-gray-400 text-sm">
              {resume ? resume.name : "No file chosen (.pdf, .doc, .docx)"}
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-600 mt-4" />
        </div>

        {/* Agreement */}
        <div className="pt-2">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 rounded text-gold bg-transparent border-gray-500 focus:ring-gold focus:ring-offset-dark-bg cursor-pointer"
            />
            <span className="text-gray-300 text-sm">
              I agree with MedTech's <span className="text-white font-semibold">Privacy Policy</span>
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent border border-gray-600 text-white hover:border-gold hover:text-gold px-8 py-3 rounded-lg font-bold text-base transition-all"
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20 pb-8">
      {/* Background glow - fully inert */}
      <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-gold-glow blur-[150px] rounded-full pointer-events-none opacity-50 z-0" />
      
      <div className="relative z-[60] container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8 transition-colors font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
          
          <Suspense fallback={<div className="text-gold text-center py-20">Loading form...</div>}>
            <ApplyForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
