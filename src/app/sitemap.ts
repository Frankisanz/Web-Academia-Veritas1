import type { MetadataRoute } from 'next'
import { articulosPublicados } from '@/lib/blog'
import { asignaturas } from '@/lib/asignaturas'
import { SITE_URL } from '@/lib/business'

export const dynamic = 'force-static'

/**
 * Fecha de última revisión del contenido estático.
 *
 * Se actualiza a mano al tocar las páginas. Poner `new Date()` haría que en cada
 * despliegue todas las URLs dijeran haberse modificado hoy, y Google acaba
 * ignorando un `lastmod` que siempre miente.
 */
const LAST_UPDATED = '2026-08-05'

type Entry = MetadataRoute.Sitemap[number]

const entry = (
  path: string,
  priority: number,
  lastModified: string = LAST_UPDATED,
  changeFrequency: Entry['changeFrequency'] = 'monthly'
): Entry => ({
  url: `${SITE_URL}${path}`,
  lastModified,
  changeFrequency,
  priority,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Páginas principales
    entry('/', 1),
    entry('/servicios/', 0.9),
    entry('/clases-particulares/', 0.9),
    entry('/servicios/intensivo-selectividad/', 0.9),
    entry('/contacto/', 0.8),
    entry('/sobre-nosotros/', 0.7),
    entry('/testimonios/', 0.7),
    entry('/blog/', 0.7, LAST_UPDATED, 'weekly'),

    // Landings por asignatura
    ...asignaturas.map((a) => entry(`/clases-particulares/${a.slug}/`, 0.8)),

    // Niveles de refuerzo
    ...['primaria', 'secundaria', 'bachillerato', 'preparacion-selectividad'].map(
      (level) => entry(`/refuerzo/${level}/`, 0.8)
    ),

    // Niveles de inglés
    ...['primaria', 'secundaria', 'bachillerato', 'adultos'].map((level) =>
      entry(`/ingles/${level}/`, 0.7)
    ),

    // Artículos del blog, con su fecha real de publicación
    ...articulosPublicados.map((a) => entry(`/blog/${a.slug}/`, 0.6, a.fecha)),

    // Páginas legales: se indexan, pero con la prioridad más baja
    entry('/aviso-legal/', 0.2, LAST_UPDATED, 'yearly'),
    entry('/privacidad/', 0.2, LAST_UPDATED, 'yearly'),
    entry('/politica-de-cookies/', 0.2, LAST_UPDATED, 'yearly'),
  ]
}
