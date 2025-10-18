import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://invoice-generator.site',
      lastModified: new Date(),
    },
  ]
}
