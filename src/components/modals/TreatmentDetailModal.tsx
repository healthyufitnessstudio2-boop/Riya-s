import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Activity, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { TreatmentDepartment, LEAD_DOCTOR, buildWhatsAppLink } from '../../data/physioData';

interface TreatmentDetailModalProps {
  isOpen: boolean;
  treatment: TreatmentDepartment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  isOpen,
  treatment,
  onClose,
  onBookTreatment,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !treatment) return null;

  const handleWhatsAppInquiry = () => {
    const msg = `Hello Siya's Physiotherapy & Rehabilitation Centre, I am interested in knowing more and booking a consultation for: *${treatment.name}*. Please let me know the available timings.`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Image & Header - Compact */}
        <div className="relative h-32 sm:h-44 w-full overflow-hidden shrink-0">
          <img 
            src={treatment.image} 
            alt={treatment.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy via-hospital-navy/70 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-4 right-4 text-white space-y-0.5">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase text-sky-200">
              {treatment.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold font-heading text-white">
              {treatment.name}
            </h3>
            <div className="flex items-center gap-3 text-[11px] text-sky-200/90 pt-0.5">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Avg Plan: {treatment.sessionsAvg}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Led by {LEAD_DOCTOR.name}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body - Compact */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4">
          {/* Overview */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Clinical Overview & Methodology
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Grid: Conditions Treated & Common Procedures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Conditions Treated */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-primary" />
                <span>Conditions Managed</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {treatment.conditionsTreated.map((cond, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques & Procedures */}
            <div className="p-3 rounded-xl bg-hospital-50/60 border border-hospital-100 space-y-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-hospital-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Evidence-Based Procedures</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {treatment.commonProcedures.map((proc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1.5 text-xs text-emerald-900">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Target Recovery Outcomes</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5 text-slate-700">
              {treatment.expectedOutcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-1 bg-white/80 p-1.5 rounded-lg border border-emerald-200/50 text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostics capability banner */}
          <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
            <strong className="text-slate-700">Clinical Evaluation:</strong> {treatment.diagnosticCapabilities}
          </div>
        </div>

        {/* Modal Footer Actions - Compact */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            <span>Consultation Fee: Initial assessment + 1st treatment included</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-whatsapp text-white text-xs sm:text-sm font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md shadow-sky-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
