import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { CLINIC_INFO, LEAD_DOCTOR, TREATMENTS, buildWhatsAppLink } from '../../data/physioData';
import { WhatsAppIconSVG } from '../common/WhatsAppButton';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string | null;
  initialPackageId?: string | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentId,
  initialPackageId,
}) => {
  const [treatmentId, setTreatmentId] = useState<string>(initialTreatmentId || 'general');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');

  useEffect(() => {
    if (initialTreatmentId) {
      setTreatmentId(initialTreatmentId);
    }
  }, [initialTreatmentId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default tomorrow date
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setPreferredDate(tomorrow.toISOString().split('T')[0]);
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Please fill in patient name and contact phone number.');
      return;
    }
    const ref = 'SYA-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);

    const selectedTreat = TREATMENTS.find(t => t.id === treatmentId)?.name || 'General Physiotherapy Assessment';
    const msg = `*NEW APPOINTMENT BOOKING REQUEST*
Ref ID: ${ref}

* Patient Name: ${patientName.trim()}
* Contact Phone: ${patientPhone.trim()}${patientAge.trim() ? `\n* Age / Gender: ${patientAge.trim()}` : ''}
* Service / Treatment: ${selectedTreat}
* Preferred Date: ${preferredDate || 'Earliest available'}
* Preferred Slot: ${preferredTime.toUpperCase()}${symptoms.trim() ? `\n* Symptoms / Problem: ${symptoms.trim()}` : ''}

Clinic: ${CLINIC_INFO.name} (${CLINIC_INFO.branch.name})
Please confirm my appointment slot. Thank you!`;

    // Auto-redirect directly to WhatsApp with prefilled lead details
    const waUrl = buildWhatsAppLink(msg);
    window.open(waUrl, '_blank');
  };

  const handleWhatsAppBooking = () => {
    const selectedTreat = TREATMENTS.find(t => t.id === treatmentId)?.name || 'General Physiotherapy Assessment';
    const msg = `*NEW APPOINTMENT BOOKING REQUEST*
Ref ID: ${referenceId || ('SYA-' + Math.floor(100000 + Math.random() * 900000))}

* Patient Name: ${patientName.trim() || 'Patient'}
* Contact Phone: ${patientPhone.trim() || 'Not provided'}${patientAge.trim() ? `\n* Age / Gender: ${patientAge.trim()}` : ''}
* Service / Treatment: ${selectedTreat}
* Preferred Date: ${preferredDate || 'Earliest available'}
* Preferred Slot: ${preferredTime.toUpperCase()}${symptoms.trim() ? `\n* Symptoms / Problem: ${symptoms.trim()}` : ''}

Clinic: ${CLINIC_INFO.name} (${CLINIC_INFO.branch.name})
Please confirm my appointment slot. Thank you!`;

    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Compact */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B192C] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
              <Calendar className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-heading text-white">Book Your Consultation</h3>
              <p className="text-[10.5px] text-sky-200">1-on-1 Consultation with {LEAD_DOCTOR.name}, MPT</p>
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

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5">
          {isSubmitted ? (
            /* Success View */
            <div className="py-6 text-center space-y-4 animate-scaleUp">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div className="space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold tracking-wide uppercase">
                  Appointment Request Received
                </span>
                <h4 className="text-xl font-bold font-heading text-slate-900">
                  Thank You, {patientName || 'Valued Patient'}!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your reference ID is <strong className="text-primary font-mono">{referenceId}</strong>. Our clinical coordinator will call you back on <strong className="text-slate-800">{patientPhone}</strong> shortly to confirm your slot with {LEAD_DOCTOR.name}.
                </p>
              </div>

              {/* Consultation Summary Card */}
              <div className="bg-hospital-50/70 border border-hospital-100 rounded-xl p-3 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-900">{LEAD_DOCTOR.name}</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">
                    {TREATMENTS.find(t => t.id === treatmentId)?.shortName || 'Clinical Assessment'}
                  </span>
                </div>
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-semibold text-slate-900">{preferredDate} ({preferredTime.toUpperCase()})</span>
                </div>
                <div className="flex justify-between items-center pt-0.5">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900 text-right">Civil Hospital Rd, Hubballi</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-colors shadow-sm truncate"
                >
                  <WhatsAppIconSVG className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 px-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form View */
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Trust Badge - Compact */}
              <div className="flex items-center justify-between py-1 px-2.5 rounded-lg bg-sky-50/80 border border-sky-100 text-[10px]">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck className="w-3 h-3 text-primary shrink-0" />
                  <span><strong>100% Confidential</strong> • 1-on-1 with {LEAD_DOCTOR.name}</span>
                </div>
                <span className="text-primary font-semibold text-[9px] hidden sm:inline">Pay at Clinic</span>
              </div>

              {/* Select Service / Treatment (Shortened names) */}
              <div>
                <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                  Select Treatment / Concern <span className="text-rose-500">*</span>
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="general">Initial Physiotherapy Assessment</option>
                  <option value="spine-back-pain">Back & Spine Rehabilitation</option>
                  <option value="neck-cervical-pain">Neck & Shoulder Rehabilitation</option>
                  <option value="knee-osteoarthritis">Knee & Joint Preservation</option>
                  <option value="sports-injury-rehab">Sports Injury Recovery</option>
                  <option value="post-surgical-rehab">Post-Surgical Joint Rehab</option>
                  <option value="neuro-stroke-paralysis">Neuro & Stroke Care</option>
                  <option value="spine-pack">Spine Recovery Package (10 Sessions)</option>
                  <option value="knee-pack">Knee Joint Package (12 Sessions)</option>
                  <option value="sports-pack">Sports Performance (8 Sessions)</option>
                  <option value="home-visit">Home Visit Physiotherapy</option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                    Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                    required
                  >
                    <option value="morning">Morning (09:00 AM – 01:00 PM)</option>
                    <option value="afternoon">Afternoon (02:00 PM – 04:30 PM)</option>
                    <option value="evening">Evening (04:30 PM – 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-7 pr-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                    Age / Gender
                  </label>
                  <input
                    type="text"
                    placeholder="42 / M"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Mobile Phone Number */}
              <div>
                <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                  Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-3 h-3 text-slate-400 absolute left-2.5 top-2" />
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full pl-7 pr-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Brief Symptoms or Pain Notes */}
              <div>
                <label className="block text-[10.5px] font-bold text-slate-700 mb-0.5">
                  Describe Pain / Condition (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Lower back pain since 2 weeks..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1.5 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Single Branch Notice */}
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-1.5 text-[10px] text-slate-600">
                <MapPin className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <strong className="text-slate-800">{CLINIC_INFO.branch.name}</strong> • <span className="text-slate-500">{CLINIC_INFO.branch.fullAddress}</span>
                </div>
              </div>

              {/* Single Primary Action Button: Auto-redirects directly to WhatsApp with prefilled details */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-hospital-600 via-[#25D366] to-[#20ba5a] hover:from-hospital-700 hover:to-[#1ea751] text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <WhatsAppIconSVG className="w-4 h-4 fill-white shrink-0" />
                  <span>Confirm &amp; Book via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
