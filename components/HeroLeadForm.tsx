'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { CORE_SERVICES } from '@/lib/constants';

export default function HeroLeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: '',
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
      setErrorMessage('Phone Number must be exactly 10 digits (e.g. 9876543210).');
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
          email: formData.email.trim(),
          city: formData.city.trim(),
          service: formData.service || 'General Consultation',
          message: formData.message.trim(),
          source: 'Hero Form',
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
        message: '',
      });
      setTimeout(() => router.push('/thankyou'), 1000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Glow highlight */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-600/15 to-emerald-500/15 rounded-3xl blur-xl opacity-75 pointer-events-none" />

      <div className="relative bg-white rounded-2xl border border-stone-200/90 shadow-premium p-6 sm:p-7">
        {/* Card Header */}
        <div className="pb-3 mb-3 border-b border-stone-100">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>CA Response Within 2 Hours</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Book Free Consultation
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Connect with a verified Chartered Accountant in Delhi NCR.
          </p>
        </div>

        {status === 'success' ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Enquiry Submitted!</h4>
            <p className="text-xs text-slate-600 mb-5">
              A Taxfello expert will review your requirements and call you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-brand-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {status === 'error' && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 50% - 50% Grid: Full Name & Mobile Number (Hidden labels, clean placeholders) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  aria-label="Full Name"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-surface-warm/40 hover:bg-white transition-colors"
                />
              </div>

              <div>
                <div className="flex rounded-lg border border-stone-300 overflow-hidden focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 bg-surface-warm/40">
                  <div className="flex items-center space-x-1 px-2.5 bg-stone-100 border-r border-stone-300 text-xs font-semibold text-slate-700 select-none shrink-0">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    aria-label="Phone Number (10 digits)"
                    placeholder="Mobile (10 digits) *"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-2.5 py-2.5 text-sm bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 50% - 50% Grid: Email (Optional) & City (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="email"
                  aria-label="Email Address"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-surface-warm/40 hover:bg-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  aria-label="City"
                  placeholder="City (Optional)"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-surface-warm/40 hover:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Services Dropdown (Optional) */}
            <div>
              <select
                aria-label="Select Service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-surface-warm/40 hover:bg-white transition-colors text-slate-700"
              >
                <option value="">Select Service (Optional)...</option>
                {CORE_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Virtual CFO & Strategic Advisory">Virtual CFO & Strategic Advisory</option>
                <option value="Departmental Notice / Scrutiny">Departmental Notice / Scrutiny</option>
                <option value="Other / Multi-Service Package">Other / Multi-Service Package</option>
              </select>
            </div>

            {/* Message (Optional) */}
            <div>
              <textarea
                rows={2}
                aria-label="Message"
                placeholder="Brief message or query (Optional)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-surface-warm/40 hover:bg-white transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 group"
              >
                {loading ? (
                  <span>Submitting Details...</span>
                ) : (
                  <>
                    <span>Get Free Expert Advice</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-stone-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Privacy Assured
              </span>
              <span className="text-slate-400">Zero Obligation</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
