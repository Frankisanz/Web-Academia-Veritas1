import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

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
              Tu centro educativo de confianza en Úbeda. Formando a las futuras generaciones con innovación, dedicación y excelencia académica.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-primary-200/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary-400" />
                <span className="text-sm">Calle Torrenueva Nº 1, 1º<br />23400 Úbeda, Jaén</span>
              </li>
              <li className="flex items-center gap-4 text-primary-200/80">
                <Phone className="h-5 w-5 shrink-0 text-primary-400" />
                <span className="text-sm">626 819 636</span>
              </li>
              <li className="flex items-center gap-4 text-primary-200/80">
                <Mail className="h-5 w-5 shrink-0 text-primary-400" />
                <span className="text-sm">info@academiaveritas.es</span>
              </li>
            </ul>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ingles/secundaria" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Clases de Inglés
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
                <Link href="/idiomas/espanol/online" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Clases de Español
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">La Academia</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-nosotros" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Testimonios de Alumnos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-200/80 hover:text-white transition-colors text-sm">
                  Blog Educativo
                </Link>
              </li>
            </ul>
          </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
