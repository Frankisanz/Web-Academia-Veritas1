import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, CourseSchema } from "@/components/seo/schema";
import { SITE_URL } from "@/lib/business";

export function generateStaticParams() {
  return [
    { level: 'primaria' }, 
    { level: 'secundaria' }, 
    { level: 'bachillerato' },
    { level: 'preparacion-selectividad' }
  ];
}
export const dynamicParams = false;

// Mapeo detallado de materias por nivel
const subjectData: Record<string, { title: string, subjects: string[], desc: string, images: string[] }> = {
  primaria: {
    title: "Apoyo en Primaria",
    desc: "¡El momento perfecto para despertar su curiosidad! En Primaria nos volcamos en asentar bases sólidas y crear hábitos de estudio divertidos que les acompañarán toda la vida. Observa cómo mejoran sus notas mientras ganan confianza en sí mismos.",
    subjects: ["Lengua castellana", "Matemáticas", "Ciencias Naturales", "Ciencias Sociales", "Inglés", "Francés"],
    images: ["primaria.jpg.jpg", "primaria.jpg.jpg"]
  },
  secundaria: {
    title: "Apoyo en la ESO (Secundaria)",
    desc: "Una etapa de grandes retos que transformamos en grandes victorias. Te ofrecemos un acompañamiento integral con profesores expertos para que cualquier asignatura se convierta en tu punto fuerte. ¡Es hora de que Secundaria sea un paseo triunfal!",
    subjects: ["Matemáticas", "Lengua Castellana y Literatura", "Física y Química", "Biología y Geología", "Geografía e Historia", "Inglés", "Tecnología"],
    images: ["secundaria.jpg.jpg", "secundaria2.jpg.jpg"]
  },
  bachillerato: {
    title: "Apoyo en Bachillerato",
    desc: "¡Tu futuro brillante empieza aquí! Sabemos lo decisiva que es esta etapa. Te prepararemos estratégicamente en Primero y Segundo de Bachillerato para asegurar unas calificaciones extraordinarias que te abran las puertas de la Universidad de tus sueños.",
    subjects: ["Preparación a Selectividad", "Lengua y Literatura", "Historia de España", "Inglés"],
    images: ["bachiller.jpg", "bachiller2.jpg.jpg"]
  },
  "preparacion-selectividad": {
    title: "Apoyo durante 2º de Bachillerato",
    desc: "El curso que decide tu nota de acceso. Te acompañamos semana a semana durante todo 2º de Bachillerato para que llegues a la Selectividad con la media alta y el temario asentado, en lugar de jugártelo todo en el último mes.",
    subjects: ["Todas las materias generales", "Específicas de Ciencias", "Específicas de Humanidades / Sociales"],
    images: ["bachiller.jpg", "bachiller2.jpg.jpg"]
  }
};

