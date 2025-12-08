import Image from "next/image";
import dataNS from "@/public/data/nuestros_servicios.json";
import NSBlock from "@/components/NSBlock";
import Footer from "@/components/Footer";
import LineaVerde from "@/components/LineaVerde";
import LineaNaranja from "@/components/LineaNaranja";
import CarruselBlockLg from "@/components/CarruselBlockLg";
import CarruselBlockSm from "@/components/CarruselBlockSm";
import CarruselProfLg from "@/components/CarruselProfLg";
import CarruselProfSm from "@/components/CarruselProfSm";
import ScrollHandler from "@/components/ScrollHandler";
import CitaForm from "@/components/CitaForm";
import DudasFrecuentes from "@/components/DudasFrecuentes";
import CarruselHome from "@/components/CarruselHome";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <ScrollHandler />
      <section className="h-screen w-screen">
        <CarruselHome />
      </section>
      <div className="py-5 bg-white-v1">
        <h2 className="text-green-v1 lg:text-7xl sm:text-5xl text-4xl font-quirk text-center pt-8 sm:mb-0 -mb-12">
          PSERES A LOS QUE AYUDAMOS
        </h2>

        <article className=" w-screen md:px-24 px-8 m-auto">
          {/* Estos carruseles podrían necesitar ser Client Components si tienen interactividad */}
          <CarruselBlockLg />
          <CarruselBlockSm />
        </article>

        <h2
          id="servicios"
          className="text-green-v1 lg:text-7xl sm:text-5xl text-4xl font-quirk text-center pt-5 pb-2"
        >
          NUESTROS SERVICIOS
        </h2>
        <span className="font-quirk text-green-v1 text-center lg:text-2xl sm:text-xl uppercase m-auto block pb-6 px-8">
          Verano para Pser - Formando Pseres - Clínica de Pseres - Escuchando
          Pseres - Criando Pseres
        </span>
        <div className="flex flex-col justify-center items-center gap-5">
          {dataNS.map((val: unknown, index: number) => (
            <NSBlock
              key={index}
              color={index % 2 === 1 ? "green" : "brown"}
              element={val}
            />
          ))}
        </div>
        <div
          id="modelo"
          className="lg:h-96 h-64 bg-cover bg-center mt-5 flex flex-col text-white font-quirk justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${"/assets/porque_elegir_pseres.jpg"})`,
          }}
        >
          <Image
            width={500}
            height={500}
            src={"/assets/titular_porque_elegirnos.png"}
            alt="PSERES elígenos"
            className="mx-auto lg:w-auto w-64"
          />
          <h2 className="lg:text-9xl text-6xl leading-9 lg:leading-11 text-center">
            MODELO PSERES
          </h2>
        </div>
        <LineaVerde />
        <LineaNaranja />
        <CitaForm />
        <div id="nosotros" className="bg-white-v1 pt-16">
          <h2 className="uppercase font-quirk lg:text-7xl text-5xl leading-9 lg:leading-11 text-green-v1 pb-5 pt-2 text-center sm:px-24 p-16">
            Quiénes Somos
          </h2>
          <p className="max-w-[1500px] text-green-v1 font-century-gothic lg:text-xl sm:text-md text-sm m-auto py-1 sm:px-24 px-8 lg:leading-10 sm:leading-8">
            Pseres es un centro de psicoterapia y psicoeducación dedicado a la
            formación integral de niños y adolescentes. Potenciamos su
            curiosidad y creatividad, ayudándolos a reflexionar sobre lo
            aprendido y explorar nuevas alternativas de solución para promover
            su autonomía y éxito en todas las áreas de su vida.
          </p>
          <p className="m-auto max-w-[1500px] text-green-v1 font-century-gothic lg:text-xl sm:text-md text-sm py-1 sm:px-24 px-8 lg:leading-10 sm:leading-8 pb-10">
            Nuestro equipo está conformado por profesionales en psicoterapia,
            psicología, neuropsicología y educación quienes en conjunto abordan
            todos los aspectos del bienestar del niño y diseñan un plan
            personalizado para cada uno.
          </p>
          <h2 className="uppercase font-quirk lg:text-7xl text-5xl leading-9 lg:leading-11 text-green-v1 sm:pt-20 sm:pb-10 pt-10 pb-3 text-center sm:px-24 px-8">
            NUESTROS PROFESIONALES
          </h2>

          <section className="w-screen max-w-[1550px] mx-auto sm:px-8 px-3">
            <CarruselProfLg />
            <CarruselProfSm />
          </section>

          <DudasFrecuentes />
        </div>
      </div>
      <Footer />
    </div>
  );
}
