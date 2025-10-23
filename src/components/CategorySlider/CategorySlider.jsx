import React, { useRef } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategorySlider({ categories = [] }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="my-6 overflow-hidden w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Categorías</h2>
      <div className="relative w-full">
        {/* Botones de scroll para desktop */}
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

        {/* Contenedor scrolleable */}
        <div
          ref={scrollRef}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar
            px-2 pb-2
          "
        >
          {categories.map((cat, i) => (
            <CategoryCard key={i} name={cat.name} image={cat.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
