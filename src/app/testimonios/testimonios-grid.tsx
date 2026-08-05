"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export type Testimonio = {
  nombre: string;
  rol: string;
  texto: string;
  rating: number;
};

export function TestimoniosGrid({ testimonios }: { testimonios: Testimonio[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonios.map((t, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          <Quote className="h-8 w-8 text-primary-200 mb-4" />
          <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
            &ldquo;{t.texto}&rdquo;
          </blockquote>
          <div
            className="flex items-center gap-1 mb-4"
            aria-label={`Valoración: ${t.rating} de 5`}
          >
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden />
            ))}
          </div>
          <figcaption className="border-t border-slate-100 dark:border-zinc-800 pt-4">
            <p className="font-bold text-foreground">{t.nombre}</p>
            <p className="text-sm text-muted-foreground">{t.rol}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
