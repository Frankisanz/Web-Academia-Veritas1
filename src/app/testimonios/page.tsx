"use client";

import { motion } from "framer-motion";
import { Star, Quote, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonios = [
  {
    nombre: "María G.",
    rol: "Madre de alumno de 2º ESO",
    texto: "Mi hijo ha mejorado muchísimo desde que empezó en Academia Veritas. Sonia se preocupa de verdad por cada alumno y les enseña a estudiar de forma eficaz. Las notas han subido y, lo más importante, ha ganado confianza en sí mismo.",
    rating: 5,
  },
  {
    nombre: "Carlos R.",
    rol: "Alumno de Bachillerato",
    texto: "Gracias a la preparación intensiva de Selectividad conseguí la nota que necesitaba para entrar en la carrera que quería. Los simulacros de examen fueron clave para ir seguro al examen real.",
    rating: 5,
  },
  {
    nombre: "Ana P.",
    rol: "Madre de alumna de Primaria",
    texto: "Estamos encantados con la academia. El trato es muy cercano y personalizado. Mi hija va contenta a las clases y eso se nota en sus resultados. Totalmente recomendable.",
    rating: 5,
  },
  {
    nombre: "Javier M.",
    rol: "Alumno de 4º ESO",
    texto: "Lo que más me gusta es que los grupos son pequeños y siempre puedo preguntar todas mis dudas. Además, poder preguntar por WhatsApp cuando estudio en casa es una gran ayuda.",
    rating: 5,
  },
  {
    nombre: "Laura S.",
    rol: "Madre de dos alumnos",
    texto: "Tengo a mis dos hijos en la academia y estamos muy contentos. Sonia se adapta al nivel de cada uno y el seguimiento que hace con las familias es excelente. El descuento por hermanos también es un plus.",
    rating: 5,
  },
  {
    nombre: "Pedro L.",
    rol: "Alumno de 2º Bachillerato",
    texto: "Llegué a la academia con muchas dificultades en varias asignaturas y en pocos meses ya notaba la mejora. La profesora explica muy bien y tiene mucha paciencia. ¡Aprobé todo!",
    rating: 5,
  },
];

export default function TestimoniosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <GraduationCap className="h-4 w-4" /> Lo que dicen nuestros alumnos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Testimonios de <span className="text-gradient">Alumnos y Familias</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La confianza de nuestras familias es nuestra mayor recompensa. Descubre lo que opinan sobre su experiencia en Academia Veritas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary-200 mb-4" />
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="border-t border-slate-100 dark:border-zinc-800 pt-4">
                <p className="font-bold text-foreground">{t.nombre}</p>
                <p className="text-sm text-muted-foreground">{t.rol}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres que tu hijo también mejore sus resultados?
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contacto">Solicitar información</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
