import React, { useEffect, useMemo, useRef, useState } from "react";

export default function MobileCarousel({ images = [], className = "" }) {
  const safeImages = useMemo(
    () => (images.length ? images : ["/placeholder.jpg"]),
    [images]
  );
  const scrollerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);

  // mantener index actualizado dentro del intervalo
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // actualizar índice al scrollear manualmente
  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  // ir a un slide específico
  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    setIndex(i);
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  // 🧩 auto-slide estable
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let userInteracting = false;

    const nextSlide = () => {
      if (userInteracting) return; // pausa si el usuario está tocando
      const next = (indexRef.current + 1) % safeImages.length;
      goTo(next);
    };

    const interval = setInterval(nextSlide, 6000);

    const handleTouchStart = () => (userInteracting = true);
    const handleTouchEnd = () => (userInteracting = false);
    const handleMouseDown = () => (userInteracting = true);
    const handleMouseUp = () => (userInteracting = false);

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);

    return () => {
      clearInterval(interval);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
    };
  }, [safeImages.length]);

  // mantener el slide centrado en resize
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onResize = () =>
      el.scrollTo({ left: index * el.clientWidth, behavior: "instant" });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <div className={`w-full select-none ${className}`}>
      {/* pista */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="
          relative w-full overflow-x-auto rounded-xl hide-scrollbar
          flex snap-x snap-mandatory
          [scrollbar-width:none] [-ms-overflow-style:none]
          [touch-action:pan-x]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar{display:none;}`}</style>

        {safeImages.map((src, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-full h-52 sm:h-64 md:h-80 lg:h-[28rem] relative"
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-1 py-2 flex items-center justify-center gap-2">
        {safeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-white/90 dark:bg-white"
                : "w-2.5 bg-white/50 dark:bg-white/40"
            } ring-1 ring-black/10 dark:ring-white/40`}
          />
        ))}
      </div>
    </div>
  );
}
