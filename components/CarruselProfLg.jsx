"use client"

import { useState } from 'react'
import dataProfesional from '../public/data/profesionales.json';
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function CarruselProfLg() {
 
    const [isStart,setIsStart] = useState(true);
    const [isEnd,setIsEnd] = useState(false);

  
    return (
    <>
        <div className="w-full relative sm:block hidden">
        <Swiper
            style={{position: "relative"}}
            modules={[Navigation]}
            spaceBetween={20}
            navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
            }}
            onSlideChange={(swiper) => {
            setIsStart(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
            }}
            onInit={(swiper) => {
            setIsStart(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
            }}
            className='cursor-grab active:cursor-grabbing'
            breakpoints={{
            1500: {
                slidesPerView: 3, // Mostrar 2 elementos para pantallas mayores a 1000px
            },
            1000:{
                slidesPerView:2
            },
            500: {
                slidesPerView: 1, // Mostrar 1 elemento para pantallas menores o iguales a 1000px
            },
            }}
        >
            <div className="absolute flex gap-2 top-5 left-12">
            <button className={`custom-prev text-lg w-10 aspect-square ${isStart ? "bg-slate-300/25 text-slate-700":"bg-brown-v2/25 text-brown-v1 "} bg-opacity-25 text-md flex justify-center items-center rounded-lg  hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 left-0 z-50 visible`} aria-label='Profesional previo'>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <button aria-label='Siguiente Profesional' className={`custom-next text-lg w-10 aspect-square ${isEnd ? "bg-slate-300/25 text-slate-700":"bg-brown-v2/25 text-brown-v1 "} bg-opacity-25 text-md flex justify-center items-center rounded-lg hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 right-0 z-50 visible`}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
            </div>
            {dataProfesional.map((val,index) => (
            <SwiperSlide key={index}>
            <div  className="mt-16 sm:p-8 p-2 bg-green-v2/60 rounded-[40px] w-fit bg-opacity-60 h-[650px] m-auto">
                <Image width={300} height={300} src={val.foto} alt={val.nombre} className={`object-cover sm:w-96 w-64 h-72 rounded-lg m-auto ${index === 0 ? "object-[0%_50%]" : index === 1 ?"object-[0%_20%]": index === 2 ? "object-[0%_30%]":"object-[0%_5%]"}`}/>
                <h3 className="text-green-v1 font-quirk sm:text-5xl text-4xl text-center mx-auto uppercase pt-1 -pb-2 ">{val.nombre}</h3>
                <p className="text-green-v1 font-quirk sm:text-2xl text-xl text-center mx-auto uppercase ">{val.span}</p>
                <ul className="list-disc ml-8 space-y-2 font-century-gothic text-green-v1 sm:text-md sm:text-[16px] text-sm sm:w-96 w-64">
                {val.data.map((e,index2) => (
                <li key={index2}>{e}</li>
                ))}
                </ul>
            </div>
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
  )
}
