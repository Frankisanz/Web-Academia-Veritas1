import { GraduationCap } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | Academia Veritas",
  description: "Política de privacidad de Academia Veritas. Información sobre el tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold mb-4 text-sm">
            <GraduationCap className="h-4 w-4" /> Academia Veritas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">Última actualización: Mayo 2026</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del Tratamiento</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Responsable:</strong> Academia Veritas</li>
              <li><strong className="text-foreground">Dirección:</strong> Calle Torrenueva Nº 1, 1º, 23400 Úbeda, Jaén</li>
              <li><strong className="text-foreground">Email de contacto:</strong> soniahg41@gmail.com</li>
              <li><strong className="text-foreground">Teléfono:</strong> 626 819 636</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales que nos facilite a través de nuestros formularios de contacto serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Gestionar las consultas y solicitudes de información realizadas por los usuarios.</li>
              <li>Enviar información relacionada con nuestros servicios educativos.</li>
              <li>Gestionar la reserva de plazas y matrículas.</li>
              <li>Mantener la comunicación con las familias sobre el progreso de los alumnos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Legitimación</h2>
            <p className="text-muted-foreground leading-relaxed">
              La base legal para el tratamiento de sus datos es el consentimiento del interesado al enviar sus datos a través de nuestros formularios, así como la ejecución del contrato de prestación de servicios educativos en el caso de alumnos matriculados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Conservación de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales proporcionados se conservarán mientras exista una relación contractual o comercial con el interesado, y durante los plazos legalmente establecidos para el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Destinatarios</h2>
            <p className="text-muted-foreground leading-relaxed">
              No se cederán datos a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Derechos del Interesado</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los usuarios podrán ejercer los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición dirigiéndose al responsable del tratamiento a través del correo electrónico soniahg41@gmail.com. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Medidas de Seguridad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Academia Veritas ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
