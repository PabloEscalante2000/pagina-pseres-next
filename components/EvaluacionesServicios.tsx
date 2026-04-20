"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

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

export default function EvaluacionesServicios() {
  const [open, setOpen] = useState(false);
  const [evaluacion, setEvaluacion] = useState<Evaluacion | null>(null);

  return (
    <>
      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-5 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start justify-center">
            <Image
              src="/assets/pseres_servicio_evaluaciones.webp"
              alt="Evaluaciones especializadas PSERES"
              width={384}
              height={420}
              className="object-cover object-center rounded-lg flex-none md:mr-6 self-start"
            />
            <article className="font-century-gothic flex sm:justify-start justify-center flex-col sm:flex-row flex-1">
              <ul className="bg-brown-v2/15 bg-opacity-15 p-6 space-y-5 font-century-gothic font-semibold w-full rounded-2xl sm:text-left flex flex-col items-start wrap-break-word">
                {(dataEval as Evaluacion[]).map((val, index) => (
                  <li key={index} className="flex">
                    <button
                      className="cursor-pointer transition-all hover:scale-95 lg:text-lg text-sm text-left"
                      onClick={() => {
                        setEvaluacion(val);
                        setOpen(true);
                      }}
                    >
                      {val.titulo}
                      {val.recomendado && (
                        <span className="ml-2 text-xs font-normal bg-brown-v2 text-white-v1 px-2 py-0.5 rounded-full">
                          Recomendado
                        </span>
                      )}{" "}
                      <FontAwesomeIcon icon={faPlus} bounce />
                    </button>
                  </li>
                ))}
                <a
                  className="block text-sm px-5 py-2 rounded-lg bg-brown-v2 text-white-v1 font-century-gothic transition-all hover:scale-95 w-fit ml-auto"
                  href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar una Cita
                </a>
              </ul>
            </article>
          </div>
        </section>
      </article>

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
