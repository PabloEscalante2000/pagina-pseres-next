import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad y Cookies | PSERES",
  description:
    "Conoce cómo PSERES recopila, usa y protege tu información personal, así como el uso de cookies y el Pixel de Meta en nuestro sitio web.",
};

const secciones = [
  {
    titulo: "1. Responsable del tratamiento",
    contenido: [
      "El responsable del tratamiento de los datos personales recabados a través de este sitio web es PSERES, centro de psicoterapia y psicoeducación, con domicilio en Miraflores, Lima, Perú.",
      "Correo de contacto: pseres.pe@gmail.com",
    ],
  },
  {
    titulo: "2. Datos personales que recopilamos",
    contenido: [
      "Recopilamos información en las siguientes situaciones:",
      "• Cuando nos contactas por WhatsApp o correo electrónico: nombre, número de teléfono y cualquier información que compartas voluntariamente en el mensaje.",
      "• Cuando navegas por el sitio web: dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión y datos de comportamiento de navegación, obtenidos a través de cookies y herramientas de análisis.",
    ],
  },
  {
    titulo: "3. Finalidad del tratamiento",
    contenido: [
      "Utilizamos tus datos para:",
      "• Responder tus consultas e inscribirte en nuestros servicios o eventos.",
      "• Mejorar la experiencia de navegación en el sitio web.",
      "• Medir el rendimiento de nuestras páginas y campañas publicitarias.",
      "• Mostrarte anuncios relevantes en plataformas como Facebook e Instagram a través del Pixel de Meta.",
    ],
  },
  {
    titulo: "4. Base legal del tratamiento",
    contenido: [
      "El tratamiento de tus datos se realiza sobre la base de tu consentimiento al navegar en este sitio y aceptar el uso de cookies, así como en el interés legítimo de PSERES para mejorar sus servicios y comunicaciones.",
    ],
  },
  {
    titulo: "5. Política de cookies",
    contenido: [
      "Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas una página web. Las usamos para garantizar el funcionamiento correcto del sitio, analizar el tráfico y personalizar la experiencia.",
      "Tipos de cookies que utilizamos:",
      "• Cookies técnicas o necesarias: imprescindibles para el funcionamiento básico del sitio. No requieren consentimiento.",
      "• Cookies analíticas: nos permiten conocer cómo los usuarios interactúan con el sitio (páginas visitadas, tiempo de navegación, errores). Utilizamos herramientas como Google Analytics o similares.",
      "• Cookies de marketing o publicidad: utilizadas para mostrar anuncios personalizados en redes sociales y otras plataformas. Incluyen el Pixel de Meta (Facebook/Instagram).",
      "Al continuar navegando en nuestro sitio, aceptas el uso de cookies conforme a esta política. Puedes configurar o deshabilitar las cookies desde la configuración de tu navegador, aunque esto puede afectar la funcionalidad del sitio.",
    ],
  },
  {
    titulo: "6. Pixel de Meta (Facebook Pixel)",
    contenido: [
      "Nuestro sitio web utiliza el Pixel de Meta, una herramienta de análisis proporcionada por Meta Platforms, Inc. Esta tecnología nos permite:",
      "• Medir la efectividad de nuestros anuncios en Facebook e Instagram.",
      "• Crear audiencias personalizadas para mostrar publicidad relevante a personas que han visitado nuestro sitio.",
      "• Rastrear acciones realizadas en el sitio web (como visitar una página o hacer clic en un botón de contacto).",
      "El Pixel de Meta puede recopilar información como tu dirección IP, tipo de navegador, páginas visitadas y, si tienes una cuenta activa en Facebook o Instagram, puede asociar esta actividad con tu perfil.",
      "Meta actúa como corresponsable del tratamiento de estos datos. Puedes consultar la política de privacidad de Meta en: https://www.facebook.com/privacy/policy/",
      "Si no deseas que el Pixel de Meta recopile tus datos, puedes:",
      "• Instalar la extensión de navegador \"Facebook Opt-out\" disponible en https://www.facebook.com/help/568137493302217",
      "• Ajustar tus preferencias de anuncios desde tu cuenta de Facebook en Configuración > Anuncios.",
      "• Deshabilitar las cookies de terceros desde la configuración de tu navegador.",
    ],
  },
  {
    titulo: "7. Transferencia de datos a terceros",
    contenido: [
      "No vendemos ni cedemos tus datos personales a terceros. Únicamente compartimos información con proveedores de servicios necesarios para el funcionamiento del sitio (como Meta Platforms para el Pixel de Meta), quienes actúan bajo sus propias políticas de privacidad.",
    ],
  },
  {
    titulo: "8. Conservación de los datos",
    contenido: [
      "Los datos personales se conservan durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados o mientras exista una relación con PSERES. Los datos de navegación recogidos por cookies se conservan según los plazos definidos por cada herramienta utilizada.",
    ],
  },
  {
    titulo: "9. Tus derechos",
    contenido: [
      "De acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, tienes derecho a:",
      "• Acceder a los datos personales que tenemos sobre ti.",
      "• Rectificar datos inexactos o incompletos.",
      "• Suprimir tus datos cuando ya no sean necesarios o retires tu consentimiento.",
      "• Oponerte al tratamiento de tus datos en determinadas circunstancias.",
      "Para ejercer cualquiera de estos derechos, escríbenos a: pseres.pe@gmail.com",
    ],
  },
  {
    titulo: "10. Cambios en esta política",
    contenido: [
      "PSERES se reserva el derecho de actualizar esta política en cualquier momento. Cualquier cambio relevante será publicado en esta misma página con la fecha de última actualización.",
      "Última actualización: abril de 2025.",
    ],
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="bg-white-v1">
      <Nav />

      {/* ENCABEZADO */}
      <section className="bg-green-v1 pt-32 pb-16 sm:px-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white-v1 font-quirk sm:text-7xl text-5xl mb-4">
            POLÍTICA DE PRIVACIDAD Y COOKIES
          </h1>
          <p className="text-brown-v2 font-century-gothic sm:text-xl text-base leading-8">
            En PSERES nos comprometemos a proteger tu privacidad y a ser transparentes sobre cómo
            usamos tu información y las tecnologías de seguimiento en nuestro sitio web.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {secciones.map((seccion, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-green-v1 font-century-gothic font-bold sm:text-2xl text-xl">
                {seccion.titulo}
              </h2>
              <div className="flex flex-col gap-3">
                {seccion.contenido.map((parrafo, i) => (
                  <p
                    key={i}
                    className="text-green-v1 font-century-gothic sm:text-base text-sm leading-7"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
