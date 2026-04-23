import { Metadata } from "next";
import { BadgeCheck, Users, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Academia Veritas",
  description: "Conoce al equipo docente y la misión de Academia Veritas. Llevamos años formando el futuro de los estudiantes en Úbeda.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Comprometidos con el <span className="text-gradient">éxito</span> de nuestros alumnos
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Academia Veritas nació en Úbeda con un propósito fundamental: proporcionar una educación accesible, personalizada y de altísima calidad que permita a los estudiantes no solo aprobar, sino destacar.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Contamos con un equipo de docentes apasionados, instalaciones modernas y una metodología que prioriza la atención individual para sacar el máximo rendimiento de cada alumno.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <Trophy className="h-8 w-8 text-primary-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">Excelencia</h4>
                <p className="text-sm text-muted-foreground">Más del 95% de aprobados en pruebas de selectividad y certificaciones.</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <Users className="h-8 w-8 text-primary-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">Comunidad</h4>
                <p className="text-sm text-muted-foreground">Un ambiente acogedor donde el aprendizaje es continuo y colaborativo.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1571260899304-425dea4cf363?auto=format&fit=crop&q=80&w=1470" alt="Instalaciones de la academia" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
