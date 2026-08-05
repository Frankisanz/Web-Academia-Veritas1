import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Languages,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/hero";
import { FAQSchema, type FaqItem } from "@/components/seo/schema";
import { areaServed, business } from "@/lib/business";
import { asignaturas } from "@/lib/asignaturas";

export const metadata: Metadata = {
  title: "Clases Particulares en Úbeda | Apoyo Escolar | Academia Veritas",
  description:
    "Academia de clases particulares en Úbeda (Jaén): apoyo escolar de Primaria, ESO y Bachillerato, inglés y preparación de Selectividad, en grupos reducidos.",
  keywords: [
    "clases particulares Úbeda",
    "academia Úbeda",
    "apoyo escolar Úbeda",
    "clases de refuerzo Úbeda",
    "profesor particular Úbeda",
    "academia de inglés Úbeda",
    "clases particulares matemáticas Úbeda",
    "preparar selectividad Úbeda",
    "academia PEvAU Jaén",
    "clases de repaso Úbeda",
  ],
};

const faqs: FaqItem[] = [
  {
    question: "¿En qué asignaturas ofrecéis apoyo escolar?",
    answer:
      "Ofrecemos clases particulares de todas las materias principales: Matemáticas, Lengua Castellana, Física y Química, Biología, Historia e Inglés, abarcando desde Educación Primaria hasta Bachillerato y Selectividad.",
  },
  {
    question: "¿Cómo preparamos la Selectividad (PEvAU) en la academia?",
    answer:
      "Nuestro programa intensivo ofrece una preparación especializada con temarios actualizados, simulacros de examen reales y técnicas de estudio eficaces. Te damos las herramientas para maximizar tu nota de corte y superar la PEvAU con seguridad.",
  },
  {
    question: "¿Dónde está ubicada Academia Veritas?",
    answer:
      "Nuestra academia de apoyo escolar se encuentra en Úbeda (Jaén), en la Calle Torrenueva Nº 1, 1º. Un lugar céntrico y de fácil acceso para todos los estudiantes de la zona.",
  },
  {
    question: "¿Cuánto cuestan las clases particulares en Úbeda?",
    answer:
      "El precio depende del nivel del alumno y del número de horas semanales que necesite. Contacta con nosotros y te preparamos un presupuesto a medida sin compromiso. Además, contamos con descuentos especiales para hermanos matriculados en la academia.",
  },
  {
    question: "¿Cuántos alumnos hay en cada clase?",
    answer:
      "Trabajamos siempre con grupos muy reducidos. Es la única forma de detectar al momento dónde se atasca cada alumno y de resolver sus dudas concretas en la misma sesión, algo imposible en clases masificadas.",
  },
  {
    question: "¿Dais clase a alumnos de fuera de Úbeda?",
    answer:
      "Sí. Además de Úbeda, recibimos alumnos de Baeza, Torreperogil, Sabiote, Rus, Canena, Begíjar, Villacarrillo, Jódar y Villanueva del Arzobispo. Intentamos agrupar los horarios de los alumnos de un mismo municipio para facilitar los desplazamientos de las familias.",
  },
  {
    question: "¿Se puede empezar en cualquier momento del curso?",
    answer:
      "Sí, siempre que queden plazas libres en el grupo del nivel correspondiente. Lo habitual es incorporarse en septiembre o después de la primera evaluación, pero admitimos alumnos durante todo el curso y también en verano para repasar o adelantar materia.",
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema items={faqs} />

      <Hero />

      {/* Summer Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-white text-primary-700 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4 animate-pulse shadow-lg">
            ¡Nuevo!
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            ¡Se abren plazas para Refuerzo Intensivo de Verano!
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Aprovecha el verano para ponerte al día o adelantar materia. Plazas disponibles
            para las distintas materias de Primaria, Secundaria y Bachillerato.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800 shadow-xl border-none font-bold"
            asChild
          >
            <Link href="/#contacto">Reserva tu plaza ahora</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white dark:bg-black relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nuestra Oferta Educativa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Programas adaptados a cada etapa escolar con el objetivo claro de potenciar
              el rendimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<GraduationCap className="h-8 w-8 text-primary-600" />}
              title="Apoyo Escolar"
              desc="Refuerzo escolar para Primaria, Secundaria y Bachillerato, y preparación intensiva para Selectividad."
              href="/refuerzo/secundaria"
            />
            <ServiceCard
              icon={<BookOpen className="h-8 w-8 text-primary-600" />}
              title="Inglés"
              desc="Preparación a selectividad y refuerzo para todos los niveles hasta bachillerato."
              href="/ingles/secundaria"
            />
            <ServiceCard
              icon={<Languages className="h-8 w-8 text-primary-600" />}
              title="Intensivo Selectividad"
              desc="Preparación especializada para la fase decisiva de Bachillerato. Temarios actualizados, simulacros reales y apoyo personalizado para superar la PEvAU con éxito."
              href="/servicios/intensivo-selectividad"
              ctaText="Infórmate"
              badge="¡Nuevo!"
            />
            <ServiceCard
              icon={<CheckCircle2 className="h-8 w-8 text-primary-600" />}
              title="Oferta para Hermanos"
              desc="Aprovecha nuestros descuentos especiales si matriculas a más de un hijo en la academia."
              href="/#contacto"
              ctaText="Infórmate aquí"
            />
          </div>
        </div>
      </section>

      {/* Asignaturas: enlaza las landings por materia */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Clases particulares por asignatura
            </h2>
            <p className="text-lg text-muted-foreground">
              ¿Se le atraganta una materia en concreto? Entra y descubre cómo la
              trabajamos en la academia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {asignaturas.map((a) => (
              <Link
                key={a.slug}
                href={`/clases-particulares/${a.slug}`}
                className="group flex items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-primary-100 dark:border-zinc-800 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-foreground">
                  Clases de {a.nombre}
                </span>
                <ArrowRight className="h-4 w-4 text-primary-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Método Veritas Section */}
      <section className="py-24 bg-primary-50 dark:bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              El Método Veritas para Apoyo Escolar en Úbeda
            </h2>
            <p className="text-lg text-muted-foreground">
              Sabemos que cada estudiante es único. Por eso, nuestras clases particulares de
              Primaria, Secundaria y Bachillerato se adaptan a las necesidades individuales
              para garantizar el aprobado y el aprendizaje real.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metodo.map((paso, idx) => (
              <div
                key={paso.titulo}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-zinc-800"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{paso.titulo}</h3>
                <p className="text-muted-foreground text-sm">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros / Profesora Section */}
      <section id="nosotros" className="py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
              <GraduationCap className="h-4 w-4" /> Conoce a Nuestra Profesora
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Sonia <span className="text-gradient">Higueras García</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Directora Académica y alma de Academia Veritas. Profesional, inteligente y
              plenamente implicada en el éxito de sus alumnos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[500px] mx-auto w-full">
              <img
                src="/sonia-higueras.jpg"
                alt="Sonia Higueras García, profesora y directora de Academia Veritas en Úbeda"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">
                  <div className="bg-primary-600 p-2 rounded-xl text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Directora Académica</p>
                    <p className="text-white/80 text-xs">Graduada en Geografía e Historia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-5">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                En Academia Veritas creemos que la clave del éxito académico reside en la
                calidad humana y profesional del docente. Sonia lidera nuestro proyecto
                educativo en Úbeda con años de experiencia.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary-50/50 dark:bg-zinc-900 rounded-2xl border border-primary-100 dark:border-zinc-800">
                  <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-xl shadow-sm shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Amplia Experiencia Docente</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Años de experiencia impartiendo clases particulares de apoyo escolar
                      en Úbeda en diversas disciplinas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-50/50 dark:bg-zinc-900 rounded-2xl border border-primary-100 dark:border-zinc-800">
                  <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-xl shadow-sm shrink-0 mt-0.5">
                    <BookOpen className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Graduada en Geografía e Historia</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Base sólida en humanidades y ciencias sociales para una transmisión
                      de conocimientos profunda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-50/50 dark:bg-zinc-900 rounded-2xl border border-primary-100 dark:border-zinc-800">
                  <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-xl shadow-sm shrink-0 mt-0.5">
                    <GraduationCap className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Doble Máster Universitario</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Máster en Profesorado (Enseñanza Obligatoria e Idiomas) y en Análisis
                      Histórico del Mundo Actual.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto mt-2 rounded-full" asChild>
                <Link href="/sobre-nosotros">
                  Conocer más sobre Sonia <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección local: dónde estamos y a quién damos servicio */}
      <section className="py-24 bg-primary-50/60 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Tu academia en el centro de Úbeda
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Academia Veritas está en la <strong className="text-foreground">{business.street}</strong>,
                en pleno centro de Úbeda, a pocos minutos andando de la zona de colegios e
                institutos. Una ubicación pensada para que venir a clase por la tarde sea
                fácil, tanto para los alumnos que llegan solos como para las familias que
                los acercan en coche.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Si buscas <strong className="text-foreground">clases particulares en Úbeda</strong>{" "}
                que no sean una clase más, sino un sitio donde de verdad se resuelvan las
                dudas de tu hijo, pásate a conocernos sin compromiso.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-primary-100 dark:border-zinc-800">
                  <MapPin className="h-5 w-5 text-primary-600 shrink-0" />
                  <span className="text-foreground font-medium">
                    {business.street}, {business.postalCode} {business.locality} ({business.region})
                  </span>
                </div>
                <a
                  href={`tel:${business.phoneE164}`}
                  className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-primary-100 dark:border-zinc-800 hover:border-primary-300 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                  <span className="text-foreground font-medium">{business.phone}</span>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-primary-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Alumnos de Úbeda y de toda la comarca
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cada curso damos clase a alumnos que vienen de los municipios de alrededor
                buscando apoyo escolar de calidad sin tener que desplazarse hasta Jaén
                capital:
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {areaServed.map((ciudad) => (
                  <li
                    key={ciudad}
                    className="bg-primary-50 dark:bg-zinc-800 text-foreground text-sm font-medium px-3 py-1.5 rounded-full border border-primary-100 dark:border-zinc-700"
                  >
                    {ciudad}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/contacto">Ver cómo llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Preguntas Frecuentes sobre nuestras Clases en Úbeda
            </h2>
            <p className="text-lg text-muted-foreground">
              Resolvemos las dudas más comunes de nuestros alumnos y sus familias.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const metodo = [
  {
    titulo: "Atención Personalizada",
    desc: "Grupos muy reducidos para asegurar que resolvemos las dudas específicas de cada alumno al instante.",
  },
  {
    titulo: "Técnicas de Estudio",
    desc: "No solo enseñamos la materia, enseñamos a estudiar. Organización, resúmenes y esquemas efectivos.",
  },
  {
    titulo: "Simulacros de Examen",
    desc: "Pruebas continuas, especialmente en Bachillerato y preparación de Selectividad (PEvAU), para perder el miedo al examen.",
  },
  {
    titulo: "Contacto con Padres",
    desc: "Mantenemos una comunicación fluida con las familias para informar del progreso y áreas de mejora.",
  },
  {
    titulo: "Resolución por WhatsApp",
    desc: "Seguimiento y atención de dudas por WhatsApp para que nuestros alumnos nunca se queden atascados estudiando desde casa.",
  },
];

function ServiceCard({
  icon,
  title,
  desc,
  href,
  ctaText = "Saber más",
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  ctaText?: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-start bg-primary-50/50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-primary-100 dark:border-zinc-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1 relative"
    >
      {badge && (
        <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
          {badge}
        </span>
      )}
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-1">{desc}</p>
      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm mt-auto group-hover:gap-2 transition-all">
        {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </Link>
  );
}
