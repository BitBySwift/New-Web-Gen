'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '@/types';
import { useAuthStore } from '@/store/authStore';
import { getFeatureIcon } from '@/utils/featureIcons';
import CountdownTimer from './CountdownTimer';
import AuthModal from './AuthModal';
import PaymentButton from './PaymentButton';

interface Props { course: Course; }

export default function CourseCard({ course }: Props) {
  const { isAuthenticated } = useAuthStore();
  const [authOpen, setAuthOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const discount = Math.round((1 - course.discountedPrice / course.originalPrice) * 100);
  const baseFeatures = course.features.slice(0, 5);
  const extraFeatures = course.features.slice(5);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="card-base flex flex-col h-full relative overflow-hidden"
      >
        {/* Limited time badge */}
        <div className="absolute top-4 right-4 z-10">
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md"
          >
            🔥 Limited Deal
          </motion.span>
        </div>

        <div className="flex flex-col h-full pt-6">
          {/* Badge & Title */}
          <div className="flex items-start space-x-2 mb-4">
            <span className="text-2xl">{course.badge}</span>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{course.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${course.color} text-white font-medium`}>
                {course.category}
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm mb-4">{course.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-3 flex-1">
            {baseFeatures.map((feature) => {
              const Icon = getFeatureIcon(feature);
              return (
                <li key={feature} className="flex items-start text-sm text-slate-200 font-medium space-x-2">
                  <Icon className="text-indigo-300 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              );
            })}
            <AnimatePresence initial={false}>
              {expanded && extraFeatures.map((feature) => {
                const Icon = getFeatureIcon(feature);
                return (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start text-sm text-slate-200 font-medium space-x-2"
                  >
                    <Icon className="text-indigo-300 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
          {extraFeatures.length > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="text-xs text-indigo-300 font-semibold mb-4 self-start hover:text-indigo-200 transition-colors"
            >
              {expanded ? 'Show fewer features' : `+${extraFeatures.length} more features`}
            </button>
          )}

          {/* Timer */}
          <div className="mb-4">
            <CountdownTimer />
          </div>

          {/* Pricing */}
          <div className="flex items-baseline space-x-2 mb-4" role="group" aria-label="Course pricing">
            <span className="text-2xl font-bold text-emerald-300 drop-shadow">
              <span className="sr-only">Discounted price </span>
              ₹{course.discountedPrice.toLocaleString()}
            </span>
            <span className="text-slate-500 line-through text-sm">
              <span className="sr-only">Original price </span>
              ₹{course.originalPrice.toLocaleString()}
            </span>
            <span className="text-emerald-400 text-xs font-medium">
              <span className="sr-only">Discount </span>
              {discount}% OFF
            </span>
          </div>

          {/* Disclaimer for Job Guaranteed */}
          {course.category === 'guaranteed' && (
            <p className="text-xs text-yellow-400/70 mb-3">* Pay after placement. T&amp;C apply.</p>
          )}

          {/* CTA */}
          {isAuthenticated ? (
            <PaymentButton course={course} />
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="button-primary w-full glow-effect"
            >
              Enroll Now
            </button>
          )}

          <Link href={`/courses/${course.slug}`} className="text-center text-indigo-400 text-sm mt-3 hover:text-indigo-300 transition-colors">
            View Details →
          </Link>
        </div>
      </motion.div>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
