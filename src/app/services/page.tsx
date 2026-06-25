import { Metadata } from "next";
import { ServicesList } from "@/components/services/ServicesList";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";

export const metadata: Metadata = {
  title: "Our Services | MedTech Technologies",
  description: "Comprehensive end-to-end career consulting and placement services.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-dark-bg text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 mt-16 text-white">
            Your Success <br /> <span className="text-gradient-gold">Our Commitment </span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Strategic career advancement solutions designed to support professionals through every stage of the hiring journey, from resume
            optimization to offer acceptance
          </p>
        </div>
      </div>
      <ServicesList />
      <ProcessTimeline />
    </>
  );
}
