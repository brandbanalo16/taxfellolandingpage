'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { BRAND } from '@/lib/constants';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating buttons once user scrolls past the hero (150px)
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick contact options" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. WhatsApp Button */}
      <a
        href="https://wa.me/918800485106?text=Hi%20Taxfello%20Team%2C%20I%20need%20assistance%20with%20tax%20and%20compliance%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Taxfello on WhatsApp"
        className="group flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-200 transform hover:-translate-y-1"
      >
        <Image src="/src/img/whatsapp.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7 sm:mr-2 shrink-0" />
      </a>

      {/* 2. Direct Call Button */}
      <a
        href={`tel:${BRAND.phoneRaw}`}
        aria-label="Call Taxfello Consultation Desk"
        className="group flex items-center bg-slate-900 hover:bg-brand-700 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_25px_rgba(15,23,42,0.35)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.45)] border border-slate-700 transition-all duration-200 transform hover:-translate-y-1"
      >
        <Phone className="w-5 h-5 sm:mr-2 text-emerald-400 shrink-0" />
      </a>
    </aside>
  );
}
