import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

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
                    Pasaje El Pacayar 149, La Aurora - Miraflores
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
            <section className='flex flex-col justify-center items-center'>
                <Image src={'/assets/libro.png'} alt='Libro de reclamaciones' width={40} height={40} className='h-8'/>
                <div className='w-28 flex place-content-center'>
                    <p className='text-center leading-4'>
                        Libro de reclamaciones
                    </p>
                </div>
            </section>
        </div>
    </footer>
  )
}
