import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/seo/schema";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { SITE_URL } from "@/lib/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  title: "Academia Veritas | Clases Particulares y Apoyo Escolar en Úbeda",
  description: "Tu centro experto en apoyo escolar en Úbeda. Clases particulares de matemáticas, lengua, ciencias e inglés. Preparación intensiva para Selectividad (PEvAU).",
  applicationName: "Academia Veritas",
  authors: [{ name: "Academia Veritas", url: SITE_URL }],
  creator: "Academia Veritas",
  publisher: "Academia Veritas",
  category: "education",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Academia Veritas | Clases Particulares en Úbeda",
    description: "La mejor academia de Úbeda para apoyo escolar, refuerzo educativo y preparación de Selectividad.",
    url: SITE_URL,
    siteName: "Academia Veritas",
    locale: "es_ES",
    type: "website",
    // PNG estático en `public/`: GitHub Pages resuelve el Content-Type por
    // extensión, así que una ruta sin extensión rompería los rastreadores sociales.
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Academia Veritas — Clases particulares y apoyo escolar en Úbeda (Jaén)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Veritas | Clases Particulares en Úbeda",
    description: "Apoyo escolar, refuerzo educativo y preparación de Selectividad (PEvAU) en Úbeda, en grupos reducidos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Señales geográficas para buscadores que aún las leen (Bing entre ellos).
  other: {
    "geo.region": "ES-J",
    "geo.placename": "Úbeda",
    "geo.position": "38.0125;-3.3702",
    ICBM: "38.0125, -3.3702",
  },
  verification: {
    google: "lHoG-K8YPy_U9hNMLkRrlkY19laBa-Ve3v87J5IPFqQ",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  colorScheme: "light dark",
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
          <WebSiteSchema />
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
