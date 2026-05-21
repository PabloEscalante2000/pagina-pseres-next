"use client";

import Script from "next/script";
import Image from "next/image";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

function trackWhatsAppClick() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Más allá del diagnóstico — Inscripción WhatsApp",
      content_ids: ["mad-2026"],
      currency: "PEN",
      value: 150.0,
    });
    window.fbq("track", "Contact");
  }
}

const modulos = [
  {
    numero: "01",
    titulo: "Neurociencia, Nutrición y Aprendizaje",
    subtitulo: "El cerebro que no recibe lo que necesita",
    clases: [
      {
        fecha: "Mar 23 de junio · 7:30 – 9:30 p.m.",
        tema: "Nutrición y neurodesarrollo: cómo la deficiencia de hierro afecta la atención, la memoria y la conducta en el aula",
        descripcion:
          "Qué le ocurre al cerebro de un niño con anemia crónica y por qué sus conductas se confunden con TDAH. Guía de observación conductual: 8 señales que diferencian déficit nutricional de TDAH.",
      },
      {
        fecha: "Jue 25 de junio · 7:30 – 9:30 p.m.",
        tema: "Estrategias de aula cuando no hay SAE, no hay psicólogo y el apoyo familiar es limitado",
        descripcion:
          "5 ajustes concretos con cero presupuesto. Protocolo de agrupamiento funcional para aulas de 35+ alumnos con perfiles neurodivergentes no diagnosticados.",
      },
    ],
  },
  {
    numero: "02",
    titulo: "Detección Funcional en el Aula",
    subtitulo: "Más allá del diagnóstico que no llega",
    clases: [
      {
        fecha: "Mar 30 de junio · 7:30 – 9:30 p.m.",
        tema: "Observación e identificación: TDAH, TEA, dislexia y altas capacidades",
        descripcion:
          "Perfil observable en aula de cada condición. Herramienta de identificación: ficha de 15 ítems aplicable en una semana sin interrumpir la programación curricular.",
      },
      {
        fecha: "Jue 2 de julio · 7:30 – 9:30 p.m.",
        tema: "Documentación y comunicación con familias y especialistas",
        descripcion:
          "Cómo redactar un informe que un neurólogo pueda usar. Qué decir y qué evitar al comunicar a los padres que su hijo tiene un perfil de aprendizaje diferente.",
      },
    ],
  },
  {
    numero: "03",
    titulo: "Intervención Pedagógica Diferenciada",
    subtitulo: "En contextos de recursos limitados",
    clases: [
      {
        fecha: "Mar 7 de julio · 7:30 – 9:30 p.m.",
        tema: "Adaptaciones curriculares accesibles: qué modificar y cómo implementarlo",
        descripcion:
          "6 modificaciones de evaluación aplicables de inmediato. Cómo adaptar una sesión de 90 minutos para que funcione para el alumno neurotípico, el alumno con TDAH y el alumno con dislexia.",
      },
      {
        fecha: "Jue 9 de julio · 7:30 – 9:30 p.m.",
        tema: "Perfiles invisibles, bienestar docente y plan de continuidad",
        descripcion:
          "TDAH inatento, autismo enmascarado, dislexia compensada y altas capacidades. Construcción de red de apoyo entre docentes. Kit docente completo en formato digital.",
      },
    ],
  },
  {
    numero: "04",
    titulo: "El Recurso Más Limitado Eres Tú",
    subtitulo: "Neurociencia del docente en contextos de sobrecarga",
    clases: [
      {
        fecha: "Sáb 11 de julio · 9:00 a.m. – 12:30 p.m.",
        tema: "Clase Magistral de Cierre — PRESENCIAL",
        descripcion:
          "Protocolo de implementación escalonada. Técnicas de recuperación cognitiva entre clases. Árbol de decisión docente. Entrega de certificados. Auditorio Grupo EADES.",
      },
    ],
  },
];

