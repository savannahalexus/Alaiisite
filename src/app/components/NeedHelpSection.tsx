import { Button } from '@/app/components/ui/button';
import { MessageCircle, Calendar, Phone } from 'lucide-react';

export function NeedHelpSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#75A6D4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-700">
            Not Sure Where To Start?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We get it — your business is unique. Let's have a quick, no-pressure conversation about how alaii can work for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Quick Call */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#75A6D4]/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#75A6D4]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-700">15-Minute Call</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Quick chat to see if alaii fits your business
            </p>
          </div>

          {/* Screen Share */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#75A6D4]/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#75A6D4]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-700">Live Walkthrough</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We'll show you exactly how it works for your industry
            </p>
          </div>

          {/* Setup Help */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-[#75A6D4]/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#75A6D4]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-700">Setup Assistance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We'll help you get everything configured perfectly
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://calendly.com/anthonye-alaii/quick_chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-14 px-10 text-lg font-bold bg-[#75A6D4] hover:bg-[#38BDF8] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Schedule a Quick Chat
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-500">
            No sales pitch. Just real answers from people who actually built this.
          </p>
        </div>
      </div>
    </section>
  );
}