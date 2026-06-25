import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { SuccessStories } from "@/components/home/SuccessStories";
import { TrustLogos } from "@/components/shared/TrustLogos";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "MedTech Technologies | Premier Employment & Placement",
  description: "End-to-end career placement services. The future of global recruitment.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriesGrid />
      <ProcessTimeline />
      <TrustLogos />
      <SuccessStories />
      <FaqSection />
      <ContactForm />
    </>
  );
}
