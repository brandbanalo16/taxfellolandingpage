'use client';

import React from 'react';
import { User, Laptop, Rocket, Store, Building, Globe } from 'lucide-react';
import { WHO_WE_SERVE } from '@/lib/constants';

const ICONS: Record<string, React.ReactNode> = {
  User: <User className="w-6 h-6 text-brand-700" />,
  Laptop: <Laptop className="w-6 h-6 text-brand-700" />,
  Rocket: <Rocket className="w-6 h-6 text-brand-700" />,
  Store: <Store className="w-6 h-6 text-brand-700" />,
  Building: <Building className="w-6 h-6 text-brand-700" />,
  Globe: <Globe className="w-6 h-6 text-brand-700" />,
};

export default function WhoWeServe() {
  const handlePopup = () => {
    window.dispatchEvent(new Event('open-consultation-popup'));
  };

  return (
    <section id="who-we-serve" className="py-12 sm:py-20 bg-surface-warm scroll-mt-20 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-2 sm:mb-3">
            Tailored Advisory
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solutions Designed Around Your Needs
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            Whether you are an individual taxpayer in South Delhi or an expanding tech startup in Gurugram, our compliance workflows match your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHO_WE_SERVE.map((item, idx) => (
            <div
              key={item.id}
              onClick={handlePopup}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePopup()}
              className={`group relative bg-white rounded-2xl p-6 sm:p-7 border cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 hover:border-brand-300
                ${idx === 1 ? 'border-brand-400 shadow-[0_4px_20px_rgba(37,99,235,0.15)] ring-1 ring-brand-200' : 'border-stone-200/90 shadow-soft'}
              `}
            >
              {/* Top accent line reveal */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 via-blue-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-surface-ivory border border-stone-200 shadow-sm flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
                    {ICONS[item.iconName]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="relative">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/70 group-hover:border-brand-100 transition-colors duration-200">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
