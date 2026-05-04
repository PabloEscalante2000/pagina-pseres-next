import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Más allá del diagnóstico | PSERES",
  description:
    "Seminario-taller sobre neurodivergencia: claves neurocientíficas, educativas y clínicas para comprender lo que realmente sucede. 3 sábados intensivos, Junio 2026.",
};

const programa = [
  {
    numero: "01",
    fecha: "Sábado 6 de Junio",
    titulo: "Comprender la neurodivergencia",
    descripcion:
      "Qué es la neurodivergencia y por qué hoy ya no se entiende solo como un trastorno o un déficit. Se abordan la regulación del sistema nervioso, el procesamiento sensorial, la co-regulación y el sentido adaptativo de conductas como el stimming, el enmascaramiento social o los intereses intensos. La sesión ayudará a mirar la neurodivergencia con más profundidad y menos prejuicio.",
    imagen: "/assets/pseres_servicio_evaluaciones.webp",
    alt: "Comprender la neurodivergencia",
  },
  {
    numero: "02",
    fecha: "Sábado 13 de Junio",
    titulo: "Comprender el malestar y mejorar el acompañamiento",
    descripcion:
      "Lo que realmente genera sufrimiento: la sobrecarga sensorial, la ansiedad, el agotamiento, el burnout autista, las exigencias de encajar y los entornos poco comprensivos. Orientaciones prácticas para docentes y familias sobre cómo acompañar mejor, prevenir crisis y construir espacios más previsibles, seguros y respetuosos.",
    imagen: "/assets/DSC_7312-min.jpg",
    alt: "Comprender el malestar y mejorar el acompañamiento",
  },
  {
    numero: "03",
    fecha: "Sábado 20 de Junio",
    titulo: "Intervenir con una mirada afirmativa e integral",
    descripcion:
      "Herramientas para la intervención y el acompañamiento desde una perspectiva afirmativa. Enfoques actuales en clínica y educación, criterios para trabajar con estudiantes, hijos, pacientes y familias desde la validación, la autonomía, la comunicación clara y el apoyo integral.",
    imagen: "/assets/kevin_evento.png",
    alt: "Intervenir con una mirada afirmativa e integral",
  },
];

const avales = [
  {
    imagen: "/assets/aval2.jpeg",
    alt: "Instituto Raimon Gaja IRG España",
    nombre: "Instituto Raimon Gaja (IRG) – España",
    descripcion:
      "Institución europea con más de 40 años de trayectoria en la formación clínica y académica de profesionales en psicología y psicoterapia. Su respaldo garantiza estándares rigurosos de calidad, actualización científica y excelencia en la formación especializada.",
    bandera: "https://flagcdn.com/w40/es.png",
    banderaAlt: "Bandera de España",
    enlace: "https://institutoraimongaja.com/",
  },
  {
    imagen: "/assets/aval1.png",
    alt: "IAOTH International Association of Therapists",
    nombre: "IAOTH – International Association of Therapists",
    descripcion:
      "Red internacional que acredita y conecta a profesionales del bienestar en más de 80 países. Su aval certifica una formación alineada a estándares globales, promoviendo el desarrollo profesional, la ética y la proyección internacional de sus participantes.",
    bandera: "https://flagcdn.com/w40/us.png",
    banderaAlt: "Bandera de Estados Unidos",
    enlace: "https://iaoth.com/",
  },
  {
    imagen: "/assets/aval3.jpg",
    alt: "European Association of Applied Psychology EAAP",
    nombre: "European Association of Applied Psychology (EAAP)",
    descripcion:
      "Organización europea dedicada a impulsar una psicología aplicada, práctica y accesible. Su respaldo reconoce programas que integran conocimiento científico con impacto real en la vida cotidiana, fortaleciendo la intervención profesional en contextos educativos y clínicos.",
    bandera: "https://flagcdn.com/w40/gb.png",
    banderaAlt: "Bandera de Reino Unido",
    enlace: "https://eaap-eu.com/",
  },
];

const publico = [
  {
    icono: "👩‍🏫",
    titulo: "Docentes",
    descripcion: "Que deseen comprender mejor a estudiantes neurodivergentes y fortalecer sus prácticas de inclusión.",
  },
  {
    icono: "👨‍👩‍👧",
    titulo: "Padres y cuidadores",
    descripcion: "Interesados en acompañar con mayor claridad, sensibilidad y conocimiento.",
  },
  {
    icono: "🎓",
    titulo: "Estudiantes de Psicología",
    descripcion: "Que busquen una visión actualizada y comprensible sobre neurodivergencia.",
  },
  {
    icono: "🧠",
    titulo: "Psicólogos y profesionales afines",
    descripcion: "Que quieran enriquecer su mirada clínica y psicoeducativa.",
  },
];

