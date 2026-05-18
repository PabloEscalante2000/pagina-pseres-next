import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClinicaServicios from "@/components/ClinicaServicios";

// Metadatos para SEO, ideal para Componentes de Servidor
export const metadata: Metadata = {
  title: "Clínica de PSERES: Psicoterapia para Niños con TEA, TDAH y Neurodiversidad en Lima",
  description: "Psicoterapia personalizada para niños en Lima, Miraflores. Programa de tutora sombra para TEA y TDAH, terapias cognitivas, psicoanalíticas y neurocognitivas. Equipo especializado en neurodiversidad infantil.",
  openGraph: {
    title: "Clínica de PSERES: Psicoterapia para Niños con TEA, TDAH y Neurodiversidad",
    description: "Psicoterapia personalizada para niños en Lima, Miraflores. Programa de tutora sombra para TEA y TDAH, terapias cognitivas, psicoanalíticas y neurocognitivas. Equipo especializado en neurodiversidad infantil.",
    url: "https://pseres.pe/servicios/clinica-de-pseres/",
    siteName: "PSERES",
    locale: "es_PE",
    type: "website",
  },
};

export default function ClinicaPseresPage() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url('/assets/img_portadaClinica.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            CLÍNICA DE PSERES:
            <br />
            TERAPIAS CREADAS PARA CADA NIÑO
          </h1>
        </div>
      </div>

      {/* Renderizamos el componente de cliente que maneja la interactividad */}
      <ClinicaServicios />

      <Footer />
    </div>
  );
}
