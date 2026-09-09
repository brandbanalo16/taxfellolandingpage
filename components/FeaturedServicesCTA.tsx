import React from 'react';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function FeaturedServicesCTA() {
  return (
    <section className="py-12 bg-surface-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-navy-DEFAULT via-navy-light to-brand-900 text-white p-8 sm:p-10 shadow-premium overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Expert Guidance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tell us about your requirement and our experts will help you choose the right solution.
              </p>
              <div className="text-xs text-slate-400 font-medium mt-3 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Professional guidance. Clear process. Reliable support.</span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href="#lead-form"
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-navy-DEFAULT bg-white hover:bg-slate-100 rounded-xl shadow hover:shadow-md transition-all duration-200 group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
