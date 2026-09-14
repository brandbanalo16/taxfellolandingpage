import React from 'react';
import { 
  Target, 
  Headphones, 
  Layers, 
  Lock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function WhyTaxfello() {
  const satellitePills = [
    { label: 'ITR Filing', position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-8' },
    { label: 'Tax Vault', position: 'top-6 right-6 translate-x-4' },
    { label: 'AIS / 26AS', position: 'bottom-16 right-0 translate-x-8' },
    { label: 'CA Review', position: 'bottom-0 right-1/4 translate-y-6' },
    { label: 'Capital Gains', position: 'bottom-0 left-1/4 -translate-y-6' },
    { label: 'GST / TDS', position: 'bottom-16 left-0 -translate-x-8' },
    { label: 'Refund Support', position: 'top-6 left-6 -translate-x-4' },
  ];

  const valueCards = [
    {
      icon: Target,
      title: 'Built for accuracy',
      desc: 'Right ITR form, correct income, deductions and AIS / 26AS checks — every computation cross-verified before filing.',
    },
    {
      icon: Headphones,
      title: 'Expert help, no offline hassle',
      desc: 'Upload, consult experts and finish your filing online without ever visiting a physical tax office.',
    },
    {
      icon: Layers,
      title: 'More than filing',
      desc: 'Tax planning, TaxOptimizer, compliance and financial wellness — connected on one platform.',
    },
    {
      icon: Lock,
      title: 'Secure document handling',
      desc: 'Store and access tax documents through the encrypted Tax Vault — 256-bit AES, ISO 27001.',
    },
    {
      icon: ShieldCheck,
      title: 'Support after filing',
      desc: 'Confirmation, refund status, rectifications and follow-ups — well after filing day.',
    },
  ];

  return (
    <section id="why-taxfello" className="py-12 sm:py-20 bg-[#050b17] text-white relative overflow-hidden scroll-mt-20">
      {/* Grid dotted background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Intelligence Orbit Diagram on Left & Big Title on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-10 sm:mb-16">
          
          {/* Left: Intelligence Layer Glowing Orbit Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-blue-500/15" />
              
              {/* Center Glowing Core */}
              <div className="relative z-20 w-36 h-36 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 p-1 shadow-[0_0_50px_rgba(37,99,235,0.6)] flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-[#07132c] flex flex-col items-center justify-center px-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400 leading-tight">
                    TAXFELLO
                  </span>
                  <span className="text-[12px] font-black uppercase tracking-wider text-white leading-tight mt-0.5">
                    INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 leading-tight mt-0.5">
                    LAYER
                  </span>
                </div>
              </div>

              {/* Connecting spokes */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent absolute" />
              </div>

              {/* Satellite Node Pills */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  ITR Filing
                </span>
              </div>

              <div className="absolute top-8 right-2 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  Tax Vault
                </span>
              </div>

              <div className="absolute bottom-16 right-0 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  AIS / 26AS
                </span>
              </div>

              <div className="absolute bottom-2 right-12 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  Expert Review
                </span>
              </div>

              <div className="absolute bottom-2 left-12 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  Capital Gains
                </span>
              </div>

              <div className="absolute bottom-16 left-0 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  GST / TDS
                </span>
              </div>

              <div className="absolute top-8 left-2 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0c1b3a] border border-blue-500/40 text-blue-300 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5" />
                  Refund Support
                </span>
              </div>
            </div>
          </div>

          {/* Right: Section Heading & Summary */}
          <div className="lg:col-span-6 text-left">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
              WHY TAXFELLO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Why Taxfello gets it right the first time
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Accurate filing. Expert backing. Protection that lasts after filing.
            </p>
          </div>

        </div>

        {/* Bottom Feature Cards Grid (Row of 3, then Row of 2 centered) */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.slice(0, 3).map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#09152e]/80 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-blue-500/50 hover:bg-[#0c1b3a] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom 2 Centered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {valueCards.slice(3).map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#09152e]/80 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-blue-500/50 hover:bg-[#0c1b3a] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
