import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

export function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Alaii</title>
        <meta name="description" content="Terms of Service for Alaii - AI-powered fitness app platform" />
        <link rel="canonical" href="https://alaii.app/terms" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 min-h-screen relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/" className="text-[#00F0D4] hover:text-[#3DFFF0] mb-8 inline-block">
            ← Back to Home
          </Link>

          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
            <p className="text-[#A0A5B0] mb-8">Effective Date: February 18, 2026 • Website: alaii.app</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-[#A0A5B0] leading-relaxed">
                Welcome to Alaii. These Terms of Service ("Terms") govern your access to and use of the Alaii platform, website (alaii.app), applications, and all related services (collectively, the "Service") operated by Alaii ("Company," "we," "us," or "our").
              </p>

              <p className="text-[#A0A5B0] leading-relaxed">
                By accessing or using Alaii, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service. Please read these Terms carefully before using our platform.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">1. Definitions</h2>
              <p className="text-[#A0A5B0]"><strong className="text-white">"User" or "You"</strong> refers to any individual or entity that accesses or uses the Service, including business owners, entrepreneurs, trainers, coaches, and service providers.</p>
              <p className="text-[#A0A5B0]"><strong className="text-white">"Platform"</strong> refers to the Alaii text-to-enterprise application builder, including all AI-powered tools, app generation features, publishing capabilities, and related services available through alaii.app.</p>
              <p className="text-[#A0A5B0]"><strong className="text-white">"User Content"</strong> refers to any data, text, images, branding assets, business information, or other materials that you upload, submit, or create through the Service.</p>
              <p className="text-[#A0A5B0]"><strong className="text-white">"Generated Apps"</strong> refers to the applications, tools, booking systems, scheduling platforms, payment integrations, and other software products created for you through the Alaii platform.</p>

              <h2 className="text-3xl font-bold mt-12 mb-4">2. Eligibility</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                You must be at least 18 years of age to use the Service. By using Alaii, you represent and warrant that you are at least 18 years old, have the legal capacity to enter into a binding agreement, and are not barred from using the Service under any applicable law.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">3. Ownership of Generated Apps</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                You retain full ownership of your User Content and the Generated Apps created through the Alaii platform. When you build an app using Alaii, that app is yours. We do not claim ownership over your business applications, branding, data, or content.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">4. Payment and Subscriptions</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                Alaii offers various subscription tiers. Current pricing is available at alaii.app/pricing. Subscription fees are billed in advance on a recurring basis. Alaii does not charge per-user fees or per-booking transaction fees on your Generated Apps.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-[#A0A5B0] leading-relaxed">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside text-[#A0A5B0] space-y-2 ml-4">
                <li>Violate any applicable law or regulation</li>
                <li>Create applications that facilitate illegal activities</li>
                <li>Infringe on intellectual property rights of third parties</li>
                <li>Distribute malware or harmful software</li>
                <li>Attempt to reverse engineer the Platform</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4">6. Limitation of Liability</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALAII SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">7. Contact Us</h2>
              <p className="text-[#A0A5B0] leading-relaxed">
                Email: <a href="mailto:savannah@joindalai.com" className="text-[#00F0D4] hover:text-[#3DFFF0]">savannah@joindalai.com</a><br />
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