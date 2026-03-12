import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Users, DollarSign, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const guides = [
  {
    slug: 'barber-200k-year-guide',
    title: 'How Barbers Hit $200k/Year: 7 Proven Strategies',
    description: 'The complete blueprint for barbershops and independent barbers to scale from average earnings to six-figure success.',
    industry: 'Barbers & Stylists',
    icon: '💈',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    slug: 'salon-six-figures-guide',
    title: 'Salon Owner\'s Guide to Six Figures',
    description: 'Transform your salon from surviving to thriving with proven systems that top beauty professionals use to hit $200k+.',
    industry: 'Beauty Professionals',
    icon: '💅',
    color: 'from-pink-400 to-rose-400',
  },
  {
    slug: 'personal-trainer-200k-blueprint',
    title: 'Personal Trainer Revenue Roadmap to $200k',
    description: 'Stop trading time for money. Scale your training business to six figures with systems that work while you sleep.',
    industry: 'Personal Trainers',
    icon: '💪',
    color: 'from-orange-400 to-amber-400',
  },
  {
    slug: 'yoga-studio-growth-guide',
    title: 'Yoga & Wellness Studio Success Blueprint',
    description: 'Build a sustainable six-figure wellness business without burning out or compromising your values.',
    industry: 'Wellness Instructors',
    icon: '🧘',
    color: 'from-green-400 to-emerald-400',
  },
  {
    slug: 'spa-owner-revenue-guide',
    title: 'Spa Owner\'s Path to $200k: Systems That Scale',
    description: 'Move from hands-on provider to business owner with proven strategies for spa and studio growth.',
    industry: 'Spa & Studio Owners',
    icon: '💆',
    color: 'from-purple-400 to-violet-400',
  },
  {
    slug: 'fitness-studio-profit-guide',
    title: 'Fitness Studio Profit Playbook: Reaching Six Figures',
    description: 'Turn your passion for fitness into a thriving business with strategies from studio owners already making $200k+.',
    industry: 'Fitness Studios',
    icon: '🏋️',
    color: 'from-red-400 to-pink-400',
  },
];

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Helmet>
        <title>Free Business Growth Guides for Service Professionals | alaii Resources</title>
        <meta name="description" content="Free guides to help barbers, salon owners, personal trainers, yoga studios, and wellness professionals build six-figure businesses. Proven strategies to reach $200k/year." />
        <meta name="keywords" content="barber business tips, salon revenue growth, personal trainer income guide, yoga studio profit, spa business success, fitness studio revenue, six figure service business, $200k year barber, salon owner tips, fitness business growth" />
        <link rel="canonical" href="https://alaii.app/resources" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75A6D4]/10 border border-[#75A6D4]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#75A6D4]" />
              <span className="text-sm font-medium text-[#75A6D4]">Free Business Growth Resources</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-700 mb-6 leading-tight">
              The $200k Blueprint For <br />
              <span className="text-[#75A6D4]">Beauty, Fitness & Wellness Pros</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Free, actionable guides to help you build a six-figure service business. No fluff. Just proven strategies from successful business owners who've been where you are.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-[#75A6D4]" />
                <h3 className="font-bold text-slate-700">Proven Strategies</h3>
              </div>
              <p className="text-sm text-slate-600">Used by 60+ businesses already hitting six figures</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-[#75A6D4]" />
                <h3 className="font-bold text-slate-700">Industry-Specific</h3>
              </div>
              <p className="text-sm text-slate-600">Tailored advice for your exact business type</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6 text-[#75A6D4]" />
                <h3 className="font-bold text-slate-700">Real Numbers</h3>
              </div>
              <p className="text-sm text-slate-600">Actual revenue data and growth metrics</p>
            </div>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link to={`/resources/${guide.slug}`}>
                  <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center text-3xl mb-4`}>
                      {guide.icon}
                    </div>

                    <span className="text-sm font-medium text-[#75A6D4] mb-2">{guide.industry}</span>
                    
                    <h3 className="text-xl font-bold text-slate-700 mb-3 group-hover:text-[#75A6D4] transition-colors">
                      {guide.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {guide.description}
                    </p>

                    <div className="flex items-center text-[#75A6D4] font-medium group-hover:gap-3 gap-2 transition-all">
                      Read Guide <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#75A6D4] to-[#38BDF8] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready To Put These Strategies Into Action?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Get the tools successful service businesses use: booking, payments, client management, and AI automation—all in one branded app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://web.alaii.app/" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-10 text-lg font-bold bg-white hover:bg-blue-50 text-[#75A6D4] rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              
              <a href="https://calendly.com/anthonye-alaii/quick_chat" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="h-14 px-10 text-lg font-bold border-2 border-white bg-transparent hover:bg-white/10 text-white rounded-2xl transition-all hover:scale-105 hover:border-white"
                >
                  Talk To A Real Person
                </Button>
              </a>
            </div>

            <p className="text-sm text-blue-50 mt-6">
              🎉 First 300 customers get $10/month for life with code <span className="font-bold">FOUNDING300</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}