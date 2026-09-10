import React from 'react';
import { Users, Building2, ShieldCheck, Award, Clock, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '20k+',
    label: 'Happy Clients',
    sublabel: 'Individuals & Businesses',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Building2,
    value: '200+',
    label: 'Corporates Served',
    sublabel: 'Pvt Ltd, LLPs & MSMEs',
    color: 'from-indigo-500/20 to-indigo-600/10',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Secure Tax Vault',
    sublabel: '256-bit encrypted storage',
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: Award,
    value: 'ERI',
    label: 'Authorized Filing',
    sublabel: 'Govt. registered e-filer',
    color: 'from-amber-500/20 to-amber-600/10',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
  },
  {
    icon: Star,
    value: '4.9★',
    label: 'Client Rating',
    sublabel: 'Verified Google reviews',
    color: 'from-rose-500/20 to-rose-600/10',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
  },
  {
    icon: Clock,
    value: '2hr',
    label: 'Response Time',
    sublabel: 'Avg. expert callback time',
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10',
  },
];

export default function TrustBar() {
  return (
    <section className="py-6 sm:py-10 bg-surface-warm" aria-label="Trust statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium card container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)] bg-white">
          {/* Subtle top gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-600 via-blue-500 to-emerald-500" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-stone-100">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative flex flex-col items-start p-5 sm:p-6 transition-all duration-300 hover:bg-gradient-to-b ${stat.color} cursor-default`}
                >
                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-xl ${stat.iconBg} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className={`w-4 h-4 ${stat.iconColor}`} />
                  </div>

                  {/* Value */}
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none mb-1 group-hover:text-slate-950 transition-colors">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xs font-bold text-slate-700 leading-snug mb-0.5">
                    {stat.label}
                  </div>

                  {/* Sublabel */}
                  <div className="text-[10px] text-slate-400 leading-snug hidden sm:block">
                    {stat.sublabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
