import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { Doctor, LEAD_DOCTOR, CLINIC_INFO, buildWhatsAppLink } from '../../data/physioData';

interface DoctorProfileModalProps {
  isOpen: boolean;
  doctor?: Doctor | null;
  onClose: () => void;
  onBookDoctor: () => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  isOpen,
  doctor = LEAD_DOCTOR,
  onClose,
  onBookDoctor,
}) => {
  const currentDoctor = doctor || LEAD_DOCTOR;

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

  const handleWhatsAppChat = () => {
    const msg = `Hello Siya's Physiotherapy & Rehabilitation Centre, I would like to consult regarding my physiotherapy condition. Please let me know the available consultation slots.`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar - Compact */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B192C] text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-sky-200">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Lead Physiotherapist Profile</span>
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
          {/* Doctor Header Grid */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden shadow-md border-2 border-primary/20 shrink-0">
              <img 
                src={currentDoctor.photo} 
                alt={currentDoctor.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#0B192C]/85 backdrop-blur-md rounded py-0.5 px-1 text-center">
                <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Today
                </span>
              </div>
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                {currentDoctor.title}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                {currentDoctor.name}
              </h3>
              <p className="text-[11px] font-semibold text-slate-600">
                {currentDoctor.qualifications}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-0.5 justify-center sm:justify-start text-[11px] text-slate-600">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
                  {currentDoctor.experience}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-medium">
                  Reg: {currentDoctor.regNumber}
                </span>
              </div>

              {/* Timings */}
              <div className="pt-1 flex items-center gap-1.5 text-[11px] text-slate-600 justify-center sm:justify-start">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span><strong>Hours:</strong> {currentDoctor.consultationTimings}</span>
              </div>
            </div>
          </div>

          {/* Clinical Quote */}
          <div className="p-3 rounded-xl bg-hospital-50 border-l-4 border-primary text-xs text-hospital-900 italic">
            "{currentDoctor.quote}"
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Clinical Background
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentDoctor.bio}
            </p>
          </div>

          {/* Specializations */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Core Clinical Specializations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              {currentDoctor.specializations.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-secondary" />
                <span>Certifications</span>
              </h5>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {currentDoctor.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Academic Qualifications</span>
              </h5>
              <ul className="space-y-1 text-[11px] text-slate-600">
                {currentDoctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-[11px] text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Consulting exclusively at <strong>{CLINIC_INFO.branch.name}</strong></span>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="text-[11px] text-slate-500">
            <span>Direct consultation with Lead Physiotherapist</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppChat}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-whatsapp text-white text-xs sm:text-sm font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDoctor();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md shadow-sky-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
