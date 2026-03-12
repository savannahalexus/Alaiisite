import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const comparisonData = [
  { feature: "Monthly Cost", mindbody: "$159+", vagaro: "$25+", acuity: "$20+", alaii: "$29" },
  { feature: "Per-Booking Fees", mindbody: true, vagaro: true, acuity: false, alaii: false },
  { feature: "Custom Branding", mindbody: "Limited", vagaro: "Limited", acuity: false, alaii: "100% Yours" },
  { feature: "Own Your App", mindbody: false, vagaro: false, acuity: false, alaii: true },
  { feature: "AI Assistant", mindbody: false, vagaro: false, acuity: false, alaii: "Ali (Pro)" },
  { feature: "Instant Publish", mindbody: false, vagaro: false, acuity: "N/A", alaii: true },
  { feature: "Client Download Required", mindbody: true, vagaro: true, acuity: "N/A", alaii: false },
  { feature: "Embeddable Link", mindbody: "Limited", vagaro: "Limited", acuity: true, alaii: true },
  { feature: "Setup Time", mindbody: "Days", vagaro: "Hours", acuity: "Hours", alaii: "30 Seconds" }
];

const renderCell = (value: any, isAlaii: boolean = false) => {
  if (typeof value === 'boolean') {
    return value ? (
      <X className={`w-5 h-5 ${isAlaii ? 'text-[#F87171]' : 'text-[#808080]'} mx-auto`} />
    ) : (
      <Check className={`w-5 h-5 ${isAlaii ? 'text-[#4ADE80]' : 'text-[#808080]'} mx-auto`} />
    );
  }
  
  if (value === true || value === "100% Yours" || value === "Ali (Pro)" || value === "30 Seconds") {
    return (
      <div className={`flex items-center justify-center gap-2 ${isAlaii ? 'text-[#4ADE80]' : 'text-[#808080]'}`}>
        <Check className="w-5 h-5" />
        {typeof value === 'string' && <span className="text-sm font-medium">{value}</span>}
      </div>
    );
  }
  
  if (value === false || value === "Limited") {
    return (
      <div className={`flex items-center justify-center gap-2 ${isAlaii ? 'text-[#F87171]' : 'text-[#808080]'}`}>
        <X className="w-5 h-5" />
        {typeof value === 'string' && <span className="text-sm font-medium">{value}</span>}
      </div>
    );
  }
  
  return <span className={`text-sm font-medium ${isAlaii ? 'text-white' : 'text-[#C0C0C0]'}`}>{value}</span>;
};

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-[#222222]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why businesses are{' '}
            <span className="text-[#5BC4F7]">switching to Alaii.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto overflow-x-auto"
        >
          <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333333]">
                  <th className="text-left p-6 text-[#C0C0C0] font-bold text-sm uppercase tracking-wide">Feature</th>
                  <th className="p-6 text-center text-[#C0C0C0] font-bold text-sm uppercase tracking-wide">Mindbody</th>
                  <th className="p-6 text-center text-[#C0C0C0] font-bold text-sm uppercase tracking-wide">Vagaro</th>
                  <th className="p-6 text-center text-[#C0C0C0] font-bold text-sm uppercase tracking-wide">Acuity</th>
                  <th className="p-6 text-center bg-[#5BC4F7]/10 border-l-2 border-r-2 border-[#5BC4F7]">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[#5BC4F7] font-bold text-sm uppercase tracking-wide">Alaii</span>
                      <div className="w-2 h-2 rounded-full bg-[#5BC4F7] animate-pulse"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-[#333333] last:border-0 hover:bg-[#222222] transition-colors"
                  >
                    <td className="p-6 text-white font-medium">{row.feature}</td>
                    <td className="p-6 text-center">{renderCell(row.mindbody)}</td>
                    <td className="p-6 text-center">{renderCell(row.vagaro)}</td>
                    <td className="p-6 text-center">{renderCell(row.acuity)}</td>
                    <td className="p-6 text-center bg-[#5BC4F7]/5 border-l-2 border-r-2 border-[#5BC4F7]">
                      {renderCell(row.alaii, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}