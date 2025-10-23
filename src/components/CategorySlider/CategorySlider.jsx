import React, { useRef } from "react";

export default function CategorySlider({ categories = [] }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="my-6 px-4 overflow-hidden w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Categorías</h2>
        <div className="relative w-full">
        {/* Botones opcionales para escritorio */}
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
            <div
                key={i}
                className="
                shrink-0 snap-start w-[120px] sm:w-[150px]
                flex flex-col items-center text-center
                bg-white dark:bg-gray-900 rounded-xl
                border border-gray-100 dark:border-gray-700
                shadow-sm hover:shadow-md
                transition-all duration-200 active:scale-95
                "
            >
                <div className="w-full h-[100px] sm:h-[120px] relative overflow-hidden rounded-t-xl">
                <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                </div>
                <p className="py-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                {cat.title}
                </p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
