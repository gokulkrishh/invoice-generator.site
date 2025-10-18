import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Invoice Generator',
    short_name: 'Invoice Generator',
    description: 'A free invoice generator for your business.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    id: 'invoice-generator.site',
  }
}
