'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

const ROW_ONE_REVIEWS: Review[] = [
  {
    initials: 'SG',
    avatarBg: 'bg-blue-600',
    name: 'Sneha Gupta',
    role: 'Salaried • Delhi',
    rating: 5,
    quote: 'Got my maximum refund in just 2 weeks! The tax-saving recommendations helped me significantly optimize my deductions.',
  },
  {
    initials: 'RS',
    avatarBg: 'bg-blue-600',
    name: 'Rohit Sharma',
    role: 'Salaried • Bengaluru',
    rating: 5,
    quote: 'Filed my ITR in under 10 minutes! The platform auto-imported everything from Form 16 and 26AS seamlessly.',
  },
  {
    initials: 'DR',
    avatarBg: 'bg-blue-700',
    name: 'Deepak Reddy',
    role: 'Senior Tax Advisor',
    rating: 5,
    quote: 'I recommend Taxfello to all my clients. Highly reliable, knowledgeable CA team and always prompt.',
  },
  {
    initials: 'PV',
    avatarBg: 'bg-indigo-600',
    name: 'Priya Verma',
    role: 'Product Designer • Gurugram',
    rating: 5,
    quote: 'Managing foreign remittances and 44ADA freelance income was confusing. The expert session sorted everything in 30 mins.',
  },
  {
    initials: 'MK',
    avatarBg: 'bg-blue-600',
    name: 'Manish Kumar',
    role: 'Tech Consultant • Noida',
    rating: 5,
    quote: 'Filing ITR-3 with F&O trading capital gains felt scary. The assigned expert reviewed my broker statement and set up proper write-offs.',
  },
];

const ROW_TWO_REVIEWS: Review[] = [
  {
    initials: 'TC',
    avatarBg: 'bg-blue-600',
    name: 'Tarun Chopra',
    role: 'GST Taxpayer • Indore',
    rating: 5,
    quote: 'Been using Taxfello for 3 years now. Consistent quality service, zero delays, and always quick on notice replies.',
  },
  {
    initials: 'RP',
    avatarBg: 'bg-blue-600',
    name: 'Ritu Patel',
    role: 'Salaried • Kolkata',
    rating: 5,
    quote: 'First time filing ITR and I was nervous. The guided platform was so intuitive, I finished it in under 15 minutes.',
  },
  {
    initials: 'VA',
    avatarBg: 'bg-blue-700',
    name: 'Vikram Ahuja',
    role: 'Founder • Gurugram',
    rating: 5,
    quote: 'From Pvt Ltd incorporation to monthly GST and Virtual CFO decks, Taxfello functions like our dedicated in-house finance team.',
  },
  {
    initials: 'KS',
    avatarBg: 'bg-indigo-600',
    name: 'Karan Sharma',
    role: 'Business Owner • Faridabad',
    rating: 5,
    quote: 'Running a manufacturing unit means continuous GST reconciliation. Taxfello sorted out a significant amount of pending ITC without hassle.',
  },
  {
    initials: 'NG',
    avatarBg: 'bg-blue-600',
    name: 'Neha Gupta',
    role: 'E-commerce Seller • Delhi',
    rating: 5,
    quote: 'Selling on Amazon across multiple states was a GST headache. Taxfello automated our state returns and simplified books.',
  },
];

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="w-[300px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-soft hover:shadow-hover hover:border-blue-300 transition-all duration-300 shrink-0 select-none">
      {/* Header: Circle initials badge + Name & Role */}
      <div className="flex items-center space-x-3 mb-3">
        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${review.avatarBg} text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm`}>
          {review.initials}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug truncate">
            {review.name}
          </h4>
          <p className="text-xs text-slate-500 truncate">
            {review.role}
          </p>
        </div>
      </div>

      {/* 5 Stars */}
      <div className="flex items-center space-x-0.5 mb-2.5 text-amber-500">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
        {review.quote}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 bg-white border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          {/* Left Column: Heading & Trust Copy matching the reference exactly */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-10 bg-white/95 lg:bg-transparent py-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
              TRUSTED NATIONWIDE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
              Trusted by individuals, professionals and businesses across India.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              19+ years of helping Indian taxpayers file confidently — with the CAs, the secure vault and the support to back it up.
            </p>
          </div>

          {/* Right Column: 2 Auto-sliding Marquee Rows */}
          <div className="lg:col-span-8 relative overflow-hidden pause-hover">
            {/* Soft edge gradient fades so cards enter and exit gracefully */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden sm:block" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4 sm:gap-5 py-2">

              {/* Row 1: Sliding Left (Smooth Continuous Auto Slide) */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-left flex gap-4 sm:gap-5">
                  {ROW_ONE_REVIEWS.concat(ROW_ONE_REVIEWS).map((review, idx) => (
                    <TestimonialCard key={`row1-${review.name}-${idx}`} review={review} />
                  ))}
                </div>
              </div>

              {/* Row 2: Sliding Right (Opposite Direction for visual richness) */}
              <div className="flex overflow-hidden">
                <div className="animate-marquee-right flex gap-4 sm:gap-5">
                  {ROW_TWO_REVIEWS.concat(ROW_TWO_REVIEWS).map((review, idx) => (
                    <TestimonialCard key={`row2-${review.name}-${idx}`} review={review} />
                  ))}
                </div>
              </div>

            </div>

            {/* Micro subtitle indicator */}
            <p className="text-[11px] text-slate-400 text-center sm:text-center mt-3">
              Hover over cards to pause • Real client experiences
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
