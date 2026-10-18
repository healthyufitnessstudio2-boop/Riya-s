import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Award, Clock } from 'lucide-react';
import { CLINIC_STATS } from '../../data/physioData';
import { AnimatedCounter } from '../common/AnimatedCounter';

const icons = [Activity, ShieldCheck, Award, Clock];

export const HospitalStats: React.FC = () => {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 w-full px-3 sm:px-6 lg:px-10 select-none">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-3 sm:p-5 md:p-6">
        {/* 2x2 Grid on Mobile, 4 Columns in One Single Row on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 divide-y-0 sm:divide-y-0 sm:divide-x divide-slate-100">
          {CLINIC_STATS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-0 ${
                  idx > 0 ? "sm:pl-4 md:pl-6" : ""
                }`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-hospital-50 text-hospital-600 flex items-center justify-center shrink-0 shadow-inner mt-0.5 sm:mt-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left min-w-0 flex-1 space-y-0.5">
                  <div className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10.5px] sm:text-xs font-bold text-hospital-700 leading-tight truncate">
                    {stat.label}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 leading-tight truncate">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
