/**
 * Índice de artículos del blog.
 *
 * Fuente única para el listado, el sitemap y los bloques de "artículos
 * relacionados". `fecha` va en ISO (YYYY-MM-DD) porque es lo que necesitan
 * los datos estructurados y el sitemap; `fechaTexto` es lo que ve el usuario.
 */

export type Articulo = {
  titulo: string;
  extracto: string;
  categoria: string;
  fecha: string;
  fechaTexto: string;
  lectura: string;
  slug: string;
  imagen: string;
  activo: boolean;
};

export const articulos: Articulo[] = [
  {
    titulo: "Cómo Elegir Academia en Úbeda: 8 Claves para Acertar",
    extracto:
      "Grupos, profesorado, seguimiento, horarios... Te contamos en qué fijarte de verdad antes de matricular a tu hijo en una academia de clases particulares en Úbeda.",
    categoria: "Guía para Familias",
    fecha: "2026-07-15",
    fechaTexto: "15 Julio 2026",
    lectura: "8 min",
    slug: "como-elegir-academia-ubeda",
    imagen: "/foto-blog.jpg",
    activo: true,
  },
  {
    titulo: "5 Técnicas de Estudio que Todo Estudiante de ESO Debería Conocer",
    extracto:
      "Descubre métodos probados para mejorar la retención y el rendimiento académico. Desde la técnica Pomodoro hasta los mapas mentales, te enseñamos a estudiar de forma más inteligente.",
    categoria: "Técnicas de Estudio",
    fecha: "2026-04-28",
    fechaTexto: "28 Abril 2026",
    lectura: "5 min",
    slug: "tecnicas-estudio-eso",
    imagen: "/secundaria.jpg.jpg",
    activo: true,
  },
  {
    titulo: "Cómo Preparar la Selectividad (PEvAU) sin Estrés",
    extracto:
      "La Selectividad no tiene por qué ser un proceso agobiante. Planificación, simulacros y gestión del tiempo son las claves para llegar preparado y conseguir la nota que necesitas.",
    categoria: "Selectividad",
    fecha: "2026-04-15",
    fechaTexto: "15 Abril 2026",
    lectura: "7 min",
    slug: "como-preparar-selectividad-sin-estres",
    imagen: "/bachiller.jpg",
    activo: true,
  },
  {
    titulo: "La Importancia del Apoyo Escolar en Edades Tempranas",
    extracto:
      "Detectar las dificultades a tiempo y proporcionar refuerzo en Primaria puede marcar la diferencia en todo el recorrido académico de un estudiante.",
    categoria: "Apoyo Escolar",
    fecha: "2026-04-02",
    fechaTexto: "2 Abril 2026",
    lectura: "4 min",
    slug: "importancia-apoyo-primaria",
    imagen: "/primaria.jpg.jpg",
    activo: true,
  },
  {
    titulo: "Consejos para Padres: Cómo Motivar a tu Hijo a Estudiar",
    extracto:
      "Motivar no es presionar. Aprende a crear un entorno favorable para el estudio, establecer rutinas y reconocer los logros de tus hijos.",
    categoria: "Consejos para Padres",
    fecha: "2026-03-20",
    fechaTexto: "20 Marzo 2026",
    lectura: "6 min",
    slug: "consejos-padres-motivacion",
    imagen: "/primaria.jpg.jpg",
    activo: true,
  },
  {
    titulo: "Matemáticas en Secundaria: Cómo Superar el Miedo a los Números",
    extracto:
      "Las matemáticas son una de las asignaturas que más ansiedad generan. Te contamos las estrategias que usamos en la academia para que los alumnos las entiendan y disfruten.",
    categoria: "Matemáticas",
    fecha: "2026-03-05",
    fechaTexto: "5 Marzo 2026",
    lectura: "7 min",
    slug: "superar-miedo-matematicas",
    imagen: "/bachiller2.jpg.jpg",
    activo: true,
  },
  {
    titulo: "Ventajas de Estudiar en Grupos Reducidos",
    extracto:
      "Los grupos pequeños permiten una atención personalizada que marca la diferencia. Conoce por qué este modelo educativo es más efectivo que las clases masificadas.",
    categoria: "Metodología",
    fecha: "2026-02-18",
    fechaTexto: "18 Febrero 2026",
    lectura: "4 min",
    slug: "ventajas-grupos-reducidos",
    imagen: "/secundaria2.jpg.jpg",
    activo: true,
  },
];

/** Artículos publicados, del más reciente al más antiguo. */
export const articulosPublicados = articulos
  .filter((a) => a.activo)
  .sort((a, b) => b.fecha.localeCompare(a.fecha));

/** Otros artículos distintos del actual, para el bloque de relacionados. */
export function articulosRelacionados(slugActual: string, limite = 3) {
  return articulosPublicados.filter((a) => a.slug !== slugActual).slice(0, limite);
}
