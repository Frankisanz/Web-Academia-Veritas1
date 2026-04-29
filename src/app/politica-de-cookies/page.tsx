import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Academia Veritas",
  description: "Información detallada sobre el uso de cookies en nuestro sitio web.",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            En <strong>Academia Veritas</strong>, utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico de nuestro sitio y mostrarte contenido relevante.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas una página web. Permiten que el sitio web recuerde información sobre tu visita, como tu idioma preferido y otras opciones, lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies Técnicas (Necesarias):</strong> Son esenciales para que el sitio web funcione correctamente. Incluyen, por ejemplo, cookies que permiten iniciar sesión en áreas seguras o recordar si has aceptado el aviso de cookies.
              </li>
              <li>
                <strong>Cookies de Análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web. Para ello se analiza tu navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que te ofrecemos.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Cómo gestionar las cookies</h2>
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador. Aquí tienes los enlaces de los navegadores más populares:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
            </ul>
            <p>
              Ten en cuenta que si bloqueas todas las cookies, es posible que algunas funciones del sitio web dejen de estar disponibles o no funcionen correctamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Actualizaciones</h2>
            <p>
              Es posible que actualicemos la Política de Cookies de nuestro sitio web, por ello te recomendamos revisar esta política cada vez que accedas a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
