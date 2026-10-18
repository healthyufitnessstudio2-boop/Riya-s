import React, { useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  AlertCircle, 
  Clock, 
  MapPin, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppLink, buildCallLink } from '../../data/physioData';
import { WhatsAppIconSVG } from '../common/WhatsAppButton';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleWhatsAppUrgent = () => {
    const msg = `URGENT PHYSIOTHERAPY ASSISTANCE NEEDED:
I have acute severe pain (back spasm / joint sprain / mobility lock). Please connect me with Siya's Physiotherapy & Rehabilitation Centre immediately.`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red / Rose Urgent Top Bar - Compact */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-rose-600 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
              <ShieldAlert className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-heading text-white">Acute Pain & Urgent Care</h3>
              <p className="text-[10px] text-rose-100">Same-Day Priority Clinical Triage</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-rose-100 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body - Compact */}
        <div className="p-3.5 sm:p-5 space-y-3">
          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200/60 text-xs text-rose-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold text-[11.5px]">Severe back catch, acute disc spasm, or joint injury?</p>
              <p className="text-rose-700 text-[11px]">Call our clinical emergency desk directly for immediate guidance and a same-day priority slot.</p>
            </div>
          </div>

          {/* Hotline Card - Compact */}
          <div className="p-4 rounded-xl bg-[#0B192C] text-white text-center space-y-2 shadow-md">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-300">
              Direct Clinical Helpline
            </span>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
              {CLINIC_INFO.phoneDisplay}
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>Priority Response • Mon - Sat (8:30 AM – 8:30 PM)</span>
            </div>
          </div>
            
          {/* Dual Action Buttons on 1 Line */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={buildCallLink()}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-md shadow-sky-500/25 text-xs truncate"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Call Clinic</span>
            </a>

            <button
              onClick={handleWhatsAppUrgent}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20ba5a] transition-colors text-xs shadow-sm truncate"
            >
              <WhatsAppIconSVG className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="truncate">WhatsApp</span>
            </button>
          </div>

          {/* Single Branch Location Info */}
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2 text-[11px] text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <div className="leading-snug">
              <strong className="text-slate-800">{CLINIC_INFO.branch.name}</strong>
              <p className="text-slate-500">{CLINIC_INFO.branch.fullAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
