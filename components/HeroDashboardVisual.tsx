import React from 'react';
import { CheckCircle2, AlertCircle, ArrowUpRight, TrendingUp, Calendar, ShieldCheck, Activity } from 'lucide-react';

export default function HeroDashboardVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-70"></div>

      <div className="relative bg-white rounded-2xl border border-slate-200/80 shadow-premium p-6 overflow-hidden">
        {/* Top Header of the mock dashboard */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-md bg-navy-DEFAULT flex items-center justify-center text-white font-bold text-xs">
              T✦
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                Taxfello Client Hub
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                  Live
                </span>
              </div>
              <div className="text-[11px] text-slate-500">Delhi NCR Regional Compliance</div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-xs">
            <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-700">100% In Sync</span>
          </div>
        </div>

        {/* Overview Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Financial Health</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-xl font-bold text-navy-DEFAULT">₹12.4 Lakhs</div>
            <div className="text-[11px] text-emerald-600 font-medium mt-0.5 flex items-center">
              <span>+18.4% MoM Clean Run</span>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Compliance Score</span>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            </div>
            <div className="text-xl font-bold text-navy-DEFAULT">99.8 / 100</div>
            <div className="text-[11px] text-brand-600 font-medium mt-0.5">
              Zero Penalty Standing
            </div>
          </div>
        </div>

        {/* Compliance Checklist Items */}
        <div className="space-y-2.5 mb-5">
          <div className="text-xs font-semibold text-slate-800 flex items-center justify-between">
            <span>Mandatory Filings Status</span>
            <span className="text-[11px] text-slate-400 font-normal">FY 2024-25</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-800">Income Tax (ITR-6)</span>
            </div>
            <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
              Filed & Verified
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-800">GST (GSTR-1 & 3B)</span>
            </div>
            <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
              Compliant
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-800">ROC / MCA Annual Return</span>
            </div>
            <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
              Up to date
            </span>
          </div>
        </div>

        {/* Upcoming Deadline Notification Banner */}
        <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start space-x-3">
          <Calendar className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
          <div className="text-xs">
            <div className="font-semibold text-amber-900">Upcoming: GST Return Filing</div>
            <div className="text-amber-800/80 text-[11px] mt-0.5">
              Our expert is preparing ITC reconciliation. Due in 5 days.
            </div>
          </div>
        </div>

        {/* Floating Verified Badge */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            CA/CS Supervised Advisory
          </span>
          <span className="font-medium text-brand-700 flex items-center gap-0.5">
            Delhi NCR Portal <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
