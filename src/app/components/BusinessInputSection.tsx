import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import logo from 'figma:asset/5d44201d4f978fbc5bc255d0ffe24f03820c375f.png';
import { Button } from '@/app/components/ui/button';

const suggestions = [
  "I need a booking app for my salon",
  "I want a membership app for my studio",
  "I run a personal training business",
  "I need class scheduling for wellness",
];

export function BusinessInputSection() {
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="build"
      className="relative py-20 px-6 overflow-hidden bg-slate-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full max-w-xl"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-[#75A6D4] mb-6 leading-tight">Type to Build Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75A6D4] to-[#38BDF8]">Premium Mobile App</span></h2>
            
            <div
              className="w-full rounded-2xl p-6 shadow-xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: focused ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.5)',
                boxShadow: focused
                  ? '0 20px 40px -10px rgba(59,130,246,0.15)'
                  : '0 10px 30px -10px rgba(0,0,0,0.05)',
              }}
            >
              <label className="block text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                Tell us about your business
              </label>
              
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="I need a booking app for my pilates studio with class schedules and membership management..."
                    className="w-full bg-white/50 rounded-xl p-4 text-slate-800 placeholder-slate-400 outline-none resize-none border border-slate-200 focus:border-blue-400 focus:bg-white transition-all text-lg leading-relaxed h-32"
                  />
                  <div className="absolute bottom-3 right-3">
                    
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                 <a
                  href="https://web.alaii.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-[#75A6D4] hover:bg-[#38BDF8] text-white rounded-xl px-6 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Build It Instantly
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInputValue(s)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative flex justify-center items-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-sky-100 to-transparent rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

            {/* Phone Mockup */}
            <div className="relative w-[280px] md:w-[320px]">
              <div className="relative rounded-[3rem] overflow-hidden border-[8px] border-slate-800 bg-slate-800 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

                {/* Screen Content */}
                <div className="aspect-[9/19.5] bg-white relative overflow-hidden flex flex-col">
                  
                  {/* Status Bar */}
                  <div className="h-12 w-full flex justify-between items-end px-6 pb-2">
                    <span className="text-xs font-medium text-slate-900">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#75A6D4] text-lg">Pilates & Co.</h3>
                      <p className="text-xs text-slate-500">Welcome back, Sarah</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img src={logo} alt="Alaii business owner profile icon" className="w-full h-full object-cover p-1" />
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="mx-5 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-200 mb-6">
                    <p className="text-xs font-medium opacity-90 mb-1">Next Session</p>
                    <h4 className="font-bold text-lg mb-2">Reformer Flow</h4>
                    <div className="flex items-center gap-2 text-xs opacity-90">
                      <Calendar className="w-3 h-3" />
                      <span>Today, 5:00 PM</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="px-5 mb-6">
                    <h5 className="font-bold text-slate-900 text-sm mb-3">Quick Actions</h5>
                    <div className="grid grid-cols-4 gap-3">
                      {['Book', 'Passes', 'Schedule', 'Profile'].map((action, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                            <div className="w-5 h-5 bg-current rounded-full opacity-20"></div>
                          </div>
                          <span className="text-[10px] text-slate-500">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Classes */}
                  <div className="px-5 flex-1 overflow-y-auto">
                    <h5 className="font-bold text-slate-900 text-sm mb-3">Upcoming Classes</h5>
                    {[
                      { title: "Power Pilates", time: "Tomorrow, 9:00 AM", instructor: "with Jessica" },
                      { title: "Stretch & Tone", time: "Thu, 6:30 PM", instructor: "with Michael" },
                      { title: "Advanced Reformer", time: "Sat, 10:00 AM", instructor: "with Sarah" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 mb-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                          {item.title.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-slate-900 text-sm">{item.title}</h6>
                          <p className="text-[10px] text-slate-500">{item.time} • {item.instructor}</p>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-medium">
                          Book
                        </button>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
              
              {/* Floating Element */}
               <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -right-8 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Booking Confirmed</p>
                    <p className="text-[10px] text-slate-500">Just now</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}