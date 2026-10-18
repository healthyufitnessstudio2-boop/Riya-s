import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { CLINIC_INFO, LEAD_DOCTOR, TREATMENTS, buildWhatsAppLink } from '../../data/physioData';

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
    const ref = 'SYA-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const selectedTreat = TREATMENTS.find(t => t.id === treatmentId)?.name || 'General Physiotherapy Assessment';
    const msg = `Hello Siya's Physiotherapy & Rehabilitation Centre,

I would like to book a consultation appointment:
* Patient Name: ${patientName || 'Patient'}
* Contact Phone: ${patientPhone || 'Not provided'}
* Service / Treatment: ${selectedTreat}
* Preferred Date: ${preferredDate || 'Earliest available'}
* Preferred Slot: ${preferredTime.toUpperCase()}
* Symptoms/Issue: ${symptoms || 'General joint/spine pain'}

Please confirm my appointment slot. Thank you!`;

    window.open(buildWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-hospital-navy text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
              <Calendar className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">Book Your Consultation</h3>
              <p className="text-xs text-sky-200">1-on-1 Consultation with {LEAD_DOCTOR.name}, MPT</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            /* Success View */
            <div className="py-8 text-center space-y-5 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
                  Appointment Request Received
                </span>
                <h4 className="text-2xl font-bold font-heading text-slate-900">
                  Thank You, {patientName || 'Valued Patient'}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your reference ID is <strong className="text-primary font-mono">{referenceId}</strong>. Our clinical coordinator will call you back on <strong className="text-slate-800">{patientPhone}</strong> shortly to confirm your slot with {LEAD_DOCTOR.name}.
                </p>
              </div>

              {/* Consultation Summary Card */}
              <div className="bg-hospital-50/70 border border-hospital-100 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-900">{LEAD_DOCTOR.name} ({LEAD_DOCTOR.qualifications})</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">
                    {TREATMENTS.find(t => t.id === treatmentId)?.name || 'Comprehensive Assessment'}
                  </span>
                </div>
                <div className="flex justify-between pb-1 border-b border-hospital-100">
                  <span className="text-slate-500">Preferred Date & Slot:</span>
                  <span className="font-semibold text-slate-900">{preferredDate} ({preferredTime.toUpperCase()})</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-500">Centre Location:</span>
                  <span className="font-semibold text-slate-900 text-right">{CLINIC_INFO.branch.name}</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsapp text-white font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Instant Confirm via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form View */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Trust Badge */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-hospital-50 border border-hospital-100 text-xs">
                <div className="flex items-center gap-2 text-hospital-800">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>100% Confidential</strong> • One-on-one session with Dr. Siya</span>
                </div>
                <span className="text-primary font-semibold hidden sm:inline">No Prepayment Required</span>
              </div>

              {/* Select Service / Treatment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Select Treatment / Concern <span className="text-rose-500">*</span>
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="general">Comprehensive Initial Physiotherapy Assessment</option>
                  {TREATMENTS.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                  <option value="spine-pack">Spine & Sciatica Rapid Recovery Plan (10 Sessions)</option>
                  <option value="knee-pack">Knee Osteoarthritis & Joint Preservation (12 Sessions)</option>
                  <option value="sports-pack">Athletic Return-To-Play Performance Pack (8 Sessions)</option>
                  <option value="cervical-pack">Cervical Tech-Neck & Frozen Shoulder Care (8 Sessions)</option>
                  <option value="home-visit">Home Care Physiotherapy Session (At-Home Visit)</option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  >
                    <option value="morning">Morning (09:00 AM – 01:00 PM)</option>
                    <option value="afternoon">Afternoon (02:00 PM – 04:30 PM)</option>
                    <option value="evening">Evening (04:30 PM – 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Age / Gender
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 42 / M"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Mobile Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Brief Symptoms or Pain Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Describe Your Pain / Condition (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Lower back pain since 2 weeks, radiating down right leg..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Single Branch Notice */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">{CLINIC_INFO.branch.name}</strong>
                  <p>{CLINIC_INFO.branch.fullAddress}</p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-sky-600/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-whatsapp text-white font-semibold hover:bg-whatsapp-hover transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
