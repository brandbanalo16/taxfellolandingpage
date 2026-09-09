'use client';

import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-premium lg:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#lead-form"
          className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-navy-DEFAULT hover:bg-brand-700 shadow transition-colors"
        >
          <span>Talk to an Expert</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </a>
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="inline-flex items-center justify-center p-3 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300"
          aria-label={`Call Taxfello at ${BRAND.phonePlaceholder}`}
        >
          <PhoneCall className="w-5 h-5 text-emerald-600" />
        </a>
      </div>
    </div>
  );
}
