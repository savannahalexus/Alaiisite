import { motion } from 'motion/react';
import { useState } from 'react';

const industries = [
  {
    name: "Salon & Spa Owners",
    description: "Launch your booking platform. Manage clients, appointments, and payments from one branded app.",
    image: "salon"
  },
  {
    name: "Personal Trainers",
    description: "Coaching platform for client management, programs, and bookings from one branded app.",
    image: "personal-trainer"
  },
  {
    name: "Boutique Studios",
    description: "Class scheduling, membership tiers, and payments automated. Own your member data.",
    image: "studio"
  },
  {
    name: "Wellness Practitioners",
    description: "Meditation, yoga, therapy, recovery — manage bookings and subscriptions effortlessly.",
    image: "wellness"
  }
];

export function GameChangersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Built for the{' '}
            <span className="text-[#57B9FF]">gamechangers</span>{' '}
            of beauty, fitness & wellness.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              className="group relative"
            >
              {/* Glass card with gradient fade */}
              <div className="glass rounded-3xl p-8 h-full hover:border-white/20 transition-all overflow-hidden">
                {/* Gradient fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* iPhone mockup placeholder */}
                <div className="relative mb-6 h-64 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Phone bezel */}
                  <div className="w-40 h-56 rounded-[2rem] border-4 border-[#1F1F1F] bg-[#0A0A0A] shadow-2xl flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-[#57B9FF]/10 to-transparent rounded-[1.5rem] flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#57B9FF] to-[#3A9FE8] flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{industry.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#57B9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#57B9FF] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed group-hover:text-white/80 transition-colors">
                    {industry.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}