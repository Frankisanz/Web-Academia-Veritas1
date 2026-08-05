import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, ORG_ID } from "@/components/seo/schema";
import { articulosPublicados } from "@/lib/blog";
import { SITE_URL } from "@/lib/business";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Blog Educativo | Consejos de Estudio | Academia Veritas Úbeda",
  description:
    "Técnicas de estudio, consejos para padres y guías de Selectividad escritos por nuestra academia de clases particulares en Úbeda. Recursos gratuitos.",
  keywords: [
    "blog educativo",
    "técnicas de estudio",
    "consejos para padres",
    "academia Úbeda",
    "clases particulares Úbeda",
    "apoyo escolar Úbeda",
  ],
  openGraph: {
    title: "Blog Educativo | Academia Veritas Úbeda",
    description:
      "Técnicas de estudio, consejos para padres y guías de Selectividad de la academia de clases particulares de Úbeda.",
    url: `${SITE_URL}/blog/`,
    type: "website",
    locale: "es_ES",
    siteName: "Academia Veritas",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog/#blog`,
  name: "Blog Educativo de Academia Veritas",
  description:
    "Recursos, técnicas de estudio y consejos educativos publicados por Academia Veritas, academia de clases particulares en Úbeda (Jaén).",
  url: `${SITE_URL}/blog/`,
  inLanguage: "es-ES",
  publisher: { "@id": ORG_ID },
  blogPost: articulosPublicados.map((a) => ({
    "@type": "BlogPosting",
    headline: a.titulo,
    description: a.extracto,
    datePublished: a.fecha,
    url: `${SITE_URL}/blog/${a.slug}/`,
    image: `${SITE_URL}${a.imagen}`,
    author: { "@type": "Person", name: "Sonia Higueras García" },
  })),
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Blog", path: "/blog/" }]} />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <BookOpen className="h-4 w-4" /> Recursos Educativos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Blog <span className="text-gradient">Educativo</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Consejos, técnicas y recursos para estudiantes y familias de Úbeda y comarca.
            Todo lo que aplicamos cada tarde en nuestras clases particulares, explicado
            para que puedas ponerlo en práctica en casa.
          </p>
        </div>

        <BlogList articulos={articulosPublicados} />

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas ayuda con tus estudios? No esperes más.
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contacto">Solicitar información</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
