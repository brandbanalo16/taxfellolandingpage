import React from 'react';
import Link from 'next/link';
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
  FileText: <FileText className="w-6 h-6 text-brand-700" />,
  Receipt: <Receipt className="w-6 h-6 text-brand-700" />,
  Building2: <Building2 className="w-6 h-6 text-brand-700" />,
  Calculator: <Calculator className="w-6 h-6 text-brand-700" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-700" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-brand-700" />,
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const isVirtualCFO = service.isFeatured;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
        isVirtualCFO
          ? 'bg-gradient-to-b from-white to-brand-50/40 border-2 border-brand-500 shadow-premium hover:shadow-hover ring-1 ring-brand-200'
          : 'bg-white border border-slate-200/90 shadow-soft hover:shadow-hover hover:-translate-y-1'
      }`}
    >
      <div>
        {/* Top Header & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
            <span className="group-hover:brightness-0 group-hover:invert transition-all">
              {ICON_MAP[service.iconName] || <FileText className="w-6 h-6 text-brand-700" />}
            </span>
          </div>
          {service.badge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-900 border border-brand-200">
              <Sparkles className="w-3 h-3 mr-1 text-brand-600" />
              {service.badge}
            </span>
          )}
        </div>

        {/* Eyebrow & H2/Title */}
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          {service.eyebrow}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Feature List (Top 3 on mobile to keep page compact, all on sm+) */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-100">
          {service.features.map((feature, fIdx) => (
            <div 
              key={feature} 
              className={`flex items-start text-xs sm:text-sm text-slate-700 ${fIdx >= 3 ? 'hidden sm:flex' : 'flex'}`}
            >
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
              <span className="line-clamp-1 sm:line-clamp-none">{feature}</span>
            </div>
          ))}
        </div>

        {/* Natural SEO Phrases Tags (Hidden on mobile to save vertical space) */}
        <div className="hidden sm:flex flex-wrap gap-1.5 mb-6">
          {service.seoPhrases.map((phrase) => (
            <span
              key={phrase}
              className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
            >
              #{phrase}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-3 border-t border-slate-100">
        <Link
          href={service.href}
          className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group-hover:gap-2 ${
            isVirtualCFO
              ? 'bg-brand-700 text-white hover:bg-navy-DEFAULT shadow-sm'
              : 'bg-slate-900 text-white hover:bg-brand-700 shadow-sm'
          }`}
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
