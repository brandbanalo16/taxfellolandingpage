'use client';

import React from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  PieChart, 
  BarChart3, 
  Coins, 
  Scale, 
  LineChart, 
  FileSpreadsheet,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function VirtualCFOSection() {
  const metrics = [
    { title: 'Cash Flow Management', desc: 'Predict runway, optimize receivables and working capital', icon: Coins },
    { title: 'Financial Planning', desc: 'Long-term scenario models and annual operating plans (AOP)', icon: LineChart },
    { title: 'MIS Reporting', desc: 'Institutional-grade board and investor performance decks', icon: FileSpreadsheet },
    { title: 'Forecasting & Budgeting', desc: 'Departmental budget thresholds with variance analysis', icon: BarChart3 },
    { title: 'Profitability Analysis', desc: 'Unit economics, gross margin audits and cost rationalization', icon: PieChart },
    { title: 'Business Strategy', desc: 'Fundraise readiness, cap table advisory and audit support', icon: Scale },
  ];

  const handlePopup = () => {
    window.dispatchEvent(new Event('open-consultation-popup'));
  };

  return (
    <section id="virtual-cfo" className="py-12 sm:py-20 bg-navy-DEFAULT text-white relative overflow-hidden scroll-mt-20">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Prop, CTA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-xs font-semibold mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Premium Financial Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-5 leading-tight">
              A CFO for Your Business — Without the Full-Time Cost
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Make better financial decisions with strategic CFO support for cash flow, budgeting, forecasting, MIS reporting, profitability and business growth. Built specifically for high-velocity startups and scaling MSMEs in Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Button 1: Call */}
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span>Call a CFO Expert</span>
              </a>

              {/* Button 2: Popup consultation */}
              <button
                onClick={handlePopup}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-navy-DEFAULT bg-white hover:bg-slate-100 shadow-md transition-all duration-200 group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fractional engagement tailored to your business needs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct oversight by senior advisors and ex-corporate finance leaders</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Strategy Metric Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400 mb-3 border border-slate-700/80">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
