import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MedTech Technologies",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-40 pb-24 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>
        <p className="text-gray-400 mb-12 text-lg">Last updated: June 2026</p>

        <div className="prose prose-invert prose-gold max-w-none space-y-10">
          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed">
              We collect personal information that you voluntarily provide when using our services, including your name, email address, phone number, resume, and professional details. This information is gathered through our contact forms, career applications, and referral submissions.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              Your information is used to provide our placement and recruitment services, match you with relevant job opportunities, communicate with you about your applications, and improve our services. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our systems are regularly reviewed and updated to ensure the highest level of data protection.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time. You may also opt out of our communications by clicking the unsubscribe link in any email or by contacting us directly at support@medtech.com.
            </p>
          </section>

          <section className="glass-panel p-8 rounded-2xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us at support@medtech.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
