import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function WhIcon(){

    return (
        <>
        <a id="" className="fixed bottom-7 right-7 bg-brown-v2/60 z-50 w-16 h-16 flex justify-center items-center text-white-v1 rounded-xl text-2xl cursor-pointer group border border-brown-v1 bg-opacity-60 shadow-xl transition-all hover:shadow-none hover:bg-opacity-100" href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank" aria-label="Contáctate con nosotros por whatsapp" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} bounce />{" "}
            <p></p>
        </a>
        </>
    )
}