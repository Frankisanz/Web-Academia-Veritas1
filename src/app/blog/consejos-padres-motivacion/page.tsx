import type { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, Heart, Home, Target, MessageCircle, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema, FAQSchema, type FaqItem } from "@/components/seo/schema";
import { ArticulosRelacionados } from "@/components/blog/articulos-relacionados";
import { SITE_URL } from "@/lib/business";

const SLUG = "consejos-padres-motivacion";

export const metadata: Metadata = {
  title: "Cómo Motivar a tu Hijo a Estudiar | Academia Veritas Úbeda",
  description:
    "Motivar no es presionar. Rutinas, entorno de estudio y refuerzo positivo: consejos prácticos para padres que quieren que su hijo estudie sin guerra diaria.",
  keywords: [
    "cómo motivar a mi hijo a estudiar",
    "consejos para padres estudio",
    "mi hijo no quiere estudiar",
    "hábitos de estudio en casa",
    "apoyo escolar Úbeda",
    "academia Úbeda",
    "clases particulares Úbeda",
  ],
  openGraph: {
    title: "Consejos para Padres: Cómo Motivar a tu Hijo a Estudiar",
    description:
      "Rutinas, entorno y refuerzo positivo para que estudiar deje de ser una batalla diaria en casa.",
    url: `${SITE_URL}/blog/${SLUG}/`,
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
    publishedTime: "2026-03-20",
  },
};

const faqs: FaqItem[] = [
  {
    question: "¿Debo castigar a mi hijo si suspende?",
    answer:
      "El castigo funciona a corto plazo y se agota rápido: a la tercera vez deja de tener efecto y solo queda el mal ambiente. Es mucho más eficaz acordar de antemano una rutina y unas consecuencias claras, y ser constante en cumplirlas, que reaccionar en caliente al ver las notas.",
  },
  {
    question: "¿Cuánto tiempo debería estudiar al día un alumno de la ESO?",
    answer:
      "Como orientación, entre una hora y hora y media diaria de trabajo efectivo en la ESO, y bastante más en 2º de Bachillerato. Pero importa más la regularidad que el número: media hora todos los días rinde mucho más que cinco horas seguidas el domingo por la tarde.",
  },
  {
    question: "Mi hijo dice que estudia pero saca malas notas, ¿qué pasa?",
    answer:
      "Lo más habitual es que esté estudiando de forma pasiva: leer y subrayar da sensación de estar trabajando, pero apenas fija nada. Suele resolverse cambiando el método de estudio, no aumentando las horas.",
  },
];

