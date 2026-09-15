'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND, CORE_SERVICES } from '@/lib/constants';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '/#about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Who We Serve', href: '/#who-we-serve' },
    { name: 'Virtual CFO', href: '/#virtual-cfo' },
    { name: 'Why Taxfello', href: '/#why-taxfello' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: rawVal }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (formData.phone.length !== 10) {
      setStatus('error');
      setErrorMessage('Phone must be exactly 10 digits.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone,
          email: formData.email.trim() || undefined,
          city: formData.city.trim() || undefined,
          service: formData.service || 'General Advisory',
          source: 'Footer Callback Form',
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit enquiry.');
      }

      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        service: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-8 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-slate-800/80 items-start">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block p-2 rounded-xl bg-white/95 shadow-sm mb-4">
              <Image
                src="/src/logo.webp"
                alt="Taxfello Logo"
                width={160}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Tax, compliance, and business advisory services for individuals, startups, professionals, and established businesses across Delhi and Delhi NCR. We provide end-to-end support for income tax, GST, business registration, accounting, statutory compliance, financial planning, and regulatory requirements
            </p>
            <div className="flex items-center gap-3 mt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/TaxFello/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Taxfello on Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-400 hover:text-white transition-all duration-200 shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/taxfello/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Taxfello on Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888] text-slate-400 hover:text-white transition-all duration-200 shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Col 2: Quick Links / Navbar Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow-lg">
              <h4 className="text-sm font-bold text-white mb-1">
                Request a Callback
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Speak directly with a Senior Tax consultant.
              </p>

              {status === 'success' ? (
                <div className="p-4 bg-emerald-950/60 border border-emerald-700/60 rounded-lg text-xs text-emerald-300">
                  <div className="flex items-center space-x-2 font-semibold text-emerald-200 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Enquiry Received!</span>
                  </div>
                  <p className="text-[11px] text-emerald-300/80 leading-relaxed">
                    Our team will reach out to you within 2-4 working hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-[11px] text-brand-400 hover:text-brand-300 underline font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {status === 'error' && (
                    <div className="p-2.5 bg-red-950/50 border border-red-800/60 rounded-lg text-xs text-red-300 flex items-start space-x-2">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name + Phone — 50/50 */}
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>

                  {/* Row 2: Email + City — 50/50 */}
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="email"
                      placeholder="Email (Optional)"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                    <input
                      type="text"
                      placeholder="City (Optional)"
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    >
                      <option value="">Select Service (Optional)</option>
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Virtual CFO Services" className="bg-slate-900 text-white">
                        Virtual CFO Services
                      </option>
                      <option value="General Consultation" className="bg-slate-900 text-white">
                        Other / General Advisory
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-500 active:bg-brand-700 disabled:opacity-50 text-white font-semibold rounded-lg text-xs shadow transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Callback</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            Copyright © {currentYear} Taxfello. All rights reserved. Managed by <a href="https://www.brandbanalo.com" className="hover:text-white transition-colors">Brandbanalo</a>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors underline underline-offset-2">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Confidential & Supervised
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
