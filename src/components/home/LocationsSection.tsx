import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';

export const LocationsSection: React.FC = () => {
  const { openAppointment } = useModal();

  return (
    <section id="locations" className="py-12 sm:py-16 md:py-24 bg-white select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-50 text-hospital-700 border border-hospital-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Clinic Location
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Central Rehabilitation Facility
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
            Conveniently situated in the central medical corridor with on-site parking and handicap accessibility.
          </p>
        </div>

        {/* Single Branch Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 text-left"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-hospital-100 text-hospital-800 uppercase tracking-wider">
                    Main Centre &amp; Outpatient Suite
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                    {CLINIC_INFO.name}
                  </h3>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-hospital-600 shrink-0 mt-0.5" />
                    <span>{CLINIC_INFO.branch.fullAddress}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-hospital-600 shrink-0" />
                    <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-hospital-600 hover:underline">
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-hospital-600 shrink-0" />
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-700 hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-hospital-600 shrink-0" />
                    <span>{CLINIC_INFO.branch.timings}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - 2 on 1 Line on Mobile */}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col sm:gap-2.5 shrink-0 justify-center">
                <button
                  onClick={() => openAppointment()}
                  className="py-2.5 px-3 bg-gradient-to-r from-hospital-500 to-hospital-600 hover:from-hospital-600 hover:to-hospital-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.name + ' ' + CLINIC_INFO.branch.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl font-bold text-xs sm:text-sm shadow-2xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-hospital-600" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
