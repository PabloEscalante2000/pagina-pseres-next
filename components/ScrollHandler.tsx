"use client";

import { useEffect } from "react";
import { useStore } from "@/store/NavStore";

export default function ScrollHandler() {
  const component = useStore((state) => state.component);
  const addurl = useStore((state) => state.addurl);

  useEffect(() => {
    if (component) {
      const element = document.getElementById(component);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      addurl(""); // Resetea el estado para evitar scrolls no deseados
    }
  }, [component, addurl]);

  return null; // Este componente no renderiza nada visible
}