/** Textos propios por nivel, en lugar de un título interpolado genérico. */
const levelSeo: Record<string, { nombre: string; title: string; description: string }> = {
  primaria: {
    nombre: "Primaria",
    title: "Apoyo Escolar de Primaria en Úbeda | Academia Veritas",
    description:
      "Clases de refuerzo escolar de Primaria en Úbeda. Lengua, matemáticas, ciencias e inglés, con hábitos de estudio desde el principio. Grupos reducidos.",
  },
  secundaria: {
    nombre: "Secundaria (ESO)",
    title: "Clases de Apoyo de la ESO en Úbeda | Academia Veritas",
    description:
      "Clases particulares y refuerzo escolar de la ESO en Úbeda: matemáticas, lengua, física y química, biología, historia e inglés. Grupos reducidos.",
  },
  bachillerato: {
    nombre: "Bachillerato",
    title: "Clases de Apoyo de Bachillerato en Úbeda | Academia Veritas",
    description:
      "Refuerzo de 1º y 2º de Bachillerato en Úbeda. Preparación de exámenes, técnicas de estudio y base sólida de cara a la Selectividad (PEvAU).",
  },
  // Diferenciada a propósito de /servicios/intensivo-selectividad: esta página
  // cubre el acompañamiento de todo el curso; aquella, el intensivo de examen.
  "preparacion-selectividad": {
    nombre: "2º de Bachillerato",
    title: "Clases de Apoyo de 2º de Bachillerato en Úbeda | Academia Veritas",
    description:
      "Apoyo semanal durante todo 2º de Bachillerato en Úbeda para llegar a la Selectividad con la media alta. ¿Buscas el curso intensivo de PEvAU? También lo tenemos.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level } = await params;
  const seo = levelSeo[level];
  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      `apoyo escolar ${seo.nombre} Úbeda`,
      `clases particulares ${seo.nombre} Úbeda`,
      "clases de refuerzo Úbeda",
      "academia Úbeda",
      "profesor particular Úbeda",
    ],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/refuerzo/${level}/`,
      type: "website",
      locale: "es_ES",
      siteName: "Academia Veritas",
    },
  };
}

export default async function RefuerzoPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  // Obtener la información concreta si existe. Si no, usar un genérico.
  const info = subjectData[level] || {
    title: `Apoyo Escolar para ${level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ')}`,
    desc: "Ayudamos a nuestros alumnos a superar las dificultades en las materias más exigentes. Evaluamos sus necesidades, ofrecemos técnicas de estudio eficaces y garantizamos acompañamiento personalizado.",
    subjects: ["Refuerzo general de asignaturas", "Técnicas de estudio", "Acompañamiento personalizado"],
    images: ["secundaria.jpg.jpg", "secundaria2.jpg.jpg"]
  };

  const seo = levelSeo[level];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Servicios", path: "/servicios/" },
          { name: seo?.nombre ?? info.title, path: `/refuerzo/${level}/` },
        ]}
      />
      <CourseSchema
        name={`${info.title} en Úbeda`}
        description={seo?.description ?? info.desc}
        path={`/refuerzo/${level}/`}
        educationalLevel={seo?.nombre}
      />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-zinc-800 text-primary-700 dark:text-primary-400 font-semibold mb-6">
            <GraduationCap className="h-5 w-5" /> Departamento de Apoyo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {info.title} en Úbeda
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
             {info.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8 order-2 md:order-1">
             <h2 className="text-3xl font-bold">Nuestra Metodología</h2>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Atención individualizada para resolver las carencias del día a día escolar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Enfoque práctico: resolución de dudas y planificación enfocada al examen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Comunicación directa y seguimiento continuo con las familias.</span>
                </li>
             </ul>
             
             <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
               <p className="font-semibold text-lg mb-4">¿Necesitas ayuda extra?</p>
               <Button size="lg" asChild>
                 <Link href="/contacto">Más Información</Link>
               </Button>
             </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
             <img src={`/${info.images[0]}`} alt={info.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl mb-24 hidden md:block">
           <img src={`/${info.images[1]}`} alt={`${info.title} - Segunda imagen`} className="w-full h-full object-cover" />
        </div>

        {/* Deriva la intención "intensivo de examen" a su página específica */}
        {(level === 'preparacion-selectividad' || level === 'bachillerato') && (
          <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Buscas el intensivo de Selectividad?
            </h2>
            <p className="text-primary-100 leading-relaxed mb-8 max-w-3xl">
              Esta página trata del apoyo semanal durante el curso. Si lo que necesitas es
              la preparación específica del examen —simulacros cronometrados, exámenes de
              convocatorias anteriores y estrategia de ponderaciones—, esa es nuestra otra
              página.
            </p>
            <Button size="lg" variant="glass" className="rounded-full" asChild>
              <Link href="/servicios/intensivo-selectividad">
                Ver el Intensivo de Selectividad (PEvAU)
              </Link>
            </Button>
          </div>
        )}

        {/* Sección Específica de Materias */}
        <div className="bg-primary-50/50 dark:bg-zinc-900/40 border border-primary-100 dark:border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Materias que impartimos en {seo?.nombre ?? info.title.replace('Apoyo en ', '')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Seleccionamos a los mejores especialistas para cada rama educativa. Ofrecemos refuerzo en las siguientes áreas curriculares:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {info.subjects.map((materia, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-primary-100 dark:border-zinc-800 shadow-sm flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="bg-primary-50 dark:bg-zinc-800 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-medium text-foreground text-sm">{materia}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
