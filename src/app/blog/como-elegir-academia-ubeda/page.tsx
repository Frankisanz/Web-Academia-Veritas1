import type { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, Users, Eye, MessageSquare, MapPin, Wallet, ClipboardCheck, UserCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema, FAQSchema, type FaqItem } from "@/components/seo/schema";
import { ArticulosRelacionados } from "@/components/blog/articulos-relacionados";
import { SITE_URL } from "@/lib/business";

const SLUG = "como-elegir-academia-ubeda";

export const metadata: Metadata = {
  title: "Cómo Elegir Academia en Úbeda: 8 Claves | Academia Veritas",
  description:
    "Guía para elegir academia de clases particulares en Úbeda: qué preguntar, en qué fijarte y qué señales de alarma detectar antes de matricular a tu hijo.",
  keywords: [
    "elegir academia Úbeda",
    "mejor academia Úbeda",
    "academia clases particulares Úbeda",
    "academia apoyo escolar Úbeda",
    "clases particulares Úbeda opiniones",
    "profesor particular Úbeda",
    "academia cerca de mí Úbeda",
  ],
  openGraph: {
    title: "Cómo Elegir Academia en Úbeda: 8 Claves para Acertar",
    description:
      "Grupos, profesorado, seguimiento y precio: en qué fijarte de verdad antes de matricular a tu hijo en una academia de Úbeda.",
    url: `${SITE_URL}/blog/${SLUG}/`,
    type: "article",
    locale: "es_ES",
    siteName: "Academia Veritas",
    publishedTime: "2026-07-15",
  },
};

const faqs: FaqItem[] = [
  {
    question: "¿Cuántos alumnos debería tener una clase de apoyo escolar?",
    answer:
      "Cuantos menos, mejor. Por encima de ocho o diez alumnos por profesor deja de ser refuerzo personalizado y se parece demasiado a la clase del instituto, que es justo de donde el alumno viene sin haber resuelto sus dudas.",
  },
  {
    question: "¿Es mejor una academia o un profesor particular a domicilio?",
    answer:
      "Depende del caso. El profesor a domicilio ofrece atención uno a uno y máxima flexibilidad. La academia aporta un entorno de estudio sin distracciones, continuidad si un profesor falla y el empuje de trabajar rodeado de otros alumnos. Para la mayoría de estudiantes de ESO y Bachillerato, el entorno de la academia rinde más.",
  },
  {
    question: "¿Cuándo es el mejor momento para apuntar a mi hijo a una academia?",
    answer:
      "En septiembre, antes de que se acumule el retraso. La segunda mejor opción es justo después de la primera evaluación, cuando ya se sabe qué asignaturas van mal pero aún queda curso por delante para reaccionar.",
  },
];

const claves = [
  {
    icon: Users,
    titulo: "1. Cuántos alumnos hay por clase",
    parrafos: [
      "Es el primer dato que deberías preguntar, y conviene preguntarlo así de directo: «¿cuántos alumnos hay en el grupo de 3º de la ESO los martes?». Si la respuesta es vaga, desconfía.",
      "La razón es sencilla: tu hijo ya ha estado esa mañana en una clase de treinta personas donde no ha preguntado sus dudas. Si por la tarde va a otra clase donde tampoco puede preguntar, estás pagando por repetir el problema en lugar de resolverlo.",
    ],
  },
  {
    icon: UserCheck,
    titulo: "2. Quién da realmente las clases",
    parrafos: [
      "Muchas academias se anuncian con un equipo de profesionales y luego las tardes las cubren estudiantes universitarios que rotan cada trimestre. No es que un universitario no pueda enseñar bien, pero la rotación constante rompe el seguimiento: cada nuevo profesor empieza de cero contigo.",
      "Pregunta por la formación de quien va a dar la clase y, sobre todo, por la continuidad. Un profesor que lleva al alumno todo el curso sabe exactamente dónde falla y cómo hablarle.",
    ],
  },
  {
    icon: ClipboardCheck,
    titulo: "3. Si hay una evaluación inicial",
    parrafos: [
      "Una academia que mete a tu hijo directamente en un grupo sin haber comprobado su nivel está adivinando. Y en refuerzo escolar adivinar sale caro: casi todos los suspensos de la ESO vienen de lagunas de cursos anteriores que nadie ha localizado.",
      "La primera sesión debería servir para saber qué domina y qué no, y para plantear un plan concreto. Si nadie te cuenta un diagnóstico, difícilmente habrá un tratamiento.",
    ],
  },
  {
    icon: MessageSquare,
    titulo: "4. Cómo se comunican con la familia",
    parrafos: [
      "Como padre o madre deberías saber, sin tener que perseguir a nadie, si tu hijo está yendo, si trabaja en clase y si va mejorando. Pregunta con qué frecuencia informan y por qué vía.",
      "Ojo con el otro extremo: informar no es mandar un informe automático cada mes. Es que alguien que conoce a tu hijo te cuente qué está pasando cuando hay algo que contar.",
    ],
  },
  {
    icon: Eye,
    titulo: "5. Si trabajan con el temario de su centro",
    parrafos: [
      "En Úbeda conviven varios institutos y colegios, y cada uno lleva su ritmo, sus libros y sus criterios de examen. Un refuerzo que va por libre con material genérico puede estar dando en octubre lo que en su clase entra en febrero.",
      "Lo que funciona es lo contrario: que el alumno traiga su libro, sus apuntes y sus exámenes corregidos, y que la clase se construya sobre eso.",
    ],
  },
  {
    icon: MapPin,
    titulo: "6. Dónde está y a qué hora",
    parrafos: [
      "Parece secundario y es de lo que más determina que un alumno acabe el curso o lo deje en febrero. Si ir a clase supone media hora de desplazamiento en cada sentido, la constancia se resiente.",
      "Valora una ubicación céntrica, a la que pueda ir andando o donde sea fácil dejarle en coche, y un horario que no choque con entrenamientos u otras actividades. Si vienes de fuera de Úbeda —de Baeza, Torreperogil o Sabiote—, pregunta si agrupan horarios por municipio.",
    ],
  },
  {
    icon: Wallet,
    titulo: "7. Qué incluye exactamente el precio",
    parrafos: [
      "Pide el precio por escrito y con todo dentro: matrícula, material, si se cobran los meses completos aunque haya vacaciones, y qué pasa si un mes necesita una hora más antes de los exámenes.",
      "Pregunta también por los descuentos para hermanos, que en academias pequeñas suelen existir aunque no estén anunciados. Y desconfía tanto de lo sospechosamente barato como de quien no te da una cifra clara hasta que vas presencialmente.",
    ],
  },
  {
    icon: Sparkles,
    titulo: "8. Qué te dicen cuando les preguntas por los resultados",
    parrafos: [
      "Una academia seria te dirá que depende del punto de partida del alumno y de cuánto trabaje. Una academia que te garantiza el aprobado en la primera llamada, sin conocer a tu hijo, te está vendiendo algo que no puede cumplir.",
      "La mejor señal es que te hagan preguntas antes de darte respuestas: en qué asignaturas falla, desde cuándo, cómo estudia en casa. Quien pregunta es porque piensa trabajar tu caso concreto.",
    ],
  },
];

