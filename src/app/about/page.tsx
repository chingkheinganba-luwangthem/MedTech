import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { WhoWeHelp } from "@/components/about/WhoWeHelp";
import { WhyChooseUs } from "@/components/home/WhyChooseUs"; // Reusing from home
import { TeamPlaceholder } from "@/components/about/TeamPlaceholder";
import { FaqSection } from "@/components/home/FaqSection"; // Reusing from home

export const metadata: Metadata = {
  title: "About Us | MedTech Technologies",
  description: "Learn about our mission helping professionals across the globe with their career journeys.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <WhoWeHelp />
      {/* 
        The requirements mention "Who we Help" which overlaps with Industries, 
        and "Why choose us" which we already built.
      */}
      <WhyChooseUs />
      <TeamPlaceholder />
      <FaqSection />
    </>
  );
}
