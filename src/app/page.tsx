"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Languages, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nuevo Lead de Contacto:", formData);
    alert("¡Gracias! Hemos recibido tu solicitud. Log: " + JSON.stringify(formData));
    setFormData({ name: "", phone: "", interest: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Photographic Background */}
        <div className="absolute inset-0 -z-20">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2670" 
            alt="Estudiantes en la academia"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary-100 mb-8 mt-8">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-medium text-primary-900">Matrícula Abierta 2024-2025</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Desata tu <br/>
                <span className="text-gradient">Potencial</span> <br/>
                Académico.
              </h1>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8 leading-relaxed max-w-xl">
                Academia Veritas en Úbeda. Supera tus retos escolares en Primaria, Secundaria y Bachillerato, aprende inglés y domina otras lenguas con profesores expertos y un método comprobado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base h-14 px-8 shadow-xl shadow-primary-500/20" asChild>
                  <Link href="#contacto">
                    Solicitar información <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base h-14 px-8 border-2 border-primary-200 bg-white/50 backdrop-blur-md" asChild>
                  <Link href="#servicios">Ver todos los cursos</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-slate-800 dark:text-slate-200">
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
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Comienza Hoy</h3>
                  <p className="text-muted-foreground text-sm">Déjanos tus datos y te asesoramos sin compromiso.</p>
                </div>
                
                <form id="contacto" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block text-foreground">Nombre completo</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-foreground">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                      placeholder="600 000 000"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block text-foreground">Me interesa...</label>
                    <select 
                      required
                      value={formData.interest}
                      onChange={e => setFormData({...formData, interest: e.target.value})}
                      className="w-full h-12 px-4 rounded-xl border border-primary-100 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium appearance-none"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="ingles">Clases de Inglés</option>
                      <option value="refuerzo">Apoyo Escolar / Selectividad</option>
                      <option value="idiomas">Otros Idiomas</option>
                    </select>
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 mt-2 text-base">
                    Reservar mi plaza
                  </Button>
                </form>
              </div>

              {/* Decoration Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
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

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white dark:bg-black relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nuestra Oferta Educativa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Programas adaptados a cada etapa escolar con el objetivo claro de potenciar el rendimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <ServiceCard 
              icon={<GraduationCap className="h-8 w-8 text-primary-600" />}
              title="Apoyo Escolar"
              desc="Refuerzo escolar para Primaria, Secundaria y Bachillerato, y preparación intensiva para Selectividad."
              href="/refuerzo/secundaria"
            />
            <ServiceCard 
              icon={<BookOpen className="h-8 w-8 text-primary-600" />}
              title="Inglés"
              desc="Preparación de Exámenes Cambridge / Aptis y refuerzo para todos los niveles."
              href="/ingles/secundaria"
            />
             <ServiceCard 
              icon={<Languages className="h-8 w-8 text-primary-600" />}
              title="Otros Idiomas"
              desc="Clases de Español para extranjeros y preparación específica."
              href="/idiomas/espanol/online"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="group flex flex-col items-start bg-primary-50/50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-primary-100 dark:border-zinc-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-1">{desc}</p>
      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm mt-auto group-hover:gap-2 transition-all">
        Saber más <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </Link>
  );
}
