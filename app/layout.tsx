import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhIcon from "../components/WhIcon"
import NavMobil from "../components/NavMobil";
import PromoPopup from "@/components/PromoPopUp";
import MetaPixel from "@/components/MetaPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PSERES — Psicoterapia y psicoeducación para niños en Lima | TEA, TDAH",
    template: "%s | PSERES Lima",
  },
  description: "Centro especializado en psicoterapia y psicoeducación infantil en Lima, Miraflores. Atendemos TEA, TDAH y neurodiversidad con terapias personalizadas, evaluaciones express y programa de tutora sombra. Equipo con CPsP certificado.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "PSERES — Psicoterapia y psicoeducación para niños en Lima",
    description: "Centro especializado en psicoterapia y psicoeducación infantil en Lima, Miraflores. Atendemos TEA, TDAH y neurodiversidad con terapias personalizadas, evaluaciones express y programa de tutora sombra.",
    url: "https://pseres.pe/",
    siteName: "PSERES",
    locale: "es_PE",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SchemaOrg />
        <NavMobil />
        {children}
        <WhIcon />
        <MetaPixel/>
        <GoogleAnalytics/>
      </body>
    </html>
  );
}
