export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationOrganization"],
    "name": "Academia Veritas",
    "image": "https://academiaveritas.es/logo.png",
    "telephone": "626819636",
    "email": "info@academiaveritas.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Torrenueva Nº 1, 1º",
      "addressLocality": "Úbeda",
      "postalCode": "23400",
      "addressRegion": "Jaén",
      "addressCountry": "ES"
    },
    "url": "https://academiaveritas.es",
    "description": "La mejor academia de Úbeda para apoyo escolar, clases particulares e idiomas. Profesores expertos con más del 95% de éxito.",
    "priceRange": "€€"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
