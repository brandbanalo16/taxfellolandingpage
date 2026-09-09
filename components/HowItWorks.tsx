'use client';

import React, { useState } from 'react';
import { 
  UploadCloud, 
  Calculator, 
  FileText, 
  Send, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: 'STEP 01',
      title: 'Upload documents',
      desc: 'Form 16, AIS, 26AS, salary slips and capital gains statements — straight to Tax Vault.',
      icon: UploadCloud,
    },
    {
      stepNumber: 'STEP 02',
      title: 'Review computation',
      desc: 'We prepare the computation and show tax due or refund before filing.',
      icon: Calculator,
    },
    {
      stepNumber: 'STEP 03',
      title: 'Choose your plan',
      desc: 'Self, assisted, live, capital gains, foreign income, ITR-U or business filing.',
      icon: FileText,
    },
    {
      stepNumber: 'STEP 04',
      title: 'File your return',
      desc: 'Your ITR is filed online through Taxfello securely as ERI-authorized intermediary.',
      icon: Send,
    },
    {
      stepNumber: 'STEP 05',
      title: 'Confirmation & support',
      desc: 'Receive ITR-V, e-verify and keep getting return-related support after filing.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-white border-t border-stone-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 sm:mb-3">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            File your ITR in five steps.
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From plan selection to refund tracking — the whole journey, connected.
          </p>
        </div>

        {/* 5-Step Stepper Component */}
        <div className="relative">
          {/* Desktop Timeline Stepper Bar */}
          <div className="hidden lg:block relative mb-12">
            {/* Background connecting rail */}
            <div className="absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />
            
            {/* Progress rail filling up to active step */}
            <div 
              className="absolute top-[26px] left-[10%] h-[2px] bg-blue-600 z-0 transition-all duration-300"
              style={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
            />

            <div className="grid grid-cols-5 relative z-10">
              {steps.map((s, idx) => {
                const IconComponent = s.icon;
                const isCurrent = idx === activeStep;
                const isPassed = idx < activeStep;

                return (
                  <button
                    type="button"
                    key={s.stepNumber}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    <span className={`text-[11px] font-semibold tracking-wider uppercase mb-2.5 transition-colors ${
                      isCurrent ? 'text-blue-600 font-bold' : 'text-slate-400'
                    }`}>
                      {s.stepNumber}
                    </span>

                    {/* Step Icon Circle */}
                    <div className={`w-13 h-13 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                      isCurrent 
                        ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.12)] scale-110' 
                        : isPassed 
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-200 bg-white text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'
                    } w-12 h-12`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Cards / Explanations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, idx) => (
              <div
                key={s.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 text-center flex flex-col items-center ${
                  activeStep === idx 
                    ? 'bg-blue-50/50 border-2 border-blue-500 shadow-sm' 
                    : 'bg-surface-warm/60 border border-stone-200/80 hover:bg-white hover:shadow-soft'
                }`}
              >
                <div className="lg:hidden text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {s.stepNumber}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Micro CTA at bottom */}
        <div className="mt-12 text-center">
          <a
            href="#lead-form"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-slate-900 transition-colors group"
          >
            <span>Have specific questions before filing? Talk to a CA specialist</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
