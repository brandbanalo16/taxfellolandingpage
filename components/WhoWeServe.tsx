import React from 'react';
import { User, Laptop, Rocket, Store, Building, Globe, ArrowRight } from 'lucide-react';
import { WHO_WE_SERVE } from '@/lib/constants';

const ICONS: Record<string, React.ReactNode> = {
  User: <User className="w-6 h-6 text-brand-700" />,
  Laptop: <Laptop className="w-6 h-6 text-brand-700" />,
  Rocket: <Rocket className="w-6 h-6 text-brand-700" />,
  Store: <Store className="w-6 h-6 text-brand-700" />,
  Building: <Building className="w-6 h-6 text-brand-700" />,
  Globe: <Globe className="w-6 h-6 text-brand-700" />,
};

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-12 sm:py-20 bg-surface-warm scroll-mt-20 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-2 sm:mb-3">
            Tailored Advisory
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solutions Designed Around Your Needs
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            Whether you are an individual taxpayer in South Delhi or an expanding tech startup in Gurugram, our compliance workflows match your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHO_WE_SERVE.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 hover:border-brand-300 hover:shadow-hover shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-ivory border border-stone-200 shadow-sm flex items-center justify-center mb-5">
                  {ICONS[item.iconName]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/70">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
