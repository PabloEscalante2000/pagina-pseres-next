"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalPseres from "@/components/ModalPseres";
import dataEval from "@/public/data/evaluacionesServ.json";

interface Variante {
  nombre: string | null;
  descripcion: string | null;
  sesiones: string;
  evalua: string[] | null;
  evalua_secciones: { nombre: string; items: string[] }[] | null;
  incluye: string;
  precio: string;
}

interface Evaluacion {
  titulo: string;
  recomendado: boolean;
  variantes: Variante[];
}

const evaluacionesInfo = [
  {
    imagen: "/assets/pseres_servicio_evaluaciones.webp",
    alt: "Evaluación de Aprendizaje Express - PSERES",
    descripcion:
      "Una evaluación rápida y especializada para identificar el nivel de desarrollo de habilidades académicas esenciales. Disponible en versión Básica (6-7 años) y Completa (8 años en adelante), evalúa lectura, matemática, atención y escritura. Incluye informe breve orientativo y devolución verbal.",
  },
  {
    imagen: "/assets/carr_img3_new.jpg",
    alt: "Evaluación Cognitiva Express - PSERES",
    descripcion:
      "Permite conocer el funcionamiento intelectual y cognitivo del niño mediante instrumentos especializados. Evalúa coeficiente intelectual, razonamiento, memoria de trabajo y velocidad de procesamiento. Incluye sesión de devolución e informe orientativo.",
  },
  {
    imagen: "/assets/carr_img15.jpg",
    alt: "Pack Aprendizaje + Cognitiva - PSERES",
    descripcion:
      "Nuestra opción más completa: combina la evaluación de habilidades académicas con el perfil cognitivo en un solo proceso. Ideal para obtener una visión integral del potencial y las necesidades del niño. Incluye informe completo y devolución profesional.",
  },
  {
    imagen: "/assets/formando_pt2.jpg",
    alt: "Descarte de Ansiedad y Depresión - PSERES",
    descripcion:
      "Evaluación especializada para identificar indicadores emocionales que puedan estar afectando el bienestar y el desempeño del niño. Evalúa estado emocional, síntomas de ansiedad y depresión, funcionamiento conductual y adaptación emocional. Disponible para niños mayores de 7 años.",
  },
  {
    imagen: "/assets/psicoterapia_familiar.jpg",
    alt: "Evaluación Conductual Socioemocional Express - PSERES",
    descripcion:
      "Brinda una mirada integral del comportamiento y las habilidades socioemocionales del niño. Evalúa conducta, ansiedad, depresión, habilidades socioemocionales y adaptación conductual. Incluye informe completo y devolución profesional. Disponible para niños mayores de 7 años.",
  },
  {
    imagen: "/assets/formando_pt2.jpg",
    alt: "Orientación Vocacional - PSERES",
    descripcion:
      "Acompaña a adolescentes desde los 12 años en el descubrimiento de sus intereses, aptitudes y perfil personal. Evalúa personalidad, intereses profesionales, razonamiento lógico y aptitudes específicas. Incluye informe vocacional completo y sesión de devolución.",
  },
];

const colores = [
  { bg: "bg-brown-v2/15", text: "text-brown-v1" },
  { bg: "bg-green-v2/15", text: "text-green-v1" },
];

export default function EvaluacionesServicios() {
  const [open, setOpen] = useState(false);
  const [evaluacion, setEvaluacion] = useState<Evaluacion | null>(null);

  return (
    <>
      <div className="py-6 sm:px-3 px-1">
        <h2 className="text-center font-quirk lg:text-7xl text-5xl text-green-v1 sm:px-24 px-8 leading-9 lg:leading-11 pb-2">
          EVALUACIONES ESPECIALIZADAS
        </h2>
        <p className="text-green-v1 text-center font-century-gothic max-w-[825px] m-auto font-semibold sm:px-24 px-8">
          Evalúa el desarrollo y bienestar de tu hijo de forma ágil y profesional
        </p>
      </div>

      {(dataEval as Evaluacion[]).map((val, index) => {
        const info = evaluacionesInfo[index];
        const color = colores[index % 2];
        const imageRight = index % 2 !== 0;

        return (
          <article
            key={index}
            className={`${color.bg} ${color.text} font-century-gothic py-5 my-3 rounded-xl shadow-lg`}
          >
            <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
              <h2 className="font-quirk sm:text-5xl text-3xl sm:leading-9 leading-6 mb-4">
                {val.titulo.toUpperCase()}
                {val.recomendado && (
                  <span className="ml-3 text-sm font-century-gothic font-normal bg-brown-v2 text-white-v1 px-3 py-1 rounded-full align-middle">
                    Recomendado
                  </span>
                )}
              </h2>
              <div
                className={`pt-3 flex gap-6 lg:flex-row flex-col lg:justify-start pb-5 ${
                  imageRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={info.imagen}
                  alt={info.alt}
                  width={384}
                  height={420}
                  className="object-cover object-center rounded-2xl m-auto flex-none lg:mx-6"
                />
                <article className="font-century-gothic flex flex-col justify-between gap-6">
                  <p className="lg:text-lg text-sm leading-7">{info.descripcion}</p>
                  <button
                    className="cursor-pointer transition-all hover:scale-95 lg:text-lg text-sm text-left font-semibold w-fit flex items-center gap-2"
                    onClick={() => {
                      setEvaluacion(val);
                      setOpen(true);
                    }}
                  >
                    Ver detalles y precios{" "}
                    <FontAwesomeIcon icon={faPlus} bounce />
                  </button>
                </article>
              </div>
            </section>
          </article>
        );
      })}

      <div className="flex justify-center py-8">
        <a
          className="px-8 py-3 rounded-xl bg-brown-v2 text-white-v1 font-century-gothic font-semibold text-lg transition-all hover:scale-95"
          href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar una Cita
        </a>
      </div>

      <ModalPseres open={open} setOpen={setOpen}>
        {evaluacion && (
          <>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="'Century Gothic'"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              {evaluacion.titulo}
            </Typography>

            {evaluacion.variantes.map((v, i) => (
              <div key={i} className={i > 0 ? "mt-4 pt-4 border-t border-white/30" : ""}>
                {v.nombre && (
                  <p className="font-century-gothic font-bold text-sm">
                    {v.nombre}
                    {v.descripcion && (
                      <span className="font-normal"> — {v.descripcion}</span>
                    )}
                  </p>
                )}
                {!v.nombre && v.descripcion && (
                  <p className="font-century-gothic text-sm italic">{v.descripcion}</p>
                )}

                <p className="font-century-gothic text-sm mt-1">{v.sesiones}</p>

                <p className="font-century-gothic text-sm font-semibold mt-2">Evalúa:</p>

                {v.evalua && (
                  <ul className="font-century-gothic list-disc text-sm pl-4 flex flex-col gap-1 mt-1">
                    {v.evalua.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}

                {v.evalua_secciones && (
                  <div className="mt-1 flex flex-col gap-2">
                    {v.evalua_secciones.map((sec, j) => (
                      <div key={j}>
                        <p className="font-century-gothic text-sm font-semibold">{sec.nombre}:</p>
                        <ul className="font-century-gothic list-disc text-sm pl-4 flex flex-col gap-1">
                          {sec.items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <p className="font-century-gothic text-sm mt-2">— {v.incluye}</p>
                <p className="font-century-gothic font-bold text-sm mt-1">{v.precio}</p>
              </div>
            ))}
          </>
        )}
      </ModalPseres>
    </>
  );
}
