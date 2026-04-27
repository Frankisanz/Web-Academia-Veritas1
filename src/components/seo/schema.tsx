export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationOrganization"],
    "name": "Academia Veritas",
    "image": "https://academiaveritas.es/logo.png",
    "telephone": "626819636",
    "email": "soniahg41@gmail.com",
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

export function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "¿En qué asignaturas ofrecéis apoyo escolar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ofrecemos clases particulares de todas las materias principales: Matemáticas, Lengua Castellana, Física y Química, Biología, Historia e Inglés, abarcando desde Educación Primaria hasta Bachillerato y Selectividad."
            }
          }, {
            "@type": "Question",
            "name": "¿Cómo preparamos la Selectividad (PEvAU) en la academia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestro programa intensivo se centra en la resolución de exámenes de años anteriores, simulacros cronometrados y resolución de dudas específicas. Los profesores expertos te guían para maximizar tu nota de corte."
            }
          }, {
            "@type": "Question",
            "name": "¿Dónde está ubicada Academia Veritas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestra academia de apoyo escolar se encuentra en Úbeda (Jaén), en la Calle Torrenueva Nº 1, 1º. Un lugar céntrico y de fácil acceso para todos los estudiantes de la zona."
            }
          }]
        })
      }}
    />
  );
}
