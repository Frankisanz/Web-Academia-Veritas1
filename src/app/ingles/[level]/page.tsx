import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return [
    { level: 'primaria' },
    { level: 'secundaria' },
    { level: 'bachillerato' },
    { level: 'adultos' }
  ];
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level } = await params;
  return {
    title: `Clases de Inglés de ${level.replace('-', ' ')} | Academia Veritas`,
    description: `Apúntate a nuestras clases de inglés de ${level.replace('-', ' ')} en Úbeda. Metodología nativa y resultados garantizados.`,
  };
}

export default async function InglesPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const levelName = level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ');

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-6">
            <BookOpen className="h-5 w-5" /> Departamento de Inglés
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Inglés para {levelName}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
             Desarrolla tus habilidades en el idioma con profesores nativos y un plan de estudios adaptado para tu nivel y objetivos. Grupos reducidos para maximizar la participación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1470" alt={`Inglés para ${levelName}`} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
             <h3 className="text-3xl font-bold">¿Qué aprenderás?</h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Expresión oral fluida (Speaking) enfocada en situaciones reales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Comprensión escrita y vocabulario adaptado al nivel de {levelName}.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Preparación específica si deseas presentarte a certificaciones.</span>
                </li>
             </ul>
             
             <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
               <p className="font-semibold text-lg mb-4">¿Listo para empezar?</p>
               <Button size="lg" asChild>
                 <Link href="/contacto">Reservar mi plaza</Link>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
