'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, AlertCircle, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { CORE_SERVICES, BRAND } from '@/lib/constants';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
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

  // Auto-open after 4.5 seconds or triggerable by custom event
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('taxfello_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for manual trigger anywhere on website (e.g. click "Talk to an Expert")
  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-consultation-popup', handleOpenModal);
    return () => window.removeEventListener('open-consultation-popup', handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('taxfello_popup_dismissed', 'true');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: rawVal }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      setStatus('error');
      return;
    }

    if (formData.phone.length !== 10) {
      setErrorMessage('Phone number must be exactly 10 digits (e.g. 9876543210).');
      setStatus('error');
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
          service: formData.service || 'General Tax Advisory',
          message: formData.message.trim(),
          source: 'Website Popup Banner',
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
      sessionStorage.setItem('taxfello_popup_dismissed', 'true');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-slate-200/90 overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 shadow border border-slate-200 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left Column: Visual Banner matching reference (Compact on mobile) */}
        <div className="md:w-1/2 relative bg-[#f1f6fd] p-5 sm:p-8 flex flex-col justify-between overflow-hidden border-b md:border-b-0 md:border-r border-slate-200/80 shrink-0">
          {/* Background image & subtle gradient */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/src/advisor-popup.jpg"
              alt="Taxfello CA Advisory Consultant"
              fill
              className="object-cover object-center opacity-25 md:opacity-40 filter mix-blend-multiply"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          </div>

          {/* Top content */}
          <div className="relative z-10 pr-8 md:pr-0">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-4">
              Don&apos;t Wait <span className="text-blue-600">until the Deadline</span>
            </h3>

            {/* Price badge */}
            <div className="inline-block bg-[#0088ea] text-white font-bold text-xs sm:text-sm px-3 py-1.5 rounded-lg shadow-sm mb-2">
              Expert Tax & Compliance at lowest prices
            </div>

            <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-sm py-1 px-2.5 rounded-md border border-slate-200/70 inline-flex">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Lowest price guaranteed</span>
            </div>
          </div>

          {/* Bottom content: WhatsApp banner (hidden on compact mobile to save vertical space, shown on sm+) */}
          <div className="relative z-10 mt-3 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-300/60 hidden sm:block">
            <div className="text-xs font-semibold text-slate-600 mb-1.5">
              Chat directly with our CA team:
            </div>
            <a
              href="https://wa.me/918800485106?text=Hi%20Taxfello%20Team%2C%20I%20need%20assistance%20with%20tax%20and%20compliance%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#fde9df] hover:bg-[#fedccd] text-slate-900 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm transition-all text-xs font-bold"
            >
              <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-3 h-3 fill-white stroke-none" />
              </span>
              <span>+91 88004 85106</span>
            </a>
          </div>
        </div>

        {/* Right Column: 50% split for Full Name & Mobile Number, hidden labels */}
        <div className="md:w-1/2 p-5 sm:p-7 bg-white overflow-y-auto">
          {status === 'success' ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">We Received Your Request!</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                A verified Taxfello Chartered Accountant will call you shortly on <b>+91 {formData.phone || 'your number'}</b>.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="mb-2">
                <h4 className="text-xl font-extrabold text-slate-900">
                  Request a Free Callback
                </h4>
                <p className="text-xs text-slate-500">
                  Connect directly with a Delhi NCR Chartered Accountant.
                </p>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 50% - 50% Grid: Full Name (50%) & Phone Number (50%) with hidden labels */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* 1. Full Name (50%) */}
                <div>
                  <input
                    type="text"
                    required
                    aria-label="Full Name"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                {/* 2. Phone Number (50% - Exactly 10 digits) */}
                <div>
                  <div className="flex rounded-lg sm:rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-slate-50/50">
                    <div className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2.5 bg-slate-100 border-r border-slate-300 text-[10px] sm:text-xs font-semibold text-slate-700 select-none shrink-0">
                      <span className="hidden xs:inline">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      aria-label="Phone Number (10 digits)"
                      placeholder="Mobile (10d) *"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-1.5 sm:px-2.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Email (Optional) & 4. City (Optional) in 50% - 50% layout with hidden labels */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <input
                    type="email"
                    aria-label="Email Address"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    aria-label="City"
                    placeholder="City (Optional)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* 5. Services Dropdown (Optional) with hidden label */}
              <div>
                <select
                  aria-label="Select Service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg sm:rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors text-slate-700"
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

              {/* 6. Message (Optional) with hidden label */}
              <div>
                <textarea
                  rows={2}
                  aria-label="Message"
                  placeholder="Your message or query (Optional)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-2.5 sm:px-3.5 py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50/50 hover:bg-white transition-colors"
                />
              </div>

              {/* Submit Button matching reference */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-5 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#0088ea] hover:bg-[#0077cd] shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 group"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Talk to an Expert</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
