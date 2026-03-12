import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Alaii</title>
        <meta name="description" content="Privacy Policy for Alaii - AI-powered fitness app platform" />
        <link rel="canonical" href="https://alaii.app/privacy" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 min-h-screen relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/" className="text-[#00F0D4] hover:text-[#3DFFF0] mb-8 inline-block">
            ← Back to Home
          </Link>

          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-[#A0A5B0] mb-8">Effective Date: February 18, 2026 • Website: alaii.app</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-[#A0A5B0] leading-relaxed">
                Alaii ("Company," "we," "us," or "our") is committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect information when you use our website (alaii.app), platform, applications, and related services (collectively, the "Service").
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-3">1.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-[#A0A5B0] space-y-2 ml-4">
                <li><strong className="text-white">Account Information:</strong> Name, email address, password, phone number, and business name</li>
                <li><strong className="text-white">Business Information:</strong> Business type, industry, service descriptions, branding assets</li>
                <li><strong className="text-white">Payment Information:</strong> Billing address and payment method details (processed via Stripe)</li>
                <li><strong className="text-white">AI Prompts:</strong> Text descriptions and instructions provided to generate applications</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-3">1.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-[#A0A5B0] space-y-2 ml-4">
                <li>Device and usage data (IP address, browser type, operating system)</li>
                <li>Cookies and tracking technologies</li>
                <li>Server logs and analytics data</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
              <p className="text-[#A0A5B0] leading-relaxed">We use collected information to:</p>
              <ul className="list-disc list-inside text-[#A0A5B0] space-y-2 ml-4">
                <li>Provide and maintain the Service</li>
                <li>Generate your business applications using AI</li>
                <li>Process transactions and payments</li>
                <li>Improve and personalize your experience</li>
                <li>Send service updates and communications</li>
                <li>Analyze usage patterns and conduct research</li>
                <li>Detect and prevent fraud and security issues</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">3. How We Share Your Information</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                We do not sell your personal information. We may share information with trusted service providers (cloud hosting, payment processing, analytics), to comply with legal requirements, or in connection with business transfers.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">4. Data Security</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                We implement industry-standard security measures including encryption, access controls, and regular security assessments to protect your information.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">5. Your Privacy Rights</h2>
              <p className="text-[#A0A5B0] leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside text-[#A0A5B0] space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">6. Cookies and Tracking</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                We use cookies for essential functionality, analytics, preferences, and marketing. You can manage cookie preferences through your browser settings.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">7. International Data Transfers</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                Your information may be transferred to and processed in the United States. We implement appropriate safeguards to protect your data in accordance with this Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">8. Contact Us</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                General Inquiries: <a href="mailto:savannah@joindalai.com" className="text-[#00F0D4] hover:text-[#3DFFF0]">savannah@joindalai.com</a><br />
                Website: alaii.app<br />
                Company: Alaii
              </p>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-[#6B7280] text-center">© 2026 Alaii. All rights reserved. Build. Brand. Publish. Own.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}