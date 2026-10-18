import React from 'react';
import { Sparkles } from 'lucide-react';

export const IDesign4uBadge: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <a
        href="https://idesign4u.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-hospital-navy/90 text-white/90 border border-white/10 text-[11px] font-medium shadow-xl hover:bg-hospital-navy hover:text-white hover:border-primary/50 transition-all backdrop-blur-md group"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span>Crafted by</span>
        <strong className="text-sky-300 font-semibold group-hover:text-sky-200 transition-colors">
          iDesign4u
        </strong>
      </a>
    </div>
  );
};
