import type { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, Brain, Layers, PenTool, Repeat, ShieldCheck, Calculator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema, FAQSchema, type FaqItem } from "@/components/seo/schema";
import { ArticulosRelacionados } from "@/components/blog/articulos-relacionados";
import { SITE_URL } from "@/lib/business";

const SLUG = "superar-miedo-matematicas";

export const metadata: Metadata = {
  title: "Cómo Superar el Miedo a las Matemáticas | Academia Veritas Úbeda",
  description:
    "Ansiedad matemática en Secundaria: por qué aparece y qué hacer. Estrategias que usamos en nuestras clases particulares de matemáticas en Úbeda para revertirla.",
  keywords: [
    "miedo a las matemáticas",
    "ansiedad matemática",
    "matemáticas ESO",
    "clases particulares matemáticas Úbeda",
    "refuerzo matemáticas Úbeda",
    "cómo aprobar matemáticas",
    "academia matemáticas Úbeda",
  ],
  openGraph: {
    title: "Matemáticas en Secundaria: Cómo Superar el Miedo a los Números",
    description:
      "Por qué aparece la ansiedad matemática y qué estrategias funcionan de verdad para revertirla en la ESO.",
    url: `${SITE_URL}/blog/${SLUG}/`,
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
    publishedTime: "2026-03-05",
  },
};

const faqs: FaqItem[] = [
  {
    question: "¿Existe realmente la ansiedad matemática?",
    answer:
      "Sí, es un fenómeno bien descrito: la tensión que sienten algunos alumnos ante una tarea numérica consume parte de su memoria de trabajo, precisamente el recurso que necesitarían para resolver el ejercicio. El resultado es que rinden por debajo de lo que saben, lo que confirma su creencia de que no valen para las matemáticas.",
  },
  {
    question: "Mi hijo entiende las mates en clase pero suspende los exámenes, ¿por qué?",
    answer:
      "Suele ser falta de práctica autónoma. Seguir una explicación es mucho más fácil que resolver solo y en silencio, con un reloj corriendo. Se corrige haciendo ejercicios sin ayuda y en condiciones parecidas a las del examen.",
  },
  {
    question: "¿Se puede recuperar el nivel de matemáticas a mitad de curso?",
    answer:
      "En la mayoría de los casos, sí, siempre que se localicen y se tapen las lagunas de base en lugar de correr detrás del temario del trimestre. Cuanto antes se empiece, menos contenido hay que recuperar en paralelo al que sigue avanzando.",
  },
];

