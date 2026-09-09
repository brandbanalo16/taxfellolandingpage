import { BRAND, FAQS } from './constants';

export const BASE_URL = BRAND.siteUrl;

export interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath: string;
  ogType?: 'website' | 'article';
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  canonicalPath,
  ogType = 'website',
}: PageMetadataOptions) {
  const url = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  
  return {
    title,
    description,
    keywords: [
      'tax consultant in Delhi NCR',
      'tax consultant Delhi',
      'GST consultant Delhi',
      'income tax consultant Delhi',
      'ITR filing Delhi',
      'company registration Delhi',
      'ROC compliance Delhi',
      'virtual CFO Delhi NCR',
      ...keywords
    ],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      locale: 'en_IN',
      type: ogType,
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Taxfello - Tax, Compliance & Business Advisory in Delhi NCR',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
      creator: '@taxfello',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${BASE_URL}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: BRAND.tagline,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Delhi' },
      { '@type': 'City', name: 'New Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Connaught Place, New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phonePlaceholder,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }
  };
}

export function generateFAQSchema(customFaqs = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: customFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name,
    description,
    provider: {
      '@type': 'AccountingService',
      name: BRAND.name,
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Delhi NCR',
    },
    url: `${BASE_URL}${url}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
