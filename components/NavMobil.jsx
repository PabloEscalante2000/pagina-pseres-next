"use client"

import { List, ListItemButton, Collapse } from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import dataServLinks from '@/public/data/linksServicios.json';
import { useRouter, usePathname } from 'next/navigation';
import {useStore} from '../store/NavStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

export default function NavMobil() {


  const router = useRouter();
  const pathname = usePathname();
  const addurl = useStore((state) => state.addurl)
  const modal = useStore((store) => store.modal)
  const listD = useStore((store) => store.listD)
  const setModal = useStore((store) => store.setModal)
  const setListD = useStore((store) => store.setListD)

  return (
    <nav className={`fixed w-full h-full transition-all ease-in-out duration-1000 z-999 overflow-y-auto bg-brown-v2 ${modal ? "left-0 top-0 opacity-100":"left-full top-8 opacity-0"}`}>
        
        <div className='p-5 pb-0 text-white-v1 text-3xl flex justify-between items-center'>
            <Image src={"/assets/pseres_logo_sincolor.png"} alt='PSERES' width={59} height={25} className='h-[25px] w-auto'/>
            <button onClick={() => setModal(false)} aria-label="Cerrar Nav">
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        </div>

        <List
            sx={{
                bgcolor:"#C39E72",
                color:"#f6f1e1",
                width:"100%",
                height:"100%",
                overflowY:"auto"
            }}
        >
            <ListItemButton onClick={() => {
                router.push("/")
                setModal(false)
            }}>
                <p className='text-[20px] w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>INICIO</p>
            </ListItemButton>
            <ListItemButton onClick={() => setListD(!listD)}>
                <div className='flex justify-between w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>
                <p className='text-[20px]'>SERVICIOS</p>
                {listD ? <ExpandLess/>:<ExpandMore/>}
                </div>
            </ListItemButton>
            <Collapse in={listD} timeout="auto" unmountOnExit>
                <List component="div" disablePadding
                    sx={{
                        fontFamily:"'Century Gothic'",
                        bgcolor:"#C39E72",
                        borderRadius:"14px",
                        color:"#f6f1e1"
                    }}
                >
                    {dataServLinks.map((val,index) => (
                        <ListItemButton sx={{ pl: 4 }} key={index} onClick={() => {
                        router.push(val.path)
                        setModal(false)
                        }}>
                        <p className='text-xl w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>
                            {val.titulo}
                        </p>
                        
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
            <ListItemButton onClick={() => {
                addurl("modelo")
                if(pathname !== "/"){
                    router.push("/")
                }
                setModal(false)
            }}>
                <p className='text-[20px] w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>NUESTRO MODELO</p>
            </ListItemButton>
            <ListItemButton onClick={() => {
                addurl("nosotros")
                if(pathname !== "/"){
                    router.push("/")
                }
                setModal(false)
            }}>
                <p className='text-[20px] w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>NOSOTROS</p>
            </ListItemButton>
            <ListItemButton onClick={() => {
                router.push("/blog")
                setModal(false)
            }}>
                <p className='text-[20px] w-full border border-b-white-v1 border-b border-x-0 border-t-0 pb-3'>BLOG</p>
            </ListItemButton>
        </List>
    </nav>
  )
}
