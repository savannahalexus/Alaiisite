import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Hero } from '@/app/components/Hero';
import { HowClientsAccess } from '@/app/components/HowClientsAccess';
import { PromoBanner } from '@/app/components/PromoBanner';
import { BusinessInputSection } from '@/app/components/BusinessInputSection';
import { SavingsBreakdown } from '@/app/components/SavingsBreakdown';
import { HowItWorks } from '@/app/components/HowItWorks';
import { AISection } from '@/app/components/AISection';
import { WhyClientsDownload } from '@/app/components/WhyClientsDownload';
import { WhatYouGet } from '@/app/components/WhatYouGet';
import { Pricing } from '@/app/components/Pricing';
import { Industries } from '@/app/components/Industries';
import { RealUseCases } from '@/app/components/RealUseCases';
import { NeedHelpSection } from '@/app/components/NeedHelpSection';
import { FAQ } from '@/app/components/FAQ';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';
import { ComparisonPage } from '@/app/pages/ComparisonPage';
import { UseCasePage } from '@/app/pages/UseCasePage';
import { BlogPage } from '@/app/pages/BlogPage';
import { TermsPage } from '@/app/pages/TermsPage';
import { PrivacyPage } from '@/app/pages/PrivacyPage';
import { WhyWeBuildPage } from '@/app/pages/WhyWeBuildPage';
import { ResourcesPage } from '@/app/pages/ResourcesPage';
import { GuidePage } from '@/app/pages/GuidePage';
import { SchemaMarkup } from '@/app/components/SchemaMarkup';

function LandingPage() {
  return (
    <main>
      <Helmet>
        <title>alaii - Build Your Business App in 30 Seconds | No Code App Builder</title>
        <meta name="description" content="Build booking apps, payment systems, scheduling tools, and client portals in 30 seconds for beauty, fitness & wellness businesses. No code. No app store wait. Fully branded. Yours forever. Perfect for salons, trainers, spas, coaches, and wellness professionals." />
        <meta name="keywords" content="no code app builder, business app builder, instant app publishing, white label app, booking app, scheduling software, payment app, client management, small business software, entrepreneur tools, AI app builder, beauty business software, salon booking app, fitness app builder, wellness platform, spa management software, salon appointment booking software, personal trainer client management app, spa scheduling system with payments, barbershop booking app no code, yoga studio management software, fitness class scheduling platform, wellness coach booking system, beauty salon payment processing, hair salon booking system, pilates studio scheduling app, gym membership management software, massage therapist booking app, nail salon appointment software, esthetician booking platform, makeup artist scheduling tool, barber shop appointment app, crossfit gym management, boutique fitness studio software, meditation class booking, nutrition coach client portal, health coach scheduling app, PT session booking software" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alaii.app/" />
        <meta property="og:title" content="alaii - Every Beauty, Fitness & Wellness App You Need in 30 Seconds" />
        <meta property="og:description" content="No code. No wait. Build your entire business stack—booking, payments, scheduling—instantly. Fully branded. Yours forever." />
        <meta property="og:image" content="https://alaii.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alaii.app/" />
        <meta property="twitter:title" content="alaii - Build Business Apps in 30 Seconds" />
        <meta property="twitter:description" content="The instant app factory for beauty, fitness & wellness businesses. No code. No fees. Fully yours." />
        <meta property="twitter:image" content="https://alaii.app/twitter-image.png" />

        <link rel="canonical" href="https://alaii.app/" />
        <meta name="author" content="alaii" />
      </Helmet>
      <SchemaMarkup />
      <Hero />
      <HowClientsAccess />
      <PromoBanner />
      <BusinessInputSection />
      <SavingsBreakdown />
      <HowItWorks />
      <AISection />
      <WhyClientsDownload />
      <WhatYouGet />
      <Industries />
      <Pricing />
      <RealUseCases />
      <NeedHelpSection />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans text-slate-900 relative">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* About Pages */}
            <Route path="/why-we-built" element={<WhyWeBuildPage />} />
            
            {/* Legal Pages */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* SEO Pages - Comparison Pages */}
            <Route path="/compare/:competitor" element={<ComparisonPage />} />
            
            {/* SEO Pages - Use Case Pages */}
            <Route path="/use-cases/:usecase" element={<UseCasePage />} />
            <Route path="/for/:industry" element={<UseCasePage />} /> 
            
            {/* SEO Pages - Blog Pages */}
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/guides/:slug" element={<BlogPage />} />
            
            {/* Resources & Guides */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<GuidePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}