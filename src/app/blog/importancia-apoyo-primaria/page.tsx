import { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, GraduationCap, CheckCircle2, BookOpen, Heart, Brain, TrendingUp, Users, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "La Importancia del Apoyo Escolar en Edades Tempranas | Clases de Refuerzo en Úbeda",
  description: "¿Por qué invertir en clases de refuerzo en Úbeda desde Primaria? Descubre cómo el apoyo escolar temprano mejora las notas, la autoestima y los hábitos de estudio de tu hijo. Academia Veritas Úbeda.",
  keywords: [
    "clases de refuerzo Úbeda",
    "apoyo escolar Úbeda",
    "clases particulares Úbeda",
    "refuerzo escolar primaria Úbeda",
    "academia Úbeda",
    "clases de apoyo Úbeda",
    "profesor particular Úbeda",
    "apoyo escolar primaria",
    "refuerzo educativo Úbeda",
    "academia de refuerzo Úbeda",
    "clases extraescolares Úbeda",
    "mejorar notas primaria",
    "dificultades aprendizaje primaria",
  ],
  openGraph: {
    title: "La Importancia del Apoyo Escolar en Edades Tempranas | Academia Veritas Úbeda",
    description: "Descubre por qué las clases de refuerzo en Úbeda desde Primaria marcan la diferencia en el futuro académico de tu hijo.",
    url: "https://academiaveritas.es/blog/importancia-apoyo-primaria",
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

export default function PostApoyoPrimaria() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "La Importancia del Apoyo Escolar en Edades Tempranas: Clases de Refuerzo en Úbeda",
    "description": "Guía completa sobre por qué el apoyo escolar temprano en Primaria es clave para el éxito académico. Clases de refuerzo en Úbeda con Academia Veritas.",
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
    "datePublished": "2026-04-02",
    "dateModified": "2026-05-07",
    "mainEntityOfPage": "https://academiaveritas.es/blog/importancia-apoyo-primaria",
    "keywords": "clases de refuerzo Úbeda, apoyo escolar Úbeda, clases particulares Úbeda, refuerzo escolar primaria, academia Úbeda"
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              Apoyo Escolar
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> 2 Abril 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 8 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            La Importancia del Apoyo Escolar en Edades Tempranas: <span className="text-gradient">Por Qué las Clases de Refuerzo en Úbeda Marcan la Diferencia</span>
          </h1>

          <div className="aspect-video rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-amber-50 dark:from-primary-900/20 dark:via-zinc-900 dark:to-zinc-900 flex items-center justify-center mb-12 border border-slate-100 dark:border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <BookOpen className="h-24 w-24 text-primary-300 dark:text-primary-700" />
              <span className="text-primary-400 dark:text-primary-600 font-bold text-lg">Apoyo Escolar en Primaria</span>
            </div>
          </div>
        </header>

        {/* Contenido del Artículo */}
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
            Como padres, una de las decisiones más importantes que tomamos es cómo acompañar a nuestros hijos en su recorrido escolar. Detectar las dificultades a tiempo y proporcionarles <strong>clases de refuerzo en Úbeda</strong> durante la etapa de Primaria puede marcar la diferencia entre un estudiante que lucha y uno que despega con confianza. En este artículo, te explicamos por qué el <strong>apoyo escolar temprano</strong> es una inversión que vale cada minuto.
          </p>

          {/* Sección 1 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Brain className="h-7 w-7 text-primary-500 shrink-0" />
            1. El Cerebro Infantil: Una Ventana de Oportunidad Única
          </h2>
          <p>
            Entre los 6 y los 12 años, el cerebro de un niño se encuentra en pleno desarrollo de sus capacidades cognitivas. Es durante esta etapa cuando se forman las <strong>bases del pensamiento lógico, la comprensión lectora y la capacidad de resolución de problemas</strong>. Si un alumno de Primaria arrastra lagunas en Matemáticas o Lengua, esas carencias no desaparecen solas: se acumulan y se agravan curso tras curso.
          </p>
          <p>
            Las <strong>clases particulares en Úbeda</strong> durante esta etapa permiten detectar y corregir esas lagunas antes de que se conviertan en un muro. En nuestra experiencia en <strong>Academia Veritas</strong>, hemos comprobado que un trimestre de <strong>refuerzo escolar personalizado</strong> puede evitar años de frustración académica.
          </p>

          <div className="not-prose bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800 my-8">
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-primary-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-foreground">Dato clave:</strong> Según estudios pedagógicos, el 70% de los alumnos que reciben <strong>apoyo escolar en Primaria</strong> mantienen un rendimiento académico superior durante toda la Secundaria y Bachillerato.
              </p>
            </div>
          </div>

          {/* Sección 2 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary-500 shrink-0" />
            2. Autoestima y Confianza: El Motor Invisible del Aprendizaje
          </h2>
          <p>
            Un niño que no entiende lo que se explica en clase no solo suspende: pierde la confianza en sí mismo. Empieza a pensar que &quot;no vale para estudiar&quot; o que es &quot;menos listo&quot; que sus compañeros. Este círculo vicioso de frustración es uno de los mayores enemigos del aprendizaje.
          </p>
          <p>
            Las <strong>clases de refuerzo en Úbeda</strong> en un entorno de <strong>grupos reducidos</strong> rompen este ciclo. Cuando un alumno recibe atención personalizada y empieza a entender lo que antes le parecía imposible, su actitud cambia radicalmente. Ya no teme levantar la mano en clase. Ya no evita los deberes. <strong>Empieza a creer en sí mismo</strong>.
          </p>
          <p>
            En <strong>Academia Veritas en Úbeda</strong>, nuestros grupos nunca superan los pocos alumnos por clase, lo que garantiza que cada niño recibe la atención que necesita para recuperar esa confianza perdida.
          </p>

          {/* Sección 3 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary-500 shrink-0" />
            3. Hábitos de Estudio: Se Forjan en Primaria o No Se Forjan
          </h2>
          <p>
            Uno de los errores más comunes que vemos en nuestra <strong>academia de refuerzo en Úbeda</strong> es esperar a que el niño llegue a Secundaria para preocuparse por cómo estudia. Para entonces, ya lleva años sin método, sin organización y sin técnicas de estudio.
          </p>
          <p>
            El <strong>apoyo escolar en edades tempranas</strong> no solo consiste en explicar las materias: se trata de enseñar a estudiar. En nuestras <strong>clases de apoyo en Úbeda</strong> trabajamos:
          </p>

          <ul className="not-prose space-y-3 mb-8">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Organización del tiempo:</strong> Planificar las tareas y el estudio con un horario realista, adaptado a la edad del alumno.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Técnicas de lectura comprensiva:</strong> Subrayado activo, resúmenes con sus propias palabras y esquemas visuales para Primaria.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Autonomía progresiva:</strong> El objetivo es que el alumno sea cada vez más independiente, no que dependa siempre del profesor particular.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Preparación de exámenes:</strong> Simulacros adaptados a su nivel para que aprenda a gestionar el tiempo y los nervios desde pequeño.</span>
            </li>
          </ul>

          {/* Sección 4 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Users className="h-7 w-7 text-primary-500 shrink-0" />
            4. Señales de que Tu Hijo Necesita Clases de Refuerzo
          </h2>
          <p>
            Muchos padres en Úbeda nos preguntan: <em>&quot;¿Cómo sé si mi hijo realmente necesita apoyo escolar?&quot;</em>. Estas son las señales más claras:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg w-fit mb-3">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">⚠️</span>
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">Bajada repentina de notas</h4>
              <p className="text-muted-foreground text-xs">Un descenso en las calificaciones suele indicar que hay lagunas que se acumulan.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg w-fit mb-3">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">⚠️</span>
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">Rechazo a hacer deberes</h4>
              <p className="text-muted-foreground text-xs">Si evita las tareas o se frustra al intentarlas, puede que no entienda la base.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg w-fit mb-3">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">⚠️</span>
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">Falta de concentración</h4>
              <p className="text-muted-foreground text-xs">Le cuesta mantener la atención durante más de unos minutos en los deberes.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg w-fit mb-3">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">⚠️</span>
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">Comentarios del profesor</h4>
              <p className="text-muted-foreground text-xs">Si el tutor del colegio recomienda refuerzo, no esperes al siguiente trimestre.</p>
            </div>
          </div>

          <div className="not-prose bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 my-8 text-sm italic">
            <strong>Consejo de Academia Veritas:</strong> No esperes a que el problema sea grave. Las <strong>clases de refuerzo en Úbeda</strong> son mucho más efectivas como prevención que como solución de emergencia. Un alumno de 3º de Primaria con una pequeña laguna en Matemáticas puede resolverla en semanas; ese mismo alumno en 1º de ESO necesitará meses.
          </div>

          {/* Sección 5 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-primary-500 shrink-0" />
            5. ¿Qué Diferencia a una Buena Academia de Refuerzo?
          </h2>
          <p>
            A la hora de elegir <strong>clases particulares en Úbeda</strong> para tu hijo, fíjate en estos factores decisivos:
          </p>

          <ul className="not-prose space-y-3 mb-8">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Grupos reducidos:</strong> Si la clase tiene más de 6-8 alumnos, la atención personalizada es imposible. En <strong>Academia Veritas</strong> limitamos los grupos para que cada alumno tenga su espacio.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Profesores cualificados:</strong> No basta con saber la materia; hay que saber enseñarla. Nuestra directora, Sonia Higueras, cuenta con un Máster en Profesorado y años de experiencia en <strong>refuerzo escolar en Úbeda</strong>.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Comunicación con los padres:</strong> Las familias deben estar informadas del progreso real del alumno. En nuestra academia ofrecemos seguimiento continuo y contacto directo por WhatsApp.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Adaptación al currículo del colegio:</strong> Las <strong>clases de apoyo en Úbeda</strong> deben ir sincronizadas con lo que se enseña en el centro escolar, no seguir un temario genérico.</span>
            </li>
          </ul>

          {/* Sección 6 */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-primary-500 shrink-0" />
            6. Materias Clave en Primaria: Dónde Más se Necesita el Refuerzo
          </h2>
          <p>
            En nuestra experiencia con <strong>clases de refuerzo en Úbeda</strong> para alumnos de Primaria, las asignaturas donde más apoyo se necesita son:
          </p>

          <div className="not-prose grid sm:grid-cols-3 gap-4 my-8">
            <div className="bg-primary-50/50 dark:bg-zinc-900 p-5 rounded-2xl border border-primary-100 dark:border-zinc-800 text-center">
              <div className="text-3xl mb-2">📐</div>
              <h4 className="font-bold text-foreground text-sm mb-1">Matemáticas</h4>
              <p className="text-muted-foreground text-xs">Cálculo, resolución de problemas y razonamiento lógico.</p>
            </div>
            <div className="bg-primary-50/50 dark:bg-zinc-900 p-5 rounded-2xl border border-primary-100 dark:border-zinc-800 text-center">
              <div className="text-3xl mb-2">📖</div>
              <h4 className="font-bold text-foreground text-sm mb-1">Lengua Castellana</h4>
              <p className="text-muted-foreground text-xs">Comprensión lectora, ortografía y expresión escrita.</p>
            </div>
            <div className="bg-primary-50/50 dark:bg-zinc-900 p-5 rounded-2xl border border-primary-100 dark:border-zinc-800 text-center">
              <div className="text-3xl mb-2">🇬🇧</div>
              <h4 className="font-bold text-foreground text-sm mb-1">Inglés</h4>
              <p className="text-muted-foreground text-xs">Vocabulario, gramática básica y comprensión oral.</p>
            </div>
          </div>

          <p>
            Si tu hijo tiene dificultades en alguna de estas áreas, no dejes pasar el tiempo. Las <strong>clases particulares en Úbeda</strong> de Academia Veritas cubren todas estas materias con un enfoque práctico y adaptado a las necesidades de cada alumno.
          </p>

          {/* Sección 7 - Conclusión SEO */}
          <h2 className="text-2xl font-bold mb-4">
            Conclusión: El Mejor Momento para las Clases de Refuerzo es Ahora
          </h2>
          <p>
            Invertir en <strong>apoyo escolar en Úbeda</strong> durante la etapa de Primaria no es un gasto: es una inversión en el futuro de tu hijo. Los alumnos que reciben <strong>refuerzo educativo</strong> temprano desarrollan mejores hábitos de estudio, mayor autoestima académica y una base sólida que les acompañará durante toda su vida escolar.
          </p>
          <p>
            En <strong>Academia Veritas</strong>, ubicada en la <strong>Calle Torrenueva Nº 1, 1º, en Úbeda (Jaén)</strong>, llevamos años ayudando a familias de Úbeda y comarca a transformar el rendimiento escolar de sus hijos. Nuestros <strong>grupos reducidos</strong>, la implicación de nuestra profesora Sonia Higueras y el seguimiento personalizado nos convierten en la <strong>mejor opción de clases de refuerzo en Úbeda</strong> para alumnos de Primaria.
          </p>
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Tu hijo necesita apoyo escolar en Úbeda?</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            En Academia Veritas ofrecemos clases de refuerzo en Úbeda con grupos reducidos, atención personalizada y seguimiento continuo con las familias. La primera consulta es sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/refuerzo/primaria">Ver programa de Primaria</Link>
            </Button>
          </div>
        </div>

        {/* FAQ del Artículo - SEO Bonus */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes sobre Clases de Refuerzo en Úbeda</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿A partir de qué edad son recomendables las clases de refuerzo?</h4>
              <p className="text-muted-foreground text-sm">Desde 1º de Primaria (6 años) se puede empezar con apoyo escolar. Es la mejor etapa para corregir dificultades y crear hábitos de estudio sólidos antes de que se compliquen las materias en cursos superiores.</p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Cuánto cuestan las clases particulares en Úbeda?</h4>
              <p className="text-muted-foreground text-sm">Los precios varían según la academia y el tipo de clase. En Academia Veritas ofrecemos tarifas competitivas con descuentos especiales para hermanos. Contacta con nosotros para recibir información detallada sin compromiso.</p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Son mejores las clases en grupo o individuales?</h4>
              <p className="text-muted-foreground text-sm">Ambas tienen ventajas. En nuestra academia de Úbeda utilizamos grupos muy reducidos que combinan lo mejor de ambos mundos: atención casi individual con la ventaja de la interacción entre compañeros, que motiva y refuerza el aprendizaje.</p>
            </div>
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <h4 className="font-bold text-foreground mb-2">¿Cómo sé si mi hijo está mejorando con el refuerzo?</h4>
              <p className="text-muted-foreground text-sm">En Academia Veritas mantenemos contacto directo con los padres. Informamos del progreso, de las áreas de mejora y coordinamos con el tutor del colegio para alinear el trabajo. La mejora suele notarse en las primeras 4-6 semanas.</p>
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
      </div>
    </div>
  );
}
