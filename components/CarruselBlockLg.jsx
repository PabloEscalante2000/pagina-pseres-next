"use client"

import { useState } from "react";
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import dataBH from '../public/data/dataBloqHome.json'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarruselBlockLg() {

  const [isStart2,setIsStart2] = useState(true);
  const [isEnd2,setIsEnd2] = useState(false);

  return (
    <>
        <section className="w-full my-6 sm:block hidden">
              <Swiper
                    style={{position: "relative"}}
                    className="cursor-grab active:cursor-grabbing"
                    modules={[Navigation]}
                    spaceBetween={30}
                    navigation={{
                      nextEl:".custom-nextv2",
                      prevEl:".custom-prevv2"
                    }}
                    onSlideChange={(swiper) => {
                      setIsStart2(swiper.isBeginning)
                      setIsEnd2(swiper.isEnd)
                    }}
                    onInit={(swiper) => {
                      setIsStart2(swiper.isBeginning)
                      setIsEnd2(swiper.isEnd)
                    }}
                    breakpoints={{
                      4080: {
                        slidesPerView:14
                      },
                      3808: {
                        slidesPerView:13
                      },
                      3536: {
                        slidesPerView:12
                      },
                      3264:{
                        slidesPerView:11
                      },
                      2992:{
                        slidesPerView:10
                      },
                      2720: {
                        slidesPerView:9
                      },
                      2448: {
                        slidesPerView:8
                      },
                      2176:{
                        slidesPerView:7
                      },
                      1904:{
                        slidesPerView:6
                      },
                      1632:{
                        slidesPerView:5
                      },
                      1360:{
                        slidesPerView:4
                      },
                      1088:{
                        slidesPerView:3
                      },
                      816:{
                        slidesPerView:2
                      },
                      544:{
                        slidesPerView:1
                      }
                    }}
              >
                <div className="absolute flex gap-2 top-5 left-12">
                  <div className={`custom-prevv2 text-lg w-10 aspect-square ${isStart2 ? "bg-slate-300/25 text-slate-700":"bg-brown-v2/25 text-brown-v1 "} bg-opacity-25 text-md flex justify-center items-center rounded-lg  hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 left-0 z-50 visible`}>
                      <FontAwesomeIcon icon={faArrowLeft}/>
                  </div>
                  <div className={`custom-nextv2 text-lg w-10 aspect-square ${isEnd2 ? "bg-slate-300/25 text-slate-700":"bg-brown-v2/25 text-brown-v1 "} bg-opacity-25 text-md flex justify-center items-center rounded-lg hover:scale-95 transition-all cursor-pointer -translate-y-1/2 top-1/2 right-0 z-50 visible`}>
                      <FontAwesomeIcon icon={faArrowRight}/>
                  </div>
                </div>
                  {dataBH.map((val,i) => (
                    <SwiperSlide key={i}>
                      <div className="sm:text-[20px] text-sm font-century-gothic p-6 sm:w-[242px] w-[180px] h-[301px] rounded-[40px] text-white bg-center bg-cover mx-auto mt-16 text-center flex justify-center items-center" style={{backgroundImage:`linear-gradient(rgba(${i % 2 === 1 ? "169,121,64":"66,66,34"}, 0.60), rgba(${i % 2 === 1 ? "169,121,64":"66,66,34"}, 0.60)), url(${val.img})`}}>
                        <h3>{val.titulo.charAt(0).toUpperCase() + val.titulo.slice(1).toLowerCase()}</h3>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </section>
    </>
  )
}
