import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { SITE_URL } from "@/lib/business";
import { TestimoniosGrid, type Testimonio } from "./testimonios-grid";

export const metadata: Metadata = {
  title: "Opiniones y Testimonios | Academia Veritas Úbeda",
  description:
    "Opiniones de alumnos y familias sobre nuestras clases particulares en Úbeda. Descubre por qué confían en Academia Veritas para el apoyo escolar.",
  keywords: [
    "opiniones academia Úbeda",
    "testimonios clases particulares Úbeda",
    "mejor academia Úbeda",
    "academia Veritas opiniones",
    "apoyo escolar Úbeda opiniones",
  ],
  openGraph: {
    title: "Opiniones y Testimonios | Academia Veritas Úbeda",
    description:
      "Lo que dicen los alumnos y las familias de Úbeda sobre nuestras clases particulares y la preparación de Selectividad.",
    url: `${SITE_URL}/testimonios/`,
    type: "website",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

const testimonios: Testimonio[] = [
  {
    nombre: "María G.",
    rol: "Madre de alumno de 2º ESO",
    texto:
      "Mi hijo ha mejorado muchísimo desde que empezó en Academia Veritas. Sonia se preocupa de verdad por cada alumno y les enseña a estudiar de forma eficaz. Las notas han subido y, lo más importante, ha ganado confianza en sí mismo.",
    rating: 5,
  },
  {
    nombre: "Carlos R.",
    rol: "Alumno de Bachillerato",
    texto:
      "Gracias a la preparación intensiva de Selectividad conseguí la nota que necesitaba para entrar en la carrera que quería. Los simulacros de examen fueron clave para ir seguro al examen real.",
    rating: 5,
  },
  {
    nombre: "Ana P.",
    rol: "Madre de alumna de Primaria",
    texto:
      "Estamos encantados con la academia. El trato es muy cercano y personalizado. Mi hija va contenta a las clases y eso se nota en sus resultados. Totalmente recomendable.",
    rating: 5,
  },
  {
    nombre: "Javier M.",
    rol: "Alumno de 4º ESO",
    texto:
      "Lo que más me gusta es que los grupos son pequeños y siempre puedo preguntar todas mis dudas. Además, poder preguntar por WhatsApp cuando estudio en casa es una gran ayuda.",
    rating: 5,
  },
  {
    nombre: "Laura S.",
    rol: "Madre de dos alumnos",
    texto:
      "Tengo a mis dos hijos en la academia y estamos muy contentos. Sonia se adapta al nivel de cada uno y el seguimiento que hace con las familias es excelente. El descuento por hermanos también es un plus.",
    rating: 5,
  },
  {
    nombre: "Pedro L.",
    rol: "Alumno de 2º Bachillerato",
    texto:
      "Llegué a la academia con muchas dificultades en varias asignaturas y en pocos meses ya notaba la mejora. La profesora explica muy bien y tiene mucha paciencia. ¡Aprobé todo!",
    rating: 5,
  },
];

export default function TestimoniosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <BreadcrumbSchema items={[{ name: "Testimonios", path: "/testimonios/" }]} />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <GraduationCap className="h-4 w-4" /> Lo que dicen nuestros alumnos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Opiniones sobre nuestra <span className="text-gradient">academia en Úbeda</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La confianza de las familias de Úbeda es nuestra mayor recompensa. Estos son
            algunos testimonios de alumnos y padres que han pasado por nuestras clases
            particulares de Primaria, ESO y Bachillerato.
          </p>
        </div>

        <TestimoniosGrid testimonios={testimonios} />

        <div className="max-w-3xl mx-auto mt-20 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ¿Ya has sido alumno de Academia Veritas?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tu opinión ayuda a otras familias de Úbeda a decidirse. Si has estudiado con
            nosotros, puedes dejarnos una reseña en nuestra ficha de Google o contárnoslo
            por WhatsApp. Leemos absolutamente todas y nos sirven para seguir mejorando.
          </p>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres que tu hijo también mejore sus resultados?
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contacto">Solicitar información</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
