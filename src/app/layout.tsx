import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema } from "@/components/seo/schema";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Academia Veritas | Clases Particulares en Úbeda",
  description: "Tu centro de apoyo escolar y academia de idiomas en Úbeda. Preparamos para selectividad, primaria, secundaria y certificaciones de idiomas.",
  openGraph: {
    title: "Academia Veritas",
    description: "La mejor academia de Úbeda para apoyo escolar y aprender idiomas.",
    url: "https://academiaveritas.es",
    siteName: "Academia Veritas",
    locale: "es_ES",
    type: "website",
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
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
