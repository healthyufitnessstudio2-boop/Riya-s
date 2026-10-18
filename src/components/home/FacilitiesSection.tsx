import React from 'react';
import { motion } from 'framer-motion';
import { Building, CheckCircle2 } from 'lucide-react';
import { FACILITIES } from '../../data/physioData';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-14 sm:py-20 md:py-28 bg-white select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-50 text-hospital-700 border border-hospital-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <Building className="w-3.5 h-3.5" />
            Infrastructure &amp; Technology
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Advanced Clinical Facilities
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
            Equipped with modern spine decompression traction, Class-4 laser therapy, and dedicated functional rehabilitation gym.
          </p>
        </div>

        {/* 2-Column Mobile, 2/4-Column Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FACILITIES.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-hospital-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Facility Image Container */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold bg-white/90 text-hospital-800 shadow-sm backdrop-blur-sm">
                    {facility.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-hospital-600 transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 space-y-1.5 border-t border-slate-200/60 pt-3">
                    {facility.keyFeatures.map((feature: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