export default function PostComoElegirAcademia() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <ArticleSchema
        headline="Cómo Elegir Academia en Úbeda: 8 Claves para Acertar"
        description="Guía práctica para elegir academia de clases particulares en Úbeda: qué preguntar, en qué fijarte y qué señales de alarma detectar antes de matricular a tu hijo."
        path={`/blog/${SLUG}/`}
        image="/foto-blog.jpg"
        datePublished="2026-07-15"
      />
      <BreadcrumbSchema
        items={[
          { name: "Blog", path: "/blog/" },
          { name: "Cómo elegir academia en Úbeda", path: `/blog/${SLUG}/` },
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
              Guía para Familias
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />{" "}
              <time dateTime="2026-07-15">15 Julio 2026</time>
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 8 min de lectura
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Cómo elegir academia en Úbeda: <span className="text-gradient">8 claves para acertar</span>
          </h1>

          <div className="aspect-video rounded-3xl relative overflow-hidden mb-12 border border-slate-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/foto-blog.jpg"
              alt="Cómo elegir una academia de clases particulares en Úbeda — Academia Veritas"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </header>

        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Llega diciembre, aparecen las notas de la primera evaluación y en casa se abre
            la misma conversación de todos los años: <strong>hay que buscarle una
            academia</strong>. El problema es que en Úbeda hay varias opciones y desde
            fuera todas prometen lo mismo. Esta guía es lo que nosotros preguntaríamos si
            fuéramos padres buscando refuerzo para nuestro hijo.
          </p>

          <p className="mb-12">
            Un aviso previo, y va en nuestra contra: si tu hijo suspende una sola
            asignatura y por lo demás estudia bien, quizá no necesite una academia
            entera, sino unas semanas de refuerzo puntual en esa materia. Empezar por ahí
            es más barato y a veces suficiente.
          </p>

          {claves.map((clave) => (
            <section key={clave.titulo} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-start gap-3">
                <clave.icon className="h-7 w-7 text-primary-500 shrink-0 mt-1" />
                {clave.titulo}
              </h2>
              {clave.parrafos.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}

          <h2 className="text-2xl font-bold mb-4">Tres señales de alarma</h2>
          <ul>
            <li>
              <strong>Te presionan para matricular hoy.</strong> Una plaza que caduca en
              veinticuatro horas suele ser una técnica de venta, no una realidad.
            </li>
            <li>
              <strong>No te dejan ver el aula.</strong> Cualquier centro con nada que
              esconder te enseña dónde va a estudiar tu hijo.
            </li>
            <li>
              <strong>Nadie te pregunta por el alumno.</strong> Si toda la conversación va
              de precios y horarios y nadie se interesa por cómo estudia tu hijo, ya sabes
              qué tipo de sitio es.
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
              Haznos estas ocho preguntas
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Hablamos en serio: llámanos y pregúntanos todo lo que hay en este artículo.
              Estamos en el centro de Úbeda y te enseñamos las aulas sin compromiso
              ninguno.
            </p>
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Ven a conocernos</Link>
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
