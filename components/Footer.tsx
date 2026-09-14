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
              Tax, compliance and business advisory services for individuals and businesses across Delhi and Delhi NCR.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{BRAND.addressPlaceholder}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white transition-colors">
                  {BRAND.phonePlaceholder}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{BRAND.emailPlaceholder}</span>
              </div>
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
