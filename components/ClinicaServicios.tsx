"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

import ModalPseres from "@/components/ModalPseres";
import dataClin from "@/public/data/clinicaServ.json";

// Interfaz para tipar el estado del módulo
interface Modulo {
  titulo: string;
  tipo: string;
  contenido: string[];
}

export default function ClinicaServicios() {
  const [open, setOpen] = useState(false);
  const [modulo, setModulo] = useState<Modulo>({
    titulo: "",
    tipo: "",
    contenido: [],
  });

  return (
    <>
      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-5 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <div className="pt-3 flex gap-4 md:flex-row flex-col md:justify-start justify-center">
            <Image
              src="/assets/clinicaPseres2.jpg"
              alt="Terapias en Clínica PSERES"
              width={384}
              height={420}
              className="object-cover object-center rounded-lg m-auto flex-none md:mr-6"
            />
            <article className="font-century-gothic flex sm:justify-start justify-center flex-col sm:flex-row">
              <ul className="bg-brown-v2/15 bg-opacity-15 p-6 space-y-5 font-century-gothic font-semibold w-fit rounded-2xl sm:text-left flex flex-col items-start wrap-break-word">
                {(dataClin as Modulo[]).map((val, index) => (
                  <li key={index} className="flex">
                    <button
                      className="cursor-pointer transition-all hover:scale-95 lg:text-lg text-sm text-left"
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
        <Typography variant="h6" component="h2" fontFamily="'Century Gothic'">
          {modulo.titulo}
        </Typography>
        {modulo.tipo === "texto" ? (
          <>
            {modulo.contenido.map((val, i) => (
              <p
                className="font-century-gothic text-white text-sm py-3"
                key={i}
              >
                {val}
              </p>
            ))}
          </>
        ) : (
          <>
            <ul className="font-century-gothic list-disc text-sm py-3 pl-4 flex flex-col gap-3">
              {modulo.contenido.map((val, i) => {
                const partes = val.split(":");
                return (
                  <li key={i}>
                    <b>{partes[0]}:</b>
                    {partes.slice(1).join(":")}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </ModalPseres>
    </>
  );
}
