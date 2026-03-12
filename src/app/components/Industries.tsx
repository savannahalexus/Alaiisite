import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const businesses = [
  {
    title: "Hair Stylists & Barbers",
    description: "Seamless booking & payments for your clients. Appointment scheduling. Style galleries. Automated reminders. Your salon business in one app.",
    image: "https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE4MTI5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/salon",
    altText: "Modern luxury hair salon interior with styling chairs for hair stylists and barbers booking app"
  },
  {
    title: "Beauty Professionals",
    description: "Perfect for estheticians, lash techs, and beauty specialists. Client management, service booking, and product sales all in one elegant platform.",
    image: "https://images.unsplash.com/photo-1769034260387-39fa07f0c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNoJTIwZXh0ZW5zaW9uJTIwYmVhdXR5JTIwc2Fsb258ZW58MXx8fHwxNzcxODEyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/beauty",
    altText: "Lash extension beauty salon treatment with esthetician booking software and client management"
  },
  {
    title: "Personal Trainers",
    description: "Instant booking & payments app for your clients. Session scheduling. Progress tracking. Automated reminders. Your training business in one app.",
    image: "https://images.unsplash.com/photo-1738523686534-7055df5858d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBneW0lMjBzZXNzaW9ufGVufDF8fHx8MTc3MTgxMjkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/trainers",
    altText: "Personal trainer gym session with client progress tracking and fitness scheduling app"
  },
  {
    title: "Wellness Instructors",
    description: "Connect with students. Manage classes and workshops seamlessly. Build your community with integrated tools designed for wellness professionals.",
    image: "https://images.unsplash.com/photo-1761971975047-6426232852ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBzdHVkaW8lMjBicmlnaHR8ZW58MXx8fHwxNzcxODEyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/wellness",
    altText: "Bright yoga wellness studio for instructors with class scheduling and community management platform"
  },
  {
    title: "Spa & Studio Owners",
    description: "Streamline operations for your boutique spa or studio. Treatment scheduling, staff management, and membership handling in one elegant platform.",
    image: "https://images.unsplash.com/photo-1665231795856-769fb08a90bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3RoZXRpY2lhbiUyMHNwYSUyMHRyZWF0bWVudCUyMHJvb218ZW58MXx8fHwxNzcxODEyOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/spa",
    altText: "Spa treatment room for estheticians with spa management software and appointment booking"
  },
  {
    title: "Fitness Clubs",
    description: "Enterprise-grade management for fitness clubs. Member portals, facility scheduling, and comprehensive analytics to grow your business.",
    image: "https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmaXRuZXNzJTIwY2x1YiUyMGd5bSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTU0MzMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/for/clubs",
    altText: "Luxury fitness club gym interior with member management and facility scheduling system"
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-sky-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            Built For The Businesses Building <br />
            <span className="text-[#75A6D4]">
              The Future.
            </span>
          </h2>
          {/* Note: The user requested "Built for the businesses building the future." style. The text color in the image provided is light blue. */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={business.image} 
                  alt={business.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Heavy Blue Gradient Overlay similar to the provided image */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-500/40 to-blue-400/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-x-6 bottom-8 top-[40%] flex flex-col justify-end">
                <div className="relative z-10">
                  <h3 className="font-bold text-white mb-3 text-xl leading-tight">
                    {business.title}
                  </h3>
                  <p className="text-blue-50 leading-relaxed font-medium text-sm opacity-90">
                    {business.description}
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