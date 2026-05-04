"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/soniahg41@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Teléfono: formData.phone,
          Mensaje: formData.message,
          _subject: "Nuevo mensaje de contacto - Academia Veritas",
        }),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Ponte en Contacto
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos aquí para resolver tus dudas. Acércate a conocernos, llámanos o envíanos un mensaje para reservar tu plaza.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <MapPin className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Visítanos</h3>
              <p className="text-muted-foreground">Calle Torrenueva Nº 1, 1º<br />23400 Úbeda, Jaén</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <Phone className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Llámanos</h3>
              <p className="text-muted-foreground">626 819 636</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-zinc-800">
              <Mail className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Escríbenos</h3>
              <p className="text-muted-foreground">soniahg41@gmail.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-zinc-800">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground max-w-md">Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto contigo muy pronto a través del teléfono facilitado.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-8">Enviar otro mensaje</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">¿En qué podemos ayudarte?</label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full min-h-[150px] p-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y" />
                </div>
                {error && (
                  <p className="text-red-600 text-sm font-medium">Hubo un error al enviar. Inténtalo de nuevo.</p>
                )}
                <Button size="lg" type="submit" className="w-full md:w-auto px-10 h-14 text-lg" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
