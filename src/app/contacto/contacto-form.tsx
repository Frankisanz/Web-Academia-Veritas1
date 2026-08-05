"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function ContactoForm() {
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

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">¡Mensaje Enviado!</h2>
        <p className="text-muted-foreground max-w-md">
          Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en contacto
          contigo muy pronto a través del teléfono facilitado.
        </p>
        <Button onClick={() => setSent(false)} variant="outline" className="mt-8">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contacto-nombre" className="text-sm font-medium text-foreground">
            Nombre completo
          </label>
          <input
            id="contacto-nombre"
            name="nombre"
            autoComplete="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contacto-telefono" className="text-sm font-medium text-foreground">
            Teléfono
          </label>
          <input
            id="contacto-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="contacto-email" className="text-sm font-medium text-foreground">
          Correo electrónico
        </label>
        <input
          id="contacto-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contacto-mensaje" className="text-sm font-medium text-foreground">
          ¿En qué podemos ayudarte?
        </label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Cuéntanos el curso de tu hijo/a y las asignaturas en las que necesita apoyo."
          className="w-full min-h-[150px] p-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-y"
        />
      </div>
      {error && (
        <p className="text-red-600 text-sm font-medium">
          Hubo un error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}
      <Button size="lg" type="submit" className="w-full md:w-auto px-10 h-14 text-lg" disabled={loading}>
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
}
