import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ChevronRight, 
  FileText,
  MapPin
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import LeadForm from './LeadForm';
import StickyMobileCTA from './StickyMobileCTA';

export interface ServicePageData {
  slug: string;
  h1: string;
  eyebrow: string;
  description: string;
  secondaryParagraph: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; href: string }[];
  seoLocationText: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-surface-warm">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-brand-700">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-medium">{data.eyebrow}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Delhi NCR Professional Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {data.h1}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {data.description}
          </p>

          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            {data.secondaryParagraph}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-navy-DEFAULT hover:bg-brand-700 rounded-xl shadow transition-colors"
            >
              <span>Book Expert Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Reviewed by Certified CAs
            </span>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Why Delhi NCR Clients Choose Taxfello for {data.eyebrow}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 shadow-soft"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Our Step-by-Step Execution Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.process.map((p) => (
              <div
                key={p.step}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-soft"
              >
                <div className="text-2xl font-black text-brand-700 font-mono mb-2">
                  {p.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Intent Note */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-brand-50/50 border border-brand-200/80">
            <h3 className="text-base font-bold text-brand-900 mb-2">
              Delhi NCR Local Service Coverage
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.seoLocationText}
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="py-10 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Complementary Advisory & Filings in Delhi NCR
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.relatedServices.map((rel) => (
              <Link
                key={rel.name}
                href={rel.href}
                className="text-xs bg-white border border-slate-200 text-slate-700 hover:text-brand-700 hover:border-brand-300 px-3 py-1.5 rounded-lg shadow-sm transition-colors"
              >
                {rel.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <LeadForm />

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
