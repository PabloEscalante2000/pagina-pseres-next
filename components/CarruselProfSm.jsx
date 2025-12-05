import dataProfesional from '../public/data/profesionales.json';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from 'next/image';

export default function CarruselProfSm() {

  return (
    <>
        <div className="w-full relative sm:hidden block">
        <Swiper
            modules={[Navigation,Pagination,EffectFade]}
            effect='fade'
            className='cursor-grab active:cursor-grabbing'
            spaceBetween={30}
            navigation
            slidesPerView={1}
            pagination={{
                clickable:true,
            }}
            fadeEffect={{
                crossFade:true
            }}
            speed={800}
        >
            {dataProfesional.map((val,index) => (
            <SwiperSlide key={index}>
            <div  className=" bg-green-v2 rounded-[40px] w-[70%] bg-opacity-60 m-auto p-5 mb-[50px] mt-[50px]">
                <Image width={300} height={300} src={val.foto} alt={val.nombre} className={`object-cover h-56 w-full rounded-lg m-auto ${index === 0 ? "object-[0%_40%]" : index === 1 ?"object-[0%_20%]": index === 2 ? "object-[0%_30%]":"object-[0%_5%]"}`} loading='lazy'/>
                <h3 className="text-green-v1 font-quirk text-3xl text-center m-auto uppercase pt-3 -pb-2 ">{val.nombre}</h3>
                <h3 className="text-green-v1 font-quirk text-xl text-center m-auto uppercase ">{val.span}</h3>
                <ul className="list-disc ml-8 space-y-2 font-century-gothic text-green-v1 text-xs">
                    {val.data.map((e,index2) => (
                        <li key={index2}>{e}</li>
                    ))}
                </ul>
            </div>
            </SwiperSlide>
            ))}
            <div className='h-10'></div>
            </Swiper>
        </div>
    </>
  )
}
