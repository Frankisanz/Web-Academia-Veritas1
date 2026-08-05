import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { asignaturas } from "@/lib/asignaturas";
import { SITE_URL, areaServed, business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Clases Particulares por Asignatura en Úbeda | Academia Veritas",
  description:
    "Clases particulares en Úbeda de matemáticas, lengua, inglés, física y química, biología e historia. Primaria, ESO y Bachillerato en grupos reducidos.",
  keywords: [
    "clases particulares Úbeda",
    "clases particulares por asignatura Úbeda",
    "profesor particular Úbeda",
    "academia Úbeda asignaturas",
    "clases de repaso Úbeda",
  ],
  openGraph: {
    title: "Clases Particulares por Asignatura en Úbeda | Academia Veritas",
    description:
      "Matemáticas, lengua, inglés, física y química, biología e historia. Elige la asignatura que se le atraganta.",
    url: `${SITE_URL}/clases-particulares/`,
    type: "website",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

export default function ClasesParticularesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <BreadcrumbSchema items={[{ name: "Clases particulares", path: "/clases-particulares/" }]} />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-6 text-sm">
            <BookOpen className="h-4 w-4" /> Úbeda (Jaén)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Clases particulares por asignatura en Úbeda
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Casi nadie necesita refuerzo en todo: se necesita refuerzo en{" "}
            <em>esa</em> asignatura que se ha torcido. Elige la materia y te contamos
            exactamente cómo la trabajamos en la academia, qué solemos encontrarnos y qué
            resultados se pueden esperar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {asignaturas.map((a) => (
            <Link
              key={a.slug}
              href={`/clases-particulares/${a.slug}`}
              className="group flex flex-col bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-primary-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-foreground mb-2">
                Clases de {a.nombre}
              </h2>
              <p className="text-xs font-semibold text-primary-600 mb-4">{a.niveles}</p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {a.descripcion}
              </p>
              <span className="flex items-center text-primary-600 font-semibold text-sm mt-auto group-hover:gap-2 transition-all">
                Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Bloque de contexto local */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
            <Users className="h-7 w-7 text-primary-600 mb-3" />
            <h2 className="font-bold text-foreground mb-2">Grupos reducidos</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pocos alumnos por clase para que el profesor llegue a todos en la misma
              sesión.
            </p>
          </div>
          <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
            <GraduationCap className="h-7 w-7 text-primary-600 mb-3" />
            <h2 className="font-bold text-foreground mb-2">Temario de su centro</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trabajamos con el libro y los exámenes de su colegio o instituto, no con
              material genérico.
            </p>
          </div>
          <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
            <BookOpen className="h-7 w-7 text-primary-600 mb-3" />
            <h2 className="font-bold text-foreground mb-2">En el centro de Úbeda</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {business.street}, a pocos minutos andando de la zona de institutos.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ¿No encuentras la asignatura que buscas?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Damos apoyo escolar en el resto de materias de Primaria, ESO y Bachillerato.
            Atendemos a alumnos de {areaServed.slice(0, 5).join(", ")} y del resto de la
            comarca: cuéntanos el caso y te decimos con sinceridad si podemos ayudarte.
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contacto">Consultar disponibilidad</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
