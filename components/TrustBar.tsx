import React from 'react';
import { Clock, Users, Award, Building, Lock, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: Clock,
      value: "19+",
      label: "Years of service",
    },
    {
      icon: Users,
      value: "2M+",
      label: "Happy customers",
    },
    {
      icon: Award,
      value: "1,000+",
      label: "Chartered accountants",
    },
    {
      icon: Building,
      value: "200+",
      label: "Corporates",
    },
    {
      icon: Lock,
      value: "100%",
      label: "Secure Tax Vault",
    },
    {
      icon: ShieldCheck,
      value: "ERI",
      label: "Authorized filing",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-soft p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/80">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-start ${
                    idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 leading-snug">
                    {stat.label}
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
