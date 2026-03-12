import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    quote: "Was paying $450/month across Calendly, Mailchimp, and Square. Built my booking app with ALAII. Now I pay $10/month and keep 100% of booking fees.",
    author: "Sarah M.",
    role: "Gym Owner, Chicago",
    status: "Happy Customer",
    color: "bg-blue-50 border-blue-100 text-slate-600"
  },
  {
    quote: "Replaced 4 subscriptions with ALAII. Built customer ordering app and team scheduling app. No more processing fees eating my margins.",
    author: "Marcus T.",
    role: "Pilates Studio Owner, Austin",
    status: "Happy Customer",
    color: "bg-emerald-50 border-emerald-100 text-slate-600"
  },
  {
    quote: "Almost hired a developer for $15K. Built the same app in 8 minutes with Dal AI for $10/month. Clients love it.",
    author: "Jennifer L.",
    role: "Fitness Studio Owner, Miami",
    status: "Happy Customer",
    color: "bg-purple-50 border-purple-100 text-slate-600"
  }
];

export function RealUseCases() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            Real Businesses. <br />
            <span className="text-[#38BDF8]">Real Savings.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 relative group flex flex-col ${review.color}`}
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-lg font-medium leading-relaxed mb-8 flex-1">
                "{review.quote}"
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between border-t border-slate-200/50 pt-6">
                  <div>
                    <p className="font-bold text-[#75A6D4]">{review.author}</p>
                    <p className="text-sm opacity-75">{review.role}</p>
                  </div>
                </div>
                <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <p className="text-sm font-bold text-[#38BDF8]">
                    ✓ {review.status}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}