import React, { useEffect, useMemo, useRef, useState } from "react";
import "./MobileCarousel.css";

export default function MobileCarousel({ images = [], className = "" }) {
    const safeImages = useMemo(
        () => (images.length ? images : ["/placeholder.jpg"]),
        [images]
    );
    const scrollerRef = useRef(null);
    const [index, setIndex] = useState(0);

    // Calculá el índice activo al scrollear
    const onScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const i = Math.round(el.scrollLeft / el.clientWidth);
        if (i !== index) setIndex(i);
    };

    // Mantener el slide al redimensionar
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const onResize = () =>
            el.scrollTo({ left: index * el.clientWidth, behavior: "instant" });
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const goTo = (i) => {
        const el = scrollerRef.current;
        if (!el) return;
        setIndex(i);
        el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    };

    return (
        <div className={`w-full select-none ${className}`}>
            {/* Pista scrolleable */}
            <div
                ref={scrollerRef}
                onScroll={onScroll}
                className="
                    relative w-full overflow-x-auto rounded-xl hide-scrollbar
                    flex snap-x snap-mandatory
                    [scrollbar-width:none] [-ms-overflow-style:none]
                    [touch-action:pan-y] // deja hacer scroll vertical de la página
                    "
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {/* Ocultar scrollbar en WebKit */}
                <style>{`.hide-scrollbar::-webkit-scrollbar{ display:none; }`}</style>

                {safeImages.map((src, i) => (
                    <div
                        key={i}
                        className="snap-start shrink-0 w-full h-52  max-h-[150px] sm:h-64 md:h-80 lg:h-[28rem] relative"
                    >
                        {/* Imagen full-bleed */}
                        <img
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="mt-1 py-2 flex items-center justify-center gap-2">
                {safeImages.map((_, i) => {
                    const active = i === index;
                    return (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Ir al slide ${i + 1}`}
                            className={`
                h-2.5 rounded-full transition-all
                ${
                    active
                        ? "w-6 bg-white/90 dark:bg-white"
                        : "w-2.5 bg-white/50 dark:bg-white/40"
                }
                ring-1 ring-black/10 dark:ring-white/40
              `}
                        />
                    );
                })}
            </div>
        </div>
    );
}
