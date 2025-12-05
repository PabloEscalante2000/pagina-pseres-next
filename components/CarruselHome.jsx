"use client"

import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Nav from "./Nav";
import { useStore } from "../store/NavStore";

export default function CarruselHome() {

  const addurl = useStore((state) => state.addurl)

  return (
    <>
        <div className='w-full h-full'>
        <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            effect='fade'
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable:true,
            }}
            fadeEffect={{
                crossFade:true
            }}
            speed={800}
            autoplay={{
                delay:6000,
                disableOnInteraction:false
            }}
        >
            <SwiperSlide>
                <div className="h-screen w-full bg-cover bg-center flex flex-col" style={{backgroundImage:`url("/assets/home_img.jpg")`}}>
                    <div className="flex-none">
                        <Nav/>
                    </div>
                    <div className="flex-auto p-5 flex flex-col items-end text-white font-century-gothic justify-center sm:pr-24 pr-8 sm:gap-20">
                        <h1 className="sm:text-5xl text-3xl text-right pb-10 text-white-v1">Acompañamiento integral
                            <span className="block py-4 sm:text-6xl text-4xl">para cada PSER</span></h1>
                        <div className="py-5 flex flex-col gap-5 font-semibold sm:text-2xl text-md">
                            <a className="bg-cream py-3 rounded-xl transition-all hover:scale-95 sm:w-96 w-48 text-center" href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank">Agenda una cita</a>
                            <button className="bg-cream py-3 rounded-xl transition-all hover:scale-95 sm:w-96 w-48 text-center" onClick={() => addurl("servicios")}>Nuestros Servicios</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                <div className="h-screen w-full bg-cover bg-center flex flex-col" style={{backgroundImage:`linear-gradient(rgba(74, 74, 60, 0.26), rgba(74, 74, 60, 0.26)), url(${img_portadaVerano})`}}>
                <div className="flex-none">
                    <Nav/>
                </div>
                    <div className="flex-auto p-5 flex justify-center flex-col items-end text-white-v1 font-century-gothic sm:mr-24">
                        <h1 className="sm:text-8xl text-5xl text-right font-quirk sm:leading-3 leading-4">
                        VERANO
                        <br></br>
                        <span className="sm:text-9xl text-4xl">
                            PARA PSER
                        </span>
                        <br></br>
                        <b className="sm:text-3xl text-xl font-century-gothic">Del 6 de enero al 27 de febrero</b>
                        </h1>
                        <p className="text-left font-century-gothic py-5 sm:text-3xl text-xl">
                        Descubriendo mis talentos con
                        <br></br>
                        <b>mente, alma y cuerpo</b>
                        </p>
                        <div className="py-5 flex gap-5">
                            <a className="bg-brown-v2 p-2 rounded-2xl shadow-lg transition-all hover:bg-brown-v1 px-4 text-center text-md font-semibold" href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank">Agendar una cita</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
            <SwiperSlide>
                <div className="h-screen w-full bg-cover bg-center flex flex-col" style={{backgroundImage:`url("/assets/tercer_slide.webp")`}}>
                <div className="flex-none">
                    <Nav/>
                </div>
                    <div className="flex-auto p-5 flex justify-center flex-col items-end text-white-v1 font-century-gothic sm:mr-24">
                        <h1 className="sm:text-8xl text-5xl text-right font-quirk sm:leading-3 leading-4">
                        UN ESPACIO PARA
                        </h1>
                        <p className=" font-century-gothic py-5 sm:text-6xl text-3xl text-right">
                            aprender a crecer
                        </p>
                        <div className="py-5 flex gap-5">
                            <a className="bg-brown-v2 p-2 rounded-2xl shadow-lg transition-all hover:bg-brown-v1 px-4 text-center text-md font-semibold" href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank">Agendar una cita</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </>
  )
}
