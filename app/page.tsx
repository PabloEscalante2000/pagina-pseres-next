"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dataNS from "@/public/data/nuestros_servicios.json";
import NSBlock from "@/components/NSBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleRight,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Footer from "@/components/Footer";
import ModalPseres from "@/components/ModalPseres";
import { useStore } from "@/store/NavStore";
import LineaVerde from "@/components/LineaVerde";
import LineaNaranja from "@/components/LineaNaranja";
import CarruselBlockLg from "@/components/CarruselBlockLg";
import CarruselBlockSm from "@/components/CarruselBlockSm";
import CarruselProfLg from "@/components/CarruselProfLg";
import CarruselProfSm from "@/components/CarruselProfSm";
import dynamic from "next/dynamic";

const theme = createTheme({
  cssVariables: true,
  typography: {
    htmlFontSize: 15,
    fontFamily: ["'Century Gothic'", "sans-serif"].join(","),
    fontSize: 12,
  },
  palette: {
    text: {
      primary: "#F6F1E1",
      secondary: "#F6F1E1",
    },
    primary: {
      main: "#F6F1E1",
    },
    background: {
      paper: "#333333", // Fondo oscuro para el menú desplegable
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#F6F1E1", // Texto blanco
          "&:before": {
            borderBottomColor: "#F6F1E1 !important", // Borde blanco
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#F6F1E1", // Borde blanco al hover
          },
          "&.Mui-focused:before": {
            borderBottomColor: "#F6F1E1", // Borde blanco al enfocar
          },
        },
        icon: {
          color: "#F6F1E1", // Ícono blanco (flecha)
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#F6F1E1 !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottomColor: "#F6F1E1 !important", // Borde blanco
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#F6F1E1", // Borde blanco al hover
          },
          "&.Mui-focused:before": {
            borderBottomColor: "#F6F1E1", // Borde blanco al enfocar
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "#F6F1E1 !important", // Línea blanca
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#F6F1E1", // Hover línea blanca
          },
          "&.Mui-focused:after": {
            borderBottomColor: "#F6F1E1", // Activo línea blanca
          },
        },
      },
    },
  },
});

const CarruselHome = dynamic(() => import("@/components/CarruselHome"), {
  loading: () => <div>Cargando...</div>,
  ssr: false,
});

export default function HomePage() {
  const [servicio, setServicio] = useState("");
  const arrayServ = [
    "VERANO PSERES",
    "FORMANDO PSERES",
    "CLÍNICA DE PSERES",
    "ESCUCHANDO PSERES",
    "CRIANDO PSERES",
    "TALLERES PARA REFLEXIONAR",
  ];

  const component = useStore((state) => state.component);
  const nosotrosRef = useRef(null);
  const modeloRef = useRef(null);
  const serviciosRef = useRef(null);
  const addurl = useStore((state) => state.addurl);

  useEffect(() => {
    if (component === "nosotros" && nosotrosRef.current) { // Check if current is not null
      (nosotrosRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    } else if (component === "modelo" && modeloRef.current) { // Check if current is not null
      (modeloRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    } else if (component === "servicios" && serviciosRef.current) { // Check if current is not null
      (serviciosRef.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    addurl("");
  }, [addurl, component]);

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
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState({
    pregunta: "",
    respuesta: "",
  });

  return (
    <div className="overflow-x-hidden">
      <section className="h-screen w-screen">
        <CarruselHome />
      </section>
      <div className="py-5 bg-white-v1">
        <h2 className="text-green-v1 lg:text-7xl sm:text-5xl text-4xl font-quirk text-center pt-8 sm:mb-0 -mb-12">
          PSERES A LOS QUE AYUDAMOS
        </h2>

        <article className=" w-screen md:px-24 px-8 m-auto">
          <CarruselBlockLg />
          <CarruselBlockSm />
        </article>

        <h2
          className="text-green-v1 lg:text-7xl sm:text-5xl text-4xl font-quirk text-center pt-5 pb-2"
          ref={serviciosRef}
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
          ref={modeloRef}
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
        <div
          className="bg-center bg-cover sm:p-7 sm:py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${"/assets/reserva_tu_cita.jpg"})`,
          }}
        >
          <h2 className="uppercase font-quirk lg:text-7xl text-5xl text-white-v1 text-center pb-5">
            Reserva tu cita aquí
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-5">
            <div className="bg-black/15 p-5 rounded-lg text-white font-century-gothic space-y-4">
              <ThemeProvider theme={theme}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <TextField
                    aria-label="Nombre"
                    label="Nombre"
                    variant="standard"
                    className="w-48"
                  />
                  <TextField
                    aria-label="Apellido"
                    label="Apellido"
                    variant="standard"
                    className="w-48"
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <TextField
                    aria-label="Correo Electrónico"
                    label="Correo"
                    variant="standard"
                    className="w-48"
                  />
                  <FormControl variant="standard" className="flex-">
                    <InputLabel style={{ color: "#ffffff" }}>
                      Servicio
                    </InputLabel>
                    <Select
                      value={servicio}
                      aria-label="Servicio"
                      onChange={(e) => setServicio(e.target.value)}
                      label="Servicio"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ffffff",
                          width: "48px",
                          maxWidth: "48px",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {arrayServ.map((e, index) => (
                        <MenuItem key={index} value={e}>
                          {e}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    aria-label="Celular"
                    label="Celular"
                    variant="standard"
                    className="w-48"
                  />
                </div>
                <div>
                  <TextField
                    aria-label="Mensaje"
                    label="Mensaje"
                    multiline
                    rows={4}
                    variant="standard"
                    fullWidth
                  />
                </div>
                <div>
                  <Button variant="outlined">Enviar</Button>
                </div>
              </ThemeProvider>
            </div>
            <div className="max-w-[500px] flex flex-col justify-around p-6">
              <div>
                <Image
                  width={100}
                  height={100}
                  className="h-10 w-auto pb-3 flex-none"
                  src={"/assets/pseres_logo.png"}
                  alt="PSERES"
                />
              </div>
              <div className="flex justify-center items-center ml-6">
                <p className="font-century-gothic sm:text-[20px] text-sm leading-6 text-white-v1 flex-auto my-4">
                  Creemos en la importancia de darles a los niños un espacio de
                  equilibrio en el que amplifiquen sus habilidades cognitivas y
                  busquen su crecimiento espiritual, además de formar su ética y
                  valores personales.
                </p>
              </div>
              <div className="text-white-v1 font-century-gothic sm:text-[20px] text-sm leading-6 flex flex-col flex-none ml-6">
                <span>
                  <FontAwesomeIcon icon={faWhatsapp} /> +51 966 968 791
                </span>
                <span>
                  <FontAwesomeIcon icon={faInstagram} /> @centropseres.pe
                </span>
                <span>
                  <FontAwesomeIcon icon={faFacebook} /> Pseres: Psicoterapia y
                  Psicoeducación
                </span>
                <span>
                  <FontAwesomeIcon icon={faMailBulk} /> pseresperu@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-v1 pt-16" ref={nosotrosRef}>
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
        </div>
        <ModalPseres open={open} setOpen={setOpen}>
          <Typography variant="h6" component="h2" fontFamily="'Century Gothic'">
            {sel.pregunta}
          </Typography>
          <Typography fontFamily="'Century Gothic'" sx={{ mt: 2 }}>
            {sel.respuesta}
          </Typography>
        </ModalPseres>
      </div>
      <Footer />
    </div>
  );
}
