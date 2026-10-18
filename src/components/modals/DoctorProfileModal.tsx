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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-hospital-navy text-white">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-200">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Lead Physiotherapist Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Doctor Header Grid */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-32 h-44 sm:w-40 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 shrink-0">
              <img 
                src={currentDoctor.photo} 
                alt={currentDoctor.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-hospital-navy/85 backdrop-blur-md rounded-lg py-1 px-1.5 text-center">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Today
                </span>
              </div>
            </div>

            <div className="space-y-2 flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {currentDoctor.title}
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                {currentDoctor.name}
              </h3>
              <p className="text-xs font-semibold text-slate-600">
                {currentDoctor.qualifications}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start text-xs text-slate-600">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-medium">
                  {currentDoctor.experience}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-medium">
                  Reg: {currentDoctor.regNumber}
                </span>
              </div>

              {/* Timings */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span><strong>Consultation Hours:</strong> {currentDoctor.consultationTimings}</span>
              </div>
            </div>
          </div>

          {/* Clinical Quote */}
          <div className="p-4 rounded-2xl bg-hospital-50 border-l-4 border-primary text-xs sm:text-sm text-hospital-900 italic">
            "{currentDoctor.quote}"
          </div>

          {/* Bio */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Clinical Background & Experience
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentDoctor.bio}
            </p>
          </div>

          {/* Specializations */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Clinical Specializations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {currentDoctor.specializations.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-secondary" />
                <span>Professional Certifications</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {currentDoctor.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Academic Qualifications</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {currentDoctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>Consulting exclusively at <strong>{CLINIC_INFO.branch.name}</strong> (Single Centre).</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            <span>Direct consultation with Lead Physiotherapist</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppChat}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp text-white text-sm font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Doctor</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDoctor();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md shadow-sky-600/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
