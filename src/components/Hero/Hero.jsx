import { useEffect, useRef } from "react";

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let timeout;

    const applyTransform = (x, y) => {
      const rotateX = Math.max(-10, Math.min(10, y));
      const rotateY = Math.max(-10, Math.min(10, x));

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      image.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.3)`;
    };

    // 📱 Giroscopio
    const handleOrientation = (e) => {
      const x = e.gamma / 4; // izquierda / derecha
      const y = e.beta / 4; // adelante / atrás
      clearTimeout(timeout);
      timeout = setTimeout(() => applyTransform(x, y), 10);
    };

    // 🖱️ Parallax con mouse
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      clearTimeout(timeout);
      timeout = setTimeout(() => applyTransform(x, -y), 10);
    };

    // 🔄 Reset
    const resetTransform = () => {
      image.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      image.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
    };

    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);
    window.addEventListener("orientationchange", resetTransform);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTransform);
      window.removeEventListener("orientationchange", resetTransform);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 px-6 py-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-sm z-10">
            <h1 className="text-4xl font-light leading-tight mb-3">
                Dale <span className="font-semibold text-white">Flow</span> a tu{" "}
                <span className="font-semibold text-white">hogar</span>
            </h1>
            <p className="text-gray-400 mb-6 text-sm">
                Las mejores ofertas en tecnología
            </p>
            <a
            href="/products"
            className="text-orange-500 font-medium text-sm hover:underline"
            >
                Ver productos →
            </a>
        </div>

        <div className="relative mt-8 sm:mt-0 sm:ml-10">
            <img
            ref={imageRef}
            src="/assets/img/hero-image.png"
            alt="Electrodomésticos modernos"
            className="w-[260px] sm:w-[340px] transition-transform duration-100 ease-out will-change-transform rounded-xl"
            />
        </div>
    </section>
  );
}
