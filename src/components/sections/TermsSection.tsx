'use client';
import { motion } from 'framer-motion';

const TERMS = [
  'Placement Lab is a sole proprietorship providing training and placement guidance services.',
  'Enrollment provides access to learning materials, mentorship, and guidance as described in your plan.',
  'We do not guarantee job placement. Results depend on individual effort, skills, and market conditions.',
  'Payments are due as listed. Refunds or cancellations follow the policy stated during purchase.',
  'Course content is for personal use only and may not be redistributed without permission.',
  'Schedules for live sessions may change with advance notice to keep delivery quality high.',
  'We may update these terms as we grow. Continued use means acceptance of the latest version.',
];

export default function TermsSection() {
  return (
    <section id="terms" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            These terms outline how Placement Lab operates and what you can expect from our training
            and placement guidance services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-base"
        >
          <ul className="space-y-3 text-slate-400 text-sm">
            {TERMS.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
