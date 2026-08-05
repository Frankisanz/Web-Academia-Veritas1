import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, BookOpen, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, CourseSchema, FAQSchema } from "@/components/seo/schema";
import { asignaturas, getAsignatura } from "@/lib/asignaturas";
import { SITE_URL, business } from "@/lib/business";

export function generateStaticParams() {
  return asignaturas.map((a) => ({ asignatura: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ asignatura: string }>;
}): Promise<Metadata> {
  const { asignatura } = await params;
  const data = getAsignatura(asignatura);
  if (!data) return {};

  return {
    title: data.titulo,
    description: data.descripcion,
    keywords: data.keywords,
    openGraph: {
      title: data.titulo,
      description: data.descripcion,
      url: `${SITE_URL}/clases-particulares/${data.slug}/`,
      type: "website",
      locale: "es_ES",
      siteName: "Academia Veritas",
    },
  };
}

export default async function AsignaturaPage({
  params,
}: {
  params: Promise<{ asignatura: string }>;
}) {
  const { asignatura } = await params;
  const data = getAsignatura(asignatura);
  if (!data) notFound();

  const otras = asignaturas.filter((a) => a.slug !== data.slug);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Clases particulares", path: "/clases-particulares/" },
          { name: data.nombre, path: `/clases-particulares/${data.slug}/` },
        ]}
      />
      <CourseSchema
        name={`Clases particulares de ${data.nombre} en Úbeda`}
        description={data.descripcion}
        path={`/clases-particulares/${data.slug}/`}
      />
      <FAQSchema items={data.faqs} />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Cabecera */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-zinc-800 text-primary-700 dark:text-primary-400 font-semibold mb-6 text-sm">
            <BookOpen className="h-4 w-4" /> {data.niveles}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
            {data.h1}
          </h1>
          {data.intro.map((parrafo) => (
            <p
              key={parrafo.slice(0, 40)}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-left"
            >
              {parrafo}
            </p>
          ))}
        </div>

        {/* Imagen */}
        <div className="relative h-[320px] md:h-[420px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-24">
          <img
            src={data.imagen}
            alt={`Clases particulares de ${data.nombre} en Academia Veritas, Úbeda`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problemas habituales */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Por qué se atasca la mayoría en {data.nombre}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Estos son los cuatro motivos que vemos una y otra vez en la academia. Si
            reconoces alguno, es exactamente lo que trabajamos en clase.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {data.problemas.map((p) => (
              <div
                key={p.titulo}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm"
              >
                <AlertCircle className="h-6 w-6 text-primary-500 mb-3" />
                <h3 className="font-bold text-lg text-foreground mb-2">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cómo lo trabajamos */}
        <div className="max-w-5xl mx-auto mb-24 bg-primary-50/60 dark:bg-zinc-900/40 border border-primary-100 dark:border-zinc-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Cómo trabajamos {data.nombre} en Academia Veritas
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Grupos reducidos, seguimiento con la familia y trabajo sobre el temario real
            del centro de cada alumno.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {data.metodo.map((m) => (
              <div
                key={m.titulo}
                className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-primary-100 dark:border-zinc-800 flex gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{m.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-5">
            {data.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA local */}
        <div className="max-w-4xl mx-auto bg-primary-900 text-white rounded-3xl p-8 md:p-12 text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            ¿Reservamos una plaza de {data.nombre}?
          </h2>
          <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Estamos en {business.street}, en el centro de Úbeda. Escríbenos y te contamos
            sin compromiso cómo encajaríamos a tu hijo o hija en un grupo de su nivel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="glass" className="rounded-full" asChild>
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <MapPin className="h-4 w-4" /> {business.phone}
            </a>
          </div>
        </div>

        {/* Enlazado interno entre asignaturas */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Otras asignaturas que impartimos en Úbeda
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otras.map((a) => (
              <Link
                key={a.slug}
                href={`/clases-particulares/${a.slug}`}
                className="group flex items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-primary-100 dark:border-zinc-800 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-foreground">Clases de {a.nombre}</span>
                <ArrowRight className="h-4 w-4 text-primary-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
