"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import dataBH from '@/public/data/dataBloqHome.json'

export default function CarruselBlockSm() {

  return (
    <>
        <section className="w-full my-6 sm:hidden block">
        <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect='fade'
            className="cursor-grab active:cursor-grabbing"
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
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
        >
            {dataBH.map((val,i) => (
            <SwiperSlide key={i}>
                <div className="text-[20px] font-century-gothic px-16 w-full h-[301px] rounded-[40px] text-white bg-center bg-cover mx-auto text-center flex justify-center items-center mb-[50px] mt-[50px]" style={{backgroundImage:`linear-gradient(rgba(${i % 2 === 1 ? "169,121,64":"66,66,34"}, 0.60), rgba(${i % 2 === 1 ? "169,121,64":"66,66,34"}, 0.60)), url(${val.img})`}}>
                <h3>{val.titulo.charAt(0).toUpperCase() + val.titulo.slice(1).toLowerCase()}</h3>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </section>
    </>
  )
}
