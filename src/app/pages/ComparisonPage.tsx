import { useParams, Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { comparisonData } from '@/app/data/seo-content';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ComparisonPage() {
  const { competitor } = useParams();
  const data = comparisonData[competitor || ''];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://alaii.app/compare/${competitor}`} />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Founding Member Promo Banner */}
          <div className="mb-12 bg-gradient-to-r from-[#75A6D4] to-[#38BDF8] rounded-2xl p-6 text-center shadow-xl">
            <p className="text-white text-lg font-bold mb-2">
              🎉 First 300 Founding Members: <span className="text-blue-50">$10/month forever</span> with code <span className="bg-white/20 px-3 py-1 rounded font-mono">FOUNDING300</span>
            </p>
            <p className="text-blue-50 text-sm">
              Regular price $50/mo after first 300 members • Lock in your price now
            </p>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{data.h1}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stop paying per booking. Start owning your platform. See why businesses are choosing alaii over {data.competitorName}.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-slate-200">
            <div className="grid grid-cols-3 bg-slate-100 p-6 border-b border-slate-200">
              <div className="col-span-1 font-bold text-slate-500">Feature</div>
              <div className="col-span-1 font-bold text-center text-slate-500">{data.competitorName}</div>
              <div className="col-span-1 font-bold text-center text-[#75a6d4]">alaii</div>
            </div>
            
            {[
              { feature: "Transaction Fees", comp: "2.5% + 30¢", dalai: "0%" },
              { feature: "Custom Branded App", comp: "Generic Container", dalai: "Your Own App Icon" },
              { feature: "Setup Time", comp: "Days/Weeks", dalai: "5 Minutes" },
              { feature: "Monthly Cost", comp: "$30 - $500+", dalai: "$10 (Founding)" },
              { feature: "Client Data Ownership", comp: "Shared", dalai: "100% Yours" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="col-span-1 font-medium text-slate-700 flex items-center">{row.feature}</div>
                <div className="col-span-1 text-center text-slate-500 flex items-center justify-center">{row.comp}</div>
                <div className="col-span-1 text-center font-bold text-[#75a6d4] flex items-center justify-center bg-blue-50/50 -my-6 py-6 border-x border-blue-50">{row.dalai}</div>
              </div>
            ))}
          </div>

          {/* SEO Content */}
          <div className="prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2>Why {data.competitorName} Users are Switching</h2>
            <p>
              In the competitive world of wellness and service businesses, your booking software should work for you, not tax you. 
              While {data.competitorName} has been a standard for years, its pricing model often penalizes growth. 
              Every time you succeed, you pay more.
            </p>
            <p>
              Alaii is an all-in-one booking and payments app built for service businesses. 
              Right now, founding members get everything for just <strong>$10/month forever</strong> with code FOUNDING300 (regular $50/mo after first 300 members). 
              Create your branded app — share a link, embed on your website, or clients download Alaii and use your invite code for instant access. Built-in AI handles scheduling and client communication automatically.
            </p>

            <h3>The Problem with {data.competitorName}</h3>
            <ul>
              <li>High monthly fees that scale with your staff</li>
              <li>Transaction fees that eat into your profit margins</li>
              <li>A generic app experience that promotes your competitors</li>
              <li>Complex interfaces that require training</li>
            </ul>

            <h3>The alaii Advantage</h3>
            <p>
              When you build with alaii, you aren't just getting software; you're getting your own digital real estate.
              Your clients download <em>your</em> app, see <em>your</em> logo, and book <em>your</em> services.
            </p>
            
            <div className="my-10 p-6 bg-[#f0f9ff] rounded-xl border border-[#bae6fd]">
              <h4 className="text-[#0369a1] mt-0">Did you know?</h4>
              <p className="mb-0 text-[#0c4a6e]">
                Businesses that switch to a custom branded app see a <strong>30% increase in repeat bookings</strong> on average.
                Clients prefer the ease of tapping an icon on their home screen over searching for a website.
              </p>
            </div>

            <h2>How to Migrate from {data.competitorName}</h2>
            <p>
              Moving your data is easier than you think. You don't need to be a developer to switch to alaii.
              Our "No-Code" builder allows you to recreate your service menu and schedule in minutes.
              Simply type what you need, and our AI builds the infrastructure for you.
            </p>

            <div className="flex justify-center mt-12">
               <a href="https://web.alaii.app/" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-8 text-lg font-bold bg-[#75a6d4] hover:bg-[#75a6d4]/90 text-white rounded-xl shadow-lg">
                  Start Your Free Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}