import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-16 text-white text-center shadow-2xl shadow-blue-600/30 overflow-hidden">
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent backdrop-blur-sm"></div>
          
          {/* Subtle orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl font-semibold mb-6">
              Ready To Build Your Booking App?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join businesses across beauty, fitness, and wellness using Alaii. Build your branded app — share a link, embed on your site, or clients use your invite code in the Alaii app for instant access.
            </p>
            
            <div className="max-w-md mx-auto">
              <a 
                href="https://web.alaii.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-5"
              >
                <Button className="w-full h-16 text-lg font-medium bg-white text-blue-600 hover:bg-blue-50 rounded-xl shadow-xl">
                  Start Building Free
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </a>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a 
                  href="https://apps.apple.com/us/app/alaii/id6757349122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full h-14 text-base font-medium border-white/30 hover:bg-white/10 text-white rounded-xl">
                    App Store
                  </Button>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.dalai.app&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full h-14 text-base font-medium border-white/30 hover:bg-white/10 text-white rounded-xl">
                    Google Play
                  </Button>
                </a>
              </div>
              
              <p className="text-blue-100 mt-5">
                No Credit Card Required • 5 Minutes To Build • Live Instantly
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-12 mt-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-semibold text-blue-600 mb-3">5min</div>
            <div className="text-slate-600">Build Time</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold text-blue-600 mb-3">$0</div>
            <div className="text-slate-600">To Start</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold text-blue-600 mb-3">100%</div>
            <div className="text-slate-600">Yours</div>
          </div>
        </div>
      </div>
    </div>
  );
}