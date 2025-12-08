import Image from "next/image";
import type { Metadata } from "next";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Gestión de metadatos nativa de Next.js para un mejor SEO
export const metadata: Metadata = {
  title: "Criando PSERES: Programa para padres y tutores",
  description:
    "Programa para padres y tutores. Entrenamiento para padres y profesores de niños con trastornos del neurodesarrollo y psicoterapia familiar.",
};

export default function CriandoPseres() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url('/assets/img_portadaCriando.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            CRIANDO PSERES:
            <br />
            PROGRAMA PARA PADRES Y TUTORES
          </h1>
        </div>
      </div>
      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-5 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-6xl sm:text-5xl text-3xl lg:leading-12 sm:leading-9 leading-6">
            I. ENTRENAMIENTO PARA PADRES Y PROFESORES DE NIÑOS CON TRASTORNOS
            DEL NEURODESARROLLO
          </h2>
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start">
            <Image
              src="/assets/criandoPseres2.jpg"
              alt="Entrenamiento para padres y profesores de niños con trastornos del neurodesarrollo"
              width={288} // w-72
              height={256} // h-64
              className="object-cover object-center rounded-lg m-auto flex-none md:mr-6"
            />
            <article className="font-century-gothic flex flex-col justify-center flex-auto">
              <div className="flex flex-col justify-between gap-4 h-full">
                <ul className="lg:text-lg text-sm list-disc pl-4 list-inside lg:leading-6 flex-auto flex flex-col justify-center">
                  <li>
                    Educar sobre los diversos Trastornos del Neurodesarrollo
                  </li>
                  <li>Proporcionar estrategias de manejo conductual</li>
                  <li>Fortalecer la comunicación familiar</li>
                  <li>Fomentar la comprensión y empatía familiar</li>
                  <li>Promover la autonomía del niño</li>
                  <li>Reducir el estrés parental</li>
                  <li>Mejorar el rendimiento académico del niño</li>
                </ul>
                <a
                  className="block text-sm px-5 py-2 rounded-lg bg-brown-v2 text-white-v1 font-century-gothic transition-all hover:scale-95 w-fit ml-auto flex-none"
                  href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar una Cita
                </a>
              </div>
            </article>
          </div>
        </section>
      </article>
      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-5 mt-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-6xl sm:text-5xl text-3xl lg:leading-12 sm:leading-9 leading-6">
            II. PSICOTERAPIA FAMILIAR
          </h2>
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start">
            <Image
              src="/assets/psicoterapia_familiar.jpg"
              alt="Psicoterapia familiar"
              width={288} // w-72
              height={256} // h-64
              className="object-cover object-center rounded-2xl m-auto flex-none"
            />
            <div className="pt-3 flex-auto flex flex-col justify-between gap-4">
              <ul className="lg:text-xl text-sm list-disc sm:pl-8 pl-4 list-inside flex-auto flex flex-col justify-center">
                <li>Mejorar la comunicación</li>
                <li>Aprender a solucionar conflictos de forma asertiva</li>
                <li>Expresar emociones y perspectivas de forma adecuada</li>
                <li>Fortalecer los lazos familiares</li>
                <li>Crear un entorno más armonioso</li>
              </ul>
              <a
                className="block text-sm px-5 py-2 rounded-lg bg-green-v1 text-white-v1 font-century-gothic transition-all hover:scale-95 w-fit ml-auto flex-none"
                href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una Cita
              </a>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
