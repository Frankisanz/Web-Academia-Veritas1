import { SITE_URL, areaServed, business } from "@/lib/business";

/** Identificadores estables para poder referenciar las entidades entre sí. */
export const ORG_ID = `${SITE_URL}/#academia`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Entidad principal del negocio. Se inyecta en todas las páginas para que Google
 * asocie el dominio con la ficha local de Úbeda.
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": ORG_ID,
    name: business.name,
    alternateName: "Academia Veritas Úbeda",
    image: `${SITE_URL}/sonia-higueras.jpg`,
    logo: `${SITE_URL}/icon.svg`,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.locality,
      postalCode: business.postalCode,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    url: `${SITE_URL}/`,
    description:
      "Academia de clases particulares y apoyo escolar en Úbeda (Jaén). Refuerzo de Primaria, ESO y Bachillerato, clases de inglés y preparación de la Selectividad (PEvAU) en grupos reducidos.",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    knowsLanguage: ["es-ES", "en"],
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    founder: {
      "@type": "Person",
      name: "Sonia Higueras García",
      jobTitle: "Directora Académica",
    },
    ...(business.openingHours.length > 0 && {
      openingHoursSpecification: business.openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    }),
    ...(business.sameAs.length > 0 && { sameAs: business.sameAs }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clases particulares en Úbeda",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Apoyo escolar y clases particulares de Primaria",
            url: `${SITE_URL}/refuerzo/primaria/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases particulares de ESO (Secundaria)",
            url: `${SITE_URL}/refuerzo/secundaria/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases particulares de Bachillerato",
            url: `${SITE_URL}/refuerzo/bachillerato/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preparación de Selectividad (PEvAU)",
            url: `${SITE_URL}/servicios/intensivo-selectividad/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de inglés",
            url: `${SITE_URL}/clases-particulares/ingles/`,
          },
        },
      ],
    },
  };

  return <JsonLd data={schema} />;
}

/** Entidad del sitio web, enlazada a la academia como editora. */
export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: business.name,
        inLanguage: "es-ES",
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

export type FaqItem = { question: string; answer: string };

/**
 * FAQPage. Solo debe usarse en páginas donde las preguntas y respuestas sean
 * visibles para el usuario: Google penaliza el marcado que no refleja el contenido.
 */
export function FAQSchema({ items }: { items: readonly FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

/**
 * Migas de pan. Ayudan a Google a entender la jerarquía del sitio y mejoran
 * el aspecto del resultado de búsqueda (sustituye la URL por la ruta).
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Inicio", path: "/" },
          ...items,
        ].map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}

/** Curso concreto impartido por la academia (páginas de asignatura y de nivel). */
export function CourseSchema({
  name,
  description,
  path,
  educationalLevel,
}: {
  name: string;
  description: string;
  path: string;
  educationalLevel?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name,
        description,
        url: `${SITE_URL}${path}`,
        inLanguage: "es-ES",
        ...(educationalLevel && { educationalLevel }),
        provider: {
          "@type": "EducationalOrganization",
          "@id": ORG_ID,
          name: business.name,
          sameAs: `${SITE_URL}/`,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          courseWorkload: "PT2H",
          location: {
            "@type": "Place",
            name: business.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: business.street,
              addressLocality: business.locality,
              postalCode: business.postalCode,
              addressRegion: business.region,
              addressCountry: business.country,
            },
          },
        },
      }}
    />
  );
}

/** Artículo del blog. */
export function ArticleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline,
        description,
        image: `${SITE_URL}${image}`,
        datePublished,
        dateModified: dateModified ?? datePublished,
        inLanguage: "es-ES",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${path}`,
        },
        author: {
          "@type": "Person",
          name: "Sonia Higueras García",
          jobTitle: "Directora Académica",
          url: `${SITE_URL}/sobre-nosotros/`,
        },
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}
