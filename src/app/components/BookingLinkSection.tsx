import { Globe, Instagram, MessageSquare, QrCode, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';

const useCases = [
  {
    icon: Globe,
    title: "On Your Website",
    description: "Embed the booking widget. Clients book without leaving your page.",
    gradient: "from-[#5BC4F7] to-[#3DB4ED]"
  },
  {
    icon: Instagram,
    title: "In Your Bio",
    description: "Drop your link in Instagram, TikTok, anywhere. One tap to book.",
    gradient: "from-[#EC4899] to-[#DB2777]"
  },
  {
    icon: MessageSquare,
    title: "Via Text or Email",
    description: "Send your link. They pick a time and pay instantly.",
    gradient: "from-[#4ADE80] to-[#22C55E]"
  },
  {
    icon: QrCode,
    title: "QR Code",
    description: "Print it. Post it. Scan and book.",
    gradient: "from-[#C084FC] to-[#A855F7]"
  }
];

export function BookingLinkSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Clients don't download.{' '}
            <span className="text-[#5BC4F7]">They just book.</span>
          </h2>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Your Alaii booking link works everywhere — just like Acuity or Calendly, but fully branded to YOUR business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#222222] border border-[#333333] rounded-xl p-6 hover:border-[#5BC4F7] transition-all group"
              >
                <div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-[#C0C0C0] leading-relaxed">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Web Dashboard CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#222222] border border-[#333333] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5BC4F7] to-[#3DB4ED] flex items-center justify-center shadow-xl">
                <Monitor className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Plus: Full Web Dashboard
              </h3>
              <p className="text-[#C0C0C0] text-lg mb-6">
                Don't want to manage from mobile? Use the Alaii web dashboard from any browser.
              </p>
              <a 
                href="https://web.alaii.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-8 bg-[#5BC4F7] hover:bg-[#3DB4ED] text-white rounded-lg font-bold shadow-lg shadow-[#5BC4F7]/30 hover:shadow-[#5BC4F7]/50 transition-all hover:scale-105">
                  Open Web Dashboard →
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}