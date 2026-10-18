import React, { useState, useRef, useEffect } from 'react';
import { 
  Activity, Calendar, Info, ChevronLeft, ChevronRight, Pause, Play
} from 'lucide-react';
import { TREATMENTS } from '../../data/physioData';
import { useModal } from '../../context/ModalContext';

export const DepartmentsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { openTreatmentDetail, openAppointment } = useModal();

  // Duplicated list for seamless infinite loop
  const duplicatedDepts = [...TREATMENTS, ...TREATMENTS];

  // Continuous auto-scroll loop via requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isPaused && !isDragging && container) {
        container.scrollLeft += 0.8;
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Mouse Drag Handlers (Desktop manual drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    const container = scrollRef.current;
    if (container) {
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeftStart(container.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.4;
      container.scrollLeft = scrollLeftStart - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 2000);
    }
  };

  // Touch Handlers (Mobile touch swipe)
  const handleTouchStart = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  // Manual nudge buttons
  const handleScrollManual = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    setIsPaused(true);
    const scrollAmount = direction === 'left' ? -280 : 280;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  const togglePlayPause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <section id="departments" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/25 to-white overflow-hidden select-none w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-50 text-hospital-700 border border-hospital-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5" />
              Clinical Disciplines
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Departments &amp; Specialties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
              Explore our physical therapy disciplines equipped with advanced diagnostic assessment, manual mobilisation, and electrotherapy.
            </p>
          </div>

          {/* Slider Controls: Pause/Resume Toggle & Manual Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={togglePlayPause}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 shadow-sm ${
                isPaused
                  ? "bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
              aria-label={isPaused ? "Resume auto-scrolling" : "Pause auto-scrolling"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-amber-600" /> : <Pause className="w-3.5 h-3.5 fill-slate-600" />}
              <span>{isPaused ? "Paused" : "Auto-Scrolling"}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handleScrollManual('left')}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm transition-transform active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollManual('right')}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm transition-transform active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-Scrolling Infinite Carousel Track - Full Width */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-3 px-1 cursor-grab active:cursor-grabbing touch-pan-x w-full"
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {duplicatedDepts.map((dept, idx) => (
            <div
              key={`${dept.id}-${idx}`}
              className="w-[180px] sm:w-[230px] md:w-[280px] shrink-0 bg-gradient-to-b from-slate-50 to-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-hospital-300 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-hospital-50 text-hospital-600 flex items-center justify-center transition-colors duration-300 shadow-inner shrink-0 group-hover:bg-hospital-500 group-hover:text-white">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border bg-hospital-50 text-hospital-700 border-hospital-200 truncate max-w-[100px] sm:max-w-none">
                    {dept.category || 'Specialty'}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 group-hover:text-hospital-700 transition-colors leading-snug">
                  {dept.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1 line-clamp-2 leading-snug">
                  {dept.shortDesc}
                </p>
              </div>

              {/* Card Actions */}
              <div className="mt-3 pt-2 sm:pt-3 border-t border-slate-100/90 flex items-center justify-between gap-1 sm:gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openTreatmentDetail(dept);
                  }}
                  className="text-[10px] sm:text-xs font-bold text-slate-600 hover:text-hospital-600 transition-colors flex items-center gap-0.5"
                >
                  <Info className="w-3 h-3 text-slate-400" />
                  <span>Details</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openAppointment(dept.id);
                  }}
                  className="px-2 py-1 sm:px-2.5 sm:py-1.5 bg-white hover:bg-hospital-600 hover:text-white text-hospital-700 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl border border-hospital-200 transition-all flex items-center gap-1 shadow-2xs shrink-0"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
