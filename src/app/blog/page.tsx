"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articulos = [
  {
    titulo: "5 Técnicas de Estudio que Todo Estudiante de ESO Debería Conocer",
    extracto: "Descubre métodos probados para mejorar la retención y el rendimiento académico. Desde la técnica Pomodoro hasta los mapas mentales, te enseñamos a estudiar de forma más inteligente.",
    categoria: "Técnicas de Estudio",
    fecha: "28 Abril 2026",
    lectura: "5 min",
  },
  {
    titulo: "Cómo Preparar la Selectividad (PEvAU) sin Estrés",
    extracto: "La Selectividad no tiene por qué ser un proceso agobiante. Planificación, simulacros y gestión del tiempo son las claves para llegar preparado y conseguir la nota que necesitas.",
    categoria: "Selectividad",
    fecha: "15 Abril 2026",
    lectura: "7 min",
  },
  {
    titulo: "La Importancia del Apoyo Escolar en Edades Tempranas",
    extracto: "Detectar las dificultades a tiempo y proporcionar refuerzo en Primaria puede marcar la diferencia en todo el recorrido académico de un estudiante.",
    categoria: "Apoyo Escolar",
    fecha: "2 Abril 2026",
    lectura: "4 min",
  },
  {
    titulo: "Consejos para Padres: Cómo Motivar a tu Hijo a Estudiar",
    extracto: "Motivar no es presionar. Aprende a crear un entorno favorable para el estudio, establecer rutinas y reconocer los logros de tus hijos.",
    categoria: "Consejos para Padres",
    fecha: "20 Marzo 2026",
    lectura: "6 min",
  },
  {
    titulo: "Matemáticas en Secundaria: Cómo Superar el Miedo a los Números",
    extracto: "Las matemáticas son una de las asignaturas que más ansiedad generan. Te contamos las estrategias que usamos en la academia para que los alumnos las entiendan y disfruten.",
    categoria: "Matemáticas",
    fecha: "5 Marzo 2026",
    lectura: "5 min",
  },
  {
    titulo: "Ventajas de Estudiar en Grupos Reducidos",
    extracto: "Los grupos pequeños permiten una atención personalizada que marca la diferencia. Conoce por qué este modelo educativo es más efectivo que las clases masificadas.",
    categoria: "Metodología",
    fecha: "18 Febrero 2026",
    lectura: "4 min",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <BookOpen className="h-4 w-4" /> Recursos Educativos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Blog <span className="text-gradient">Educativo</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Consejos, técnicas y recursos para estudiantes y familias. Mantente al día con las últimas novedades en educación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articulos.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-zinc-900 p-6 flex items-center justify-center min-h-[140px]">
                <GraduationCap className="h-16 w-16 text-primary-300 dark:text-primary-700" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                    {a.categoria}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {a.lectura}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3 leading-tight">{a.titulo}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{a.extracto}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <span className="text-xs text-muted-foreground">{a.fecha}</span>
                  <span className="flex items-center text-primary-600 font-medium text-sm cursor-default">
                    Próximamente <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

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
