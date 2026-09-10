import React from 'react';
import { ArrowRight, MessageCircle, Wallet, Lock, UserCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-surface-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-gradient-to-r from-slate-950 via-[#071328] to-[#040e20] text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-premium overflow-hidden">
          {/* Subtle starry / blue glow effect in background */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subhead, and CTAs */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Ready to file with confidence?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
                Whether your return is simple, complex, delayed or business-related — we&apos;ll help you file accurately with the right level of expert support.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Start filing</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-colors group"
                >
                  <span>Talk to a tax expert</span>
                  <MessageCircle className="w-4 h-4 ml-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Channel Availability Note */}
              <p className="text-xs text-slate-400">
                Support available on WhatsApp, phone and email.
              </p>
            </div>

            {/* Right Column: 3 Sleek Live Status Cards Stack */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              
              {/* Card 1: Refund Status */}
              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    REFUND STATUS
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wallet className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-base font-bold text-white">Refund Processed ✓</span>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Card 2: Tax Vault */}
              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    TAX VAULT
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-base font-bold text-white">Secured ✓</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  256-bit
                </span>
              </div>

              {/* Card 3: Expert Assigned */}
              <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    EXPERT ASSIGNED
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-base font-bold text-white">Tax Expert • Filed ✓</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Verified
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
