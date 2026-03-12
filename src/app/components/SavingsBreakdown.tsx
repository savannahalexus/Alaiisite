import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { TrendingDown, Check, X, ArrowRight } from 'lucide-react';

const comparison = [
  {
    category: "Monthly Subscription",
    competitors: "$150 - $300+",
    alaii: "$29",
    highlight: true
  },
  {
    category: "Transaction Fees",
    competitors: "2.9% + 30¢ + Booking Fee",
    alaii: "Standard Stripe Fees Only",
    highlight: false
  },
  {
    category: "Booking Fees",
    competitors: "$0.50 - $1.00 per booking",
    alaii: "$0",
    highlight: true
  },
  {
    category: "Branding",
    competitors: "Their Logo",
    alaii: "Your Logo",
    highlight: false
  }
];

export function SavingsBreakdown() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-bold text-[#75A6D4] mb-6">
              Stop Renting Your Business. <br />
              <span className="text-[#38BDF8]">Start Owning It.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The average fitness business wastes over $4,000 a year on disjointed software and booking fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* The Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-500 mb-6 uppercase tracking-wider">The "Standard" Stack</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 text-slate-400">
                  <span className="font-medium line-through">Mindbody / Vagaro</span>
                  <span className="font-bold line-through">$159/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 text-slate-400">
                  <span className="font-medium line-through">Mailchimp</span>
                  <span className="font-bold line-through">$30/mo</span>
                </div>
                 <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 text-slate-400">
                  <span className="font-medium line-through">Linktree</span>
                  <span className="font-bold line-through">$6/mo</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 text-slate-400">
                  <span className="font-medium line-through">Booking Fees</span>
                  <span className="font-bold line-through">~$100/mo</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                <span className="text-lg font-bold text-slate-500">Total Monthly Cost:</span>
                <span className="text-3xl font-bold text-red-500 line-through">$295+</span>
              </div>
            </motion.div>

            {/* The Alaii Way */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#75A6D4] rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white"
            >
              <div className="absolute top-0 right-0 p-4">
                 <div className="bg-white text-[#75A6D4] text-xs font-bold px-3 py-1 rounded-full">
                   BEST VALUE
                 </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">The Alaii Way</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="font-medium text-white">All-in-One Platform</span>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-white">Included</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="font-medium text-white">Booking Fees</span>
                   <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-white">$0</span>
                  </div>
                </div>
                 <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="font-medium text-white">Email Marketing</span>
                   <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-white">Included</span>
                  </div>
                </div>
                 <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="font-medium text-white">Custom Branding</span>
                   <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-white">Included</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <span className="text-lg font-bold text-blue-200">Total Monthly Cost:</span>
                <span className="text-4xl font-bold text-white">$29</span>
              </div>
            </motion.div>
          </div>

          {/* Savings Callout */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center"
          >
            <p className="text-xl text-blue-900 font-medium">
              Average business saves <span className="font-bold text-blue-600">$200 - $600/month</span> by switching to Alaii.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
