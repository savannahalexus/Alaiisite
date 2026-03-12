import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function PromoBanner() {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-[#75A6D4] via-[#38BDF8] to-[#BAE6FD]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Badge with Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider text-sm">Limited Time Offer</span>
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            First 300 Founding Members Get <br className="hidden md:block" />
            <span className="text-blue-50">$10/Month For Life</span>
          </motion.h2>

          {/* Subheadline with Pricing Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-blue-50 mb-6">
              That's <span className="font-bold text-white">80% Off</span> Our Regular Price & <span className="font-bold text-white">1/3 The Cost</span> Of Competitors
            </p>

            {/* Price Comparison Boxes */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto mb-8">
              {/* Regular Price - Crossed Out */}
              <div className="flex-1 w-full md:w-auto bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-400 transform -rotate-12"></div>
                <p className="text-sm text-blue-100 mb-1 relative z-10">Regular Price</p>
                <p className="text-4xl font-bold text-white relative z-10 line-through opacity-60">$50<span className="text-xl">/mo</span></p>
              </div>

              <ArrowRight className="w-8 h-8 text-white hidden md:block" />

              {/* Founding Member Price */}
              <div className="flex-1 w-full md:w-auto bg-white/20 backdrop-blur-md border-2 border-white/60 rounded-2xl p-6 shadow-2xl relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-2 right-2">
                  <div className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Locked In Forever
                  </div>
                </div>
                <p className="text-sm text-blue-50 mb-1">Founding Member</p>
                <p className="text-5xl font-bold text-white">$10<span className="text-2xl">/mo</span></p>
              </div>
            </div>
          </motion.div>

          {/* Promo Code Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-white text-lg mb-3 font-medium">Use Code At Checkout:</p>
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl border-4 border-dashed border-blue-100">
              <span className="text-3xl md:text-4xl font-bold text-[#75A6D4] tracking-wider font-mono">
                FOUNDING300
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <a 
              href="https://web.alaii.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-16 px-12 text-lg font-bold bg-white hover:bg-blue-50 text-[#75A6D4] rounded-2xl transition-all hover:scale-105 shadow-2xl">
                Claim Your Founding Member Spot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

            {/* Urgency Element */}
            <div className="flex items-center gap-2 text-blue-50">
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">
                Limited To First 300 Members Only • Lock In Your Price Now
              </span>
            </div>
          </motion.div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-50 font-medium"
          >
            {[
              "No Setup Fees",
              "Cancel Anytime",
              "Price Guaranteed For Life",
              "All Features Included"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}