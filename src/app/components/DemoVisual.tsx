import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const apps = [
  {
    name: "Peak Cycling Studio",
    type: "Cycling Studio",
    colors: { primary: "#1A1A1A", accent: "#00FF94" },
    description: "Dark, neon accents"
  },
  {
    name: "Elite Performance",
    type: "Personal Training",
    colors: { primary: "#FFFFFF", accent: "#FF6B35" },
    description: "Clean, athletic"
  },
  {
    name: "Zen Flow Yoga",
    type: "Yoga Studio",
    colors: { primary: "#F5F1E8", accent: "#8B7355" },
    description: "Earthy, calm"
  },
  {
    name: "Iron Temple Boxing",
    type: "Boxing Gym",
    colors: { primary: "#000000", accent: "#FF0000" },
    description: "Bold, aggressive"
  },
  {
    name: "Core Pilates",
    type: "Pilates Studio",
    colors: { primary: "#FAFAFA", accent: "#D4A574" },
    description: "Minimal, elegant"
  },
  {
    name: "Wellness Haven",
    type: "Wellness Retreat",
    colors: { primary: "#E8F4F1", accent: "#2D6A4F" },
    description: "Luxury, organic"
  }
];

export function DemoVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % apps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % apps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + apps.length) % apps.length);
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#222222] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Your brand.{' '}
            <span className="text-[#5BC4F7]">Your app.</span>
          </h2>
          <p className="text-xl text-[#C0C0C0]">
            Every app is 100% custom-branded. Here's what others have built.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={prevSlide}
                className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#333333] text-white hover:border-[#5BC4F7] hover:text-[#5BC4F7] transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-md">
                {apps.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: currentIndex === index ? 1 : 0,
                      scale: currentIndex === index ? 1 : 0.8,
                      x: currentIndex === index ? 0 : index > currentIndex ? 100 : -100
                    }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      currentIndex === index ? 'relative z-10' : 'absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="bg-[#1A1A1A] border-2 border-[#333333] rounded-3xl p-8 shadow-2xl">
                      {/* App Preview Card */}
                      <div 
                        className="rounded-2xl p-8 mb-6 aspect-[9/16] flex flex-col justify-between shadow-xl"
                        style={{ backgroundColor: app.colors.primary }}
                      >
                        <div>
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                            style={{ backgroundColor: app.colors.accent }}
                          >
                            <span className="text-2xl font-bold" style={{ color: app.colors.primary }}>
                              {app.name.charAt(0)}
                            </span>
                          </div>
                          <h3 
                            className="text-2xl font-bold mb-2"
                            style={{ color: app.colors.primary === '#FFFFFF' || app.colors.primary === '#FAFAFA' || app.colors.primary === '#F5F1E8' || app.colors.primary === '#E8F4F1' ? '#1A1A1A' : app.colors.accent }}
                          >
                            {app.name}
                          </h3>
                          <p 
                            className="text-sm opacity-70"
                            style={{ color: app.colors.primary === '#FFFFFF' || app.colors.primary === '#FAFAFA' || app.colors.primary === '#F5F1E8' || app.colors.primary === '#E8F4F1' ? '#666666' : '#CCCCCC' }}
                          >
                            {app.type}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div 
                            className="h-12 rounded-lg flex items-center justify-center font-bold shadow-md"
                            style={{ backgroundColor: app.colors.accent, color: '#FFFFFF' }}
                          >
                            Book Now
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div 
                                key={i}
                                className="h-20 rounded-lg"
                                style={{ 
                                  backgroundColor: app.colors.primary === '#FFFFFF' || app.colors.primary === '#FAFAFA' || app.colors.primary === '#F5F1E8' || app.colors.primary === '#E8F4F1' ? '#F0F0F0' : '#00000020'
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* App Info */}
                      <div className="text-center">
                        <p className="text-[#C0C0C0] text-sm mb-1">{app.description}</p>
                        <p className="text-[#5BC4F7] text-xs font-bold uppercase tracking-wide">
                          Built in 30 seconds with Alaii
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-[#1A1A1A] border border-[#333333] text-white hover:border-[#5BC4F7] hover:text-[#5BC4F7] transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {apps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'w-8 bg-[#5BC4F7]' 
                      : 'w-2 bg-[#333333] hover:bg-[#5BC4F7]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
