import Image from "next/image"

export default function LineaNaranja() {
  return (
    <>
        <div className={`bg-size-[75%] bg-no-repeat bg-center w-full aspect-nr relative block sm:hidden sm:bg-none font-semibold leading-tight text-white-v1`} style={{backgroundImage:`url("/assets/linea_naranja.png")` }}>
            <div className="bg-brown-v2 h-[18%] aspect-square rounded-full p-9 flex flex-col justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105 left-[75%] top-[14%] ">
                <Image width={500} height={500} src={"/assets/icono1.png"} alt='Enfoque multidimensional - PSERES' className='w-[12vw] mb-3'/>
                <p className="font-century-gothic text-[3vw]  text-center">Tenemos un enfoque multidimensional</p>
            </div>
            <div className="bg-brown-v2 h-[18%] aspect-square rounded-full p-8 flex flex-col justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105 left-[25%] top-[35%] ">
                <Image width={500} height={500} src={"/assets/icono2.png"} alt='Nuestros Programas son especializados - PSERES' className='w-[12vw] mb-3'/>
                <p className="font-century-gothic text-[3vw]  text-center">Nuestros <br></br> programas son personalizados</p>
            </div>
            <div className="bg-brown-v2 h-[18%] aspect-square rounded-full p-8 flex flex-col justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105 left-[75%] top-[60.5%] ">
                <Image width={500} height={500} src={"/assets/icono3.png"} alt='Promovemos el pensamiento crítico' className='w-[12vw] mb-3'/>
                <p className="font-century-gothic text-[3vw]  text-center">Promovemos<br></br> el pensamiento crítico</p>
            </div>
            <div className="bg-brown-v2 h-[18%] aspect-square rounded-full p-8 flex flex-col justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-105 left-[25%] top-[85%] ">
                <Image width={500} height={500} src={"/assets/icono4.png"} alt='Intervenimos en momentos de crisis' className='w-[12vw] mb-[3vw]'/>
                <p className="font-century-gothic text-[3vw]  text-center">Intervenimos<br></br> en momentos de crisis</p>
            </div>
        </div>
    </>
  )
}
