"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";

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

const arrayServ = [
  "VERANO PSERES",
  "FORMANDO PSERES",
  "CLÍNICA DE PSERES",
  "ESCUCHANDO PSERES",
  "CRIANDO PSERES",
  "TALLERES PARA REFLEXIONAR",
];

export default function CitaForm() {
  const [servicio, setServicio] = useState("");

  return (
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
                <InputLabel style={{ color: "#ffffff" }}>Servicio</InputLabel>
                <Select
                  value={servicio}
                  aria-label="Servicio"
                  onChange={(e) => setServicio(e.target.value)}
                  label="Servicio"
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
  );
}

