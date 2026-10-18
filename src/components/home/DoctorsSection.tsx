import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, User, Calendar, Stethoscope, Building2, Users, Bed, Clock
} from 'lucide-react';
import { LEAD_DOCTOR } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const DoctorsSection: React.FC = () => {
  const { openDoctorProfile, openAppointment } = useModal();

  const statsData = [
    {
      value: "1,500+",
      title: "Patients Rehabilitated",
      subtitle: "Specialised physical therapy",
      icon: Users
    },
    {
      value: "98.4%",
      title: "Success Rate",
      subtitle: "Relief without surgery",
      icon: Building2
    },
    {
      value: "12+ Yrs",
      title: "Clinical Experience",
      subtitle: "Certified Ortho & Sports",
      icon: Bed
    },
    {
      value: "100%",
      title: "1-on-1 Sessions",
      subtitle: "Dedicated individual focus",
      icon: Clock
    }
  ];

  return (
    <section 
      id="specialist" 
      className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#07132B] via-[#050B18] to-[#030712] text-white relative overflow-hidden select-none w-full"
    >
      {/* Dynamic Atmospheric Multi-color Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-sky-600/20 via-blue-600/15 to-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          {/* Glowing Top Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-hospital-500/20 text-hospital-300 border border-hospital-400/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_15px_rgba(0,210,255,0.25)]">
            <Star className="w-3.5 h-3.5 fill-hospital-400 text-hospital-400" />
            <span>OUR EXPERTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-white">Consultant </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-hospital-300 to-blue-400">
              Specialist
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 font-normal">
            Experienced physical therapy professional dedicated to your better health
          </p>
        </div>

        {/* Doctor Card: Exact CityCare Card Structure */}
        <div className="relative w-full flex items-center justify-center my-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(0, 210, 255, 0.4), inset 0 1px 2px rgba(255,255,255,0.25)'
            }}
            className="relative w-[85vw] max-w-[340px] sm:max-w-[380px] md:max-w-[420px] h-[510px] sm:h-[550px] md:h-[580px] rounded-[28px] overflow-hidden flex flex-col justify-end backdrop-blur-xl bg-[#0E1D38]/50 border border-white/30 text-left select-none group"
          >
            {/* Frosted Glass Ambient Lighting */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-45 z-0" 
              style={{ 
                background: 'radial-gradient(circle at 50% 30%, rgba(0, 210, 255, 0.3) 0%, transparent 70%)' 
              }} 
            />

            {/* Top Subtle Frosted Glass Reflection Highlight */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/15 to-transparent pointer-events-none z-1" />

            {/* Doctor Photo */}
            <div className="absolute inset-x-0 top-0 bottom-24 flex items-end justify-center z-5 pointer-events-none overflow-hidden">
              <img
                src={LEAD_DOCTOR.photo}
                alt={LEAD_DOCTOR.name}
                className="w-full h-full object-cover object-top select-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Targeted Readability Dark Gradient (Ensures High Contrast for Text & Buttons) */}
            <div 
              className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(5,12,28,0.3) 30%, rgba(5,12,28,0.85) 65%, rgba(5,12,28,0.98) 100%)'
              }}
            />

            {/* Precision Animated Moving Border Beam */}
            <div 
              className="precision-border-beam" 
              style={{ '--beam-color': '#00D2FF' } as React.CSSProperties} 
            />

            {/* Top-Right Experience Badge */}
            <div className="absolute top-3.5 right-3.5 z-20">
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#0A1428]/85 backdrop-blur-md border border-sky-400/50 shadow-md"
              >
                {LEAD_DOCTOR.experience}
              </span>
            </div>

            {/* Bottom Information Content Panel (Exact CityCare Typography & Actions) */}
            <div className="relative z-20 p-5 sm:p-6 text-left flex flex-col justify-end">
              {/* Specialty Pill with Icon */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span 
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-sky-500/30 text-sky-100 border border-sky-400/50"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-sky-300" />
                  <span>MUSCULOSKELETAL &amp; SPORTS REHAB</span>
                </span>
              </div>

              {/* Doctor Name (Prominent & High Contrast) */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] mt-1">
                {LEAD_DOCTOR.name}
              </h3>

              {/* Designation */}
              <p className="text-xs sm:text-sm text-sky-200 font-semibold mt-1 drop-shadow-sm">
                {LEAD_DOCTOR.title}
              </p>

              {/* Qualifications */}
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 line-clamp-1">
                {LEAD_DOCTOR.qualifications}
              </p>

              {/* Actions: Equal-height buttons matching CityCare */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openDoctorProfile(LEAD_DOCTOR)}
                  className="flex-1 py-2.5 px-3 sm:px-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                >
                  <User className="w-3.5 h-3.5 text-slate-200" />
                  <span>Profile</span>
                </button>

                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className="flex-[1.2] py-2.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-hospital-500 via-hospital-600 to-blue-600 hover:from-hospital-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-hospital-600/40 transition-all flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5 text-sky-200" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Floating Stats Bar (Matching CityCare) */}
        <div className="mt-8 max-w-5xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 divide-y-0 sm:divide-x divide-white/10">
            {statsData.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`flex items-start sm:items-center gap-2 sm:gap-3 p-1.5 sm:p-0 ${idx > 0 ? "lg:pl-6" : ""}`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/30 mt-0.5 sm:mt-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-left min-w-0 flex-1 space-y-0.5">
                    <div className="text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[10.5px] sm:text-xs font-bold text-sky-300 leading-tight truncate">
                      {stat.title}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 leading-tight truncate">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
