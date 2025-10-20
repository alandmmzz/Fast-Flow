// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // opcional, para animaciones suaves
import { Menu, X } from "lucide-react"; // íconos livianos (npm install lucide-react)
import './NavBar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-md flex justify-between items-center px-4 py-3 z-50">
        {/* Botón menú */}
        <button onClick={() => setOpen(true)} className="p-2 bg-transparent border-none cursor-pointer">
          <Menu size={28} />
        </button>

        {/* Logo */}
        <img
          src="assets/logos/blanco.png"
          alt="Logo"
          className="h-8 object-contain select-none"
        />
      </nav>

      {/* Offcanvas */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Panel lateral */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-50 p-6 flex flex-col gap-6"
            >
              {/* Cerrar */}
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-4 "
              >
                <X size={24} />
              </button>

              {/* Enlaces */}
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <a href="#products" onClick={() => setOpen(false)}>
                  Productos
                </a>
                <a href="#categories" onClick={() => setOpen(false)}>
                  Categorias
                </a>
                <a href="#aboutus" onClick={() => setOpen(false)}>
                  Nosotros
                </a>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contacto
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
