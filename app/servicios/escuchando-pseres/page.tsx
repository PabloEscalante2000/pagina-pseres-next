import Image from "next/image";
import type { Metadata } from "next";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Gestión de metadatos nativa de Next.js para un mejor SEO
export const metadata: Metadata = {
  title: "Escuchando PSERES",
  description:
    "La psicoterapia emocional para niños es una intervención lúdica y dinámica que tiene como finalidad potenciar el bienestar emocional, social y conductual del niño en su entorno. Es una intervención terapéutica beneficiosa para aquellos que presentan dificultades con sus emociones y problemas de comportamiento.",
};

export default function EscuchandoPseres() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url('/assets/img_portadaEscuchando.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            ESCUCHANDO PSERES:
            <br />
            SERVICIOS DE BIENESTAR EMOCIONAL
          </h1>
        </div>
      </div>
      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-5 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6">
            I. TERAPIAS EMOCIONALES Y CONDUCTUALES
          </h2>
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start">
            {/* Componente <Image> para optimización automática */}
            <Image
              src="/assets/terap_emo_cond.jpg"
              alt="Terapias emocionales y conductuales - PSERES"
              width={384} // w-96 = 384px
              height={384} // h-96 = 384px
              className="object-cover object-center rounded-lg m-auto flex-none sm:mr-6"
            />
            <article className="font-century-gothic flex flex-col justify-between">
              <div>
                <p className="lg:text-lg text-sm">
                  La psicoterapia emocional para niños es una intervención
                  lúdica y dinámica que tiene como finalidad potenciar el
                  bienestar emocional, social y conductual del niño en su
                  entorno. Es una intervención terapéutica beneficiosa para
                  aquellos que presentan dificultades con sus emociones y
                  problemas de comportamiento. Esta terapia explora los recursos
                  del paciente, buscando desarrollar vínculos afectivos seguros
                  y lograr una mayor consciencia emocional.
                </p>
                <h3 className="lg:text-lg text-sm font-semibold pt-6 pb-3">
                  Terapias emocionales y conductuales para casos de:
                </h3>
                <ul className="lg:text-lg text-sm grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 list-disc pl-4 list-inside">
                  <li>Depresión</li>
                  <li>Ansiedad</li>
                  <li>Impulsividad</li>
                  <li>Mejora de autoestima</li>
                  <li>Modificación de conducta</li>
                  <li>Frustración</li>
                  <li>Atención y concentración</li>
                  <li>Habilidades sociales</li>
                </ul>
              </div>
              <a
                className="block text-sm px-5 py-2 rounded-lg bg-green-v1 text-white font-century-gothic transition-all hover:scale-95 w-fit ml-auto mt-3"
                href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer" // Buena práctica de seguridad
              >
                Agendar una Cita
              </a>
            </article>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
