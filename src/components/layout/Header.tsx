import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, Phone, Calendar, ChevronDown, Menu, X, 
  Activity, Sparkles, UserCheck, Clock
} from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, buildWhatsAppLink } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';
import { WhatsAppIconSVG } from '../common/WhatsAppButton';

interface HeaderProps {
  onOpenAppointmentModal?: () => void;
  onOpenEmergencyModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openAppointment, openTreatmentDetail } = useModal();
  const location = useLocation();

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isContactPage = location.pathname === '/contact';

  const marqueeItem = (
    <div className="flex items-center gap-8 whitespace-nowrap px-4">
      <span className="inline-flex items-center gap-1.5 text-sky-300 font-bold">
        <Phone className="w-3 h-3 text-sky-400" />
        Clinical Consultation Desk: {CLINIC_INFO.phoneDisplay}
      </span>
      <span className="text-slate-500 hidden sm:inline">•</span>
      <span className="inline-flex items-center gap-1 text-slate-300">
        <Building2 className="w-3 h-3 text-slate-400" />
        {CLINIC_INFO.name}
      </span>
      <span className="text-slate-500 hidden sm:inline">•</span>
      <span className="inline-flex items-center gap-1 text-emerald-300 font-medium">
        <Clock className="w-3 h-3 text-emerald-400" />
        Mon – Sat: 08:30 AM – 08:30 PM
      </span>
      <span className="text-slate-500 hidden sm:inline">•</span>
      <span className="text-hospital-200 font-medium">
        Advanced 1-on-1 Physiotherapy &amp; Spine Rehabilitation Available Daily
      </span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 select-none w-full max-w-full overflow-x-hidden">
      {/* Animated Top Announcement Bar (Right to Left Marquee) */}
      <div className="w-full max-w-full bg-slate-950/95 text-slate-200 text-[11px] sm:text-xs py-1 border-b border-white/10 overflow-hidden relative select-none block">
        <div className="animate-marquee-rtl flex items-center">
          {marqueeItem}
          {marqueeItem}
          {marqueeItem}
          {marqueeItem}
        </div>
      </div>

      {/* Main Navigation Bar - Full Width */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2 sm:py-2.5' 
            : 'bg-slate-950/90 backdrop-blur-sm border-b border-white/5 py-3'
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo - Full Clinic Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-hospital-600 via-hospital-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-hospital-600/30 group-hover:scale-105 transition-transform shrink-0">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-sm sm:text-lg font-black tracking-tight block leading-tight text-white whitespace-nowrap">
                Siya's <span className="text-[#0866E9] font-bold">PHYSIOTHERAPY</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase block text-slate-300 whitespace-nowrap leading-none mt-0.5">
                &amp; Rehabilitation Centre
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              to="/" 
              className={`text-xs xl:text-sm font-semibold transition-colors ${
                location.pathname === '/' 
                  ? 'text-[#0866E9]' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Treatments Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button 
                type="button"
                className="text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors py-2 text-slate-200 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMegaMenuOpen(prev => !prev);
                }}
              >
                <span>Treatments</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </button>

              {/* Mega Dropdown with seamless hover bridge */}
              {isMegaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px] z-50"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                >
                  <div className="bg-slate-900/98 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                    {TREATMENTS.map((dept) => (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() => {
                          setIsMegaMenuOpen(false);
                          openTreatmentDetail(dept);
                        }}
                        className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-hospital-500/20 text-hospital-300 flex items-center justify-center shrink-0 group-hover:bg-hospital-500 group-hover:text-white transition-colors">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white group-hover:text-sky-300 block">
                            {dept.name}
                          </span>
                          <span className="text-[10px] text-slate-400 line-clamp-1">
                            {dept.shortDesc}
                          </span>
                        </div>
                      </button>
                    ))}
                    <div className="col-span-2 pt-2 border-t border-white/10 flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Personalized 1-on-1 Sessions</span>
                      <Link to="/treatments" onClick={() => setIsMegaMenuOpen(false)} className="text-sky-400 hover:underline font-bold">
                        View All Treatments →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          <Link 
            to="/about" 
            className={`text-xs xl:text-sm font-semibold transition-colors ${
              location.pathname === '/about' ? 'text-[#0866E9]' : 'text-slate-200 hover:text-white'
            }`}
          >
            Specialist &amp; About
          </Link>

          <a 
            href="/#facilities" 
            className="text-xs xl:text-sm font-semibold transition-colors text-slate-200 hover:text-white"
          >
            Facilities
          </a>

          <a 
            href="/#packages" 
            className="text-xs xl:text-sm font-semibold transition-colors text-slate-200 hover:text-white"
          >
            Rehab Packages
          </a>

          <a 
            href="/#why-us" 
            className="text-xs xl:text-sm font-semibold transition-colors text-slate-200 hover:text-white"
          >
            Why Choose Us
          </a>

          <Link 
            to="/stories" 
            className={`text-xs xl:text-sm font-semibold transition-colors ${
              location.pathname === '/stories' ? 'text-[#0866E9]' : 'text-slate-200 hover:text-white'
            }`}
          >
            Recovery Stories
          </Link>

          <Link 
            to="/contact" 
            className={`text-xs xl:text-sm font-semibold transition-colors ${
              location.pathname === '/contact' ? 'text-[#0866E9] font-bold border-b-2 border-[#0866E9] pb-0.5' : 'text-slate-200 hover:text-white'
            }`}
          >
            Contact &amp; Clinic
          </Link>
        </div>

          {/* Desktop Right Action CTAs */}
          {/* Desktop Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 rounded-xl font-bold text-xs backdrop-blur-md transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 rounded-xl transition-all flex items-center justify-center"
              aria-label="WhatsApp Clinic Desk"
            >
              <WhatsAppIconSVG className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => openAppointment()}
              className="px-4 py-2 bg-gradient-to-r from-hospital-500 to-hospital-600 hover:from-hospital-600 hover:to-hospital-700 text-white rounded-xl font-bold text-xs shadow-md shadow-hospital-600/30 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-white/10 text-white hover:bg-white/15 active:bg-white/20 transition-colors flex items-center justify-center shrink-0"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1 text-left">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Home
              </Link>
              <Link
                to="/treatments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Treatments &amp; Conditions
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Specialist &amp; About Centre
              </Link>
              <a
                href="/#facilities"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Facilities &amp; Tech
              </a>
              <a
                href="/#packages"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Rehab Packages
              </a>
              <a
                href="/#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Why Choose Us
              </a>
              <Link
                to="/stories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Recovery Stories &amp; Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                Contact &amp; Clinic
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAppointment();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-hospital-500 to-hospital-600 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-2.5 bg-white/10 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                Call Desk: {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sticky Quick-Action Strip - Glass Background Effect (No extra black bar) */}
      <div className="lg:hidden w-full bg-slate-950/45 backdrop-blur-xl border-b border-white/10 px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
        {/* Call Button (Compact) */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 text-white transition-all flex items-center justify-center gap-1 shrink-0 text-[11px] font-semibold"
          aria-label="Call Clinic"
        >
          <Phone className="w-3 h-3 text-sky-400 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button (Compact) */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] transition-all flex items-center justify-center gap-1 shrink-0 text-[11px] font-semibold"
          aria-label="WhatsApp Clinic"
        >
          <WhatsAppIconSVG className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment Button (Prominent, Full Text Guaranteed Visible) */}
        <button
          onClick={() => openAppointment()}
          className="flex-1 min-w-0 py-1.5 px-2 rounded-lg bg-gradient-to-r from-hospital-500 to-hospital-600 active:bg-hospital-700 text-white font-bold text-[11px] sm:text-xs shadow-md shadow-hospital-600/30 flex items-center justify-center gap-1 whitespace-nowrap"
        >
          <Calendar className="w-3 h-3 text-sky-200 shrink-0" />
          <span className="whitespace-nowrap">Book Appointment</span>
        </button>
      </div>
    </header>
  );
};
