import React from 'react';
import { Link } from 'react-router-dom';
import { Treatment } from '../../types';
import { buildWhatsAppEnquiryUrl } from '../../config/clinicConfig';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from './Button';

interface TreatmentCardProps {
  treatment: Treatment;
  isDetailed?: boolean;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, isDetailed = false }) => {
  const whatsappUrl = buildWhatsAppEnquiryUrl({
    treatment: treatment.title,
  });

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-brand-sm hover:shadow-brand-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Thumbnail Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={treatment.image}
          alt={treatment.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {treatment.category === 'secondary' && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[10px] font-semibold text-brand-purple px-2.5 py-1 rounded-full shadow-xs">
            Specialized Care
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-brand-purple transition-colors mb-2">
            {treatment.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {treatment.shortDesc}
          </p>

          {/* Detailed Symptoms / Highlights */}
          {isDetailed && treatment.symptoms && treatment.symptoms.length > 0 && (
            <div className="mb-4 pt-3 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-700 block mb-2">Common Signs:</span>
              <ul className="space-y-1.5">
                {treatment.symptoms.slice(0, 3).map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2 mt-auto">
          <Button
            asLink
            href={whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="sm"
            icon={<MessageCircle className="w-4 h-4" />}
            className="w-full sm:flex-1 justify-center"
          >
            Enquire
          </Button>
          <Link
            to={`/contact?treatment=${encodeURIComponent(treatment.title)}`}
            className="inline-flex items-center justify-center text-xs font-semibold text-brand-purple hover:text-brand-purple-900 hover:bg-brand-purple-50 px-3.5 py-2 rounded-full transition-colors w-full sm:w-auto"
          >
            <span>Book Slot</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
