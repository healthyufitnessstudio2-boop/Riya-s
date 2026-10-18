import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../../data/physioData';

interface ClinicLogoProps {
  className?: string;
  isLight?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl ${className}`}>
      {/* CityCare-grade Medical Emblem: Spine, Shield & Kinetic Movement */}
      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm ${
        isLight 
          ? 'bg-white/10 text-sky-300 border border-white/20' 
          : 'bg-hospital-navy text-sky-400 border border-hospital-800'
      }`}>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-current"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Vertical Spine Alignment Axis */}
          <path d="M20 7V33" strokeDasharray="1.5 3" strokeWidth="2.4" />
          <circle cx="20" cy="8" r="2.2" fill="currentColor" />
          <path d="M14 14C17 12 23 12 26 14" strokeWidth="2.2" />
          <path d="M12 20C16 18 24 18 28 20" strokeWidth="2.2" />
          <path d="M13 26C16 25 24 25 27 26" strokeWidth="2.2" />
          <circle cx="20" cy="32" r="2.2" fill="currentColor" />
          {/* Kinetic Health Cross & Protective Shield Arcs */}
          <path d="M10 12C6 16 6 24 10 28" stroke="#0EA5E9" strokeWidth="2.2" />
          <path d="M30 12C34 16 34 24 30 28" stroke="#0D9488" strokeWidth="2.2" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-hospital-navy group-hover:text-primary transition-colors'
          }`}>
            Siya's
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary">
            REHAB
          </span>
        </div>
        <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide uppercase leading-tight pt-1 ${
          isLight ? 'text-sky-200/80' : 'text-slate-500'
        }`}>
          Physiotherapy Centre
        </span>
      </div>
    </Link>
  );
};
