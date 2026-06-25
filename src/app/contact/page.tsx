import { Metadata } from "next";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MedTech Technologies",
  description: "Get in touch with our placement experts for career guidance and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
    <div className="pt-28">
      <ContactForm />
    </div>
    </>
  );
}
