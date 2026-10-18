import React, { useState } from 'react';
import { 
  TREATMENTS, 
  CLINIC_INFO, 
  LEAD_DOCTOR,
  buildCallLink, 
  buildWhatsAppLink 
} from '../data/physioData';
import { useModals } from '../context/ModalContext';
import { 
  Activity, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Filter,
  Phone
} from 'lucide-react';

export const TreatmentsPage: React.FC = () => {
  const { openAppointment, openTreatmentDetail } = useModals();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'spine-back-pain', label: 'Spine & Back' },
    { id: 'knee-joint-rehab', label: 'Knee & Joints' },
    { id: 'cervical-neck-shoulder', label: 'Neck & Shoulder' },
    { id: 'sports-injury-rehab', label: 'Sports Rehab' },
    { id: 'neuro-rehabilitation', label: 'Neuro & Stroke' },
    { id: 'modern-modalities-facilities', label: 'Advanced Modalities' },
  ];

  const filteredTreatments = selectedCategory === 'all' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.id === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="bg-hospital-navy text-white pt-28 sm:pt-28 pb-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-10 space-y-4 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span>Clinical Treatments Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Specialized Physiotherapy Treatments
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Non-invasive, evidence-based clinical protocols designed to relieve excruciating pain, decompress impinged nerves, and rebuild structural kinetic balance under the direct supervision of <strong>{LEAD_DOCTOR.name}</strong>.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FILTER TABS & TREATMENT DIRECTORY
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12 relative z-20 space-y-8">
        {/* Category Filter Pills */}
        <div className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-md shadow-sky-600/20'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                    {treatment.category}
                  </span>
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 text-sky-200 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      Plan: {treatment.sessionsAvg}
                    </span>
                    <span className="text-[11px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded">
                      1-on-1 Sessions
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  {/* Conditions List */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">
                      Target Conditions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {treatment.conditionsTreated.slice(0, 3).map((cond, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interventions preview */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Evidence-Based Techniques:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.commonProcedures.slice(0, 2).map((proc, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-md bg-hospital-50 text-[10px] font-medium text-hospital-800">
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openTreatmentDetail(treatment)}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 text-xs font-semibold transition-colors"
                >
                  View Full Protocol
                </button>
                <button
                  type="button"
                  onClick={() => openAppointment(treatment.id)}
                  className="py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-sm"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION CTA BANNER
          ========================================================================= */}
      <section className="w-full px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-hospital-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Not Sure Which Treatment You Need?</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Schedule a Comprehensive Clinical Evaluation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Dr. Alistair Wright will perform an in-depth mechanical diagnosis, review your imaging reports, and recommend the exact rehabilitation program.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center shrink-0 w-full md:w-auto">
            <button
              onClick={() => openAppointment()}
              className="w-full py-2.5 px-3 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-hover shadow-md text-center"
            >
              Book Visit
            </button>
            <a
              href={buildCallLink()}
              className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10 text-center flex items-center justify-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
