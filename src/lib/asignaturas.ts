/**
 * Landings por asignatura.
 *
 * Cada una ataca una consulta local concreta del tipo
 * "clases particulares de <asignatura> en Úbeda", que es como busca
 * la gente cuando ya sabe qué materia se le está atragantando.
 */

export type Asignatura = {
  slug: string;
  /** Nombre corto, para enlaces y migas de pan. */
  nombre: string;
  /** Título de la etiqueta <title>. Máximo ~60 caracteres. */
  titulo: string;
  /** Meta description. Entre 140 y 160 caracteres. */
  descripcion: string;
  h1: string;
  keywords: string[];
  imagen: string;
  niveles: string;
  intro: string[];
  problemas: { titulo: string; texto: string }[];
  metodo: { titulo: string; texto: string }[];
  faqs: { question: string; answer: string }[];
};

export const asignaturas: Asignatura[] = [
  {
    slug: "matematicas",
    nombre: "Matemáticas",
    titulo: "Clases Particulares de Matemáticas en Úbeda | Academia Veritas",
    descripcion:
      "Clases particulares de matemáticas en Úbeda para Primaria, ESO y Bachillerato. Grupos reducidos, ejercicios guiados y preparación de exámenes. Reserva tu plaza.",
    h1: "Clases particulares de Matemáticas en Úbeda",
    keywords: [
      "clases particulares matemáticas Úbeda",
      "clases de matemáticas Úbeda",
      "profesor de matemáticas Úbeda",
      "academia matemáticas Úbeda",
      "refuerzo matemáticas ESO Úbeda",
      "clases mates Úbeda",
    ],
    imagen: "/secundaria.jpg.jpg",
    niveles: "Primaria · ESO · 1º y 2º de Bachillerato · Selectividad",
    intro: [
      "Las matemáticas son, con diferencia, la asignatura por la que más nos llaman las familias de Úbeda. Y casi nunca es un problema de capacidad: es que el temario avanza más rápido de lo que el alumno consolida, y cuando queda un hueco atrás, todo lo que viene después se apoya en el aire.",
      "En Academia Veritas empezamos por localizar exactamente dónde está ese hueco. A veces son las fracciones de Primaria, a veces el álgebra de 2º de la ESO. Lo tapamos, y a partir de ahí el temario del curso deja de ser una cuesta arriba.",
    ],
    problemas: [
      {
        titulo: "Se sabe la teoría pero suspende el examen",
        texto:
          "Suele ser falta de práctica cronometrada. Se entiende el ejercicio cuando lo explica el profesor, pero no se ha hecho solo el número suficiente de veces.",
      },
      {
        titulo: "Arrastra lagunas de cursos anteriores",
        texto:
          "El caso más frecuente en la ESO. Sin dominar operaciones con fracciones, potencias o ecuaciones de primer grado, el álgebra y las funciones son imposibles.",
      },
      {
        titulo: "Se bloquea con los problemas",
        texto:
          "Sabe operar, pero no sabe traducir un enunciado a una ecuación. Es una habilidad concreta que se entrena, no un don con el que se nace.",
      },
      {
        titulo: "El salto a Bachillerato le supera",
        texto:
          "Derivadas, integrales, límites o matrices llegan de golpe. Con un acompañamiento semanal, ese salto se absorbe sin dramas.",
      },
    ],
    metodo: [
      {
        titulo: "Prueba de nivel inicial",
        texto:
          "Antes de nada vemos qué domina y qué no. Sin eso, cualquier clase de refuerzo es dar palos de ciego.",
      },
      {
        titulo: "Teoría corta, ejercicios largos",
        texto:
          "Las matemáticas se aprenden haciéndolas. La explicación es breve y el grueso de la clase es el alumno resolviendo, con el profesor encima corrigiendo el proceso.",
      },
      {
        titulo: "Trabajamos con sus exámenes",
        texto:
          "Usamos los controles y el libro de su instituto o colegio, para que lo que practica aquí sea exactamente lo que le van a preguntar.",
      },
      {
        titulo: "Simulacros antes de cada control",
        texto:
          "La semana previa a un examen hacemos una prueba en condiciones reales y la corregimos juntos, error por error.",
      },
    ],
    faqs: [
      {
        question: "Mi hijo va muy retrasado en matemáticas, ¿es tarde para empezar?",
        answer:
          "No. Cuanto antes mejor, pero recuperamos alumnos en cualquier momento del curso. Lo primero que hacemos es una prueba de nivel para saber desde dónde partimos y plantear un plan realista hasta final de curso.",
      },
      {
        question: "¿Dais clases de matemáticas de 2º de Bachillerato para Selectividad?",
        answer:
          "Sí. Preparamos tanto Matemáticas II como Matemáticas Aplicadas a las Ciencias Sociales de cara a la PEvAU, trabajando con exámenes de convocatorias anteriores del distrito andaluz.",
      },
      {
        question: "¿Las clases son individuales o en grupo?",
        answer:
          "Trabajamos en grupos muy reducidos por nivel, lo que permite atender a cada alumno de forma individual dentro de la clase. Consúltanos si prefieres una clase totalmente individual.",
      },
    ],
  },
  {
    slug: "lengua-y-literatura",
    nombre: "Lengua y Literatura",
    titulo: "Clases de Lengua y Literatura en Úbeda | Academia Veritas",
    descripcion:
      "Clases particulares de Lengua Castellana y Literatura en Úbeda: análisis sintáctico, comentario de texto y ortografía. Primaria, ESO y Bachillerato.",
    h1: "Clases particulares de Lengua y Literatura en Úbeda",
    keywords: [
      "clases particulares lengua Úbeda",
      "clases de lengua Úbeda",
      "análisis sintáctico clases Úbeda",
      "comentario de texto Úbeda",
      "academia lengua Úbeda",
      "refuerzo lengua ESO Úbeda",
    ],
    imagen: "/bachiller.jpg",
    niveles: "Primaria · ESO · 1º y 2º de Bachillerato · Selectividad",
    intro: [
      "Lengua parece la asignatura fácil hasta que llega el análisis sintáctico. Entonces se convierte en la otra gran fuente de suspensos de la ESO, junto con las matemáticas. El motivo es parecido: es una materia acumulativa que exige método, no memoria.",
      "Nuestras clases de Lengua en Úbeda se centran en las tres cosas que de verdad puntúan en un examen: analizar bien una oración, escribir sin faltas y comentar un texto con criterio. El resto viene solo.",
    ],
    problemas: [
      {
        titulo: "La sintaxis se le atraganta",
        texto:
          "Subordinadas, complementos, proposiciones... Sin un procedimiento fijo para atacar la oración, cada análisis es una lotería.",
      },
      {
        titulo: "Pierde nota por faltas de ortografía",
        texto:
          "En la ESO y en Bachillerato las faltas restan en todas las asignaturas. Es de lo más rentable de corregir a tiempo.",
      },
      {
        titulo: "No sabe redactar un comentario",
        texto:
          "El comentario de texto tiene una estructura muy concreta. Quien la conoce parte con ventaja frente a quien improvisa.",
      },
      {
        titulo: "La literatura le suena a lista de nombres",
        texto:
          "Memorizar autores y fechas sin entender el contexto no funciona. Ordenamos las etapas para que tengan sentido.",
      },
    ],
    metodo: [
      {
        titulo: "Un método fijo para la sintaxis",
        texto:
          "Siempre los mismos pasos, en el mismo orden. Cuando el procedimiento está interiorizado, hasta las oraciones largas dejan de dar miedo.",
      },
      {
        titulo: "Corrección de textos propios",
        texto:
          "El alumno escribe y nosotros corregimos con él delante, explicando cada marca. Es la forma más rápida de eliminar faltas recurrentes.",
      },
      {
        titulo: "Comentarios guiados paso a paso",
        texto:
          "Empezamos con plantillas y las vamos retirando hasta que es capaz de estructurar un comentario completo por su cuenta.",
      },
      {
        titulo: "Literatura con hilo conductor",
        texto:
          "Relacionamos cada movimiento literario con su momento histórico para que la materia se entienda en lugar de memorizarse.",
      },
    ],
    faqs: [
      {
        question: "¿Preparáis el comentario de texto de Selectividad?",
        answer:
          "Sí. Es una de las partes que más trabajamos en 2º de Bachillerato, con los criterios de corrección de la convocatoria vigente y textos de exámenes anteriores.",
      },
      {
        question: "Mi hija comete muchas faltas de ortografía, ¿se puede corregir?",
        answer:
          "Sí, y suele ser de lo más agradecido. Trabajamos con sus propios escritos para detectar qué faltas repite y atacamos esos patrones concretos en lugar de dar reglas genéricas.",
      },
    ],
  },
  {
    slug: "ingles",
    nombre: "Inglés",
    titulo: "Clases de Inglés en Úbeda | Refuerzo Escolar | Academia Veritas",
    descripcion:
      "Clases de inglés en Úbeda para Primaria, ESO, Bachillerato y adultos. Gramática, vocabulario y preparación de exámenes en grupos reducidos. Infórmate.",
    h1: "Clases de Inglés en Úbeda",
    keywords: [
      "clases de inglés Úbeda",
      "academia de inglés Úbeda",
      "clases particulares inglés Úbeda",
      "profesor de inglés Úbeda",
      "inglés para adultos Úbeda",
      "refuerzo inglés ESO Úbeda",
    ],
    imagen: "/secundaria2.jpg.jpg",
    niveles: "Primaria · ESO · Bachillerato · Adultos",
    intro: [
      "El inglés del instituto tiene una peculiaridad: se puede ir arrastrando durante años sin que salte la alarma, hasta que llega Bachillerato y de repente hay que entender textos largos y escribir con corrección. Ahí es cuando se nota quién tiene la base y quién no.",
      "En nuestras clases de inglés en Úbeda trabajamos la gramática de forma ordenada, ampliamos vocabulario útil y practicamos el tipo exacto de ejercicio que aparece en los exámenes. Sin milagros, pero con progresión visible trimestre a trimestre.",
    ],
    problemas: [
      {
        titulo: "Se sabe las reglas pero no las aplica",
        texto:
          "Reconocer un tiempo verbal en una tabla y usarlo bien al escribir son dos cosas distintas. La segunda solo llega con práctica dirigida.",
      },
      {
        titulo: "Vocabulario justo",
        texto:
          "Sin vocabulario no hay comprensión lectora ni redacción posible. Lo trabajamos por bloques temáticos y con repaso espaciado.",
      },
      {
        titulo: "Falla en el reading y el listening",
        texto:
          "Son las partes que más puntúan en muchos exámenes y las que menos se practican en casa. Aquí se entrenan todas las semanas.",
      },
      {
        titulo: "Le da vergüenza hablar",
        texto:
          "En grupos pequeños el alumno se suelta mucho antes que en una clase de treinta personas mirándole.",
      },
    ],
    metodo: [
      {
        titulo: "Gramática con sentido",
        texto:
          "Cada estructura se explica, se practica y se vuelve a ver semanas después. La repetición espaciada es lo que fija el idioma.",
      },
      {
        titulo: "Refuerzo del temario del centro",
        texto:
          "Seguimos el libro y las unidades de su colegio o instituto para que el trabajo de la academia se traduzca directamente en nota.",
      },
      {
        titulo: "Práctica de examen",
        texto:
          "Ejercicios del mismo formato que los de clase: rellenar huecos, transformaciones, redacciones con extensión pautada y comprensión lectora.",
      },
      {
        titulo: "Inglés para adultos",
        texto:
          "Grupos específicos para quien retoma el idioma de cero o quiere recuperar el nivel que tuvo hace años, sin la presión de un aula de adolescentes.",
      },
    ],
    faqs: [
      {
        question: "¿Preparáis exámenes oficiales de Cambridge o de la Escuela de Idiomas?",
        answer:
          "Nuestro foco principal es el refuerzo del inglés escolar y la preparación de la Selectividad. Si tu objetivo es una titulación oficial concreta, cuéntanoslo al contactar y te decimos con franqueza si podemos ayudarte con ese nivel.",
      },
      {
        question: "¿Hay clases de inglés para adultos en Úbeda?",
        answer:
          "Sí, tenemos grupos de adultos para quienes empiezan de cero o quieren recuperar el nivel que tuvieron en su día. Consúltanos la disponibilidad de horarios de tarde.",
      },
    ],
  },
  {
    slug: "fisica-y-quimica",
    nombre: "Física y Química",
    titulo: "Clases de Física y Química en Úbeda | Academia Veritas",
    descripcion:
      "Clases particulares de Física y Química en Úbeda para ESO y Bachillerato: formulación, problemas y preparación de la PEvAU en grupos reducidos.",
    h1: "Clases particulares de Física y Química en Úbeda",
    keywords: [
      "clases física y química Úbeda",
      "clases particulares química Úbeda",
      "clases de física Úbeda",
      "formulación química clases Úbeda",
      "academia ciencias Úbeda",
      "física y química ESO Úbeda",
    ],
    imagen: "/bachiller2.jpg.jpg",
    niveles: "3º y 4º de ESO · 1º y 2º de Bachillerato · Selectividad",
    intro: [
      "Física y Química es la asignatura que separa a los alumnos que quieren ir por la rama de Ciencias del resto. Y tiene un problema añadido: mezcla dos materias muy distintas, con dos lógicas distintas, en una sola nota.",
      "En nuestras clases en Úbeda las tratamos por separado. La química se apoya en la formulación y el mol; la física, en el planteamiento de problemas y las unidades. Cada una tiene sus atajos y sus trampas, y las trabajamos como lo que son.",
    ],
    problemas: [
      {
        titulo: "No domina la formulación",
        texto:
          "Es la base de toda la química. Sin formular con soltura, las reacciones y la estequiometría son imposibles.",
      },
      {
        titulo: "Se pierde con el factor de conversión",
        texto:
          "Las unidades son la mitad de la nota en física. Un despiste de unidades convierte un problema bien planteado en un cero.",
      },
      {
        titulo: "Plantea mal los problemas",
        texto:
          "El error casi nunca está en la cuenta: está en el dibujo, en identificar las fuerzas o en elegir la fórmula correcta.",
      },
      {
        titulo: "El salto a 2º de Bachillerato",
        texto:
          "El nivel sube mucho de golpe y el tiempo aprieta con la PEvAU encima. Es el curso donde más se agradece el refuerzo semanal.",
      },
    ],
    metodo: [
      {
        titulo: "Formulación hasta automatizarla",
        texto:
          "Practicamos formulación en cada sesión hasta que sale sin pensar. Es una inversión que se rentabiliza el resto del curso.",
      },
      {
        titulo: "Esquema antes que fórmula",
        texto:
          "Enseñamos a representar el problema antes de tocar la calculadora. Quien dibuja bien el enunciado, ya lo tiene medio resuelto.",
      },
      {
        titulo: "Control de unidades",
        texto:
          "Sistema fijo de trabajo con unidades y cifras significativas, que es donde se pierden los puntos más tontos del examen.",
      },
      {
        titulo: "Problemas tipo PEvAU",
        texto:
          "En Bachillerato trabajamos directamente con problemas de convocatorias anteriores de Selectividad.",
      },
    ],
    faqs: [
      {
        question: "¿Se pueden dar solo las clases de Química y no las de Física?",
        answer:
          "Sí. Muchos alumnos llevan bien una parte y se atascan en la otra. Al hacer la prueba de nivel inicial decidimos en qué merece la pena centrar las sesiones.",
      },
      {
        question: "¿Preparáis Química de 2º de Bachillerato para la PEvAU?",
        answer:
          "Sí, es una de las materias específicas que más nos piden por su alta ponderación en los grados de Ciencias y de la rama sanitaria. Trabajamos con exámenes reales de convocatorias anteriores.",
      },
    ],
  },
  {
    slug: "biologia-y-geologia",
    nombre: "Biología y Geología",
    titulo: "Clases de Biología y Geología en Úbeda | Academia Veritas",
    descripcion:
      "Clases particulares de Biología y Geología en Úbeda para ESO y Bachillerato. Esquemas, técnicas de memorización y preparación de la PEvAU.",
    h1: "Clases particulares de Biología y Geología en Úbeda",
    keywords: [
      "clases de biología Úbeda",
      "clases particulares biología Úbeda",
      "biología bachillerato Úbeda",
      "academia ciencias Úbeda",
      "geología ESO Úbeda",
      "biología PEvAU Jaén",
    ],
    imagen: "/primaria.jpg.jpg",
    niveles: "ESO · 1º y 2º de Bachillerato · Selectividad",
    intro: [
      "Biología tiene fama de ser la asignatura de ciencias que se aprueba estudiando. Es verdad a medias: el temario es enorme, y quien lo afronta a base de leer y releer se pega un atracón la semana antes del examen y lo olvida todo en quince días.",
      "Nuestras clases en Úbeda se centran en organizar ese volumen de información: esquemas jerárquicos, vocabulario científico preciso y práctica de las preguntas tipo que caen una y otra vez.",
    ],
    problemas: [
      {
        titulo: "Temario muy extenso",
        texto:
          "Sin una estructura clara, el alumno se ahoga en detalles y pierde de vista lo importante.",
      },
      {
        titulo: "Confunde términos parecidos",
        texto:
          "Mitosis y meiosis, arterias y venas, ácidos nucleicos... El vocabulario preciso es la mitad de la nota en biología.",
      },
      {
        titulo: "Estudia de memoria sin entender",
        texto:
          "Lo memorizado sin comprender no aguanta hasta el examen final ni resiste una pregunta formulada de otra manera.",
      },
      {
        titulo: "No sabe responder preguntas abiertas",
        texto:
          "En Bachillerato se pide desarrollar, relacionar y justificar. Hay que entrenar la redacción científica.",
      },
    ],
    metodo: [
      {
        titulo: "Esquemas antes que apuntes",
        texto:
          "Convertimos cada tema en un esquema jerárquico. Estudiar sobre esa estructura es mucho más rápido y se olvida mucho menos.",
      },
      {
        titulo: "Repaso espaciado",
        texto:
          "Volvemos sobre los temas anteriores cada pocas semanas para que la materia llegue viva al examen final y a la Selectividad.",
      },
      {
        titulo: "Vocabulario científico",
        texto:
          "Trabajamos los términos que se confunden con más frecuencia hasta que quedan claramente diferenciados.",
      },
      {
        titulo: "Preguntas tipo examen",
        texto:
          "Practicamos preguntas de desarrollo con corrección comentada, señalando qué frases suman puntos y cuáles sobran.",
      },
    ],
    faqs: [
      {
        question: "¿Preparáis Biología de 2º de Bachillerato para Selectividad?",
        answer:
          "Sí. Es una de las materias con mayor ponderación para los grados sanitarios, así que trabajamos con exámenes de convocatorias anteriores y con los criterios de corrección publicados.",
      },
      {
        question: "Mi hijo estudia mucho pero suspende Biología, ¿qué hacemos?",
        answer:
          "Casi siempre es un problema de método, no de esfuerzo. Revisamos cómo estudia y sustituimos la lectura repetida por esquemas y autoevaluación, que es lo que de verdad fija el temario.",
      },
    ],
  },
  {
    slug: "historia",
    nombre: "Historia y Geografía",
    titulo: "Clases de Historia y Geografía en Úbeda | Academia Veritas",
    descripcion:
      "Clases particulares de Historia y Geografía en Úbeda. Historia de España para Selectividad, comentario de mapas y técnicas de estudio. Grupos reducidos.",
    h1: "Clases particulares de Historia y Geografía en Úbeda",
    keywords: [
      "clases de historia Úbeda",
      "historia de España selectividad Úbeda",
      "clases particulares geografía Úbeda",
      "academia historia Úbeda",
      "historia PEvAU Jaén",
      "comentario de texto histórico",
    ],
    imagen: "/bachiller.jpg",
    niveles: "ESO · 1º y 2º de Bachillerato · Selectividad",
    intro: [
      "Historia de España es materia común en la Selectividad andaluza, así que la nota de esta asignatura afecta a todos los alumnos de 2º de Bachillerato, vayan por la rama que vayan. Y es una de las que mejor responde a un buen método de estudio.",
      "Aquí jugamos en casa: nuestra directora es Graduada en Geografía e Historia y tiene un máster en Análisis Histórico del Mundo Actual. Las clases no son un dictado de fechas, sino la construcción de un relato con causas y consecuencias que se pueda contar y defender por escrito.",
    ],
    problemas: [
      {
        titulo: "Fechas sueltas sin contexto",
        texto:
          "Memorizar una cronología aislada no sirve para responder una pregunta de desarrollo. Hay que entender qué llevó a qué.",
      },
      {
        titulo: "No sabe estructurar un tema",
        texto:
          "En el examen se valora el orden: introducción, desarrollo y conclusión. Muchos alumnos saben el contenido y lo vuelcan sin estructura.",
      },
      {
        titulo: "Le cuesta comentar fuentes",
        texto:
          "Textos, mapas y gráficos históricos tienen su propia técnica de comentario, que se aprende practicando.",
      },
      {
        titulo: "Temario acumulado hasta junio",
        texto:
          "Sin repaso continuo, en mayo hay que reconstruir un curso entero desde cero, justo cuando menos tiempo hay.",
      },
    ],
    metodo: [
      {
        titulo: "Ejes cronológicos y causas",
        texto:
          "Montamos la historia como un relato encadenado. Entendida así, la fecha deja de ser un dato suelto que memorizar.",
      },
      {
        titulo: "Estructura de respuesta",
        texto:
          "Plantillas de desarrollo para cada tipo de pregunta, que se van soltando hasta que el alumno escribe con criterio propio.",
      },
      {
        titulo: "Comentario de fuentes",
        texto:
          "Práctica sistemática con textos, mapas y gráficos como los que aparecen en los exámenes.",
      },
      {
        titulo: "Repaso acumulativo",
        texto:
          "Cada mes recuperamos los bloques anteriores para llegar a junio con el temario asentado y no reconstruido a última hora.",
      },
    ],
    faqs: [
      {
        question: "¿Dais Historia de España de 2º de Bachillerato?",
        answer:
          "Sí, y es una de nuestras especialidades: nuestra directora es Graduada en Geografía e Historia con un máster en Análisis Histórico del Mundo Actual. Preparamos la materia con el formato y los criterios de la Selectividad andaluza.",
      },
      {
        question: "¿También dais Geografía?",
        answer:
          "Sí, tanto la Geografía de la ESO como la Geografía de Bachillerato, incluido el comentario de mapas, climogramas y gráficos, que es donde más puntos se pierden.",
      },
    ],
  },
];

export function getAsignatura(slug: string) {
  return asignaturas.find((a) => a.slug === slug);
}