const paquetes = [
  {
    nombre: "Seminario Individual",
    descripcion: "1 módulo (2 sesiones virtuales)",
    precio: "S/ 50",
    destacado: false,
    items: [
      "2 sesiones virtuales de 2 horas",
      "Materiales del módulo",
    ],
    cta: "Inscribirme",
  },
  {
    nombre: "Virtual + Certificado Físico",
    descripcion: "",
    precio: "S/ 160",
    destacado: false,
    items: [
      "Todo el Paquete Virtual",
      "Certificado impreso con respaldo internacional",
      "(Recojo en instalaciones Grupo EADES)",
    ],
    cta: "Inscribirme",
  },
  {
    nombre: "Paquete Completo",
    descripcion: "Mejor valor",
    precio: "S/ 190",
    destacado: true,
    items: [
      "Todo lo anterior",
      "Clase magistral presencial de cierre",
      "Networking profesional",
      "Certificado impreso con respaldo internacional",
      "(Entrega en mano en el evento)",
    ],
    cta: "Quiero el paquete completo",
  },
];

const avales = [
  {
    imagen: "/assets/aval2.jpeg",
    nombre: "Instituto Raimon Gaja (IRG)",
    pais: "Barcelona, España",
  },
  {
    imagen: "/assets/aval1.png",
    nombre: "IAOTH",
    pais: "Reino Unido",
  },
  {
    imagen: "/assets/aval3.jpg",
    nombre: "European Association of Applied Psychology",
    pais: "Europa",
  },
];

const WHATSAPP_BASE =
  "https://api.whatsapp.com/send?phone=51939491876&text=Hola%2C%20quisiera%20inscribirme%20al%20programa%20M%C3%A1s%20all%C3%A1%20del%20diagn%C3%B3stico";

function CTAButton({
  texto,
  className,
}: {
  texto: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className={
        className ??
        "bg-brown-v1 text-white-v1 font-century-gothic font-bold sm:text-xl text-base px-10 py-4 rounded-xl hover:opacity-90 transition-opacity text-center"
      }
    >
      {texto}
    </a>
  );
}

