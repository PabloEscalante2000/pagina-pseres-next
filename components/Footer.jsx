import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-v1 p-5 text-white font-century-gothic text-sm sm:px-24 ">
        <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
                <Image src={'/assets/pseres_hoja_verde.png'} alt="PSERES" className='h-10 mb-3 -ml-3' width={150} height={50} sizes="100vw"/>
                <p className='pb-3'>
                    <FontAwesomeIcon icon={faEnvelope}/>{" "}
                    pseresperu@gmail.com
                </p>
                <p className=''>
                    <FontAwesomeIcon icon={faLocationDot}/>{" "}
                    General Silva 570 - Miraflores
                </p>
            </div>
            <div className='space-y-2 flex flex-col justify-end'>
                <p>
                    <FontAwesomeIcon icon={faWhatsapp}/>{" "}
                    +51 966 968 791
                </p>
                <p>
                    <FontAwesomeIcon icon={faInstagram}/>{" "}
                    @centropseres.pe
                </p>
                <p>
                    <FontAwesomeIcon icon={faFacebook}/>{" "}
                    Centro Pseres: Psicoterapia y Psicoeducación
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <Link
                    href="/politica-de-privacidad"
                    className="text-white font-century-gothic text-sm border border-white/40 rounded-lg px-4 py-2 hover:bg-white hover:text-brown-v1 transition-colors"
                >
                    Política de privacidad y cookies
                </Link>
                <Link
                    href="/libro-de-reclamaciones"
                    className="text-white font-century-gothic text-sm border border-white/40 rounded-lg px-4 py-2 hover:bg-white hover:text-brown-v1 transition-colors"
                >
                    Libro de reclamaciones
                </Link>
            </div>
        </div>
    </footer>
  )
}
