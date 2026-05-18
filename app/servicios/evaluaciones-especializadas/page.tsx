import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EvaluacionesServicios from "@/components/EvaluacionesServicios";

export const metadata: Metadata = {
  title: "Evaluaciones Psicológicas Express para Niños en Lima | PSERES",
  description: "Evaluaciones psicológicas express para niños en Lima: cognitiva, aprendizaje, TDAH/TEA y orientación vocacional. Resultados ágiles con informe profesional. Agenda tu cita en PSERES, Miraflores.",
  openGraph: {
    title: "Evaluaciones Psicológicas Express para Niños en Lima | PSERES",
    description: "Evaluaciones psicológicas express para niños en Lima: cognitiva, aprendizaje, TDAH/TEA y orientación vocacional. Resultados ágiles con informe profesional.",
    url: "https://pseres.pe/servicios/evaluaciones-especializadas/",
    siteName: "PSERES",
    locale: "es_PE",
    type: "website",
  },
};

export default function EvaluacionesEspecializadasPage() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url('/assets/pseres_servicio_evaluaciones.webp')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            EVALUACIONES
            <br />
            ESPECIALIZADAS RÁPIDAS
          </h1>
        </div>
      </div>

      <EvaluacionesServicios />

      <Footer />
    </div>
  );
}