export default function LandingMasAllaDelDiagnostico() {
  return (
    <div className="bg-white-v1">
      {/* META PIXEL — Purchase event on page load (ViewContent) */}
      <Script id="mad-pixel-viewcontent" strategy="afterInteractive">
        {`
          if (typeof fbq !== 'undefined') {
            fbq('track', 'ViewContent', {
              content_name: 'Más allá del diagnóstico — Landing',
              content_ids: ['mad-2026'],
              content_type: 'product',
              value: 190.00,
              currency: 'PEN'
            });
          }
        `}
      </Script>

      {/* ── HERO ── */}
      <section className="bg-green-v1 min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">

        {/* Columna texto */}
        <div className="flex-1 flex flex-col justify-between px-6 sm:px-12 pt-10 pb-8 lg:py-14">

          {/* Branding */}
          <p className="text-white-v1/50 font-century-gothic text-xs uppercase tracking-widest mb-8">
            Pseres · Grupo EADES · ILUMINA
          </p>

          {/* Título + subtítulo */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <p className="text-brown-v2 font-century-gothic text-xs sm:text-sm uppercase tracking-widest">
              Formación Especializada · Neurociencias Aplicadas al Aula
            </p>
            <h1 className="text-white-v1 font-quirk text-7xl sm:text-8xl lg:text-9xl leading-[0.75]">
              MÁS ALLÁ<br />DEL<br />DIAGNÓSTICO
            </h1>
            <p className="text-white-v1 font-century-gothic text-lg sm:text-xl">
              Neurociencias en el Aula · Junio – Julio 2026
            </p>
            <p className="text-white-v1/80 font-century-gothic text-sm sm:text-base leading-6 max-w-lg">
              Herramientas neurocientiíficas para comprender y acompañar estudiantes
              neurodivergentes — diseñadas para la realidad educativa peruana.
            </p>
          </div>

          {/* Info + CTA */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-wrap gap-2 text-xs font-century-gothic">
              <span className="bg-brown-v1 text-white-v1 px-3 py-1.5 rounded-md font-semibold">
                Inicio 23 jun 2026
              </span>
              <span className="border border-white-v1/30 text-white-v1 px-3 py-1.5 rounded-md">
                Mar y Jue · 7:30 – 9:30 p.m.
              </span>
              <span className="border border-white-v1/30 text-white-v1 px-3 py-1.5 rounded-md">
                Virtual + cierre presencial
              </span>
              <span className="border border-white-v1/30 text-white-v1 px-3 py-1.5 rounded-md">
                18 h académicas
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-white-v1/60 font-century-gothic text-xs">Desde</p>
                <p className="text-white-v1 font-quirk text-4xl leading-none">S/ 150</p>
              </div>
              <CTAButton
                texto="INSCRÍBETE AHORA"
                className="bg-brown-v1 text-white-v1 font-century-gothic font-bold text-base sm:text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-white-v1/40 font-century-gothic text-xs">
              Cuotas disponibles · Consultar por WhatsApp
            </p>
          </div>
        </div>

        {/* Columna imagen */}
        <div className="lg:w-[45%] w-full flex-none flex items-center justify-center bg-green-v1 lg:py-8 py-6 px-6 lg:px-8">
          <Image
            src="/assets/landing_hero.jpeg"
            alt="Más allá del diagnóstico — Neurociencias en el Aula"
            width={800}
            height={1000}
            className="w-full max-h-[90vh] object-contain rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* ── PROPÓSITO / BENEFICIO PRINCIPAL ── */}
      <section className="bg-white-v1 py-16 sm:px-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-green-v1 font-quirk text-4xl sm:text-6xl mb-8 text-center">
            ¿QUÉ VAS A LOGRAR?
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
            {[
              {
                icono: "🧠",
                titulo: "Entender el cerebro en el aula",
                texto:
                  "Traducir neurociencia en estrategias concretas para acompañar a estudiantes con TDAH, TEA, dislexia y altas capacidades.",
              },
              {
                icono: "🔍",
                titulo: "Detectar sin diagnóstico",
                texto:
                  "Usar herramientas de observación funcional para identificar perfiles neurodivergentes incluso cuando el diagnóstico especializado no existe.",
              },
              {
                icono: "🛠",
                titulo: "Intervenir con lo que tienes",
                texto:
                  "Adaptar tu práctica docente con cero presupuesto: ajustes de aula, evaluación diferenciada y protocolos de comunicación con familias.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-green-v2/30 rounded-2xl p-6 flex flex-col gap-3"
              >
                <span className="text-4xl">{item.icono}</span>
                <h3 className="text-green-v1 font-century-gothic font-bold text-lg uppercase">
                  {item.titulo}
                </h3>
                <p className="text-green-v1 font-century-gothic text-base leading-7">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÓDULOS / TEMARIO ── */}
      <section className="bg-green-v1 py-16 sm:px-16 px-6">
        <h2 className="text-white-v1 font-quirk text-4xl sm:text-6xl text-center mb-3">
          PROGRAMA COMPLETO
        </h2>
        <p className="text-brown-v2 font-century-gothic text-base sm:text-lg text-center mb-14">
          4 módulos · 18 horas académicas · Junio – Julio 2026
        </p>

        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {modulos.map((mod, i) => (
            <div key={i} className="bg-white-v1/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-white-v1/25 font-quirk text-7xl leading-none flex-none">
                  {mod.numero}
                </span>
                <div>
                  <h3 className="text-white-v1 font-century-gothic font-bold text-xl sm:text-2xl uppercase leading-tight">
                    {mod.titulo}
                  </h3>
                  <p className="text-brown-v2 font-century-gothic text-sm sm:text-base mt-1">
                    {mod.subtitulo}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {mod.clases.map((clase, j) => (
                  <div key={j} className="border-l-2 border-brown-v2/60 pl-4">
                    <p className="text-brown-v2 font-century-gothic text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">
                      {clase.fecha}
                    </p>
                    <p className="text-white-v1 font-century-gothic font-semibold text-base sm:text-lg mb-1">
                      {clase.tema}
                    </p>
                    <p className="text-white-v1/75 font-century-gothic text-sm sm:text-base leading-6">
                      {clase.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA dentro de la sección programa */}
        <div className="flex justify-center mt-12">
          <CTAButton texto="QUIERO INSCRIBIRME" />
        </div>
      </section>

      {/* ── CALENDARIO RÁPIDO ── */}
      <section className="bg-green-v2/40 py-14 sm:px-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-green-v1 font-quirk text-4xl sm:text-5xl text-center mb-10">
            FECHAS Y HORARIOS
          </h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full font-century-gothic text-sm sm:text-base">
              <thead>
                <tr className="bg-green-v1 text-white-v1">
                  <th className="py-3 px-4 text-left font-semibold">Módulo</th>
                  <th className="py-3 px-4 text-left font-semibold">Fecha</th>
                  <th className="py-3 px-4 text-left font-semibold">Horario</th>
                  <th className="py-3 px-4 text-left font-semibold">Modalidad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["I", "Mar 23 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["I", "Jue 25 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["II", "Mar 30 de junio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["II", "Jue 2 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["III", "Mar 7 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["III", "Jue 9 de julio", "7:30 – 9:30 p.m.", "Virtual"],
                  ["IV", "Sáb 11 de julio", "9:00 a.m. – 12:30 p.m.", "Presencial 🎓"],
                ].map(([mod, fecha, hora, modalidad], i) => (
                  <tr
                    key={i}
                    className={`border-b border-green-v1/10 ${
                      modalidad.includes("Presencial")
                        ? "bg-brown-v1/20 font-semibold"
                        : i % 2 === 0
                        ? "bg-white-v1/60"
                        : "bg-white-v1/30"
                    }`}
                  >
                    <td className="py-3 px-4 text-green-v1 font-bold">{mod}</td>
                    <td className="py-3 px-4 text-green-v1">{fecha}</td>
                    <td className="py-3 px-4 text-green-v1">{hora}</td>
                    <td className="py-3 px-4 text-green-v1">{modalidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-green-v1 font-century-gothic text-sm text-center mt-4 opacity-70">
            Total: 18 horas académicas · 16 HA virtuales + 2 HA presencial de clausura
          </p>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section className="bg-white-v1 py-16 sm:px-16 px-6" id="precios">
        <h2 className="text-green-v1 font-quirk text-4xl sm:text-6xl text-center mb-4">
          INVERSIÓN
        </h2>
        <p className="text-green-v1 font-century-gothic text-base sm:text-lg text-center mb-12 max-w-2xl mx-auto leading-7">
          Elige el paquete que mejor se adapta a tus objetivos. Pago en cuotas disponible — consulta por WhatsApp.
        </p>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 grid-cols-1 gap-5">
          {paquetes.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col gap-4 ${
                pkg.destacado
                  ? "bg-green-v1 ring-4 ring-brown-v1 scale-105"
                  : "bg-green-v2/30"
              }`}
            >
              {pkg.destacado && (
                <span className="bg-brown-v1 text-white-v1 font-century-gothic font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full self-start">
                  ⭐ Mejor valor
                </span>
              )}
              <div>
                <h3
                  className={`font-century-gothic font-bold text-base uppercase leading-tight ${
                    pkg.destacado ? "text-white-v1" : "text-green-v1"
                  }`}
                >
                  {pkg.nombre}
                </h3>
                {pkg.descripcion && (
                  <p
                    className={`font-century-gothic text-xs mt-1 ${
                      pkg.destacado ? "text-brown-v2" : "text-green-v1/70"
                    }`}
                  >
                    {pkg.descripcion}
                  </p>
                )}
              </div>
              <p
                className={`font-quirk text-5xl ${
                  pkg.destacado ? "text-white-v1" : "text-green-v1"
                }`}
              >
                {pkg.precio}
              </p>
              <ul className="flex flex-col gap-2 flex-1">
                {pkg.items.map((item, j) => (
                  <li
                    key={j}
                    className={`font-century-gothic text-sm leading-5 flex gap-2 ${
                      pkg.destacado ? "text-white-v1/90" : "text-green-v1"
                    }`}
                  >
                    <span className="flex-none mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton
                texto={pkg.cta}
                className={`font-century-gothic font-bold text-sm px-5 py-3 rounded-xl text-center hover:opacity-90 transition-opacity ${
                  pkg.destacado
                    ? "bg-brown-v1 text-white-v1"
                    : "bg-green-v1 text-white-v1"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-brown-v1/10 rounded-2xl p-6 text-center">
          <p className="text-green-v1 font-century-gothic text-base leading-7">
            <strong>¿Necesitas pagar en cuotas?</strong> Escríbenos por WhatsApp y coordinamos un plan de pago
            a tu medida. Los cupos son limitados y se asignan por orden de inscripción.
          </p>
          <CTAButton
            texto="CONSULTAR PLAN DE PAGO"
            className="inline-block mt-4 bg-brown-v1 text-white-v1 font-century-gothic font-bold text-base px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          />
        </div>
      </section>

      {/* ── EXPOSITOR ── */}
      <section className="bg-brown-v2 py-16 sm:px-16 px-6">
        <h2 className="text-white-v1 font-quirk text-4xl sm:text-6xl text-center mb-12">
          EQUIPO ACADÉMICO
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col gap-14">
          {/* César Escalante */}
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="sm:w-72 w-56 flex-none">
              <Image
                src="/assets/cesar_evento.jpeg"
                alt="Mag. César Escalante Sifuentes"
                width={288}
                height={360}
                className="rounded-2xl object-cover w-full aspect-3/4"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white-v1/60 font-century-gothic text-sm uppercase tracking-widest">
                Director Académico · CPSP N° 29611
              </p>
              <h3 className="text-white-v1 font-quirk text-3xl sm:text-4xl uppercase">
                Mag. César Escalante Sifuentes
              </h3>
              <p className="text-white-v1 font-century-gothic text-sm sm:text-base leading-7">
                Neuropsicólogo clínico y psicoterapeuta con más de 25 años de experiencia en salud
                mental y 16 años de ejercicio docente. Máster en Neuropsicología en el Ámbito
                Educativo por la Universidad Rey Juan Carlos (España). Formación complementaria en la
                Université Sorbonne Nouvelle (Francia) y la Asociación Psicoanalítica de Buenos Aires.
              </p>
              <p className="text-white-v1 font-century-gothic text-sm sm:text-base leading-7">
                Fundador y Director General del Grupo EADES. Su doble experiencia —clínica y
                pedagógica— fundamenta el enfoque práctico del programa.
              </p>
            </div>
          </div>

          {/* Kevin Cubas */}
          <div className="flex flex-col sm:flex-row-reverse gap-8 items-center">
            <div className="sm:w-72 w-56 flex-none">
              <Image
                src="/assets/kevin_evento.png"
                alt="Lic. Kevin Cubas Verástegui"
                width={288}
                height={360}
                className="rounded-2xl object-cover w-full aspect-3/4"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white-v1/60 font-century-gothic text-sm uppercase tracking-widest">
                Co-Facilitador · CPSP N° 66725
              </p>
              <h3 className="text-white-v1 font-quirk text-3xl sm:text-4xl uppercase">
                Lic. Kevin Cubas Verástegui
              </h3>
              <p className="text-white-v1 font-century-gothic text-sm sm:text-base leading-7">
                Psicólogo clínico especializado en evaluación psicológica y diferenciación de cuadros
                psicopatológicos en población infantil y adolescente. Experiencia directa en
                acompañamiento de niños y adolescentes con TEA y TDAH mediante terapia
                cognitivo-conductual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICACIÓN INTERNACIONAL ── */}
      <section className="bg-green-v1 py-16 sm:px-16 px-6">
        <h2 className="text-white-v1 font-quirk text-4xl sm:text-6xl text-center mb-4">
          CERTIFICACIÓN INTERNACIONAL
        </h2>
        <p className="text-brown-v2 font-century-gothic text-base sm:text-lg text-center mb-12 max-w-3xl mx-auto leading-7">
          Al completar el programa recibirás un certificado con respaldo académico internacional
          avalado por tres organizaciones de reconocida trayectoria.
        </p>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 grid-cols-1 gap-8 mb-12">
          {avales.map((aval, i) => (
            <div
              key={i}
              className="bg-white-v1 rounded-2xl p-6 flex flex-col items-center gap-4"
            >
              <div className="w-28 h-28 flex items-center justify-center">
                <Image
                  src={aval.imagen}
                  alt={aval.nombre}
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-green-v1 font-century-gothic font-bold text-sm uppercase leading-snug">
                  {aval.nombre}
                </h3>
                <p className="text-green-v1/60 font-century-gothic text-xs mt-1">{aval.pais}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pasantía bonus */}
        <div className="max-w-3xl mx-auto bg-brown-v1/20 border border-brown-v2/40 rounded-2xl p-8 text-center">
          <p className="text-brown-v2 font-century-gothic text-xs uppercase tracking-widest mb-2">
            Bonus exclusivo para los mejores participantes
          </p>
          <h3 className="text-white-v1 font-quirk text-3xl mb-4">
            PASANTÍA EN PSERES
          </h3>
          <p className="text-white-v1 font-century-gothic text-base leading-7 mb-2">
            Los participantes con mejor desempeño acceden a 3 jornadas de observación guiada en
            sesiones reales de evaluación e intervención neuropsicológica en el centro Pseres
            (Miraflores). Cupos máximos: 4 personas. Completamente gratuito.
          </p>
        </div>
      </section>

      {/* ── RESPALDO MUNICIPAL ── */}
      <section className="bg-green-v2/40 py-12 sm:px-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-v1 font-century-gothic text-sm uppercase tracking-widest mb-3">
            Respaldo institucional
          </p>
          <p className="text-green-v1 font-century-gothic text-base sm:text-lg leading-7">
            Programa promovido por <strong>ILUMINA</strong> (Asociación Sin Fines de Lucro — Grupo EADES)
            con convenio con la <strong>Municipalidad de San Juan de Miraflores</strong>, lo que garantiza
            pertinencia territorial y articulación con la comunidad educativa local.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-brown-v1 py-20 sm:px-16 px-6 flex flex-col items-center gap-6 text-center">
        <h2 className="text-white-v1 font-quirk text-5xl sm:text-7xl">
          RESERVA TU LUGAR
        </h2>
        <p className="text-white-v1 font-century-gothic text-base sm:text-xl max-w-xl leading-8">
          Cupos limitados · Inicio 23 de junio 2026
          <br />
          Desde <strong>S/ 150</strong> · Pago en cuotas disponible
        </p>
        <CTAButton
          texto="INSCRÍBETE POR WHATSAPP"
          className="bg-white-v1 text-brown-v1 font-century-gothic font-bold text-xl px-12 py-5 rounded-xl hover:bg-green-v2 hover:text-white-v1 transition-colors"
        />
        <p className="text-white-v1/60 font-century-gothic text-sm">
          Responde con tu nombre y el paquete de tu interés. Te confirmamos disponibilidad al instante.
        </p>
      </section>

      {/* Footer mínimo landing */}
      <footer className="bg-green-v1 py-8 px-6 text-center">
        <p className="text-white-v1/50 font-century-gothic text-xs">
          © 2026 Pseres · Grupo EADES · ILUMINA — Asociación Sin Fines de Lucro
          <br />
          Subvencionado por Grupo EADES · Convenio Municipalidad de San Juan de Miraflores
        </p>
      </footer>
    </div>
  );
}
