"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPseres from "@/components/ModalPseres";

// Interfaz para el estado del módulo
interface Modulo {
  titulo: string;
  respuesta: string;
}

const arrayModulo = [
  {
    titulo: "Taller de capacitación sobre educación inclusiva",
    respuesta:
      "El problema de la legislación educativa es que existe una ley que exige a los colegios que haya una inclusión de alumnos neuro diversos. Sin embargo, muchas instituciones no cuentan con docentes correctamente capacitados o espacios diseñados para manejar alumnos con estas necesidades. Frente a esto, buscamos orientar a educadores y cuidadores a lidiar con los estudiantes que presentan una condición neurodivergente, específicamente trastornos del aprendizaje, TDAH y TEA.  ",
  },
  {
    titulo: "Taller para capacitar a docentes en problemáticas emocionales",
    respuesta:
      "Buscamos concientizar sobre la importancia de manejar un abanico de herramientas psicoeducativas y potenciar los recursos internos de los docentes para abordar a niños con dificultades emocionales, las cuales se manifiestan a través de problemas de conducta y/o en el rendimiento académico.  ",
  },
  {
    titulo:
      "Talleres para estudiantes sobre bienestar emocional y manejo del estrés",
    respuesta:
      "Diseñados para proporcionar a los estudiantes herramientas y estrategias para regular sus estados emocionales y manejar el estrés o la ansiedad de manera efectiva. Los participantes irán aprendiendo a identificar y gestionar sus emociones, desarrollar resiliencia frente a las adversidades e identificar los recursos y características que los hacen únicos dentro de la escuela.",
  },
  {
    titulo: "Talleres para padres y madres que trabajan",
    respuesta:
      "Buscamos crear un espacio dónde los padres puedan hablar, sentirse escuchados y contenidos. Se busca fomentar la reflexión grupal e individual; además de crear estrategias conjuntas para fortalecer los vínculos familiares, gestionar el tiempo y equilibrar responsabilidades. ",
  },
];

export default function TalleresContent() {
  const [open, setOpen] = useState(false);
  const [modulo, setModulo] = useState<Modulo>({
    titulo: "",
    respuesta: "",
  });

  return (
    <>
      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-5 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6">
            FOMENTANDO UNA COMUNIDAD EDUCATIVA CONSCIENTE Y PREPARADA
          </h2>
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start">
            <Image
              src="/assets/form_terapeutica.jpg"
              alt="TALLERES PARA COLEGIOS E INSTITUCIONES"
              width={384} // w-96
              height={450} // md:h-[450px]
              className="w-96 md:h-[450px] aspect-square object-cover object-center rounded-lg m-auto flex-none md:mr-6"
            />
            <article className="font-century-gothic flex flex-col flex-auto justify-between lg:text-xl text-sm">
              <p className="lg:leading-9 md:leading-7 mb-4">
                En Pseres, estamos comprometidos con la sensibilización y
                abordaje de diversas problemáticas actuales relacionadas con la
                crianza y la educación. Nuestro equipo de especialistas trabaja
                de la mano con instituciones educativas, ofreciendo asesoría a
                través de capacitaciones, charlas y talleres personalizados,
                dirigidos a padres, educadores y tutores, adaptados a las
                necesidades específicas de cada centro educativo. Algunos de los
                talleres que ofrecemos son:
              </p>
              <ul className="bg-brown-v2/15 bg-opacity-15 p-6 space-y-5 font-century-gothic font-semibold w-fit rounded-2xl lg:text-lg text-sm justify-start items-start text-left">
                {arrayModulo.map((val, index) => (
                  <li key={index}>
                    <button
                      className="cursor-pointer transition-all hover:scale-95 text-left"
                      onClick={() => {
                        setModulo(val);
                        setOpen(true);
                      }}
                    >
                      {val.titulo}{" "}
                      <FontAwesomeIcon icon={faPlus} bounce />
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </article>
      <ModalPseres open={open} setOpen={setOpen}>
        <Typography variant="h6" component="h2" fontFamily="'Century Gothic'">
          {modulo.titulo}
        </Typography>
        <Typography fontFamily="'Century Gothic'" sx={{ mt: 2 }}>
          {modulo.respuesta}
        </Typography>
      </ModalPseres>
    </>
  );
}
