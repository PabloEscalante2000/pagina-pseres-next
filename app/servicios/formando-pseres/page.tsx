"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ModalPseres from "@/components/ModalPseres";

// Interfaz para mejorar la seguridad de tipos del estado
interface Modulo {
  titulo: string;
  respuesta: string;
}

export default function FormandoPseres() {
  const [open, setOpen] = useState(false);
  const [modulo, setModulo] = useState<Modulo>({
    titulo: "",
    respuesta: "",
  });

  const arrayModulo = [
    {
      titulo: "Módulo 1: Neuroaprendizaje aplicado",
      respuesta:
        "Busca optimizar la memoria, atención y motivación, tomando en cuenta factores emocionales y fisiológicos que afectan el aprendizaje. Se basa en brindar un aprendizaje personalizado, siguiendo los ritmos y estilos que hacen único a cada estudiante.",
    },
    {
      titulo: "Módulo 2: Lectura y socialización",
      respuesta:
        "Son procesos fundamentales que impulsan el desarrollo cognitivo y social de los niños. La lectura fomenta un intercambio de culturas y de ideales diversos, que permiten desarrollar un pensamiento crítico e integrador. En conjunto, estos procesos son esenciales para el desarrollo integral de las personas en una sociedad, ya que facilitan su crecimiento tanto a nivel personal como social.",
    },
    {
      titulo: "Módulo 3: Técnicas de estudio",
      respuesta:
        "Basado en principios de neurociencias y pedagogía cognitiva, fomentamos en los estudiantes el desarrollo de hábitos de estudio que maximicen la síntesis, comprensión y retención de información, así como la mejora de la gestión del tiempo.",
    },
  ];

  return (
    <div className="bg-white-v1">
      {/* La gestión de metadatos (Helmet) se elimina. Se recomienda hacerlo en un layout.tsx */}
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
      <div className="py-6 sm:px-3 px-1 ">
        <h2 className="text-center font-quirk lg:text-7xl text-5xl text-green-v1 sm:px-24 px-8 leading-9 lg:leading-11 pb-2">
          SERVICIOS DEL PROGRAMA FORMANDO PSERES
        </h2>
        <p className="text-green-v1 text-center font-century-gothic max-w-[825px] m-auto font-semibold sm:px-24 px-8">
          Tutoría académica y acompañamiento - Programa de orientación
          vocacional Terapias para desarrollar estrategias del aprendizaje
        </p>
      </div>
      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-5 my-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6">
            I. TUTORIA ACADÉMICA Y ACOMPAÑAMIENTO
          </h2>
          <div className="pt-3 flex gap-4 lg:flex-row flex-col lg:justify-start pb-3">
            <Image
              src="/assets/flores.jpg"
              alt="TUTORIA ACADÉMICA Y ACOMPAÑAMIENTO - PSERES"
              width={384}
              height={420}
              className="object-cover object-center rounded-2xl m-auto flex-none lg:mr-6"
            />
            <article className="font-century-gothic flex flex-col justify-between">
              <div>
                <h3 className="lg:text-2xl text-lg font-semibold mb-4">
                  1. Evaluación Previa
                </h3>
                <p className="lg:text-lg text-sm mb-4">
                  Proceso que permitirá identificar los aspectos emocionales que
                  interfieren en el rendimiento académico y las dificultades
                  cognitivas que podrían impactar en el bienestar emocional y en
                  el rendimiento escolar.{" "}
                </p>
              </div>
              <div>
                <h3 className="lg:text-2xl text-lg font-semibold mb-4">
                  2. Psicoterapia
                </h3>
                <p className="lg:text-lg text-sm">
                  Nuestro enfoque terapéutico integra diversas corrientes
                  psicológicas y se centra en las necesidades únicas de cada
                  niño (PSER), respetando sus ritmos y singularidades.
                </p>
                <p className="lg:text-lg text-sm underline">
                  Principales objetivos de la psicoterapia en este programa:
                </p>
                <ul className="list-disc lg:text-lg text-sm flex flex-col gap-1 py-3 list-inside">
                  <li>Identificar y regular los estados emocionales</li>
                  <li>Fortalecer la autoestima y la confianza </li>
                  <li>Intervenir en problemas emocionales específicos </li>
                  <li>Fomentar la conexión con el entorno académico</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="flex gap-4 lg:flex-row flex-col lg:justify-stretch py-9">
            <Image
              src="/assets/carr_img11.jpg"
              alt="Nivelación y Potenciación Académica - PSERES"
              width={384}
              height={420}
              className="object-cover object-center rounded-2xl m-auto flex-none lg:mr-6"
            />
            <article className="font-century-gothic flex flex-col justify-between">
              <div>
                <h3 className="lg:text-2xl text-lg font-semibold mb-4">
                  3. Nivelación y Potenciación Académica
                </h3>
                <p className="lg:text-lg text-sm py-2 ">
                  Nuestro programa ofrece tutoría académica especializada que no
                  solo apoya en la realización y seguimiento de las tareas
                  escolares, sino que también impulsa en cada niño habilidades
                  clave como el pensamiento crítico, la resolución de problemas
                  y la autorregulación. Con un enfoque personalizado, ayudamos a
                  cada estudiante a desarrollar competencias para su futuro,
                  elevando sus capacidades académicas y cognitivas.
                  <br />
                </p>
              </div>
              <b className="lg:text-lg text-sm pb-4">Consta de 3 módulos:</b>
              <ul className="bg-brown-v2/15 bg-opacity-15 p-6 space-y-5 font-century-gothic font-semibold w-fit rounded-2xl lg:text-lg text-sm">
                {arrayModulo.map((val, index) => (
                  <li key={index}>
                    <button
                      className="cursor-pointer transition-all hover:scale-95 text-left"
                      onClick={() => {
                        setModulo(val);
                        setOpen(true);
                      }}
                    >
                      <span className="text-left">
                        {val.titulo}{" "}
                        <FontAwesomeIcon icon={faPlus} bounce />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="pt-3 flex gap-4 lg:flex-row flex-col lg:justify-stretch">
            <Image
              src="/assets/gimnasia_emocional.jpg"
              alt="Gimnasio emocional"
              width={384}
              height={384}
              className="object-cover object-center rounded-2xl m-auto flex-none lg:mr-6"
            />
            <article className="font-century-gothic flex flex-col justify-start">
              <div>
                <h3 className="lg:text-2xl text-lg font-semibold mb-4">
                  4. Gimnasio emocional
                </h3>
                <p className="lg:text-lg text-sm">
                  Es un espacio diseñado para el desarrollo de habilidades
                  socioemocionales en niños y jóvenes, enfocado en fortalecer
                  competencias emocionales clave. Buscamos que los niños
                  crezcan no solo como estudiantes, sino como personas
                  emocionalmente equilibradas, solidarias, seguras y autónomas.
                </p>
                <p className="lg:text-lg text-sm pt-7 pb-3">
                  <b>Trabajaremos cinco dimesiones:</b>
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2 list-disc list-inside lg:text-lg text-sm">
                <li>Dimensión de autorregulación</li>
                <li>Dimensión de autoconciencia </li>
                <li>Dimensión de manejo de conflictos </li>
                <li>Dimensión de autoestima</li>
                <li>Dimensión de autorreflexión</li>
              </ul>
            </article>
          </div>
        </section>
      </article>
      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-5 my-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6">
            II. PROGRAMA DE ORIENTACIÓN VOCACIONAL: CREANDO MI CAMINO
          </h2>
          <div className="pt-3 flex gap-4 lg:flex-row flex-col lg:justify-stretch">
            <Image
              src="/assets/formando_pt2.jpg"
              alt="Programa de orientación vocacional"
              width={384}
              height={384}
              className="object-cover object-center rounded-2xl m-auto flex-none lg:mr-6"
            />
            <article className="font-century-gothic flex flex-col">
              <div className="lg:text-lg text-sm">
                <h3 className="font-semibold pb-4">
                  Niños a partir de 8 años en adelante
                </h3>
                <p className="">
                  Mediante juegos, actividades creativas y espacios de
                  reflexión, se anima a los niños a explorar diversas áreas de
                  interés, descubriendo así sus talentos y capacidades. Esto
                  promueve un sentido de propósito y autoconocimiento.
                </p>
                <p>
                  El programa fomenta la toma de decisiones desde una edad
                  temprana, preparándolos para enfrentar los desafíos del futuro
                  con mayor confianza y claridad. Asimismo, desarrolla una
                  mentalidad abierta y flexible, capacitándolos para aprovechar
                  las oportunidades que surjan a lo largo de su vida y para
                  poder hacerle frente a los cambios.
                </p>
              </div>
            </article>
          </div>
        </section>
      </article>
      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-5  my-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6">
            III. TERAPIAS PARA DESARROLLAR ESTRATEGIAS DE APRENDIZAJE
          </h2>
          <div className="pt-3 flex gap-4 lg:flex-row flex-col lg:justify-stretch">
            <Image
              src="/assets/formPseres6.jpg"
              alt="TERAPIAS PARA DESARROLLAR ESTRATEGIAS DE APRENDIZAJE"
              width={384}
              height={384}
              className="object-cover object-center rounded-2xl m-auto flex-none lg:mr-6"
            />
            <article className="font-century-gothic flex flex-col">
              <div>
                <p className="lg:text-lg text-sm">
                  El objetivo es que los niños identifiquen y aprovechen sus
                  propios recursos; proporcionándoles herramientas para mejorar
                  la organización y ejecución de sus tareas. Estas terapias
                  están diseñadas para ayudar a los estudiantes a mejorar sus
                  habilidades cognitivas y académicas mediante un enfoque
                  personalizado. Se trabaja en la identificación de las
                  fortalezas y debilidades de cada niño, para luego implementar
                  estrategias que fomenten un aprendizaje más efectivo y
                  adaptado a sus necesidades.
                </p>
                <p className="lg:text-lg text-sm pt-4">
                  <b>Dificultades que abordamos:</b>
                </p>
              </div>
              <ul className="list-disc list-inside lg:text-lg text-sm p-6">
                <li>
                  Dislexia (Dificultades para leer y procesar el lenguaje
                  escrito)
                </li>
                <li>
                  Disgrafía (Dificultad para escribir de manera clara y legible)
                </li>
                <li>
                  Lenguaje (Dificultades en el lenguaje expresivo y
                  comprensivo)
                </li>
                <li>Estimulación Congnitiva</li>
              </ul>
            </article>
          </div>
        </section>
      </article>
      <Footer />
      <ModalPseres open={open} setOpen={setOpen}>
        <Typography variant="h6" component="h2" fontFamily="'Century Gothic'">
          {modulo.titulo}
        </Typography>
        <Typography fontFamily="'Century Gothic'" sx={{ mt: 2 }}>
          {modulo.respuesta}
        </Typography>
      </ModalPseres>
    </div>
  );
}
