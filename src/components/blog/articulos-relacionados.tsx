import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articulosRelacionados } from "@/lib/blog";

/**
 * Bloque de artículos relacionados.
 *
 * Además de la utilidad para el lector, reparte autoridad entre los artículos
 * del blog y evita que queden como páginas huérfanas sin enlaces entrantes.
 */
export function ArticulosRelacionados({ slugActual }: { slugActual: string }) {
  const relacionados = articulosRelacionados(slugActual);

  if (relacionados.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-100 dark:border-zinc-800">
      <h2 className="text-2xl font-bold text-foreground mb-8">Sigue leyendo</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {relacionados.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group block bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-all"
          >
            <div className="relative h-32 w-full">
              <Image
                src={a.imagen}
                alt={a.titulo}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">
                {a.categoria}
              </p>
              <h3 className="font-bold text-sm text-foreground leading-snug mb-3 group-hover:text-primary-600 transition-colors">
                {a.titulo}
              </h3>
              <span className="flex items-center text-primary-600 text-xs font-semibold">
                Leer <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
