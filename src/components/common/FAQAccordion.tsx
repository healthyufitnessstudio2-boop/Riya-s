import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl transition-all duration-200 border",
              isOpen 
                ? "bg-white border-brand-purple-200 shadow-brand-sm" 
                : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-500 rounded-2xl cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-sm sm:text-base text-slate-900 pr-4">
                {item.question}
              </span>
              <span
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen ? "bg-brand-purple-100 text-brand-purple rotate-180" : "bg-slate-100 text-slate-500"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
