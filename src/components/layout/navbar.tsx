"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, GraduationCap, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-3" : "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-primary-100 dark:border-zinc-800 shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 p-2 rounded-xl text-white group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gradient">
              Academia Veritas
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="text-foreground hover:text-primary-600 transition-colors">
              Inicio
            </Link>
            <div className="relative group p-2">
              <span className="text-foreground group-hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-1">
                Servicios
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-primary-100 dark:border-zinc-800 p-3 flex flex-col min-w-[240px]">
                  <span className="px-4 py-1 text-xs font-bold text-primary-500 uppercase tracking-wider">Apoyo Escolar</span>
                  
                  <Link href="/refuerzo/primaria" className="px-4 py-2 hover:bg-primary-50 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span className="text-foreground text-sm">Primaria</span>
                  </Link>
                  <Link href="/refuerzo/secundaria" className="px-4 py-2 hover:bg-primary-50 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span className="text-foreground text-sm">Secundaria (ESO)</span>
                  </Link>
                  <Link href="/refuerzo/bachillerato" className="px-4 py-2 hover:bg-primary-50 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span className="text-foreground text-sm">Bachillerato & Selectividad</span>
                  </Link>

                  <div className="h-px bg-slate-100 dark:bg-zinc-800 my-2" />
                  
                  <Link href="/contacto" className="px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center justify-between gap-3 group/item">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary-500" />
                      <span className="text-foreground font-medium">Intensivo de Selectividad</span>
                    </div>
                    <span className="bg-primary-100 text-primary-700 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-sm">¡NUEVO!</span>
                  </Link>

                  <div className="h-px bg-slate-100 dark:bg-zinc-800 my-2" />
                  
                  <Link href="/ingles/secundaria" className="px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    <span className="text-foreground font-medium">Inglés (Todos los niveles)</span>
                  </Link>
                  

                </div>
              </div>
            </div>
            <Link href="/sobre-nosotros" className="text-foreground hover:text-primary-600 transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary-600 transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/#contacto">Reserva tu clase</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 shadow-xl border-t border-primary-50 dark:border-zinc-800 py-4 px-6 flex flex-col gap-4">
          <Link href="/" className="font-medium px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            Inicio
          </Link>
          <div className="px-4 py-2 font-semibold text-primary-600 uppercase text-sm tracking-wider">
            Servicios
          </div>
          <div className="px-4 py-1 text-xs font-bold text-primary-500 uppercase tracking-wider mt-2">Apoyo Escolar</div>
          <Link href="/refuerzo/primaria" className="font-medium px-4 py-2 ml-4 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl flex items-center gap-3 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" /> Primaria
          </Link>
          <Link href="/refuerzo/secundaria" className="font-medium px-4 py-2 ml-4 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl flex items-center gap-3 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" /> Secundaria (ESO)
          </Link>
          <Link href="/refuerzo/bachillerato" className="font-medium px-4 py-2 ml-4 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl flex items-center gap-3 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" /> Bachillerato
          </Link>
          <Link href="/contacto" className="font-medium px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl flex items-center justify-between gap-3 text-foreground mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5" /> Intensivo de Selectividad
            </div>
            <span className="bg-primary-100 text-primary-700 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">¡NUEVO!</span>
          </Link>
          <Link href="/ingles/secundaria" className="font-medium px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl flex items-center gap-3 text-foreground mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            <BookOpen className="h-5 w-5" /> Inglés (Todos los niveles)
          </Link>

          <Link href="/contacto" className="font-medium px-4 py-3 hover:bg-primary-50 dark:hover:bg-zinc-900 rounded-xl mt-4 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            Contacto
          </Link>
          <Button className="w-full mt-4" size="lg" asChild>
            <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              Reserva tu clase
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
