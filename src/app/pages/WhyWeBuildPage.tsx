import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Zap, Heart, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import cmuLogo from 'figma:asset/c345cb9c859c36689ed1f23eac031905d1668b3d.png';

export function WhyWeBuildPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>Why We Built Alaii - Our Story | Built By Carnegie Mellon Founders</title>
        <meta name="description" content="Learn why Carnegie Mellon founders created alaii - to fix outdated, overpriced tools and bring cutting-edge tech and AI to service businesses." />
        <link rel="canonical" href="https://alaii.app/why-we-built" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-red-200 border border-red-200 mb-6">
              <img 
                src={cmuLogo}
                alt="Carnegie Mellon"
                className="h-6 object-contain"
              />
              <span className="text-sm font-semibold text-slate-700">Built By Carnegie Mellon Founders</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#75A6D4] via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why We Built Alaii
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The Story Of How We're Bringing Modern Technology And AI To Service Businesses
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Discovered */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">The Problem We Discovered</h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Our founder was working with dozens of service businesses—hair stylists, personal trainers, 
                spa owners, wellness coaches—and noticed the same frustration everywhere:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
                  <h3 className="text-xl font-bold text-slate-700 mb-3">Outdated Tools</h3>
                  <p className="text-slate-600">
                    Most booking systems felt like they were built in 2010. Clunky interfaces, 
                    slow performance, and mobile experiences that frustrated clients.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100">
                  <h3 className="text-xl font-bold text-slate-700 mb-3">Wildly Overpriced</h3>
                  <p className="text-slate-600">
                    Competitors charging $150/month or more for basic features. Small businesses 
                    paying thousands per year just to manage bookings and payments.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <h3 className="text-xl font-bold text-slate-700 mb-3">Zero Customization</h3>
                  <p className="text-slate-600">
                    Every business looked the same. No way to match your brand, stand out, 
                    or create a unique experience for your clients.
                  </p>
                </div>
              </div>

              <p className="text-lg">
                Business owners were stuck paying premium prices for mediocre software, while their 
                clients were frustrated with clunky booking experiences. Something had to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#75A6D4] to-purple-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">Our Vision: Technology That Actually Helps</h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                We realized that service businesses deserved better. They needed tools that were:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#75A6D4] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">Built With Modern Technology</h3>
                    <p className="text-slate-600">
                      Using the latest frameworks and best practices to create fast, beautiful, 
                      mobile-first experiences that clients actually enjoy using.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">Powered By AI</h3>
                    <p className="text-slate-600">
                      Leveraging artificial intelligence to automate scheduling, send smart reminders, 
                      handle customer inquiries, and reduce no-shows—saving business owners hours every week.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">Actually Affordable</h3>
                    <p className="text-slate-600">
                      Priced at 1/3 of competitors—$50/month instead of $150+. Our first 300 customers 
                      get locked in at just $10/month for life with code FOUNDING300.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">Fully Customizable</h3>
                    <p className="text-slate-600">
                      Every business gets their own branded experience. Custom colors, logos, layouts—
                      make it truly yours and stand out from the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carnegie Mellon Foundation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <img 
                  src={cmuLogo}
                  alt="Carnegie Mellon"
                  className="h-7 object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">Built On A Strong Foundation</h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Our founding team met at Carnegie Mellon University, one of the world's leading institutions 
                for computer science and artificial intelligence. We learned to build products that don't 
                just work—they work brilliantly.
              </p>

              <p className="text-lg">
                We combined that technical excellence with real-world understanding of service businesses 
                to create something special: a platform that brings enterprise-grade technology to 
                individual entrepreneurs at a price they can actually afford.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-medium text-slate-700">
                  "We're not just building software. We're democratizing access to world-class technology 
                  so every service professional can compete with the big guys—and win."
                </p>
                <p className="mt-4 text-slate-600 font-medium">— The Alaii Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Today */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">Our Mission Today</h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Every day, we're working to empower service businesses with tools that were previously 
                only available to large enterprises. We're proving that great software doesn't have to 
                cost a fortune.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#75A6D4] to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">For Service Pros</h3>
                  <p className="text-slate-600">
                    Hair stylists, trainers, coaches, and wellness professionals who deserve better tools
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Built To Scale</h3>
                  <p className="text-slate-600">
                    Whether you're solo or managing multiple locations, we grow with you
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">AI-Powered</h3>
                  <p className="text-slate-600">
                    Cutting-edge intelligence that saves you time and delights your clients
                  </p>
                </div>
              </div>

              <p className="text-lg">
                This is just the beginning. We're constantly shipping new features, listening to our 
                customers, and pushing the boundaries of what's possible for service businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#75A6D4] via-purple-400 to-pink-400 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Founding Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be one of the first 300 customers and lock in $10/month pricing for life. 
              Help us build the future of service business software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://web.alaii.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 rounded-full bg-white hover:bg-gray-50 text-[#75A6D4] font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2">
                  Build Your App
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm">
                <p className="text-white font-bold">Use Code: FOUNDING300</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}