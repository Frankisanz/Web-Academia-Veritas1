"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function IntensivoSelectividadPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "Selectividad" });
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
        setFormData({ name: "", email: "", phone: "", interest: "Selectividad" });
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
    <div className="min-h-screen">
      {/* Hero Section with the Message */}
      <section className="pt-40 pb-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <GraduationCap className="h-64 w-64 md:h-96 md:w-96" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
              ¡Inscripciones Abiertas!
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Intensivo de Selectividad (PEvAU)
            </h1>
            <p className="text-primary-100 text-xl md:text-2xl mb-10 leading-relaxed font-medium">
              Afronta la fase decisiva de Bachillerato con total seguridad. Nuestro Intensivo de Selectividad te ofrece una preparación especializada con temarios totalmente actualizados, simulacros de examen reales, técnicas de estudio eficaces y resolución de dudas personalizada. Te brindamos todo el apoyo, la experiencia y las herramientas necesarias para que superes la PEvAU con éxito y alcances la nota de corte para la carrera de tus sueños.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Temarios Actualizados</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Simulacros Reales</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <CheckCircle2 className="h-5 w-5 text-primary-400" />
                <span className="font-medium">Grupos Reducidos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Asegura tu plaza ahora</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Las plazas para nuestro intensivo son limitadas para garantizar la mejor atención personalizada a cada alumno. Rellena el formulario y nos pondremos en contacto contigo para formalizar la matrícula y resolver cualquier duda.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl text-primary-600 dark:text-primary-400">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Preparación Integral</h4>
                    <p className="text-muted-foreground text-sm">Cubrimos tanto las materias comunes como las específicas para maximizar tu puntuación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl text-primary-600 dark:text-primary-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Método Orientado a Resultados</h4>
                    <p className="text-muted-foreground text-sm">Entrenamiento específico con exámenes de años anteriores de la Universidad de Jaén (UJA).</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Form Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-100 dark:border-zinc-800 relative z-10">
                {formSent ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">¡Solicitud Recibida!</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Gracias por interesarte en nuestro Intensivo. Sonia se pondrá en contacto contigo muy pronto para darte todos los detalles.</p>
                    <button onClick={() => setFormSent(false)} className="text-primary-600 font-bold hover:underline mt-6 cursor-pointer block mx-auto">Enviar otra solicitud</button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Formulario de Inscripción</h3>
                      <p className="text-slate-600 dark:text-slate-400">Déjanos tus datos y te llamaremos en menos de 24 horas.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200">Nombre completo</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                          placeholder="Tu nombre y apellidos"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200">Teléfono</label>
                          <input 
                            type="tel" 
                            required
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                            className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                            placeholder="600 000 000"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold mb-2 block text-slate-800 dark:text-slate-200">Correo electrónico</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full h-12 px-4 rounded-xl border border-primary-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:bg-white dark:focus:bg-black focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-900 dark:text-white"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      
                      {formError && (
                        <p className="text-red-600 text-sm font-medium">Hubo un error al enviar. Inténtalo de nuevo o llámanos directamente.</p>
                      )}
                      
                      <Button type="submit" size="lg" className="w-full h-14 mt-4 text-base font-bold shadow-lg shadow-primary-500/20" disabled={formLoading}>
                        {formLoading ? "Enviando..." : "Quiero mi plaza en el Intensivo"}
                      </Button>
                      
                      <p className="text-center text-xs text-muted-foreground mt-4">
                        Al enviar este formulario, aceptas nuestra <Link href="/privacidad" className="underline hover:text-primary-600">política de privacidad</Link>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
