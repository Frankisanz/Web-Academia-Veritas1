import { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, Users, Target, Brain, Heart, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { ArticulosRelacionados } from "@/components/blog/articulos-relacionados";

export const metadata: Metadata = {
  title: "Ventajas de Estudiar en Grupos Reducidos | Academia Veritas Úbeda",
  description: "Descubre los múltiples beneficios de las clases de apoyo en grupos reducidos. Atención personalizada, mejor rendimiento y motivación en Úbeda. Academia Veritas.",
  keywords: [
    "clases particulares Úbeda",
    "grupos reducidos Úbeda",
    "apoyo escolar Úbeda",
    "academia Úbeda",
    "ventajas grupos reducidos",
    "educación personalizada Úbeda",
    "refuerzo escolar secundaria Úbeda",
    "clases de refuerzo Primaria Úbeda",
    "academia de apoyo escolar Jaén"
  ],
  openGraph: {
    title: "Ventajas de Estudiar en Grupos Reducidos | Academia Veritas",
    description: "Los grupos pequeños permiten una atención personalizada que marca la diferencia en el rendimiento escolar de tu hijo.",
    url: "https://academiaveritas.es/blog/ventajas-grupos-reducidos",
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

export default function PostGruposReducidos() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ventajas de Estudiar en Grupos Reducidos: Por Qué la Atención Personalizada es Más Efectiva",
    "description": "Análisis pedagógico sobre los beneficios del aprendizaje en grupos pequeños y la personalización de la enseñanza.",
    "author": {
      "@type": "Person",
      "name": "Sonia Higueras García",
      "jobTitle": "Directora Académica",
      "affiliation": { "@type": "EducationalOrganization", "name": "Academia Veritas" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Academia Veritas",
      "url": "https://academiaveritas.es"
    },
    "datePublished": "2026-02-18",
    "dateModified": "2026-05-10",
    "mainEntityOfPage": "https://academiaveritas.es/blog/ventajas-grupos-reducidos"
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Blog", path: "/blog/" },
          { name: "Ventajas de los grupos reducidos", path: "/blog/ventajas-grupos-reducidos/" },
        ]}
      />
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Navegación */}
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 font-medium mb-8 hover:gap-2 transition-all group"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al blog
        </Link>

        {/* Cabecera del Artículo */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Metodología
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> 18 Febrero 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 5 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Ventajas de Estudiar en Grupos Reducidos: <span className="text-gradient">Por Qué la Atención Personalizada Marca la Diferencia</span>
          </h1>

          <div className="aspect-video rounded-3xl relative overflow-hidden mb-12 border border-slate-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/secundaria2.jpg.jpg"
              alt="Clases de apoyo escolar en grupos reducidos en Úbeda - Academia Veritas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Contenido del Artículo */}
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
            En un sistema educativo donde las aulas masificadas son la norma, los estudiantes a menudo se convierten en meros números. Las <strong>clases en grupos reducidos</strong> ofrecen un enfoque radicalmente diferente, situando al alumno en el centro del aprendizaje. En este artículo, analizamos los beneficios pedagógicos de nuestro modelo en <strong>Academia Veritas en Úbeda</strong>.
          </p>

          {/* Sección 1 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Users className="h-7 w-7 text-primary-500 shrink-0" />
            1. Atención 100% Personalizada: Nadie se Queda Atrás
          </h2>
          <p>
            En una clase de 25 o 30 alumnos, es físicamente imposible que un profesor atienda las dudas individuales. En cambio, cuando el grupo se limita a <strong>pocos estudiantes</strong>, la dinámica cambia por completo. El docente puede sentarse con cada alumno, entender su forma de razonar y explicar un concepto las veces que haga falta, adaptando el lenguaje a cada caso.
          </p>
          <p>
            En nuestra experiencia en <strong>Úbeda</strong>, hemos visto cómo alumnos que se sentían completamente perdidos en clase de matemáticas del instituto empiezan a comprender las materias en cuestión de días simplemente porque tienen la oportunidad de resolver sus dudas específicas al instante.
          </p>

          <div className="not-prose bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800 my-8">
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-primary-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-foreground">Dato Pedagógico:</strong> Diversos estudios demuestran que reducir el ratio de alumnos a menos de 6 multiplica por tres la velocidad de asimilación de contenidos complejos, especialmente en ciencias e idiomas.
              </p>
            </div>
          </div>

          {/* Sección 2 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary-500 shrink-0" />
            2. Mayor Confianza y Pérdida del Miedo a Equivocarse
          </h2>
          <p>
            El miedo al ridículo es uno de los mayores inhibidores del aprendizaje en Secundaria y Bachillerato. Muchos estudiantes prefieren quedarse con la duda antes que levantar la mano delante de 30 compañeros y arriesgarse a fallar.
          </p>
          <p>
            Los grupos reducidos crean un <strong>entorno seguro, cercano y de confianza</strong>. En nuestra academia, los alumnos comprueban rápidamente que sus compañeros comparten dificultades similares. Esto humaniza el error, reduce drásticamente la ansiedad académica y les anima a participar activamente, haciendo preguntas y proponiendo respuestas de manera natural.
          </p>

          {/* Sección 3 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Target className="h-7 w-7 text-primary-500 shrink-0" />
            3. Ritmo de Aprendizaje Adaptado a Cada Alumno
          </h2>
          <p>
            En el colegio o instituto, el profesor debe seguir un temario estricto sin poder detenerse si un alumno se queda atrás, o sin poder avanzar si otro ya domina la materia. Esto genera frustración en ambos extremos.
          </p>
          <p>
            En <strong>Academia Veritas</strong>, al trabajar con grupos pequeños, podemos sincronizarnos con el temario y los exámenes de cada alumno. Si un estudiante tiene un examen de Física la próxima semana y otro necesita repasar Sintaxis para Lengua, organizamos la clase para que cada uno trabaje en su prioridad real, maximizando el rendimiento del tiempo de estudio.
          </p>

          {/* Sección 4 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Brain className="h-7 w-7 text-primary-500 shrink-0" />
            4. Menos Distracciones y Máxima Concentración
          </h2>
          <p>
            Es un hecho: a menor número de personas en el aula, menor ruido ambiental y menor probabilidad de distracción. El profesor tiene contacto visual constante con todos los alumnos, lo que le permite detectar de inmediato si alguno se ha despistado y reconducir su atención de forma sutil y amable.
          </p>
          <p>
            Esta atmósfera de silencio productivo y concentración es idónea para asimilar conceptos complejos y realizar ejercicios prácticos con el apoyo del docente al lado.
          </p>

          {/* Sección 5 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-primary-500 shrink-0" />
            5. Seguimiento Real y Comunicación con las Familias
          </h2>
          <p>
            Cuando un profesor atiende a decenas de alumnos, es difícil llevar un registro detallado de la evolución de cada uno. En los grupos reducidos, el seguimiento es exhaustivo y diario.
          </p>
          <p>
            Nuestra directora académica, <strong>Sonia Higueras</strong>, conoce al detalle las fortalezas, debilidades y el estado de ánimo de cada estudiante que asiste a sus clases de refuerzo en Úbeda. Esto nos permite mantener informadas a las familias de forma continua y coordinarnos con ellos para aplicar pautas de estudio también en el hogar.
          </p>
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Buscas clases particulares eficaces en Úbeda?</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Comprueba la diferencia de estudiar en grupos reducidos con profesores que se implican de verdad en el éxito de tu hijo. Asesoramiento sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/sobre-nosotros">Conoce nuestro método</Link>
            </Button>
          </div>
        </div>

        {/* FAQ del Artículo */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes sobre Grupos Reducidos</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Cuál es el límite de alumnos por clase en Academia Veritas?</h4>
              <p className="text-muted-foreground text-sm">Nuestros grupos son muy reducidos para asegurar la máxima personalización. No masificamos las aulas para garantizar que cada alumno resuelva todas sus dudas en cada sesión.</p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Estudiar en grupo es mejor que las clases individuales?</h4>
              <p className="text-muted-foreground text-sm">Sí, para la mayoría de estudiantes. Los grupos reducidos ofrecen lo mejor de los dos mundos: la atención personalizada del profesor y la motivación de ver a otros compañeros trabajar y superar retos comunes, favoreciendo el aprendizaje colaborativo.</p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Cómo se organizan las materias dentro de un grupo reducido?</h4>
              <p className="text-muted-foreground text-sm">Cada estudiante trabaja en su propio temario, deberes y preparación de exámenes. El profesor va atendiendo de manera secuencial y constante a cada alumno en su mesa, guiando el estudio y resolviendo dudas en tiempo real.</p>
            </div>
          </div>
        </div>

        {/* Footer del Artículo */}
        <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <Image src="/sonia-higueras.jpg" alt="Sonia Higueras García" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Sonia Higueras García</p>
              <p className="text-xs text-muted-foreground">Directora Académica · Academia Veritas Úbeda</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/contacto" className="text-sm text-primary-600 font-medium hover:underline">
              Contactar →
            </Link>
          </div>
        </footer>

        <ArticulosRelacionados slugActual="ventajas-grupos-reducidos" />
      </div>
    </div>
  );
}
