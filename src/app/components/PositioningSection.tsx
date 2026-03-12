import { Brain, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Brain,
    title: "AI Program Engine",
    description: "Auto-builds workouts based on goals, injuries, and frequency.",
    gradient: "from-[#00F0D4] to-[#4FB3FF]"
  },
  {
    icon: TrendingUp,
    title: "Predictive Engagement",
    description: "Flags churn risk before it happens.",
    gradient: "from-[#4FB3FF] to-[#9D7FFF]"
  },
  {
    icon: Zap,
    title: "Autonomous Operations",
    description: "Handles booking, payments, reminders, upsells.",
    gradient: "from-[#00F0D4] to-[#00D9B9]"
  }
];

export function PositioningSection() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F2937]/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            You Don't Need More Tools.{' '}
            <span className="text-[#00F0D4]">You Need Intelligence.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-panel rounded-3xl p-8 relative overflow-hidden group"
              >
                {/* Neon edge glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0D4] to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0D4] to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00F0D4] to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#00F0D4] to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Icon with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-[#00F0D4]/20`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[#A0A5B0] text-lg leading-relaxed">{feature.description}</p>

                {/* Animated UI mockup preview */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#12151A] to-[#0B0D10]">
                  <div className="h-48 p-4 space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="h-8 rounded-lg bg-white/5"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}