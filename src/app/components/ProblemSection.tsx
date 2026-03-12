import { DollarSign, Layers, Users } from 'lucide-react';
import { motion } from 'motion/react';

const problems = [
  {
    icon: DollarSign,
    title: "High platform fees",
    description: "Per-booking fees eating your revenue"
  },
  {
    icon: Layers,
    title: "Fragmented tools",
    description: "Juggling multiple disconnected systems"
  },
  {
    icon: Users,
    title: "No ownership of members",
    description: "Your clients belong to the platform"
  }
];

export function ProblemSection() {
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
            Stop Renting{' '}
            <span className="text-[#57B9FF]">Fitness Platforms.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-white/15 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-7 h-7 text-[#57B9FF]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                <p className="text-[#A0A0A0] text-lg leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
