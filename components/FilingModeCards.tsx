import React from 'react';
import { ArrowRight, CheckCircle2, Video, UserCheck } from 'lucide-react';

export default function FilingModeCards() {
  return (
    <section className="py-12 sm:py-16 bg-surface-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Assisted Filing (Light card with CA badges) */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-soft flex flex-col justify-between hover:shadow-hover transition-all duration-300 relative overflow-hidden">
            {/* Subtle soft background highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/60 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Top Tag & Avatar stack */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
                  <UserCheck className="w-3.5 h-3.5 mr-1.5" />
                  Assisted Filing
                </span>
                
                {/* Avatars Stack */}
                <div className="flex items-center -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    AR
                  </span>
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    PM
                  </span>
                  <span className="w-7 h-7 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    SK
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    1k+
                  </span>
                </div>
              </div>

              {/* Title & Copy */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Want an expert to file?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Upload your documents and a chartered accountant prepares and e-files your return with complete accuracy.
              </p>

              {/* Bullet Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span>Upload documents securely to Tax Vault</span>
                </div>
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span>An Expert CA prepares your computation</span>
                </div>
                <div className="flex items-center text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span>E-filed via authorized ERI portal</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Choose assisted filing</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Live With An Expert (Deep Navy Card with LIVE badge) */}
          <div className="bg-gradient-to-br from-slate-950 via-[#0a152e] to-[#071124] text-white rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-premium flex flex-col justify-between hover:shadow-hover transition-all duration-300 relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Top Tag & LIVE Indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800/80 text-slate-200 border border-slate-700">
                  <Video className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                  Live With An Expert
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5 animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Title & Copy */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Prefer live filing?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Connect with an expert on Google Meet or Zoom and complete your ITR live in one sitting.
              </p>

              {/* Bullet Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>Google Meet or Zoom 1-on-1 screen share</span>
                </div>
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>An Expert files while you watch in real time</span>
                </div>
                <div className="flex items-center text-sm font-medium text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 shrink-0 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>Same-day completion & instant verification</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Book live ITR session</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
