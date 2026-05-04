import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowRight, Sparkles, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Academia Veritas Úbeda",
  description: "Descubre nuestra amplia gama de servicios educativos: Apoyo escolar en todos los niveles, clases de inglés especializadas y preparación intensiva para Selectividad.",
};

const services = [
  {
    title: "Apoyo Escolar",
    description: "Refuerzo personalizado en todas las asignaturas para asentar bases y mejorar resultados.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
    levels: [
      { name: "Primaria", href: "/refuerzo/primaria" },
      { name: "Secundaria (ESO)", href: "/refuerzo/secundaria" },
      { name: "Bachillerato", href: "/refuerzo/bachillerato" }
    ]
  },
  {
    title: "Departamento de Inglés",
    description: "Metodología práctica enfocada en la gramática, el vocabulario y la fluidez.",
    icon: Languages,
    color: "bg-purple-50 text-purple-600",
    levels: [
      { name: "Primaria", href: "/ingles/primaria" },
      { name: "Secundaria & Bachillerato", href: "/ingles/secundaria" },
      { name: "Adultos", href: "/ingles/adultos" }
    ]
  }
];



export default function ServiciosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-6">
            <Sparkles className="h-5 w-5" /> Excelencia Educativa
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos una formación integral adaptada a las necesidades de cada alumno. Desde los primeros pasos en Primaria hasta el salto a la Universidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-primary-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`${service.color} p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-8">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.levels.map((level, lIdx) => (
                  <Link 
                    key={lIdx} 
                    href={level.href}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-zinc-800 hover:border-primary-200 hover:bg-primary-50/50 transition-all group/link"
                  >
                    <span className="font-medium text-foreground">{level.name}</span>
                    <ArrowRight className="h-4 w-4 text-primary-400 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner Especial Selectividad */}
        <div className="relative rounded-3xl overflow-hidden bg-primary-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <GraduationCap className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
              ¡Inscripciones Abiertas!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intensivo de Selectividad (PEvAU)</h2>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              Nuestro programa estrella diseñado para asegurar tu plaza en la universidad. Temarios actualizados, simulacros de examen y resolución de dudas personalizada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="glass" asChild className="rounded-full">
                <Link href="/refuerzo/preparacion-selectividad">Más información</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent border-white/30 hover:bg-white/10 text-white">
                <Link href="/contacto">Reservar mi plaza</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold">1</div>
                <h4 className="font-bold mb-2">Evaluación Inicial</h4>
                <p className="text-sm text-muted-foreground">Analizamos las necesidades específicas de cada alumno.</p>
            </div>
            <div className="text-center p-6">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold">2</div>
                <h4 className="font-bold mb-2">Plan de Trabajo</h4>
                <p className="text-sm text-muted-foreground">Trazamos una ruta personalizada para alcanzar los objetivos.</p>
            </div>
            <div className="text-center p-6">
                <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold">3</div>
                <h4 className="font-bold mb-2">Seguimiento Real</h4>
                <p className="text-sm text-muted-foreground">Comunicación constante con los padres sobre el progreso.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
