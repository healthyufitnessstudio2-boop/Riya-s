import React from 'react';
import { 
  RECOVERY_STORIES, 
  PATIENT_REVIEWS, 
  CLINIC_INFO, 
  LEAD_DOCTOR,
  buildCallLink, 
  buildWhatsAppLink 
} from '../data/physioData';
import { useModals } from '../context/ModalContext';
import { WhatsAppIconSVG } from '../components/common/WhatsAppButton';
import { 
  Award, 
  ShieldCheck, 
  Star, 
  Calendar, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  HeartHandshake, 
  Activity, 
  Camera, 
  ArrowRight
} from 'lucide-react';

export const StoriesGalleryPage: React.FC = () => {
  const { openAppointment } = useModals();

  const galleryPhotos = [
    {
      title: "State-of-the-Art Clinic & Rehabilitation Space",
      category: "Clinic Facilities",
      image: "/images/physio_clinic_main.jpg",
      desc: "Bright, sanitized clinical premises with individual treatment plinths and kinetic balance zone."
    },
    {
      title: "Advanced Electrotherapy & Deep Laser Modality",
      category: "Technology",
      image: "/images/physio_modalities.jpg",
      desc: "Class-4 Laser, Dual-Channel IFT, and Ultrasound equipment for rapid cellular repair."
    },
    {
      title: "Targeted Manual Spine & Lumbar Mobilization",
      category: "Spine Care",
      image: "/images/physio_spine.jpg",
      desc: "Gentle facet joint glides and non-surgical nerve root decompression by Dr. Alistair Wright."
    },
    {
      title: "Knee Osteoarthritis & Joint Mobilization",
      category: "Joint Preservation",
      image: "/images/physio_knee.jpg",
      desc: "Active kinetic chain strengthening and patellar gliding to restore stair climbing."
    },
    {
      title: "Athletic Return-to-Play Functional Reconditioning",
      category: "Sports Rehab",
      image: "/images/physio_sports.jpg",
      desc: "Dynamic agility cords, proprioception mats, and sport-specific biomechanical training."
    },
    {
      title: "Neurological Gait & Parallel Bar Balance",
      category: "Neuro Rehabilitation",
      image: "/images/physio_neuro.jpg",
      desc: "Repetitive task-oriented motor re-learning for stroke and Parkinson's mobility independence."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="bg-hospital-navy text-white pt-12 pb-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-10 space-y-4 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-400" />
            <span>Clinical Case Studies & Visual Tour</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Patient Recovery Stories & Clinic Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Real outcomes from patients who overcame debilitating disc herniations, severe knee arthritis, and sports injuries without surgery under the clinical guidance of <strong>{LEAD_DOCTOR.name}</strong>.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CLINICAL CASE STUDIES GRID
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12 relative z-20 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Documented Milestones
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Clinical Recovery Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real patient journeys showcasing pre-rehab symptoms, clinical intervention applied, and verified recovery milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECOVERY_STORIES.map((story) => (
            <div 
              key={story.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={story.image} 
                    alt={story.condition}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy via-hospital-navy/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    ✓ Verified Recovery
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] text-sky-300 font-semibold uppercase tracking-wider">
                      {story.condition}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {story.patientName} ({story.age})
                    </h3>
                    <p className="text-xs text-slate-300">
                      {story.occupation} • Duration: {story.duration}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                      Initial Debilitating Symptoms:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed bg-rose-50/60 p-2.5 rounded-xl border border-rose-100">
                      {story.symptoms}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                      Evidence-Based Clinical Protocol:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed bg-hospital-50/60 p-2.5 rounded-xl border border-hospital-100">
                      {story.treatmentApplied}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Verified Clinical Outcome:
                    </span>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/70">
                      🎯 {story.clinicalResult}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium truncate">Led by {LEAD_DOCTOR.name}</span>
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-primary-hover shrink-0"
                >
                  <span>Book Care</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PHOTO GALLERY OF CLINIC & EQUIPMENT
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            Centre Infrastructure
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900">
            Clinic & Equipment High-Definition Gallery
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Take a visual tour through our hygienic treatment plinths, electrotherapy suites, and functional rehabilitation gym.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-card-soft overflow-hidden group hover:shadow-card-hover transition-all"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-hospital-navy/80 text-white backdrop-blur-md text-[10px] font-bold uppercase">
                  {photo.category}
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="text-sm font-bold font-heading text-slate-900">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          START YOUR RECOVERY CTA
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-hospital-navy via-hospital-900 to-hospital-navy text-white text-center space-y-6 shadow-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Begin Your Healing Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white max-w-2xl mx-auto">
            Ready to Be Our Next Recovery Story?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Don't let back pain, knee arthritis, or neck stiffness dictate your life. Book a dedicated evaluation with Dr. Alistair Wright today.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center justify-center pt-2 max-w-md mx-auto">
            <button
              onClick={() => openAppointment()}
              className="w-full py-2.5 px-3 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-hover shadow-md text-center"
            >
              Book Care
            </button>
            <a
              href={buildWhatsAppLink("Hello Siya's Physiotherapy & Rehabilitation Centre, I saw your patient recovery stories and would like to start my rehabilitation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba5a] shadow-sm text-center flex items-center justify-center gap-1.5"
            >
              <WhatsAppIconSVG className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
