import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Book, Calculator, Atom, Globe, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return [{ level: '1' }, { level: '2' }, { level: '3' }];
}

// Mapeo detallado de materias por nivel
const subjectData: Record<string, { title: string, subjects: string[], desc: string }> = {
  primaria: {
    title: "Apoyo en Primaria",
    desc: "¡El momento perfecto para despertar su curiosidad! En Primaria nos volcamos en asentar bases sólidas y crear hábitos de estudio divertidos que les acompañarán toda la vida. Observa cómo mejoran sus notas mientras ganan confianza en sí mismos.",
    subjects: ["Lengua Castellana y Literatura", "Matemáticas", "Ciencias Naturales", "Ciencias Sociales", "Inglés"]
  },
  secundaria: {
    title: "Apoyo en la ESO (Secundaria)",
    desc: "Una etapa de grandes retos que transformamos en grandes victorias. Te ofrecemos un acompañamiento integral con profesores expertos para que cualquier asignatura se convierta en tu punto fuerte. ¡Es hora de que Secundaria sea un paseo triunfal!",
    subjects: ["Matemáticas", "Lengua Castellana y Literatura", "Física y Química", "Biología y Geología", "Geografía e Historia", "Inglés", "Tecnología"]
  },
  bachillerato: {
    title: "Apoyo en Bachillerato",
    desc: "¡Tu futuro brillante empieza aquí! Sabemos lo decisiva que es esta etapa. Te prepararemos estratégicamente en Primero y Segundo de Bachillerato para asegurar unas calificaciones extraordinarias que te abran las puertas de la Universidad de tus sueños.",
    subjects: ["Preparación a Selectividad", "Lengua y Literatura", "Historia de España", "Inglés"]
  },
  "preparacion-selectividad": {
    title: "Preparación Selectividad (PEvAU)",
    desc: "Planteamos un intensivo enfocado totalmente a superar la PEvAU con los temarios oficiales, simulacros de examen y resolución de dudas cronometradas. ¡Tu plaza en la facultad está asegurada!",
    subjects: ["Todas las materias generales", "Específicas de Ciencias", "Específicas de Humanidades / Sociales"]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level } = await params;
  return {
    title: `Apoyo Escolar de ${level.replace('-', ' ')} | Academia Veritas`,
    description: `Clases de apoyo escolar y refuerzo para estudiantes de ${level.replace('-', ' ')} en Úbeda. Conoce nuestro método para aprobar todas las asignaturas.`,
  };
}

export default async function RefuerzoPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  // Obtener la información concreta si existe. Si no, usar un genérico.
  const info = subjectData[level] || {
    title: `Apoyo Escolar para ${level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ')}`,
    desc: "Ayudamos a nuestros alumnos a superar las dificultades en las materias más exigentes. Evaluamos sus necesidades, ofrecemos técnicas de estudio eficaces y garantizamos acompañamiento personalizado.",
    subjects: ["Refuerzo general de asignaturas", "Técnicas de estudio", "Acompañamiento personalizado"]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-zinc-800 text-primary-700 dark:text-primary-400 font-semibold mb-6">
            <GraduationCap className="h-5 w-5" /> Departamento de Apoyo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {info.title}
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
             {info.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8 order-2 md:order-1">
             <h3 className="text-3xl font-bold">Nuestra Metodología</h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Atención individualizada para resolver las carencias del día a día escolar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Enfoque práctico: resolución de dudas y planificación enfocada al examen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Comunicación directa y seguimiento continuo con las familias.</span>
                </li>
             </ul>
             
             <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
               <p className="font-semibold text-lg mb-4">¿Necesitas ayuda extra?</p>
               <Button size="lg" asChild>
                 <Link href="/contacto">Más Información</Link>
               </Button>
             </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
             <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1470" alt={info.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sección Específica de Materias */}
        <div className="bg-primary-50/50 dark:bg-zinc-900/40 border border-primary-100 dark:border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Materias Impartidas en {info.title.replace('Apoyo en ', '')}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Seleccionamos a los mejores especialistas para cada rama educativa. Ofrecemos refuerzo en las siguientes áreas curriculares:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {info.subjects.map((materia, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-primary-100 dark:border-zinc-800 shadow-sm flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="bg-primary-50 dark:bg-zinc-800 p-2 rounded-lg">
                  <Book className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-medium text-foreground text-sm">{materia}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
