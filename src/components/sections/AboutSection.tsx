'use client';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  {
    title: 'Sole Proprietor Led',
    description:
      'Placement Lab is currently a sole proprietorship, keeping decisions fast, personal, and focused on student outcomes.',
  },
  {
    title: 'Training + Placement Guidance',
    description:
      'We deliver job-ready training, resume polishing, interview practice, and structured placement guidance tailored to your goals.',
  },
  {
    title: 'Always Improving',
    description:
      'Going forward, we continue to expand mentorship, employer connections, and career resources to help more learners succeed.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Placement Lab is a training and placement guidance studio that helps learners move from
            confusion to confidence. We focus on practical skills, interview readiness, and
            real-world hiring expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-base"
            >
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
