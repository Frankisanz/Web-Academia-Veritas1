import { Metadata } from "next";
import { Trophy, GraduationCap, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Conoce a Sonia Higueras | Profesora en Úbeda | Academia Veritas",
  description: "Sonia Higueras García, profesora experta en Úbeda. Graduada en Geografía e Historia con doble máster. Implicación y disciplina para tu éxito escolar.",
};

export default function SobreNosotrosPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sonia Higueras García",
    "jobTitle": "Directora Académica y Profesora",
    "description": "Profesional, inteligente, disciplinada y plenamente implicada en el rendimiento y éxito de sus alumnos. Graduada en Geografía e Historia.",
    "image": "https://frankisanz.github.io/Web-Academia-Veritas1/sonia-higueras.jpg",
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": "Academia Veritas"
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Perfil Profesora Sonia */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              {/* Usamos ruta relativa para que funcione en Vercel y GitHub Pages */}
              <img src="../sonia-higueras.jpg" alt="Sonia Higueras García - Profesora de Academia Veritas en Úbeda" className="w-full h-full object-cover" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-6">
                <GraduationCap className="h-5 w-5" /> Dirección Académica
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Sonia <span className="text-gradient">Higueras García</span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
                Profesional, inteligente, disciplinada y plenamente implicada en el rendimiento y éxito de sus alumnos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En Academia Veritas creemos que la clave del éxito académico reside en la calidad humana y profesional del docente. Sonia lidera nuestro proyecto educativo en Úbeda con una vocación incansable por la enseñanza y el desarrollo de sus alumnos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-xl mt-1">
                    <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Graduada en Geografía e Historia</h3>
                    <p className="text-muted-foreground text-sm mt-1">Base sólida en humanidades y ciencias sociales, permitiendo una transmisión de conocimientos profunda y estructurada.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-xl mt-1">
                    <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Máster en Profesorado</h3>
                    <p className="text-muted-foreground text-sm mt-1">Especialidad en Enseñanza Obligatoria e Idiomas. Formación pedagógica avanzada para aplicar las mejores metodologías y técnicas de estudio.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                  <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-xl mt-1">
                    <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Máster en Análisis Histórico</h3>
                    <p className="text-muted-foreground text-sm mt-1">Especialización en el Mundo Actual, aportando una visión crítica y analítica fundamental para estudiantes de Secundaria y Bachillerato.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