export default function PostMiedoMatematicas() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <ArticleSchema
        headline="Matemáticas en Secundaria: Cómo Superar el Miedo a los Números"
        description="Ansiedad matemática en Secundaria: por qué aparece y qué hacer. Estrategias que usamos en nuestras clases particulares de matemáticas en Úbeda para revertirla."
        path={`/blog/${SLUG}/`}
        image="/bachiller2.jpg.jpg"
        datePublished="2026-03-05"
      />
      <BreadcrumbSchema
        items={[
          { name: "Blog", path: "/blog/" },
          { name: "Superar el miedo a las matemáticas", path: `/blog/${SLUG}/` },
        ]}
      />
      <FAQSchema items={faqs} />

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
              Matemáticas
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />{" "}
              <time dateTime="2026-03-05">5 Marzo 2026</time>
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 7 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Matemáticas en Secundaria: cómo superar el <span className="text-gradient">miedo a los números</span>
          </h1>

          <div className="aspect-video rounded-3xl relative overflow-hidden mb-12 border border-slate-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/bachiller2.jpg.jpg"
              alt="Alumno superando el miedo a las matemáticas en Academia Veritas, Úbeda"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </header>

        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            «Es que yo soy de letras.» Pocas frases se repiten tanto en una academia, y
            pocas hacen tanto daño. Detrás casi nunca hay una incapacidad real para las
            matemáticas: hay <strong>un tema concreto que se atragantó hace tres cursos</strong>{" "}
            y una historia que el alumno se ha contado a sí mismo para explicar los
            suspensos que vinieron después.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Brain className="h-7 w-7 text-primary-500 shrink-0" />
            Qué es la ansiedad matemática
          </h2>
          <p>
            La ansiedad matemática es la tensión que aparece ante una tarea numérica y que
            interfiere con la propia resolución. Es un círculo bastante cruel: el alumno se
            pone nervioso, esa tensión ocupa parte de los recursos mentales que necesitaría
            para pensar, falla el ejercicio, y el fallo confirma su idea de que no vale para
            esto.
          </p>
          <p>
            Lo importante es que el bucle se puede romper, pero no con frases de ánimo. Se
            rompe con <strong>experiencias repetidas de éxito</strong>, aunque sean
            pequeñas, que vayan desmintiendo la creencia poco a poco.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Layers className="h-7 w-7 text-primary-500 shrink-0" />
            1. Buscar el punto exacto donde se rompió la cadena
          </h2>
          <p>
            Las matemáticas son la asignatura más acumulativa del currículo. Quien no maneja
            las fracciones no puede con las ecuaciones; quien no maneja las ecuaciones no
            puede con las funciones. Cuando un alumno de 3º de la ESO suspende, el problema
            rara vez está en 3º.
          </p>
          <p>
            Por eso lo primero que hacemos en nuestras{" "}
            <Link href="/clases-particulares/matematicas">clases de matemáticas en Úbeda</Link>{" "}
            es una prueba de nivel que baja cursos hacia atrás hasta encontrar el punto donde
            se rompió la cadena. Reforzar 3º sin arreglar lo de 1º es levantar un muro sin
            cimientos.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <PenTool className="h-7 w-7 text-primary-500 shrink-0" />
            2. Cambiar el «no me sale» por «no me sale todavía»
          </h2>
          <p>
            Puede sonar a truco de manual de autoayuda, pero tiene un efecto real: el alumno
            que dice «no me sale» describe una condición permanente; el que dice «no me sale
            todavía» describe un momento del proceso. Y actúa en consecuencia.
          </p>
          <p>
            En clase insistimos mucho en que <strong>equivocarse en un ejercicio es
            información, no un veredicto</strong>. Un error bien analizado enseña más que
            tres ejercicios que salieron bien a la primera.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Calculator className="h-7 w-7 text-primary-500 shrink-0" />
            3. Menos mirar, más hacer
          </h2>
          <p>
            El error de estudio más común en matemáticas es repasar los ejercicios
            resueltos. Leer una solución paso a paso produce una falsa sensación de dominio:
            todo parece evidente mientras alguien te lleva de la mano.
          </p>
          <p>
            La única práctica que cuenta es la del folio en blanco. Tapar la solución,
            resolver solo y comparar después. Es más incómodo y más lento, y es lo que
            realmente se parece a un examen.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Repeat className="h-7 w-7 text-primary-500 shrink-0" />
            4. Poco y todos los días
          </h2>
          <p>
            Media hora diaria de matemáticas rinde muchísimo más que tres horas seguidas el
            día antes del examen. La destreza de cálculo funciona como un músculo: se
            construye con frecuencia, no con atracones.
          </p>
          <p>
            Además, la práctica diaria mantiene el contenido fresco, y llegar al examen sin
            haber tenido que recuperar nada a última hora reduce por sí solo buena parte de
            los nervios.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-primary-500 shrink-0" />
            5. Entrenar el examen, no solo la materia
          </h2>
          <p>
            Muchos alumnos que dominan el temario rinden mal el día del examen simplemente
            porque nunca han practicado en esas condiciones: reloj corriendo, sin poder
            preguntar, sin apuntes.
          </p>
          <p>
            La semana previa a cada control hacemos un simulacro cronometrado y lo
            corregimos juntos. Después de tres o cuatro veces, el examen deja de ser una
            situación excepcional y pasa a ser algo conocido. Y lo conocido asusta bastante
            menos.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-12">Qué puedes hacer desde casa</h2>
          <ul>
            <li>
              <strong>No digas «yo tampoco valía para las mates».</strong> Es
              tranquilizador para el alumno a corto plazo y le da una excusa perfecta para
              el resto del curso.
            </li>
            <li>
              <strong>Pídele que te explique un ejercicio.</strong> Explicar en voz alta
              obliga a ordenar el razonamiento y destapa enseguida lo que no está entendido.
            </li>
            <li>
              <strong>Celebra el proceso.</strong> Que se haya sentado todos los días es
              más repetible, y a la larga más rentable, que la nota concreta de un examen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-12">Preguntas frecuentes</h2>
          <div className="not-prose space-y-5 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center not-prose">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Clases particulares de matemáticas en Úbeda
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Grupos reducidos, prueba de nivel inicial y trabajo sobre el temario real de
              su instituto. Cuéntanos desde cuándo se le atragantan las mates y vemos por
              dónde empezar.
            </p>
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/clases-particulares/matematicas">Ver las clases de matemáticas</Link>
            </Button>
          </div>
        </article>

        <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden relative">
              <Image src="/sonia-higueras.jpg" alt="Sonia Higueras García" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Sonia Higueras García</p>
              <p className="text-xs text-muted-foreground">
                Directora Académica · Academia Veritas Úbeda
              </p>
            </div>
          </div>
        </footer>

        <ArticulosRelacionados slugActual={SLUG} />
      </div>
    </div>
  );
}
