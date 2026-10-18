import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Stethoscope, ArrowRight, Sparkles } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { CLINIC_INFO, LEAD_DOCTOR } from '../../data/physioData';

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/physio_clinic_main.jpg",
    eyebrow: "Advanced Rehabilitation & Spine Care",
    headline: "Restore Mobility. Eliminate Pain.",
    subtitle: `Expert 1-on-1 Physiotherapy, non-surgical spine decompression, and active joint rehabilitation under ${LEAD_DOCTOR.name}.`
  },
  {
    id: 2,
    image: "/images/physio_spine.jpg",
    eyebrow: "Modern Physical Therapy Infrastructure",
    headline: "Targeted Spine Relief & Mobility.",
    subtitle: "Equipped with Class-4 Laser, digital decompression traction, and evidence-based electrotherapy suites."
  },
  {
    id: 3,
    image: "/images/physio_sports.jpg",
    eyebrow: "Sports Conditioning & Post-Surgery Care",
    headline: "Accelerated Return to Active Life.",
    subtitle: "Individualized functional retraining, sports injury conditioning, and certified orthopaedic rehabilitation."
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openAppointment } = useModal();

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Full-Width Image Slider with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.headline}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Sophisticated Dark Gradient Overlays (Heavier at bottom for text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Hero Content: Positioned toward the LOWER portion of the full screen */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center pb-8 sm:pb-12 pt-28 sm:pt-32">
        {/* Eyebrow Pill */}
        <motion.div
          key={`eyebrow-${slide.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-500/25 text-hospital-300 border border-hospital-400/30 text-[11px] sm:text-xs font-bold tracking-wide backdrop-blur-md mb-2 sm:mb-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
        >
          <Sparkles className="w-3 h-3 text-hospital-400" />
          <span>{slide.eyebrow}</span>
        </motion.div>

        {/* Short Strong Headline */}
        <motion.h1
          key={`headline-${slide.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-3xl"
        >
          {slide.headline}
        </motion.h1>

        {/* Short Supporting Line */}
        <motion.p
          key={`subtitle-${slide.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-xs sm:text-sm md:text-base text-slate-200 mt-2 sm:mt-3 max-w-2xl font-normal leading-relaxed text-balance"
        >
          {slide.subtitle}
        </motion.p>

        {/* 3 Compact CTA Buttons in ONE Single Horizontal Row (No emergency button) */}
        <div className="w-full max-w-lg mt-4 sm:mt-6">
          {/* Mobile: 3 Equal Columns in One Single Row */}
          <div className="grid grid-cols-3 gap-2 sm:hidden">
            <button
              onClick={() => openAppointment()}
              className="py-2.5 px-1 bg-gradient-to-r from-hospital-500 to-hospital-600 active:bg-hospital-700 text-white rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="py-2.5 px-1 bg-white/15 active:bg-white/25 text-white border border-white/25 rounded-xl font-bold text-xs backdrop-blur-md flex items-center justify-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call</span>
            </a>

            <a
              href="#specialist"
              className="py-2.5 px-1 bg-white/10 active:bg-white/20 text-slate-200 border border-white/20 rounded-xl font-semibold text-xs backdrop-blur-md flex items-center justify-center gap-1"
            >
              <Stethoscope className="w-3.5 h-3.5 text-hospital-300" />
              <span>Specialist</span>
            </a>
          </div>

          {/* Tablet / Desktop: One Horizontal Row */}
          <div className="hidden sm:flex items-center justify-center gap-3">
            <button
              onClick={() => openAppointment()}
              className="px-6 py-3 bg-gradient-to-r from-hospital-500 to-hospital-600 hover:from-hospital-600 hover:to-hospital-700 text-white rounded-xl font-bold text-sm md:text-base shadow-lg shadow-hospital-600/30 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              Book Appointment
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/25 rounded-xl font-bold text-sm md:text-base backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              Call: {CLINIC_INFO.phoneDisplay}
            </a>

            <a
              href="#specialist"
              className="px-5 py-3 bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 rounded-xl font-semibold text-sm md:text-base backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Stethoscope className="w-4 h-4 text-hospital-300" />
              Meet Specialist
            </a>
          </div>
        </div>

        {/* Slider Dots Indicator */}
        <div className="flex items-center gap-2 mt-4 sm:mt-6">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-7 h-1.5 bg-hospital-400 shadow-sm"
                  : "w-2 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
