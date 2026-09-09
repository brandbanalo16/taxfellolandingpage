import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '@/lib/constants';

export default function Locations() {
  return (
    <section id="delhi-ncr" className="py-20 bg-surface-ivory/70 scroll-mt-20 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Your Local Tax & Compliance Partner in Delhi NCR
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re a salaried professional in Delhi, a startup founder in Gurugram, an MSME owner in Noida or an established company in Faridabad, Taxfello provides professional tax, GST, accounting, business registration and compliance support tailored to your requirements.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-soft hover:shadow-hover hover:border-brand-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 text-navy-DEFAULT mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <h3 className="text-lg font-bold text-slate-900">{loc.name}</h3>
                </div>
                <p className="text-xs font-medium text-brand-700 mb-3">{loc.tagline}</p>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
                  <span className="font-semibold text-slate-600">Key Hubs:</span> {loc.hub}
                </p>
                <div className="pt-3 border-t border-slate-100 mb-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Popular Services
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {loc.popularServices.map((svc) => (
                      <span
                        key={svc}
                        className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/#lead-form"
                className="inline-flex items-center text-xs font-semibold text-brand-700 hover:text-navy-DEFAULT pt-2 border-t border-slate-50 group"
              >
                <span>Consult in {loc.name}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Physical & Remote Consultation Available:</span>{' '}
            In-person visits across Delhi NCR corporate districts or 100% paperless digital onboarding via secure client portal.
          </p>
        </div>
      </div>
    </section>
  );
}
