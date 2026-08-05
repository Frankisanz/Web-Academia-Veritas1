"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Articulo } from "@/lib/blog";

export function BlogList({ articulos }: { articulos: Articulo[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {articulos.map((a, i) => (
        <motion.article
          key={a.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
        >
          <Link href={`/blog/${a.slug}`} className="cursor-pointer block relative h-48 w-full">
            <Image
              src={a.imagen}
              alt={`${a.titulo} — Academia Veritas, Úbeda`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </Link>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                {a.categoria}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {a.lectura}
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground mb-3 leading-tight">
              <Link href={`/blog/${a.slug}`} className="hover:text-primary-600 transition-colors">
                {a.titulo}
              </Link>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{a.extracto}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800">
              <time dateTime={a.fecha} className="text-xs text-muted-foreground">
                {a.fechaTexto}
              </time>
              <Link
                href={`/blog/${a.slug}`}
                className="flex items-center text-primary-600 font-bold text-sm hover:gap-2 transition-all"
              >
                Leer artículo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
