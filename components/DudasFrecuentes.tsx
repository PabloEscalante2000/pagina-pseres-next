"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import ModalPseres from "@/components/ModalPseres";

const arrayPreguntas = [
  {
    pregunta: "¿Cómo es la primera sesión?",
    respuesta: "La primera sesión es exploratoria",
  },
  {
    pregunta: "¿Cuánto cuesta y cuánto tiempo dura?",
    respuesta:
      "Las sesiones duran 45 minutos y tienen un precio que varía dependiendo de la necesidad de cada paciente. ",
  },
  {
    pregunta: "¿Qué enfoque se trabaja en las sesiones?",
    respuesta:
      "Nuestras terapias tienen 3 principales enfoques: el enfoque psicoanalítico, la dialéctica-conductual, el enfoque sistémico y el neurocognitivo postracionalista.",
  },
  {
    pregunta: "¿Los padres participan en las sesiones?",
    respuesta:
      "¡Claro que si! Es fundamental la participación de los padres. Sin embargo, esto se hace en sesiones separadas.",
  },
  {
    pregunta: "¿Cada cuánto tiempo debo llevar a mi hijo?",
    respuesta:
      "La frecuencia de la terapia va a depender del diagnóstico que reciba cada niño. Nuestro equipo se asegurará de brindar un plan de tratamiento adecuado para cada caso.",
  },
  {
    pregunta: "¿Puedo agendar si soy menor de edad?",
    respuesta:
      "Puedes agendar si eres menor de edad, pero necesitaremos que te acerques a nuestras instalaciones acompañado de un tutor o adulto responsable.",
  },
];

export default function DudasFrecuentes() {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState({
    pregunta: "",
    respuesta: "",
  });

  return (
    <>
      <h2 className="uppercase font-quirk lg:text-7xl text-5xl leading-9 lg:leading-11 text-green-v1 text-center sm:pt-20 sm:pb-10 pt-10 pb-5 sm:px-24 px-8">
        Resolviendo tus dudas
      </h2>
      <div className="flex lg:justify-start justify-center lg:items-stretch items-center lg:flex-row flex-col-reverse gap-5 w-screen mb-9">
        <div className="relative lg:w-[50%] w-2/3 sm:h-[637px] aspect-square">
          <Image
            src={"/assets/preguntas_frecuentes.jpg"}
            alt="PSERES Preguntas"
            className="object-cover object-center rounded-tr-3xl"
            fill
            sizes="(max-width: 1024px) 66vw, 50vw"
          />
        </div>
        <div className="grid xl:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 grid-cols-1 sm:gap-8 gap-4 p-6 justify-center items-center">
          {arrayPreguntas.map((val, index) => (
            <div
              key={index}
              className="sm:w-[207px] sm:h-[204px] flex sm:flex-col sm:justify-center sm:items-center sm:gap-0 gap-2 flex-row justify-between w-full shadow-md rounded-[25px] sm:px-5 px-5 py-5 bg-brown-v2/15 bg-opacity-15"
            >
              <div className="flex-auto flex sm:justify-center sm:items-center">
                <p className="text-left text-brown-v1 font-century-gothic  sm:text-md text-[17px] font-semibold">
                  {val.pregunta}
                </p>
              </div>
              <button
                className="transition-all sm:shadow-lg hover:scale-95 text-white font-century-gothic sm:text-lg text-[15px] font-semibold sm:bg-brown-v2 sm:w-[158px] sm:h-[31px] rounded-lg  flex justify-center items-center"
                aria-label="Más información"
                onClick={() => {
                  setSel(val);
                  setOpen(true);
                }}
              >
                <span className="sm:block hidden">Más información</span>
                <span className="sm:hidden block text-brown-v1 text-xl">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ModalPseres open={open} setOpen={setOpen}>
        <Typography variant="h6" component="h2" fontFamily="'Century Gothic'">
          {sel.pregunta}
        </Typography>
        <Typography fontFamily="'Century Gothic'" sx={{ mt: 2 }}>
          {sel.respuesta}
        </Typography>
      </ModalPseres>
    </>
  );
}

