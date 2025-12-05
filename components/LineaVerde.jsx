export default function LineaVerde() {
  return (
    <>
        <div className={`bg-cover bg-center w-full aspect-lv sm:relative sm:block hidden sm:bg-none`} style={{backgroundImage:`url("/assets/diseño_linea_verde_v1.png")` }}>
              <div className="bg-brown-v2 shadow-xl bg-opacity-95 sm:h-1/2 h-64 aspect-square rounded-full p-2 sm:m-0 mx-auto my-3 flex justify-center items-center font-semibold sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 transition-all hover:scale-105 left-[20%] top-[60%] ">
                <p className="font-century-gothic sm:text-[1.5vw] text-[5vw]  text-center text-white">Enfoque multidimensional</p>
              </div>
              <div className="bg-brown-v2 shadow-xl bg-opacity-95 sm:h-1/2 h-64 aspect-square rounded-full p-2 sm:m-0 mx-auto my-3 flex justify-center items-center font-semibold sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 transition-all hover:scale-105 left-[40%] top-[40%]">
                <p className="font-century-gothic sm:text-[1.5vw] text-[5vw]  text-center text-white">Programas personalizados</p>
              </div>
              <div className="bg-brown-v2 shadow-xl bg-opacity-95 sm:h-1/2 h-64 aspect-square rounded-full p-2 sm:m-0 mx-auto my-3 flex justify-center items-center font-semibold sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 transition-all hover:scale-105 left-[60%] top-[60%]">
                <p className="font-century-gothic sm:text-[1.5vw] text-[5vw]  text-center text-white">Fomentar el pensamiento
                crítico</p>
              </div>
              <div className="bg-brown-v2 shadow-xl bg-opacity-95 sm:h-1/2 h-64 aspect-square rounded-full p-6 sm:m-0 mx-auto my-3 flex justify-center items-center font-semibold sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 transition-all hover:scale-105 left-[80%] top-[40%]">
                <p className="font-century-gothic sm:text-[1.5vw] text-[5vw] text-center text-white">Acción en momentos
                de crisis</p>
              </div>
            </div>
    </>
  )
}
