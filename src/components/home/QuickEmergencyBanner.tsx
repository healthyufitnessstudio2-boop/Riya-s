import React from 'react';
import { PhoneCall, ShieldAlert, Zap } from 'lucide-react';
import { CLINIC_INFO } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';

export const QuickEmergencyBanner: React.FC = () => {
  const { openEmergency } = useModal();

  return (
    <section className="py-4 sm:py-6 bg-slate-100/70 select-none">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="bg-gradient-to-r from-red-700 via-rose-700 to-red-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 text-white shadow-md shadow-red-900/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: Icon & Headline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-red-300 animate-ping" />
                <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  24/7 Acute Pain &amp; Emergency Trauma Support
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-red-100 mt-0.5 max-w-lg">
                Immediate triage, urgent spine spasm relief, and manual decompression at main centre.
              </p>
            </div>
          </div>

          {/* Right: Quick Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto justify-center">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="py-2 px-3.5 sm:px-4 bg-white text-red-700 hover:bg-red-50 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => openEmergency()}
              className="py-2 px-3 sm:px-3.5 bg-red-900/40 hover:bg-red-900/60 text-white border border-white/20 rounded-xl font-semibold text-xs transition-all flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Guide &amp; Dispatch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
