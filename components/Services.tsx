import React from 'react';
import { CORE_SERVICES } from '@/lib/constants';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-surface-ivory/60 scroll-mt-20 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Complete Tax & Business Solutions Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From tax filing and GST compliance to business registration, accounting and strategic financial advisory, Taxfello provides end-to-end professional services for individuals and businesses across Delhi NCR.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
