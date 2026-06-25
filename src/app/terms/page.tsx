import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MedTech Technologies",
  description: "Read the terms and conditions governing the use of MedTech Technologies services.",
};

export default function TermsPage() {
  return (
    <div className="pt-40 pb-24 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
          Terms of <span className="text-gradient-gold">Service</span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Last updated: June 2026</p>

        <div className="space-y-10">
          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and using the MedTech Technologies website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Services Description</h2>
            <p className="text-gray-400 leading-relaxed">
              MedTech Technologies provides career placement, recruitment consulting, resume preparation, interview coaching, and related professional development services. Our services are designed to assist job seekers in securing employment opportunities across various industries.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree to provide accurate and truthful information when using our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. Misrepresentation of qualifications or experience may result in termination of services.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Payment & Refund Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              Service fees, where applicable, are described during the enrollment process. Payment terms and refund policies are communicated before any financial commitment is made. Please contact our support team for detailed pricing information.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Referral Program</h2>
            <p className="text-gray-400 leading-relaxed">
              The Refer & Earn program offers $500 per successful placement referral. Referral rewards are subject to verification and are paid after the referred candidate completes a defined probationary period. MedTech Technologies reserves the right to modify or discontinue the referral program at any time.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              MedTech Technologies acts as a facilitator between candidates and employers. While we strive for successful placements, we do not guarantee employment outcomes. Our liability is limited to the fees paid for our services.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">7. Contact</h2>
            <p className="text-gray-400 leading-relaxed">
              For questions about these Terms of Service, please contact us at support@medtech.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
