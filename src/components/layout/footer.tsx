import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { asignaturas } from "@/lib/asignaturas";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10 mt-auto border-t-[8px] border-primary-500">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl text-primary-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Academia Veritas</span>
            </div>
            <p className="text-primary-200/80 leading-relaxed text-sm">
              Tu centro educativo de confianza en Úbeda. Clases particulares y apoyo
              escolar de Primaria, ESO y Bachillerato, inglés y preparación de Selectividad
              (PEvAU).
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-primary-200/80">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary-400" />
                  <span className="text-sm">
                    {business.street}
                    <br />
                    {business.postalCode} {business.locality}, {business.region}
                  </span>
                </li>
                <li className="flex items-center gap-4 text-primary-200/80">
                  <Phone className="h-5 w-5 shrink-0 text-primary-400" />
                  <a href={`tel:${business.phoneE164}`} className="text-sm hover:text-white transition-colors">
                    {business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4 text-primary-200/80">
                  <Mail className="h-5 w-5 shrink-0 text-primary-400" />
                  <a href={`mailto:${business.email}`} className="text-sm hover:text-white transition-colors break-all">
                    {business.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ingles/secundaria" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Clases de refuerzo de inglés
                </Link>
              </li>
              <li>
                <Link href="/refuerzo/primaria" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Apoyo Primaria
                </Link>
              </li>
              <li>
                <Link href="/refuerzo/secundaria" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Apoyo Secundaria
                </Link>
              </li>
              <li>
                <Link href="/refuerzo/bachillerato" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Bachillerato & Selectividad
                </Link>
              </li>
              <li>
                <Link href="/servicios/intensivo-selectividad" className="text-primary-200/80 hover:text-white transition-colors text-sm flex items-center gap-2 w-fit">
                  Intensivo de Selectividad
                  <span className="bg-primary-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NUEVO</span>
                </Link>
              </li>

            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Por Asignatura</h4>
            <ul className="space-y-3">
              {asignaturas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/clases-particulares/${a.slug}`}
                    className="text-primary-200/80 hover:text-white transition-colors text-sm"
                  >
                    Clases de {a.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fila secundaria de enlaces */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6">La Academia</h4>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link href="/sobre-nosotros" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/testimonios" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                Opiniones de Alumnos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                Blog Educativo
              </Link>
            </li>
            <li>
              <Link href="/clases-particulares" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                Clases Particulares por Asignatura
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                Contacto y Cómo Llegar
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-200/60">
            © {new Date().getFullYear()} Academia Veritas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="text-sm text-primary-200/60 hover:text-white transition-colors">
              Aviso Legal
            </Link>
            <Link href="/privacidad" className="text-sm text-primary-200/60 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="text-sm text-primary-200/60 hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
