"use client"

import Image from "next/image"
import Link from "next/link"

export default function NSBlock({color, element}) {

  const bgColor = color === "green" ? "bg-green-v1" : "bg-brown-v2"
  const partes = element.titulo.split(":")

  return (
    <div className={color === "brown"? `anim-nsbloq text-brown-v1 bg-brown-v2/40 rounded-lg shadow-md m-auto w-full mx-auto bg-opacity-40`:`anim-nsbloq text-green-v1 bg-green-v2/40 rounded-lg shadow-md m-auto w-full mx-auto bg-opacity-40`}>
    <div className={color === "brown"? `text-brown-v1 m-auto max-w-[1500px] w-full mx-auto bg-opacity-40 sm:px-24 px-8`:`text-green-v1 m-auto max-w-[1500px] w-full mx-auto bg-opacity-40 sm:px-24 px-8`}>
      <div className="flex flex-row lg:justify-start justify-center py-10 lg:flex-nowrap flex-wrap min-w-full gap-5">
        <Image src={element.img} alt={element.titulo} width={384} height={384} className="sm:w-96 sm:h-96 h-auto aspect-square object-cover object-center rounded-xl flex-none"/>
        <div className="sm:pl-8 sm:pt-0 pt-4 flex-auto flex flex-col justify-between sm:gap-0 gap-3">
          <section>
            <h2 className="font-quirk lg:text-6xl text-5xl leading-9 lg:leading-11">{partes[0]}:</h2>
            <h2 className="font-quirk lg:text-6xl text-5xl leading-9 lg:leading-11">{partes[1]}</h2>
            {element.subtitulo ? <span className="font-quirk lg:text-3xl text-xl uppercase lg:leading-7 leading-[0.3rem]">{element.subtitulo}</span>: null}
          </section>

          <section className="lg:text-lg text-sm">
            {element.contenido.map((val,index) =>{
              if(val.tipo === "texto"){
                return (
                <div key={index} className="font-century-gothic flex-auto lg:leading-8 leading-7">
                  {val.data.map((e,index2)=><p key={index2}>{e}</p>)}
                </div>
                )
              } else if(val.tipo === "lista_ol"){

                const cols = val.divisiones > 1 ? `grid-cols-[2fr_3fr]` : `grid-cols-${val.divisiones}`

                return (
                  <ol key={index} className="font-century-gothic list-decimal ml-4 list-outside flex-auto">
                    {val.data.map((e,index2) => (
                      <li className="py-2 lg:leading-8 leading-7" key={index2}>
                        <span>{e.titulo}</span>
                        {e.contenido.length !== 0 ? (
                          <ul className={`list-disc list-outside grid sm:gap-4 gap-2 ml-4 py-2 ${cols} place-content-start w-fit `}>
                            {e.contenido.map((i,index3) => <li className="lg:leading-8 leading-7 px-1" key={index3}>{i}</li>)}
                          </ul>
                        ): null}
                      </li>
                    ))}
                  </ol>
                )
              } else if(val.tipo === "lista_li"){

                return (
                  <ul key={index} className={`font-century-gothic grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 list-disc ml-4 sm:gap-4 gap-2 flex-auto place-content-center list-outside`}>
                    {val.data.map((e,index2) => (
                      <li key={index2}>{e}</li>
                    ))}
                  </ul>
                )
              } else {
                return null
              }
            } 
            )}
        </section>
        <div className="flex md:flex-row
          justify-end items-end gap-5 flex-none font-semibold py-3">
          <Link href={element.path} className={`rounded-xl sm:px-5 sm:py-2 px-4 py-1 sm:text-base text-sm text-white-v1 font-century-gothic underline transition-all hover:scale-95 ${bgColor}`} aria-label="Más información">
            <span className="sm:inline-block hidden underline">Más</span> información
          </Link>
          <a className={`rounded-xl sm:px-5 sm:py-2 px-4 py-1 sm:text-base text-sm text-white-v1 font-century-gothic transition-all hover:scale-95 ${bgColor}`} href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank" aria-label="Agenda una cita" rel="noopener noreferrer">Agenda <span className="sm:inline-block hidden">una Cita</span></a>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}
