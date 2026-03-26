import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { motion } from 'motion/react';

const faqs = [
  {
    question: "Do my clients need to download the app?",
    answer: "No, your app can be integrated into your current website, you can share your link to the webpage, or they can use the web-app so you can maintain your platform."
  },
  {
    question: "Do I need technical skills?",
    answer: "No. If you can text, you can build apps with ALAII."
  },
  {
    question: "How long does it really take?",
    answer: "Seconds to minutes. Most of that is you describing what you want."
  },
  {
    question: "Do you take booking fees or transaction fees?",
    answer: "Never. You keep 100% of everything you earn. Zero fees. Ever."
  },
  {
    question: "What if I want to make changes later?",
    answer: "Unlimited changes anytime. Just tell Alaii what you want updated. No extra charges."
  },
  {
    question: "How do my customers download it?",
    answer: "You get a QR code and link. They scan/click and install. No app store needed. Instant."
  },
  {
    question: "What happens after the founding member period?",
    answer: "You're locked in at $10/month forever as a founding member. New customers after you pay $14/month."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts. Cancel anytime. Your apps stay live for 30 days after cancellation."
  },
  {
    question: "What's included in ALI Growth?",
    answer: "ALI is your AI Growth Agent — it handles client communication, creates marketing content, sends automated follow-ups, fills empty slots, and gives you smart business insights. Included at $14/month."
  }
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#75A6D4] mb-6 leading-tight">
            Questions? <br />
            <span className="text-[#38BDF8]">We Got You.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl px-6 data-[state=open]:border-[#75A6D4] data-[state=open]:ring-2 data-[state=open]:ring-blue-100 transition-all hover:shadow-md"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-[#75A6D4] hover:text-[#38BDF8] py-6 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}