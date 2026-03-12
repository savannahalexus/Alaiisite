import { motion } from 'motion/react';
import { Sparkles, MessageSquare, TrendingUp, Zap, Users, Target } from 'lucide-react';

export function AISection() {
  const aiFeatures = [
    {
      icon: MessageSquare,
      title: "Auto-Responds To Clients",
      description: "Ali texts clients back instantly, answers questions, and handles booking inquiries 24/7"
    },
    {
      icon: Users,
      title: "Brings Back Lost Clients",
      description: "Smart win-back campaigns automatically re-engage clients who haven't booked in a while"
    },
    {
      icon: TrendingUp,
      title: "Launches Marketing Campaigns",
      description: "AI creates and sends targeted campaigns to fill your schedule and boost revenue"
    },
    {
      icon: Target,
      title: "Gets You More Clients",
      description: "Automated follow-ups, upsells, and retention strategies that work while you sleep"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#75A6D4]/5 via-purple-50/30 to-blue-50/20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(117,166,212,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#75A6D4]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#75A6D4]/20 to-purple-200/30 border border-[#75A6D4]/30 mb-6 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[#75A6D4] animate-pulse" />
            <span className="text-sm font-bold text-[#75A6D4]">MEET ALI — YOUR AI ASSISTANT</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#75A6D4]">
            AI For Service Businesses Is{' '}
            <span className="bg-gradient-to-r from-[#75A6D4] to-purple-400 bg-clip-text text-transparent">
              The Future
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-[#75A6D4]">More time for your craft. Less time on logistics.</span> Ali handles client communication, marketing campaigns, and growing your business — so you don't have to.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#75A6D4]/20 hover:border-[#75A6D4]/40 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75A6D4] to-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#75A6D4] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { label: "Client Retention", value: "+47%", icon: Users },
            { label: "Auto Campaigns", value: "24/7", icon: Zap },
            { label: "Response Time", value: "<1min", icon: MessageSquare },
            { label: "Extra Staff Needed", value: "$0", icon: Target }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-[#75A6D4]/20 shadow-lg hover:shadow-xl transition-all"
              >
                <Icon className="w-8 h-8 text-[#75A6D4] mx-auto mb-3" />
                <p className="text-4xl font-bold text-[#75A6D4] mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-[#75A6D4]/10 to-purple-100/30 rounded-3xl p-10 border border-[#75A6D4]/20"
        >
          <Sparkles className="w-12 h-12 text-[#75A6D4] mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-[#75A6D4] mb-3">
            Focus On What You Love. Let AI Handle The Rest.
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hiring. No training. No extra costs. Ali is included with your Alaii subscription and ready to grow your business from day one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}