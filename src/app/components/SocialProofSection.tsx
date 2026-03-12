import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote: "Replaced 3 platforms with alaii. $200/month down to $29. Clients love it.",
    author: "Marcus Chen",
    role: "Peak Performance Training"
  },
  {
    quote: "Built my studio app in 5 minutes. Members book instantly. Zero hassle.",
    author: "Sarah Miller",
    role: "Zen Flow Yoga"
  },
  {
    quote: "AI assistant handles follow-ups. Haven't lost a client in 3 months.",
    author: "James Rodriguez",
    role: "Iron Temple Boxing"
  }
];

export function SocialProofSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Built for Modern{' '}
            <span className="text-[#57B9FF]">Beauty, Fitness & Wellness Brands.</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
              <p className="text-4xl md:text-5xl font-bold text-white">$0</p>
            </div>
            <p className="text-[#A0A0A0]">Platform Fees</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#57B9FF] mb-2">+47%</p>
            <p className="text-[#A0A0A0]">Avg. Member Growth</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">5min</p>
            <p className="text-[#A0A0A0]">Setup Time</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-white/15 transition-all"
            >
              <div className="mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#57B9FF] to-[#3A9FE8] flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-white">{testimonial.author.charAt(0)}</span>
                </div>
                <p className="text-white leading-relaxed mb-4">"{testimonial.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                <p className="text-xs text-[#A0A0A0]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}