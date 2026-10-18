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
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Image & Header */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0">
          <img 
            src={treatment.image} 
            alt={treatment.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy via-hospital-navy/60 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-sky-200">
              {treatment.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {treatment.name}
            </h3>
            <div className="flex items-center gap-4 text-xs text-sky-200/90 pt-0.5">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Avg Plan: {treatment.sessionsAvg}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Led by {LEAD_DOCTOR.name}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Clinical Overview & Methodology
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Grid: Conditions Treated & Common Procedures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Conditions Treated */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <span>Conditions Successfully Managed</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {treatment.conditionsTreated.map((cond, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques & Procedures */}
            <div className="p-4 rounded-2xl bg-hospital-50/60 border border-hospital-100 space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-hospital-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Evidence-Based Procedures</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {treatment.commonProcedures.map((proc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2 text-xs text-emerald-900">
            <h5 className="font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Target Recovery Outcomes</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-700">
              {treatment.expectedOutcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-1.5 bg-white/80 p-2 rounded-xl border border-emerald-200/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostics capability banner */}
          <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <strong className="text-slate-700">Clinical Evaluation Capabilities:</strong> {treatment.diagnosticCapabilities}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Consultation Fee: Initial complete assessment + 1st treatment session included</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-whatsapp text-white text-sm font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md shadow-sky-600/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
