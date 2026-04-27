import { Metadata } from "next";
import Link from "next/link";
import { Languages, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return [
    { lang: 'frances', mode: 'presencial' },
    { lang: 'frances', mode: 'online' },
    { lang: 'aleman', mode: 'presencial' },
    { lang: 'aleman', mode: 'online' },
    { lang: 'italiano', mode: 'presencial' },
    { lang: 'italiano', mode: 'online' },
    { lang: 'espanol', mode: 'presencial' },
    { lang: 'espanol', mode: 'online' },
  ];
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string, mode: string }> }): Promise<Metadata> {
  const { lang, mode } = await params;
  const displayLang = lang === 'espanol' ? 'Español' : 
                     lang === 'frances' ? 'Francés' : 
                     lang === 'aleman' ? 'Alemán' : 
                     lang.charAt(0).toUpperCase() + lang.slice(1);
  
  return {
    title: `Clases de ${displayLang} ${mode.replace('-', ' ')} | Academia Veritas`,
    description: `Aprende ${displayLang} en modalidad ${mode.replace('-', ' ')} con nuestros profesores nativos en Academia Veritas.`,
  };
}

export default async function IdiomasPage({ params }: { params: Promise<{ lang: string, mode: string }> }) {
  const { lang, mode } = await params;
  
  const langMap: Record<string, string> = {
    frances: "Francés",
    aleman: "Alemán",
    italiano: "Italiano",
    espanol: "Español"
  };
  
  const langName = langMap[lang] || (lang.charAt(0).toUpperCase() + lang.slice(1).replace('-', ' '));
  const modeName = mode.charAt(0).toUpperCase() + mode.slice(1).replace('-', ' ');

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-6">
            <Languages className="h-5 w-5" /> Departamento de Lenguas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             Clases de {langName} ({modeName})
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
             Desarrollamos tus habilidades lingüísticas con un enfoque práctico y comunicativo. La modalidad {modeName.toLowerCase()} te permite aprender a tu ritmo y alcanzar la fluidez que necesitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471" alt={`Clases de ${langName}`} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
             <h3 className="text-3xl font-bold">Ventajas de nuestras clases</h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Inmersión cultural y lingüística con profesionales del idioma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Metodología dinámica enfocada en la conversación y comprensión.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                  <span className="text-foreground">Flexibilidad que se adapta a tu perfil y disposición.</span>
                </li>
             </ul>
             
             <div className="pt-6 border-t border-slate-100 dark:border-zinc-800">
               <p className="font-semibold text-lg mb-4">¿Preparado para dominar el {langName}?</p>
               <Button size="lg" asChild>
                 <Link href="/contacto">Inscríbete hoy</Link>
               </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
