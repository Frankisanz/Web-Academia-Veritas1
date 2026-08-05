"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "" });
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/soniahg41@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Teléfono: formData.phone,
          Interés: formData.interest,
          _subject: "Nueva solicitud de plaza - Academia Veritas",
        }),
      });
      if (res.ok) {
        setFormSent(true);
        setFormData({ name: "", email: "", phone: "", interest: "" });
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Photographic Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=75&w=1920"
          alt="Alumnos estudiando en Academia Veritas, academia de clases particulares en Úbeda"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {/* Advanced Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
      </div>

      {/* Abstract Background Blurs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl relative z-10"
          >
            <p className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary-100 text-primary-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <MapPin className="h-4 w-4" /> Úbeda (Jaén) · Calle Torrenueva
            </p>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Clases Particulares y{" "}
              <span className="text-gradient">Apoyo Escolar</span>{" "}
              <span className="whitespace-nowrap">en Úbeda</span>
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8 leading-relaxed max-w-xl">
              Desata tu potencial académico en Academia Veritas. Refuerzo escolar de
              Primaria, ESO y Bachillerato, clases de inglés y preparación de Selectividad
              (PEvAU) con profesores expertos, grupos reducidos y un método comprobado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8 shadow-xl shadow-primary-500/20" asChild>
                <Link href="/#contacto">
                  Solicitar información <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base h-14 px-8 border-2 border-primary-200 bg-white/50 backdrop-blur-md"
                asChild
              >
                <Link href="/#servicios">Ver todos los cursos</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary-600" /> Profesores Especializados
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary-600" /> Grupos Reducidos
              </div>
            </div>
          </motion.div>

          {/* Visual/Form Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:ml-auto w-full max-w-md relative"
          >
            {/* Glass Form Card */}
            <div className="glass rounded-3xl p-8 shadow-2xl relative z-10 border-white/40">
              {formSent ? (
                <div className="text-center py-8 space-y-4">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">¡Solicitud Enviada!</p>
                  <p className="text-slate-600 text-sm">
                    Hemos recibido tus datos. Nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-primary-600 font-medium text-sm hover:underline mt-4 cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-slate-900 mb-2">Comienza Hoy</p>
                    <p className="text-slate-600 text-sm">
                      Déjanos tus datos y te asesoramos sin compromiso.
                    </p>
                  </div>

                  <form id="contacto" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="home-nombre" className="text-sm font-medium mb-1 block text-slate-800">
                        Nombre completo
                      </label>
                      <input
                        id="home-nombre"
                        name="nombre"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-email" className="text-sm font-medium mb-1 block text-slate-800">
                        Correo electrónico
                      </label>
                      <input
                        id="home-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-telefono" className="text-sm font-medium mb-1 block text-slate-800">
                        Teléfono
                      </label>
                      <input
                        id="home-telefono"
                        name="telefono"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="600 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-interes" className="text-sm font-medium mb-1 block text-slate-800">
                        Me interesa...
                      </label>
                      <select
                        id="home-interes"
                        name="interes"
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 appearance-none"
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="primaria">Apoyo escolar de Primaria</option>
                        <option value="eso">Apoyo escolar de ESO</option>
                        <option value="bachillerato">Apoyo escolar de Bachillerato</option>
                        <option value="selectividad">Preparación de Selectividad (PEvAU)</option>
                        <option value="ingles">Clases de Inglés</option>
                      </select>
                    </div>
                    {formError && (
                      <p className="text-red-600 text-sm font-medium">
                        Hubo un error al enviar. Inténtalo de nuevo.
                      </p>
                    )}
                    <Button type="submit" size="lg" className="w-full h-14 mt-2 text-base" disabled={formLoading}>
                      {formLoading ? "Enviando..." : "Reservar mi plaza"}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Decoration Elements */}
            <div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <span className="text-primary-700 font-bold text-xl leading-none px-1">A+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Resultados</p>
                  <p className="text-xs text-muted-foreground">Garantizados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
