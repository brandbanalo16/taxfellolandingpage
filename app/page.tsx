import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhoWeServe from '@/components/WhoWeServe';
import WhyTaxfello from '@/components/WhyTaxfello';
import HowItWorks from '@/components/HowItWorks';
import FilingModeCards from '@/components/FilingModeCards';
import VirtualCFOSection from '@/components/VirtualCFOSection';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import LeadPopup from '@/components/LeadPopup';
import Footer from '@/components/Footer';
import { generateFAQSchema, constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Tax Consultant in Delhi NCR | GST, ITR & Business Services | Taxfello',
  description: 'Looking for a tax consultant in Delhi NCR? Taxfello provides ITR filing, GST, company registration, accounting, ROC compliance and Virtual CFO services.',
  canonicalPath: '/',
});

export default function Home() {
  const faqSchema = generateFAQSchema();

  return (
    <main className="min-h-screen bg-surface-warm text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      {/* JSON-LD Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <Hero />
      <TrustBar />
      <AboutUs />
      <Services />
      <WhoWeServe />
      <WhyTaxfello />
      <HowItWorks />
      <FilingModeCards />
      <VirtualCFOSection />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <FloatingActionButtons />
      <LeadPopup />
    </main>
  );
}
