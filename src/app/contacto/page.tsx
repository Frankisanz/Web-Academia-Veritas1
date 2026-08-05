import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Navigation } from "lucide-react";
import { BreadcrumbSchema, ORG_ID } from "@/components/seo/schema";
import { SITE_URL, addressLine, areaServed, business } from "@/lib/business";
import { ContactoForm } from "./contacto-form";

export const metadata: Metadata = {
  title: "Contacto y Cómo Llegar | Academia Veritas Úbeda",
  description:
    "Estamos en Calle Torrenueva Nº 1, 1º, 23400 Úbeda (Jaén). Llámanos al 626 819 636 o escríbenos por WhatsApp para reservar tu plaza sin compromiso.",
  keywords: [
    "academia Úbeda contacto",
    "clases particulares Úbeda teléfono",
    "academia cerca de mí Úbeda",
    "academia Calle Torrenueva Úbeda",
    "apoyo escolar Úbeda",
  ],
  openGraph: {
    title: "Contacto | Academia Veritas Úbeda",
    description:
      "Estamos en Calle Torrenueva Nº 1, 1º, en pleno centro de Úbeda. Llámanos, escríbenos o pásate a conocernos.",
    url: `${SITE_URL}/contacto/`,
    type: "website",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${business.street}, ${business.postalCode} ${business.locality}, ${business.region}`
)}`;

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto | Academia Veritas Úbeda",
  url: `${SITE_URL}/contacto/`,
  inLanguage: "es-ES",
  about: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Contacto", path: "/contacto/" }]} />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Contacta con tu academia en Úbeda
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos en pleno centro de Úbeda, en {addressLine}. Acércate a conocernos,
            llámanos o envíanos un mensaje y te asesoramos sin compromiso sobre las
            clases particulares que mejor encajan con tu hijo o hija.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <MapPin className="h-8 w-8 text-primary-600 mb-4" />
              <h2 className="font-bold text-xl mb-2 text-foreground">Visítanos</h2>
              <p className="text-muted-foreground">
                {business.street}
                <br />
                {business.postalCode} {business.locality}, {business.region}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:underline"
              >
                <Navigation className="h-4 w-4" /> Cómo llegar
              </a>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <Phone className="h-8 w-8 text-primary-600 mb-4" />
              <h2 className="font-bold text-xl mb-2 text-foreground">Llámanos</h2>
              <a
                href={`tel:${business.phoneE164}`}
                className="text-muted-foreground hover:text-primary-600 transition-colors"
              >
                {business.phone}
              </a>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <MessageCircle className="h-8 w-8 text-primary-600 mb-4" />
              <h2 className="font-bold text-xl mb-2 text-foreground">WhatsApp</h2>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-600 transition-colors"
              >
                Escríbenos y resolvemos tus dudas
              </a>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <Mail className="h-8 w-8 text-primary-600 mb-4" />
              <h2 className="font-bold text-xl mb-2 text-foreground">Escríbenos</h2>
              <a
                href={`mailto:${business.email}`}
                className="text-muted-foreground hover:text-primary-600 transition-colors break-all"
              >
                {business.email}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-zinc-800">
            <ContactoForm />
          </div>
        </div>

        {/* Cómo llegar + zona de influencia: contenido local con valor real */}
        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Cómo llegar a la academia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestra academia está en la Calle Torrenueva, una de las vías principales
              del centro de Úbeda, a pocos minutos andando de la zona de institutos y
              colegios de la ciudad. Es una ubicación cómoda tanto para venir a pie desde
              el centro como para dejar y recoger a los alumnos en coche.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold shrink-0">·</span>
                <span>
                  <strong className="text-foreground">A pie:</strong> menos de 10 minutos
                  desde el centro histórico de Úbeda.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold shrink-0">·</span>
                <span>
                  <strong className="text-foreground">En coche:</strong> acceso directo
                  desde las principales entradas a la ciudad, con aparcamiento en las
                  calles adyacentes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-600 font-bold shrink-0">·</span>
                <span>
                  <strong className="text-foreground">Desde la comarca:</strong> estamos
                  bien comunicados con Baeza, Torreperogil y Sabiote, a menos de 15
                  minutos en coche.
                </span>
              </li>
            </ul>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
            >
              <Navigation className="h-4 w-4" /> Abrir ruta en Google Maps
            </a>
          </div>

          <div className="bg-primary-50/60 dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-primary-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Alumnos de Úbeda y comarca
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aunque nuestra sede está en Úbeda, cada curso recibimos alumnos de los
              municipios de alrededor que buscan clases particulares y apoyo escolar de
              calidad sin desplazarse hasta Jaén capital. Damos servicio a familias de:
            </p>
            <ul className="flex flex-wrap gap-2">
              {areaServed.map((ciudad) => (
                <li
                  key={ciudad}
                  className="bg-white dark:bg-zinc-800 text-foreground text-sm font-medium px-3 py-1.5 rounded-full border border-primary-100 dark:border-zinc-700"
                >
                  {ciudad}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Si vienes de fuera de Úbeda, dínoslo al contactar: intentamos agrupar los
              horarios de los alumnos de un mismo municipio para facilitar los
              desplazamientos de las familias.{" "}
              <Link href="/servicios" className="text-primary-600 font-semibold hover:underline">
                Consulta todos nuestros servicios
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
