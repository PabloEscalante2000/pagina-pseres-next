import { create } from "zustand";

export const useStore = create((set) => ({
    component:"",
    modal:false,
    listD:false,
    listEventos:false,
    setModal:(val) => set({modal:val}),
    setListD:(val) => set({listD:val}),
    setListEventos:(val) => set({listEventos:val}),
    addurl:(str) => set({component:str})
}))