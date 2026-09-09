import type { Metadata } from 'next';
import './globals.css';
import { BRAND } from '@/lib/constants';
import { generateOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: 'Tax Consultant in Delhi NCR | GST, ITR & Business Services | Taxfello',
    template: '%s | Taxfello Delhi NCR'
  },
  description: 'Looking for a tax consultant in Delhi NCR? Taxfello provides ITR filing, GST, company registration, accounting, ROC compliance and Virtual CFO services.',
  keywords: [
    'tax consultant in Delhi NCR',
    'tax consultant Delhi',
    'GST consultant Delhi',
    'income tax consultant Delhi',
    'ITR filing Delhi',
    'business compliance services Delhi NCR',
    'accounting services Delhi',
    'company registration Delhi',
    'virtual CFO Delhi NCR'
  ],
  authors: [{ name: 'Taxfello Team' }],
  creator: 'Taxfello Advisory Services',
  publisher: 'Taxfello',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen bg-surface-warm text-slate-900 antialiased selection:bg-brand-200 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
