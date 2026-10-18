import React from 'react';
import { 
  CLINIC_INFO, 
  LEAD_DOCTOR, 
  CLINIC_STATS, 
  FACILITIES,
  buildCallLink, 
  buildWhatsAppLink 
} from '../data/physioData';
import { useModals } from '../context/ModalContext';
import { WhatsAppIconSVG } from '../components/common/WhatsAppButton';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  GraduationCap, 
  Activity, 
  Calendar, 
  MessageCircle, 
  ChevronRight,
  MapPin,
  Building2,
  Stethoscope,
  User
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openAppointment, openDoctorProfile } = useModals();

  const recoverySteps = [
    {
      step: '01',
      title: 'In-Depth Biomechanical Assessment',
      desc: 'We do not rush. Dr. Alistair Wright conducts a full postural, neural tension, and joint range analysis alongside reviewing your MRI or X-ray reports to identify the exact root cause.'
    },
    {
      step: '02',
      title: 'Immediate Pain & Nerve Decompression',
      desc: 'Using class-4 deep laser, computerized spinal traction, and multi-vector IFT electrotherapy, we rapidly down-regulate acute nerve inflammation and relax agonizing muscle spasms.'
    },
    {
      step: '03',
      title: 'Targeted Manual Joint Mobilization',
      desc: 'Certified Maitland & Mulligan manual therapy techniques to restore natural joint glide, release trapped capsules (e.g. frozen shoulder), and relieve disc pressure.'
    },
    {
      step: '04',
      title: 'Kinetic Chain Functional Reconditioning',
      desc: 'Active rehabilitation in our functional gym using resistance bands and balance boards to strengthen stabilizing muscles (multifidus, glutes, VMO) to take load off the joints.'
    },
    {
      step: '05',
      title: 'Ergonomic Prescription & Relapse Prevention',
      desc: 'Customized workstation monitor alignment, sleeping posture rules, and a simple 10-minute daily home routine to ensure lifelong pain-free mobility.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO BANNER (CityCare Style)
          ========================================================================= */}
      <section className="bg-hospital-navy text-white pt-28 sm:pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-10 pointer-events-none" />
        <div className="w-full px-4 sm:px-6 lg:px-10 space-y-4 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider">
            <span>About Our Centre</span>
            <span>•</span>
            <span>Est. 2016</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Excellence in Clinical Rehabilitation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            At {CLINIC_INFO.name}, we believe true healing begins with compassionate listening, precise biomechanical diagnosis, and personalized evidence-based physical therapy designed to avoid unnecessary surgeries.
          </p>
        </div>
      </section>

      {/* =========================================================================
          DOCTOR SPOTLIGHT (EXACTLY 1 DOCTOR: DR. ALISTAIR WRIGHT)
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10 -mt-12 sm:-mt-16 relative z-20">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Consultant Specialist Card - Exact Same Design as Home Page */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                style={{
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(0, 210, 255, 0.35), inset 0 1px 2px rgba(255,255,255,0.25)'
                }}
                className="relative w-full max-w-[340px] sm:max-w-[380px] h-[510px] sm:h-[550px] rounded-[28px] overflow-hidden flex flex-col justify-end backdrop-blur-xl bg-[#0E1D38] border border-white/25 text-left select-none group shadow-2xl"
              >
                {/* Ambient Lighting */}
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

                {/* Bottom Targeted Readability Dark Gradient */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(5,12,28,0.3) 30%, rgba(5,12,28,0.85) 65%, rgba(5,12,28,0.98) 100%)'
                  }}
                />

                {/* Top-Right Experience Badge */}
                <div className="absolute top-3.5 right-3.5 z-20">
                  <span 
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#0A1428]/85 backdrop-blur-md border border-sky-400/50 shadow-md"
                  >
                    {LEAD_DOCTOR.experience}
                  </span>
                </div>

                {/* Top-Left Registration Badge */}
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 shadow-sm"
                  >
                    Reg: {LEAD_DOCTOR.regNumber}
                  </span>
                </div>

                {/* Bottom Information Content Panel */}
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

                  {/* Doctor Name */}
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

                  {/* Actions: Equal-height buttons */}
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => openDoctorProfile(LEAD_DOCTOR)}
                      className="flex-1 py-2 px-3 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs backdrop-blur-md transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                    >
                      <User className="w-3.5 h-3.5 text-slate-200" />
                      <span>Profile</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openAppointment()}
                      className="flex-[1.2] py-2 px-3 rounded-xl bg-gradient-to-r from-hospital-500 via-hospital-600 to-blue-600 hover:from-hospital-600 hover:to-blue-700 text-white font-bold text-xs shadow-lg shadow-hospital-600/40 transition-all flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5 text-sky-200" />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Story & Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Founder & Director</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
                  Meet {LEAD_DOCTOR.name}
                </h2>
                <p className="text-sm font-semibold text-slate-600">
                  {LEAD_DOCTOR.qualifications}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-hospital-50 border-l-4 border-primary text-xs sm:text-sm text-hospital-900 italic">
                "{LEAD_DOCTOR.quote}"
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {LEAD_DOCTOR.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-secondary" />
                    <span>Clinical Credentials</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {LEAD_DOCTOR.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>Education & Training</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {LEAD_DOCTOR.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center pt-3 w-full">
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className="w-full py-2.5 px-3 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-hover shadow-md shadow-sky-600/25 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
                <a
                  href={buildWhatsAppLink("Hello Siya's Physiotherapy & Rehabilitation Centre, I would like to book a consultation appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba5a] shadow-sm flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIconSVG className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5-STEP CLINICAL RECOVERY PROTOCOL
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            Our Proven Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
            The 5-Step Evidence-Based Recovery Pathway
          </h2>
          <p className="text-sm text-slate-600">
            How we take you from agonizing acute pain to sustainable, pain-free active movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {recoverySteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card-soft flex flex-col justify-between space-y-4 relative group hover:border-primary/50 transition-all"
            >
              <div className="space-y-3">
                <span className="text-4xl font-extrabold font-heading text-slate-200 group-hover:text-primary/30 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold font-heading text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary/50 w-full group-hover:bg-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLINIC INFRASTRUCTURE & HYGIENE
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider">
              Clinical Hygiene & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
              State-of-the-Art Rehabilitation Campus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We maintain hospital-grade sanitation standards. Every treatment plinth is sanitized after every patient session, linens are single-use, and all electrotherapy probes undergo certified medical sterilization.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              {[
                'Individual sound-insulated treatment cabins for complete patient privacy',
                'Computerized spinal traction plinths calibrated for micro-precision pull',
                'Non-slip medical flooring in gait and agility training zone',
                'Fully accessible ground-floor premises with wheelchair access'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img 
              src="/images/physio_clinic_main.jpg" 
              alt="Siya's Physiotherapy Clinic Facilities"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SINGLE BRANCH CAMPUS INFO & CTA
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-hospital-navy text-white text-center space-y-6 shadow-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
            Single Integrated Campus
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
            Visit Us at Our Main Rehabilitation Centre
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {CLINIC_INFO.branch.fullAddress} • Landmark: {CLINIC_INFO.branch.landmark}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center justify-center pt-2 max-w-md mx-auto w-full">
            <button
              onClick={() => openAppointment()}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-hover shadow-lg shadow-sky-600/30 truncate"
            >
              Book Visit
            </button>
            <a
              href={buildCallLink()}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10 truncate text-center"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
