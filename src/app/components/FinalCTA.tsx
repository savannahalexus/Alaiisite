import { Button } from '@/app/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-blue-400">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-300/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white"
        >
          We Are Growing Fast — Join 60+ Businesses <br />
          <span className="text-blue-50">
            On Our Way To 300 Founding Members
          </span>
        </motion.h2>

        {/* Promo Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 max-w-lg mx-auto"
        >
          <p className="text-blue-50 text-lg mb-2">
            🎉 <span className="font-bold text-white">Founding Members:</span> Lock in $10/month for life
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
            <span className="text-sm text-blue-50">Code:</span>
            <span className="text-xl font-bold text-white tracking-wider font-mono">FOUNDING300</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://web.alaii.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-16 px-12 text-lg font-bold bg-blue-100 hover:bg-white transition-all hover:scale-105 shadow-xl shadow-blue-500/20 rounded-2xl text-[#8b8b8b]">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

            <a 
              href="https://calendly.com/anthonye-alaii/quick_chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="h-16 px-12 text-lg font-bold border-2 border-white/50 hover:bg-white/10 text-white rounded-2xl transition-all hover:scale-105"
              >
                Or Talk to Us
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://apps.apple.com/us/app/alaii/id6757349122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-14 px-8 text-base font-medium border-white/50 hover:bg-white/10 text-white rounded-2xl transition-all hover:scale-105">
                App Store
              </Button>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.dalai.app&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-14 px-8 text-base font-medium border-white/50 hover:bg-white/10 text-white rounded-2xl transition-all hover:scale-105">
                Google Play
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-base font-medium text-blue-50">
            {["Free to start", "Live instantly", "Own it forever"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}