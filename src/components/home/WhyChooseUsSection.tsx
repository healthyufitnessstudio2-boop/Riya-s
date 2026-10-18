import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, HeartPulse, Building2, Clock, CheckCircle2, Zap, Award } from 'lucide-react';
import { CLINIC_INFO } from '../../data/physioData';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: "1-on-1 Dedicated Attention",
      desc: "Each consultation and rehabilitation session is conducted exclusively with our chief physiotherapist with zero shared slots.",
      gradient: "from-sky-500/20 to-blue-600/10",
      border: "border-sky-500/30"
    },
    {
      icon: Building2,
      title: "Advanced Modality Tech",
      desc: "Equipped with high-intensity Class-4 laser, digital spine decompression traction, and targeted IFT electrotherapy.",
      gradient: "from-teal-500/20 to-emerald-600/10",
      border: "border-teal-500/30"
    },
    {
      icon: Award,
      title: "Certified Ortho & Neuro Expert",
      desc: "Led by Dr. Alistair Wright, MPT in Musculoskeletal & Sports Rehab, with 12+ years of clinical excellence.",
      gradient: "from-purple-500/20 to-indigo-600/10",
      border: "border-purple-500/30"
    },
    {
      icon: HeartPulse,
      title: "Non-Surgical Pain Resolution",
      desc: "Focused on addressing root-cause biomechanical dysfunction to prevent surgery and eliminate dependence on painkillers.",
      gradient: "from-rose-500/20 to-red-600/10",
      border: "border-rose-500/30"
    }
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden select-none w-full">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-500/20 text-hospital-300 border border-hospital-400/30 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Clinical Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Patients Trust Siya's Physiotherapy
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Our clinical standard combines international manual therapy protocols with state-of-the-art healing technologies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`bg-gradient-to-b ${pillar.gradient} bg-slate-950/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border ${pillar.border} backdrop-blur-md shadow-lg text-left flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-400 mb-4 border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
