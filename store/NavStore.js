import { create } from "zustand";

export const useStore = create((set) => ({
    component:"",
    modal:false,
    listD:false,
    setModal:(val) => set({modal:val}),
    setListD:(val) => set({listD:val}),
    addurl:(str) => set({component:str})
}))