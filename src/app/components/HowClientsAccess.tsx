import { motion } from 'motion/react';
import { Link2, Globe, Smartphone, Check } from 'lucide-react';

const accessMethods = [
  {
    icon: Link2,
    title: "Quick Link Booking",
    subtitle: "No Download Needed",
    features: [
      "Share via text or social",
      "Instant booking & payment",
      "Works on any device"
    ],
    color: "from-blue-400/20 to-blue-300/10"
  },
  {
    icon: Globe,
    title: "Website Widget",
    subtitle: "Embed On Your Site",
    features: [
      "Seamless site integration",
      "Book without leaving page",
      "Your domain, your brand"
    ],
    color: "from-purple-400/20 to-purple-300/10"
  },
  {
    icon: Smartphone,
    title: "Full App Experience",
    subtitle: "Download Alaii + Your Code",
    features: [
      "Real-time push notifications",
      "All your custom features",
      "Complete engagement tools"
    ],
    color: "from-[#75A6D4]/30 to-[#75A6D4]/10",
    premium: true
  }
];

export function HowClientsAccess() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(117,166,212,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-4">
            Your Clients Choose Their Experience
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-3">
            Give clients flexibility: quick booking via link/website, or the full experience via the Alaii app
          </p>
          <div className="inline-block bg-gradient-to-r from-[#75A6D4]/10 to-purple-100/50 border border-[#75A6D4]/20 rounded-full px-6 py-3">
            <p className="text-base font-bold text-[#75A6D4]">
              ✨ All 3 Access Methods Included — No Extra Charge
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accessMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-white rounded-3xl p-8 border ${
                  method.premium ? 'border-[#75A6D4]/30 shadow-xl shadow-[#75A6D4]/10' : 'border-slate-200'
                } hover:shadow-xl transition-all group`}
              >
                {/* Premium badge */}
                {method.premium && (
                  <div className="absolute top-4 right-4 bg-[#75A6D4] text-white text-xs font-bold px-3 py-1 rounded-full">
                    PREMIUM
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${method.premium ? 'text-[#75A6D4]' : 'text-slate-600'}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#75A6D4] mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 font-medium">
                  {method.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#75A6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-6 max-w-3xl mx-auto border border-[#75A6D4]/20 shadow-lg">
            <p className="text-slate-600 text-base mb-3">
              💡 <span className="font-semibold text-[#75A6D4]">Pro tip:</span> Start with quick link booking for convenience, 
              then encourage loyal clients to download the app for the full experience with notifications and custom features.
            </p>
            <p className="text-slate-500 text-sm">
              Link, widget, AND full app experience — all included. No hidden fees, no upgrades required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}