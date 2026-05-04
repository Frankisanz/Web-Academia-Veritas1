import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/schema";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieBanner } from "@/components/layout/cookie-banner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academia Veritas | Clases Particulares y Apoyo Escolar en Úbeda",
  description: "Tu centro experto en apoyo escolar en Úbeda. Clases particulares de matemáticas, lengua, ciencias e inglés. Preparación intensiva para Selectividad (PEvAU).",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Academia Veritas | Clases Particulares en Úbeda",
    description: "La mejor academia de Úbeda para apoyo escolar, refuerzo educativo y preparación de Selectividad.",
    url: "https://academiaveritas.es",
    siteName: "Academia Veritas",
    locale: "es_ES",
    type: "website",
  },
  verification: {
    google: "lHoG-K8YPy_U9hNMLkRrlkY19laBa-Ve3v87J5IPFqQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased selection:bg-primary-500 selection:text-white`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <LocalBusinessSchema />
          <FAQSchema />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
