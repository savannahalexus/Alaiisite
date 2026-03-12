import { 
  Rocket, 
  Palette, 
  Wallet, 
  Zap, 
  Settings, 
  Smartphone,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Rocket,
    title: "Three Ways Clients Access Your App",
    description: "Share a PWA link via text or social, embed directly into your website as a booking widget, or clients download Alaii and use your invite code for instant access. All synced in real time.",
    color: "text-blue-500 bg-blue-50"
  },
  {
    icon: Palette,
    title: "Complete Booking & Payments",
    description: "Clients browse services, book appointments, and pay instantly from your app. Built-in scheduling, reminders, and payment processing.",
    color: "text-purple-500 bg-purple-50"
  },
  {
    icon: Wallet,
    title: "Industry-Specific Features",
    description: "Fitness tracking for gyms, recurring appointments for salons, async video feedback for coaches. Your app adapts to your business needs.",
    color: "text-green-500 bg-green-50"
  },
  {
    icon: Zap,
    title: "Ali: Your Built-In AI Assistant",
    description: "Texts clients back instantly, launches marketing campaigns, sends win-back messages to lost clients, and grows your business automatically. No extra cost, no hiring needed.",
    color: "text-amber-500 bg-amber-50"
  },
  {
    icon: Settings,
    title: "100% Your Brand",
    description: "Your logo. Your colors. Your domain. Your invite code. Fully white-labeled whether clients find you through a link, your website, or the Alaii app.",
    color: "text-indigo-500 bg-indigo-50"
  },
  {
    icon: Smartphone,
    title: "Zero Transaction Fees",
    description: "Keep 100% of what you earn through your app. No booking fees, no per-user charges, no hidden costs. Just flat monthly pricing.",
    color: "text-rose-500 bg-rose-50"
  }
];

export function WhatYouGet() {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
            For Beauty, Fitness & Wellness Professionals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            Everything You Need. <br />
            <span className="text-[#75A6D4]/60">Nothing You Don't.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Instant booking & payments app for your clients. Session scheduling. Client tracking. Automated reminders. Your entire business in one app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div 
                  className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#75A6D4] mb-3 group-hover:text-blue-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}