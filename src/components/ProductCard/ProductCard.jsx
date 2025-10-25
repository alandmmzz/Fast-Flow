import React from "react";
import { ShoppingCart } from "lucide-react"; // podés usar el ícono que quieras o sacarlo
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";

/**
 * Props:
 * - image (string): URL de la imagen del producto
 * - name (string): nombre del producto
 * - price (string | number): precio del producto
 * - onAdd (function): callback al hacer click en "Agregar"
 */

export default function ProductCard({id, image, name, price, display }) {
    const isGrid = display === "grid";
    const { addToCart } = useCart();

    return (
        <Link to={`/product/${id}`} >
            <div
            className={`
                ${isGrid ? "w-full sm:w-[200px]" : "w-[160px] sm:w-[180px]"}
                shrink-0 snap-start h-full
                bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
                border border-gray-100 dark:border-gray-700
                shadow-sm hover:shadow-md transition-all duration-200
                active:scale-[0.97]
            `}
            >
                <div className="relative w-full h-[140px] sm:h-[160px]">
                    <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    draggable={false}
                    />
                </div>

                <div className="p-3 flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${price}</p>

                    <button
                    onClick={(e) => {
                        e.preventDefault(); // evita que el Link se dispare
                        addToCart({ id, image, name, price });
                        toast.success(`${name} fue agregado al carrito 🛒`);
                    }}
                    className="
                        mt-2 flex items-center justify-center gap-1
                        bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                        text-white text-sm font-medium rounded-md py-1.5 transition-all
                    "
                    >
                        <ShoppingCart size={16} />
                    Agregar
                    </button>
                </div>
            </div>
        </Link>
    );
}
