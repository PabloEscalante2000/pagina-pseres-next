import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EvaluacionesServicios from "@/components/EvaluacionesServicios";

export const metadata: Metadata = {
  title: "Evaluaciones Especializadas Rápidas | PSERES",
  description: "Evalúe el desarrollo y bienestar de su hijo(a) de forma ágil y profesional con nuestras evaluaciones especializadas en PSERES.",
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
