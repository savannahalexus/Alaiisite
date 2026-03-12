import { Button } from '@/app/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] bg-white">
      {/* Light Pastel Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-transparent rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#BAE6FD]/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] bg-[#75A6D4]/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#75A6D4] animate-pulse"></span>
          <span className="text-sm font-medium text-slate-600">First 300 Get $10/mo For Life • Use Code FOUNDING300</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#75A6D4] mb-6 leading-[1.1] text-[#8ca2c2] text-[#d0d0de]"
        >
          Build Your Booking & Payments App <br className="hidden md:block" />
          <span className="text-[#75A6D4]">
            For Beauty, Fitness & Wellness.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Create your branded booking and payments app instantly. <span className="font-semibold text-[#75A6D4]">Your AI assistant Ali texts clients back, launches marketing campaigns, and handles win-backs</span> — so you can focus on your craft while AI grows your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://web.alaii.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto h-14 px-10 text-lg font-bold bg-[#75A6D4] hover:bg-[#38BDF8] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Build Your App Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a 
              href="https://calendly.com/anthonye-alaii/quick_chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                className="w-full sm:w-auto h-14 px-10 text-lg font-bold bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Talk to a Real Person <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a 
              href="https://apps.apple.com/us/app/alaii/id6757349122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-12 px-6 text-sm font-medium border-slate-300 hover:bg-slate-50 text-slate-600 rounded-xl transition-all hover:scale-105">
                App Store
              </Button>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.dalai.app&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-12 px-6 text-sm font-medium border-slate-300 hover:bg-slate-50 text-slate-600 rounded-xl transition-all hover:scale-105">
                Google Play
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-6 text-sm text-slate-400"
        >
          Join 60+ businesses on our way to 300 founding members — growing fast!
        </motion.p>
      </div>
    </section>
  );
}