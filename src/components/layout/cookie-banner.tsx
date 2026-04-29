"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Retrasar un poco la aparición para no agobiar
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white dark:bg-zinc-900 border border-primary-100 dark:border-zinc-800 rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary-50 dark:bg-zinc-800 p-2 rounded-lg text-primary-600 shrink-0">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground text-sm mb-1">Control de Cookies</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Usamos cookies para mejorar tu experiencia. Al navegar, aceptas nuestra{" "}
              <Link href="/politica-de-cookies" className="text-primary-600 hover:underline font-medium">
                política de cookies
              </Link>.
            </p>
            <div className="flex items-center gap-3">
              <Button size="sm" className="rounded-full h-8 px-4 text-xs" onClick={handleAccept}>
                Aceptar
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full h-8 px-4 text-xs text-muted-foreground" onClick={handleDecline}>
                Rechazar
              </Button>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
