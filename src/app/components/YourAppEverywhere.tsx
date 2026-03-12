import { motion } from 'motion/react';
import { Globe, Instagram, Smartphone, QrCode } from 'lucide-react';

const channels = [
  {
    icon: Globe,
    title: "Your Website",
    description: "Embed booking widget directly on your site"
  },
  {
    icon: Instagram,
    title: "Social Bio",
    description: "One tap from Instagram, TikTok, anywhere"
  },
  {
    icon: Smartphone,
    title: "Native App",
    description: "Full iOS app with your branding"
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description: "Print and post — instant bookings"
  }
];

export function YourAppEverywhere() {
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
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Your App.{' '}
            <span className="text-[#57B9FF]">Everywhere.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Clients book from your website, social links, or native app. No download required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#57B9FF]/20 to-[#57B9FF]/5 border border-[#57B9FF]/20 flex items-center justify-center mb-4 mx-auto group-hover:from-[#57B9FF]/30 group-hover:to-[#57B9FF]/10 transition-all">
                  <Icon className="w-7 h-7 text-[#57B9FF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                <p className="text-[#A0A0A0] text-sm">{channel.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}