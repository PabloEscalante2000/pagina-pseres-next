import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LibroReclamacionesForm from "@/components/LibroReclamacionesForm";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | PSERES",
  description:
    "Registra tu reclamo o queja sobre los servicios de PSERES conforme al Código de Protección y Defensa del Consumidor (Ley N.° 29571).",
};

export default function LibroDeReclamacionesPage() {
  return (
    <div className="bg-white-v1">
      <Nav />

      <section className="bg-green-v1 pt-32 pb-16 sm:px-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white-v1 font-quirk sm:text-7xl text-5xl mb-4">
            LIBRO DE RECLAMACIONES
          </h1>
          <p className="text-brown-v2 font-century-gothic sm:text-xl text-base leading-8">
            Conforme a lo establecido en el Código de Protección y Defensa del
            Consumidor (Ley N.° 29571), PSERES pone a tu disposición este
            Libro de Reclamaciones Virtual para que registres tus reclamos o
            quejas sobre nuestros servicios. Responderemos tu solicitud en un
            plazo máximo de 30 días calendario.
          </p>
        </div>
      </section>

      <section className="bg-white-v1 py-16 sm:px-24 px-8">
        <div className="max-w-4xl mx-auto">
          <LibroReclamacionesForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
