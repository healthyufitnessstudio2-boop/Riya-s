import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { PATIENT_REVIEWS } from '../../data/physioData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 md:py-24 bg-white select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-50 text-hospital-700 border border-hospital-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Patient Testimonials
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Stories of Restored Mobility
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 leading-relaxed">
            Read authentic feedback from patients who overcame debilitating spine pain, joint stiffness, and sports injuries.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {PATIENT_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-hospital-300 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{review.testimonial}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {review.patientName}
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    {review.conditionTreated}
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {review.recoveryMilestone}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