export default function PostConsejosPadres() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <ArticleSchema
        headline="Consejos para Padres: Cómo Motivar a tu Hijo a Estudiar"
        description="Motivar no es presionar. Rutinas, entorno de estudio y refuerzo positivo: consejos prácticos para padres que quieren que su hijo estudie sin guerra diaria."
        path={`/blog/${SLUG}/`}
        image="/primaria.jpg.jpg"
        datePublished="2026-03-20"
      />
      <BreadcrumbSchema
        items={[
          { name: "Blog", path: "/blog/" },
          { name: "Cómo motivar a tu hijo a estudiar", path: `/blog/${SLUG}/` },
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
              Consejos para Padres
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />{" "}
              <time dateTime="2026-03-20">20 Marzo 2026</time>
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 6 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Cómo motivar a tu hijo a estudiar <span className="text-gradient">sin convertirlo en una guerra</span>
          </h1>

          <div className="aspect-video rounded-3xl relative overflow-hidden mb-12 border border-slate-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/primaria.jpg.jpg"
              alt="Padres motivando a su hijo a estudiar — Academia Veritas Úbeda"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </header>

        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            «Es que no le motiva nada.» Lo escuchamos casi cada semana en la academia, y
            casi siempre lo dice alguien agotado de repetir lo mismo cada tarde. La buena
            noticia es que <strong>la motivación no es un rasgo de carácter que se tiene o
            no se tiene</strong>: es en buena medida una consecuencia del entorno, la
            rutina y el tipo de conversación que hay en casa alrededor del estudio.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <AlertTriangle className="h-7 w-7 text-primary-500 shrink-0" />
            Primero: distingue desmotivación de dificultad
          </h2>
          <p>
            Antes de trabajar la motivación conviene descartar lo otro. Un alumno que no
            entiende la materia acaba pareciendo desmotivado, porque nadie insiste
            voluntariamente en algo donde solo cosecha fracasos. Es un mecanismo de
            protección perfectamente lógico.
          </p>
          <p>
            La pregunta clave es: <strong>¿se aburre porque no le interesa o se rinde
            porque no puede seguir el ritmo?</strong> Si es lo segundo, ninguna técnica de
            motivación va a funcionar hasta que se tapen las lagunas de base. Es
            exactamente lo que hacemos en las{" "}
            <Link href="/clases-particulares">clases de refuerzo</Link>: localizar el
            punto donde se perdió el hilo.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Home className="h-7 w-7 text-primary-500 shrink-0" />
            1. El entorno importa más que el discurso
          </h2>
          <p>
            Un escritorio despejado, buena luz, la puerta abierta y el móvil{" "}
            <strong>fuera de la habitación</strong>, no boca abajo sobre la mesa. La
            diferencia entre tener el móvil en otra habitación y tenerlo en silencio al
            lado es enorme: la atención se resiente solo con saber que está ahí.
          </p>
          <p>
            Y un detalle que suele pasar desapercibido: si mientras tu hijo estudia en su
            cuarto el resto de la casa está viendo la televisión a todo volumen, el
            mensaje que recibe no es el que pretendes.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Clock className="h-7 w-7 text-primary-500 shrink-0" />
            2. Hora fija, todos los días
          </h2>
          <p>
            La rutina ahorra fuerza de voluntad. Si estudiar es algo que se decide cada
            tarde, cada tarde hay una negociación. Si es algo que simplemente pasa a las
            cinco y media, como cenar o ducharse, la negociación desaparece en unas
            semanas.
          </p>
          <p>
            Que la hora la proponga él o ella, dentro de unos márgenes razonables. Una
            rutina elegida se cumple mucho mejor que una rutina impuesta.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Target className="h-7 w-7 text-primary-500 shrink-0" />
            3. Objetivos pequeños y alcanzables
          </h2>
          <p>
            «Saca mejores notas» no es un objetivo: es un deseo. «Esta tarde hago los diez
            ejercicios de la página 84» sí lo es, porque se puede empezar, terminar y
            tachar de la lista.
          </p>
          <p>
            La sensación de haber completado algo es en sí misma motivadora. Por eso
            funciona tan bien dividir la tarde en bloques con un final visible, en lugar de
            plantear un genérico «ponte a estudiar» que no se sabe cuándo acaba.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary-500 shrink-0" />
            4. Reconoce el esfuerzo, no solo el resultado
          </h2>
          <p>
            Si en casa solo se celebra el sobresaliente, un alumno que ha subido de un 3 a
            un 5 aprende que su esfuerzo no cuenta. Y ese salto, precisamente, es el más
            difícil de todos.
          </p>
          <p>
            Fíjate en lo que sí depende de él: que se haya sentado todos los días, que haya
            preguntado una duda, que haya hecho el esquema. Eso es lo que puede repetir el
            trimestre siguiente; el 9 no siempre.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <MessageCircle className="h-7 w-7 text-primary-500 shrink-0" />
            5. Cambia el interrogatorio por la conversación
          </h2>
          <p>
            «¿Has estudiado?» y «¿tienes deberes?» son preguntas cerradas que se responden
            con un monosílabo y ponen al alumno a la defensiva. Prueba con «¿qué habéis
            dado hoy en mates?» o «explícame eso que estás estudiando, que no me entero».
          </p>
          <p>
            Esta última tiene un efecto secundario estupendo: explicar en voz alta es una
            de las técnicas de estudio más eficaces que existen. Sin darse cuenta, tu hijo
            está repasando mientras charla contigo.
          </p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Heart className="h-7 w-7 text-primary-500 shrink-0" />
            6. Separa la nota de la persona
          </h2>
          <p>
            Hay una distancia enorme entre «este examen te ha salido mal» y «eres un
            desastre». La primera frase habla de un hecho puntual y reversible; la segunda,
            de una identidad. Y los adolescentes acaban comportándose según la identidad
            que se les repite.
          </p>
          <p>
            Un alumno convencido de que es malo en matemáticas dejará de intentarlo, porque
            para él el resultado ya está escrito. Romper esa creencia suele ser el paso
            previo a cualquier mejora real.
          </p>

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
              ¿Y si el problema no es la motivación?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              En Academia Veritas empezamos por una evaluación inicial para saber si lo que
              falla es la actitud o la base. Cuéntanos el caso de tu hijo y te damos nuestra
              opinión sincera, sin compromiso.
            </p>
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Hablar con nosotros</Link>
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
