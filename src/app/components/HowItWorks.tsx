import { MessageSquare, Sparkles, ShieldCheck, Download } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Describe Your Business",
    description: "Tell Alaii what you need — booking for clients, memberships, payment processing. Just describe it in plain English.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Your App Goes Live Instantly",
    description: "Alaii generates your complete booking app with your branding. Ali (your AI assistant) starts learning your business to help automate everything.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Customize Everything",
    description: "Add your logo, colors, and domain. Get your unique invite code. Ali is now ready to text clients, launch campaigns, and grow your business automatically.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Ali Handles The Rest",
    description: "While clients book via link, widget, or the Alaii app — Ali auto-responds, sends win-back campaigns, and keeps your schedule full 24/7.",
    icon: Download,
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            From Idea To App In 4 Steps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 border-none group text-center flex flex-col items-center"
              >
                {/* Connector Line (Desktop only, except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-full h-[2px] bg-blue-100 left-1/2 z-0"></div>
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-[#75A6D4] text-white flex items-center justify-center mb-6 relative z-10 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#75A6D4] uppercase tracking-wider mb-2 block">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-[#75A6D4] leading-tight mb-3">{step.title}</h3>
                </div>
                
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}