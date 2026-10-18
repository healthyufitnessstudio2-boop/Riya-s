import React, { useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  MessageCircle, 
  AlertCircle, 
  Clock, 
  MapPin, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppLink, buildCallLink } from '../../data/physioData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red / Rose Urgent Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-rose-600 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-white">Acute Pain & Urgent Care</h3>
              <p className="text-[11px] text-rose-100">Same-Day Priority Clinical Triage</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-rose-100 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200/60 text-xs text-rose-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold">Experiencing severe back catch, acute disc spasm, or sports injury?</p>
              <p className="text-rose-700">Call our dedicated clinical emergency desk directly for immediate first-aid guidance and same-day priority slot.</p>
            </div>
          </div>

          {/* Hotline Card */}
          <div className="p-5 rounded-2xl bg-hospital-navy text-white text-center space-y-3 shadow-lg">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300">
              Direct Clinical Helpline
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              {CLINIC_INFO.phoneDisplay}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Priority Response • Mon - Sat (8:30 AM – 8:30 PM)</span>
            </div>
            
            <a
              href={buildCallLink()}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-sky-500/25 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now ({CLINIC_INFO.phoneDisplay})</span>
            </a>
          </div>

          {/* WhatsApp Secondary Action */}
          <button
            onClick={handleWhatsAppUrgent}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-whatsapp text-white font-semibold hover:bg-whatsapp-hover transition-colors text-sm shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Urgent WhatsApp Message</span>
          </button>

          {/* Single Branch Location Info */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">{CLINIC_INFO.branch.name}</strong>
              <p>{CLINIC_INFO.branch.fullAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
