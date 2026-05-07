import { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, BookOpen, CheckCircle2, Brain, Timer, Layout, Target, Zap, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "5 Técnicas de Estudio para Estudiantes de ESO | Academia Veritas Úbeda",
  description: "Mejora tu rendimiento académico en la ESO con estas 5 técnicas de estudio probadas: Pomodoro, Mapas Mentales, Feynmann y más. Academia Veritas Úbeda.",
  keywords: [
    "técnicas de estudio ESO",
    "cómo estudiar mejor",
    "método pomodoro",
    "mapas mentales",
    "rendimiento académico",
    "academia Úbeda",
    "clases de refuerzo Úbeda",
    "técnica feynman",
    "organización estudio",
  ],
  openGraph: {
    title: "5 Técnicas de Estudio que Todo Estudiante de ESO Debería Conocer | Academia Veritas",
    description: "Descubre los métodos que transformarán tu forma de aprender y te ayudarán a sacar mejores notas con menos estrés.",
    url: "https://academiaveritas.es/blog/tecnicas-estudio-eso",
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

export default function PostTecnicasEstudio() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "5 Técnicas de Estudio que Todo Estudiante de ESO Debería Conocer",
    "description": "Guía práctica de técnicas de estudio efectivas para mejorar la retención y el rendimiento en Secundaria.",
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
    "datePublished": "2026-04-28",
    "dateModified": "2026-05-08",
    "mainEntityOfPage": "https://academiaveritas.es/blog/tecnicas-estudio-eso"
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 font-medium mb-8 hover:gap-2 transition-all group"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Técnicas de Estudio
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> 28 Abril 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 5 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            5 Técnicas de Estudio que Todo Estudiante de ESO <span className="text-gradient">Debería Conocer para Triunfar</span>
          </h1>

          <div className="aspect-video rounded-3xl bg-gradient-to-br from-indigo-100 via-primary-50 to-purple-50 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-zinc-900 flex items-center justify-center mb-12 border border-slate-100 dark:border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <Brain className="h-24 w-24 text-primary-300 dark:text-primary-700" />
              <span className="text-primary-400 dark:text-primary-600 font-bold text-lg">Hacks de Aprendizaje</span>
            </div>
          </div>
        </header>

        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            La Educación Secundaria Obligatoria (ESO) supone un salto importante en la carga de trabajo y la dificultad de las materias. Muchos alumnos intentan estudiar igual que en Primaria: leyendo y repitiendo. Sin embargo, para tener éxito en la ESO, es necesario <strong>estudiar de forma más inteligente, no solo más horas</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Timer className="h-7 w-7 text-primary-500 shrink-0" />
            1. La Técnica Pomodoro: Vence a la Procrastinación
          </h2>
          <p>
            El cerebro humano tiene un límite de concentración intensa. La técnica Pomodoro consiste en trabajar en bloques de <strong>25 minutos (un "pomodoro") seguidos de 5 minutos de descanso</strong>. Después de cuatro bloques, se toma un descanso largo de 20-30 minutos.
          </p>
          <p>
            Esta técnica es perfecta para estudiantes de ESO que se sienten abrumados por largas tardes de estudio. Saber que el descanso está cerca ayuda a mantener el foco y evita la fatiga mental.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Layout className="h-7 w-7 text-primary-500 shrink-0" />
            2. Mapas Mentales: Visualiza el Conocimiento
          </h2>
          <p>
            En lugar de páginas y páginas de texto lineal, los mapas mentales utilizan diagramas para organizar la información de forma visual. Se empieza con un concepto central y se ramifica hacia ideas secundarias usando colores, dibujos y palabras clave.
          </p>
          <p>
            Es ideal para asignaturas como Biología, Geografía o Historia, donde hay muchos conceptos interconectados. Los mapas mentales facilitan la <strong>memoria visual y la asociación de ideas</strong>.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Zap className="h-7 w-7 text-primary-500 shrink-0" />
            3. El Método Feynman: Si puedes explicarlo, lo entiendes
          </h2>
          <p>
            Esta técnica consiste en intentar explicar un tema complejo como si se lo estuvieras enseñando a un niño de 10 años. Si te encallas en alguna parte o usas palabras demasiado técnicas que no sabes definir, es que ahí hay una laguna en tu conocimiento.
          </p>
          <p>
            En <strong>Academia Veritas</strong>, fomentamos que nuestros alumnos expliquen conceptos a sus compañeros, ya que es la forma más rápida de consolidar lo aprendido.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Target className="h-7 w-7 text-primary-500 shrink-0" />
            4. Active Recall (Recuerdo Activo)
          </h2>
          <p>
            La mayoría de estudiantes estudia de forma pasiva: leyendo y subrayando. El Recuerdo Activo consiste en <strong>ponerte a prueba constantemente</strong>. Cierra el libro e intenta escribir todo lo que recuerdas, o hazte preguntas sobre el tema.
          </p>
          <p>
            Es mucho más cansado que leer, pero multiplica por diez la retención a largo plazo. Las "flashcards" o tarjetas de estudio son una herramienta excelente para aplicar este método.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-primary-500 shrink-0" />
            5. El Sueño: El "botón de guardado" de tu cerebro
          </h2>
          <p>
            No es una técnica de estudio propiamente dicha, pero es la más importante. Durante el sueño, el cerebro procesa la información del día y la traslada a la memoria a largo plazo. <strong>Estudiar toda la noche antes de un examen es la forma más eficaz de olvidar lo aprendido</strong>.
          </p>
          <p>
            Un estudiante de ESO necesita entre 8 y 9 horas de sueño para que su cerebro rinda al 100% al día siguiente.
          </p>

          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Te cuesta organizar tu estudio?</h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              En Academia Veritas enseñamos a nuestros alumnos no solo el contenido, sino las herramientas para que aprendan a estudiar de forma autónoma y eficiente.
            </p>
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Ven a conocernos</Link>
            </Button>
          </div>
        </article>

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
        </footer>
      </div>
    </div>
  );
}
