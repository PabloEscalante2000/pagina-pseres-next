import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutora Sombra en Lima para Niños con TEA y TDAH | PSERES",
  description: "Programa de tutora sombra en Lima para niños con TEA y TDAH. Acompañamiento personalizado en el aula, apoyo conductual y coordinación con el colegio. Conoce cómo PSERES selecciona y capacita a sus tutoras sombra.",
  openGraph: {
    title: "Tutora Sombra en Lima para Niños con TEA y TDAH | PSERES",
    description: "Programa de tutora sombra en Lima para niños con TEA y TDAH. Acompañamiento personalizado en el aula, apoyo conductual y coordinación con el colegio.",
    url: "https://pseres.pe/servicios/tutora-sombra-lima/",
    siteName: "PSERES",
    locale: "es_PE",
    type: "website",
  },
};

export default function TutoraSombraPage() {
  return (
    <div className="bg-white-v1">
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 60, 0.35), rgba(74, 74, 60, 0.35)), url('/assets/img_portadaClinica.jpg')`,
        }}
      >
        <div className="flex-none">
          <Nav />
        </div>
        <div className="flex-auto sm:pl-10 pl-12 pb-[10%] flex items-end text-white-v1 font-quirk mr-2">
          <h1 className="sm:text-8xl text-5xl font-quirk sm:ml-24 ml-0 sm:leading-18 leading-10 text-white-v1">
            TUTORA SOMBRA EN LIMA:
            <br />
            ACOMPAÑAMIENTO PARA NIÑOS CON TEA Y TDAH
          </h1>
        </div>
      </div>

      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-8 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-5xl sm:text-4xl text-3xl lg:leading-12 sm:leading-9 leading-6 pb-4">
            ¿QUÉ ES UNA TUTORA SOMBRA?
          </h2>
          <p className="lg:text-lg text-sm lg:leading-8 leading-6 pb-4">
            Una tutora sombra —también llamada sombra escolar o apoyo conductual en aula— es una
            profesional especializada que acompaña a un niño dentro del entorno educativo, brindándole
            el soporte personalizado que necesita para participar activamente en clase, seguir las rutinas
            del aula y relacionarse con sus compañeros de manera adecuada.
          </p>
          <p className="lg:text-lg text-sm lg:leading-8 leading-6 pb-4">
            Este programa es especialmente beneficioso para niños con Trastorno del Espectro Autista
            (TEA), Trastorno por Déficit de Atención e Hiperactividad (TDAH) y otras condiciones de
            neurodiversidad que dificultan el aprendizaje o la conducta en un entorno grupal. La tutora
            sombra no reemplaza al docente: trabaja junto a él, apoyando al niño sin que pierda su
            pertenencia al grupo.
          </p>
        </section>
      </article>

      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-8 mt-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-5xl sm:text-4xl text-3xl lg:leading-12 sm:leading-9 leading-6 pb-4">
            ¿EN QUÉ CONTEXTOS APLICA EL PROGRAMA?
          </h2>
          <div className="lg:text-lg text-sm lg:leading-8 leading-6">
            <p className="pb-3">El programa de tutora sombra de PSERES está diseñado para:</p>
            <ul className="list-disc pl-6 space-y-2 pb-4">
              <li>
                <strong>Contexto escolar:</strong> acompañamiento directo dentro del aula, recreos y
                actividades grupales. La tutora coordina con el docente para adaptar las instrucciones
                y materiales según las necesidades del niño.
              </li>
              <li>
                <strong>Inclusión educativa:</strong> apoyo para niños que están en proceso de
                integración a un colegio regular, facilitando la transición y el desarrollo de
                habilidades de autonomía progresiva.
              </li>
              <li>
                <strong>Contexto terapéutico complementario:</strong> la tutora sombra trabaja en
                coordinación con el equipo clínico de PSERES, aplicando las estrategias definidas
                en el plan de intervención de cada niño.
              </li>
              <li>
                <strong>Niños con diagnóstico de TEA, TDAH o retraso madurativo</strong> que
                necesitan apoyo conductual, regulación emocional o andamiaje cognitivo para acceder
                al currículo escolar.
              </li>
            </ul>
          </div>
        </section>
      </article>

      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-8 mt-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-5xl sm:text-4xl text-3xl lg:leading-12 sm:leading-9 leading-6 pb-4">
            CÓMO PSERES SELECCIONA Y CAPACITA A SUS TUTORAS SOMBRA
          </h2>
          <p className="lg:text-lg text-sm lg:leading-8 leading-6 pb-4">
            En PSERES no trabajamos con cualquier acompañante: nuestras tutoras sombra son
            seleccionadas por su formación en psicología, educación especial o terapia del aprendizaje,
            y pasan por un proceso de inducción supervisado por nuestro equipo clínico (CPsP: 29611).
          </p>
          <p className="lg:text-lg text-sm lg:leading-8 leading-6 pb-3">El proceso incluye:</p>
          <ul className="list-disc pl-6 lg:text-lg text-sm lg:leading-8 leading-6 space-y-2 pb-4">
            <li>Evaluación inicial de competencias en manejo conductual y comunicación con niños.</li>
            <li>Capacitación en los enfoques terapéuticos de PSERES: psicoanalítico, cognitivo-conductual y neurocognitivo.</li>
            <li>Revisión del plan de intervención individualizado del niño antes del inicio del acompañamiento.</li>
            <li>Supervisión clínica continua con el equipo de PSERES para ajustar estrategias.</li>
            <li>Comunicación permanente con los padres y con el colegio para garantizar consistencia entre el hogar, el aula y la terapia.</li>
          </ul>
        </section>
      </article>

      <article className="bg-green-v2/15 bg-opacity-15 text-green-v1 font-century-gothic py-8 mt-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-5xl sm:text-4xl text-3xl lg:leading-12 sm:leading-9 leading-6 pb-4">
            ¿QUÉ INCLUYE EL PROGRAMA DE TUTORA SOMBRA PSERES?
          </h2>
          <ul className="list-disc pl-6 lg:text-lg text-sm lg:leading-8 leading-6 space-y-2 pb-4">
            <li>Evaluación inicial del niño para determinar el nivel de apoyo necesario.</li>
            <li>Diseño de un plan de acompañamiento personalizado con objetivos trimestrales.</li>
            <li>Sesiones de acompañamiento en el aula (horario coordinado con el colegio).</li>
            <li>Registro y monitoreo de conductas, avances y áreas de trabajo.</li>
            <li>Reuniones mensuales con los padres para revisar el progreso.</li>
            <li>Coordinación con los docentes y el departamento psicopedagógico del colegio.</li>
            <li>Plan de retiro progresivo cuando el niño alcanza la autonomía esperada.</li>
          </ul>
        </section>
      </article>

      <article className="bg-brown-v2/15 bg-opacity-15 text-brown-v1 font-century-gothic py-8 mt-3 rounded-xl shadow-lg">
        <section className="max-w-[1500px] mx-auto sm:px-24 px-8">
          <h2 className="font-quirk lg:text-5xl sm:text-4xl text-3xl lg:leading-12 sm:leading-9 leading-6 pb-4">
            PREGUNTAS FRECUENTES SOBRE LA TUTORA SOMBRA
          </h2>
          <div className="space-y-6 lg:text-lg text-sm lg:leading-8 leading-6">
            <div>
              <h3 className="font-semibold pb-1">¿A partir de qué edad se recomienda el acompañamiento con tutora sombra?</h3>
              <p>
                El programa puede iniciarse desde los 3 años, cuando el niño comienza el nivel inicial.
                Es especialmente útil en la etapa preescolar y primaria, aunque también se aplica en
                secundaria según las necesidades del estudiante.
              </p>
            </div>
            <div>
              <h3 className="font-semibold pb-1">¿El colegio debe estar de acuerdo para que pueda entrar una tutora sombra?</h3>
              <p>
                Sí. PSERES acompaña a las familias en el proceso de presentación y coordinación con la
                institución educativa. En Lima, la inclusión educativa está respaldada por la normativa
                peruana (Decreto Legislativo 1384 y normas del MINEDU sobre educación inclusiva).
              </p>
            </div>
            <div>
              <h3 className="font-semibold pb-1">¿Es necesario tener un diagnóstico previo para acceder al programa?</h3>
              <p>
                No siempre. Si aún no tienes un diagnóstico formal, podemos orientarte hacia una
                evaluación psicológica express para determinar las necesidades de tu hijo antes de
                iniciar el programa de acompañamiento.
              </p>
            </div>
          </div>
        </section>
      </article>

      <div className="max-w-[1500px] mx-auto sm:px-24 px-8 py-10 text-center">
        <h2 className="font-quirk text-green-v1 lg:text-4xl text-3xl pb-4">
          ¿Tu hijo necesita una tutora sombra en Lima?
        </h2>
        <p className="text-brown-v1 font-century-gothic lg:text-lg text-sm lg:leading-8 leading-6 pb-6 max-w-2xl mx-auto">
          Contáctanos para conocer el programa completo, evaluar las necesidades de tu hijo y coordinar
          el inicio del acompañamiento con nuestro equipo especializado en TEA y TDAH.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20el%20programa%20de%20tutora%20sombra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-green-v1 text-white-v1 font-century-gothic font-semibold transition-all hover:scale-95"
          >
            Consultar por WhatsApp
          </a>
          <Link
            href="/servicios/evaluaciones-especializadas"
            className="px-8 py-3 rounded-lg bg-brown-v2 text-white-v1 font-century-gothic font-semibold transition-all hover:scale-95"
          >
            Ver Evaluaciones Previas
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
