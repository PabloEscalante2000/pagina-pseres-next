"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import dataServLinks from '@/public/data/linksServicios.json';
import { useStore } from '../store/NavStore';

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();
    const addurl = useStore((state) => state.addurl);
    const setModal = useStore((store) => store.setModal);

    return (
        <nav className="p-8 flex justify-between items-center lg:text-xl text-md font-century-gothic">
            <Image
                src="/assets/pseres_logo.png"
                alt="PSERES"
                width={150}
                height={64}
                className="lg:h-16 h-12 w-auto cursor-pointer"
                onClick={() => {
                    router.push("/");
                }}
                priority
            />
            <ul className="md:flex hidden justify-between max-w-[800px] items-center gap-4 mx-4 text-white-v1 font-semibold flex-auto">
                <li>
                    <Link href={"/"} className={pathname === "/" ? "underline" : ""}>
                        INICIO
                    </Link>
                </li>
                <li className="relative group">
                    <button
                        className={pathname.includes("/servicios") ? "underline" : ""}
                        aria-label="Servicios"
                        onClick={() => {
                            addurl("servicios");
                            if (pathname !== "/") {
                                router.push("/");
                            }
                            setModal(false);
                        }}
                    >
                        SERVICIOS
                    </button>
                    <ul className="absolute h-0 w-40 overflow-y-hidden group-hover:h-fit px-3 bg-green-v1/40 bg-opacity-40 gap-3 flex flex-col transition-all font-medium z-10">
                        {dataServLinks.map((val, index) => (
                            <li className="text-left p-1" key={index}>
                                <Link href={val.path} className={pathname === val.path ? "underline" : ""}>
                                    {val.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li
                    className="cursor-pointer"
                    onClick={() => {
                        addurl("modelo");
                        if (pathname !== "/") {
                            router.push("/");
                        }
                        setModal(false);
                    }}
                >
                    NUESTRO MODELO
                </li>
                <li
                    className="cursor-pointer"
                    onClick={() => {
                        addurl("nosotros");
                        if (pathname !== "/") {
                            router.push("/");
                        }
                    }}
                >
                    NOSOTROS
                </li>
                <li>
                    <Link href={"/"} className={pathname === "/blog" ? "underline" : ""}>
                        BLOG
                    </Link>
                </li>
                <li className="border border-white rounded-lg p-1">
                    <a
                        href="https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                        target="_blank"
                        aria-label="Contáctate con nosotros por whatsapp"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />{" "}
                        ESCRÍBENOS
                    </a>
                </li>
            </ul>
            <button
                aria-label="Desplegar Nav"
                className="md:hidden flex justify-center items-center text-white text-3xl cursor-pointer"
                onClick={() => {
                    setModal(true);
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}
