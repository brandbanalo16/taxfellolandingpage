'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
} from 'lucide-react';
import { BRAND, CORE_SERVICES } from '@/lib/constants';

export default function LeadForm() {
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
          service: formData.service || 'General Advisory',
          message: formData.message.trim(),
          source: 'Bottom Lead Form',
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
    <section id="lead-form" className="py-20 bg-surface-ivory/80 scroll-mt-20 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Assurance */}
          <div className="lg:col-span-5">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
              Direct CA Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Tell us about your requirement and our tax and compliance experts will recommend the right solution for you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Swift 2-Hour Response</div>
                  <div className="text-xs text-slate-500">During business hours across Delhi NCR working days.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Zero Obligation Review</div>
                  <div className="text-xs text-slate-500">Honest recommendations before taking up any paid filing mandate.</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-700 mb-1">Direct Helpline</div>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-sm font-mono font-bold text-brand-700 hover:underline">
                {BRAND.phonePlaceholder}
              </a>
              <div className="text-xs text-slate-500 mt-1">{BRAND.emailPlaceholder}</div>
            </div>
          </div>

          {/* Right Column: Standardized Lead Form with Hidden Labels and 50% columns */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-200 shadow-premium">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you! A Taxfello Chartered Accountant will review your details and connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-navy-DEFAULT hover:bg-brand-700 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 50% - 50% Grid: Full Name & Mobile Number (Hidden labels) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        id="form-fullName"
                        required
                        aria-label="Full Name"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 hover:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 bg-slate-50/50">
                        <div className="flex items-center space-x-1 px-3 bg-slate-100 border-r border-slate-300 text-xs font-semibold text-slate-700 select-none shrink-0">
                          <span>🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          id="form-phone"
                          required
                          maxLength={10}
                          pattern="[0-9]{10}"
                          aria-label="Phone Number (10 digits)"
                          placeholder="Mobile (10 digits) *"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full px-3 py-3 text-sm bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 50% - 50% Grid: Email (Optional) & City (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        id="form-email"
                        aria-label="Email Address"
                        placeholder="Email Address (Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 hover:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="form-city"
                        aria-label="City"
                        placeholder="City (Optional)"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 hover:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Dropdown (Optional) */}
                  <div>
                    <select
                      id="form-service"
                      aria-label="Select Service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 hover:bg-white transition-colors text-slate-700"
                    >
                      <option value="">Select Service (Optional)...</option>
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Virtual CFO & Advisory">Virtual CFO & Advisory</option>
                      <option value="Notice Scrutiny / Other">Notice Scrutiny / Other</option>
                    </select>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <textarea
                      id="form-message"
                      rows={3}
                      aria-label="Message"
                      placeholder="Describe your requirement or questions (Optional)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 hover:bg-white transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-DEFAULT hover:bg-brand-700 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 group"
                    >
                      {loading ? (
                        <span>Processing your request...</span>
                      ) : (
                        <>
                          <span>Get a Free Consultation</span>
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center leading-normal pt-1">
                    Your information is kept confidential and used only to respond to your enquiry. We never spam or sell data.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
