import React, { useState } from 'react';
import { 
  CLINIC_INFO, 
  LEAD_DOCTOR,
  TREATMENTS,
  buildCallLink, 
  buildWhatsAppLink 
} from '../data/physioData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  User, 
  ExternalLink,
  Zap,
  Heart,
  Car,
  Building2,
  Train,
  Home,
  Users,
  FileText,
  ArrowRight,
  ChevronRight,
  Lock,
  List
} from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { WhatsAppIconSVG } from '../components/common/WhatsAppButton';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'general',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in your full name and contact number.');
      return;
    }
    const ref = 'SYA-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);

    const selectedTreat = TREATMENTS.find(t => t.id === formData.treatment)?.name || 'General Consultation';
    const text = `*NEW APPOINTMENT BOOKING REQUEST*
Ref ID: ${ref}

* Patient Name: ${formData.name.trim()}
* Mobile / WhatsApp: ${formData.phone.trim()}${formData.email.trim() ? `\n* Email: ${formData.email.trim()}` : ''}
* Service / Specialty: ${selectedTreat}
* Preferred Date: ${formData.preferredDate || 'Earliest available'}
* Preferred Slot: ${formData.preferredTime}${formData.message.trim() ? `\n* Symptoms / Notes: ${formData.message.trim()}` : ''}

Clinic: ${CLINIC_INFO.name} (${CLINIC_INFO.branch.name})
Please confirm my appointment slot. Thank you!`;

    // Auto-redirect directly to WhatsApp with prefilled lead details
    const waUrl = buildWhatsAppLink(text);
    window.open(waUrl, '_blank');
  };

  const handleWhatsAppSend = () => {
    const selectedTreat = TREATMENTS.find(t => t.id === formData.treatment)?.name || 'General Consultation';
    const text = `*NEW APPOINTMENT BOOKING REQUEST*
Ref ID: ${referenceId || ('SYA-' + Math.floor(100000 + Math.random() * 900000))}

* Patient Name: ${formData.name.trim() || 'Patient'}
* Mobile / WhatsApp: ${formData.phone.trim() || 'Not provided'}${formData.email.trim() ? `\n* Email: ${formData.email.trim()}` : ''}
* Service / Specialty: ${selectedTreat}
* Preferred Date: ${formData.preferredDate || 'Earliest available'}
* Preferred Slot: ${formData.preferredTime}${formData.message.trim() ? `\n* Symptoms / Notes: ${formData.message.trim()}` : ''}

Clinic: ${CLINIC_INFO.name} (${CLINIC_INFO.branch.name})
Please confirm my appointment slot. Thank you!`;

    window.open(buildWhatsAppLink(text), '_blank');
  };

  const clinicAddressText = "Opposite Civil Hospital, Near Royal Plaza, Station Road, City Centre, Hubballi – 580020";

  return (
    <>
      <SEOHead 
        title="Contact & Book Appointment | Siya’s Physiotherapy & Rehabilitation Centre"
        description={`Connect with ${CLINIC_INFO.name}. Schedule 1-on-1 consultations with ${LEAD_DOCTOR.name}. Located opposite Civil Hospital, Station Road, Hubballi.`}
      />

      <div className="bg-[#F4F8FD] min-h-screen text-[#24364B] pb-24 sm:pb-20 select-none">
        
        {/* =========================================================================
            1. HERO SECTION (Exact Reference: Desktop Wide / Mobile Compact)
            ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#071B35] text-white pt-36 sm:pt-32 md:pt-32 pb-12 sm:pb-20 lg:pb-24">
          {/* Responsive Picture Element */}
          <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
            <source 
              media="(max-width: 767px)" 
              srcSet="/images/Contact%20Mobile%20Modern%20Physiotherapy%20Clinic%20Interior.jpg" 
            />
            <img 
              src="/images/Contact%20Desktop%20Modern%20Physiotherapy%20Clinic%20Interior.jpg" 
              alt="Siya’s Physiotherapy Clinic Modern Interior"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-right md:object-center"
            />
          </picture>

          {/* Clean Gradient Overlay for Legibility (Zero purple) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B35] via-[#071B35]/85 to-[#071B35]/35 md:bg-gradient-to-r md:from-[#071B35] md:via-[#071B35]/90 md:to-[#071B35]/25 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl lg:max-w-3xl space-y-3 sm:space-y-5 text-left">
              {/* Desktop Pill Label (Hidden on mobile per Mobile reference image) */}
              <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0798F2]" />
                <span>CONTACT &amp; APPOINTMENTS</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15]">
                <span className="block md:inline">Connect with</span>{' '}
                <span className="block md:inline">Siya’s Physiotherapy</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                Reach us for appointment booking, clinical queries, or home visit requests. Single dedicated center with comprehensive rehabilitation infrastructure.
              </p>

              {/* Desktop: 4 Benefit Items in 1 Row with Solid Blue Icon Circles */}
              <div className="hidden md:grid grid-cols-4 gap-4 pt-2">
                {/* 1. Quick Response */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0866E9] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Quick Response</span>
                    <span className="text-[11px] text-slate-300 block">Within Minutes</span>
                  </div>
                </div>

                {/* 2. Easy Booking */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0866E9] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Easy Booking</span>
                    <span className="text-[11px] text-slate-300 block">Online / Phone / WhatsApp</span>
                  </div>
                </div>

                {/* 3. Expert Guidance */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0866E9] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Expert Guidance</span>
                    <span className="text-[11px] text-slate-300 block">From Our Physiotherapists</span>
                  </div>
                </div>

                {/* 4. Personalized Care */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0866E9] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Personalized Care</span>
                    <span className="text-[11px] text-slate-300 block">For Faster Recovery</span>
                  </div>
                </div>
              </div>

              {/* Mobile: 4 Benefit Items in 1 Single Horizontal Row of Dark Pills (Exact Mobile reference) */}
              <div className="flex md:hidden items-center justify-between gap-1 pt-1 overflow-x-auto no-scrollbar">
                {/* 1 */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 text-[9px] text-white shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#0866E9] flex items-center justify-center text-white shrink-0">
                    <Zap className="w-2.5 h-2.5 fill-current" />
                  </span>
                  <span className="font-medium whitespace-nowrap">Quick Response</span>
                </div>

                {/* 2 */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 text-[9px] text-white shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#0866E9] flex items-center justify-center text-white shrink-0">
                    <Calendar className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-medium whitespace-nowrap">Easy Booking</span>
                </div>

                {/* 3 */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 text-[9px] text-white shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#0866E9] flex items-center justify-center text-white shrink-0">
                    <Users className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-medium whitespace-nowrap">Expert Guidance</span>
                </div>

                {/* 4 */}
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 text-[9px] text-white shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#0866E9] flex items-center justify-center text-white shrink-0">
                    <Heart className="w-2.5 h-2.5 fill-white" />
                  </span>
                  <span className="font-medium whitespace-nowrap">Personalized Care</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. CONTACT INFORMATION CARDS (4 Cards Row: Desktop Horizontal / Mobile 4-Column Cards)
            ========================================================================= */}
        <section className="w-full px-3 sm:px-6 lg:px-10 -mt-5 sm:-mt-8 md:-mt-10 relative z-20">
          
          {/* Mobile View: 2x2 Clean Grid (No wrapping, clear phone & email) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 md:hidden">
            
            {/* Card 1: Call Reception */}
            <a 
              href={buildCallLink()} 
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-[#0866E9] hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#0866E9]/10 text-[#0866E9] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#0866E9] bg-[#0866E9]/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  Call <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block">
                  Call Reception
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#071B35] font-mono leading-tight block mt-0.5">
                  +91 92814 10305
                </span>
                <span className="text-[9.5px] text-slate-400 block mt-0.5">Direct booking desk</span>
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a 
              href={buildWhatsAppLink("Hello Siya's Physiotherapy & Rehabilitation Centre, I would like to inquire about appointments and consultation.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <WhatsAppIconSVG className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  Chat <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block">
                  WhatsApp Desk
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#071B35] font-mono leading-tight block mt-0.5">
                  +91 92814 10305
                </span>
                <span className="text-[9.5px] text-slate-400 block mt-0.5">Instant chat & slots</span>
              </div>
            </a>

            {/* Card 3: Email Us */}
            <a 
              href={`mailto:${CLINIC_INFO.email}`} 
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-[#0798F2] hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0798F2] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#0798F2] bg-sky-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  Email <ChevronRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block">
                  Official Email
                </span>
                <span className="text-xs sm:text-[13px] font-bold text-[#071B35] leading-tight block mt-0.5 break-all">
                  {CLINIC_INFO.email}
                </span>
                <span className="text-[9.5px] text-slate-400 block mt-0.5">Queries & reports</span>
              </div>
            </a>

            {/* Card 4: Centre Hours */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs flex flex-col justify-between text-left">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#071B35] text-[#0798F2] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  Timings
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block">
                  Centre Hours
                </span>
                <span className="text-xs sm:text-[13px] font-bold text-[#071B35] leading-tight block mt-0.5">
                  Mon – Sat: 8:30 AM – 8:30 PM
                </span>
                <span className="text-[9.5px] text-slate-400 block mt-0.5">Sunday by appointment</span>
              </div>
            </div>

          </div>

          {/* Desktop View: 4 Wide Horizontal Cards (Exact Desktop reference) */}
          <div className="hidden md:grid md:grid-cols-4 gap-3.5 lg:gap-5">
            {/* Desktop Card 1: Call Reception */}
            <a 
              href={buildCallLink()} 
              className="p-4 lg:p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-md hover:shadow-xl hover:border-[#0866E9]/40 transition-all duration-300 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#0866E9]/10 text-[#0866E9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Call Reception
                  </span>
                  <div className="text-sm lg:text-base font-bold text-[#071B35] font-mono leading-tight mt-0.5">
                    {CLINIC_INFO.phoneDisplay}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Direct telephonic booking desk
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0866E9] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </a>

            {/* Desktop Card 2: WhatsApp Concierge */}
            <a 
              href={buildWhatsAppLink("Hello Siya's Physiotherapy & Rehabilitation Centre, I would like to inquire about appointments and consultation.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 lg:p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-md hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIconSVG className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Concierge
                  </span>
                  <div className="text-sm lg:text-base font-bold text-[#071B35] font-mono leading-tight mt-0.5">
                    {CLINIC_INFO.whatsappDisplay}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Instant slot availability check
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </a>

            {/* Desktop Card 3: Official Email */}
            <a 
              href={`mailto:${CLINIC_INFO.email}`} 
              className="p-4 lg:p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-md hover:shadow-xl hover:border-[#0798F2]/40 transition-all duration-300 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-sky-50 text-[#0798F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <div className="text-xs lg:text-sm font-bold text-[#071B35] leading-tight mt-0.5 break-all">
                    {CLINIC_INFO.email}
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Reports &amp; corporate inquiries
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0798F2] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </a>

            {/* Desktop Card 4: Centre Hours */}
            <div className="p-4 lg:p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-md hover:shadow-xl hover:border-[#071B35]/40 transition-all duration-300 flex items-center justify-between text-left group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#071B35] text-[#0798F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Centre Hours
                  </span>
                  <div className="text-xs lg:text-sm font-bold text-[#071B35] leading-tight mt-0.5">
                    Mon – Sat: 8:30 AM – 8:30 PM
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Sunday: 9:00 AM – 1:00 PM (Prior Booking)
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            </div>
          </div>

        </section>

        {/* =========================================================================
            3. MAIN CONTENT: APPOINTMENT FORM + LOCATION SECTION
            ========================================================================= */}
        <section className="w-full px-3 sm:px-6 lg:px-10 mt-6 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
            
            {/* -------------------------------------------------------------------
                LEFT COLUMN: APPOINTMENT BOOKING FORM CARD
                (Desktop: White card / Mobile: Light Blue Tinted Card with 2-Col inputs)
                ------------------------------------------------------------------- */}
            <div 
              id="booking-form"
              className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#EDF5FF] md:bg-white border border-[#D0E2FB] md:border-[#DCE7F5] shadow-md md:shadow-xl p-4 sm:p-7 md:p-8 text-left scroll-mt-28"
            >
              {/* Desktop Form Title Pill (Hidden on mobile per Mobile reference image) */}
              <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0866E9]/10 text-[#0866E9] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3 h-3" />
                <span>CONSULTATION REQUEST FORM</span>
              </div>

              {/* Form Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0866E9]/15 text-[#0866E9] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#0866E9]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-[#071B35] tracking-tight">
                    <span className="md:hidden">Book an Appointment</span>
                    <span className="hidden md:inline">Book with {LEAD_DOCTOR.name}</span>
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                    Fill in your details and our clinical care coordinator will contact you to confirm your slot.
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-scaleUp">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full">
                      Request Confirmed
                    </span>
                    <h3 className="text-xl font-bold text-[#071B35]">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Your reference ID is <strong className="text-[#0866E9] font-mono">{referenceId}</strong>. We will contact you at <strong className="text-slate-800">{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#20bd5a] transition-colors"
                    >
                      <WhatsAppIconSVG className="w-4 h-4 fill-current" />
                      <span>Instant Confirm via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  {/* Row 1: Full Name & Mobile (2 Columns on BOTH Mobile & Desktop per Reference Image) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. Anand Deshmukh"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all placeholder:text-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                        Mobile / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all placeholder:text-slate-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Desktop Only: Email Input (Mobile Reference Image omits email for faster booking) */}
                  <div className="hidden md:block">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Date & Preferred Time (2 Columns on BOTH Mobile & Desktop per Reference Image) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                        Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                          className="w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                        Preferred Time <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                          className="w-full pl-7 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all appearance-none cursor-pointer"
                          required
                        >
                          <option value="Morning (09:00 AM)">Morning (09:00 AM)</option>
                          <option value="Afternoon (02:00 PM)">Afternoon (02:00 PM)</option>
                          <option value="Evening (05:00 PM)">Evening (05:00 PM)</option>
                        </select>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 absolute right-2 sm:right-3 top-2.5 sm:top-3 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service / Specialty */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                      Service / Specialty <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <List className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                        className="w-full pl-7 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all appearance-none cursor-pointer"
                        required
                      >
                        <option value="general">Initial Physiotherapy Assessment</option>
                        {TREATMENTS.map(t => (
                          <option key={t.id} value={t.id}>{t.shortName || t.name}</option>
                        ))}
                        <option value="spine-pack">Spine Recovery Package (10 Sessions)</option>
                        <option value="knee-pack">Knee Joint Package (12 Sessions)</option>
                        <option value="sports-pack">Athletic Rehab Package (8 Sessions)</option>
                      </select>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 absolute right-2 sm:right-3 top-2.5 sm:top-3 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 4: Describe Pain / Symptoms */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1">
                      Describe Pain / Symptoms (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-2.5 sm:top-3 pointer-events-none" />
                      <textarea
                        rows={2}
                        placeholder="e.g. Lower back pain for 2 months, difficulty in walking..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full pl-7 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 rounded-xl border border-[#DCE7F5] bg-white text-xs sm:text-sm text-[#24364B] focus:ring-2 focus:ring-[#0866E9] focus:border-[#0866E9] focus:outline-none transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Primary CTA Button: Book via WhatsApp */}
                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 sm:py-3.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#0866E9] via-[#25D366] to-[#20ba5a] hover:from-[#0756C7] hover:to-[#1ea751] active:scale-[0.99] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <WhatsAppIconSVG className="w-4 h-4 fill-white" />
                      <span>Book Appointment via WhatsApp</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Desktop Security Lock Note */}
                  <div className="hidden md:flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is secure and will only be used for appointment purposes.</span>
                  </div>
                </form>
              )}
            </div>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: LOCATION & ACCESS
                (Mobile: Single Unified White Location Card / Desktop: Side-by-side Map + Dark Card)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* MOBILE LOCATION CARD: Exact match to Mobile reference image */}
              <div className="md:hidden bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-sm space-y-3">
                {/* Header Row: 📍 Our Location & Open in Google Maps */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#071B35]">
                    <MapPin className="w-4 h-4 text-[#0866E9] fill-[#0866E9]" />
                    <span>Our Location</span>
                  </div>
                  <a
                    href={CLINIC_INFO.branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#0866E9]/40 text-[11px] font-bold text-[#0866E9] bg-white hover:bg-sky-50 shadow-2xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#0866E9]" />
                  </a>
                </div>

                {/* Map View */}
                <div className="rounded-xl overflow-hidden border border-slate-200 h-44 w-full relative bg-slate-100">
                  <iframe
                    title="Siya Physiotherapy Mobile Location Map"
                    src={CLINIC_INFO.branch.googleEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Address block inside card */}
                <div className="flex items-start gap-2.5 pt-1 text-left">
                  <div className="w-9 h-9 rounded-xl bg-[#0866E9]/10 text-[#0866E9] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-[#0866E9]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#071B35] leading-tight">
                      Siya's Physiotherapy &amp; Rehabilitation Centre
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {clinicAddressText}
                    </p>
                    <p className="text-[10px] text-[#0866E9] font-semibold mt-1">
                      Landmark: Directly opposite Civil Hospital Main Gate
                    </p>
                  </div>
                </div>
              </div>

              {/* DESKTOP LOCATION VIEW: Exact match to Desktop reference image */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 items-stretch">
                
                {/* Google Map Box (7 Cols on desktop) */}
                <div className="md:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DCE7F5] shadow-lg relative bg-slate-100 min-h-[290px] flex flex-col justify-between">
                  <iframe
                    title="Siya Physiotherapy Location Map"
                    src={CLINIC_INFO.branch.googleEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '260px', flexGrow: 1 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Desktop Float Button */}
                  <a
                    href={CLINIC_INFO.branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 text-[#071B35] border border-[#DCE7F5] text-xs font-bold shadow-md hover:bg-white transition-all backdrop-blur-sm"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0866E9]" />
                  </a>
                </div>

                {/* Dark Navy Address Card (5 Cols on desktop) */}
                <div className="md:col-span-5 rounded-2xl sm:rounded-3xl bg-[#071B35] text-white p-5 lg:p-6 flex flex-col justify-between shadow-xl border border-white/10 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0866E9]/20 text-[#0798F2] flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm lg:text-base font-bold text-white leading-tight">
                        Siya's Physiotherapy &amp; Rehabilitation Centre
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 pt-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-semibold">Centre Address:</strong>
                          <p className="text-slate-300 leading-snug mt-0.5">
                            {clinicAddressText}
                          </p>
                          <p className="text-[11px] text-[#0798F2] font-semibold mt-1">
                            Landmark: Directly opposite Civil Hospital Main Gate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Open in Google Maps White Button (Exact Desktop reference) */}
                  <a
                    href={CLINIC_INFO.branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#071B35] text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0866E9]" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#0866E9]" />
                  </a>
                </div>

              </div>

              {/* -------------------------------------------------------------------
                  DESKTOP ACCESS BADGES & GUIDELINES (Exact Desktop reference rows)
                  ------------------------------------------------------------------- */}
              <div className="hidden md:block space-y-3">
                
                {/* Row 1: 5 Quick Landmark Badges */}
                <div className="grid grid-cols-5 gap-2.5">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs">
                    <Car className="w-4 h-4 text-[#0866E9] shrink-0" />
                    <div className="text-left leading-none">
                      <span className="text-[10px] text-slate-400 block font-medium">Easy Access</span>
                      <span className="text-[11px] font-bold text-[#071B35]">Parking Available</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs">
                    <Building2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <div className="text-left leading-none">
                      <span className="text-[10px] text-slate-400 block font-medium">Opposite</span>
                      <span className="text-[11px] font-bold text-[#071B35]">Civil Hospital</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs">
                    <Train className="w-4 h-4 text-rose-500 shrink-0" />
                    <div className="text-left leading-none">
                      <span className="text-[10px] text-slate-400 block font-medium">Near Railway Station</span>
                      <span className="text-[11px] font-bold text-[#071B35]">Hubballi</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <div className="text-left leading-none">
                      <span className="text-[10px] text-slate-400 block font-medium">2 min from</span>
                      <span className="text-[11px] font-bold text-[#071B35]">Station Road</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs">
                    <div className="w-4 h-4 rounded-full bg-[#0866E9] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                      P
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[10px] text-slate-400 block font-medium">Parking</span>
                      <span className="text-[11px] font-bold text-[#071B35]">Available</span>
                    </div>
                  </div>
                </div>

                {/* Row 2: 3 Wide Feature Cards (Home Visit, Corporate, Reports) */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs text-left">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0866E9] flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#071B35] block">Home Visit Available</span>
                      <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                        For elderly or post-surgery patients
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs text-left">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0866E9] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#071B35] block">Corporate Inquiries</span>
                      <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                        Tie-ups for employee wellness
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#DCE7F5] shadow-2xs text-left">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0866E9] flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#071B35] block">Bring Your Reports</span>
                      <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                        X-ray, MRI, previous prescriptions
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
};
