import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received | Taxfello',
  description: 'Your enquiry has been received. A Taxfello CA consultant will reach out to you shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-surface-warm flex items-center justify-center px-4">
      {/* Soft radial glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={1.8} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Thank You!
        </h1>

        {/* Sub-heading */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-2">
          Your enquiry has been received.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm mx-auto">
          A Taxfello Chartered Accountant will review your details and get in touch with you shortly — typically within 2 working hours.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-slate-200 mx-auto mb-8" />

        {/* CTA back to website */}
        <Link
          href="https://www.taxfello.com"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 rotate-180"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
          www.taxfello.com
        </Link>

        {/* Small note */}
        <p className="mt-6 text-xs text-slate-400">
          You may also reach us directly at{' '}
          <a
            href="tel:+918800485106"
            className="text-brand-600 hover:underline font-medium"
          >
            +91 88004 85106
          </a>
        </p>
      </div>
    </main>
  );
}
