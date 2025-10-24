import React, { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";

/**
 * Uso:
 * <ProductSlider
 *   products={[
 *     { name: "Heladera No Frost", image: "/imgs/products/fridge1.jpg", price: "18.990" },
 *     { name: "Smart TV 50'' 4K", image: "/imgs/products/tv1.jpg", price: "22.490" },
 *     ...
 *   ]}
 *   onAddToCart={(product) => console.log("Agregar", product)}
 * />
 */

export default function ProductSlider({title, products = [], onAddToCart }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="my-6 overflow-hidden w-full mx-auto">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="relative w-full">
        {/* Flechas visibles en desktop */}
        <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 z-10 hover:bg-white"
        >
            ◀
        </button>
        <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow p-2 z-10 hover:bg-white"
        >
            ▶
        </button>

        <div
            ref={scrollRef}
            className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar
            px-2 pb-2
            "
        >
            {products.map((p, i) => (
            <ProductCard
                key={i}
                id={p.id}
                image={p.image}
                name={p.name}
                price={p.price}
                display="slider"
            />
            ))}
        </div>
        </div>
    </section>
  );
}
