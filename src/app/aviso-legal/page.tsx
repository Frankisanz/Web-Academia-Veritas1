import { GraduationCap } from "lucide-react";

export const metadata = {
  title: "Aviso Legal | Academia Veritas",
  description: "Aviso legal de Academia Veritas. Información sobre la titularidad del sitio web, condiciones de uso y responsabilidades legales.",
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <GraduationCap className="h-4 w-4" /> Academia Veritas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Aviso Legal
          </h1>
          <p className="text-muted-foreground">Última actualización: Mayo 2026</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Datos Identificativos</h2>
            <p className="text-muted-foreground leading-relaxed">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa a los usuarios de los datos del titular de este sitio web:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li><strong className="text-foreground">Denominación:</strong> Academia Veritas</li>
              <li><strong className="text-foreground">Dirección:</strong> Calle Torrenueva Nº 1, 1º, 23400 Úbeda, Jaén</li>
              <li><strong className="text-foreground">Teléfono:</strong> 626 819 636</li>
              <li><strong className="text-foreground">Email:</strong> soniahg41@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Objeto</h2>
            <p className="text-muted-foreground leading-relaxed">
              El presente sitio web tiene como finalidad informar a los usuarios sobre los servicios educativos que ofrece Academia Veritas, incluyendo clases de apoyo escolar, refuerzo educativo y preparación de exámenes en todos los niveles académicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Condiciones de Uso</h2>
            <p className="text-muted-foreground leading-relaxed">
              El acceso a este sitio web atribuye a quien lo realiza la condición de usuario, quien acepta, desde dicho acceso, las presentes condiciones generales de uso. El usuario se compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación vigente, la moral y las buenas costumbres generalmente aceptadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Academia Veritas, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Exclusión de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Academia Veritas no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la falta de disponibilidad o continuidad del funcionamiento del sitio web, así como de los errores en los contenidos que pudiera haber en el mismo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-muted-foreground leading-relaxed">
              Las presentes condiciones se rigen por la legislación española vigente. Para cualquier controversia que pudiera surgir, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Úbeda, Jaén.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
