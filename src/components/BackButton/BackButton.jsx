import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // o cualquier ícono que uses

/**
 * Props:
 * - fallback (string): ruta a la que ir si no hay historial previo (opcional)
 * - label (string): texto a mostrar (por defecto "Volver")
 */
export default function BackButton({ fallback = "/", label = "Volver" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (window.history.state && window.history.state.idx > 0) {
        navigate(-1); // vuelve atrás si hay historial
        } else {
        navigate(fallback); // si entraste directo por URL
        }
    };

  return (
    <section id="back-button" className="z-10 relative ">
        <button
        onClick={handleClick}
        className="
            inline-flex items-center gap-2
            active:scale-95
            px-2 text-sm font-medium
            transition-all
        "
        >
            <ArrowLeft size={24} />
            <span>{label}</span>
        </button>
    </section>
  );
}
