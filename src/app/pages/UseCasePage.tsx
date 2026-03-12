import { useParams, Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useCaseData, industryData } from '@/app/data/seo-content';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Star, Users, Calendar, DollarSign, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function UseCasePage() {
  const { usecase, industry } = useParams();
  
  // Determine which data source to use
  let data;
  if (industry && industryData[industry]) {
    data = industryData[industry];
  } else if (usecase && useCaseData[usecase]) {
    data = useCaseData[usecase];
  }

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const industryName = data.industryName || "Business";

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://alaii.app/${industry ? 'for' : 'use-cases'}/${industry || usecase}`} />
      </Helmet>

      <div className="pt-32 pb-20 bg-white min-h-screen">
        {/* Founding Member Promo Banner */}
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#75A6D4] to-[#38BDF8] rounded-2xl p-6 text-center shadow-xl">
            <p className="text-white text-lg font-bold mb-2">
              🎉 First 300 Founding Members: <span className="text-blue-50">$10/month forever</span> with code <span className="bg-white/20 px-3 py-1 rounded font-mono">FOUNDING300</span>
            </p>
            <p className="text-blue-50 text-sm">
              Regular price $50/mo after first 300 members • Lock in your price now
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
              {data.h1}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {data.description}
            </p>
            <a href="https://web.alaii.app/" target="_blank" rel="noopener noreferrer">
              <Button className="h-14 px-10 text-lg font-bold bg-[#273542] hover:bg-[#1a2433] text-white rounded-2xl shadow-xl shadow-slate-200/50 transition-all hover:scale-105">
                Build Your {industryName} App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-sm text-slate-400 mt-4">No credit card required • Cancel anytime</p>
          </motion.div>
        </div>

        {/* Visual / App Preview Section */}
        <div className="container mx-auto px-6 mb-24">
           <div className="relative max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-slate-800">Why {industryName} choose alaii</h3>
                 <ul className="space-y-4">
                   {[
                     "Own your client data 100%",
                     "Zero booking fees",
                     "Custom branded to your style",
                     "Instant setup in seconds"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-600">
                       <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                         <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                       </div>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="relative h-64 md:h-80 bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center p-8 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="font-bold text-slate-800">Your App Icon Here</p>
                    <p className="text-sm text-slate-500 mt-2">Clients download this directly.</p>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* Features Grid */}
        <div className="bg-slate-50 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Everything Your {industryName} Business Needs
              </h2>
              <p className="text-slate-500">All the tools to grow, none of the bloat.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Calendar, title: "Smart Scheduling", desc: "Automated booking that respects your time. Syncs with your personal calendar to prevent double bookings." },
                { icon: Users, title: "Client Management", desc: "Keep detailed notes, booking history, and preferences for every client. Build stronger relationships." },
                { icon: DollarSign, title: "Seamless Payments", desc: "Accept credit cards, Apple Pay, and Google Pay instantly. Set up deposits to reduce no-shows." },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Text Content */}
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
            <h2>The Best Software for {industryName} in 2026</h2>
            <p>
              Running a business in the {industryName} industry is demanding. 
              Between managing client expectations, maintaining your skills, and handling administrative tasks, 
              you need software that works as hard as you do.
            </p>
            <p>
              Many solutions on the market are bloated, expensive, or difficult to use. 
              They're designed for enterprise corporations, not for agile, modern businesses like yours.
              alaii changes the game by giving you a <strong>dedicated app</strong> for your brand.
            </p>

            <h3>Why a Custom App Matters</h3>
            <p>
              Imagine your clients having your icon on their home screen. 
              When they need to book, they don't search Google and see your competitors' ads. 
              They tap your face (or logo), select a time, and pay. 
              This friction-less experience is proven to increase client retention.
            </p>

            <h3>Key Features for {industryName}</h3>
            <ul>
              <li><strong>Zero Booking Fees:</strong> Keep 100% of what you earn.</li>
              <li><strong>Automated Reminders:</strong> Reduce no-shows with SMS and Push notifications.</li>
              <li><strong>Waitlists:</strong> Fill last-minute cancellations automatically.</li>
              <li><strong>Memberships & Packages:</strong> Secure recurring revenue with easy-to-create subscriptions.</li>
            </ul>

            <div className="not-prose bg-slate-900 text-white p-10 rounded-3xl mt-12 text-center relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to upgrade your business?</h3>
                  <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Join businesses in {industryName} already using alaii.
                    Try it free today.
                  </p>
                  <a href="https://web.alaii.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 px-8 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl shadow-lg">
                      Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}