'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handlePopup = () => {
    window.dispatchEvent(new Event('open-consultation-popup'));
  };

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const [showAll, setShowAll] = useState(false);

  return (
    <section id="faq" className="py-12 sm:py-20 bg-surface-warm scroll-mt-20 border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-2 sm:mb-3">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, practical answers about tax filing, GST compliance, company registration and financial advisory in Delhi NCR.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {(showAll ? FAQS : FAQS.slice(0, 5)).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-xs sm:text-base pr-3">
                    {index + 1}. {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-700' : ''
                      }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showAll && FAQS.length > 5 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-brand-700 hover:text-brand-800 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
            >
              View More FAQs ({FAQS.length - 5} more)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
