"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function InscripcionForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
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
          Interés: "Intensivo de Selectividad",
          _subject: "Inscripción Intensivo Selectividad - Academia Veritas",
        }),
      });
      if (res.ok) {
        setFormSent(true);
        setFormData({ name: "", email: "", phone: "" });
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-100 dark:border-zinc-800 relative z-10">
        {formSent ? (
          <div className="text-center py-12 space-y-6">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">¡Solicitud Recibida!</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Gracias por interesarte en nuestro Intensivo. Sonia se pondrá en contacto
              contigo muy pronto para darte todos los detalles.
            </p>
            <button
              onClick={() => setFormSent(false)}
              className="text-primary-600 font-bold hover:underline mt-6 cursor-pointer block mx-auto"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Formulario de Inscripción
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Déjanos tus datos y te llamaremos en menos de 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="pevau-nombre"
                  className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200"
                >
                  Nombre completo
                </label>
                <input
                  id="pevau-nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                  placeholder="Tu nombre y apellidos"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="pevau-telefono"
                    className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200"
                  >
                    Teléfono
                  </label>
                  <input
                    id="pevau-telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                    placeholder="600 000 000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pevau-email"
                    className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="pevau-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {formError && (
                <p className="text-red-600 text-sm font-medium">
                  Hubo un error al enviar. Inténtalo de nuevo o llámanos directamente.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 mt-4 text-base font-bold shadow-lg shadow-primary-500/20"
                disabled={formLoading}
              >
                {formLoading ? "Enviando..." : "Quiero mi plaza en el Intensivo"}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Al enviar este formulario, aceptas nuestra{" "}
                <Link href="/privacidad" className="underline hover:text-primary-600">
                  política de privacidad
                </Link>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
