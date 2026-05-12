import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://academiaveritas.es'

  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/sobre-nosotros',
    '/contacto',
    '/blog',
    '/servicios',
    '/testimonios',
    '/aviso-legal',
    '/privacidad',
    '/politica-de-cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Artículos del blog
  const blogArticles = [
    '/blog/como-preparar-selectividad-sin-estres',
    '/blog/importancia-apoyo-primaria',
    '/blog/tecnicas-estudio-eso',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Servicios especializados
  const services = [
    '/servicios/intensivo-selectividad',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Niveles de Inglés
  const englishLevels = ['primaria', 'secundaria', 'bachillerato', 'adultos'].map((level) => ({
    url: `${baseUrl}/ingles/${level}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Niveles de Refuerzo
  const reinforcementLevels = ['primaria', 'secundaria', 'bachillerato', 'preparacion-selectividad'].map((level) => ({
    url: `${baseUrl}/refuerzo/${level}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...staticRoutes,
    ...blogArticles,
    ...services,
    ...englishLevels,
    ...reinforcementLevels,
  ]
}
