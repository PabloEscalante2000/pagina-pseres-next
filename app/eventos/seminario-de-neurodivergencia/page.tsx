import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seminario de Neurodivergencia | PSERES",
  description:
    "Seminario intensivo sobre neurodivergencia para docentes, educadores y familias. Aprende a entender y acompañar a niños con TDA, TDAH, Autismo y otras condiciones del neurodesarrollo.",
};

const aprendizajes = [
  "Diferenciar con claridad neurodiversidad, neurodivergencia y trastornos del neurodesarrollo.",
  "Comprender el desarrollo cerebral y neuropsicológico detrás de la conducta.",
  "Distinguir desregulación, dificultad, mala lectura del contexto y expectativas poco ajustadas.",
  "Traducir la evidencia en herramientas concretas para aula y hogar.",
  "Entender la diferencia entre inteligencia, rendimiento, funcionamiento adaptativo y necesidad de apoyos.",
  "Pensar adolescencia, sexualidad, inclusión e independencia sin simplificaciones.",
];

const programa = [
  {
    numero: "01",
    titulo: "Entendiendo lo que realmente le pasa al niño",
    descripcion:
      "Neurodivergencia, tipos más frecuentes, desarrollo cerebral, conducta y límites del diagnóstico.",
  },
  {
    numero: "02",
    titulo: "Qué hacer cuando no encaja en el aula o en casa",
    descripcion:
      "Adaptaciones, lectura práctica del diagnóstico, herramientas de acompañamiento y trabajo conjunto familia-escuela.",
  },
  {
    numero: "03",
    titulo: "Cómo acompañar su futuro sin dañarlo",
    descripcion:
      "Adolescencia, identidad, sexualidad, autonomía, proyecto de vida y transición a la adultez.",
  },
];

