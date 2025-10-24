import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ProductDetail({ product }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Arreglo de imágenes para el lightbox
    const slides = product.gallery.map((src) => ({ src }));

    return (
        <section className="px-4 py-4 text-gray-800 dark:text-gray-100">
        {/* Nombre del producto */}
        <h2 className="text-lg font-semibold mb-3">{product.name}</h2>

        {/* Imagen principal */}
        <div
            className="w-full h-[220px] sm:h-[280px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center mb-3 cursor-pointer"
            onClick={() => setLightboxOpen(true)}
        >
            <img
            src={product.gallery[activeIndex]}
            alt={product.name}
            className="object-cover w-full h-full"
            />
        </div>

        {/* Miniaturas */}
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-2 hide-scrollbar mb-4">
            {product.gallery.map((img, i) => (
            <div
                key={i}
                onClick={() => {
                setActiveIndex(i);
                setLightboxOpen(true);
                }}
                className={`
                snap-start shrink-0 w-[80px] h-[60px] rounded-lg overflow-hidden 
                bg-gray-100 dark:bg-gray-800 flex items-center justify-center 
                cursor-pointer border-2 transition-all
                ${
                    activeIndex === i
                    ? "border-blue-500"
                    : "border-transparent hover:border-gray-400"
                }
                `}
            >
                <img
                src={img}
                alt={`Vista ${i + 1}`}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>

        {/* Descripción */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 mb-4">
            <p className="text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Precio + botón agregar */}
        <div className="flex items-center justify-between">
            <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Precio</p>
            <p className="text-xl font-semibold">${product.price}</p>
            </div>
            <button
            onClick={() => console.log("Agregado al carrito:", product)}
            className="
                flex items-center justify-center gap-2
                bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                text-white font-semibold px-4 py-2 rounded-full
                transition-all
            "
            >
            <ShoppingCart size={18} />
            Agregar
            </button>
        </div>

        {/* Lightbox */}
        <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides}
            index={activeIndex}
            plugins={[Zoom]}
        />
        </section>
    );
}
