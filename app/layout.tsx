import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhIcon from "../components/WhIcon"
import NavMobil from "../components/NavMobil";
import PromoPopup from "@/components/PromoPopUp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "PSERES",
  description: "Pseres es un centro de psicoterapia y psicoeducación dedicado a la formación integral de niños y adolescentes. Potenciamos su curiosidad y creatividad, ayudándolos a reflexionar sobre lo aprendido y explorar nuevas alternativas de solución para promover su autonomía y éxito en todas las áreas de su vida. Nuestro equipo está conformado por profesionales en psicoterapia, psicología, neuropsicología y educación quienes en conjunto abordan todos los aspectos del bienestar del niño y diseñan un plan personalizado para cada uno.",
  icons: {
   icon: "/favicon.ico",
   apple: "/apple-touch-icon.png",
   shortcut: "/icon.png",
  },
  keywords: ["psicología", "terapia", "blog", "educación", "psicoeducación"],
  openGraph: {
    title: "PSERES",
    description: "Pseres es un centro de psicoterapia y psicoeducación dedicado a la formación integral de niños y adolescentes. Potenciamos su curiosidad y creatividad, ayudándolos a reflexionar sobre lo aprendido y explorar nuevas alternativas de solución para promover su autonomía y éxito en todas las áreas de su vida. Nuestro equipo está conformado por profesionales en psicoterapia, psicología, neuropsicología y educación quienes en conjunto abordan todos los aspectos del bienestar del niño y diseñan un plan personalizado para cada uno.",
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
        <PromoPopup />
        <NavMobil />
        {children}
        <WhIcon />
      </body>
    </html>
  );
}
