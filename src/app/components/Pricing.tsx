import { Check, Sparkles, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';

const plans = [
  {
    name: "Founding Member",
    price: "$10",
    period: "/month",
    description: "First 300 members only. Lock in this price forever with FOUNDING300.",
    popular: true,
    features: [
      "Build unlimited apps",
      "Instant publishing",
      "Zero booking fees",
      "Zero transaction fees",
      "Unlimited clients",
      "Unlimited team users",
      "Ali AI Assistant included",
      "Priority support",
      "Add Ali Pro for +$19/mo"
    ],
    buttonText: "Claim Founding Price Now",
    highlight: true,
    badge: "80% OFF"
  }
];

const competitors = [
  { name: "Mindbody", price: "$159", fees: "Yes", branding: "No" },
  { name: "Vagaro", price: "$25", fees: "Yes", branding: "No" },
  { name: "Everfit", price: "$100", fees: "No", branding: "Partial" },
  { name: "Alaii", price: "$10", fees: "No", branding: "Yes", highlight: true, badge: "FOUNDING300" }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            Pricing That Actually <br />
            <span className="text-[#38BDF8]">Makes Sense</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto mb-20">
          {/* Main Founding Member Card */}
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-blue-500 shadow-2xl ring-4 ring-blue-500/10 flex flex-col w-full lg:w-96"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                Limited Time Only
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#75A6D4]">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-bold text-[#75A6D4]">{plan.price}</span>
                <span className="text-slate-500 ml-1">{plan.period}</span>
                <span className="ml-2 text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">Forever</span>
              </div>

              <a 
                href="https://web.alaii.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <Button 
                  className="w-full h-14 rounded-xl font-bold text-base transition-all bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {plan.buttonText}
                </Button>
              </a>

              <a 
                href="https://calendly.com/anthonye-alaii/quick_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <Button 
                  variant="outline"
                  className="w-full h-12 rounded-xl font-medium text-sm transition-all border-2 border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  Or Schedule a Demo
                </Button>
              </a>

              <div className="flex gap-2 mb-8">
                <a 
                  href="https://apps.apple.com/us/app/alaii/id6757349122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline"
                    className="w-full h-11 rounded-xl font-medium text-sm transition-all border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    App Store
                  </Button>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.dalai.app&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="outline"
                    className="w-full h-11 rounded-xl font-medium text-sm transition-all border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Google Play
                  </Button>
                </a>
              </div>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 text-blue-600">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* After 300 Members Callout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border-2 border-slate-300 shadow-lg w-full lg:w-80"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              After First 300
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-700">Standard Price</h3>
              <p className="text-sm text-slate-500 mt-2">Regular pricing for all new members</p>
            </div>

            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold text-slate-600">$50</span>
              <span className="text-slate-400 ml-1">/month</span>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-600 text-center">
                Don't miss out on <span className="font-bold text-[#75A6D4]">$40/month savings</span>
              </p>
            </div>

            <div className="space-y-3 opacity-70">
              <p className="text-xs text-slate-500 font-medium">Same features as Founding Members:</p>
              {["Unlimited apps", "Zero fees", "Unlimited clients", "All features included"].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <span className="text-xs text-slate-500">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ali Add-on Separate Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-lg text-purple-900">Ali Pro Add-On</h3>
            </div>
            <p className="text-purple-700 text-sm max-w-md">
              Add AI superpowers to any plan. Automated scheduling, client communication, smart recommendations, and follow-ups.
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
             <p className="text-2xl font-bold text-purple-900">+$19<span className="text-sm font-normal text-purple-600">/mo</span></p>
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 mb-20 text-center shadow-sm">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
             {["Cancel anytime", "No setup fees", "No per-booking charges", "No transaction fees"].map((item, i) => (
               <div key={i} className="flex items-center gap-2">
                 <Check className="w-5 h-5 text-green-500" />
                 <span className="font-medium text-slate-700">{item}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Competitor Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm mb-12">
          <div className="bg-slate-50 p-6 border-b border-slate-200 text-center">
             <h3 className="font-bold text-xl text-[#75A6D4]">Why Switch?</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-4 text-sm font-bold text-[#75A6D4] uppercase tracking-wider">Platform</th>
                  <th className="p-4 text-sm font-bold text-[#75A6D4] uppercase tracking-wider">Monthly Price</th>
                  <th className="p-4 text-sm font-bold text-[#75A6D4] uppercase tracking-wider">Booking Fees</th>
                  <th className="p-4 text-sm font-bold text-[#75A6D4] uppercase tracking-wider">White Label</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${comp.highlight ? 'bg-blue-50/30' : ''}`}>
                    <td className="p-4 font-bold text-[#75A6D4]">{comp.name}</td>
                    <td className="p-4 text-slate-600">{comp.price}/mo</td>
                    <td className="p-4">
                      {comp.fees === "No" ? (
                         <span className="inline-flex items-center gap-1 text-green-600 font-bold bg-green-100 px-2 py-1 rounded text-xs">
                           <Check className="w-3 h-3" /> None
                         </span>
                      ) : (
                         <span className="text-red-500 font-medium text-sm">Extra Fees</span>
                      )}
                    </td>
                    <td className="p-4">
                       {comp.branding === "Yes" ? (
                         <span className="inline-flex items-center gap-1 text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded text-xs">
                           <Check className="w-3 h-3" /> Yes
                         </span>
                      ) : (
                         <span className="text-slate-400 font-medium text-sm">{comp.branding}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Savings Callout */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-slate-600 italic">
            "Average business saves <span className="text-[#38BDF8] font-bold">$200 - $600/month</span> by switching to Alaii"
          </p>
        </div>

      </div>
    </section>
  );
}