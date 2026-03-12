import { Smartphone, Users, Calendar, Package, CreditCard, Bot, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const features = [
  {
    icon: Smartphone,
    title: "Branded Mobile App",
    description: "100% your brand. Zero alaii branding on client-facing experience."
  },
  {
    icon: Users,
    title: "Membership Management",
    description: "Tiers, packages, and recurring billing automated."
  },
  {
    icon: Calendar,
    title: "Class Scheduling",
    description: "Real-time availability, instant bookings, automated reminders."
  },
  {
    icon: Package,
    title: "Program Delivery",
    description: "Workouts, nutrition plans, and progress tracking built-in."
  },
  {
    icon: CreditCard,
    title: "Subscriptions & Payments",
    description: "Stripe-powered. No per-booking fees. You keep what you earn."
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Automate upsells, retention, follow-ups, and revenue insights."
  }
];

export function SolutionSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const visibleFeatures = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleFeatures.push(features[(startIndex + i) % features.length]);
  }

  return (
    <section id="product" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Everything Your Fitness Business Needs.{' '}
            <span className="text-[#57B9FF]">One App.</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-8 hover:border-white/15 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#57B9FF]/20 to-[#57B9FF]/5 border border-[#57B9FF]/20 flex items-center justify-center mb-6 group-hover:from-[#57B9FF]/30 group-hover:to-[#57B9FF]/10 transition-all">
                  <Icon className="w-7 h-7 text-[#57B9FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex-1 overflow-hidden">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6"
              >
                {(() => {
                  const feature = features[startIndex];
                  const Icon = feature.icon;
                  return (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#57B9FF]/20 to-[#57B9FF]/5 border border-[#57B9FF]/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#57B9FF]" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{feature.description}</p>
                    </>
                  );
                })()}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  startIndex === index 
                    ? 'w-8 bg-[#57B9FF]' 
                    : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}