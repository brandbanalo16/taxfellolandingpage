'use client';

import React from 'react';
import { 
  FileText, 
  Receipt, 
  Building2, 
  Calculator, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { ServiceItem } from '@/lib/constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const isVirtualCFO = service.isFeatured;

  const handlePopup = () => {
    window.dispatchEvent(new Event('open-consultation-popup'));
  };

  return (
    <div
      onClick={handlePopup}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handlePopup()}
      className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isVirtualCFO
          ? 'bg-gradient-to-b from-white to-brand-50/60 border-2 border-brand-400 shadow-premium hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)] hover:-translate-y-2 hover:border-brand-500'
          : 'bg-white border border-slate-200/90 shadow-soft hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] hover:-translate-y-2 hover:border-brand-300'
      }`}
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isVirtualCFO
          ? 'bg-gradient-to-br from-brand-50/60 via-transparent to-blue-50/40'
          : 'bg-gradient-to-br from-slate-50/80 via-transparent to-brand-50/30'
      }`} />

      {/* Top glow accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 via-blue-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative p-6 sm:p-7 flex flex-col h-full">
        <div>
          {/* Top Header & Badge */}
          <div className="flex items-center justify-between mb-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 ${
              isVirtualCFO
                ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white'
                : 'bg-brand-50 border border-brand-100 text-brand-700 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:border-transparent'
            }`}>
              {ICON_MAP[service.iconName] || <FileText className="w-6 h-6" />}
            </div>
            {service.badge && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 border border-brand-200 group-hover:bg-brand-700 group-hover:text-white group-hover:border-brand-700 transition-colors duration-200">
                <Sparkles className="w-3 h-3 mr-1" />
                {service.badge}
              </span>
            )}
          </div>

          {/* Eyebrow & Title */}
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 group-hover:text-brand-500 transition-colors duration-200">
            {service.eyebrow}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors duration-200 leading-snug">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5 group-hover:text-slate-700 transition-colors">
            {service.description}
          </p>

          {/* Feature List */}
          <div className="space-y-2 mb-5 pt-4 border-t border-slate-100 group-hover:border-brand-100 transition-colors duration-200">
            {service.features.map((feature, fIdx) => (
              <div 
                key={feature} 
                className={`flex items-start text-xs sm:text-sm text-slate-700 ${fIdx >= 3 ? 'hidden sm:flex' : 'flex'}`}
              >
                <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center mr-2.5 shrink-0 mt-0.5 group-hover:bg-emerald-500 transition-colors duration-200">
                  <Check className="w-2.5 h-2.5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          {/* SEO Tags */}
          <div className="hidden sm:flex flex-wrap gap-1.5 mb-5">
            {service.seoPhrases.map((phrase) => (
              <span
                key={phrase}
                className="text-[10px] font-medium text-slate-400 bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 px-2 py-0.5 rounded-md transition-colors duration-200"
              >
                #{phrase}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-4 border-t border-slate-100 group-hover:border-brand-100 transition-colors duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePopup();
            }}
            className={`w-full inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isVirtualCFO
                ? 'bg-brand-700 text-white hover:bg-navy-DEFAULT group-hover:bg-brand-600 shadow-sm group-hover:shadow-md'
                : 'bg-slate-900 text-white hover:bg-brand-700 group-hover:bg-brand-600 shadow-sm group-hover:shadow-md'
            }`}
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
