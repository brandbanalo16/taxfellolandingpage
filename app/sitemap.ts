import { MetadataRoute } from 'next';
import { BRAND } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: BRAND.siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
