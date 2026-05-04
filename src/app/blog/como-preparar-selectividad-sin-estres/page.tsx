import { Metadata } from "next";
import { Clock, Calendar, ChevronLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cómo Preparar la Selectividad (PEvAU) sin Estrés en Úbeda | Academia Veritas",
  description: "Guía definitiva para preparar la Selectividad (PEvAU) en Úbeda sin agobios. Técnicas de estudio, planificación y consejos de expertos para asegurar tu nota.",
  keywords: ["PEvAU Úbeda", "Selectividad Úbeda", "preparar selectividad sin estrés", "academia selectividad Úbeda", "técnicas de estudio PEvAU"],
};

export default function PostSelectividad() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Navegación */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary-600 font-medium mb-8 hover:gap-2 transition-all group"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver al blog
        </Link>

        {/* Cabecera del Artículo */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Selectividad
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> 15 Abril 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> 7 min de lectura
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            Cómo Preparar la Selectividad (PEvAU) sin Estrés: <span className="text-gradient">La Guía Definitiva</span>
          </h1>

          <div className="aspect-video rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-zinc-900 flex items-center justify-center mb-12 border border-slate-100 dark:border-zinc-800">
            <GraduationCap className="h-32 w-32 text-primary-200 dark:text-primary-800" />
          </div>
        </header>

        {/* Contenido del Artículo */}
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
            La Selectividad no tiene por qué ser una pesadilla. Con la estrategia adecuada, aprobar la PEvAU y conseguir la nota de corte que necesitas es un objetivo totalmente alcanzable.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. La Clave está en la Planificación Inversa</h2>
          <p>
            No empieces a estudiar &quot;a ver qué sale&quot;. Empieza por el final. Mira la fecha de tus exámenes en Jaén y cuenta los días que tienes. Divide el temario de forma realista, dejando siempre la última semana libre para repasos generales y simulacros.
          </p>
          <div className="bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 my-8 text-sm italic">
            <strong>Consejo de Academia Veritas:</strong> No estudies más de 2 asignaturas por día para evitar el agotamiento cognitivo.
          </div>

          <h2 className="text-2xl font-bold mb-4">2. Técnicas de Estudio Activo</h2>
          <p>
            Olvídate de leer y subrayar sin parar. Eso es estudio pasivo y tu cerebro lo olvida pronto. Usa:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Active Recall:</strong> Ponte a prueba constantemente con preguntas antes de leer el tema.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Repetición Espaciada:</strong> Repasa lo estudiado a los 2 días, a la semana y al mes.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-1" />
              <span><strong>Mapas Conceptuales:</strong> Visualiza las conexiones entre ideas, especialmente útil en asignaturas como Historia o Biología.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. La Importancia de los Simulacros Reales</h2>
          <p>
            El miedo a la Selectividad suele ser miedo a lo desconocido. En nuestra academia en Úbeda, realizamos simulacros reales con exámenes de años anteriores de la Universidad de Jaén (UJA). 
          </p>
          <p>
            Practicar con el tiempo cronometrado te ayuda a gestionar los nervios y a saber exactamente cuánto tiempo dedicar a cada pregunta.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Salud Mental y Bienestar</h2>
          <p>
            Un cerebro estresado no memoriza. Asegúrate de dormir al menos 7-8 horas, beber mucha agua y hacer descansos de 10 minutos por cada 50 de estudio (Técnica Pomodoro).
          </p>

          <h2 className="text-2xl font-bold mb-8">¿Necesitas ayuda extra en Úbeda?</h2>
          <p>
            Sabemos que el volumen de contenido puede ser abrumador. En <strong>Academia Veritas</strong> ofrecemos cursos intensivos específicos para la PEvAU, donde nos centramos en lo que realmente cae en el examen y en optimizar tus respuestas para rascar cada décima.
          </p>
        </article>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¡Asegura tu futuro universitario!</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestro Intensivo de Selectividad en Úbeda. Grupos reducidos, material actualizado y profesores que te acompañan hasta el examen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="glass" className="rounded-full font-bold" asChild>
              <Link href="/contacto">Reservar mi plaza</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/servicios/intensivo-selectividad">Saber más del curso</Link>
            </Button>
          </div>
        </div>

        {/* Footer del Artículo */}
        <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-slate-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Equipo Editorial</p>
              <p className="text-xs text-muted-foreground">Academia Veritas Úbeda</p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Redes sociales o compartir si fuera necesario */}
          </div>
        </footer>
      </div>
    </div>
  );
}
