"use client";

import { useState, FormEvent, ReactNode } from "react";
import Link from "next/link";

const DESTINATARIO_RECLAMOS = "pseresperu@gmail.com";

const TIPOS_DOCUMENTO = ["DNI", "Carné de Extranjería", "Pasaporte"];

const SERVICIOS = [
  "Clínica de Pseres",
  "Escuchando Pseres",
  "Criando Pseres",
  "Formando Pseres",
  "Talleres para reflexionar Pseres",
  "Evaluaciones especializadas",
  "Tutora sombra Lima",
  "Otro",
];

type Estado = "idle" | "exito";

const inputClass =
  "w-full rounded-md border border-green-v1/30 bg-white px-3 py-2 text-green-v1 focus:outline-none focus:ring-2 focus:ring-brown-v1";

function Campo({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-green-v1">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function LibroReclamacionesForm() {
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);
  const [estado, setEstado] = useState<Estado>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const valor = (campo: string) => (data.get(campo) as string | null) ?? "";

    const lineasApoderado = esMenorDeEdad
      ? [
          "",
          "Datos del padre/madre/apoderado:",
          `- Nombre: ${valor("nombre_apoderado")}`,
          `- N.° de documento: ${valor("documento_apoderado")}`,
        ]
      : [];

    const cuerpo = [
      "LIBRO DE RECLAMACIONES - PSERES",
      "",
      "1. Datos del consumidor reclamante",
      `- Nombre completo: ${valor("nombre_completo")}`,
      `- Tipo de documento: ${valor("tipo_documento")}`,
      `- N.° de documento: ${valor("numero_documento")}`,
      `- Teléfono: ${valor("telefono")}`,
      `- Correo electrónico: ${valor("email")}`,
      `- Domicilio: ${valor("domicilio")}`,
      `- ¿Es menor de edad?: ${esMenorDeEdad ? "Sí" : "No"}`,
      ...lineasApoderado,
      "",
      "2. Detalle de la reclamación",
      `- Tipo: ${valor("tipo_reclamo")}`,
      `- Servicio contratado: ${valor("servicio_contratado")}`,
      `- Monto reclamado (S/.): ${valor("monto_reclamado") || "No especifica"}`,
      `- Detalle: ${valor("detalle_reclamo")}`,
      `- Pedido del consumidor: ${valor("pedido_consumidor")}`,
    ].join("\n");

    const asunto = `Libro de Reclamaciones - ${valor("nombre_completo")}`;
    const mailtoUrl = `mailto:${DESTINATARIO_RECLAMOS}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailtoUrl;
    setEstado("exito");
  }

  if (estado === "exito") {
    return (
      <div className="rounded-lg border border-green-v1/30 bg-white-v1 p-8 text-center font-century-gothic">
        <h3 className="font-quirk text-3xl text-green-v1 mb-3">
          ¡Reclamo listo para enviar!
        </h3>
        <p className="text-green-v1 leading-7">
          Se abrió tu cliente de correo con el reclamo/queja ya redactado
          hacia {DESTINATARIO_RECLAMOS}. Por favor revisa el mensaje y
          presiona &quot;Enviar&quot; en tu correo para completar el registro.
          Te responderemos dentro de un plazo máximo de 30 días calendario,
          conforme a lo establecido por el Código de Protección y Defensa del
          Consumidor. Si no se abrió ninguna aplicación, escríbenos
          directamente a{" "}
          <a href={`mailto:${DESTINATARIO_RECLAMOS}`} className="underline">
            {DESTINATARIO_RECLAMOS}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setEstado("idle")}
          className="mt-4 rounded-lg border border-green-v1/40 px-4 py-2 text-sm text-green-v1 transition-colors hover:bg-green-v1 hover:text-white-v1"
        >
          Registrar otro reclamo
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 font-century-gothic"
    >
      <fieldset className="rounded-lg border border-green-v1/30 p-5">
        <legend className="px-2 font-bold text-green-v1">
          1. Identificación del establecimiento
        </legend>
        <p className="text-sm leading-6 text-green-v1">
          <strong>Proveedor:</strong> PSERES — Centro de Psicoterapia y
          Psicoeducación
          <br />
          <strong>Dirección:</strong> General Silva 570, Miraflores, Lima,
          Perú
        </p>
      </fieldset>

      <fieldset className="flex flex-col gap-4 rounded-lg border border-green-v1/30 p-5">
        <legend className="px-2 font-bold text-green-v1">
          2. Datos del consumidor reclamante
        </legend>

        <div className="grid gap-4 md:grid-cols-2">
          <Campo label="Nombre completo *">
            <input required name="nombre_completo" className={inputClass} />
          </Campo>
          <Campo label="Teléfono *">
            <input
              required
              type="tel"
              name="telefono"
              className={inputClass}
            />
          </Campo>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Campo label="Tipo de documento *">
            <select required name="tipo_documento" className={inputClass}>
              <option value="">Selecciona una opción</option>
              {TIPOS_DOCUMENTO.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </Campo>
          <Campo label="N.° de documento *">
            <input
              required
              name="numero_documento"
              className={inputClass}
            />
          </Campo>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Campo label="Correo electrónico *">
            <input
              required
              type="email"
              name="email"
              className={inputClass}
            />
          </Campo>
          <Campo label="Domicilio *">
            <input required name="domicilio" className={inputClass} />
          </Campo>
        </div>

        <label className="flex items-center gap-2 text-sm text-green-v1">
          <input
            type="checkbox"
            name="es_menor_de_edad"
            checked={esMenorDeEdad}
            onChange={(e) => setEsMenorDeEdad(e.target.checked)}
          />
          El reclamante es menor de edad
        </label>

        {esMenorDeEdad && (
          <div className="grid gap-4 border-t border-green-v1/20 pt-4 md:grid-cols-2">
            <Campo label="Nombre del padre/madre/apoderado *">
              <input
                required={esMenorDeEdad}
                name="nombre_apoderado"
                className={inputClass}
              />
            </Campo>
            <Campo label="N.° de documento del apoderado *">
              <input
                required={esMenorDeEdad}
                name="documento_apoderado"
                className={inputClass}
              />
            </Campo>
          </div>
        )}
      </fieldset>

      <fieldset className="flex flex-col gap-4 rounded-lg border border-green-v1/30 p-5">
        <legend className="px-2 font-bold text-green-v1">
          3. Detalle de la reclamación
        </legend>

        <div className="flex flex-col gap-2 text-sm text-green-v1 sm:flex-row sm:gap-8">
          <label className="flex items-center gap-2">
            <input
              required
              type="radio"
              name="tipo_reclamo"
              value="Reclamo"
              defaultChecked
            />
            Reclamo (disconformidad con el servicio)
          </label>
          <label className="flex items-center gap-2">
            <input
              required
              type="radio"
              name="tipo_reclamo"
              value="Queja"
            />
            Queja (malestar no relacionado al servicio)
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Campo label="Servicio contratado *">
            <select required name="servicio_contratado" className={inputClass}>
              <option value="">Selecciona una opción</option>
              {SERVICIOS.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </Campo>
          <Campo label="Monto reclamado (S/.) — opcional">
            <input
              type="number"
              min="0"
              step="0.01"
              name="monto_reclamado"
              className={inputClass}
            />
          </Campo>
        </div>

        <Campo label="Detalle del reclamo o queja *">
          <textarea
            required
            name="detalle_reclamo"
            rows={4}
            className={inputClass}
          />
        </Campo>

        <Campo label="Pedido del consumidor *">
          <textarea
            required
            name="pedido_consumidor"
            rows={3}
            className={inputClass}
          />
        </Campo>
      </fieldset>

      <label className="flex items-start gap-2 text-sm text-green-v1">
        <input required type="checkbox" name="acepta_declaracion" className="mt-1" />
        <span>
          Declaro que la información proporcionada es verdadera y he leído la{" "}
          <Link
            href="/politica-de-privacidad"
            className="underline hover:text-brown-v1"
          >
            Política de Privacidad
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className="self-start rounded-lg bg-brown-v1 px-6 py-3 font-century-gothic text-white transition-colors hover:bg-green-v1"
      >
        Enviar reclamo
      </button>
    </form>
  );
}
