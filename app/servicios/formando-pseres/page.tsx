import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FormandoPseresContent from "@/components/FormandoPseresContent";

export const metadata: Metadata = {
  title: "Formando PSERES: Programa de Progreso Integral",
  description:
    "Descubre nuestro programa de progreso integral 'Formando PSERES', con tutoría académica, orientación vocacional y terapias para desarrollar estrategias de aprendizaje.",
};

export default function FormandoPseresPage() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url('/assets/portada_formandopseres.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            FORMANDO PSERES
            <br />
            PROGRAMA DE PROGRESO INTEGRAL
          </h1>
        </div>
      </div>

      <FormandoPseresContent />

      <Footer />
    </div>
  );
}
