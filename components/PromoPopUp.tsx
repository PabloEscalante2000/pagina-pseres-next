"use client"

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import Image from "next/image";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=51966968791&text=Buenos%20d%C3%ADas,%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios";

  useEffect(() => {
    // Show popup when page loads
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black/70" />
        <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-md">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Promo image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <img
              src={"/assets/biohuerto.jpeg"}
              alt="El Jardín de mis Emociones - Taller de verano 2026"
              className="w-full h-auto"
            />
          </div>

          {/* WhatsApp button - outside image */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>¡Inscríbete ahora!</span>
          </a>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default PromoPopup;