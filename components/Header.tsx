'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Who We Serve', href: '/#who-we-serve' },
    { name: 'Virtual CFO', href: '/#virtual-cfo' },
    { name: 'Why Taxfello', href: '/#why-taxfello' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-stone-200/80'
        : 'bg-surface-warm/90 backdrop-blur-sm py-4 border-b border-stone-200/60'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center focus:outline-none py-1">
            <Image
              src="/src/logo.webp"
              alt="Taxfello - Your Tax & Compliance Partner"
              width={500}
              height={500}
              className="h-11 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-brand-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              <span>{BRAND.phonePlaceholder}</span>
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-navy-DEFAULT hover:bg-brand-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Talk to a Tax Expert</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href="#lead-form"
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-navy-DEFAULT rounded-md"
            >
              Consult
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-DEFAULT rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-700 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
                <a
                  href="#lead-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-navy-DEFAULT rounded-lg shadow"
                >
                  Talk to a Tax Expert
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