export default function SeminarioNeurodivergenciaPage() {
  return (
    <div className="bg-white-v1">

      {/* HERO */}
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 40, 20, 0.6), rgba(30, 40, 20, 0.6)), url('/assets/DSC_7312-min.JPG')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto flex flex-col justify-end sm:pl-24 pl-8 pb-16 pr-8">
          <p className="text-brown-v2 font-century-gothic sm:text-lg text-sm uppercase tracking-widest mb-3">
            TDA · TDAH · Autismo y otras condiciones del neurodesarrollo
          </p>
          <h1 className="text-white-v1 font-quirk sm:text-8xl text-5xl sm:leading-20 leading-11 mb-4">
            INCLUSIÓN SIN
            <br />
            IMPROVISACIÓN
          </h1>
          <p className="text-white-v1 font-century-gothic sm:text-2xl text-lg mb-6 max-w-2xl">
            Cómo entender y acompañar a niños neurodivergentes en el aula y en casa
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-brown-v1 text-white-v1 font-century-gothic font-semibold px-5 py-2 rounded-lg sm:text-base text-sm">
              Cupos limitados
            </span>
            <span className="text-white-v1 font-century-gothic sm:text-base text-sm">
              Junio 2026 · 3 sábados intensivos
            </span>
          </div>
        </div>
      </div>

      {/* SECCIÓN PROBLEMA */}
      <section className="bg-green-v1 py-16 sm:px-24 px-8">
        <p className="text-white-v1 font-century-gothic sm:text-xl text-base max-w-4xl mx-auto leading-8 sm:leading-10">
          Hoy la inclusión ya no es opcional, pero sigue siendo profundamente improvisada.
        </p>
        <p className="text-white-v1 font-century-gothic sm:text-xl text-base max-w-4xl mx-auto leading-8 sm:leading-10 mt-6">
          A los docentes se les exige incluir, adaptar, contener y reportar avances, aun cuando muchas veces nunca
          fueron formados para leer lo que realmente le pasa al niño. A las familias se les pide paciencia, constancia y
          esperanza, mientras cargan preguntas que nadie les responde con claridad: qué significa el diagnóstico, qué
          esperar del desarrollo, cómo ayudar sin dañar y qué pasará con su hijo en el futuro.
        </p>
        <p className="text-brown-v2 font-century-gothic sm:text-xl text-base max-w-4xl mx-auto leading-8 sm:leading-10 mt-6 font-semibold">
          Cuando falta comprensión, todos se desgastan: el niño se frustra, el docente se agota y la familia empieza a
          vivir entre la culpa, el miedo y la sensación de no estar haciéndolo bien.
        </p>
      </section>

      {/* GIRO */}
      <section className="bg-brown-v2 py-16 sm:px-24 px-8">
        <p className="text-white-v1 font-century-gothic font-bold sm:text-5xl text-3xl max-w-3xl mx-auto leading-tight sm:leading-14 text-center">
          En muchos casos, el problema no está en el niño.
        </p>
        <p className="text-white-v1 font-century-gothic sm:text-xl text-base max-w-3xl mx-auto leading-8 sm:leading-10 mt-6 text-center">
          Está en la forma en que estamos intentando ayudarlo. Y mientras no entendamos cómo funciona su desarrollo,
          seguiremos corrigiendo conductas sin comprender su origen.
        </p>
      </section>

      {/* PROPUESTA */}
      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl text-center mb-8">
          SOBRE ESTE SEMINARIO
        </h2>
        <p className="text-green-v1 font-century-gothic sm:text-xl text-base max-w-4xl mx-auto leading-8 sm:leading-10 text-center">
          Este seminario no busca que memorices etiquetas. Busca que aprendas a mirar distinto, interpretar mejor y
          actuar con más criterio.
        </p>
        <p className="text-green-v1 font-century-gothic sm:text-xl text-base max-w-4xl mx-auto leading-8 sm:leading-10 mt-4 text-center">
          Porque entender la neurodivergencia no es solo nombrar un diagnóstico; es aprender a traducirlo en decisiones
          concretas para la escuela, la familia y la vida cotidiana.
        </p>
        <p className="text-brown-v1 font-century-gothic sm:text-lg text-base max-w-4xl mx-auto mt-6 text-center font-semibold">
          Seminario intensivo para docentes, educadores, madres y padres de familia.
        </p>
      </section>

      {/* APRENDERÁS A */}
      <section className="bg-green-v2 py-16 sm:px-24 px-8">
        <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl text-center mb-12">
          TU APRENDIZAJE
        </h2>
        <ul className="max-w-4xl mx-auto flex flex-col gap-5">
          {aprendizajes.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 bg-white-v1 rounded-xl p-5 shadow-sm"
            >
              <span className="text-brown-v1 font-quirk sm:text-3xl text-2xl flex-none leading-none mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-green-v1 font-century-gothic sm:text-lg text-base leading-7">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* PROGRAMA */}
      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl text-center mb-4">
          PROGRAMA
        </h2>
        <p className="text-green-v1 font-century-gothic sm:text-lg text-base text-center mb-12">
          3 sábados intensivos · Junio 2026
        </p>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6">
          {programa.map((sesion, index) => (
            <article
              key={index}
              className={`flex-1 rounded-2xl p-8 flex flex-col gap-4 ${
                index % 2 === 0 ? "bg-brown-v2" : "bg-green-v1"
              }`}
            >
              <span className="text-white-v1/60 font-quirk text-5xl leading-none">
                {sesion.numero}
              </span>
              <h3 className="text-white-v1 font-century-gothic font-bold sm:text-2xl text-xl leading-tight uppercase">
                {sesion.titulo}
              </h3>
              <p className="text-white-v1 font-century-gothic sm:text-base text-sm leading-6">
                {sesion.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPOSITOR */}
      <section className="bg-green-v1 py-16 sm:px-24 px-8">
        <h2 className="text-white-v1 font-quirk sm:text-6xl text-4xl text-center mb-12">
          EXPOSITOR
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-10 items-center">
          <div className="sm:w-64 w-48 flex-none">
            <Image
              src="/assets/cesar_new-min.webp"
              alt="César Andrés Escalante Sifuentes"
              width={256}
              height={320}
              className="rounded-2xl object-cover w-full aspect-[3/4]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-brown-v2 font-quirk sm:text-4xl text-2xl uppercase">
              César Andrés Escalante Sifuentes
            </h3>
            <p className="text-white-v1 font-century-gothic sm:text-lg text-base leading-8 sm:leading-10">
              Psicólogo y psicoterapeuta, autor de la obra{" "}
              <em>"Cuando el cerebro va por otro camino"</em> y referente clínico dentro del
              ecosistema EADES. Su trabajo integra comprensión clínica, divulgación rigurosa y una
              mirada profundamente humana sobre los procesos del desarrollo, la salud mental y el
              acompañamiento familiar.
            </p>
            <p className="text-white-v1 font-century-gothic sm:text-lg text-base leading-8 sm:leading-10">
              En este seminario propone una lectura que conecta neurociencia, práctica educativa y
              vida cotidiana, para convertir conceptos complejos en herramientas útiles para quienes
              acompañan a niños y adolescentes neurodivergentes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-v1 py-16 sm:px-24 px-8 flex flex-col items-center gap-6">
        <h2 className="text-white-v1 font-quirk sm:text-6xl text-4xl text-center">
          RESERVA TU LUGAR
        </h2>
        <p className="text-white-v1 font-century-gothic sm:text-xl text-base text-center max-w-xl leading-8">
          Cupos limitados. Junio 2026 · 3 sábados intensivos.
          <br />
          Acompañar mejor no empieza con hacer más. Empieza con entender mejor.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20Seminario%20de%20Neurodivergencia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white-v1 text-brown-v1 font-century-gothic font-bold sm:text-xl text-base px-10 py-4 rounded-xl hover:bg-green-v2 hover:text-white-v1 transition-colors"
        >
          INSCRÍBETE AHORA
        </a>
      </section>

      <Footer />
    </div>
  );
}
