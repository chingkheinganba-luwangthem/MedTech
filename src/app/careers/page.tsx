import { Metadata } from "next";
import { JobBoard } from "@/components/careers/JobBoard";


export const metadata: Metadata = {
  title: "Careers | MedTech Technologies",
  description: "Browse current job openings across IT, Non-IT, Medical, and Engineering sectors.",
};

export default function CareersPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-dark-bg text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 mt-16 text-white">
            Open <span className="text-gradient-gold">Positions</span>
          </h1>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Discover your next career opportunity. We have roles across multiple industries and experience levels.
          </p>
        </div>
      </div>
      <JobBoard />

    </>
  );
}
