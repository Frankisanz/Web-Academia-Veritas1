/**
 * Datos NAP (Name, Address, Phone) de la academia.
 *
 * Fuente única de verdad para el footer, la página de contacto y los datos
 * estructurados. Google valora que estos datos sean idénticos en toda la web
 * y coincidan con la ficha de Google Business Profile.
 */

export const SITE_URL = "https://academiaveritas.es";

export const business = {
  name: "Academia Veritas",
  legalName: "Academia Veritas",
  street: "Calle Torrenueva Nº 1, 1º",
  locality: "Úbeda",
  region: "Jaén",
  postalCode: "23400",
  country: "ES",
  phone: "626 819 636",
  /** Formato internacional E.164, requerido por schema.org y por el enlace tel: */
  phoneE164: "+34626819636",
  whatsapp: "34626819636",
  email: "soniahg41@gmail.com",
  /**
   * Coordenadas aproximadas de Calle Torrenueva (centro de Úbeda).
   * REVISAR: ajústalas al pin exacto de tu ficha de Google Business Profile.
   */
  geo: { lat: 38.0125, lng: -3.3702 },
  /**
   * Horario de apertura. Déjalo vacío mientras no sea el definitivo:
   * publicar un horario incorrecto en los datos estructurados es peor que no publicarlo.
   * Formato: { days: ["Monday", ...], opens: "16:00", closes: "21:00" }
   */
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  /**
   * Perfiles externos (Google Business Profile, Facebook, Instagram...).
   * Añadirlos refuerza la entidad de cara a Google. Rellénalos cuando los tengas.
   */
  sameAs: [] as string[],
} as const;

/** Municipios de la comarca a los que damos servicio (usado en `areaServed`). */
export const areaServed = [
  "Úbeda",
  "Baeza",
  "Torreperogil",
  "Sabiote",
  "Rus",
  "Canena",
  "Begíjar",
  "Villacarrillo",
  "Jódar",
  "Villanueva del Arzobispo",
] as const;

/** Dirección en una línea, para textos corridos. */
export const addressLine = `${business.street}, ${business.postalCode} ${business.locality} (${business.region})`;
