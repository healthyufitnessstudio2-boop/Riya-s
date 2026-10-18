import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, PhoneCall, Mail, MapPin, ShieldAlert, Calendar, ArrowRight, Clock } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';

interface FooterProps {
  onOpenAppointmentModal?: () => void;
  onOpenEmergencyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal, onOpenEmergencyModal }) => {
  const { openAppointment, openEmergency, openTreatmentDetail } = useModal();

  return (
    <footer className="bg-hospital-navy text-slate-300 pt-16 pb-12 border-t border-slate-800 select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-left">
          {/* Col 1: Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-hospital-600 via-hospital-500 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-hospital-600/30">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  Siya's Physiotherapy
                </span>
                <span className="text-xs text-sky-400 font-semibold tracking-wider uppercase">
                  Rehabilitation Centre
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated 1-on-1 physical therapy, non-surgical spine decompression, joint mobilization, and athletic conditioning led by Dr. Alistair Wright.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.branch.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Desk: {CLINIC_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.branch.timings}</span>
              </div>
            </div>

            {/* Direct Helpline */}
            <div className="pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/30 rounded-xl text-xs font-bold transition-all items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                Direct Helpline: {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Col 2: Key Specialties */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-hospital-500 pl-2">
              Clinical Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {TREATMENTS.map(dept => (
                <li key={dept.id}>
                  <button 
                    onClick={() => openTreatmentDetail(dept)} 
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="w-1 h-1 rounded-full bg-hospital-500" />
                    {dept.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 5 Website Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-hospital-500 pl-2">
              Website Pages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-hospital-500" />
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-hospital-500" />
                  About Dr. Alistair Wright
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-hospital-500" />
                  All Clinical Treatments
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-hospital-500" />
                  Recovery Stories &amp; Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-hospital-500" />
                  Contact &amp; Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Action */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-hospital-500 pl-2">
              Quick Action
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 mb-4">
              <li><a href="/#facilities" className="hover:text-sky-300 transition-colors">Infrastructure &amp; Tech</a></li>
              <li><a href="/#packages" className="hover:text-sky-300 transition-colors">Targeted Rehab Packages</a></li>
              <li><a href="/#why-us" className="hover:text-sky-300 transition-colors">Why Choose Us</a></li>
              <li><a href="/#locations" className="hover:text-sky-300 transition-colors">Clinic Directions</a></li>
            </ul>

            <button
              onClick={() => openAppointment()}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-hospital-500 to-hospital-600 hover:from-hospital-600 hover:to-hospital-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-hospital-600/30 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="text-slate-400">Chief Physiotherapist: Dr. Alistair Wright (MPT)</span>
            <span>•</span>
            <span className="text-sky-400 font-semibold">Single Central Facility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
