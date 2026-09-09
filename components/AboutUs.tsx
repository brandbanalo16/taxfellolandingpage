import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle2, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function AboutUs() {
  const highlights = [
    'Senior Chartered Accountants & Corporate Legal Advisors',
    '10,000+ Completed Tax & Corporate Mandates across Delhi NCR',
    '100% Digital Document Vault with Bank-Grade 256-bit Security',
    'Proactive Scrutiny Defence & Zero-Delay Statutory Filings',
  ];

  return (
    <section id="about-us" className="py-12 sm:py-20 bg-white border-t border-stone-200/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Content & Two Action Buttons (Call & WhatsApp) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-brand-600" />
              <span>About Taxfello Advisory</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
              Your Trusted Tax & Compliance Partner in Delhi NCR
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 font-normal">
              Founded by veteran Chartered Accountants, Taxfello bridges the gap between complex statutory regulations and fast-moving business goals. We empower startups, MSMEs, and individual taxpayers with institutional-grade financial leadership.
            </p>

            <p className="hidden sm:block text-sm text-slate-500 leading-relaxed mb-8">
              From ITR filing and GST optimization to Private Limited company registrations, ROC corporate secretarial oversight, and full-scale Virtual CFO advisory — we protect your margins and ensure spotless regulatory standing.
            </p>

            {/* Checklist items */}
            <div className="space-y-3 mb-8 w-full">
              {highlights.map((item) => (
                <div key={item} className="flex items-start text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Two Action Buttons: Call & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Call Us: {BRAND.phonePlaceholder}</span>
              </a>

              <a
                href="https://wa.me/918800485106?text=Hi%20Taxfello%20Team%2C%20I%20need%20assistance%20with%20tax%20and%20compliance%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-white group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Quality Office Team Image with Badges */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              {/* Soft decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600/15 via-blue-500/10 to-emerald-500/15 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-premium bg-white">
                <Image
                  src="/src/about-team.jpg"
                  alt="Taxfello Advisory Team in Delhi NCR"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-950/90 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shrink-0">
                      19+
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Years Combined Expertise</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Empowering Delhi NCR businesses</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