export default function MasAllaDelDiagnosticoPage() {
  return (
    <div className="bg-white-v1">

      {/* HERO */}
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 40, 20, 0.65), rgba(30, 40, 20, 0.65)), url('/assets/form.png')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto flex flex-col justify-end sm:pl-24 pl-8 pb-16 pr-8">
          <p className="text-brown-v2 font-century-gothic sm:text-lg text-sm uppercase tracking-widest mb-3">
            Neurodivergencia · Neurociencia · Educación inclusiva · Clínica
          </p>
          <h1 className="text-white-v1 font-quirk sm:text-9xl text-5xl sm:leading-22 leading-11 mb-4">
            MÁS ALLÁ DEL
            <br />
            DIAGNÓSTICO
          </h1>
          <p className="text-white-v1 font-century-gothic sm:text-2xl text-lg mb-6 max-w-3xl leading-snug">
            Seminario-taller sobre neurodivergencia: claves neurocientíficas, educativas y clínicas
            para comprender lo que realmente sucede
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-brown-v1 text-white-v1 font-century-gothic font-semibold px-5 py-2 rounded-lg sm:text-base text-sm">
              Cupos limitados
            </span>
            <span className="text-white-v1 font-century-gothic sm:text-base text-sm">
              Junio 2026 · 3 sábados · 3 horas cada sesión
            </span>
          </div>
        </div>
      </div>

      {/* PRESENTACIÓN GENERAL */}
      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl mb-8">
              SOBRE EL SEMINARIO
            </h2>
            <p className="text-green-v1 font-century-gothic sm:text-xl text-base leading-8 sm:leading-10 mb-6">
              Este seminario-taller ofrece una mirada clara, actual y humana sobre la neurodivergencia.
              Está pensado para comprender mejor cómo viven, sienten, aprenden y se regulan las personas
              neurodivergentes, evitando explicaciones reducidas a etiquetas o estigmas.
            </p>
            <p className="text-green-v1 font-century-gothic sm:text-xl text-base leading-8 sm:leading-10">
              A lo largo de tres sesiones, se explicarán de manera accesible los aportes recientes de la
              neurociencia, la educación inclusiva y la práctica clínica. El objetivo es que los participantes
              no solo entiendan conceptos, sino que también puedan traducirlos en formas concretas de
              acompañamiento en la escuela, la familia y la consulta psicológica.
            </p>
          </div>
          <div className="lg:w-96 w-full flex-none">
            <Image
              src="/assets/melissa_evento.png"
              alt="Seminario Más allá del diagnóstico"
              width={384}
              height={480}
              className="rounded-2xl object-cover w-full aspect-4/5"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className="bg-green-v1 py-16 sm:px-24 px-8">
        <h2 className="text-white-v1 font-quirk sm:text-6xl text-4xl text-center mb-4">
          PROGRAMA
        </h2>
        <p className="text-brown-v2 font-century-gothic sm:text-lg text-base text-center mb-14">
          3 sábados de trabajo · 3 horas cada sesión · Junio 2026
        </p>

        <div className="max-w-5xl mx-auto flex flex-col gap-14">
          {programa.map((sesion, index) => (
            <article
              key={index}
              className={`flex gap-8 lg:flex-row flex-col items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-80 w-full flex-none">
                <Image
                  src={sesion.imagen}
                  alt={sesion.alt}
                  width={320}
                  height={360}
                  className="rounded-2xl object-cover w-full aspect-4/5"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <span className="text-white-v1/40 font-quirk text-7xl leading-none">
                  {sesion.numero}
                </span>
                <p className="text-brown-v2 font-century-gothic text-sm font-semibold uppercase tracking-wider">
                  {sesion.fecha} · 3 horas
                </p>
                <h3 className="text-white-v1 font-century-gothic font-bold sm:text-3xl text-xl leading-tight uppercase">
                  {sesion.titulo}
                </h3>
                <p className="text-white-v1 font-century-gothic sm:text-lg text-base leading-7">
                  {sesion.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DIRIGIDO A */}
      <section className="bg-green-v2 py-16 sm:px-24 px-8">
        <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl text-center mb-12">
          DIRIGIDO A
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-6">
          {publico.map((item, index) => (
            <div key={index} className="bg-white-v1 rounded-2xl p-6 flex gap-4 items-start">
              <span className="text-4xl flex-none">{item.icono}</span>
              <div>
                <h3 className="text-green-v1 font-century-gothic font-bold sm:text-xl text-lg uppercase mb-1">
                  {item.titulo}
                </h3>
                <p className="text-green-v1 font-century-gothic sm:text-base text-sm leading-6">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-green-v1 font-century-gothic sm:text-lg text-base max-w-4xl mx-auto mt-10 text-center leading-8">
          Brindar una comprensión actualizada, clara y aplicable de la neurodivergencia, de modo que los participantes
          puedan identificar mejor sus manifestaciones, comprender qué factores producen malestar y contar con criterios
          prácticos para acompañar de forma más humana, sensible e inclusiva.
        </p>
      </section>

      {/* EXPOSITOR */}
      <section className="bg-brown-v2 py-16 sm:px-24 px-8">
        <h2 className="text-white-v1 font-quirk sm:text-6xl text-4xl text-center mb-12">
          EXPOSITOR
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-10 items-center">
          <div className="sm:w-96 w-72 flex-none">
            <Image
              src="/assets/cesar_evento.jpeg"
              alt="César Andrés Escalante Sifuentes"
              width={384}
              height={480}
              className="rounded-2xl object-cover w-full aspect-3/4"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white-v1 font-quirk sm:text-4xl text-2xl uppercase">
              César Andrés Escalante Sifuentes
            </h3>
            <p className="text-white-v1 font-century-gothic sm:text-lg text-base leading-8 sm:leading-10">
              Neuropsicólogo y psicoterapeuta, referente clínico dentro del ecosistema EADES.
              Especializado en el estudio y acompañamiento de personas neurodivergentes, su trabajo
              integra comprensión clínica, neurociencia aplicada y una mirada profundamente humana
              sobre los procesos del desarrollo, la salud mental y el acompañamiento familiar.
            </p>
            <p className="text-white-v1 font-century-gothic sm:text-lg text-base leading-8 sm:leading-10">
              En este seminario propone una lectura que conecta neurociencia, práctica educativa y
              vida cotidiana, para convertir conceptos complejos en herramientas útiles para quienes
              acompañan a niños y adolescentes neurodivergentes.
            </p>
          </div>
        </div>
      </section>

      {/* NOS AVALAN */}
      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <h2 className="text-green-v1 font-quirk sm:text-6xl text-4xl text-center mb-4 uppercase">
          Formación con reconocimiento internacional
        </h2>
        <p className="text-green-v1 font-century-gothic sm:text-lg text-base text-center mb-14 max-w-3xl mx-auto leading-8">
          Este seminario cuenta con el respaldo de organismos internacionales de reconocida trayectoria en psicología y psicoterapia.
        </p>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 grid-cols-1 gap-8">
          {avales.map((aval, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-5">
              <div className="w-36 h-36 flex items-center justify-center">
                <Image
                  src={aval.imagen}
                  alt={aval.alt}
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-green-v1 font-century-gothic font-bold sm:text-base text-sm text-center uppercase leading-snug">
                {aval.nombre}
              </h3>
              <p className="text-green-v1 font-century-gothic sm:text-base text-sm text-center leading-7">
                {aval.descripcion}
              </p>
              <a
                href={aval.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-green-v1 text-white-v1 font-century-gothic font-semibold text-sm px-5 py-2 rounded-xl hover:bg-green-v2 transition-colors flex items-center gap-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={aval.bandera} alt={aval.banderaAlt} width={20} height={14} className="rounded-sm" />
                Ir al enlace
              </a>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-14 bg-green-v1 rounded-2xl p-8 flex flex-col gap-4">
          <h3 className="text-brown-v2 font-quirk sm:text-3xl text-2xl text-center">
            QUÉ SIGNIFICA PARA TI
          </h3>
          <p className="text-white-v1 font-century-gothic sm:text-lg text-base text-center leading-8">
            Que recibirás una formación respaldada internacionalmente, con estándares de calidad reconocidos, aplicable tanto en el aula, en casa o en la práctica profesional.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-v1 py-16 sm:px-24 px-8 flex flex-col items-center gap-6">
        <h2 className="text-white-v1 font-quirk sm:text-6xl text-4xl text-center">
          RESERVA TU LUGAR
        </h2>
        <p className="text-white-v1 font-century-gothic sm:text-xl text-base text-center max-w-xl leading-8">
          Cupos limitados. Junio 2026 · 3 sábados · 3 horas cada sesión.
          <br />
          Presencial en Miraflores · También disponible en modalidad virtual.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=51966968791&text=Hola,%20quisiera%20inscribirme%20al%20seminario%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico"
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
