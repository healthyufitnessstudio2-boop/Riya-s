import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { RehabPackage, buildWhatsAppLink } from '../../data/physioData';

interface HealthPackageDetailModalProps {
  isOpen: boolean;
  packageData: RehabPackage | null;
  onClose: () => void;
  onBookPackage: (packageData: RehabPackage) => void;
}

export const HealthPackageDetailModal: React.FC<HealthPackageDetailModalProps> = ({
  isOpen,
  packageData,
  onClose,
  onBookPackage,
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

  if (!isOpen || !packageData) return null;

  const handleWhatsAppBooking = () => {
    const msg = `Hello Siya's Physiotherapy Centre, I would like to enquire about enrolling in the *${packageData.name}* (${packageData.price}). Please share the booking details.`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Compact */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B192C] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 shrink-0">
              <Sparkles className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <span className={`inline-block px-2 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider mb-0.5 ${packageData.badgeColor}`}>
                {packageData.badgeText}
              </span>
              <h3 className="text-sm sm:text-base font-bold font-heading text-white">{packageData.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content - Compact */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5">
          {/* Price & Duration Strip */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-hospital-50 border border-hospital-100">
            <div>
              <span className="text-[11px] text-slate-500 font-medium">Complete Package Fee</span>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
                {packageData.price}
                <span className="text-[11px] font-normal text-slate-500 ml-1">(All Sessions)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs sm:text-sm font-bold text-primary">{packageData.sessionsCount}</div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 justify-end">
                <Clock className="w-3 h-3" />
                <span>{packageData.duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Program Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {packageData.detailedOverview}
            </p>
          </div>

          {/* Key Inclusions */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>What Is Included</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {packageData.keyInclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Assessments & Home Guidance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-primary" />
                <span>Assessments</span>
              </span>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {packageData.clinicalAssessments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span>Post-Rehab Care</span>
              </span>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {packageData.homeGuidance.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <span className="text-[11px] text-slate-500">Zero cancellation penalties • Reschedule anytime</span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-whatsapp text-white text-xs sm:text-sm font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookPackage(packageData);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md shadow-sky-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
