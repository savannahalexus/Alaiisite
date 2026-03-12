import { motion } from 'motion/react';

export function SocialProofBar() {
  // Mock app data - replace with real data when available
  const apps = [
    { name: "Peak Performance Studio", type: "Fitness" },
    { name: "Zen Flow Yoga", type: "Yoga" },
    { name: "Iron Temple Boxing", type: "Boxing" },
    { name: "Core Pilates", type: "Pilates" },
    { name: "Wellness Haven", type: "Wellness" },
    { name: "Studio Fit", type: "Gym" },
    { name: "Elite Training", type: "Training" },
    { name: "Mindful Movement", type: "Yoga" },
  ];

  // Duplicate for seamless loop
  const duplicatedApps = [...apps, ...apps];

  return (
    <section className="py-16 bg-[#181818] border-y border-[#333333] overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-[#C0C0C0] text-sm font-medium mb-8 uppercase tracking-wide">
          Businesses building with Alaii
        </p>
      </div>
      
      <div className="relative">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: [0, -50 * apps.length]
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {duplicatedApps.map((app, index) => (
            <div 
              key={index}
              className="flex-shrink-0 bg-[#222222] border border-[#333333] rounded-lg px-6 py-4 min-w-[250px] hover:border-[#5BC4F7] transition-colors"
            >
              <p className="text-white font-medium mb-1">{app.name}</p>
              <p className="text-[#808080] text-sm">{app.type}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Fade out edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#181818] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#181818] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
