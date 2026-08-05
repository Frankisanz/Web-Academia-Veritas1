import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Sparkles, Calculator, Target } from "lucide-react";
import { BreadcrumbSchema, CourseSchema, FAQSchema, type FaqItem } from "@/components/seo/schema";
import { SITE_URL } from "@/lib/business";
import { InscripcionForm } from "./inscripcion-form";

export const metadata: Metadata = {
  title: "Preparar Selectividad (PEvAU) en Úbeda | Academia Veritas",
  description:
    "Intensivo de Selectividad (PEvAU) en Úbeda: exámenes de convocatorias anteriores, simulacros cronometrados y grupos reducidos. Plazas limitadas.",
  keywords: [
    "preparar selectividad Úbeda",
    "academia selectividad Úbeda",
    "PEvAU Úbeda",
    "PEvAU Jaén",
    "clases selectividad Úbeda",
    "intensivo selectividad Jaén",
    "subir nota selectividad",
    "academia bachillerato Úbeda",
  ],
  openGraph: {
    title: "Intensivo de Selectividad (PEvAU) en Úbeda | Academia Veritas",
    description:
      "Preparación especializada de la PEvAU en Úbeda con simulacros reales, temarios actualizados y grupos reducidos.",
    url: `${SITE_URL}/servicios/intensivo-selectividad/`,
    type: "website",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

const faqs: FaqItem[] = [
  {
    question: "¿Cuándo empieza el intensivo de Selectividad en Úbeda?",
    answer:
      "Abrimos grupos a lo largo del curso de 2º de Bachillerato y reforzamos la intensidad en los meses previos a la convocatoria. Como las plazas son limitadas para mantener los grupos reducidos, lo mejor es escribirnos cuanto antes para reservar la tuya.",
  },
  {
    question: "¿Qué asignaturas se preparan en el intensivo?",
    answer:
      "Trabajamos tanto las materias comunes de la fase de acceso como las específicas que más ponderan para la carrera que quiere cada alumno. En la primera sesión analizamos tu caso concreto y decidimos en qué materias merece la pena centrar el esfuerzo.",
  },
  {
    question: "¿Cómo se calcula la nota de acceso a la universidad?",
    answer:
      "La nota de acceso combina la media del Bachillerato (60%) con la calificación de la fase de acceso de la PEvAU (40%). A eso se le pueden sumar hasta 4 puntos más con las materias de la fase de admisión, según las ponderaciones que publique cada universidad. Te ayudamos a calcular tu nota y a elegir la estrategia que más te conviene.",
  },
  {
    question: "¿Sirve el intensivo para subir nota si ya me he presentado?",
    answer:
      "Sí. Muchos alumnos vienen a mejorar la calificación de materias concretas para alcanzar la nota de corte de un grado. En ese caso el trabajo se centra en las asignaturas que más ponderan para su carrera.",
  },
  {
    question: "¿Hay que ser alumno de la academia durante el curso?",
    answer:
      "No es necesario. Puedes apuntarte solo al intensivo de Selectividad aunque no hayas dado clase con nosotros durante el curso. Eso sí, cuanto antes empieces, más margen tenemos para trabajar los puntos débiles.",
  },
];

export default function IntensivoSelectividadPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Servicios", path: "/servicios/" },
          { name: "Intensivo de Selectividad", path: "/servicios/intensivo-selectividad/" },
        ]}
      />
      <CourseSchema
        name="Intensivo de preparación de Selectividad (PEvAU) en Úbeda"
        description="Curso intensivo de preparación de la Prueba de Evaluación de Bachillerato para el Acceso a la Universidad (PEvAU) en Úbeda: temarios actualizados, simulacros cronometrados con exámenes de años anteriores y resolución personalizada de dudas en grupos reducidos."
        path="/servicios/intensivo-selectividad/"
        educationalLevel="Bachillerato"
      />
      <FAQSchema items={faqs} />

      {/* Hero Section with the Message */}
      <section className="pt-40 pb-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <GraduationCap className="h-64 w-64 md:h-96 md:w-96" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
              ¡Inscripciones Abiertas!
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Preparar la Selectividad (PEvAU) en Úbeda
            </h1>
            <p className="text-primary-100 text-xl md:text-2xl mb-10 leading-relaxed font-medium">
              Afronta la fase decisiva de Bachillerato con total seguridad. Nuestro
              Intensivo de Selectividad te ofrece una preparación especializada con
              temarios totalmente actualizados, simulacros de examen reales, técnicas de
              estudio eficaces y resolución de dudas personalizada. Te damos todo el
              apoyo, la experiencia y las herramientas necesarias para que superes la
              PEvAU con éxito y alcances la nota de corte de la carrera que quieres.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Temarios Actualizados</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Simulacros Reales</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Grupos Reducidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos la PEvAU */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Así preparamos la PEvAU en nuestra academia de Úbeda
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            La Selectividad no se aprueba estudiando más, sino estudiando distinto. La
            prueba tiene un formato propio, unos criterios de corrección concretos y un
            reloj que corre. Por eso nuestro intensivo no repite la clase del instituto:
            entrena el examen.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Los alumnos de Úbeda y comarca se examinan en el distrito único andaluz y la{" "}
            <strong className="text-foreground">Universidad de Jaén (UJA)</strong> es su
            referencia más cercana, así que trabajamos con exámenes reales de
            convocatorias anteriores y con los criterios de corrección publicados.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
              <Target className="h-7 w-7 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">1. Diagnóstico y objetivo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Partimos de tu nota media de Bachillerato y de la nota de corte que
                necesitas. Con eso decidimos qué materias trabajar y cuánto puedes subir
                de forma realista.
              </p>
            </div>
            <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
              <Calculator className="h-7 w-7 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">2. Ponderaciones a tu favor</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No todas las asignaturas suman igual para cada grado. Te ayudamos a elegir
                las materias de la fase de admisión que más ponderan para la carrera que
                quieres estudiar.
              </p>
            </div>
            <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
              <Sparkles className="h-7 w-7 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">3. Temario y técnica</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Repasamos el temario oficial y, sobre todo, enseñamos a responder: qué
                busca el corrector, cómo estructurar cada pregunta y dónde se pierden
                puntos tontos.
              </p>
            </div>
            <div className="bg-primary-50/60 dark:bg-zinc-900 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800">
              <GraduationCap className="h-7 w-7 text-primary-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">4. Simulacros cronometrados</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exámenes completos con el tiempo real de la prueba y corrección comentada.
                Llegar al día del examen con veinte simulacros hechos cambia por completo
                los nervios.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 border-l-2 border-primary-200 pl-4">
            Las fechas de convocatoria, la estructura de la prueba y las ponderaciones se
            publican oficialmente cada curso y pueden variar. En la academia trabajamos
            siempre con la convocatoria vigente y te avisamos de cualquier cambio que te
            afecte.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Asegura tu plaza ahora</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Las plazas para nuestro intensivo son limitadas para garantizar la mejor
                atención personalizada a cada alumno. Rellena el formulario y nos
                pondremos en contacto contigo para formalizar la matrícula y resolver
                cualquier duda.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl text-primary-600 dark:text-primary-400">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Preparación Integral</h3>
                    <p className="text-muted-foreground text-sm">
                      Cubrimos tanto las materias comunes como las específicas para
                      maximizar tu puntuación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl text-primary-600 dark:text-primary-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Método Orientado a Resultados</h3>
                    <p className="text-muted-foreground text-sm">
                      Entrenamiento específico con exámenes de años anteriores de la
                      Universidad de Jaén (UJA).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InscripcionForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dudas frecuentes sobre la Selectividad
          </h2>
          <div className="space-y-6">
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
          <p className="text-center text-muted-foreground mt-12">
            ¿Te queda alguna duda?{" "}
            <Link href="/contacto" className="text-primary-600 font-semibold hover:underline">
              Escríbenos y te la resolvemos
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
