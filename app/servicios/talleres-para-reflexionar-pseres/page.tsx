import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TalleresContent from "@/components/TalleresContent";

export const metadata: Metadata = {
  title: "PSERES Reflexiona: Talleres para Colegios e Instituciones",
  description:
    "Ofrecemos talleres y capacitaciones para colegios e instituciones, fomentando una comunidad educativa consciente y preparada en temas de crianza y educación.",
};

export default function TalleresPseresPage() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.34), rgba(0,0,0, 0.34)), url('/assets/portada_tallerpseres.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto py-5 flex items-end text-white-v1 font-quirk pb-16 sm:ml-24 ml-12 mr-2">
          <h1 className="lg:text-9xl sm:text-8xl text-6xl font-quirk lg:leading-24 sm:leading-18">
            PSERES REFLEXIONA:
            <br />
            <span className="block lg:text-8xl sm:text-7xl text-5xl lg:leading-20 sm:leading-14 leading-9">
              TALLERES PARA COLEGIOS E INSTITUCIONES
            </span>
          </h1>
        </div>
      </div>
      <TalleresContent />
      <Footer />
    </div>
  );
}
