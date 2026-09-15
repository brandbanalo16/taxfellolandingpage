'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';
import HeroLeadForm from './HeroLeadForm';

export default function Hero() {
  const handlePopup = () => {
    window.dispatchEvent(new Event('open-consultation-popup'));
  };
  const trustPoints = [
    'CA-Led Expertise',
    'Transparent Pricing',
    'End-to-End Compliance',
    'Dedicated Support'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-ivory/80 via-surface-warm to-surface-warm pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/70">
      {/* Subtle Warm Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
              <span>Tax, Compliance & Business Advisory in Delhi NCR</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              India&apos;s Most Trusted<span className="text-brand-700"> Tax Consultant</span> for Tax, GST and Business Compliance
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Taxfello helps individuals, startups, MSMEs and established businesses manage income tax, GST, accounting, company registration, ROC compliance and financial planning with professional Tax Adviser&apos;s support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={handlePopup}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-brand-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-800 hover:text-navy-DEFAULT bg-white hover:bg-surface-ivory rounded-xl border border-stone-300 shadow-sm transition-colors"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 w-full">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Why Delhi NCR Businesses Trust Taxfello:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center space-x-1.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Lead Form (Desktop only - mobile stays clean and compact without duplicate 2000px form scroll) */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <HeroLeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
