import { motion } from 'motion/react';
import { Bell, TrendingUp, MessageCircle, Target, Calendar, Heart } from 'lucide-react';
import { Button } from './ui/button';

const benefits = [
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Clients never miss appointments with real-time reminders"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Fitness clients see their journey and stay motivated"
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Stay connected with secure in-app communication"
  },
  {
    icon: Target,
    title: "Personalized Dashboard",
    description: "Each client gets their own branded experience"
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Automatic booking reminders reduce no-shows"
  },
  {
    icon: Heart,
    title: "Loyalty Features",
    description: "Build deeper relationships with ongoing engagement"
  }
];

export function WhyClientsDownload() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#75A6D4]/10 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(117,166,212,0.15),transparent_60%)]"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#75A6D4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
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
            className="inline-block mb-4"
          >
            <span className="bg-[#75A6D4] text-white text-sm font-bold px-4 py-2 rounded-full">
              INCLUDED AT NO EXTRA COST
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#75A6D4] mb-6">
            Why Your Clients Should Download Alaii
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The app unlocks the complete experience with notifications, tracking, and features that keep clients engaged and coming back — all included in your subscription
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-[#75A6D4]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75A6D4]/20 to-[#75A6D4]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#75A6D4]" />
                </div>
                <h3 className="text-lg font-bold text-[#75A6D4] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-3xl p-10 max-w-4xl mx-auto border border-[#75A6D4]/20 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#75A6D4] mb-4">
            Build Your Business. Give Clients The Full Experience.
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Start building your app now. Your clients will love the complete experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://web.alaii.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-14 px-8 font-semibold bg-[#75A6D4] hover:bg-[#5a8cb8] text-white rounded-full transition-all hover:scale-105 shadow-lg text-base">
                Build Your App Free
              </Button>
            </a>
            
            <a 
              href="https://apps.apple.com/us/app/alaii/id6757349122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-14 px-6 font-medium border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full transition-all hover:scale-105 text-base">
                App Store
              </Button>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.dalai.app&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-14 px-6 font-medium border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full transition-all hover:scale-105 text-base">
                Google Play
              </Button>
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            First 300 customers: <span className="font-bold text-[#75A6D4]">$10/month for life</span> with code <span className="font-mono font-bold">FOUNDING300</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}