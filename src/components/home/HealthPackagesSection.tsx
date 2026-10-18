import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { REHAB_PACKAGES } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';

export const HealthPackagesSection: React.FC = () => {
  const { openAppointment } = useModal();

  return (
    <section id="packages" className="py-14 sm:py-20 md:py-24 bg-slate-50/70 select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-50 text-hospital-700 border border-hospital-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-hospital-600" />
            Targeted Rehabilitation Regimens
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Recovery Packages
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 leading-relaxed">
            Personalized clinical rehabilitation programs formulated for lasting pain reduction and functional joint restoration.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REHAB_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between text-left relative group ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#0B192C] to-slate-900 text-white shadow-xl shadow-sky-950/20 border-2 border-sky-400/50'
                  : 'bg-white text-slate-900 shadow-sm hover:shadow-xl border border-slate-200/90'
              }`}
            >
              {pkg.badgeText && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-sky-400 to-hospital-500 text-white'
                      : 'bg-hospital-100 text-hospital-800 border border-hospital-300'
                  }`}>
                    {pkg.badgeText}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  {pkg.name}
                </h3>
                <p className={`text-xs mt-1 ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {pkg.targetAudience}
                </p>

                {/* Price */}
                <div className="my-4 pb-4 border-b border-slate-200/20">
                  <span className="text-2xl sm:text-3xl font-black">
                    {pkg.price}
                  </span>
                  <span className={`text-xs block mt-0.5 ${pkg.popular ? 'text-sky-300' : 'text-hospital-600 font-bold'}`}>
                    {pkg.sessionsCount} ({pkg.duration})
                  </span>
                </div>

                {/* Inclusions */}
                <ul className="space-y-2 text-xs">
                  {pkg.keyInclusions.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        pkg.popular ? 'text-sky-400' : 'text-emerald-500'
                      }`} />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/20">
                <button
                  onClick={() => openAppointment(undefined, undefined, pkg.name)}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-hospital-500 to-sky-400 text-white hover:opacity-95 shadow-sky-600/30'
                      : 'bg-hospital-50 text-hospital-700 hover:bg-hospital-600 hover:text-white border border-hospital-200'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
