'use client';
import { motion } from 'framer-motion';

const FAQS = [
  {
    question: 'What does Placement Lab do?',
    answer:
      'We provide job-oriented training along with placement guidance like resume reviews, mock interviews, and hiring strategy.',
  },
  {
    question: 'Do you guarantee placement?',
    answer:
      'No. We guide you through the process and improve your readiness, but final outcomes depend on effort and market conditions.',
  },
  {
    question: 'Who can enroll?',
    answer:
      'Students, freshers, and working professionals who want structured guidance for interviews and career growth.',
  },
  {
    question: 'How does placement guidance work?',
    answer:
      'You get a roadmap, resume/LinkedIn feedback, interview practice, and access to curated job opportunities.',
  },
  {
    question: 'Can I get support after the course ends?',
    answer:
      'Yes. We keep placement guidance active for the duration promised in your plan, with continued check-ins and updates.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">Quick answers to common questions about our training.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base"
            >
              <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
